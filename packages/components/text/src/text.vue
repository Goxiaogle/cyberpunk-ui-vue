<script setup lang="ts">
/**
 * CpText - 赛博朋克风格特殊文字
 * 支持多种文字效果：下划线、方框、加粗、斜体、删除线、发光、马克笔
 */
import { computed } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { textProps } from './text'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Text`,
})

const props = defineProps(textProps)

const ns = useNamespace('text')

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// 尺寸映射
const sizeMap: Record<string, string> = {
  sm: '12px',
  md: '14px',
  lg: '16px',
}

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.m(`align-${props.align}`),
  ns.is('underline', props.underline),
  ns.is('boxed', props.boxed),
  ns.is('dashed', props.dashed),
  ns.is('bold', props.bold),
  ns.is('italic', props.italic),
  ns.is('strikethrough', props.strikethrough),
  ns.is('glow', props.glow),
  ns.is('glow-pulse', props.glowPulse),
  ns.is('light-wave', props.lightWave),
  ns.is('marker', props.marker),
  ns.is('typed', props.type !== 'default' && !props.color),
  ns.is('custom-color', !!props.color),
  ns.is('unselectable', props.unselectable),
])

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  // 颜色处理
  if (props.color) {
    style['--cp-text-color'] = props.color
  } else if (props.type && props.type !== 'default' && typeColorMap[props.type]) {
    style['--cp-text-color'] = typeColorMap[props.type]
  }

  // 尺寸处理
  if (typeof props.size === 'number') {
    style['--cp-text-size'] = `${props.size}px`
  } else if (props.size && sizeMap[props.size]) {
    style['--cp-text-size'] = sizeMap[props.size]
  }

  // 发光强度 (1-10 映射到 1px-10px)
  if (props.glow && props.glowIntensity) {
    style['--cp-text-glow-intensity'] = `${props.glowIntensity}px`
  }

  // 马克笔自定义颜色
  if (props.marker && props.markerColor) {
    style['--cp-text-marker-color'] = props.markerColor
  }

  // 心跳动画时长
  if (props.glowPulse && props.glowPulseDuration) {
    style['--cp-text-pulse-duration'] = normalizeDuration(props.glowPulseDuration)
  }

  // 光波动画时长
  if (props.lightWave && props.lightWaveDuration) {
    style['--cp-text-wave-duration'] = normalizeDuration(props.lightWaveDuration)
  }

  if (props.glowPulse && props.lightWave) {
    const pulseDur = normalizeDuration(props.glowPulseDuration)
    const waveDur = normalizeDuration(props.lightWaveDuration)
    const pulseItem = `cp-text-glow-pulse ${pulseDur} ease-in-out infinite`
    const waveItem = `cp-text-light-wave ${waveDur} linear infinite`
    style['animation'] = `${pulseItem}, ${waveItem}`
  }

  return style
})
</script>

<template>
  <span
    :class="classes"
    :style="customStyle"
    :data-text="($slots.default?.({})[0]?.children as string) || ''"
  >
    <!-- 前缀插槽 -->
    <span v-if="$slots.prefix" :class="ns.e('prefix')">
      <slot name="prefix" />
    </span>

    <!-- 主内容 -->
    <span :class="ns.e('content')" :style="props.glowPulse && props.lightWave ? { animation: 'inherit' } : {}">
      <slot />
    </span>

    <!-- 后缀插槽 -->
    <span v-if="$slots.suffix" :class="ns.e('suffix')">
      <slot name="suffix" />
    </span>
  </span>
</template>
