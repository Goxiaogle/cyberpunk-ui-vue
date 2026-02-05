<script setup lang="ts">
/**
 * CpStatusIndicator - 赛博朋克风格状态指示器
 * 独立状态显示组件，支持多种形状和动画效果
 */
import { computed, useSlots } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { statusIndicatorProps } from './status-indicator'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}StatusIndicator`,
})

const props = defineProps(statusIndicatorProps)
const slots = useSlots()

const ns = useNamespace('status-indicator')

const hasLabel = computed(() => !!props.label || !!slots.default)

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.m(`shape-${props.shape}`),
  ns.m(`animation-${props.animation}`),
  ns.is('custom-color', !!props.color),
  ns.is('with-label', hasLabel.value),
])

// 自定义样式变量
const customStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.color) {
    styles['--cp-status-indicator-color'] = props.color
  }

  if (props.duration) {
    const dur = normalizeDuration(props.duration)
    if (dur) styles['--cp-status-indicator-duration'] = dur
  }

  if (props.intensity !== 1) {
    styles['--cp-status-indicator-intensity'] = String(props.intensity)
  }

  if (props.gap !== '') {
    styles['--cp-status-indicator-gap'] = typeof props.gap === 'number'
      ? `${props.gap}px`
      : props.gap
  }

  return styles
})
</script>

<template>
  <span :class="classes" :style="customStyle">
    <span :class="ns.e('dot')">
      <span v-if="animation === 'pulse'" :class="ns.e('pulse')" />
    </span>
    <span v-if="hasLabel" :class="ns.e('label')">
      <slot>{{ label }}</slot>
    </span>
  </span>
</template>
