<script setup lang="ts">
/**
 * CpHeader - 页面头部容器
 * 底部嵌入 CpDivider，支持 dividerType / dividerColor / dividerVariant 控制分割线
 */
import { computed, onMounted, ref, watch } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { headerProps } from './container'
import { COMPONENT_PREFIX, CSS_NAMESPACE } from '@cyberpunk-vue/constants'
import CpDivider from '@cyberpunk-vue/components/divider/src/divider.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Header`,
})

const props = defineProps(headerProps)
const ns = useNamespace('header')
const headerRef = ref<HTMLElement>()

const style = computed(() => ({
  '--cp-header-height': props.height,
  '--cp-layout-header-height': props.height,
}))

const dividerProps = computed(() => ({
  type: props.dividerType,
  color: props.dividerColor,
  variant: props.dividerVariant,
  margin: 0,
}))

const syncLayoutHeaderHeight = () => {
  const headerEl = headerRef.value
  if (!headerEl) return
  const containerEl = headerEl.closest<HTMLElement>(`.${CSS_NAMESPACE}-container`)
  if (!containerEl) return
  containerEl.style.setProperty('--cp-layout-header-height', props.height)
}

onMounted(syncLayoutHeaderHeight)
watch(() => props.height, syncLayoutHeaderHeight)

const getHeight = () => headerRef.value?.offsetHeight ?? 0

defineExpose({
  /** @description header 元素 */
  headerRef,
  /** @description 获取当前 header 高度(px) */
  getHeight,
})
</script>

<template>
  <header ref="headerRef" :class="[ns.b(), ns.is('no-divider', !props.divider)]" :style="style">
    <slot />
    <CpDivider v-if="props.divider" v-bind="dividerProps" :class="ns.e('divider')" />
  </header>
</template>
