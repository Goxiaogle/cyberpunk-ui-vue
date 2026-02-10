<script setup lang="ts">
/**
 * CpImage - 赛博朋克风格图片组件
 * 支持懒加载、加载占位、错误处理等功能
 */
import { ref, computed, onMounted, onBeforeUnmount, watch, toRef } from 'vue'
import { useNamespace, useImageSrc, normalizeDuration } from '@cyberpunk-vue/hooks'
import { imageProps, imageEmits } from './image'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
    name: `${COMPONENT_PREFIX}Image`,
})

const props = defineProps(imageProps)
const emit = defineEmits(imageEmits)

const ns = useNamespace('image')

// 状态管理
const isLoading = ref(true)
const isError = ref(false)
const currentSrc = ref('')
const imageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

// 图片是否已进入视口（用于懒加载）
const isInViewport = ref(!props.lazy)

// IntersectionObserver 实例
let observer: IntersectionObserver | null = null

// URL 预处理
const { processedSrc } = useImageSrc({
    src: toRef(props, 'src'),
    processor: toRef(props, 'srcProcessor'),
    params: toRef(props, 'processorParams'),
})

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
    default: 'var(--cp-text-muted)',
    primary: 'var(--cp-color-primary)',
    success: 'var(--cp-color-success)',
    warning: 'var(--cp-color-warning)',
    error: 'var(--cp-color-error)',
    info: 'var(--cp-color-info)',
}

// 计算类名
const classes = computed(() => [
    ns.b(),
    ns.m(`shape-${props.shape}`),
    ns.m(`fit-${props.fit}`),
    ns.is('loading', isLoading.value),
    ns.is('error', isError.value),
    ns.is('hoverable', props.hoverable),
    props.hoverable && ns.m(`hover-${props.hoverMode}`),
])

// 计算样式
const containerStyle = computed(() => {
    const style: Record<string, string> = {}

    if (props.width) {
        style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
    }
    if (props.height) {
        style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
    }

    // 装饰块颜色 - 所有 type 都映射颜色
    if (props.color) {
        style['--cp-image-decor-color'] = props.color
    } else if (props.type && typeColorMap[props.type]) {
        style['--cp-image-decor-color'] = typeColorMap[props.type]
    }

    // Hover 动画时间
    if (props.hoverable && props.hoverDuration) {
        const dur = normalizeDuration(props.hoverDuration)
        if (dur) style['--cp-image-hover-duration'] = dur
    }

    return style
})

// 加载图片
const loadImage = () => {
    if (!currentSrc.value) {
        isLoading.value = false
        return
    }

    isLoading.value = true
    isError.value = false
}

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

// 初始化 IntersectionObserver（懒加载）
const initObserver = () => {
    if (!props.lazy || !containerRef.value) return

    observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                isInViewport.value = true
                // 进入视口后停止观察
                observer?.disconnect()
            }
        },
        {
            rootMargin: '50px', // 提前 50px 开始加载
        }
    )

    observer.observe(containerRef.value)
}

// 监听处理后的 src 变化
watch(
    processedSrc,
    (newSrc) => {
        if (isInViewport.value) {
            currentSrc.value = newSrc
            loadImage()
        }
    },
    { immediate: true }
)

// 懒加载：当进入视口时加载图片
watch(isInViewport, (inViewport) => {
    if (inViewport && processedSrc.value) {
        currentSrc.value = processedSrc.value
        loadImage()
    }
})

onMounted(() => {
    if (props.lazy) {
        initObserver()
    } else {
        currentSrc.value = processedSrc.value
        loadImage()
    }
})

onBeforeUnmount(() => {
    observer?.disconnect()
})
</script>

<template>
  <div
    ref="containerRef"
    :class="classes"
    :style="containerStyle"
  >
    <!-- 加载占位符 -->
    <div v-if="isLoading" :class="ns.e('placeholder')">
      <slot name="placeholder">
        <div :class="ns.e('skeleton')">
          <svg
            :class="ns.e('skeleton-icon')"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      </slot>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="isError" :class="ns.e('error')">
      <slot name="error">
        <svg
          :class="ns.e('error-icon')"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
        <span :class="ns.e('error-text')">加载失败</span>
      </slot>
    </div>

    <!-- 实际图片 -->
    <img
      v-show="!isLoading && !isError"
      ref="imageRef"
      :class="ns.e('inner')"
      :src="currentSrc"
      :alt="alt"
      :draggable="props.draggable"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- 装饰块 (clip 模式) -->
    <span v-if="props.shape === 'clip' && props.showDecor" :class="ns.e('decor')" />
  </div>
</template>
