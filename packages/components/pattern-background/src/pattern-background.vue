<script setup lang="ts">
/**
 * CpPatternBackground - 图案背景组件
 * 用于展示各种装饰性背景图案
 */
import { computed, type CSSProperties } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { patternBackgroundProps } from './pattern-background'

defineOptions({
  name: `${COMPONENT_PREFIX}PatternBackground`,
})

const props = defineProps(patternBackgroundProps)
const ns = useNamespace('pattern-background')

// 标准化尺寸值
const normalizeSize = (value: number | string): string => {
  return typeof value === 'number' ? `${value}px` : value
}

// 获取数值（用于计算）
const getSizeNumber = (value: number | string): number => {
  if (typeof value === 'number') return value
  const num = parseFloat(value)
  return isNaN(num) ? 20 : num
}

// 根据方向获取角度
const getAngle = (direction: string): number => {
  switch (direction) {
    case 'horizontal': return 0
    case 'vertical': return 90
    case 'diagonal': return 45
    case 'diagonal-reverse': return -45
    default: return 45
  }
}

// 生成网格图案
const generateGridPattern = (): string => {
  const lineWidth = normalizeSize(props.lineWidth)
  const color = props.color
  // 移除换行符，避免部分浏览器解析错误
  return `linear-gradient(${color} ${lineWidth}, transparent 0), linear-gradient(90deg, ${color} ${lineWidth}, transparent 0)`
}

// 生成棋盘格图案
const generateCheckerboardPattern = (): string => {
  const color = props.color
  // 稳健的棋盘格实现，使用 4 层渐变合成
  return `linear-gradient(45deg, ${color} 25%, transparent 25%), linear-gradient(-45deg, ${color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${color} 75%), linear-gradient(-45deg, transparent 75%, ${color} 75%)`
}

// 生成点阵图案
const generateDotsPattern = (): string => {
  const color = props.color
  const size = getSizeNumber(props.size)
  const dotRadius = (size * props.dotScale) / 2
  return `radial-gradient(circle at center, ${color} ${dotRadius}px, transparent 0)`
}

// 生成条纹图案
const generateStripesPattern = (): string => {
  const angle = getAngle(props.direction)
  const lineWidth = getSizeNumber(props.lineWidth)
  const color = props.color
  const size = getSizeNumber(props.size)
  // 确保条纹周期由 size 决定，使用 repeating-linear-gradient
  return `repeating-linear-gradient(${angle}deg, ${color}, ${color} ${lineWidth}px, transparent ${lineWidth}px, transparent ${size}px)`
}

// 生成十字图案 (不同于网格，这里是离散的十字小标记)
const generateCrossPattern = (): string => {
  const lineWidth = normalizeSize(props.lineWidth)
  const color = props.color
  const size = getSizeNumber(props.size)
  const crossHalfSize = size * 0.15 // 十字架臂长占格子 15%
  
  // 使用多层渐变合成离散十字架
  // 注意：线性渐变需要配合 background-size 才能形成不覆盖全格的效果
  return `linear-gradient(${color} ${lineWidth}, transparent 0), linear-gradient(90deg, ${color} ${lineWidth}, transparent 0)`
}

// 计算 background-size
const backgroundSize = computed((): string => {
  const size = normalizeSize(props.size)
  
  switch (props.pattern) {
    case 'stripes':
      return 'auto auto'
    case 'checkerboard':
      return `${size} ${size}`
    case 'cross':
      // 十字架模式也可以复用网格逻辑，但如果需要缩短线条，可以在这里控制
      return `${size} ${size}`
    default:
      return `${size} ${size}`
  }
})

// 计算 background-position
const backgroundPosition = computed((): string => {
  const sizeNum = getSizeNumber(props.size)
  const lineWidthNum = getSizeNumber(props.lineWidth)
  const halfLine = lineWidthNum / 2
  
  switch (props.pattern) {
    case 'checkerboard': {
      const halfSize = sizeNum / 2
      const quarterSize = sizeNum / 4
      // 棋盘格 4 层定位
      return `0 0, 0 ${halfSize}px, ${halfSize}px -${halfSize}px, -${halfSize}px 0`
    }
    case 'grid':
    case 'cross':
      // 居中线条，使其平铺时看起来更对称
      return `0 -${halfLine}px, -${halfLine}px 0`
    default:
      return '0 0'
  }
})

// 计算 background-image
const backgroundImage = computed((): string => {
  switch (props.pattern) {
    case 'grid':
      return generateGridPattern()
    case 'checkerboard':
      return generateCheckerboardPattern()
    case 'dots':
      return generateDotsPattern()
    case 'stripes':
      return generateStripesPattern()
    case 'cross':
      return generateCrossPattern()
    default:
      return generateGridPattern()
  }
})

// 计算样式
const patternStyle = computed((): CSSProperties => {
  return {
    backgroundImage: backgroundImage.value,
    backgroundSize: backgroundSize.value,
    backgroundPosition: backgroundPosition.value,
    backgroundColor: props.backgroundColor,
    opacity: props.opacity,
  }
})

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.is('cover', props.cover),
  ns.is('decorative', props.decorative),
])
</script>

<template>
  <div :class="classes" :style="patternStyle" />
</template>
