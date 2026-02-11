<script setup lang="ts">
/**
 * CpFooter - 页面底部容器
 * 顶部嵌入 CpDivider，支持 dividerType / dividerColor / dividerVariant 控制分割线
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { footerProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import CpDivider from '../../divider/src/divider.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Footer`,
})

const props = defineProps(footerProps)
const ns = useNamespace('footer')

const style = computed(() => ({
  '--cp-footer-height': props.height,
}))

const dividerProps = computed(() => ({
  type: props.dividerType,
  color: props.dividerColor,
  variant: props.dividerVariant,
  margin: 0,
}))
</script>

<template>
  <footer :class="ns.b()" :style="style">
    <CpDivider v-bind="dividerProps" :class="ns.e('divider')" />
    <slot />
  </footer>
</template>
