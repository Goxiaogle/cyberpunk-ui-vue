<script setup lang="ts">
/**
 * CpTextarea - 赛博朋克风格多行文本输入框
 */
import { computed, ref, watch, nextTick, onMounted } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { textareaProps, textareaEmits } from './textarea'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Textarea`,
})

const props = defineProps(textareaProps)
const emit = defineEmits(textareaEmits)

const ns = useNamespace('textarea')

const textareaRef = ref<HTMLTextAreaElement>()
const isFocused = ref(false)

// 计算样式类
const classes = computed(() => [
  ns.b(),
  ns.m(props.size),
  ns.m(props.variant),
  ns.is('disabled', props.disabled),
  ns.is('readonly', props.readonly),
  ns.is('focused', isFocused.value),
  ns.is('custom-color', !!props.color),
])

// 自定义颜色
const customStyle = computed(() => {
  if (!props.color) return {}
  return {
    '--cp-textarea-custom-color': props.color,
    '--cp-textarea-custom-color-light': `${props.color}33`,
  }
})

// 字数统计
const textLength = computed(() => props.modelValue?.length || 0)
const showLimit = computed(() => props.showWordLimit && props.maxlength !== undefined)

// 自适应高度
const textareaStyle = computed(() => {
  const style: Record<string, string> = {}
  if (typeof props.autosize === 'object') {
    if (props.autosize.minRows) {
      style.minHeight = `${props.autosize.minRows * 1.5}em`
    }
    if (props.autosize.maxRows) {
      style.maxHeight = `${props.autosize.maxRows * 1.5}em`
    }
  }
  return style
})

const resizeTextarea = () => {
  if (!props.autosize || !textareaRef.value) return
  
  const textarea = textareaRef.value
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight}px`
}

watch(() => props.modelValue, () => {
  nextTick(resizeTextarea)
})

onMounted(() => {
  if (props.autosize) {
    resizeTextarea()
  }
})

// 事件处理
const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  emit('input', target.value, event)
  if (props.autosize) {
    resizeTextarea()
  }
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('change', target.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

// 暴露方法
const focus = () => textareaRef.value?.focus()
const blur = () => textareaRef.value?.blur()

defineExpose({
  focus,
  blur,
  textareaRef,
})
</script>

<template>
  <div :class="classes" :style="customStyle">
    <textarea
      ref="textareaRef"
      :class="ns.e('inner')"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :maxlength="maxlength"
      :style="textareaStyle"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    
    <!-- Word Limit -->
    <span v-if="showLimit" :class="ns.e('count')">
      {{ textLength }} / {{ maxlength }}
    </span>
  </div>
</template>
