<script setup lang="ts">
/**
 * CpDropdown - 赛博朋克风格下拉选择器
 * 支持多种尺寸、形态变体、可搜索/可清空
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, useSlots, type CSSProperties } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { dropdownProps, dropdownEmits, type DropdownOption } from './dropdown'

defineOptions({
  name: `${COMPONENT_PREFIX}Dropdown`,
})

const props = defineProps(dropdownProps)
const emit = defineEmits(dropdownEmits)
const slots = useSlots()

const ns = useNamespace('dropdown')

// 尺寸预设映射
const sizeMap = { sm: 28, md: 36, lg: 44 }

// 内部状态
const triggerRef = ref<HTMLElement | null>(null)
const popperRef = ref<HTMLElement | null>(null)
const filterInputRef = ref<HTMLInputElement | null>(null)
const inlineInputRef = ref<HTMLInputElement | null>(null)

const visible = ref(false)
const filterQuery = ref('')
const hoverIndex = ref(-1)
const isClearing = ref(false)

const isInlineSearch = computed(() => props.inline && props.filterable)

// 输入框显示值 (如果是行内搜索，展开时显示查询词，关闭时显示选中项)
const inputValue = computed({
  get: () => (visible.value ? filterQuery.value : displayLabel.value),
  set: (val) => {
    filterQuery.value = val
  },
})

// 弹层位置
const popperPosition = ref({ top: 0, left: 0, width: 0 })

// 计算当前选中的选项
const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue)
})

// 显示文本
const displayLabel = computed(() => {
  return selectedOption.value?.label || ''
})

// 过滤后的选项
const filteredOptions = computed(() => {
  if (!props.filterable || !filterQuery.value) {
    return props.options
  }
  const query = filterQuery.value.toLowerCase()
  return props.options.filter(opt => 
    opt.label.toLowerCase().includes(query)
  )
})

// 是否有值
const hasValue = computed(() => {
  return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined
})

// 是否显示清空按钮
const showClear = computed(() => {
  return props.clearable && !props.disabled && hasValue.value
})

// 类名计算
const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', props.disabled),
  ns.is('active', visible.value),
  ns.is('clearable', showClear.value),
  ns.is('clearing', isClearing.value),
  ns.is('inline', isInlineSearch.value),
  ns.is('custom-color', !!props.color),
  ns.is('custom-size', !isPresetSize(props.size)),
])

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.color) {
    style['--cp-dropdown-custom-color'] = props.color
    style['--cp-dropdown-custom-color-light'] = `${props.color}33`
  }
  
  if (props.inactiveColor) {
    style['--cp-dropdown-inactive-color'] = props.inactiveColor
  }
  
  if (props.placeholderColor) {
    style['--cp-dropdown-placeholder-color'] = props.placeholderColor
  }
  
  if (!isPresetSize(props.size)) {
    style['--cp-dropdown-height'] = normalizeSize(props.size, sizeMap)
  }
  
  return style
})

// 弹层样式
const popperStyle = computed<CSSProperties>(() => ({
  top: `${popperPosition.value.top}px`,
  left: `${popperPosition.value.left}px`,
  width: `${popperPosition.value.width}px`,
  maxHeight: `${props.maxHeight}px`,
}))

// 弹层类名
const popperClasses = computed(() => [
  ns.e('popper'),
  `${ns.e('popper')}--${props.placement.split('-')[0]}`,
  ns.m(`shape-${props.shape}`),
])

// 更新弹层位置
let ticking = false
const updatePosition = () => {
  if (!visible.value || !triggerRef.value || ticking) return
  
  ticking = true
  requestAnimationFrame(() => {
    if (!triggerRef.value) {
      ticking = false
      return
    }
    
    const triggerRect = triggerRef.value.getBoundingClientRect()
    const offset = 4
    
    let top = 0
    let left = triggerRect.left + window.scrollX
    const width = triggerRect.width
    
    const mainAxis = props.placement.split('-')[0]
    
    if (mainAxis === 'bottom') {
      top = triggerRect.bottom + offset + window.scrollY
    } else {
      // 需要先获取 popper 高度，这里用估算值
      top = triggerRect.top - props.maxHeight - offset + window.scrollY
    }
    
    popperPosition.value = { top, left, width }
    ticking = false
  })
}

// 打开下拉
const open = () => {
  if (props.disabled) return
  visible.value = true
  emit('visibleChange', true)
  emit('focus')
  
  nextTick(() => {
    updatePosition()
    if (isInlineSearch.value && inlineInputRef.value) {
      inlineInputRef.value.focus()
    } else if (props.filterable && filterInputRef.value) {
      filterInputRef.value.focus()
    }
  })
}

// 关闭下拉
const close = () => {
  visible.value = false
  filterQuery.value = ''
  hoverIndex.value = -1
  emit('visibleChange', false)
  emit('blur')
}

// 切换下拉
const toggle = () => {
  if (visible.value) {
    close()
  } else {
    open()
  }
}

// 选中选项
const handleSelect = (option: DropdownOption) => {
  if (option.disabled) return
  
  emit('update:modelValue', option.value)
  emit('change', option.value)
  close()
}

// 清空
const handleClear = (event: MouseEvent) => {
  event.stopPropagation()
  isClearing.value = true
  setTimeout(() => {
    emit('update:modelValue', '')
    emit('clear')
    setTimeout(() => {
      isClearing.value = false
    }, 150)
  }, 150)
}

// 检查选项是否选中
const isSelected = (option: DropdownOption) => {
  return option.value === props.modelValue
}

// 点击外部关闭
const handleClickOutside = (event: MouseEvent) => {
  if (!visible.value) return
  
  const target = event.target as Node
  const isClickInside = 
    triggerRef.value?.contains(target) || 
    popperRef.value?.contains(target)
  
  if (!isClickInside) {
    close()
  }
}

// 键盘导航
const handleKeydown = (event: KeyboardEvent) => {
  if (!visible.value) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      open()
    }
    return
  }
  
  switch (event.key) {
    case 'Escape':
      event.preventDefault()
      close()
      break
    case 'ArrowDown':
      event.preventDefault()
      hoverIndex.value = Math.min(hoverIndex.value + 1, filteredOptions.value.length - 1)
      break
    case 'ArrowUp':
      event.preventDefault()
      hoverIndex.value = Math.max(hoverIndex.value - 1, 0)
      break
    case 'Enter':
      event.preventDefault()
      if (hoverIndex.value >= 0 && hoverIndex.value < filteredOptions.value.length) {
        handleSelect(filteredOptions.value[hoverIndex.value])
      }
      break
  }
}

// 触发器聚焦
const focus = () => {
  triggerRef.value?.focus()
}

const blur = () => {
  triggerRef.value?.blur()
}

// 监听显示状态
watch(visible, async (val) => {
  if (val) {
    await nextTick()
    updatePosition()
  }
})

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

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', updatePosition)
  window.addEventListener('scroll', updatePosition, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
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
          :disabled="props.disabled"
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
      <Transition :name="ns.namespace + '-dropdown-fade'">
        <div
          v-if="visible"
          ref="popperRef"
          :class="popperClasses"
          :style="popperStyle"
        >
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
      </Transition>
    </Teleport>
  </div>
</template>
