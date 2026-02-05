<script setup lang="ts">
/**
 * CpButton - 赛博朋克风格按钮
 * 支持多种颜色、尺寸、形态变体
 * 支持 prefix/suffix 插槽、自定义颜色、无切角、虚线边框
 */
import { computed, useSlots } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { buttonProps, buttonEmits } from './button'
import { CpLoading } from '../../loading'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Button`,
})


const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const ns = useNamespace('button')

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', props.disabled || (props.loading && props.loadingDisabled)),
  ns.is('loading', props.loading),
  ns.is('block', props.block),
  ns.is('dashed', props.dashed),
  ns.is('custom-color', !!props.color),
  ns.is('loading-placeholder', props.loadingPlaceholder),
])

// 自定义颜色样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.color) {
    style['--cp-button-custom-color'] = props.color
    style['--cp-button-custom-color-light'] = `${props.color}33` // 20% opacity
  }
  
  if (props.textColor) {
    style['color'] = props.textColor
  }
  
  return style
})

const handleClick = (evt: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', evt)
}

const hasPrefix = computed(() => !!slots.prefix)
const hasSuffix = computed(() => !!slots.suffix)
</script>

<template>
  <button
    :class="classes"
    :style="customStyle"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading: 占位模式 - 始终存在，用 CSS 控制可见性 -->
    <span v-if="loadingPlaceholder" :class="ns.e('loader')">
      <CpLoading size="sm" :stroke-width="3" />
    </span>
    
    <!-- Loading: 非占位模式 - 使用 Transition 动画 -->
    <Transition v-else name="cp-loader">
      <span v-if="loading" :class="ns.e('loader')">
        <CpLoading size="sm" :stroke-width="3" />
      </span>
    </Transition>

    <!-- Prefix Slot (Icon 预留) -->
    <span v-if="hasPrefix && !loading" :class="ns.e('prefix')">
      <slot name="prefix" />
    </span>
    
    <!-- Content -->
    <span :class="ns.e('content')">
      <slot />
    </span>
    
    <!-- Suffix Slot (Icon 预留) -->
    <span v-if="hasSuffix" :class="ns.e('suffix')">
      <slot name="suffix" />
    </span>
  </button>
</template>
