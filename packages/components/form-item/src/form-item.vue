<script setup lang="ts">
/**
 * CpFormItem - 表单项
 * 包含 label + content + error message，支持验证
 */
import { computed, inject, onMounted, onBeforeUnmount, ref, watch, reactive } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { formItemProps } from './form-item'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'
import type { FormRule } from '@cyberpunk-vue/components/form/src/form'

defineOptions({
  name: `${COMPONENT_PREFIX}FormItem`,
})

const props = defineProps(formItemProps)
const ns = useNamespace('form-item')

// 注入 Form 上下文
const formContext = inject(formContextKey, undefined)

// 验证状态
const validateState = ref<'' | 'error' | 'validating'>('')
const validateMessage = ref('')

// 记录初始值（用于 resetField）
let initialValue: unknown = undefined

onMounted(() => {
  if (props.prop && formContext) {
    // 记录初始值
    if (formContext.model.value) {
      initialValue = cloneValue(formContext.model.value[props.prop])
    }
    // 注册到 Form
    formContext.addField(fieldContext)
  }
})

onBeforeUnmount(() => {
  if (formContext) {
    formContext.removeField(fieldContext)
  }
})

// 深拷贝基础类型/数组
function cloneValue(val: unknown): unknown {
  if (Array.isArray(val)) return [...val]
  if (val && typeof val === 'object') return { ...val }
  return val
}

// ===== 计算属性 =====

/** 当前字段值 */
const fieldValue = computed(() => {
  if (!props.prop || !formContext?.model.value) return undefined
  return formContext.model.value[props.prop]
})

/** 是否显示错误信息（继承 Form 或独立控制） */
const shouldShowMessage = computed(() => {
  if (props.showMessage !== undefined) return props.showMessage
  return formContext?.showMessage.value ?? true
})

/** 是否预留错误占位空间（继承 Form 或独立控制） */
const shouldReserveSpace = computed(() => {
  if (props.reserveErrorSpace !== undefined) return props.reserveErrorSpace
  return formContext?.reserveErrorSpace.value ?? false
})

/** 是否必填（props.required 或 rules 中有 required） */
const isRequired = computed(() => {
  if (props.required) return true
  const rules = currentRules.value
  return rules.some(r => r.required)
})

/** 当前生效的验证规则 */
const currentRules = computed<FormRule[]>(() => {
  // FormItem 自身 rules 优先
  if (props.rules) {
    return Array.isArray(props.rules) ? props.rules : [props.rules]
  }
  // 否则从 Form 级读取
  if (props.prop && formContext?.rules.value) {
    const formRules = formContext.rules.value[props.prop]
    if (formRules) {
      return Array.isArray(formRules) ? formRules : [formRules]
    }
  }
  return []
})

/** label 宽度（自身优先，否则继承 Form） */
const labelWidthValue = computed(() => {
  const w = props.labelWidth ?? formContext?.labelWidth.value ?? 'auto'
  if (w === 'auto') return undefined
  return typeof w === 'number' ? `${w}px` : w
})

/** 当前显示的错误信息 */
const errorMessage = computed(() => {
  if (props.error) return props.error
  return validateMessage.value
})

/** 是否处于错误状态 */
const hasError = computed(() => {
  return validateState.value === 'error' || !!props.error
})

// ===== 验证逻辑 =====

const validate = async (trigger?: string): Promise<boolean> => {
  const rules = currentRules.value
  if (rules.length === 0) return true

  // 筛选当前 trigger 的规则
  const triggeredRules = trigger
    ? rules.filter(r => !r.trigger || r.trigger === trigger)
    : rules

  if (triggeredRules.length === 0) return true

  validateState.value = 'validating'
  const value = fieldValue.value

  for (const rule of triggeredRules) {
    // required 检查
    if (rule.required) {
      if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
        validateState.value = 'error'
        validateMessage.value = rule.message || '此项为必填项'
        return false
      }
    }

    // min/max 检查
    if (rule.min !== undefined || rule.max !== undefined) {
      const len = typeof value === 'string' ? value.length : (typeof value === 'number' ? value : 0)
      if (rule.min !== undefined && len < rule.min) {
        validateState.value = 'error'
        validateMessage.value = rule.message || `最少 ${rule.min} 个字符`
        return false
      }
      if (rule.max !== undefined && len > rule.max) {
        validateState.value = 'error'
        validateMessage.value = rule.message || `最多 ${rule.max} 个字符`
        return false
      }
    }

    // pattern 检查
    if (rule.pattern) {
      if (!rule.pattern.test(String(value ?? ''))) {
        validateState.value = 'error'
        validateMessage.value = rule.message || '格式不正确'
        return false
      }
    }

    // 自定义 validator
    if (rule.validator) {
      try {
        const result = await rule.validator(value, rule)
        if (result === false) {
          validateState.value = 'error'
          validateMessage.value = rule.message || '验证失败'
          return false
        }
        if (typeof result === 'string') {
          validateState.value = 'error'
          validateMessage.value = result
          return false
        }
      } catch (e) {
        validateState.value = 'error'
        validateMessage.value = (e as Error).message || '验证失败'
        return false
      }
    }
  }

  validateState.value = ''
  validateMessage.value = ''
  return true
}

const resetField = () => {
  if (props.prop && formContext?.model.value) {
    formContext.model.value[props.prop] = cloneValue(initialValue)
  }
  validateState.value = ''
  validateMessage.value = ''
}

const clearValidate = () => {
  validateState.value = ''
  validateMessage.value = ''
}

// 注册到 Form 的上下文对象
const fieldContext = reactive({
  prop: props.prop,
  validate,
  resetField,
  clearValidate,
})

// 监听值变化，执行 change 触发的验证
watch(fieldValue, () => {
  if (currentRules.value.length > 0) {
    validate('change')
  }
})

// ===== 计算类名和样式 =====

const classes = computed(() => [
  ns.b(),
  isRequired.value ? 'is-required' : '',
  hasError.value ? 'is-error' : '',
  validateState.value === 'validating' ? 'is-validating' : '',
  shouldReserveSpace.value ? 'is-reserve-space' : '',
])

const labelClasses = computed(() => [
  ns.e('label'),
  formContext?.requireAsteriskPosition.value === 'right' ? 'is-asterisk-right' : '',
])

const labelStyle = computed(() => {
  const style: Record<string, string> = {}
  if (labelWidthValue.value) {
    style.width = labelWidthValue.value
    style.minWidth = labelWidthValue.value
  }
  return style
})

// 标签后缀
const labelSuffix = computed(() => formContext?.labelSuffix.value ?? '')

defineExpose({
  /** @description 验证该表单项 */
  validate,
  /** @description 重置该表单项 */
  resetField,
  /** @description 清除验证状态 */
  clearValidate,
  /** @description 当前验证状态 */
  validateState,
  /** @description 当前验证信息 */
  validateMessage,
})
</script>

<template>
  <div :class="classes">
    <!-- Label -->
    <label
      v-if="label || $slots.label"
      :class="labelClasses"
      :style="labelStyle"
    >
      <slot name="label">
        {{ label }}{{ labelSuffix }}
      </slot>
    </label>

    <!-- Content -->
    <div :class="ns.e('content')">
      <slot />

      <!-- Error Message — always rendered, CSS controls visibility -->
      <div
        :class="[
          ns.e('error'),
          hasError && shouldShowMessage ? 'is-active' : '',
        ]"
      >
        <slot name="error" :error="errorMessage">
          <span v-if="hasError && shouldShowMessage">{{ errorMessage }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>
