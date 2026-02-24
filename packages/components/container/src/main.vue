<script setup lang="ts">
/**
 * CpMain - 主内容区域容器
 */
import { computed, ref } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { mainProps } from './container'

defineOptions({
  name: `${COMPONENT_PREFIX}Main`,
})

const props = defineProps(mainProps)
const ns = useNamespace('main')
const mainRef = ref<HTMLElement>()
const classes = computed(() => [
  ns.b(),
  ns.is('scroll-under-header', props.scrollUnderHeader),
  ns.is('scroll-under-footer', props.scrollUnderFooter),
])

const getPlaceholderHeights = () => {
  const el = mainRef.value
  if (!el) return { header: 0, footer: 0 }
  const cs = getComputedStyle(el)
  return {
    header: parseFloat(cs.paddingTop) || 0,
    footer: parseFloat(cs.paddingBottom) || 0,
  }
}

defineExpose({
  /** @description 获取 body 占位块高度(px)（由 padding 实现） */
  getPlaceholderHeights,
})
</script>

<template>
  <main ref="mainRef" :class="classes">
    <slot />
  </main>
</template>
