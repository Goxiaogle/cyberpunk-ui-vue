<script setup lang="ts">
/**
 * CpSpacer - 弹性空间占位组件
 * 仅提供 flex-grow: 1 效果，用于在 flex 布局中填充剩余空间
 */
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Spacer`,
})
</script>

<template>
  <div style="flex-grow: 1" />
</template>
