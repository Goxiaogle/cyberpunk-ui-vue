<script setup lang="ts">
/**
 * CpDialog - 赛博朋克风格模态对话框
 * 支持多种变体、形状、主题色、拖拽，以及各区域的颜色/样式/class 自定义
 */
import { ref, computed, watch, onBeforeUnmount, useSlots, nextTick, provide, toRef, type CSSProperties } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX, DIALOG_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import { dialogProps, dialogEmits } from './dialog'
import { CpButton } from '../../button'

defineOptions({
  name: `${COMPONENT_PREFIX}Dialog`,
})

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const slots = useSlots()

const ns = useNamespace('dialog')

// ===== 向子组件提供 Dialog 上下文 =====
provide(DIALOG_CONTEXT_KEY, {
  type: toRef(props, 'type'),
  color: toRef(props, 'color'),
})

// ===== 显示状态 =====
const visible = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val),
})

// 内容是否已渲染（用于 destroyOnClose）
const rendered = ref(props.modelValue)

// ===== 抖动反馈 =====
const shaking = ref(false)
const panelRef = ref<HTMLElement | null>(null)

const triggerShake = () => {
  // 直接操作 DOM class 绕过 Vue 3 微任务批量更新，
  // 确保 class 移除 → reflow → class 重加 之间有真实的浏览器重排，
  // 否则 Vue 的响应式合并会吞掉中间状态导致动画无法重新触发
  if (panelRef.value) {
    panelRef.value.classList.remove('is-shaking')
    void panelRef.value.offsetWidth   // 强制 reflow
    panelRef.value.classList.add('is-shaking')
  }
  shaking.value = true   // 保持响应式状态同步
}

const handleShakeEnd = () => {
  shaking.value = false
}

// ===== 拖拽 =====
const dragOffset = ref({ x: 0, y: 0 })
const isDragging = ref(false)
let dragStart = { x: 0, y: 0, offsetX: 0, offsetY: 0 }

const handleDragStart = (e: MouseEvent) => {
  if (!props.draggable) return
  isDragging.value = true
  dragStart = {
    x: e.clientX,
    y: e.clientY,
    offsetX: dragOffset.value.x,
    offsetY: dragOffset.value.y,
  }
  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('mouseup', handleDragEnd)
}

const handleDragMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  dragOffset.value = {
    x: dragStart.offsetX + (e.clientX - dragStart.x),
    y: dragStart.offsetY + (e.clientY - dragStart.y),
  }
}

const handleDragEnd = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
}

// ===== 颜色变量 =====
const realColor = computed(() => {
  if (props.color) return props.color
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type})`
  return null
})

const realColorLight = computed(() => {
  if (props.color) return `color-mix(in srgb, ${props.color} 30%, transparent)`
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type}-light)`
  return null
})

// ===== 面板 CSS 变量 =====
const dialogCssVars = computed<Record<string, string>>(() => {
  const vars: Record<string, string> = {}

  if (realColor.value) vars['--cp-dialog-color'] = realColor.value
  if (realColorLight.value) vars['--cp-dialog-color-light'] = realColorLight.value
  if (props.bgColor) vars['--cp-dialog-bg'] = props.bgColor
  if (props.borderColor) vars['--cp-dialog-border-color'] = props.borderColor
  if (props.titleColor) vars['--cp-dialog-title-color'] = props.titleColor
  if (props.textColor) vars['--cp-dialog-text-color'] = props.textColor
  if (props.closeColor) vars['--cp-dialog-close-color'] = props.closeColor
  if (props.headerDividerColor) vars['--cp-dialog-header-divider-color'] = props.headerDividerColor
  if (props.footerDividerColor) vars['--cp-dialog-footer-divider-color'] = props.footerDividerColor

  return vars
})

// ===== 弹窗挂载目标 =====
const teleportTo = computed(() => {
  if (props.appendTo) return props.appendTo
  return props.appendToBody ? 'body' : undefined
})

// ===== 面板样式 =====
const dialogStyle = computed<CSSProperties>(() => {
  const width = typeof props.width === 'number' ? `${props.width}px` : props.width
  const style: Record<string, any> = {
    ...dialogCssVars.value,
    width: props.fullscreen ? undefined : width,
  }

  if (!props.fullscreen && !props.alignCenter) {
    style.marginTop = props.top
  }

  // 拖拽偏移 — 使用 margin 而非 transform，避免与入场/出场 CSS 动画的 transform 冲突
  if (props.draggable && (dragOffset.value.x || dragOffset.value.y)) {
    style.marginLeft = `${dragOffset.value.x}px`
    const baseMarginTop = props.fullscreen ? 0 : (props.alignCenter ? 0 : parseMarginTop(props.top))
    style.marginTop = `${baseMarginTop + dragOffset.value.y}px`
  }

  // 合并用户自定义 style
  if (props.dialogStyle) {
    if (typeof props.dialogStyle === 'string') {
      // string 类型 style 无法直接合并，忽略
    } else {
      Object.assign(style, props.dialogStyle)
    }
  }

  return style as CSSProperties
})

// 解析 margin-top 值（处理 vh / px 等）
function parseMarginTop(top: string): number {
  if (top.endsWith('vh')) {
    return (parseFloat(top) / 100) * window.innerHeight
  }
  if (top.endsWith('px')) {
    return parseFloat(top)
  }
  return 0
}

// ===== 遮罩样式 =====
const overlayStyleObj = computed<CSSProperties>(() => {
  const style: Record<string, any> = {
    zIndex: props.zIndex,
  }
  if (props.overlayColor) {
    style['--cp-dialog-overlay-color'] = props.overlayColor
  }
  if (props.overlayStyle) {
    if (typeof props.overlayStyle !== 'string') {
      Object.assign(style, props.overlayStyle)
    }
  }
  return style as CSSProperties
})

// ===== 类名 =====
const wrapperClasses = computed(() => [
  ns.e('wrapper'),
  props.fullscreen ? ns.is('fullscreen') : '',
  ns.is('align-center', props.alignCenter),
])

const panelClasses = computed(() => [
  ns.e('panel'),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.m(props.type),
  ns.is('fullscreen', props.fullscreen),
  ns.is('center', props.center),
  ns.is('draggable', props.draggable),
  ns.is('shaking', shaking.value),
  props.dialogClass,
])

const headerClasses = computed(() => [
  ns.e('header'),
  ns.is('bordered', props.headerBorder),
  ns.is('draggable', props.draggable),
  props.headerClass,
])

const bodyClasses = computed(() => [
  ns.e('body'),
  props.bodyClass,
])

const footerClasses = computed(() => [
  ns.e('footer'),
  ns.is('bordered', props.footerBorder),
  ns.is('center', props.center),
  props.footerClass,
])

const overlayClasses = computed(() => [
  ns.b(),
  ns.e('overlay'),
  props.overlayClass,
])

// ===== 是否显示头部/底部 =====
const showHeader = computed(() =>
  props.title || slots.header || slots.title || props.showClose,
)
// 当有 #footer 插槽，或内置按钮至少开启一个时，显示底部
const hasFooter = computed(() =>
  !!slots.footer || props.showConfirmButton || props.showCancelButton,
)

// ===== 确认按钮 type：跟随 Dialog 的 type / color =====
const confirmButtonType = computed(() => {
  // 有显式 type 且非 default 时直接用
  if (props.type && props.type !== 'default') return props.type
  return 'primary'   // 无特定 type 时回退 primary
})

const confirmButtonColor = computed(() => props.color || '')

// ===== 事件处理 =====
const handleClose = () => {
  visible.value = false
}

const handleOverlayClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  } else {
    triggerShake()
  }
}

const handleConfirm = () => {
  emit('confirm')
  handleClose()
}

const handleCancel = () => {
  emit('cancel')
  handleClose()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && visible.value) {
    if (props.closeOnEscape) {
      handleClose()
    } else {
      triggerShake()
    }
  }
}

// 阻止面板点击冒泡到遮罩
const handlePanelClick = (e: Event) => {
  e.stopPropagation()
}

// ===== 过渡回调 =====
const handleAfterEnter = () => {
  emit('opened')
}

const handleAfterLeave = () => {
  emit('closed')
  if (props.destroyOnClose) {
    rendered.value = false
  }
}

// ===== 锁定滚动 =====
let originalOverflow = ''

const lockBody = () => {
  if (props.lockScroll) {
    originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
}

const unlockBody = () => {
  if (props.lockScroll) {
    document.body.style.overflow = originalOverflow
  }
}

// ===== 监听 =====
watch(visible, async (val) => {
  if (val) {
    // 在渲染前重置拖拽偏移，确保对话框从中心位置打开
    dragOffset.value = { x: 0, y: 0 }
    rendered.value = true
    emit('open')
    await nextTick()
    lockBody()
    document.addEventListener('keydown', handleKeydown)
  } else {
    emit('close')
    unlockBody()
    document.removeEventListener('keydown', handleKeydown)
  }
})

// ===== 清理 =====
onBeforeUnmount(() => {
  unlockBody()
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
})

// ===== 暴露 =====
defineExpose({
  /** @description 关闭对话框 */
  close: handleClose,
})
</script>

<template>
  <Teleport :to="teleportTo" :disabled="!teleportTo">
    <Transition :name="ns.namespace + '-dialog-fade'" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        v-if="visible"
        :class="overlayClasses"
        :style="overlayStyleObj"
        @click.self="handleOverlayClick"
      >
        <div :class="wrapperClasses" @click.self="handleOverlayClick">
          <div
            ref="panelRef"
            :class="panelClasses"
            :style="dialogStyle"
            @click="handlePanelClick"
            @animationend="handleShakeEnd"
            role="dialog"
            aria-modal="true"
          >
            <!-- 装饰方块 (右上角) -->
            <div :class="ns.e('decor')" />

            <!-- Header -->
            <div
              v-if="showHeader"
              :class="headerClasses"
              :style="headerStyle"
              @mousedown="handleDragStart"
            >
              <slot name="header">
                <div :class="ns.e('title')">
                  <slot name="title">{{ title }}</slot>
                </div>
                <button
                  v-if="showClose"
                  :class="ns.e('close')"
                  @click="handleClose"
                  aria-label="Close"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </slot>
            </div>

            <!-- Body -->
            <div
              v-if="!destroyOnClose || rendered"
              :class="bodyClasses"
              :style="bodyStyle"
            >
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="hasFooter"
              :class="footerClasses"
              :style="footerStyle"
            >
              <slot name="footer">
                <!-- 内置取消/确认按钮 -->
                <CpButton
                  v-if="showCancelButton"
                  :class="ns.e('cancel-btn')"
                  @click="handleCancel"
                >{{ cancelText || '取消' }}</CpButton>
                <CpButton
                  v-if="showConfirmButton"
                  :class="ns.e('confirm-btn')"
                  :type="confirmButtonType"
                  :color="confirmButtonColor"
                  @click="handleConfirm"
                >{{ confirmText || '确认' }}</CpButton>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
