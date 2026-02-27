<script setup lang="ts">
/**
 * CpNotification - 赛博朋克风格通知提醒
 * 从屏幕角落滑入，展示全局通知消息
 * 支持模板式 (v-model) 和函数式 (notify()) 两种用法
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, useSlots, isVNode, type VNode, type CSSProperties } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { notificationProps, notificationEmits } from './notification'

defineOptions({
  name: `${COMPONENT_PREFIX}Notification`,
  inheritAttrs: false,
})

const props = defineProps(notificationProps)
const emit = defineEmits(notificationEmits)
const slots = useSlots()

const ns = useNamespace('notification')

// ===== 显示状态 =====
const visible = ref(false)

// ===== 是否为函数式模式 =====
const isFunctionalMode = computed(() => !!props.id)

// ===== 自动关闭定时器 =====
let closeTimer: ReturnType<typeof setTimeout> | null = null
let startTime = 0
let remainingTime = 0

const startTimer = () => {
  if (props.duration <= 0) return
  if (remainingTime <= 0) remainingTime = props.duration
  startTime = Date.now()
  closeTimer = setTimeout(() => {
    handleClose()
  }, remainingTime)
}

const pauseTimer = () => {
  if (!closeTimer) return
  clearTimeout(closeTimer)
  closeTimer = null
  remainingTime -= Date.now() - startTime
  if (remainingTime < 0) remainingTime = 0
}

const clearTimer = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  remainingTime = 0
}

// ===== 鼠标 hover 暂停 =====
const handleMouseEnter = () => {
  pauseTimer()
}

const handleMouseLeave = () => {
  startTimer()
}

// ===== 位置判断 =====
const isRight = computed(() => props.position.includes('right'))
const isTop = computed(() => props.position.includes('top'))

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

// ===== CSS 变量 =====
const cssVars = computed<Record<string, string>>(() => {
  const vars: Record<string, string> = {}

  if (realColor.value) vars['--cp-notification-color'] = realColor.value
  if (realColorLight.value) vars['--cp-notification-color-light'] = realColorLight.value
  if (props.bgColor) vars['--cp-notification-bg'] = props.bgColor
  if (props.borderColor) vars['--cp-notification-border-color'] = props.borderColor
  if (props.titleColor) vars['--cp-notification-title-color'] = props.titleColor
  if (props.textColor) vars['--cp-notification-text-color'] = props.textColor
  vars['--cp-notification-animation-duration'] = `${props.animationDuration}ms`

  if (props.duration > 0) {
    vars['--cp-notification-duration'] = `${props.duration}ms`
  }

  return vars
})

// ===== 容器样式 =====
const containerStyle = computed<CSSProperties>(() => {
  const width = typeof props.width === 'number' ? `${props.width}px` : props.width
  const style: CSSProperties = {
    ...cssVars.value,
    width,
    zIndex: props.zIndex,
  }

  // 水平定位：始终使用 offset
  if (isRight.value) {
    style.right = `${props.offset}px`
  } else {
    style.left = `${props.offset}px`
  }

  // 垂直定位：函数式模式使用 _verticalOffset，模板模式使用 offset
  const verticalOffset = props._verticalOffset ?? props.offset
  if (isTop.value) {
    style.top = `${verticalOffset}px`
  } else {
    style.bottom = `${verticalOffset}px`
  }

  return style
})

// ===== 类名 =====
const rootClasses = computed(() => [
  ns.b(),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.m(props.type),
  ns.m(props.position),
  ns.is('has-icon', props.type !== 'default' || !!slots.icon),
  ns.is('closable', props.showClose),
  ns.is('selectable', props.selectable),
])

// ===== 消息内容 =====
const messageVNode = computed(() => {
  if (isVNode(props.message)) return props.message
  if (typeof props.message === 'function') return (props.message as () => VNode)()
  return null
})

const isStringMessage = computed(() => typeof props.message === 'string')

// ===== 事件处理 =====
const handleClose = () => {
  visible.value = false
}

const handleClick = () => {
  emit('click')
}

// ===== Transition 名称（左或右） =====
const transitionName = computed(() => {
  return isRight.value
    ? `${ns.namespace}-notification-right`
    : `${ns.namespace}-notification-left`
})

// ===== 过渡回调 =====
const handleBeforeLeave = () => {
  // 函数式模式：在 before-leave 时通知外部进行偏移调整
  props.onClose?.()
}

const handleAfterLeave = () => {
  emit('destroy')
}

// ===== 内置图标 =====
const typeIcons: Record<string, string> = {
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
}

const iconPath = computed(() => {
  if (props.type === 'default' || props.type === 'primary') return null
  return typeIcons[props.type] || null
})

// ===== 监听 modelValue =====
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      visible.value = true
      remainingTime = props.duration
      startTimer()
    } else {
      handleClose()
    }
  },
)

watch(visible, (val) => {
  if (!val && props.modelValue) {
    clearTimer()
    emit('close')
    emit('update:modelValue', false)
  }
})

// ===== 挂载 =====
onMounted(() => {
  if (isFunctionalMode.value) {
    // 函数式模式：mounted 时立即显示
    visible.value = true
    remainingTime = props.duration
    startTimer()
  } else if (props.modelValue) {
    visible.value = true
    remainingTime = props.duration
    startTimer()
  }
})

onBeforeUnmount(() => {
  clearTimer()
})

// ===== 暴露 =====
defineExpose({
  /** @description 关闭通知 */
  close: handleClose,
  /** @description 当前是否可见 */
  visible,
})
</script>

<template>
  <Teleport v-if="!isFunctionalMode" to="body">
    <Transition :name="transitionName" @before-leave="handleBeforeLeave" @after-leave="handleAfterLeave">
      <div
        v-if="visible"
        v-bind="$attrs"
        :class="rootClasses"
        :style="containerStyle"
        role="alert"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
      >
        <!-- 装饰方块 (右上角) -->
        <div :class="ns.e('decor')" />

        <!-- 图标区域 -->
        <div v-if="iconPath || slots.icon" :class="ns.e('icon')">
          <slot name="icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path :d="iconPath!" />
            </svg>
          </slot>
        </div>

        <!-- 内容区域 -->
        <div :class="ns.e('group')">
          <!-- 标题 -->
          <div v-if="title || slots.title" :class="ns.e('title')">
            <slot name="title">{{ title }}</slot>
          </div>

          <!-- 消息 -->
          <div :class="ns.e('content')">
            <slot>
              <p v-if="dangerouslyUseHTMLString && isStringMessage" v-html="message" />
              <p v-else-if="isStringMessage">{{ message }}</p>
              <component :is="() => messageVNode" v-else-if="messageVNode" />
            </slot>
          </div>

          <!-- 操作区插槽 -->
          <div v-if="slots.actions" :class="ns.e('actions')" @click.stop>
            <slot name="actions" />
          </div>
        </div>

        <!-- 关闭按钮 -->
        <button
          v-if="showClose"
          :class="ns.e('close')"
          aria-label="Close"
          @click.stop="handleClose"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <!-- 自动关闭进度条 -->
        <div v-if="duration > 0" :class="ns.e('progress')" />
      </div>
    </Transition>
  </Teleport>

  <!-- 函数式模式：不使用 Teleport，由 notify.ts 管理 DOM 挂载 -->
  <Transition v-else :name="transitionName" @before-leave="handleBeforeLeave" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      v-bind="$attrs"
      :class="rootClasses"
      :style="containerStyle"
      role="alert"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <!-- 装饰方块 (右上角) -->
      <div :class="ns.e('decor')" />

      <!-- 图标区域 -->
      <div v-if="iconPath || slots.icon" :class="ns.e('icon')">
        <slot name="icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path :d="iconPath!" />
          </svg>
        </slot>
      </div>

      <!-- 内容区域 -->
      <div :class="ns.e('group')">
        <!-- 标题 -->
        <div v-if="title || slots.title" :class="ns.e('title')">
          <slot name="title">{{ title }}</slot>
        </div>

        <!-- 消息 -->
        <div :class="ns.e('content')">
          <slot>
            <p v-if="dangerouslyUseHTMLString && isStringMessage" v-html="message" />
            <p v-else-if="isStringMessage">{{ message }}</p>
            <component :is="() => messageVNode" v-else-if="messageVNode" />
          </slot>
        </div>

        <!-- 操作区插槽 -->
        <div v-if="slots.actions" :class="ns.e('actions')" @click.stop>
          <slot name="actions" />
        </div>
      </div>

      <!-- 关闭按钮 -->
      <button
        v-if="showClose"
        :class="ns.e('close')"
        aria-label="Close"
        @click.stop="handleClose"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <!-- 自动关闭进度条 -->
      <div v-if="duration > 0" :class="ns.e('progress')" />
    </div>
  </Transition>
</template>
