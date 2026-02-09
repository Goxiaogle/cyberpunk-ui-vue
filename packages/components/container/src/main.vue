<script setup lang="ts">
/**
 * CpMain - 主内容区域容器
 */
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Main`,
})

const ns = useNamespace('main')
</script>

<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
