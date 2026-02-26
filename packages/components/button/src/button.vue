<script setup lang="ts">
/**
 * CpButton - 赛博朋克风格按钮
 * 支持多种颜色、尺寸、形态变体
 * 支持 prefix/suffix 插槽、自定义颜色、无切角、虚线边框
 */
import { computed, useSlots } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { buttonProps, buttonEmits } from './button'
import { CpLoading } from '@cyberpunk-vue/components/loading'
import { CpIcon } from '@cyberpunk-vue/components/icon'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Button`,
})


const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const ns = useNamespace('button')

// 按钮尺寸预设映射
const buttonSizeMap = { sm: 24, md: 32, lg: 40 }

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  // 只有预设值才添加 size 类名
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', props.disabled || (props.loading && props.loadingDisabled)),
  ns.is('loading', props.loading),
  ns.is('dimmed', props.dimmed),
  ns.is('block', props.block),
  ns.is('dashed', props.dashed),
  ns.is('custom-color', !!props.color),
  ns.is('loading-placeholder', props.loadingPlaceholder),
  ns.is('icon-only', isIconOnly.value || props.square),
  ns.is('custom-size', !isPresetSize(props.size)),
  ns.is('no-decoration', !props.decoration),
  ns.is('small-size', isSmallSize.value),
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

  // 自定义尺寸：非预设值时设置 CSS 变量
  if (!isPresetSize(props.size)) {
    style['--cp-button-height'] = normalizeSize(props.size, buttonSizeMap)
    
    // 动态计算切角大小，预防极小或极大尺寸下切角比例畸形
    let numSize = 0
    if (typeof props.size === 'number') {
      numSize = props.size as number
    } else if (typeof props.size === 'string') {
      const sizeStr = props.size as string
      const pxMatch = sizeStr.match(/^(\d+(?:\.\d+)?)px$/)
      if (pxMatch) {
        numSize = parseFloat(pxMatch[1])
      }
    }
    
    if (numSize > 0) {
      // 约为高度的 30%，最小 4px (不能太小否则边缘不平滑)
      const clipSize = Math.max(4, Math.round(numSize * 0.3))
      style['--cp-button-clip-size'] = `${clipSize}px`
    }
  }
  
  return style
})

const handleClick = (evt: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', evt)
}

const isSmallSize = computed(() => {
  if (props.size === 'sm') return true
  if (typeof props.size === 'number' && (props.size as number) <= 24) return true
  if (typeof props.size === 'string') {
    const sizeStr = props.size as string
    const pxMatch = sizeStr.match(/^(\d+(?:\.\d+)?)px$/)
    if (pxMatch && parseFloat(pxMatch[1]) <= 24) return true
  }
  return false
})

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

// 图标尺寸计算 - 优先级：xxxIconSize > iconSize > (与按钮尺寸同步)
// 默认图标尺寸跟随按钮尺寸
const defaultIconSize = computed(() => {
  if (isPresetSize(props.size)) return props.size
  return props.size // 如果是自定义尺寸，也会传给图标
})

const finalIconOnlySize = computed(() => props.iconSize || defaultIconSize.value)
const finalPrefixSize = computed(() => props.prefixIconSize || props.iconSize || defaultIconSize.value)
const finalSuffixSize = computed(() => props.suffixIconSize || props.iconSize || defaultIconSize.value)

// 按钮内 Loading 的尺寸 - 使用固定的较小尺寸，避免撑满按钮
// Loading 组件的 size 定义（sm=24px, md=40px, lg=56px）远大于按钮内部空间
const buttonLoadingSizeMap: Record<string, number> = { sm: 18, md: 20, lg: 24 }
const loadingSize = computed(() => {
  if (isPresetSize(props.size)) return buttonLoadingSizeMap[props.size] || 16
  // 自定义尺寸时，使用合适的默认值
  return 16
})
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
      <CpLoading v-if="loading" :size="loadingSize" :stroke-width="3" />
      <!-- 图标 -->
      <CpIcon v-else :icon="icon" :size="finalIconOnlySize" :style="iconOnlyStyle" />
    </template>
    
    <!-- 正常模式 -->
    <template v-else>
      <!-- Loading: 占位模式 - 始终存在，用 CSS 控制可见性 -->
      <span v-if="loadingPlaceholder" :class="ns.e('loader')">
        <CpLoading :size="loadingSize" :stroke-width="3" />
      </span>
      
      <!-- Loading: 非占位模式 - 使用 Transition 动画 -->
      <Transition v-else name="cp-loader">
        <span v-if="loading" :class="ns.e('loader')">
          <CpLoading :size="loadingSize" :stroke-width="3" />
        </span>
      </Transition>

      <!-- Prefix: slot 优先，其次 prefixIcon prop -->
      <span v-if="hasPrefix && !loading" :class="ns.e('prefix')">
        <slot name="prefix">
          <CpIcon v-if="prefixIcon" :icon="prefixIcon" :size="finalPrefixSize" :style="prefixIconStyle" />
        </slot>
      </span>
      
      <!-- Content -->
      <span :class="ns.e('content')">
        <slot />
      </span>
      
      <!-- Suffix: slot 优先，其次 suffixIcon prop -->
      <span v-if="hasSuffix" :class="ns.e('suffix')">
        <slot name="suffix">
          <CpIcon v-if="suffixIcon" :icon="suffixIcon" :size="finalSuffixSize" :style="suffixIconStyle" />
        </slot>
      </span>
    </template>
  </button>
</template>
