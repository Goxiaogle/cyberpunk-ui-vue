<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { CpIcon } from '@cyberpunk-vue/components/icon'
import { subMenuProps } from './sub-menu'
import { menuContextKey, subMenuContextKey } from '@cyberpunk-vue/components/menu/src/constants'
import type { SubMenuContext } from '@cyberpunk-vue/components/menu/src/constants'

defineOptions({ name: 'CpSubMenu' })

const props = defineProps(subMenuProps)
const ns = useNamespace('sub-menu')

const menuCtx = inject(menuContextKey, undefined)
const parentSubMenuCtx = inject(subMenuContextKey, undefined)

// 自动生成 index（未传时使用 menuCtx 的计数器）
const resolvedIndex = props.index ?? menuCtx?.generateIndex() ?? `__cp_sub_auto_${Math.random().toString(36).slice(2)}`

const mouseInChild = ref(false)

const level = computed(() => (parentSubMenuCtx?.level ?? 0))
const indexPath = computed(() => {
  const parentPath = parentSubMenuCtx?.indexPath ?? []
  return [...parentPath, resolvedIndex]
})

// 注册到 Menu 上下文（供路由反查）
onMounted(() => {
  menuCtx?.addSubMenu(resolvedIndex, indexPath.value)
})
onBeforeUnmount(() => {
  menuCtx?.removeSubMenu(resolvedIndex)
})

const isOpen = computed(() => {
  // 折叠切换期间强制关闭所有弹出
  if (menuCtx?.suppressTransition?.value) return false
  return menuCtx?.openedMenus.value.has(resolvedIndex) ?? false
})

// 子元素被选中时，父级 SubMenu 高亮
const isActive = computed(() => {
  if (!menuCtx) return false
  return menuCtx.activeIndexPath.value.includes(resolvedIndex)
})

// 是否使用 hover 模式（水平模式使用 hover，垂直非折叠使用 click）
const isHoverMode = computed(() => {
  if (!menuCtx) return false
  return menuCtx.mode === 'horizontal' || menuCtx.collapse.value
})

const paddingStyle = computed(() => {
  if (menuCtx?.mode === 'horizontal') return {}
  const indent = 20
  return { paddingLeft: `${indent * (level.value + 1)}px` }
})

const classes = computed(() => [
  ns.b(),
  ns.is('opened', isOpen.value),
  ns.is('active', isActive.value),
  ns.is('disabled', props.disabled),
])

// ===== Hover 定时器管理 =====
let openTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null
const showTimeout = 200
const hideTimeout = 200

const clearTimers = () => {
  if (openTimer) { clearTimeout(openTimer); openTimer = null }
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
}

// ===== 点击模式处理 =====
const handleClick = () => {
  if (props.disabled) return
  // 在 hover 模式下点击标题不做处理
  if (isHoverMode.value) return
  menuCtx?.handleSubMenuClick(resolvedIndex, indexPath.value)
}

// ===== Hover 模式处理 =====
const handleMouseenter = () => {
  if (props.disabled || !isHoverMode.value) return
  // 折叠动画期间不触发 hover 打开
  if (menuCtx?.suppressTransition?.value) return
  clearTimers()
  openTimer = setTimeout(() => {
    menuCtx?.openMenu(resolvedIndex, indexPath.value)
  }, showTimeout)
  // 通知父级 sub-menu 鼠标在子内容中
  if (parentSubMenuCtx) {
    parentSubMenuCtx.mouseInChild.value = true
  }
}

const handleMouseleave = (deepDispatch = false) => {
  if (!isHoverMode.value) return
  clearTimers()
  if (parentSubMenuCtx) {
    parentSubMenuCtx.mouseInChild.value = false
  }
  closeTimer = setTimeout(() => {
    if (!mouseInChild.value) {
      menuCtx?.closeMenu(resolvedIndex, indexPath.value)
    }
  }, hideTimeout)
  // 向父级传播
  if (deepDispatch && parentSubMenuCtx?.handleMouseleave) {
    parentSubMenuCtx.handleMouseleave(true)
  }
}

// 弹出子内容的 mouseenter
const handleContentMouseenter = () => {
  if (!isHoverMode.value) return
  clearTimers()
  mouseInChild.value = true
}

// 弹出子内容的 mouseleave
const handleContentMouseleave = () => {
  if (!isHoverMode.value) return
  mouseInChild.value = false
  handleMouseleave(true)
}

onBeforeUnmount(() => { clearTimers() })

// 为子项提供上下文
const subCtx: SubMenuContext = {
  indexPath: indexPath.value,
  level: level.value + 1,
  mouseInChild,
  handleMouseleave,
}
provide(subMenuContextKey, subCtx)

// ===== JS 高度过渡动画 (针对垂直内联展开模式) =====
const onBeforeEnter = (el: Element) => {
  if (isHoverMode.value) return
  const element = el as HTMLElement
  element.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  if (!element.dataset) (element as any).dataset = {}
  element.dataset.oldPaddingTop = element.style.paddingTop
  element.dataset.oldPaddingBottom = element.style.paddingBottom
  element.style.height = '0'
  element.style.paddingTop = '0'
  element.style.paddingBottom = '0'
}

const onEnter = (el: Element) => {
  if (isHoverMode.value) return
  const element = el as HTMLElement
  element.dataset.oldOverflow = element.style.overflow
  
  // Force a layout/reflow here to ensure the browser registers the height: 0 set in onBeforeEnter
  void element.offsetHeight

  if (element.scrollHeight !== 0) {
    element.style.height = `${element.scrollHeight}px`
    element.style.paddingTop = element.dataset.oldPaddingTop || ''
    element.style.paddingBottom = element.dataset.oldPaddingBottom || ''
  } else {
    element.style.height = ''
    element.style.paddingTop = element.dataset.oldPaddingTop || ''
    element.style.paddingBottom = element.dataset.oldPaddingBottom || ''
  }
  element.style.overflow = 'hidden'
}

const onAfterEnter = (el: Element) => {
  if (isHoverMode.value) return
  const element = el as HTMLElement
  element.style.transition = ''
  element.style.height = ''
  element.style.overflow = element.dataset.oldOverflow || ''
}

const onBeforeLeave = (el: Element) => {
  if (isHoverMode.value) return
  const element = el as HTMLElement
  if (!element.dataset) (element as any).dataset = {}
  element.dataset.oldPaddingTop = element.style.paddingTop
  element.dataset.oldPaddingBottom = element.style.paddingBottom
  element.dataset.oldOverflow = element.style.overflow

  element.style.height = `${element.scrollHeight}px`
  element.style.overflow = 'hidden'
}

const onLeave = (el: Element) => {
  if (isHoverMode.value) return
  const element = el as HTMLElement
  if (element.scrollHeight !== 0) {
    element.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    
    // Force a layout/reflow after transition is applied
    void element.offsetHeight

    element.style.height = '0'
    element.style.paddingTop = '0'
    element.style.paddingBottom = '0'
  }
}

const onAfterLeave = (el: Element) => {
  if (isHoverMode.value) return
  const element = el as HTMLElement
  element.style.transition = ''
  element.style.height = ''
  element.style.overflow = element.dataset.oldOverflow || ''
  element.style.paddingTop = element.dataset.oldPaddingTop || ''
  element.style.paddingBottom = element.dataset.oldPaddingBottom || ''
}
</script>

<template>
  <li
    :class="classes"
    role="none"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave(false)"
  >
    <div
      :class="ns.e('title')"
      :style="paddingStyle"
      role="menuitem"
      :aria-expanded="isOpen"
      :tabindex="disabled ? -1 : 0"
      @click="handleClick"
      @keydown.enter="handleClick"
    >
      <span v-if="icon || $slots.icon" :class="ns.e('icon')">
        <CpIcon v-if="icon" :icon="icon" size="sm" />
        <slot v-else name="icon" />
      </span>
      <span :class="ns.e('title-content')">
        <slot name="title">{{ title }}</slot>
      </span>
      <span :class="[ns.e('arrow'), isOpen ? 'is-open' : '']">
        <svg viewBox="0 0 1024 1024" width="12" height="12">
          <path
            fill="currentColor"
            d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 533.376a30.592 30.592 0 0 0 0-42.752L382.592 149.312a29.12 29.12 0 0 0-41.728 0z"
          />
        </svg>
      </span>
    </div>
    <transition
      :name="menuCtx?.suppressTransition?.value ? '' : (isHoverMode ? 'cp-sub-menu' : 'cp-collapse-transition')"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isOpen"
        :class="ns.e('popup')"
        :style="menuCtx?.suppressTransition?.value ? { display: 'none !important' } : {}"
        @mouseenter="handleContentMouseenter"
        @mouseleave="handleContentMouseleave"
      >
        <ul :class="ns.e('content')" role="menu">
          <slot />
        </ul>
      </div>
    </transition>
  </li>
</template>
