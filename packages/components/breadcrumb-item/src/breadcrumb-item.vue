<script setup lang="ts">
/**
 * CpBreadcrumbItem - 面包屑子项
 * 通过 inject 获取父级分隔符配置，支持路由链接
 */
import { computed, inject, getCurrentInstance } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { breadcrumbItemProps } from './breadcrumb-item'
import { BREADCRUMB_INJECTION_KEY } from '@cyberpunk-vue/components/breadcrumb/src/breadcrumb'
import type { BreadcrumbContext } from '@cyberpunk-vue/components/breadcrumb/src/breadcrumb'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}BreadcrumbItem`,
})

const props = defineProps(breadcrumbItemProps)

const ns = useNamespace('breadcrumb')

// 注入父级面包屑配置
const breadcrumb = inject<BreadcrumbContext>(BREADCRUMB_INJECTION_KEY, {
  separator: '/',
})

// 判断是否为链接
const isLink = computed(() => !!props.to)

// 路由导航
const instance = getCurrentInstance()
const handleClick = () => {
  if (!props.to) return

  const router = instance?.appContext.config.globalProperties.$router
  if (router) {
    if (props.replace) {
      router.replace(props.to)
    } else {
      router.push(props.to)
    }
  }
}
</script>

<template>
  <li :class="ns.e('item')">
    <!-- 内容区域 -->
    <span
      :class="[ns.e('inner'), ns.is('link', isLink)]"
      role="link"
      @click="handleClick"
    >
      <slot />
    </span>

    <!-- 分隔符 -->
    <span :class="ns.e('separator')" aria-hidden="true">
      <!-- 自定义分隔符插槽 -->
      <slot name="separator">
        <!-- 图标分隔符 -->
        <component
          :is="breadcrumb.separatorIcon"
          v-if="breadcrumb.separatorIcon"
          :class="ns.e('separator-icon')"
        />
        <!-- 文本分隔符 -->
        <template v-else>{{ breadcrumb.separator }}</template>
      </slot>
    </span>
  </li>
</template>
