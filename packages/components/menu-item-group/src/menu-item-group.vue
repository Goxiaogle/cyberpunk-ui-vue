<script setup lang="ts">
import { inject, computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { menuItemGroupProps } from './menu-item-group'
import { menuContextKey, subMenuContextKey } from '../../menu/src/constants'

defineOptions({ name: 'CpMenuItemGroup' })

const props = defineProps(menuItemGroupProps)
const ns = useNamespace('menu-item-group')

const menuCtx = inject(menuContextKey, undefined)
const subMenuCtx = inject(subMenuContextKey, undefined)

const paddingStyle = computed(() => {
  if (menuCtx?.mode === 'horizontal') return {}
  const level = subMenuCtx?.level ?? 0
  const indent = 20
  return { paddingLeft: `${indent * (level + 1)}px` }
})
</script>

<template>
  <li :class="ns.b()" role="none">
    <div :class="ns.e('title')" :style="paddingStyle">
      <slot name="title">{{ title }}</slot>
    </div>
    <ul :class="ns.e('content')" role="group">
      <slot />
    </ul>
  </li>
</template>
