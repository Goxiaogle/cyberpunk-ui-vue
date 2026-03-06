<script setup lang="ts">
/**
 * CpTimeline - 赛博朋克风格时间轴容器
 * 支持 left/right/alternate 排列模式
 */
import { computed, provide, useSlots } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { timelineProps, TIMELINE_CONTEXT_KEY } from './timeline'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Timeline`,
})

defineSlots<{
  default?: () => any
}>()

const props = defineProps(timelineProps)
const slots = useSlots()

const ns = useNamespace('timeline')

// 向子项注入上下文
provide(TIMELINE_CONTEXT_KEY, {
  mode: props.mode,
  type: props.type,
  color: props.color,
  lineStyle: props.lineStyle,
  lineColor: props.lineColor,
})

const classes = computed(() => [
  ns.b(),
  ns.m(`mode-${props.mode}`),
  ns.is('reverse', props.reverse),
])

// 处理 reverse：翻转默认插槽内容顺序
const orderedSlots = computed(() => {
  const children = slots.default ? slots.default() : []
  return props.reverse ? [...children].reverse() : children
})
</script>

<template>
  <ul :class="classes">
    <template v-for="(child, index) in orderedSlots" :key="index">
      <component :is="child" />
    </template>
  </ul>
</template>
