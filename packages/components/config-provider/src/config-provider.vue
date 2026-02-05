<script setup lang="ts">
/**
 * CpConfigProvider - 全局配置提供者
 * 提供组件默认值和主题配置
 */
import { provide, toRef, watchEffect } from 'vue'
import { DEFAULTS_KEY, THEME_KEY, COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { configProviderProps } from './config-provider'

defineOptions({
  name: `${COMPONENT_PREFIX}ConfigProvider`,
})

const props = defineProps(configProviderProps)

// 提供组件默认值
provide(DEFAULTS_KEY, props.defaults)

// 提供主题 (响应式 ref)
provide(THEME_KEY, toRef(props, 'theme'))


// 同步主题到 document
watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', props.theme)
  }
})
</script>

<template>
  <slot />
</template>
