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
const radius = computed(() => (svgSize.value - props.strokeWidth) / 2)


const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
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
      :width="svgSize"
      :height="svgSize"
      :viewBox="`0 0 ${svgSize} ${svgSize}`"
    >
      <circle
        :class="ns.e('track')"
        :cx="svgSize / 2"
        :cy="svgSize / 2"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
      />
      <circle
        :class="ns.e('circle')"
        :cx="svgSize / 2"
        :cy="svgSize / 2"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        pathLength="100"
      />
    </svg>

    <svg
      v-else-if="variant === 'spinner'"
      :class="[ns.e('svg'), ns.is('spinner')]"
      :width="svgSize"
      :height="svgSize"
      :viewBox="`0 0 ${svgSize} ${svgSize}`"
    >
      <g :transform="`translate(${svgSize / 2}, ${svgSize / 2})`">
        <line
          v-for="i in 12"
          :key="i"
          x1="0"
          :y1="-(svgSize / 2) + strokeWidth / 2"
          x2="0"
          :y2="-(svgSize / 2) + strokeWidth / 2 + (svgSize / 4)"
          :transform="`rotate(${(i - 1) * 30})`"
          :stroke-width="strokeWidth"
          stroke="currentColor"
          stroke-linecap="round"
          :style="{ opacity: i === 1 ? 1 : (i - 1) / 12 }"
        />
      </g>
    </svg>

    <svg
      v-else-if="variant === 'spinner-solid'"
      :class="[ns.e('svg'), ns.is('spinner-solid')]"
      :width="svgSize"
      :height="svgSize"
      :viewBox="`0 0 ${svgSize} ${svgSize}`"
    >
      <g :transform="`translate(${svgSize / 2}, ${svgSize / 2})`">
        <line
          v-for="i in 12"
          :key="i"
          x1="0"
          :y1="-(svgSize / 2) + strokeWidth / 2"
          x2="0"
          :y2="-(svgSize / 2) + strokeWidth / 2 + (svgSize / 4)"
          :transform="`rotate(${(i - 1) * 30})`"
          :stroke-width="strokeWidth"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </g>
    </svg>
  </div>
</template>
