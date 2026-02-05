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
import { CpIcon } from '../../icon'
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
  ns.is('icon-only', isIconOnly.value),
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

// 判断是否有前缀内容 (slot 或 prefixIcon prop)
const hasPrefix = computed(() => !!slots.prefix || !!props.prefixIcon)
// 判断是否有后缀内容 (slot 或 suffixIcon prop)
const hasSuffix = computed(() => !!slots.suffix || !!props.suffixIcon)

// 判断是否为纯图标模式: 传入了 icon 且没有 default slot 内容
const isIconOnly = computed(() => !!props.icon && !slots.default)

// 图标颜色计算 - 优先级：xxxfixIconColor > iconColor > textColor
// Icon-only模式的图标颜色
const iconOnlyColor = computed(() => props.iconColor || props.textColor || '')
// 前缀图标颜色
const prefixColor = computed(() => props.prefixIconColor || props.iconColor || props.textColor || '')
// 后缀图标颜色
const suffixColor = computed(() => props.suffixIconColor || props.iconColor || props.textColor || '')

// 图标样式对象
const iconOnlyStyle = computed(() => iconOnlyColor.value ? { color: iconOnlyColor.value } : {})
const prefixIconStyle = computed(() => prefixColor.value ? { color: prefixColor.value } : {})
const suffixIconStyle = computed(() => suffixColor.value ? { color: suffixColor.value } : {})
</script>

<template>
  <button
    :class="classes"
    :style="customStyle"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Icon-only 模式 -->
    <template v-if="isIconOnly">
      <!-- Loading 状态 -->
      <CpLoading v-if="loading" size="sm" :stroke-width="3" />
      <!-- 图标 -->
      <CpIcon v-else :icon="icon" :style="iconOnlyStyle" />
    </template>
    
    <!-- 正常模式 -->
    <template v-else>
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

      <!-- Prefix: slot 优先，其次 prefixIcon prop -->
      <span v-if="hasPrefix && !loading" :class="ns.e('prefix')">
        <slot name="prefix">
          <CpIcon v-if="prefixIcon" :icon="prefixIcon" :style="prefixIconStyle" />
        </slot>
      </span>
      
      <!-- Content -->
      <span :class="ns.e('content')">
        <slot />
      </span>
      
      <!-- Suffix: slot 优先，其次 suffixIcon prop -->
      <span v-if="hasSuffix" :class="ns.e('suffix')">
        <slot name="suffix">
          <CpIcon v-if="suffixIcon" :icon="suffixIcon" :style="suffixIconStyle" />
        </slot>
      </span>
    </template>
  </button>
</template>
