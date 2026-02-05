<script setup lang="ts">
/**
 * CpTag - 赛博朋克风格标签
 * 支持多种类型、变体、尺寸与可关闭功能
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { tagProps, tagEmits } from './tag'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Tag`,
})

const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const ns = useNamespace('tag')

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.m(props.size),
  ns.m(`variant-${props.variant}`),
  ns.m(`shape-${props.shape}`),
  ns.m(`type-${props.type}`),  // 添加 type 类名用于精确样式匹配
  ns.is('closable', props.closable),
  ns.is('disabled', props.disabled),
  ns.is('dashed', props.dashed),
  ns.is('custom-color', !!props.color),
  ns.is('typed', props.type !== 'default' && !props.color),
  ns.is('selectable', props.selectable),
  ns.is('selected', props.selected),
])

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.color) {
    style['--cp-tag-color'] = props.color
    style['--cp-tag-color-light'] = `${props.color}33`
  } else if (props.type && props.type !== 'default' && typeColorMap[props.type]) {
    style['--cp-tag-color'] = typeColorMap[props.type]
    style['--cp-tag-color-light'] = `var(--cp-color-${props.type}-light)`
  }

  return style
})

// 点击处理
const handleClick = (event: MouseEvent) => {
  if (props.disabled) return
  emit('click', event)
  
  // 可选中模式下切换选中状态
  if (props.selectable) {
    emit('update:selected', !props.selected)
  }
}

// 关闭处理
const handleClose = (event: MouseEvent) => {
  event.stopPropagation()
  if (props.disabled) return
  emit('close', event)
}

// 键盘关闭处理
const handleCloseKeydown = (event: KeyboardEvent) => {
  event.stopPropagation()
  if (props.disabled) return
  // 创建一个合成的 MouseEvent 来保持 emit 类型一致
  emit('close', new MouseEvent('click'))
}
</script>

<template>
  <span
    :class="classes"
    :style="customStyle"
    @click="handleClick"
  >
    <!-- 前缀 (用于图标等) -->
    <span v-if="$slots.prefix" :class="ns.e('prefix')">
      <slot name="prefix" />
    </span>

    <!-- 主内容 -->
    <span :class="ns.e('content')">
      <slot />
    </span>

    <!-- 后缀 (用于计数/徽章等) -->
    <span v-if="$slots.suffix" :class="ns.e('suffix')">
      <slot name="suffix" />
    </span>

    <!-- 关闭按钮 -->
    <span
      v-if="props.closable"
      :class="ns.e('close')"
      role="button"
      tabindex="0"
      @click="handleClose"
      @keydown.enter.prevent="handleCloseKeydown"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </span>

    <!-- 装饰块 (clip 模式) -->
    <span v-if="props.shape === 'clip'" :class="ns.e('decor')" />
  </span>
</template>

