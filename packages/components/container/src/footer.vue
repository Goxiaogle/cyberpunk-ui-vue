<script setup lang="ts">
/**
 * CpFooter - 页面底部容器
 * 顶部嵌入 CpDivider，支持 dividerType / dividerColor / dividerVariant 控制分割线
 */
import { computed, onMounted, ref, watch } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { footerProps } from './container'
import { COMPONENT_PREFIX, CSS_NAMESPACE } from '@cyberpunk-vue/constants'
import CpDivider from '@cyberpunk-vue/components/divider/src/divider.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Footer`,
})

const props = defineProps(footerProps)
const ns = useNamespace('footer')
const footerRef = ref<HTMLElement>()

const style = computed(() => ({
  '--cp-footer-height': props.height,
  '--cp-layout-footer-height': props.height,
}))

const dividerProps = computed(() => ({
  type: props.dividerType,
  color: props.dividerColor,
  variant: props.dividerVariant,
  margin: 0,
}))

const syncLayoutFooterHeight = () => {
  const footerEl = footerRef.value
  if (!footerEl) return
  const containerEl = footerEl.closest<HTMLElement>(`.${CSS_NAMESPACE}-container`)
  if (!containerEl) return
  containerEl.style.setProperty('--cp-layout-footer-height', props.height)
}

onMounted(syncLayoutFooterHeight)
watch(() => props.height, syncLayoutFooterHeight)

const getHeight = () => footerRef.value?.offsetHeight ?? 0

defineExpose({
  /** @description footer 元素 */
  footerRef,
  /** @description 获取当前 footer 高度(px) */
  getHeight,
})
</script>

<template>
  <footer ref="footerRef" :class="[ns.b(), ns.is('no-divider', !props.divider)]" :style="style">
    <CpDivider v-if="props.divider" v-bind="dividerProps" :class="ns.e('divider')" />
    <slot />
  </footer>
</template>
