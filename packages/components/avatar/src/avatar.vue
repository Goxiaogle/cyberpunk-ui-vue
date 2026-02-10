<script setup lang="ts">
/**
 * CpAvatar - 赛博朋克风格头像组件
 * 支持多种尺寸、形状，可显示图片、图标或文字
 */
import { ref, computed, inject, useSlots, toRef, watch } from 'vue'
import { useNamespace, useImageSrc } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { CpIcon } from '../../icon'
import { avatarProps, avatarEmits, avatarSizeMap } from './avatar'
import { AVATAR_GROUP_INJECTION_KEY, type AvatarGroupContext } from './avatar-group'

defineOptions({
    name: `${COMPONENT_PREFIX}Avatar`,
})

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)
const slots = useSlots()

const ns = useNamespace('avatar')

// 从 AvatarGroup 注入上下文
const avatarGroupContext = inject<AvatarGroupContext | null>(AVATAR_GROUP_INJECTION_KEY, null)

// URL 预处理
const { processedSrc } = useImageSrc({
    src: toRef(props, 'src'),
    processor: toRef(props, 'srcProcessor'),
    params: toRef(props, 'processorParams'),
})

// 状态
const isLoading = ref(true)
const isError = ref(false)
const currentSrc = ref(processedSrc.value)

// 合并尺寸（优先使用自身 props，否则使用 group 注入）
const mergedSize = computed(() => {
    if (props.size !== 'md') return props.size
    return avatarGroupContext?.size ?? props.size
})

// 合并形状
const mergedShape = computed(() => {
    if (props.shape !== 'circle') return props.shape
    return avatarGroupContext?.shape ?? props.shape
})

// 计算实际尺寸值（px）
const sizeValue = computed(() => {
    const size = mergedSize.value
    if (typeof size === 'number') return size
    return avatarSizeMap[size] ?? avatarSizeMap.md
})

// 类名
const classes = computed(() => [
    ns.b(),
    ns.m(`shape-${mergedShape.value}`),
    ns.is('loading', isLoading.value),
    ns.is('error', isError.value),
])

// 样式
const styles = computed(() => ({
    '--cp-avatar-size': `${sizeValue.value}px`,
}))

// 是否显示图片
const showImage = computed(() => !!currentSrc.value && !isError.value)

// 是否显示图标
const showIcon = computed(() => !showImage.value && props.icon && !slots.default)

// 是否显示占位符
const showPlaceholder = computed(() => !showImage.value && !showIcon.value && !slots.default)

// 图片加载成功
const handleLoad = (event: Event) => {
    isLoading.value = false
    isError.value = false
    emit('load', event)
}

// 图片加载失败
const handleError = (event: Event) => {
    isLoading.value = false

    // 尝试使用回退图片
    if (props.fallbackSrc && currentSrc.value !== props.fallbackSrc) {
        currentSrc.value = props.fallbackSrc
        return
    }

    isError.value = true
    emit('error', event)
}

// 监听处理后的 src 变化
watch(
    processedSrc,
    (newSrc) => {
        currentSrc.value = newSrc
        isLoading.value = true
        isError.value = false
    }
)
</script>

<template>
  <span :class="classes" :style="styles">
    <!-- 图片 -->
    <img
      v-if="showImage"
      :class="ns.e('image')"
      :src="currentSrc"
      :alt="alt"
      :style="{ objectFit: fit }"
      :draggable="props.draggable"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- 图标 -->
    <CpIcon
      v-else-if="showIcon"
      :class="ns.e('icon')"
      :icon="icon!"
    />

    <!-- 默认插槽（文字等） -->
    <span v-else-if="slots.default" :class="ns.e('text')">
      <slot />
    </span>

    <!-- 占位符（用户轮廓） -->
    <svg
      v-else-if="showPlaceholder"
      :class="ns.e('placeholder')"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
    </svg>
  </span>
</template>
