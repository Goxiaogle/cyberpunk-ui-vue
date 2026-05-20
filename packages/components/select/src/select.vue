<script setup lang="ts">
/**
 * CpSelect - 赛博朋克风格下拉选择器
 * 支持多种尺寸、形态变体、可搜索/可清空
 * 浮层定位基于 @floating-ui/dom，自动处理翻转、越界、跟随触发器位置
 */
import { ref, computed, inject, watch, onMounted, onBeforeUnmount, nextTick, useSlots, type CSSProperties } from 'vue'
import { computePosition, autoUpdate, flip, shift, offset, size, type Placement } from '@floating-ui/dom'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX, DIALOG_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import { registerOverlay } from '@cyberpunk-vue/components/utils'
import { selectProps, selectEmits, type SelectOption } from './select'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Select`,
})

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)
const slots = useSlots()

const ns = useNamespace('select')
const formContext = inject(formContextKey, undefined)
const dialogContext = inject(DIALOG_CONTEXT_KEY, undefined)
const isDisabled = computed(() => props.disabled || formContext?.disabled.value || false)

// Unique id for this instance — used to distinguish self from others in the mutual-close event
const uid = Symbol()
const SELECT_OPEN_EVENT = 'cp:select-open'

// 尺寸预设映射
const sizeMap = { sm: 28, md: 36, lg: 44 }

// 视口边界检测的间距 (px)
const VIEWPORT_PADDING = 8
const POPPER_LEAVE_DURATION = 150

// 内部状态
const triggerRef = ref<HTMLElement | null>(null)
const popperRef = ref<HTMLElement | null>(null)
const filterInputRef = ref<HTMLInputElement | null>(null)
const inlineInputRef = ref<HTMLInputElement | null>(null)

const visible = ref(false)
const popperRendered = ref(false)
const popperOpen = ref(false)
const filterQuery = ref('')
const hoverIndex = ref(-1)
const isClearing = ref(false)
const actualPlacement = ref<Placement>(props.placement)
const dynamicMaxHeight = ref(props.maxHeight)
const popperPosition = ref({ x: 0, y: 0, width: 0 })
const popperZIndex = ref(props.zIndex)

const isInlineSearch = computed(() => props.inline && props.filterable)
const resolvedStackPriority = computed(() => props.stackPriority ?? dialogContext?.stackPriority.value ?? 0)

// 当前选中
const selectedOption = computed(() => props.options.find(opt => opt.value === props.modelValue))
const displayLabel = computed(() => selectedOption.value?.label || '')

// 输入框显示值 (行内搜索: 展开时显示查询词，关闭时显示选中项)
const inputValue = computed({
  get: () => (visible.value ? filterQuery.value : displayLabel.value),
  set: (val) => {
    filterQuery.value = val
  },
})

// 过滤后的选项
const filteredOptions = computed(() => {
  if (!props.filterable || !filterQuery.value) return props.options
  const query = filterQuery.value.toLowerCase()
  return props.options.filter(opt => opt.label.toLowerCase().includes(query))
})

const hasValue = computed(() => props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined)
const showClear = computed(() => props.clearable && !isDisabled.value && hasValue.value)

const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', isDisabled.value),
  ns.is('active', visible.value),
  ns.is('clearable', showClear.value),
  ns.is('clearing', isClearing.value),
  ns.is('inline', isInlineSearch.value),
  ns.is('custom-color', !!props.color),
  ns.is('custom-size', !isPresetSize(props.size)),
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-select-custom-color'] = props.color
    style['--cp-select-custom-color-light'] = `color-mix(in srgb, ${props.color} 20%, transparent)`
  }
  if (props.inactiveColor) style['--cp-select-inactive-color'] = props.inactiveColor
  if (props.placeholderColor) style['--cp-select-placeholder-color'] = props.placeholderColor
  if (!isPresetSize(props.size)) style['--cp-select-height'] = normalizeSize(props.size, sizeMap)
  if (props.clearDuration !== 150) style['--cp-select-clear-duration'] = `${props.clearDuration}ms`
  if (props.width) style['--cp-select-width'] = typeof props.width === 'number' ? `${props.width}px` : props.width
  return style
})

const popperStyle = computed<CSSProperties>(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  transform: `translate3d(${Math.round(popperPosition.value.x)}px, ${Math.round(popperPosition.value.y)}px, 0)`,
  width: `${popperPosition.value.width}px`,
  maxHeight: `${dynamicMaxHeight.value}px`,
  zIndex: popperZIndex.value,
  willChange: 'transform',
}))

const popperClasses = computed(() => [
  ns.e('popper'),
  `${ns.e('popper')}--${actualPlacement.value.split('-')[0]}`,
  ns.m(`shape-${props.shape}`),
  ns.is('visible', popperOpen.value),
])

// === Floating UI 定位 ===
let cleanupAutoUpdate: (() => void) | null = null
let closePopperTimer: ReturnType<typeof setTimeout> | null = null
let openPopperFrame = 0
let stackController: ReturnType<typeof registerOverlay> | undefined

const updatePosition = async () => {
  if (!triggerRef.value || !popperRef.value) return
  const { x, y, placement } = await computePosition(triggerRef.value, popperRef.value, {
    strategy: 'fixed',
    placement: props.placement,
    middleware: [
      offset(4),
      flip({ padding: VIEWPORT_PADDING }),
      shift({ padding: VIEWPORT_PADDING }),
      size({
        padding: VIEWPORT_PADDING,
        apply({ availableHeight, rects }) {
          dynamicMaxHeight.value = Math.max(120, Math.min(props.maxHeight, availableHeight))
          popperPosition.value = {
            x: popperPosition.value.x,
            y: popperPosition.value.y,
            width: rects.reference.width,
          }
        },
      }),
    ],
  })
  popperPosition.value = { x, y, width: popperPosition.value.width || triggerRef.value.getBoundingClientRect().width }
  actualPlacement.value = placement
}

const setupAutoUpdate = () => {
  cleanupAutoUpdate?.()
  cleanupAutoUpdate = null
  if (!triggerRef.value || !popperRef.value) return
  cleanupAutoUpdate = autoUpdate(triggerRef.value, popperRef.value, updatePosition)
}

const teardownAutoUpdate = () => {
  cleanupAutoUpdate?.()
  cleanupAutoUpdate = null
}

const clearClosePopperTimer = () => {
  if (closePopperTimer) {
    clearTimeout(closePopperTimer)
    closePopperTimer = null
  }
}

const clearOpenPopperFrame = () => {
  if (openPopperFrame) {
    cancelAnimationFrame(openPopperFrame)
    openPopperFrame = 0
  }
}

const registerToStack = () => {
  if (stackController) return

  stackController = registerOverlay({
    zIndex: props.zIndex,
    stackPriority: resolvedStackPriority.value,
    onKeydown: handleKeydown,
    onZIndexChange: (zIndex) => {
      popperZIndex.value = zIndex
    },
  })
}

const unregisterFromStack = () => {
  if (!stackController) return

  stackController.unregister()
  stackController = undefined
  popperZIndex.value = props.zIndex
}

const primePopperPosition = () => {
  if (!triggerRef.value) return
  const rect = triggerRef.value.getBoundingClientRect()
  const [side, align] = props.placement.split('-')
  const x = align === 'end' ? rect.right - rect.width : rect.left
  const y = side === 'top' ? rect.top : rect.bottom

  popperPosition.value = {
    x,
    y,
    width: rect.width,
  }
  dynamicMaxHeight.value = props.maxHeight
  actualPlacement.value = props.placement
}

const applyOpen = () => {
  clearClosePopperTimer()
  clearOpenPopperFrame()
  primePopperPosition()
  visible.value = true
  popperRendered.value = true
  registerToStack()
  document.dispatchEvent(new CustomEvent(SELECT_OPEN_EVENT, { detail: uid }))
  emit('visibleChange', true)
  emit('focus')
  nextTick(() => {
    openPopperFrame = requestAnimationFrame(() => {
      popperOpen.value = true
      openPopperFrame = 0
    })
    if (isInlineSearch.value && inlineInputRef.value) {
      inlineInputRef.value.focus()
    } else if (props.filterable && filterInputRef.value) {
      filterInputRef.value.focus()
    }
  })
}

const applyClose = () => {
  clearOpenPopperFrame()
  visible.value = false
  popperOpen.value = false
  unregisterFromStack()
  emit('visibleChange', false)
  emit('blur')
  clearClosePopperTimer()
  closePopperTimer = setTimeout(() => {
    if (!visible.value) {
      popperRendered.value = false
      filterQuery.value = ''
      hoverIndex.value = -1
    }
    closePopperTimer = null
  }, POPPER_LEAVE_DURATION)
}

const setVisible = (nextVisible: boolean) => {
  if (nextVisible && isDisabled.value) return
  if (visible.value === nextVisible) return

  if (nextVisible) applyOpen()
  else applyClose()
}

// === 开关控制 ===
const open = () => {
  setVisible(true)
}

const close = () => {
  setVisible(false)
}

const toggle = () => {
  setVisible(!visible.value)
}

const handleSelect = (option: SelectOption) => {
  if (option.disabled) return
  emit('update:modelValue', option.value)
  emit('change', option.value)
  close()
}

const handleClear = (event: MouseEvent) => {
  event.stopPropagation()
  isClearing.value = true
  setTimeout(() => {
    emit('update:modelValue', '')
    emit('clear')
    isClearing.value = false
  }, props.clearDuration)
}

const isSelected = (option: SelectOption) => option.value === props.modelValue

// === 互斥关闭 ===
const handleOtherSelectOpen = (e: Event) => {
  if ((e as CustomEvent).detail !== uid && visible.value) close()
}

// === 点击外部关闭 ===
const handleClickOutside = (event: MouseEvent) => {
  if (!visible.value) return
  const target = event.target as Node
  const isClickInside = triggerRef.value?.contains(target) || popperRef.value?.contains(target)
  if (!isClickInside) close()
}

// === 键盘导航 ===
const handleKeydown = (event: KeyboardEvent) => {
  if (!visible.value) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      open()
      return true
    }
    return false
  }
  switch (event.key) {
    case 'Escape':
      event.preventDefault()
      close()
      return true
    case 'ArrowDown':
      event.preventDefault()
      hoverIndex.value = Math.min(hoverIndex.value + 1, filteredOptions.value.length - 1)
      return true
    case 'ArrowUp':
      event.preventDefault()
      hoverIndex.value = Math.max(hoverIndex.value - 1, 0)
      return true
    case 'Enter':
      event.preventDefault()
      if (hoverIndex.value >= 0 && hoverIndex.value < filteredOptions.value.length) {
        handleSelect(filteredOptions.value[hoverIndex.value])
      }
      return true
    default:
      return false
  }
}

const focus = () => {
  triggerRef.value?.focus()
}

const blur = () => {
  triggerRef.value?.blur()
}

// 父级 Dialog 关闭时同步关闭下拉
if (dialogContext?.visible) {
  watch(dialogContext.visible, (dialogVisible) => {
    if (!dialogVisible && visible.value) close()
  })
}

// 监听显示状态：可见时启动 autoUpdate，隐藏时停止
watch(visible, async (val) => {
  if (val) {
    await nextTick()
    setupAutoUpdate()
  } else {
    teardownAutoUpdate()
  }
})

watch(
  () => [props.zIndex, resolvedStackPriority.value] as const,
  ([zIndex, stackPriority]) => {
    if (stackController) {
      stackController.update({ zIndex, stackPriority })
    } else {
      popperZIndex.value = zIndex
    }
  },
)

// 暴露方法
defineExpose({
  /** @description 打开下拉面板 */
  open,
  /** @description 关闭下拉面板 */
  close,
  /** @description 切换下拉面板 */
  toggle,
  /** @description 使下拉框获取焦点 */
  focus,
  /** @description 使下拉框失去焦点 */
  blur,
})

onMounted(() => {
  document.addEventListener(SELECT_OPEN_EVENT, handleOtherSelectOpen)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  clearClosePopperTimer()
  clearOpenPopperFrame()
  unregisterFromStack()
  teardownAutoUpdate()
  document.removeEventListener(SELECT_OPEN_EVENT, handleOtherSelectOpen)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div :class="classes" :style="customStyle">
    <!-- 触发器 -->
    <div
      ref="triggerRef"
      :class="ns.e('trigger')"
      :tabindex="isInlineSearch ? -1 : 0"
      @click="!isInlineSearch && toggle()"
      @keydown="!isInlineSearch && handleKeydown($event)"
    >
      <!-- 前缀插槽 -->
      <span v-if="slots.prefix" :class="ns.e('prefix')">
        <slot name="prefix" />
      </span>

      <!-- 显示值 / 行内搜索框 -->
      <template v-if="isInlineSearch">
        <input
          ref="inlineInputRef"
          v-model="inputValue"
          :class="[ns.e('inline-input'), ns.is('active', visible)]"
          :placeholder="visible ? '' : (hasValue ? displayLabel : props.placeholder)"
          autocomplete="off"
          :disabled="isDisabled"
          @click.stop
          @focus="open"
          @keydown="handleKeydown"
        />
      </template>
      <span v-else :class="[ns.e('value'), { [ns.is('placeholder')]: !hasValue }]">
        {{ hasValue ? displayLabel : props.placeholder }}
      </span>

      <!-- 清空按钮 -->
      <span
        v-if="showClear"
        :class="ns.e('clear')"
        @click="handleClear"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
        </svg>
      </span>

      <!-- 箭头 -->
      <span :class="[ns.e('arrow'), { [ns.is('reverse')]: visible }]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </span>
    </div>

    <!-- 下拉面板 -->
    <Teleport :to="teleportTo">
      <div
        v-if="popperRendered"
        ref="popperRef"
        :class="popperClasses"
        :style="popperStyle"
      >
        <div :class="ns.e('popper-panel')">
          <!-- 搜索过滤 (仅在非行内搜索时显示) -->
          <div v-if="props.filterable && !isInlineSearch" :class="ns.e('filter')">
            <input
              ref="filterInputRef"
              v-model="filterQuery"
              :class="ns.e('filter-input')"
              type="text"
              :placeholder="props.filterPlaceholder"
              @click.stop
            />
          </div>

          <!-- 选项列表 -->
          <ul :class="ns.e('options')">
            <!-- 无数据 -->
            <li v-if="options.length === 0" :class="ns.e('empty')">
              <slot name="empty">{{ noDataText }}</slot>
            </li>

            <!-- 无匹配 -->
            <li v-else-if="filteredOptions.length === 0" :class="ns.e('empty')">
              {{ noMatchText }}
            </li>

            <!-- 选项 -->
            <li
              v-for="(option, index) in filteredOptions"
              :key="option.value"
              :class="[
                ns.e('option'),
                ns.is('selected', isSelected(option)),
                ns.is('disabled', !!option.disabled),
                ns.is('hover', hoverIndex === index),
              ]"
              @click="handleSelect(option)"
              @mouseenter="hoverIndex = index"
            >
              <slot :option="option">
                {{ option.label }}
              </slot>
              <!-- 选中标记 -->
              <span v-if="isSelected(option)" :class="ns.e('check')">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Teleport>
  </div>
</template>
