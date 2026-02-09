<script setup lang="ts">
/**
 * CpHeader - 页面头部容器
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { headerProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Header`,
})

const props = defineProps(headerProps)
const ns = useNamespace('header')

const style = computed(() => ({
  '--cp-header-height': props.height,
}))
</script>

<template>
  <header :class="ns.b()" :style="style">
    <slot />
  </header>
</template>
