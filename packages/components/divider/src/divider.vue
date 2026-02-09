<script setup lang="ts">
/**
 * CpDivider - 赛博朋克风格分割线
 * 支持水平/垂直方向、文字嵌入、多种颜色类型和变体样式
 */
import { computed, useSlots } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { dividerProps } from './divider'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Divider`,
})

const props = defineProps(dividerProps)
const slots = useSlots()
const ns = useNamespace('divider')

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// 是否有内容（插槽）
const hasContent = computed(() => !!slots.default)

// 实际变体（glow 快捷方式优先）
const actualVariant = computed(() => props.glow ? 'glow' : props.variant)

// 实际线条样式（dashed 快捷方式优先）
const actualBorderStyle = computed(() => props.dashed ? 'dashed' : props.borderStyle)

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.m(props.direction),
  ns.m(`variant-${actualVariant.value}`),
  ns.m(`position-${props.contentPosition}`),
  ns.m(`type-${props.type}`),
  ns.is('with-content', hasContent.value && props.direction === 'horizontal'),
  ns.is('custom-color', !!props.color),
  ns.is('dashed', actualBorderStyle.value === 'dashed'),
  ns.is('dotted', actualBorderStyle.value === 'dotted'),
  ns.is('double', actualBorderStyle.value === 'double'),
])

// 归一化尺寸值
const normalizeValue = (val: number | string): string => {
  if (typeof val === 'number') return `${val}px`
  return val
}

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  // 颜色
  if (props.color) {
    style['--cp-divider-color'] = props.color
  } else if (props.type !== 'default' && typeColorMap[props.type]) {
    style['--cp-divider-color'] = typeColorMap[props.type]
  }

  // 线条粗细
  if (props.thickness !== 1) {
    style['--cp-divider-thickness'] = normalizeValue(props.thickness)
  }

  // 间距
  if (props.margin) {
    style['--cp-divider-margin'] = normalizeValue(props.margin)
  }

  return style
})
</script>

<template>
  <div
    role="separator"
    :class="classes"
    :style="customStyle"
  >
    <!-- 水平模式下的文字内容 -->
    <span
      v-if="hasContent && props.direction === 'horizontal'"
      :class="ns.e('text')"
    >
      <slot />
    </span>
  </div>
</template>
