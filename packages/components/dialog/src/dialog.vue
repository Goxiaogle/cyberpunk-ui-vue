<script setup lang="ts">
/**
 * CpDialog - 赛博朋克风格模态对话框
 * 支持多种变体、形状、主题色、拖拽，以及各区域的颜色/样式/class 自定义
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, useSlots, nextTick, provide, toRef, useAttrs, type CSSProperties } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX, DIALOG_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import { dialogProps, dialogEmits, type DialogBeforeCloseDoneFn, type DialogBeforeCloseFn } from './dialog'
import { CpButton } from '../../button'

defineOptions({
  name: `${COMPONENT_PREFIX}Dialog`,
  inheritAttrs: false,
})

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const slots = useSlots()
const attrs = useAttrs()

const ns = useNamespace('dialog')

// ===== 向子组件提供 Dialog 上下文 =====
provide(DIALOG_CONTEXT_KEY, {
  type: toRef(props, 'type'),
  color: toRef(props, 'color'),
})

// ===== 显示状态 =====
const visible = ref(false)
const rendered = ref(false)

// ===== 抖动反馈 =====
const shaking = ref(false)
const panelRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)

const triggerShake = () => {
  if (panelRef.value) {
    panelRef.value.classList.remove('is-shaking')
    void panelRef.value.offsetWidth   // 强制 reflow
    panelRef.value.classList.add('is-shaking')
  }
  shaking.value = true
}

const handleShakeEnd = () => {
  shaking.value = false
}

// ===== 拖拽（参考 Element Plus useDraggable） =====
const isDragging = ref(false)
const dragTransform = { offsetX: 0, offsetY: 0 }
let lastDragPosition = ''

/**
 * 调整拖拽位置，可选视口边界限制
 */
const adjustDragPosition = (moveX: number, moveY: number) => {
  if (!panelRef.value) return

  const { offsetX, offsetY } = dragTransform
  const rect = panelRef.value.getBoundingClientRect()
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight

  if (!props.overflow) {
    // 限制不超出视口
    const minLeft = -rect.left + offsetX
    const minTop = -rect.top + offsetY
    const maxLeft = clientWidth - rect.left - rect.width + offsetX
    const maxTop = clientHeight - rect.top - (rect.height < clientHeight ? rect.height : 0) + offsetY

    moveX = Math.min(Math.max(moveX, minLeft), maxLeft)
    moveY = Math.min(Math.max(moveY, minTop), maxTop)
  }

  dragTransform.offsetX = moveX
  dragTransform.offsetY = moveY

  panelRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`
}

const resetDragPosition = () => {
  dragTransform.offsetX = 0
  dragTransform.offsetY = 0
  if (panelRef.value) {
    panelRef.value.style.transform = ''
  }
}

const updateDragPosition = () => {
  adjustDragPosition(dragTransform.offsetX, dragTransform.offsetY)
}

const handleDragStart = (e: MouseEvent) => {
  if (!props.draggable || !panelRef.value) return

  const downX = e.clientX
  const downY = e.clientY
  const { offsetX, offsetY } = dragTransform

  const handleDragMove = (e: MouseEvent) => {
    if (!isDragging.value) {
      isDragging.value = true
    }
    const moveX = offsetX + e.clientX - downX
    const moveY = offsetY + e.clientY - downY
    adjustDragPosition(moveX, moveY)
  }

  const handleDragEnd = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleDragMove)
    document.removeEventListener('mouseup', handleDragEnd)
  }

  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('mouseup', handleDragEnd)
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

  // 合并用户自定义 style
  if (props.dialogStyle) {
    if (typeof props.dialogStyle !== 'string') {
      Object.assign(style, props.dialogStyle)
    }
  }

  return style as CSSProperties
})

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
  ns.is('dragging', isDragging.value),
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
  props.modalClass,
])

// ===== 是否显示头部/底部 =====
const showHeader = computed(() =>
  props.title || slots.header || slots.title || props.showClose,
)
const hasFooter = computed(() =>
  !!slots.footer || props.showConfirmButton || props.showCancelButton,
)

// ===== 确认按钮 type =====
const confirmButtonType = computed(() => {
  if (props.type && props.type !== 'default') return props.type
  return 'primary'
})

const confirmButtonColor = computed(() => props.color || '')
const beforeCloseHandler = computed<DialogBeforeCloseFn | undefined>(() => {
  if (props.beforeClose) return props.beforeClose
  const fallback = attrs['before-close'] ?? attrs.beforeClose
  return typeof fallback === 'function' ? fallback as DialogBeforeCloseFn : undefined
})

// ===== 事件处理 =====
const doClose = () => {
  visible.value = false
}

const handleClose = () => {
  const hide: DialogBeforeCloseDoneFn = (shouldCancel?: boolean) => {
    if (shouldCancel) return
    doClose()
  }

  if (beforeCloseHandler.value) {
    beforeCloseHandler.value(hide)
  } else {
    hide()
  }
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

// ===== 监听 modelValue =====
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      rendered.value = true
      visible.value = true
      emit('open')
      nextTick(() => {
        resetDragPosition()
        lockBody()
        document.addEventListener('keydown', handleKeydown)
        if (props.draggable) {
          window.addEventListener('resize', updateDragPosition)
        }
      })
    } else {
      if (visible.value) {
        doClose()
      }
    }
  },
)

// 关闭时（visible 变 false）同步 modelValue
watch(visible, (val) => {
  if (!val && props.modelValue) {
    emit('close')
    emit('update:modelValue', false)
    unlockBody()
    document.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', updateDragPosition)
  }
})

// ===== 全屏切换时保存/恢复拖拽位置 =====
watch(
  () => props.fullscreen,
  (val) => {
    if (!panelRef.value) return
    if (val) {
      lastDragPosition = panelRef.value.style.transform
      panelRef.value.style.transform = ''
    } else {
      panelRef.value.style.transform = lastDragPosition
    }
  },
)

// ===== 初始挂载时 =====
onMounted(() => {
  if (props.modelValue) {
    rendered.value = true
    visible.value = true
    nextTick(() => {
      lockBody()
      document.addEventListener('keydown', handleKeydown)
      if (props.draggable) {
        window.addEventListener('resize', updateDragPosition)
      }
    })
  }
})

// ===== 清理 =====
onBeforeUnmount(() => {
  unlockBody()
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', updateDragPosition)
})

// ===== 暴露 =====
defineExpose({
  /** @description 关闭对话框 */
  close: handleClose,
  /** @description 重置拖拽位置 */
  resetPosition: resetDragPosition,
  /** @description 当前是否可见 */
  visible,
})
</script>

<template>
  <Teleport to="body" :disabled="!appendToBody">
    <Transition :name="ns.namespace + '-dialog-fade'" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <!-- destroyOnClose=true 时用 v-if 销毁 DOM，否则用 v-show 保留 -->
      <div
        v-if="destroyOnClose ? visible : rendered || visible"
        v-show="visible"
        :class="overlayClasses"
        :style="overlayStyleObj"
        @click.self="handleOverlayClick"
      >
        <div :class="wrapperClasses" @click.self="handleOverlayClick">
          <div
            ref="panelRef"
            v-bind="$attrs"
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
              ref="headerRef"
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
