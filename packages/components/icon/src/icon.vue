<script setup lang="ts">
/**
 * CpIcon - 赛博朋克风格图标组件
 * 支持 Vue 组件 (unplugin-icons)、SVG 字符串、CSS 字体图标
 */
import { computed } from 'vue'
import { useNamespace, normalizeSize } from '@cyberpunk-vue/hooks'
import { iconProps } from './icon'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Icon`,
})

const props = defineProps(iconProps)

const ns = useNamespace('icon')

// 预设尺寸映射 (px)
const sizeMap: Record<string, number> = {
  sm: 16,
  md: 24,
  lg: 32,
}

// 计算图标类型
const iconType = computed(() => {
  if (!props.icon) return 'slot'
  if (typeof props.icon === 'object') return 'component'
  if (typeof props.icon === 'string' && props.icon.trim().startsWith('<svg')) return 'svg'
  return 'class'
})

// 计算尺寸样式
const sizeStyle = computed(() => normalizeSize(props.size, sizeMap))

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('spin', props.spin),
  ns.is('custom-color', !!props.color),
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-icon-color'] = props.color
  }
  if (sizeStyle.value) {
    style['--cp-icon-size'] = sizeStyle.value
  }
  return style
})
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :style="customStyle"
    aria-hidden="true"
  >
    <!-- Slot 模式: 直接渲染插槽内容 -->
    <slot v-if="iconType === 'slot'" />
    
    <!-- Component 模式: 渲染 Vue 组件 (unplugin-icons) -->
    <component :is="icon" v-else-if="iconType === 'component'" />
    
    <!-- SVG 模式: 内联渲染 SVG 字符串 -->
    <span v-else-if="iconType === 'svg'" :class="ns.e('svg')" v-html="icon" />
    
    <!-- Class 模式: 渲染字体图标 -->
    <i v-else :class="icon" />
  </component>
</template>
