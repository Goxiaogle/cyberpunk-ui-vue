<script setup lang="ts">
/**
 * CpInput - 赛博朋克风格输入框
 * 支持多种尺寸、形态变体、可清空
 * 支持 prefix/suffix 插槽、自定义颜色
 * 支持密码可见性切换、字数统计
 */
import { computed, ref, useSlots, onMounted, nextTick } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { inputProps, inputEmits } from './input'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Input`,
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots = useSlots()

const ns = useNamespace('input')

// 输入框尺寸预设映射
const inputSizeMap = { sm: 28, md: 36, lg: 44 }

// 内部状态
const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)
const isClearing = ref(false)
const passwordVisible = ref(false)

// 计算实际的 input type (处理密码可见性)
const inputType = computed(() => {
  if (props.type === 'password' && props.showPassword) {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type
})

// 计算属性
const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', props.disabled),
  ns.is('readonly', props.readonly),
  ns.is('focused', isFocused.value),
  ns.is('clearable', props.clearable && !!props.modelValue),
  ns.is('custom-color', !!props.color),
  ns.is('clearing', isClearing.value),
  ns.is('custom-size', !isPresetSize(props.size)),
])

// 自定义颜色/尺寸样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.color) {
    style['--cp-input-custom-color'] = props.color
    style['--cp-input-custom-color-light'] = `${props.color}33`
  }

  // 自定义 inactive 边框颜色
  if (props.inactiveBorderColor) {
    style['--cp-input-inactive-border-color'] = props.inactiveBorderColor
  }

  // 自定义 placeholder 颜色
  if (props.placeholderColor) {
    style['--cp-input-placeholder-color'] = props.placeholderColor
  }

  // 自定义文字颜色
  if (props.textColor) {
    style['--cp-input-text-color'] = props.textColor
  }

  // 自定义尺寸
  if (!isPresetSize(props.size)) {
    style['--cp-input-height'] = normalizeSize(props.size, inputSizeMap)
  }

  // 清除动画时长
  if (props.clearDuration !== 150) {
    style['--cp-input-clear-duration'] = `${props.clearDuration}ms`
  }
  
  return style
})

// 是否显示清空按钮
const showClear = computed(() => {
  return props.clearable && !props.disabled && !props.readonly && !!props.modelValue
})

// 是否显示密码切换按钮
const showPasswordToggle = computed(() => {
  return props.type === 'password' && props.showPassword && !props.disabled
})

// 字数统计
const textLength = computed(() => {
  return String(props.modelValue || '').length
})

const showLimit = computed(() => {
  return props.showWordLimit
})

const hasPrefix = computed(() => !!slots.prefix)

// 事件处理
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
  emit('input', value, event)
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('change', value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleClear = () => {
  // 触发清除动画
  isClearing.value = true
  
  // 动画结束后清空值 (与 CSS 动画时长匹配)
  setTimeout(() => {
    emit('update:modelValue', '')
    emit('clear')
    isClearing.value = false
    nextTick(() => {
      inputRef.value?.focus()
    })
  }, props.clearDuration)
}

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}

// 暴露方法
const focus = () => inputRef.value?.focus()
const blur = () => inputRef.value?.blur()

defineExpose({
  focus,
  blur,
  inputRef,
})

// 自动聚焦
onMounted(() => {
  if (props.autofocus) {
    inputRef.value?.focus()
  }
})
</script>

<template>
  <div :class="classes" :style="customStyle">
    <!-- Prefix Slot -->
    <span v-if="hasPrefix" :class="ns.e('prefix')">
      <slot name="prefix" />
    </span>
    
    <!-- Input Element -->
    <input
      ref="inputRef"
      :class="ns.e('inner')"
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    
    <!-- Clear Button -->
    <span 
      v-if="showClear" 
      :class="ns.e('clear')"
      @click="handleClear"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
      </svg>
    </span>
    
    <!-- Password Toggle Button -->
    <span 
      v-if="showPasswordToggle" 
      :class="ns.e('password')"
      @click="togglePasswordVisibility"
    >
      <!-- Eye Open (visible) -->
      <svg v-if="passwordVisible" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
      <!-- Eye Closed (hidden) -->
      <svg v-else viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
      </svg>
    </span>
    
    <!-- Suffix Slot -->
    <span v-if="slots.suffix" :class="ns.e('suffix')">
      <slot name="suffix" />
    </span>
    
    <!-- Word Limit -->
    <span v-if="showLimit" :class="ns.e('count')">
      {{ textLength }}<template v-if="maxlength !== undefined"> / {{ maxlength }}</template>
    </span>
  </div>
</template>
