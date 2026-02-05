<script setup lang="ts">
/**
 * CpLoading - 赛博朋克风格加载器
 * Google Material Design 风格圆形加载器
 * 支持弧线伸缩 + 旋转双重动画
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { loadingProps } from './loading'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Loading`,
})


const props = defineProps(loadingProps)

const ns = useNamespace('loading')

// 根据尺寸返回 SVG 视图尺寸
const sizeMap = {
  sm: 24,
  md: 40,
  lg: 56,
}

const svgSize = computed(() => sizeMap[props.size] || sizeMap.md)
const radius = computed(() => (svgSize.value - props.strokeWidth) / 2)


const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('custom-color', !!props.color),
])

// 自定义颜色样式
const customStyle = computed(() => {
  if (!props.color) return {}
  return {
    '--cp-loading-color': props.color,
  }
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
