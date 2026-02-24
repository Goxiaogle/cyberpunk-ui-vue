<script setup lang="ts">
/**
 * CpBreadcrumb - 赛博朋克风格面包屑导航
 * 展示当前页面在层级结构中的位置
 */
import { computed, provide } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { breadcrumbProps, BREADCRUMB_INJECTION_KEY } from './breadcrumb'
import type { BreadcrumbContext } from './breadcrumb'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Breadcrumb`,
})

const props = defineProps(breadcrumbProps)

const ns = useNamespace('breadcrumb')

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// 向子组件注入分隔符配置
provide<BreadcrumbContext>(BREADCRUMB_INJECTION_KEY, {
  separator: props.separator,
  separatorIcon: props.separatorIcon,
})

const classes = computed(() => [
  ns.b(),
  ns.m(`type-${props.type}`),
  ns.m(`variant-${props.variant}`),
  ns.is('custom-color', !!props.color),
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.color) {
    style['--cp-breadcrumb-color'] = props.color
  } else if (props.type && props.type !== 'default' && typeColorMap[props.type]) {
    style['--cp-breadcrumb-color'] = typeColorMap[props.type]
  }

  return style
})
</script>

<template>
  <nav :class="classes" :style="customStyle" aria-label="Breadcrumb">
    <ol :class="ns.e('list')">
      <slot />
    </ol>
  </nav>
</template>
