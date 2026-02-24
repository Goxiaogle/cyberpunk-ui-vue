<script setup lang="ts">
/**
 * CpAside - 侧边栏容器
 * 边缘嵌入 CpDivider (vertical)，支持 dividerType / dividerColor / dividerVariant 控制分割线
 */
import { computed, ref } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { asideProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import CpDivider from '@cyberpunk-vue/components/divider/src/divider.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Aside`,
})

const props = defineProps(asideProps)
const ns = useNamespace('aside')
const contentRef = ref<HTMLElement>()
const classes = computed(() => [
  ns.b(),
  ns.is(props.position),
  ns.is('scroll-under-header', props.scrollUnderHeader),
  ns.is('scroll-under-footer', props.scrollUnderFooter),
])

const style = computed(() => ({
  '--cp-aside-width': props.width,
}))

const dividerProps = computed(() => ({
  direction: 'vertical' as const,
  type: props.dividerType,
  color: props.dividerColor,
  variant: props.dividerVariant,
  margin: 0,
}))

// 分割线位置：左侧边栏在右边显示分割线，右侧边栏在左边
const isRight = computed(() => props.position === 'right')

const getPlaceholderHeights = () => {
  const el = contentRef.value
  if (!el) return { header: 0, footer: 0 }
  const cs = getComputedStyle(el)
  return {
    header: parseFloat(cs.paddingTop) || 0,
    footer: parseFloat(cs.paddingBottom) || 0,
  }
}

defineExpose({
  /** @description 获取 sidebar 占位块高度(px)（由 padding 实现） */
  getPlaceholderHeights,
})
</script>

<template>
  <aside
    :class="classes"
    :style="style"
    :data-position="props.position"
  >
    <CpDivider v-if="isRight" v-bind="dividerProps" :class="ns.e('divider')" />
    <div ref="contentRef" :class="ns.e('content')">
      <slot />
    </div>
    <CpDivider v-if="!isRight" v-bind="dividerProps" :class="ns.e('divider')" />
  </aside>
</template>
