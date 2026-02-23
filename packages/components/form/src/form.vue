<script setup lang="ts">
/**
 * CpForm - 赛博朋克风格表单容器
 * 提供表单布局、验证管理和上下文注入
 */
import { computed, provide, toRef } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { formProps } from './form'
import { formContextKey, type FormContext, type FormItemContext } from './constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Form`,
})

const props = defineProps(formProps)
const ns = useNamespace('form')

// 收集子 FormItem 实例
const fields: FormItemContext[] = []

const addField = (field: FormItemContext) => {
  fields.push(field)
}

const removeField = (field: FormItemContext) => {
  const idx = fields.indexOf(field)
  if (idx !== -1) fields.splice(idx, 1)
}

// 计算标签宽度样式
const labelWidthStyle = computed(() => {
  const w = props.labelWidth
  if (w === 'auto') return undefined
  return typeof w === 'number' ? `${w}px` : w
})

// 根类名
const classes = computed(() => [
  ns.b(),
  ns.m(`label-${props.labelPosition}`),
  props.inline ? ns.m('inline') : '',
  ns.m(props.size as string),
])

// 注入 style 变量
const formStyle = computed(() => {
  const style: Record<string, string> = {}
  if (labelWidthStyle.value) {
    style['--cp-form-label-width'] = labelWidthStyle.value
  }
  return style
})

// 提供上下文
const context: FormContext = {
  model: toRef(props, 'model'),
  rules: toRef(props, 'rules'),
  labelWidth: toRef(props, 'labelWidth'),
  labelPosition: toRef(props, 'labelPosition'),
  labelSuffix: toRef(props, 'labelSuffix'),
  size: toRef(props, 'size'),
  disabled: toRef(props, 'disabled'),
  showMessage: toRef(props, 'showMessage'),
  reserveErrorSpace: toRef(props, 'reserveErrorSpace'),
  requireAsteriskPosition: toRef(props, 'requireAsteriskPosition'),
  addField,
  removeField,
}

provide(formContextKey, context)

// ===== 暴露方法 =====

/** 校验全部字段 */
const validate = async (): Promise<boolean> => {
  const results = await Promise.all(
    fields.filter(f => f.prop).map(f => f.validate())
  )
  return results.every(Boolean)
}

/** 校验指定字段 */
const validateField = async (fieldProp: string): Promise<boolean> => {
  const field = fields.find(f => f.prop === fieldProp)
  if (!field) return true
  return field.validate()
}

/** 重置所有字段到初始值并清除验证 */
const resetFields = () => {
  fields.forEach(f => f.resetField())
}

/** 仅清除验证状态 */
const clearValidate = (fieldProps?: string[]) => {
  const targets = fieldProps
    ? fields.filter(f => fieldProps.includes(f.prop))
    : fields
  targets.forEach(f => f.clearValidate())
}

defineExpose({
  /** @description 校验全部字段 */
  validate,
  /** @description 校验指定字段 */
  validateField,
  /** @description 重置所有字段 */
  resetFields,
  /** @description 清除验证状态 */
  clearValidate,
})
</script>

<template>
  <form
    :class="classes"
    :style="formStyle"
    @submit.prevent
  >
    <slot />
  </form>
</template>
