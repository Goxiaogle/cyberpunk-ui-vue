<script setup lang="ts">
/**
 * CpCard - 赛博朋克风格卡片容器
 * 支持多种变体、形状模式和灵活的插槽布局
 */
import { computed, useSlots } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { cardProps } from './card'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Card`,
})

const props = defineProps(cardProps)
const slots = useSlots()

const ns = useNamespace('card')

const rootClasses = computed(() => [
  ns.b(),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.m(`shadow-${props.shadow}`),
  ns.m(props.type),
  // 当存在 overlay 插槽时添加 has-overlay 状态类
  ns.is('has-overlay', !!slots.overlay),
  ns.is('dimmed', props.dimmed),
])

const cardClasses = computed(() => [
  ns.e('container'),
])

// 卡片根样式 (注入颜色变量)
const cardStyle = computed(() => {
  const styles: Record<string, string> = {}
  if (props.color) {
    styles['--cp-card-color'] = props.color
  } else if (props.type && props.type !== 'default') {
    styles['--cp-card-color'] = `var(--cp-color-${props.type})`
  }

  // 注入动画时长
  const dimmedDur = normalizeDuration(props.dimmedDuration)
  if (dimmedDur) styles['--cp-card-dimmed-duration'] = dimmedDur
  
  return styles
})

// 自定义 body padding
const bodyStyle = computed(() => {
  if (!props.bodyPadding) return {}
  return { padding: props.bodyPadding }
})

// 是否显示头部区域
const showHeader = computed(() => 
  props.title || slots.header || slots.title || slots.extra
)

// 是否显示底部区域
const hasFooter = computed(() => !!slots.footer)

// 是否显示覆层
const hasOverlay = computed(() => !!slots.overlay)

// 头部类名
const headerClasses = computed(() => [
  ns.e('header'),
  ns.is('bordered', props.headerBorder),
])

// 底部类名
const footerClasses = computed(() => [
  ns.e('footer'),
  ns.is('bordered', props.footerBorder),
])

// 覆层类名（仅用于操作区域定位和动画）
const overlayClasses = computed(() => [
  ns.e('overlay'),
  ns.bem('', 'overlay', props.overlayAnimation),
  ns.bem('', 'overlay', props.overlayPosition),
])

// 背景遮罩类名（覆盖整个卡片）
const backdropClasses = computed(() => [
  ns.e('overlay-backdrop'),
  ns.bem('', 'overlay-backdrop', `effect-${props.overlayEffect}`),
])

// 规范化 blur 值
const normalizeBlur = (value: number | string): string => {
  if (typeof value === 'number') return `${value}px`
  return value
}

// 覆层样式（动画时长、颜色、模糊度）
const overlayStyle = computed(() => ({
  '--cp-card-overlay-duration': normalizeDuration(props.overlayDuration),
  '--cp-card-overlay-color': props.overlayColor,
  '--cp-card-overlay-blur': normalizeBlur(props.overlayBlur),
}))
</script>

<template>
  <div :class="rootClasses" :style="cardStyle">
    <div :class="cardClasses">
      <!-- Cover -->
      <div v-if="$slots.cover" :class="ns.e('cover')">
        <slot name="cover" />
      </div>

      <!-- Header -->
      <div v-if="showHeader" :class="headerClasses">
        <slot name="header">
          <div :class="ns.e('title')">
            <slot name="title">{{ title }}</slot>
          </div>
          <div v-if="slots.extra" :class="ns.e('extra')">
            <slot name="extra" />
          </div>
        </slot>
      </div>

      <!-- Body -->
      <div :class="ns.e('body')" :style="bodyStyle">
        <slot />
      </div>

      <!-- Footer -->
      <div v-if="hasFooter" :class="footerClasses">
        <slot name="footer" />
      </div>

      <!-- Overlay Backdrop (covers entire card with blur/color effect) -->
      <div v-if="hasOverlay" :class="backdropClasses" :style="overlayStyle" />

      <!-- Overlay Actions (transparent, positioned for action buttons) -->
      <div v-if="hasOverlay" :class="overlayClasses" :style="overlayStyle">
        <slot name="overlay" />
      </div>
    </div>
  </div>
</template>

