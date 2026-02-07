<script setup lang="ts">
/**
 * CpBadge - 赛博朋克风格徽章
 * 用于在另一个元素上显示数字、小红点或状态标识
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { badgeProps } from './badge'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Badge`,
})

const props = defineProps(badgeProps)

const ns = useNamespace('badge')

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
  default: 'var(--cp-text-secondary)',
}

// 是否显示徽章
const isHidden = computed(() => {
  if (props.hidden) return true
  if (props.dot) return false
  
  const val = props.value
  if (val === '' || val === null || val === undefined) return true
  if (typeof val === 'number' && val === 0 && !props.showZero) return true
  
  return false
})

// 显示的内容 (Pattern 152: Numerical Guarding)
const displayValue = computed(() => {
  if (props.dot) return ''
  
  const val = props.value
  const numValue = Number(val)
  
  // 使用 Number() 进行类型强制转换，解决 Storybook 传递字符串的问题
  if (!isNaN(numValue) && typeof val !== 'boolean') {
    if (numValue > props.max) return `${props.max}+`
    if (props.min !== undefined && numValue < props.min) return `${props.min}-`
    return String(val)
  }
  return String(val)
})

// 计算内容类名
const badgeClasses = computed(() => [
  ns.e('content'),
])

// 自定义样式
const badgeStyle = computed(() => {
  const style: Record<string, string> = {}

  // 颜色设置
  if (props.color) {
    style['--cp-badge-color'] = props.color
  } else if (props.type && typeColorMap[props.type]) {
    style['--cp-badge-color'] = typeColorMap[props.type]
  }

  // 文本颜色
  if (props.textColor) {
    style['--cp-badge-text-color'] = props.textColor
  }

  // 偏移设置
  if (props.offset && props.offset.length === 2) {
    const [x, y] = props.offset
    style['--cp-badge-offset-x'] = `${x}px`
    style['--cp-badge-offset-y'] = `${y}px`
  }

  return style
})
</script>

<template>
  <div
    :class="[
      ns.b(),
      ns.m(`variant-${props.variant}`),
      ns.m(`type-${props.type}`),
      ns.m(`size-${props.size}`),
      ns.is('dot', props.dot),
      ns.is('custom-color', !!props.color),
      ns.is('custom-text-color', !!props.textColor),
    ]"
    :style="badgeStyle"
  >
    <!-- 被包裹的内容 -->
    <slot />
    
    <!-- 徽章 -->
    <Transition :name="ns.namespace + '-badge-fade'">
      <sup
        v-if="!isHidden"
        :class="badgeClasses"
      >
        {{ displayValue }}
      </sup>
    </Transition>
  </div>
</template>
