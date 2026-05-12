<script setup lang="ts">
/**
 * CpLoading - 赛博朋克风格加载器
 * 支持圆形动画 (circular) 与传统转圈 (spinner/spinner-solid) 变体
 */
import { computed } from 'vue'
import { useNamespace, isPresetSize, normalizeSize, parseSizeNumber } from '@cyberpunk-vue/hooks'
import { loadingProps } from './loading'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Loading`,
})


const props = defineProps(loadingProps)

const ns = useNamespace('loading')

// 根据尺寸返回 SVG 视图尺寸
const sizeMap: Record<string, number> = {
  sm: 24,
  md: 40,
  lg: 56,
}

// 计算 SVG 尺寸 - 支持自定义值
const svgSize = computed(() => {
  return parseSizeNumber(props.size, sizeMap, sizeMap.md)
})
const resolvedStrokeWidth = computed(() => {
  return props.strokeWidth ?? svgSize.value * 0.1
})

// ===== Circular (SVG) 参数 =====
// 参考 MUI CircularProgress：ViewBox 44x44，圆心 (44,44)
const CIRCULAR_SIZE = 44
const circularStrokeWidth = computed(() => {
  return resolvedStrokeWidth.value * (CIRCULAR_SIZE / svgSize.value)
})
const circularRadius = computed(() => {
  return (CIRCULAR_SIZE - circularStrokeWidth.value) / 2
})
const circularCircleStyle = computed(() => {
  const circumference = 2 * Math.PI * circularRadius.value
  const minDash = Math.max(circularStrokeWidth.value * 1.25, circumference * 0.06)
  const maxDash = circumference * 0.8

  return {
    '--cp-loading-circle-dash-min': `${minDash}px`,
    '--cp-loading-circle-dash-max': `${maxDash}px`,
    '--cp-loading-circle-gap': `${circumference}px`,
    '--cp-loading-circle-offset-mid': `${circumference * -0.12}px`,
    '--cp-loading-circle-offset-end': `${-(circumference + minDash)}px`,
  }
})

// ===== Spinner 参数 =====
// 将实际笔触宽度映射到 50x50 的内部视口
const viewBoxSize = 50;
const mappedStrokeWidth = computed(() => {
  return resolvedStrokeWidth.value * (viewBoxSize / svgSize.value);
});

// 计算长条变体的 Y 轴起止坐标
const spinnerY1 = computed(() => -(viewBoxSize / 2) + mappedStrokeWidth.value / 2 + 2.5);
const spinnerY2 = computed(() => -(viewBoxSize / 2) + mappedStrokeWidth.value / 2 + (viewBoxSize / 4) + 2.5);


const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.variant),
  isPresetSize(props.size) && ns.m(props.size),
  ns.is('custom-color', !!props.color),
  ns.is('custom-size', !isPresetSize(props.size)),
])

// 自定义颜色/尺寸样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-loading-color'] = props.color
  }
  style['--cp-loading-stroke-width'] = `${resolvedStrokeWidth.value}px`
  if (!isPresetSize(props.size)) {
    style['--cp-loading-size'] = normalizeSize(props.size, sizeMap)
  }
  return style
})
</script>

<template>
  <div :class="classes" :style="customStyle">
    <svg
      v-if="variant === 'circular'"
      :class="[ns.e('svg'), ns.is('circular')]"
      viewBox="22 22 44 44"
    >
      <circle
        :class="ns.e('circle')"
        cx="44"
        cy="44"
        :r="circularRadius"
        fill="none"
        :stroke-width="circularStrokeWidth"
        stroke="currentColor"
        stroke-linecap="round"
        :style="circularCircleStyle"
      />
    </svg>

    <svg
      v-else-if="variant === 'spinner'"
      :class="[ns.e('svg'), ns.is('spinner')]"
      viewBox="0 0 50 50"
    >
      <g transform="translate(25, 25)">
        <line
          v-for="i in 12"
          :key="i"
          x1="0"
          :y1="spinnerY1"
          x2="0"
          :y2="spinnerY2"
          :transform="`rotate(${(i - 1) * 30})`"
          :stroke-width="mappedStrokeWidth"
          stroke="currentColor"
          stroke-linecap="round"
          :style="{ opacity: i === 1 ? 1 : (i - 1) / 12 }"
        />
      </g>
    </svg>

    <svg
      v-else-if="variant === 'spinner-solid'"
      :class="[ns.e('svg'), ns.is('spinner-solid')]"
      viewBox="0 0 50 50"
    >
      <g transform="translate(25, 25)">
        <line
          v-for="i in 12"
          :key="i"
          x1="0"
          :y1="spinnerY1"
          x2="0"
          :y2="spinnerY2"
          :transform="`rotate(${(i - 1) * 30})`"
          :stroke-width="mappedStrokeWidth"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </g>
    </svg>
  </div>
</template>
