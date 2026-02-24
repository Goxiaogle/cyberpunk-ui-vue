<script setup lang="ts">
/**
 * CpCheckboxGroup - 复选框组容器
 * 管理多个 CpCheckbox 的选中状态
 */
import { computed, provide, toRef } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group'
import { checkboxGroupContextKey, type CheckboxGroupContext } from './constants'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import type { CheckboxValueType } from '@cyberpunk-vue/components/checkbox/src/checkbox'

defineOptions({
  name: `${COMPONENT_PREFIX}CheckboxGroup`,
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const ns = useNamespace('checkbox-group')

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.m(props.direction),
])

// 处理子 Checkbox 变化
const handleChange = (value: CheckboxValueType) => {
  const currentValue = [...props.modelValue]
  const index = currentValue.indexOf(value)
  
  if (index === -1) {
    // 添加
    if (props.max !== undefined && currentValue.length >= props.max) {
      return // 超过最大数量
    }
    currentValue.push(value)
  } else {
    // 移除
    if (props.min !== undefined && currentValue.length <= props.min) {
      return // 低于最小数量
    }
    currentValue.splice(index, 1)
  }
  
  emit('update:modelValue', currentValue)
  emit('change', currentValue)
}

// 提供上下文给子组件
const context: CheckboxGroupContext = {
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  shape: toRef(props, 'shape'),
  min: toRef(props, 'min'),
  max: toRef(props, 'max'),
  handleChange,
}

provide(checkboxGroupContextKey, context)

defineExpose({
  /** @description 当前选中的值 */
  modelValue: toRef(props, 'modelValue'),
})
</script>

<template>
  <div :class="classes" role="group">
    <slot />
  </div>
</template>
