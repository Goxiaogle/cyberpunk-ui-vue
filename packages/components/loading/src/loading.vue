<script setup lang="ts">
/**
 * CpLoading - 赛博朋克风格加载器
 * Google Material Design 风格圆形加载器
 * 支持弧线伸缩 + 旋转双重动画
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
      :class="ns.e('svg')"
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
  </div>
</template>
