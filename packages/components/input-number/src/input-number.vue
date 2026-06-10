<script setup lang="ts">
/**
 * CpInputNumber - 赛博朋克风格数字输入框
 */
import { computed, ref, inject } from 'vue'
import { useNamespace, useDefaults, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { inputNumberProps, inputNumberEmits } from './input-number'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}InputNumber`,
})

const rawProps = defineProps(inputNumberProps)
const props = useDefaults(rawProps, 'inputNumber')
const emit = defineEmits(inputNumberEmits)

const ns = useNamespace('input-number')
const formContext = inject(formContextKey, undefined)
const isDisabled = computed(() => props.disabled || formContext?.disabled.value || false)

// 尺寸预设映射
const inputNumberSizeMap = { sm: 28, md: 36, lg: 44 }

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)
const isHovered = ref(false)
const userInput = ref<string | null>(null)

// 格式化显示值
const displayValue = computed(() => {
  if (userInput.value !== null) return userInput.value
  if (props.modelValue === undefined || props.modelValue === null) return ''
  if (props.precision !== undefined) {
    return props.modelValue.toFixed(props.precision)
  }
  return String(props.modelValue)
})

// 计算样式类
const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`controls-${props.controlsPosition}`),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', isDisabled.value),
  ns.is('readonly', props.readonly),
  ns.is('focused', isFocused.value),
  ns.is('custom-color', !!props.color),
  ns.is('without-controls', !props.controls),
  ns.is('custom-size', !isPresetSize(props.size)),
])

// 自定义颜色/尺寸
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-input-number-custom-color'] = props.color
    style['--cp-input-number-custom-color-light'] = `color-mix(in srgb, ${props.color} 20%, transparent)`
  }
  if (!isPresetSize(props.size)) {
    style['--cp-input-number-height'] = normalizeSize(props.size, inputNumberSizeMap)
  }
  return style
})

// 增减按钮禁用状态
const minDisabled = computed(() => props.modelValue <= props.min)
const maxDisabled = computed(() => props.modelValue >= props.max)
const resolvedWheelStep = computed(() => props.wheelStep ?? props.step)

// 精确计算
const toPrecision = (num: number): number => {
  if (props.precision === undefined) return num
  return parseFloat(num.toFixed(props.precision))
}

const setCurrentValue = (value: number) => {
  const oldValue = props.modelValue
  let newValue = value

  if (newValue < props.min) newValue = props.min
  if (newValue > props.max) newValue = props.max
  newValue = toPrecision(newValue)

  if (oldValue !== newValue) {
    emit('update:modelValue', newValue)
    emit('change', newValue, oldValue)
  }
}

const normalizeStep = (step: number) => {
  const normalizedStep = Math.abs(step)
  return Number.isFinite(normalizedStep) ? normalizedStep : 0
}

const adjustValue = (direction: 1 | -1, step: number) => {
  if (isDisabled.value || props.readonly) return

  const normalizedStep = normalizeStep(step)
  if (normalizedStep === 0) return

  if (direction > 0) {
    if (maxDisabled.value) return
    userInput.value = null
    setCurrentValue(props.modelValue + normalizedStep)
    return
  }

  if (minDisabled.value) return
  userInput.value = null
  setCurrentValue(props.modelValue - normalizedStep)
}

const increase = () => {
  adjustValue(1, props.step)
}

const decrease = () => {
  adjustValue(-1, props.step)
}

// 事件处理
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  userInput.value = target.value
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  userInput.value = null

  if (value === '' || value === '-') {
    setCurrentValue(props.min > -Infinity ? props.min : 0)
    return
  }

  const num = parseFloat(value)
  if (!isNaN(num)) {
    setCurrentValue(num)
  }
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  userInput.value = null
  emit('blur', event)
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const handleWheel = (event: WheelEvent) => {
  if (
    !props.wheel ||
    (!isHovered.value && !isFocused.value) ||
    isDisabled.value ||
    props.readonly ||
    event.deltaY === 0
  ) {
    return
  }

  const shouldIncrease = props.wheelReverse ? event.deltaY > 0 : event.deltaY < 0
  const normalizedStep = normalizeStep(resolvedWheelStep.value)
  if (normalizedStep === 0) return
  if (shouldIncrease && maxDisabled.value) return
  if (!shouldIncrease && minDisabled.value) return

  event.preventDefault()
  adjustValue(shouldIncrease ? 1 : -1, resolvedWheelStep.value)
}

// 暴露方法
const focus = () => inputRef.value?.focus()
const blur = () => inputRef.value?.blur()

defineExpose({
  focus,
  blur,
  inputRef,
})
</script>

<template>
  <div
    :class="classes"
    :style="customStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @wheel="handleWheel"
  >
    <!-- Decrease Button (left) -->
    <button
      v-if="controls && controlsPosition === 'both'"
      type="button"
      :class="[ns.e('decrease'), { 'is-disabled': minDisabled || isDisabled }]"
      :disabled="minDisabled || isDisabled"
      @click="decrease"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13H5v-2h14v2z" />
      </svg>
    </button>

    <!-- Input -->
    <input
      ref="inputRef"
      :class="ns.e('inner')"
      type="text"
      inputmode="decimal"
      :value="displayValue"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :readonly="readonly"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <!-- Increase Button (right) -->
    <button
      v-if="controls && controlsPosition === 'both'"
      type="button"
      :class="[ns.e('increase'), { 'is-disabled': maxDisabled || isDisabled }]"
      :disabled="maxDisabled || isDisabled"
      @click="increase"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </button>

    <!-- Right Controls (stacked) -->
    <div v-if="controls && controlsPosition === 'right'" :class="ns.e('controls')">
      <button
        type="button"
        :class="[ns.e('increase'), { 'is-disabled': maxDisabled || isDisabled }]"
        :disabled="maxDisabled || isDisabled"
        @click="increase"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      </button>
      <button
        type="button"
        :class="[ns.e('decrease'), { 'is-disabled': minDisabled || isDisabled }]"
        :disabled="minDisabled || isDisabled"
        @click="decrease"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </button>
    </div>
  </div>
</template>
