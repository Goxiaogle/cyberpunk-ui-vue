<script setup lang="ts">
/**
 * CpRadioGroup - 单选框组容器
 * 管理多个 CpRadio 的选中状态
 */
import { computed, provide, toRef } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { radioGroupProps, radioGroupEmits } from './radio-group'
import { radioGroupContextKey, type RadioGroupContext } from './constants'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import type { RadioValueType } from '../../radio/src/radio'

defineOptions({
  name: `${COMPONENT_PREFIX}RadioGroup`,
})

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const ns = useNamespace('radio-group')

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.m(props.direction),
])

// 处理子 Radio 变化
const handleChange = (value: RadioValueType) => {
  if (value === props.modelValue) return // 相同值忽略
  
  emit('update:modelValue', value)
  emit('change', value)
}

// 提供上下文给子组件
const context: RadioGroupContext = {
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  handleChange,
}

provide(radioGroupContextKey, context)

defineExpose({
  /** @description 当前选中的值 */
  modelValue: toRef(props, 'modelValue'),
})
</script>

<template>
  <div :class="classes" role="radiogroup">
    <slot />
  </div>
</template>
