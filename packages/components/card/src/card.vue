<script setup lang="ts">
/**
 * CpCard - 赛博朋克风格卡片容器
 * 支持多种变体、形状模式和灵活的插槽布局
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useSlots, watch } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { cardProps, cardEmits } from './card'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { CpLoading } from '@cyberpunk-vue/components/loading'

defineOptions({
  name: `${COMPONENT_PREFIX}Card`,
})

const props = defineProps(cardProps)
const emit = defineEmits(cardEmits)
const slots = useSlots()

const ns = useNamespace('card')
const collapseTransitionDurationMs = 320

// ========== 折叠展开动画锁定 ==========
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

// ========== 折叠状态（受控 / 自治） ==========
const internalCollapsed = ref(true)
const collapseNeeded = ref(true)

// 判断外部是否传入了 collapse prop
const isControlled = computed(() => props.collapse !== undefined)

// 合并折叠状态
const isCollapsed = computed(() => {
  if (isControlled.value) return props.collapse!
  // 自治模式：showCollapseAction + halfCollapse 开启时使用内部状态
  if (props.showCollapseAction && props.halfCollapse) return internalCollapsed.value && collapseNeeded.value
  return false
})

// 切换内部折叠状态
const toggleCollapse = () => {
  if (isControlled.value) return
  internalCollapsed.value = !internalCollapsed.value
}

watch(
  isCollapsed,
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
  if (isCollapsed.value || !isExpanding.value) return
  if (event.target !== event.currentTarget) return
  if (event.propertyName !== 'grid-template-rows') return

  isExpanding.value = false
  clearExpandUnlockTimer()
}

// ========== ResizeObserver：检测内容高度 vs peekHeight ==========
const collapseInnerRef = ref<HTMLElement>()
// collapseNeeded 已提前声明（isCollapsed 依赖它）
const expandedHeight = ref<number | null>(null)
let resizeObserver: ResizeObserver | null = null

function parsePeekHeightPx(): number {
  const v = props.peekHeight
  return typeof v === 'number' ? v : (parseFloat(v) || 80)
}

function checkCollapseNeeded() {
  if (!props.halfCollapse || !collapseInnerRef.value) return
  const contentH = collapseInnerRef.value.scrollHeight
  const needed = contentH > parsePeekHeightPx()
  if (collapseNeeded.value !== needed) {
    collapseNeeded.value = needed
    emit('collapse-change', { needed })
  }
}

function updateExpandedHeight() {
  if (collapseInnerRef.value) {
    expandedHeight.value = collapseInnerRef.value.scrollHeight
  }
}

function setupResizeObserver() {
  cleanupResizeObserver()
  if (!props.halfCollapse || !collapseInnerRef.value) return
  resizeObserver = new ResizeObserver(() => {
    checkCollapseNeeded()
    updateExpandedHeight()
  })
  resizeObserver.observe(collapseInnerRef.value)
}

function cleanupResizeObserver() {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
}

watch(
  () => props.halfCollapse,
  (val) => {
    if (val) {
      nextTick(() => {
        setupResizeObserver()
        checkCollapseNeeded()
      })
    } else {
      cleanupResizeObserver()
      // 重置为 true（默认需要折叠）以备下次开启
      collapseNeeded.value = true
    }
  },
)

watch(
  () => props.peekHeight,
  () => checkCollapseNeeded(),
)

onMounted(() => {
  if (props.halfCollapse) {
    nextTick(() => {
      setupResizeObserver()
      checkCollapseNeeded()
      updateExpandedHeight()
    })
  }
})

onBeforeUnmount(() => {
  clearExpandUnlockTimer()
  cleanupResizeObserver()
})

// ========== 内置折叠控制器 ==========
const showController = computed(() =>
  props.showCollapseAction && props.halfCollapse && collapseNeeded.value
)

// ========== 样式/类名计算 ==========
const rootClasses = computed(() => [
  ns.b(),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.m(`shadow-${props.shadow}`),
  ns.m(props.type),
  ns.is('has-overlay', !!slots.overlay),
  ns.is('dimmed', props.dimmed),
  ns.is('trigger-image-hover', props.triggerImageHover),
  ns.is('hover-scale', props.hoverScale),
  ns.is('collapse-size-locked', isCollapsed.value || isExpanding.value),
  ns.is('collapsed', isCollapsed.value),
  ns.is('half-collapsed', isCollapsed.value && props.halfCollapse),
  ns.is('loading', props.loading),
  ns.is('disabled', props.disabled),
])

const cardClasses = computed(() => [
  ns.e('container'),
  props.backgroundClass,
])

// ========== 统一颜色计算 ==========
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

const cardStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  if (realColor.value) {
    styles['--cp-card-color'] = realColor.value
  }
  if (realColorLight.value) {
    styles['--cp-card-color-light'] = realColorLight.value
  }
  if (props.bgColor) {
    styles['--cp-card-bg'] = props.bgColor
  }
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
  if (props.shadowColor) {
    styles['--cp-card-shadow-color'] = props.shadowColor
  } else if (realColor.value) {
    styles['--cp-card-shadow-color'] = `color-mix(in srgb, ${realColor.value} 40%, black)`
  }

  const dimmedDur = normalizeDuration(props.dimmedDuration)
  if (dimmedDur) styles['--cp-card-dimmed-duration'] = dimmedDur

  if (props.halfCollapse) {
    const ph = props.peekHeight
    styles['--cp-card-peek-height'] = typeof ph === 'number' ? `${ph}px` : ph
    if (expandedHeight.value !== null) {
      styles['--cp-card-expanded-height'] = `${expandedHeight.value}px`
    }
  }
  
  return styles
})

const realBodyStyle = computed(() => {
  const style = typeof props.bodyStyle === 'string' ? {} : { ...props.bodyStyle }
  if (props.bodyPadding) {
    style.padding = props.bodyPadding
  }
  return style
})

const showHeader = computed(() => 
  !!(props.title || slots.header || slots.title || slots.extra)
)

const showCard = computed(() => !isCollapsed.value || showHeader.value)

const hasFooter = computed(() => !!slots.footer)
const hasOverlay = computed(() => !!slots.overlay)

const headerClasses = computed(() => [
  ns.e('header'),
  ns.is('bordered', props.headerBorder),
  props.headerClass,
])

const footerClasses = computed(() => [
  ns.e('footer'),
  ns.is('bordered', props.footerBorder),
])

const realActionEffect = computed(() => props.actionEffect ?? props.overlayEffect)
const realActionColor = computed(() => props.actionColor ?? props.overlayColor)
const realActionBlur = computed(() => props.actionBlur ?? props.overlayBlur)

const overlayClasses = computed(() => [
  ns.e('overlay'),
  ns.bem('', 'overlay', props.overlayAnimation),
  ns.bem('', 'overlay', props.overlayPosition),
  ns.bem('', 'overlay', `effect-${realActionEffect.value}`),
])

const backdropClasses = computed(() => [
  ns.e('overlay-backdrop'),
  ns.bem('', 'overlay-backdrop', `effect-${props.overlayEffect}`),
])

const normalizeBlur = (value: number | string | undefined): string => {
  if (value === undefined) return '10px'
  if (typeof value === 'number') return `${value}px`
  return value
}

const overlayStyle = computed(() => ({
  '--cp-card-overlay-duration': normalizeDuration(props.overlayDuration),
  '--cp-card-overlay-color': props.overlayColor,
  '--cp-card-overlay-blur': normalizeBlur(props.overlayBlur),
  '--cp-card-action-color': realActionColor.value,
  '--cp-card-action-blur': normalizeBlur(realActionBlur.value),
}))

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
        <div ref="collapseInnerRef" :class="ns.e('collapse-inner')">
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

      <!-- Built-in Collapse Controller -->
      <div
        v-if="showController"
        :class="ns.e('collapse-action')"
      >
        <slot name="collapse-action" :collapsed="isCollapsed" :needed="collapseNeeded" :toggle="toggleCollapse">
          <div :class="ns.e('collapse-action-default')" @click="toggleCollapse">
            <span :class="ns.e('collapse-action-text')">
              {{ isCollapsed ? collapseActionExpandText : collapseActionCollapseText }}
            </span>
            <span :class="[ns.e('collapse-action-icon'), { 'is-expanded': !isCollapsed }]">▼</span>
          </div>
        </slot>
      </div>

      <!-- Overlay Backdrop -->
      <div v-if="hasOverlay" :class="backdropClasses" :style="overlayStyle" />

      <!-- Overlay Actions -->
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

