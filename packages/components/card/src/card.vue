<script setup lang="ts">
/**
 * CpCard - 赛博朋克风格卡片容器
 * 支持多种变体、形状模式和灵活的插槽布局
 */
import { computed, onBeforeUnmount, ref, useSlots, watch } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { cardProps } from './card'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { CpLoading } from '@cyberpunk-vue/components/loading'

defineOptions({
  name: `${COMPONENT_PREFIX}Card`,
})

const props = defineProps(cardProps)
const slots = useSlots()

const ns = useNamespace('card')
const collapseTransitionDurationMs = 320

const isExpanding = ref(false)
let expandUnlockTimer: ReturnType<typeof setTimeout> | null = null

const clearExpandUnlockTimer = () => {
  if (expandUnlockTimer !== null) {
    clearTimeout(expandUnlockTimer)
    expandUnlockTimer = null
  }
}

const scheduleExpandUnlock = () => {
  clearExpandUnlockTimer()
  expandUnlockTimer = setTimeout(() => {
    isExpanding.value = false
    expandUnlockTimer = null
  }, collapseTransitionDurationMs)
}

watch(
  () => props.collapse,
  (collapsed, prevCollapsed) => {
    if (collapsed) {
      isExpanding.value = false
      clearExpandUnlockTimer()
      return
    }

    if (prevCollapsed) {
      isExpanding.value = true
      scheduleExpandUnlock()
    }
  },
)

const onCollapseTransitionEnd = (event: TransitionEvent) => {
  if (props.collapse || !isExpanding.value) return
  if (event.target !== event.currentTarget) return
  if (event.propertyName !== 'grid-template-rows') return

  isExpanding.value = false
  clearExpandUnlockTimer()
}

onBeforeUnmount(() => {
  clearExpandUnlockTimer()
})

const rootClasses = computed(() => [
  ns.b(),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.m(`shadow-${props.shadow}`),
  ns.m(props.type),
  // 当存在 overlay 插槽时添加 has-overlay 状态类
  ns.is('has-overlay', !!slots.overlay),
  ns.is('dimmed', props.dimmed),
  ns.is('trigger-image-hover', props.triggerImageHover),
  ns.is('hover-scale', props.hoverScale),
  ns.is('collapse-size-locked', props.collapse || isExpanding.value),
  ns.is('collapsed', props.collapse),
  ns.is('loading', props.loading),
  ns.is('disabled', props.disabled),
])

const cardClasses = computed(() => [
  ns.e('container'),
  props.backgroundClass,
])

// ========== 统一颜色计算 ==========
// 优先级：color > type > default

// 计算最终主题色
const realColor = computed(() => {
  if (props.color) return props.color
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type})`
  return null
})

// 计算最终浅色
const realColorLight = computed(() => {
  if (props.color) return `color-mix(in srgb, ${props.color} 30%, transparent)`
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type}-light)`
  return null
})

// 卡片根样式 (注入颜色变量)
const cardStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  // 统一颜色
  if (realColor.value) {
    styles['--cp-card-color'] = realColor.value
  }
  if (realColorLight.value) {
    styles['--cp-card-color-light'] = realColorLight.value
  }
  
  // 背景色
  if (props.bgColor) {
    styles['--cp-card-bg'] = props.bgColor
  }

  // 边框与分隔线颜色
  if (props.borderColor) {
    styles['--cp-card-border-color'] = props.borderColor
  }
  if (props.dividerColor) {
    styles['--cp-card-divider-color'] = props.dividerColor
  }
  if (props.headerDividerColor) {
    styles['--cp-card-header-divider-color'] = props.headerDividerColor
  }
  if (props.footerDividerColor) {
    styles['--cp-card-footer-divider-color'] = props.footerDividerColor
  }

  // 阴影颜色
  // 优先级：shadowColor > realColor > default(rgba(0,0,0,0.4))
  if (props.shadowColor) {
    styles['--cp-card-shadow-color'] = props.shadowColor
  } else if (realColor.value) {
    // 如果有主题色，阴影颜色基于主题色，但带有透明度以保证视觉效果
    styles['--cp-card-shadow-color'] = `color-mix(in srgb, ${realColor.value} 40%, black)`
  }

  // 注入动画时长
  const dimmedDur = normalizeDuration(props.dimmedDuration)
  if (dimmedDur) styles['--cp-card-dimmed-duration'] = dimmedDur
  
  return styles
})

// 自定义 body 样式
const realBodyStyle = computed(() => {
  const style = typeof props.bodyStyle === 'string' ? {} : { ...props.bodyStyle }
  if (props.bodyPadding) {
    style.padding = props.bodyPadding
  }
  return style
})

// 是否显示头部区域
const showHeader = computed(() => 
  !!(props.title || slots.header || slots.title || slots.extra)
)

// 是否显示卡片整体
const showCard = computed(() => !props.collapse || showHeader.value)

// 是否显示底部区域
const hasFooter = computed(() => !!slots.footer)

// 是否显示覆层
const hasOverlay = computed(() => !!slots.overlay)

// 头部类名
const headerClasses = computed(() => [
  ns.e('header'),
  ns.is('bordered', props.headerBorder),
  props.headerClass,
])

// 底部类名
const footerClasses = computed(() => [
  ns.e('footer'),
  ns.is('bordered', props.footerBorder),
])

// 计算实际应用的操作区域效果（继承逻辑）
const realActionEffect = computed(() => props.actionEffect ?? props.overlayEffect)
const realActionColor = computed(() => props.actionColor ?? props.overlayColor)
const realActionBlur = computed(() => props.actionBlur ?? props.overlayBlur)

// 覆层类名（操作区域定位、动画和效果）
const overlayClasses = computed(() => [
  ns.e('overlay'),
  ns.bem('', 'overlay', props.overlayAnimation),
  ns.bem('', 'overlay', props.overlayPosition),
  ns.bem('', 'overlay', `effect-${realActionEffect.value}`),
])

// 背景遮罩类名（覆盖整个卡片）
const backdropClasses = computed(() => [
  ns.e('overlay-backdrop'),
  ns.bem('', 'overlay-backdrop', `effect-${props.overlayEffect}`),
])

// 规范化 blur 值
const normalizeBlur = (value: number | string | undefined): string => {
  if (value === undefined) return '10px'
  if (typeof value === 'number') return `${value}px`
  return value
}

// 覆层样式（动画时长、整卡+操作区颜色/模糊度）
const overlayStyle = computed(() => ({
  '--cp-card-overlay-duration': normalizeDuration(props.overlayDuration),
  '--cp-card-overlay-color': props.overlayColor,
  '--cp-card-overlay-blur': normalizeBlur(props.overlayBlur),
  '--cp-card-action-color': realActionColor.value,
  '--cp-card-action-blur': normalizeBlur(realActionBlur.value),
}))

// 加载遮罩类名
const loadingOverlayClasses = computed(() => [
  ns.e('loading-overlay'),
  props.loadingClass,
])
</script>

<template>
  <div v-show="showCard" :class="rootClasses" :style="cardStyle">
    <div :class="cardClasses" :style="backgroundStyle">
      <!-- Cover -->
      <div v-if="$slots.cover" :class="ns.e('collapse-transition')" @transitionend="onCollapseTransitionEnd">
        <div :class="ns.e('collapse-inner')">
          <div :class="ns.e('cover')">
            <slot name="cover" />
          </div>
        </div>
      </div>

      <!-- Header -->
      <div v-if="showHeader" :class="headerClasses" :style="headerStyle">
        <slot name="header">
          <div :class="ns.e('title')">
            <slot name="title">{{ title }}</slot>
          </div>
          <div v-if="slots.extra" :class="ns.e('extra')">
            <slot name="extra" />
          </div>
        </slot>
      </div>

      <!-- Body & Footer Wrapper for Collapse Animation -->
      <div :class="ns.e('collapse-transition')" @transitionend="onCollapseTransitionEnd">
        <div :class="ns.e('collapse-inner')">
          <!-- Body -->
          <div :class="[ns.e('body'), bodyClass]" :style="realBodyStyle">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="hasFooter" :class="footerClasses">
            <slot name="footer" />
          </div>
        </div>
      </div>

      <!-- Overlay Backdrop (covers entire card with blur/color effect) -->
      <div v-if="hasOverlay" :class="backdropClasses" :style="overlayStyle" />

      <!-- Overlay Actions (transparent, positioned for action buttons) -->
      <div v-if="hasOverlay" :class="overlayClasses" :style="overlayStyle">
        <slot name="overlay" />
      </div>

      <!-- Loading Overlay -->
      <Transition name="cp-card-loading">
        <div v-if="loading" :class="loadingOverlayClasses" :style="loadingStyle">
          <slot name="loading">
            <CpLoading :color="realColor || undefined" />
            <span v-if="loadingText" :class="ns.e('loading-text')">{{ loadingText }}</span>
          </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

