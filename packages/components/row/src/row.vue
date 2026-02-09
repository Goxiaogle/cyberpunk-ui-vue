<script setup lang="ts">
/**
 * CpRow - 赛博朋克风格栅格行容器
 * 配合 CpCol 实现 24 栅格布局系统
 */
import { computed, provide } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { rowProps, rowContextKey } from './row'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Row`,
})

const props = defineProps(rowProps)
const ns = useNamespace('row')

// 向子 Col 提供 gutter
provide(rowContextKey, {
  gutter: props.gutter,
})

// justify 映射
const justifyMap: Record<string, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
}

// align 映射
const alignMap: Record<string, string> = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
}

const classes = computed(() => [
  ns.b(),
  ns.is('no-wrap', !props.wrap),
])

const style = computed(() => {
  const s: Record<string, string> = {}

  // gutter 通过负 margin 实现
  if (props.gutter) {
    const half = `${props.gutter / 2}px`
    s.marginLeft = `-${half}`
    s.marginRight = `-${half}`
  }

  s.justifyContent = justifyMap[props.justify] || 'flex-start'
  s.alignItems = alignMap[props.align] || 'flex-start'

  return s
})
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :style="style"
  >
    <slot />
  </component>
</template>
