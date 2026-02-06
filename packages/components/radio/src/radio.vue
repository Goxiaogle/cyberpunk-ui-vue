<script setup lang="ts">
/**
 * CpRadio - 赛博朋克风格单选框
 * 支持多种尺寸、分组使用
 */
import { computed, inject, ref } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { radioProps, radioEmits } from './radio'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { radioGroupContextKey } from '../../radio-group/src/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Radio`,
})

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const ns = useNamespace('radio')

// 尺寸映射
const radioSizeMap = { sm: 14, md: 18, lg: 22 }

// 注入 RadioGroup 上下文
const radioGroup = inject(radioGroupContextKey, undefined)

// 是否在 Group 中
const isGroup = computed(() => !!radioGroup)

// 实际禁用状态
const actualDisabled = computed(() => {
  return props.disabled || radioGroup?.disabled?.value || false
})

// 实际尺寸
const actualSize = computed(() => {
  return radioGroup?.size?.value || props.size
})

// 实际类型
const actualType = computed(() => {
  return radioGroup?.type?.value || props.type
})

// 是否选中
const isChecked = computed(() => {
  if (isGroup.value && radioGroup) {
    return radioGroup.modelValue?.value === props.label
  }
  return props.modelValue === props.label
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
  ns.is('border', props.border),
  ns.is('custom-size', !isPresetSize(actualSize.value)),
])

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  // 颜色处理
  if (props.color) {
    style['--cp-radio-active-color'] = props.color
    style['--cp-radio-active-color-light'] = `${props.color}40`
  } else if (actualType.value && typeColorMap[actualType.value]) {
    style['--cp-radio-active-color'] = typeColorMap[actualType.value]
    style['--cp-radio-active-color-light'] = `var(--cp-color-${actualType.value}-light)`
  }
  
  // 自定义尺寸
  if (!isPresetSize(actualSize.value)) {
    style['--cp-radio-size'] = normalizeSize(actualSize.value, radioSizeMap)
  }
  
  return style
})

// 处理变化
const handleChange = () => {
  if (actualDisabled.value) return
  if (props.label === undefined) return
  
  if (isGroup.value && radioGroup) {
    // Group 模式
    radioGroup.handleChange(props.label)
  } else {
    // 单独模式
    emit('update:modelValue', props.label)
    emit('change', props.label)
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
      type="radio"
      :class="ns.e('input')"
      :name="props.name || radioGroup?.name?.value"
      :checked="isChecked"
      :disabled="actualDisabled"
      @change="handleChange"
    />
    
    <!-- 指示器 -->
    <span :class="ns.e('indicator')">
      <!-- 选中内核 -->
      <span :class="ns.e('inner')" />
    </span>
    
    <!-- 标签文字 -->
    <span :class="ns.e('label')">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>
