<script setup lang="ts">
/**
 * CpAside - 侧边栏容器
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { asideProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Aside`,
})

const props = defineProps(asideProps)
const ns = useNamespace('aside')

const style = computed(() => ({
  '--cp-aside-width': props.width,
}))
</script>

<template>
  <aside :class="ns.b()" :style="style">
    <slot />
  </aside>
</template>
