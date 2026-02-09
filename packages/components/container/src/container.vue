<script setup lang="ts">
/**
 * CpContainer - 赛博朋克风格页面布局容器
 * 当子元素包含 Header 或 Footer 时自动切换为垂直排列
 */
import { computed, useSlots, type VNode, type Component } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { containerProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Container`,
})

const props = defineProps(containerProps)
const ns = useNamespace('container')
const slots = useSlots()

// 自动检测是否需要垂直排列
const isVertical = computed(() => {
  if (props.direction) {
    return props.direction === 'vertical'
  }
  // 检查子元素中是否包含 Header / Footer
  const defaultSlot = slots.default?.()
  if (!defaultSlot) return false

  return defaultSlot.some((vnode: VNode) => {
    const tag = (vnode.type as Component)?.name
    if (tag) {
      return [`${COMPONENT_PREFIX}Header`, `${COMPONENT_PREFIX}Footer`].includes(tag)
    }
    return false
  })
})

const classes = computed(() => [
  ns.b(),
  ns.is('vertical', isVertical.value),
])
</script>

<template>
  <section :class="classes">
    <slot />
  </section>
</template>
