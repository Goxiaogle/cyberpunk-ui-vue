<script setup lang="ts">
/**
 * CpSegmented - 赛博朋克风格分段选择器
 * 一体化互斥选项控件条，选中项带滑块高亮效果
 */
import { computed, ref, inject, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { segmentedProps, segmentedEmits, type SegmentedOption, type SegmentedValueType } from './segmented'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Segmented`,
})

const props = defineProps(segmentedProps)
const emit = defineEmits(segmentedEmits)

const ns = useNamespace('segmented')
const formContext = inject(formContextKey, undefined)
const isDisabled = computed(() => props.disabled || formContext?.disabled.value || false)

// 尺寸映射
const segmentedSizeMap = { sm: 28, md: 36, lg: 44 }

// ===== 标准化选项 =====
const normalizedOptions = computed<SegmentedOption[]>(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { label: String(opt), value: opt }
    }
    return opt
  })
})

// 开发模式下校验 modelValue 是否在 options 中
// （使用 import.meta.env.DEV，构建时会被静态替换为 false 并被 Tree-shaking 移除）
if (import.meta.env?.DEV) {
  watch(
    [() => props.modelValue, normalizedOptions],
    ([value, options]) => {
      if (value === undefined) return
      if (!options.some((opt) => opt.value === value)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[CpSegmented] modelValue "${String(value)}" 不在 options 中，指示器将不会显示。` +
            `请检查 v-model 绑定值是否与 options 的 value 字段匹配。`,
        )
      }
    },
    { immediate: true },
  )
}

// ===== 滑块位置计算 =====
const trackRef = ref<HTMLElement>()
const itemRefs = ref<HTMLElement[]>([])
const indicatorStyle = ref<Record<string, string>>({})

const setItemRef = (el: any, index: number) => {
  if (el) {
    itemRefs.value[index] = el as HTMLElement
  }
}

// options 变化时同步裁剪 itemRefs，避免残留过期 DOM 引用
watch(
  () => normalizedOptions.value.length,
  (len) => {
    if (itemRefs.value.length > len) {
      itemRefs.value.length = len
    }
  },
)

const updateIndicator = () => {
  const activeIndex = normalizedOptions.value.findIndex(
    (opt) => opt.value === props.modelValue,
  )
  if (activeIndex < 0 || !itemRefs.value[activeIndex] || !trackRef.value) {
    indicatorStyle.value = { opacity: '0' }
    return
  }

  const activeEl = itemRefs.value[activeIndex]

  // 使用 offsetLeft / offsetTop / offsetWidth / offsetHeight 代替 getBoundingClientRect()
  // 因为 getBoundingClientRect 会受到祖先元素 CSS transform 的影响
  // （如 Dialog 入场动画的 scale(0.92)），导致计算出的宽度和位置不正确
  // 同时跟随 X/Y 偏移，避免选项换行/垂直布局时指示器纵向被拉伸
  indicatorStyle.value = {
    width: `${activeEl.offsetWidth}px`,
    height: `${activeEl.offsetHeight}px`,
    transform: `translate(calc(${activeEl.offsetLeft}px + var(--cp-segmented-indicator-offset, 0px)), ${activeEl.offsetTop}px)`,
    opacity: '1',
  }
}

// 监听值变化更新滑块
watch(
  () => props.modelValue,
  () => nextTick(updateIndicator),
)

// 监听 options 变化
watch(
  () => props.options,
  () => nextTick(updateIndicator),
  { deep: true },
)

// 监听布局相关 props（影响选项尺寸/排列）
watch(
  () => [props.vertical, props.wrap, props.size, props.block, props.shape, props.variant],
  () => nextTick(updateIndicator),
)

// ResizeObserver 监听尺寸变化
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  // requestAnimationFrame 确保浏览器已完成布局计算
  // （nextTick 仅保证 Vue DOM 已刷新，不保证浏览器布局完成）
  requestAnimationFrame(updateIndicator)

  // 自定义字体加载完成后重新计算（字体影响文字宽度和元素偏移量）
  document.fonts?.ready.then(updateIndicator)

  if (trackRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateIndicator()
    })
    resizeObserver.observe(trackRef.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

// ===== 类名 =====
const classes = computed(() => [
  ns.b(),
  ns.m(props.variant),
  ns.m(props.type),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', isDisabled.value),
  ns.is('block', props.block),
  ns.is('vertical', props.vertical),
  ns.is('wrap', props.wrap && !props.vertical),
  ns.is('custom-color', !!props.color),
  ns.is('custom-size', !isPresetSize(props.size)),
])

// ===== 自定义样式 =====
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.color) {
    style['--cp-segmented-color'] = props.color
    style['--cp-segmented-color-light'] = `${props.color}25`
  }

  if (!isPresetSize(props.size)) {
    style['--cp-segmented-height'] = normalizeSize(props.size, segmentedSizeMap)
  }

  return style
})

// ===== 切换值（统一入口，处理 beforeChange） =====
const commitChange = async (next: SegmentedValueType | undefined) => {
  if (next === props.modelValue) return

  if (typeof props.beforeChange === 'function') {
    try {
      const result = await props.beforeChange(next, props.modelValue)
      if (result === false) return
    } catch {
      // reject 视为取消切换
      return
    }
  }

  emit('update:modelValue', next as SegmentedValueType)
  emit('change', next as SegmentedValueType)
  if (next === undefined) emit('clear')
}

// ===== 清空 =====
const clearValue = () => {
  if (isDisabled.value || props.modelValue === undefined) return
  void commitChange(undefined)
}

// ===== 选项点击 =====
const handleItemClick = (option: SegmentedOption) => {
  if (isDisabled.value || option.disabled) return
  if (option.value === props.modelValue) {
    // 再次点击已选项：clearable 时清空，否则忽略
    if (props.clearable) clearValue()
    return
  }
  void commitChange(option.value)
}

// ===== 键盘导航 =====
// roving tabindex：当前激活项 tabindex=0，其他 -1
// 横向：←/→ 移焦；垂直：↑/↓ 移焦；Home/End 跳首尾；Esc 清空
const focusedIndex = ref<number>(-1)

const enabledIndexes = computed(() =>
  normalizedOptions.value.reduce<number[]>((acc, opt, idx) => {
    if (!opt.disabled) acc.push(idx)
    return acc
  }, []),
)

const activeIndex = computed(() =>
  normalizedOptions.value.findIndex((opt) => opt.value === props.modelValue),
)

// roving tabindex：默认让激活项可聚焦；无激活项时让第一个可用项可聚焦
const rovingIndex = computed(() => {
  if (focusedIndex.value >= 0) return focusedIndex.value
  if (activeIndex.value >= 0 && !normalizedOptions.value[activeIndex.value]?.disabled) {
    return activeIndex.value
  }
  return enabledIndexes.value[0] ?? -1
})

const focusItem = (index: number) => {
  const el = itemRefs.value[index]
  if (el) {
    focusedIndex.value = index
    el.focus()
  }
}

const moveFocus = (delta: 1 | -1) => {
  const enabled = enabledIndexes.value
  if (enabled.length === 0) return
  const current = focusedIndex.value >= 0 ? focusedIndex.value : activeIndex.value
  const currentPos = enabled.indexOf(current)
  const nextPos =
    currentPos < 0
      ? delta > 0
        ? 0
        : enabled.length - 1
      : (currentPos + delta + enabled.length) % enabled.length
  focusItem(enabled[nextPos])
}

const handleKeydown = (e: KeyboardEvent) => {
  if (isDisabled.value) return

  // Esc 清空
  if (e.key === 'Escape') {
    if (props.clearable && props.modelValue !== undefined) {
      e.preventDefault()
      clearValue()
    }
    return
  }

  const isHorizontal = !props.vertical
  const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
  const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

  if (e.key === prevKey) {
    e.preventDefault()
    moveFocus(-1)
  } else if (e.key === nextKey) {
    e.preventDefault()
    moveFocus(1)
  } else if (e.key === 'Home') {
    e.preventDefault()
    if (enabledIndexes.value.length) focusItem(enabledIndexes.value[0])
  } else if (e.key === 'End') {
    e.preventDefault()
    const last = enabledIndexes.value[enabledIndexes.value.length - 1]
    if (last !== undefined) focusItem(last)
  } else if (e.key === ' ' || e.key === 'Enter') {
    // 空格/回车选中当前聚焦项
    const idx = focusedIndex.value
    if (idx >= 0) {
      e.preventDefault()
      const opt = normalizedOptions.value[idx]
      if (opt && !opt.disabled) handleItemClick(opt)
    }
  }
}

const handleItemFocus = (index: number) => {
  focusedIndex.value = index
}

const handleItemBlur = () => {
  // 焦点离开整个组件时重置（用 setTimeout 等待新焦点确认）
  setTimeout(() => {
    if (!trackRef.value?.contains(document.activeElement)) {
      focusedIndex.value = -1
    }
  }, 0)
}

// ===== 选项类名 =====
const getItemClasses = (option: SegmentedOption) => [
  ns.e('item'),
  ns.is('active', option.value === props.modelValue),
  ns.is('disabled', !!option.disabled),
]

// ===== 暴露方法 =====
const focus = () => {
  const target = rovingIndex.value
  if (target >= 0) focusItem(target)
}

defineExpose({
  /** @description 更新滑块位置 */
  updateIndicator,
  /** @description 聚焦当前激活项（无激活项则聚焦第一个可用项） */
  focus,
})
</script>

<template>
  <div
    ref="trackRef"
    :class="classes"
    :style="customStyle"
    role="radiogroup"
    :aria-disabled="isDisabled || undefined"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
    @keydown="handleKeydown"
  >
    <!-- 滑块指示器 -->
    <div
      :class="ns.e('indicator')"
      :style="indicatorStyle"
    />

    <!-- 选项列表 -->
    <button
      v-for="(option, index) in normalizedOptions"
      :key="option.value"
      :ref="(el) => setItemRef(el, index)"
      :class="getItemClasses(option)"
      :disabled="isDisabled || option.disabled"
      type="button"
      role="radio"
      :aria-checked="option.value === modelValue"
      :tabindex="index === rovingIndex ? 0 : -1"
      @click="handleItemClick(option)"
      @focus="handleItemFocus(index)"
      @blur="handleItemBlur"
    >
      <!-- 自定义内容插槽（具名/作用域） -->
      <slot name="option" :option="option" :index="index" :active="option.value === modelValue">
        <!-- 图标 -->
        <component
          v-if="option.icon"
          :is="option.icon"
          :class="ns.e('item-icon')"
        />
        <!-- 文本（data-label 给伪元素占位用，避免字重切换时文字宽度抖动） -->
        <span :class="ns.e('item-label')" :data-label="option.label">{{ option.label }}</span>
      </slot>
    </button>
  </div>
</template>
