<script setup lang="ts">
/**
 * CpFooter - 页面底部容器
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { footerProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Footer`,
})

const props = defineProps(footerProps)
const ns = useNamespace('footer')

const style = computed(() => ({
  '--cp-footer-height': props.height,
}))
</script>

<template>
  <footer :class="ns.b()" :style="style">
    <slot />
  </footer>
</template>
