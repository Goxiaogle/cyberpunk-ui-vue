<script setup lang="ts">
/**
 * CpProgress - 赛博朋克风格进度条
 * 支持线性、环形、仪表盘三种模式
 * 支持条纹效果、流动动画、不确定状态
 */
import { computed, type CSSProperties } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { progressProps } from './progress'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Progress`,
})

const props = defineProps(progressProps)

const ns = useNamespace('progress')

// 计算实际百分比 (0-100)
const actualPercentage = computed(() => {
  return Math.min(Math.max((props.percentage / props.max) * 100, 0), 100)
})

// 计算进度条颜色
const progressColor = computed(() => {
  if (typeof props.color === 'function') {
    return props.color(props.percentage)
  }
  if (Array.isArray(props.color)) {
    // 根据百分比选择颜色
    const colors = props.color as string[]
    const index = Math.floor((actualPercentage.value / 100) * (colors.length - 1))
    return colors[Math.min(index, colors.length - 1)]
  }
  return props.color || undefined
})

// 计算 stroke-width 默认值
const strokeWidthComputed = computed(() => {
  if (props.strokeWidth !== undefined) return props.strokeWidth
  switch (props.size) {
    case 'sm': return 6
    case 'md': return 10
    case 'lg': return 14
    case 'xl': return 18
    case 'xxl': return 22
    default: return 8
  }
})

// 线性进度条样式
const barStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    width: `${actualPercentage.value}%`,
  }
  if (progressColor.value) {
    style['--cp-progress-color'] = progressColor.value
  }
  if (props.textColor) {
    style['--cp-progress-text-color'] = props.textColor
  }
  return style
})

// 不确定模式样式
const indeterminateStyle = computed<CSSProperties>(() => {
  return {
    '--cp-progress-duration': normalizeDuration(props.duration),
  }
})

// 环形进度条参数
const circleParams = computed(() => {
  const size = props.width
  const stroke = strokeWidthComputed.value
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  // 仪表盘模式的弧度 (3/4 圆)
  const dashboardDegree = props.type === 'dashboard' ? 0.75 : 1
  const dashLength = circumference * dashboardDegree
  const gapLength = circumference // 总是使用全长作为间隔，确保 offset 能够正确控制进度显示

  // 进度偏移量
  const offset = dashLength * (1 - actualPercentage.value / 100)

  // 内圈装饰参数 (Mecha 风格)
  // 半径缩小：主半径 - 笔触/2 - 间距 (4px)
  const innerRadius = radius - stroke - 4
  const innerCircumference = 2 * Math.PI * innerRadius
  const innerDashLength = innerCircumference * dashboardDegree
  const innerGapLength = innerCircumference * (1 - dashboardDegree)
  const innerOffset = innerDashLength // 满圈显示，或者也可以做动画

  return {
    size,
    stroke,
    radius,
    circumference,
    center,
    dashLength,
    gapLength,
    offset,
    innerRadius: Math.max(0, innerRadius), // 防止负数
    innerCircumference,
    innerDashLength,
    innerGapLength,
    innerOffset,
  }
})

// 环形轨道样式
const circleTrackStyle = computed<CSSProperties>(() => {
  const { dashLength, gapLength } = circleParams.value
  return {
    strokeDasharray: `${dashLength} ${gapLength}`,
    strokeWidth: `${strokeWidthComputed.value - 2}`, // 轨道稍微细一点，更有层次感
  }
})

// 内圈装饰样式
const innerCircleStyle = computed<CSSProperties>(() => {
  return {
    strokeDasharray: `4 8`, // 虚线效果
    strokeWidth: '2', // 固定细线
    opacity: 0.5,
  }
})

// 环形进度样式
const circleBarStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}
  if (progressColor.value) {
    // 使用 CSS 变量以兼容 SCSS 中的 fill/stroke 逻辑
    style['--cp-progress-color'] = progressColor.value
  }
  return style
})

// 生成弧形路径 (支持刀锋切角)
// 对于 clip 模式，使用多边形路径模拟切角效果
const progressArcPath = computed(() => {
  const { center, radius } = circleParams.value
  const stroke = strokeWidthComputed.value

  // 计算进度对应的角度
  const progressRatio = actualPercentage.value / 100
  const dashboardDegree = props.type === 'dashboard' ? 0.75 : 1
  const totalAngle = 360 * dashboardDegree * progressRatio

  // 0% 情况：返回一个几乎不可见的极小路径，保持 Path 元素存在以避免动画跳动
  if (totalAngle <= 0 || props.percentage <= 0) {
    return `M ${center + radius} ${center} L ${center + radius + 0.01} ${center}`
  }

  // 圆角模式使用 circle 元素
  if (props.shape === 'round') return ''

  // 角度转弧度 (角度从 3 点钟方向开始，顺时针方向)
  const toRad = (deg: number) => (deg * Math.PI) / 180

  // 计算内外半径
  const innerRadius = radius - stroke / 2
  const outerRadius = radius + stroke / 2

  // 起始角度 (固定为 0，因为旋转由容器 CSS 负责)
  const startAngle = 0
  const endAngle = Math.min(totalAngle, 359.99)

  const startRad = toRad(startAngle)
  const endRad = toRad(endAngle)

  // 坐标计算：3 点钟方向为 0 度，顺时针
  // X = center + R * cos(rad)
  // Y = center + R * sin(rad)
  const outerStartX = center + outerRadius * Math.cos(startRad)
  const outerStartY = center + outerRadius * Math.sin(startRad)
  const outerEndX = center + outerRadius * Math.cos(endRad)
  const outerEndY = center + outerRadius * Math.sin(endRad)

  const innerStartX = center + innerRadius * Math.cos(startRad)
  const innerStartY = center + innerRadius * Math.sin(startRad)
  const innerEndX = center + innerRadius * Math.cos(endRad)
  const innerEndY = center + innerRadius * Math.sin(endRad)

  const largeArcFlag = endAngle > 180 ? 1 : 0

  // 100% 满圆特殊处理：使用两个半圆弧，确保闭合且无间隙
  // 注意：dashboard 模式不需要这个，因为它永远不是完整的圆
  if (actualPercentage.value >= 100 && props.type !== 'dashboard') {
    const midAngle = 180
    const midRad = toRad(midAngle)
    const outerMidX = center + outerRadius * Math.cos(midRad)
    const outerMidY = center + outerRadius * Math.sin(midRad)
    const innerMidX = center + innerRadius * Math.cos(midRad)
    const innerMidY = center + innerRadius * Math.sin(midRad)

    // 满圆：两个半圆弧组成
    return [
      `M ${outerStartX} ${outerStartY}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${outerMidX} ${outerMidY}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${outerStartX} ${outerStartY + 0.01}`,
      `L ${innerStartX} ${innerStartY + 0.01}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${innerMidX} ${innerMidY}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStartX} ${innerStartY}`,
      'Z'
    ].join(' ')
  }

  if (props.shape === 'clip') {
    // 斜切模式 (Slant Cut)：通过内圈端点偏移产生斜向切口
    // 计算偏移角度 (约为 strokeWidth 的一半对应的弧度)
    const clipAngleDeg = (stroke / 2 / radius) * (180 / Math.PI)

    // 内圈端点偏移
    const innerStartClipRad = toRad(startAngle + clipAngleDeg)
    const innerEndClipRad = toRad(endAngle - clipAngleDeg)

    const innerStartClipX = center + innerRadius * Math.cos(innerStartClipRad)
    const innerStartClipY = center + innerRadius * Math.sin(innerStartClipRad)
    const innerEndClipX = center + innerRadius * Math.cos(innerEndClipRad)
    const innerEndClipY = center + innerRadius * Math.sin(innerEndClipRad)

    return [
      `M ${outerStartX} ${outerStartY}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
      `L ${innerEndClipX} ${innerEndClipY}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartClipX} ${innerStartClipY}`,
      'Z'
    ].join(' ')
  } else {
    // no-clip 模式：平头末端
    return [
      `M ${outerStartX} ${outerStartY}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
      `L ${innerEndX} ${innerEndY}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}`,
      'Z'
    ].join(' ')
  }
})

// 是否使用路径模式
const usePathMode = computed(() => props.shape !== 'round')

// 环形容器样式
const circleSvgStyle = computed<CSSProperties>(() => {
  // 旋转起点：
  // Circle 从顶部 (-90deg) 开始顺时针绘制
  // Dashboard 从左下角 (135deg) 开始顺时针绘制
  const rotation = props.type === 'dashboard' ? 'rotate(135deg)' : 'rotate(-90deg)'
  return {
    width: `${props.width}px`,
    height: `${props.width}px`,
    transform: rotation,
  }
})

// 格式化显示文字
const displayText = computed(() => {
  if (props.format) {
    return props.format(props.percentage)
  }
  // Step 模式显示 "当前/总数"，普通模式显示百分比
  if (props.steps) {
    return `${props.percentage}/${props.max}`
  }
  return `${Math.round(actualPercentage.value)}%`
})

// CSS 类
const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('status', !!props.status),
  ns.is(props.status!, !!props.status),
  ns.is('text-inside', props.textInside && props.type === 'line'),
  ns.is('striped', props.striped),
  ns.is('striped-flow', props.stripedFlow),
  ns.is('indeterminate', props.indeterminate),
  ns.is('loading', props.loading),
  ns.is('custom-color', !!progressColor.value),
  ns.m(`shape-${props.shape}`),
])

// Step 模式：是否启用分段渲染
const isStepMode = computed(() => props.steps && props.type === 'line')

// Step 模式：计算各分段状态
interface StepItem {
  index: number
  state: 'full' | 'current' | 'empty'
  color: string | undefined
}

const stepItems = computed<StepItem[]>(() => {
  if (!props.steps) return []
  // 分段数量由 max 决定
  const stepCount = Math.max(1, Math.floor(props.max))
  return Array.from({ length: stepCount }, (_, index) => {
    // 每段对应的值是 index + 1
    const stepValue = index + 1
    let state: 'full' | 'current' | 'empty'
    if (props.percentage >= stepValue) state = 'full'
    else if (props.percentage > index) state = 'current'
    else state = 'empty'
    return {
      index,
      state,
      color: props.stepColors[index] || undefined,
    }
  })
})
</script>

<template>
  <div :class="classes" :style="indeterminate ? indeterminateStyle : undefined">
    <!-- 线性进度条 -->
    <template v-if="type === 'line'">
      <!-- Step 模式：分段进度条 -->
      <template v-if="isStepMode">
        <div :class="ns.e('outer')">
          <div
            :class="[ns.e('inner'), ns.e('steps')]"
            :style="{ height: `${strokeWidthComputed}px`, gap: `${stepGap}px` }"
          >
            <div
              v-for="item in stepItems"
              :key="item.index"
              :class="[
                ns.e('step'),
                ns.is('full', item.state === 'full'),
                ns.is('current', item.state === 'current'),
              ]"
              :style="item.color ? { '--cp-progress-color': item.color } : undefined"
            />
          </div>
        </div>
        <!-- 外部文字 -->
        <div v-if="showText && !indeterminate" :class="ns.e('text')">
          <slot>{{ displayText }}</slot>
        </div>
      </template>
      <!-- 普通模式：连续进度条 -->
      <template v-else>
        <div :class="ns.e('outer')">
          <div
            :class="ns.e('inner')"
            :style="{ height: `${strokeWidthComputed}px` }"
          >
            <div
              :class="ns.e('bar')"
              :style="barStyle"
            >
              <!-- 内部文字 -->
              <span v-if="showText && textInside && !indeterminate" :class="ns.e('innerText')">
                <slot>{{ displayText }}</slot>
              </span>
            </div>
          </div>
        </div>
        <!-- 外部文字 -->
        <div v-if="showText && !textInside && !indeterminate" :class="ns.e('text')">
          <slot>{{ displayText }}</slot>
        </div>
      </template>
    </template>

    <!-- 环形/仪表盘进度条 -->
    <template v-else>
      <svg
        :class="ns.e('circle')"
        :style="circleSvgStyle"
        :viewBox="`0 0 ${circleParams.size} ${circleParams.size}`"
      >
        <!-- 轨道 -->
        <circle
          :class="ns.e('track')"
          :cx="circleParams.center"
          :cy="circleParams.center"
          :r="circleParams.radius"
          fill="none"
          :style="circleTrackStyle"
        />

        <!-- 内圈装饰 (Mecha) -->
        <circle
          :class="ns.e('inner-track')"
          :cx="circleParams.center"
          :cy="circleParams.center"
          :r="circleParams.innerRadius"
          fill="none"
          :style="innerCircleStyle"
        />

        <!-- 进度 (路径模式 - 刀锋/平头) -->
        <path
          v-if="usePathMode"
          :class="ns.e('path')"
          :d="progressArcPath"
          :style="circleBarStyle"
        />

        <!-- 进度 (圆角模式) -->
        <circle
          v-else
          :class="ns.e('path')"
          :cx="circleParams.center"
          :cy="circleParams.center"
          :r="circleParams.radius"
          fill="none"
          :stroke-width="strokeWidthComputed"
          stroke-linecap="round"
          :style="{
            ...circleBarStyle,
            strokeDasharray: `${circleParams.dashLength} ${circleParams.gapLength}`,
            strokeDashoffset: circleParams.offset,
          }"
        />
      </svg>
      <!-- 中心文字 -->
      <div v-if="showText && !indeterminate" :class="ns.e('text')">
        <slot>{{ displayText }}</slot>
      </div>
    </template>
  </div>
</template>
