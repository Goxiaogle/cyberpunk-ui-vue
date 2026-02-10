<script setup lang="ts">
import { computed, inject, getCurrentInstance } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { CpIcon } from '../../icon'
import { menuItemProps, menuItemEmits } from './menu-item'
import { menuContextKey, subMenuContextKey } from '../../menu/src/constants'

defineOptions({ name: 'CpMenuItem' })

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)
const ns = useNamespace('menu-item')

const menuCtx = inject(menuContextKey, undefined)
const subMenuCtx = inject(subMenuContextKey, undefined)

const isActive = computed(() => menuCtx?.activeIndex.value === props.index)

const indexPath = computed(() => {
  const parentPath = subMenuCtx?.indexPath ?? []
  return [...parentPath, props.index]
})

const paddingStyle = computed(() => {
  if (menuCtx?.mode === 'horizontal') return {}
  const level = subMenuCtx?.level ?? 0
  const indent = 20
  return { paddingLeft: `${indent * (level + 1)}px` }
})

const classes = computed(() => [
  ns.b(),
  ns.is('active', isActive.value),
  ns.is('disabled', props.disabled),
])

const handleClick = () => {
  if (props.disabled) return
  menuCtx?.handleSelect(props.index, indexPath.value)
  emit('click', props.index)

  // Router 模式
  if (menuCtx?.router) {
    const instance = getCurrentInstance()
    const router = instance?.appContext.config.globalProperties.$router
    if (router) {
      const target = props.route ?? props.index
      router.push(target).catch((err: unknown) => {
        const error = err as { name?: string }
        // NavigationDuplicated 等错误静默处理
        if (error.name !== 'NavigationDuplicated') {
          console.warn('[CpMenuItem] Router navigation failed:', err)
        }
      })
    }
  }
}
</script>

<template>
  <li
    :class="classes"
    :style="paddingStyle"
    role="menuitem"
    :tabindex="disabled ? -1 : 0"
    @click="handleClick"
    @keydown.enter="handleClick"
  >
    <span v-if="icon || $slots.icon" :class="ns.e('icon')">
      <CpIcon v-if="icon" :icon="icon" size="sm" />
      <slot v-else name="icon" />
    </span>
    <span :class="ns.e('content')">
      <slot />
    </span>
  </li>
</template>
