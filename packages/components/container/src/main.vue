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
const bodyHeaderPlaceholderRef = ref<HTMLElement>()
const bodyFooterPlaceholderRef = ref<HTMLElement>()
const classes = computed(() => [
  ns.b(),
  ns.is('scroll-under-header', props.scrollUnderHeader),
  ns.is('scroll-under-footer', props.scrollUnderFooter),
])

const getPlaceholderHeights = () => ({
  header: bodyHeaderPlaceholderRef.value?.offsetHeight ?? 0,
  footer: bodyFooterPlaceholderRef.value?.offsetHeight ?? 0,
})

defineExpose({
  /** @description body 顶部占位块元素 */
  bodyHeaderPlaceholderRef,
  /** @description body 底部占位块元素 */
  bodyFooterPlaceholderRef,
  /** @description 获取 body 占位块高度(px) */
  getPlaceholderHeights,
})
</script>

<template>
  <main :class="classes">
    <div
      v-if="props.scrollUnderHeader"
      ref="bodyHeaderPlaceholderRef"
      :class="ns.e('body-header-placeholder')"
      aria-hidden="true"
    />
    <slot />
    <div
      v-if="props.scrollUnderFooter"
      ref="bodyFooterPlaceholderRef"
      :class="ns.e('body-footer-placeholder')"
      aria-hidden="true"
    />
  </main>
</template>
