<script setup lang="ts">
/**
 * CpCol - 赛博朋克风格栅格列
 * 基于 24 栅格系统，支持 span/offset/push/pull
 */
import { computed, inject } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { colProps } from './col'
import { rowContextKey } from '@cyberpunk-vue/components/row/src/row'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Col`,
})

const props = defineProps(colProps)
const ns = useNamespace('col')

// 注入父 Row 的 gutter
const rowContext = inject(rowContextKey, { gutter: 0 })

const classes = computed(() => {
  const cls: string[] = [ns.b()]

  if (props.span || props.span === 0) {
    cls.push(ns.m(`${props.span}`))
  }
  if (props.offset > 0) {
    cls.push(ns.m(`offset-${props.offset}`))
  }
  if (props.push > 0) {
    cls.push(ns.m(`push-${props.push}`))
  }
  if (props.pull > 0) {
    cls.push(ns.m(`pull-${props.pull}`))
  }

  return cls
})

const style = computed(() => {
  const s: Record<string, string> = {}

  if (rowContext.gutter) {
    const half = `${rowContext.gutter / 2}px`
    s.paddingLeft = half
    s.paddingRight = half
  }

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
