<script setup lang="ts">
/**
 * CpCheckbox - 赛博朋克风格复选框
 * 支持多种尺寸、半选状态、分组使用
 */
import { computed, inject, ref } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { checkboxProps, checkboxEmits, type CheckboxValueType } from './checkbox'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { checkboxGroupContextKey } from '../../checkbox-group/src/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Checkbox`,
})

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const ns = useNamespace('checkbox')

// 尺寸映射
const checkboxSizeMap = { sm: 14, md: 18, lg: 22 }

// 注入 CheckboxGroup 上下文
const checkboxGroup = inject(checkboxGroupContextKey, undefined)

// 是否在 Group 中
const isGroup = computed(() => !!checkboxGroup)

// 实际禁用状态
const actualDisabled = computed(() => {
  return props.disabled || checkboxGroup?.disabled?.value || false
})

// 实际尺寸
const actualSize = computed(() => {
  return checkboxGroup?.size?.value || props.size
})

// 实际类型
const actualType = computed(() => {
  return checkboxGroup?.type?.value || props.type
})

// 是否选中
const isChecked = computed(() => {
  if (isGroup.value && checkboxGroup) {
    const groupValue = checkboxGroup.modelValue?.value
    if (Array.isArray(groupValue) && props.label !== undefined) {
      return groupValue.includes(props.label)
    }
    return false
  }
  // 单独使用
  if (typeof props.modelValue === 'boolean') {
    return props.modelValue
  }
  return props.modelValue === props.trueValue
})

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// 计算类名
const classes = computed(() => [
  ns.b(),
  isPresetSize(actualSize.value) && ns.m(actualSize.value),
  ns.is('checked', isChecked.value),
  ns.is('disabled', actualDisabled.value),
  ns.is('indeterminate', props.indeterminate),
  ns.is('border', props.border),
  ns.is('custom-size', !isPresetSize(actualSize.value)),
])

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  // 颜色处理
  if (props.color) {
    style['--cp-checkbox-active-color'] = props.color
    style['--cp-checkbox-active-color-light'] = `${props.color}40`
  } else if (actualType.value && typeColorMap[actualType.value]) {
    style['--cp-checkbox-active-color'] = typeColorMap[actualType.value]
    style['--cp-checkbox-active-color-light'] = `var(--cp-color-${actualType.value}-light)`
  }
  
  // 自定义尺寸
  if (!isPresetSize(actualSize.value)) {
    style['--cp-checkbox-size'] = normalizeSize(actualSize.value, checkboxSizeMap)
  }
  
  return style
})

// 处理变化
const handleChange = () => {
  if (actualDisabled.value) return
  
  if (isGroup.value && checkboxGroup && props.label !== undefined) {
    // Group 模式
    checkboxGroup.handleChange(props.label)
  } else {
    // 单独模式
    const newValue = isChecked.value ? props.falseValue : props.trueValue
    emit('update:modelValue', newValue as boolean)
    emit('change', newValue as boolean)
  }
}

// 原生 input ref
const inputRef = ref<HTMLInputElement>()

defineExpose({
  /** @description input 元素引用 */
  inputRef,
  /** @description 是否选中 */
  checked: isChecked,
})
</script>

<template>
  <label
    :class="classes"
    :style="customStyle"
  >
    <!-- 隐藏的原生 input -->
    <input
      ref="inputRef"
      type="checkbox"
      :class="ns.e('input')"
      :name="props.name"
      :checked="isChecked"
      :disabled="actualDisabled"
      @change="handleChange"
    />
    
    <!-- 指示器 -->
    <span :class="ns.e('indicator')">
      <!-- 选中图标 -->
      <svg
        v-if="isChecked && !props.indeterminate"
        :class="ns.e('icon')"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="square"
      >
        <polyline points="4,12 10,18 20,6" />
      </svg>
      <!-- 半选图标 -->
      <svg
        v-if="props.indeterminate"
        :class="ns.e('icon')"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="square"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
    
    <!-- 标签文字 -->
    <span :class="ns.e('label')">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>
