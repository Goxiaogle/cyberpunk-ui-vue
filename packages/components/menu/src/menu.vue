<script setup lang="ts">
import { computed, provide, ref, toRef, watch } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { menuProps, menuEmits } from './menu'
import { menuContextKey } from './constants'
import type { MenuContext } from './constants'

defineOptions({ name: 'CpMenu' })

const props = defineProps(menuProps)
const emit = defineEmits(menuEmits)
const ns = useNamespace('menu')

// ===== 状态 =====
const activeIndex = ref(props.defaultActive)
const activeIndexPath = ref<string[]>([])
const openedMenus = ref<Set<string>>(new Set(props.defaultOpeneds))

// 外部 defaultActive 变化时同步
watch(
  () => props.defaultActive,
  (val) => {
    activeIndex.value = val
  },
)

// ===== 方法 =====
const handleSelect = (index: string, indexPath: string[]) => {
  activeIndex.value = index
  activeIndexPath.value = indexPath
  emit('select', index, indexPath)
}

const openMenu = (index: string, indexPath: string[]) => {
  const opened = new Set(openedMenus.value)
  if (!opened.has(index)) {
    if (props.uniqueOpened) {
      // 手风琴模式：清除同级
      opened.clear()
    }
    opened.add(index)
    openedMenus.value = opened
    emit('open', index, indexPath)
  }
}

const closeMenu = (index: string, indexPath: string[]) => {
  const opened = new Set(openedMenus.value)
  if (opened.has(index)) {
    opened.delete(index)
    openedMenus.value = opened
    emit('close', index, indexPath)
  }
}

const handleSubMenuClick = (index: string, indexPath: string[]) => {
  const opened = openedMenus.value
  if (opened.has(index)) {
    closeMenu(index, indexPath)
  } else {
    openMenu(index, indexPath)
  }
}

// ===== 自动 index 生成 =====
let autoIndexCounter = 0
const generateIndex = () => `__cp_auto_${++autoIndexCounter}`

// ===== 样式 =====
const classes = computed(() => [
  ns.b(),
  ns.m(props.mode),
  ns.m(`shape-${props.shape}`),
  ns.m(props.variant),
  ns.is('collapse', props.collapse && props.mode === 'vertical'),
  props.type !== 'default' ? ns.m(props.type) : '',
  props.color ? ns.is('custom-color') : '',
])

const menuStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-menu-active-color'] = props.color
    style['--cp-menu-active-color-light'] = `${props.color}33`
  }
  return style
})

// ===== 注入上下文 =====
const ctx: MenuContext = {
  generateIndex,
  activeIndex,
  activeIndexPath,
  openedMenus,
  mode: props.mode,
  collapse: toRef(props, 'collapse'),
  type: props.type,
  shape: props.shape,
  variant: props.variant,
  router: props.router,
  color: props.color,
  handleSelect,
  handleSubMenuClick,
  openMenu,
  closeMenu,
}

provide(menuContextKey, ctx)
</script>

<template>
  <ul :class="classes" :style="menuStyle" role="menubar">
    <slot />
  </ul>
</template>
