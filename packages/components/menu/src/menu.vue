<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onMounted, provide, ref, toRef, watch } from 'vue'
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
// 保存展开模式下的打开状态，折叠/展开切换时使用
const expandedOpenedMenus = ref<Set<string>>(new Set(props.defaultOpeneds))
// 折叠切换时禁用 transition，让 popup 立即消失
const suppressTransition = ref(false)

// ===== 注册表（供路由反查） =====
const items = new Map<string, string[]>()
const subMenus = new Map<string, string[]>()

const addItem = (index: string, indexPath: string[]) => {
  items.set(index, [...indexPath])
}
const removeItem = (index: string) => {
  items.delete(index)
}
const addSubMenu = (index: string, indexPath: string[]) => {
  subMenus.set(index, [...indexPath])
}
const removeSubMenu = (index: string) => {
  subMenus.delete(index)
}

// ===== 核心：根据 index 同步 activeIndexPath + 自动展开 =====
/**
 * 在已注册的 items 中查找匹配：优先精确匹配，其次最长前缀匹配
 */
const findMatch = (target: string): { index: string; indexPath: string[] } | null => {
  // 1. 精确匹配
  if (items.has(target)) {
    return { index: target, indexPath: items.get(target)! }
  }
  // 2. 前缀匹配：找最长匹配的 item index
  let best: { index: string; indexPath: string[] } | null = null
  for (const [index, indexPath] of items) {
    if (
      index !== '/' &&
      (target.startsWith(index + '/') || target.startsWith(index + '?'))
    ) {
      if (!best || index.length > best.index.length) {
        best = { index, indexPath }
      }
    }
  }
  return best
}

/**
 * 根据目标 index 同步激活状态和展开状态
 * - 查找最佳匹配（精确 → 前缀）
 * - 更新 activeIndex / activeIndexPath
 * - 自动展开所有父级 SubMenu
 */
const syncActiveState = (target: string) => {
  if (!target) return

  const match = findMatch(target)
  if (match) {
    activeIndex.value = match.index
    activeIndexPath.value = match.indexPath
    // 自动展开所有父级 SubMenu
    const opened = new Set(openedMenus.value)
    for (const seg of match.indexPath) {
      if (seg !== match.index && subMenus.has(seg)) {
        opened.add(seg)
      }
    }
    openedMenus.value = opened
    // 非折叠模式时同步到展开态备份
    if (!props.collapse) {
      expandedOpenedMenus.value = new Set(opened)
    }
  }
}

// 外部 defaultActive 变化时同步
watch(
  () => props.defaultActive,
  (val) => {
    // defaultActive 变化 = 外部路由驱动，需要完整同步
    syncActiveState(val)
  },
)

// ===== 折叠/展开切换时分离打开状态 =====
watch(
  () => props.collapse,
  (collapsed) => {
    if (collapsed) {
      // 禁用 transition 让 popup 立即消失
      suppressTransition.value = true
      // 折叠：保存当前展开态的打开状态，清空 openedMenus 防止弹出 popup
      expandedOpenedMenus.value = new Set(openedMenus.value)
      openedMenus.value = new Set()
      // 保持抑制直到折叠动画结束（匹配 CSS transition: 0.3s）
      setTimeout(() => { suppressTransition.value = false }, 350)
    } else {
      // 展开：恢复之前保存的打开状态
      openedMenus.value = new Set(expandedOpenedMenus.value)
    }
  },
  { flush: 'sync' },
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
    // 非折叠模式时同步到展开态备份
    if (!props.collapse) {
      expandedOpenedMenus.value = new Set(opened)
    }
  }
}

const closeMenu = (index: string, indexPath: string[]) => {
  const opened = new Set(openedMenus.value)
  if (opened.has(index)) {
    opened.delete(index)
    openedMenus.value = opened
    emit('close', index, indexPath)
    // 非折叠模式时同步到展开态备份
    if (!props.collapse) {
      expandedOpenedMenus.value = new Set(opened)
    }
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

// ===== 路由监听（router 模式额外支持） =====
onMounted(() => {
  // 等子组件注册完毕后初始化激活状态
  nextTick(() => {
    syncActiveState(activeIndex.value)
  })

  // router 模式额外监听路由变化
  if (props.router) {
    const instance = getCurrentInstance()
    const routerInstance = instance?.appContext.config.globalProperties.$router
    if (routerInstance) {
      watch(
        () => routerInstance.currentRoute.value.path,
        (path: string) => {
          syncActiveState(path)
        },
      )
    }
  }
})

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
    style['--cp-menu-active-color-light'] = `color-mix(in srgb, ${props.color} 20%, transparent)`
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
  addItem,
  removeItem,
  addSubMenu,
  removeSubMenu,
  suppressTransition,
}

provide(menuContextKey, ctx)
</script>

<template>
  <ul :class="classes" :style="menuStyle" role="menubar">
    <slot />
  </ul>
</template>
