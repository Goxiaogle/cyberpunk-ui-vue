<script setup lang="ts">
/**
 * CpHeader - 页面头部容器
 * 底部嵌入 CpDivider，支持 dividerType / dividerColor / dividerVariant 控制分割线
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { headerProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import CpDivider from '../../divider/src/divider.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Header`,
})

const props = defineProps(headerProps)
const ns = useNamespace('header')

const style = computed(() => ({
  '--cp-header-height': props.height,
}))

const dividerProps = computed(() => ({
  type: props.dividerType,
  color: props.dividerColor,
  variant: props.dividerVariant,
  margin: 0,
}))
</script>

<template>
  <header :class="ns.b()" :style="style">
    <slot />
    <CpDivider v-bind="dividerProps" :class="ns.e('divider')" />
  </header>
</template>
