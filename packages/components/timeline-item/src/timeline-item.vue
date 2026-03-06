<script setup lang="ts">
/**
 * CpTimelineItem - 赛博朋克风格时间轴子项
 * 支持激活态、动画效果、丰富插槽定制
 */
import { computed, inject, useSlots } from 'vue'
import { useNamespace, normalizeDuration } from '@cyberpunk-vue/hooks'
import { timelineItemProps } from './timeline-item'
import { TIMELINE_CONTEXT_KEY } from '@cyberpunk-vue/components/timeline/src/timeline'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { CpIcon } from '@cyberpunk-vue/components/icon'

defineOptions({
  name: `${COMPONENT_PREFIX}TimelineItem`,
})

const props = defineProps(timelineItemProps)
const slots = useSlots()

const ns = useNamespace('timeline')

// 注入父级上下文
const parentCtx = inject(TIMELINE_CONTEXT_KEY, undefined)


// 最终生效的颜色类型
const effectiveType = computed(() => props.type || parentCtx?.type || 'default')

// 最终生效的连线样式
const effectiveLineStyle = computed(() => props.lineStyle || parentCtx?.lineStyle || 'solid')

// 最终生效的连线颜色
const effectiveLineColor = computed(() => props.lineColor || parentCtx?.lineColor || '')

// 是否有时间戳
const hasTimestamp = computed(() => {
  return !props.hideTimestamp && (!!props.timestamp || !!slots.timestamp)
})

// 是否有自定义节点
const hasCustomDot = computed(() => !!slots.dot)

// 是否有附加区域
const hasExtra = computed(() => !!slots.extra)

// 是否有自定义连线
const hasCustomConnector = computed(() => !!slots.connector)

// CSS class
const classes = computed(() => [
  ns.e('item'),
  ns.is(effectiveType.value, true),
  ns.is(props.size, true),
  ns.is('active', props.active),
  ns.is('hollow', props.hollow),
  ns.is('custom-color', !!props.color),
  ns.is('has-icon', !!props.icon),
  props.animation !== 'none' && ns.is(`animation-${props.animation}`, true),
])

// 节点样式
const dotStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (props.color) {
    styles['--cp-timeline-item-color'] = props.color
  }
  if (props.animation !== 'none' && props.duration) {
    const dur = normalizeDuration(props.duration)
    if (dur) styles['--cp-timeline-animation-duration'] = dur
  }
  if (props.intensity !== 1) {
    styles['--cp-timeline-animation-intensity'] = String(props.intensity)
  }
  return styles
})

// 连线样式
const connectorStyle = computed(() => {
  const styles: Record<string, string> = {}
  if (effectiveLineStyle.value !== 'solid') {
    styles['--cp-timeline-line-style'] = effectiveLineStyle.value
  }
  if (effectiveLineColor.value) {
    styles['--cp-timeline-line-color'] = effectiveLineColor.value
  }
  return styles
})
</script>

<template>
  <li :class="classes" :style="dotStyle">
    <!-- 节点轴 -->
    <div :class="ns.e('item-tail')" :style="connectorStyle">
      <slot v-if="hasCustomConnector" name="connector" />
    </div>

    <!-- 节点圆点 -->
    <div :class="ns.e('item-dot')">
      <slot v-if="hasCustomDot" name="dot" />
      <template v-else>
        <!-- 背景遮罩：防止闪烁等半透明动画时底部的连线漏出 -->
        <span :class="ns.e('item-mask')" />
        <CpIcon v-if="icon" :icon="icon" :class="ns.e('item-icon')" />
        <span v-else :class="ns.e('item-node')" />
        <!-- 脉冲动画元素 -->
        <span
          v-if="animation === 'pulse' || active"
          :class="ns.e('item-pulse')"
        />
      </template>
    </div>

    <!-- 内容区域 -->
    <div :class="ns.e('item-content')">
      <!-- 上方时间戳 -->
      <div
        v-if="hasTimestamp && placement === 'top'"
        :class="ns.e('item-timestamp')"
      >
        <slot name="timestamp">{{ timestamp }}</slot>
      </div>

      <!-- 主内容 -->
      <div :class="ns.e('item-body')">
        <slot />
      </div>

      <!-- 附加区域 -->
      <div v-if="hasExtra" :class="ns.e('item-extra')">
        <slot name="extra" />
      </div>

      <!-- 下方时间戳 -->
      <div
        v-if="hasTimestamp && placement === 'bottom'"
        :class="ns.e('item-timestamp')"
      >
        <slot name="timestamp">{{ timestamp }}</slot>
      </div>
    </div>
  </li>
</template>
