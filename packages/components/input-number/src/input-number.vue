<script setup lang="ts">
/**
 * CpInputNumber - 赛博朋克风格数字输入框
 */
import { computed, ref } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { inputNumberProps, inputNumberEmits } from './input-number'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}InputNumber`,
})

const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)

const ns = useNamespace('input-number')

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)
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
  ns.m(props.size),
  ns.m(`controls-${props.controlsPosition}`),
  ns.is('disabled', props.disabled),
  ns.is('readonly', props.readonly),
  ns.is('focused', isFocused.value),
  ns.is('custom-color', !!props.color),
  ns.is('without-controls', !props.controls),
])

// 自定义颜色
const customStyle = computed(() => {
  if (!props.color) return {}
  return {
    '--cp-input-number-custom-color': props.color,
    '--cp-input-number-custom-color-light': `${props.color}33`,
  }
})

// 增减按钮禁用状态
const minDisabled = computed(() => props.modelValue <= props.min)
const maxDisabled = computed(() => props.modelValue >= props.max)

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

const increase = () => {
  if (props.disabled || props.readonly || maxDisabled.value) return
  setCurrentValue(props.modelValue + props.step)
}

const decrease = () => {
  if (props.disabled || props.readonly || minDisabled.value) return
  setCurrentValue(props.modelValue - props.step)
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
  <div :class="classes" :style="customStyle">
    <!-- Decrease Button (left) -->
    <button
      v-if="controls && controlsPosition === 'both'"
      type="button"
      :class="[ns.e('decrease'), { 'is-disabled': minDisabled || disabled }]"
      :disabled="minDisabled || disabled"
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
      :disabled="disabled"
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
      :class="[ns.e('increase'), { 'is-disabled': maxDisabled || disabled }]"
      :disabled="maxDisabled || disabled"
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
        :class="[ns.e('increase'), { 'is-disabled': maxDisabled || disabled }]"
        :disabled="maxDisabled || disabled"
        @click="increase"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      </button>
      <button
        type="button"
        :class="[ns.e('decrease'), { 'is-disabled': minDisabled || disabled }]"
        :disabled="minDisabled || disabled"
        @click="decrease"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </button>
    </div>
  </div>
</template>
