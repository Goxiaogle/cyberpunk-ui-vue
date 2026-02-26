<script setup lang="ts">
/**
 * CpImagePreview - 赛博朋克风格全屏大图预览
 * 支持缩放、旋转、多图切换、键盘 & 滚轮交互
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { CpLoading } from '@cyberpunk-vue/components/loading'
import { CpButton } from '@cyberpunk-vue/components/button'
import { imagePreviewProps, imagePreviewEmits } from './image-preview'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
    name: `${COMPONENT_PREFIX}ImagePreview`,
})

const props = defineProps(imagePreviewProps)
const emit = defineEmits(imagePreviewEmits)

const ns = useNamespace('image-preview')

// ===== 状态 =====
const visible = ref(false)
const currentIndex = ref(0)
const scale = ref(1)
const rotate = ref(0)
const loading = ref(true)

// 缩放范围
const ZOOM_MIN = 0.2
const ZOOM_MAX = 7
const ZOOM_STEP = 0.2

// ===== 计算属性 =====
const currentUrl = computed(() => {
    if (props.urlList.length === 0) return ''
    return props.urlList[currentIndex.value] || ''
})

const isSingle = computed(() => props.urlList.length <= 1)

const canPrev = computed(() => {
    if (props.infinite) return true
    return currentIndex.value > 0
})

const canNext = computed(() => {
    if (props.infinite) return true
    return currentIndex.value < props.urlList.length - 1
})

const imgTransform = computed(() => {
    return {
        transform: `scale(${scale.value}) rotate(${rotate.value}deg)`,
    }
})

const overlayStyle = computed(() => ({
    zIndex: props.zIndex,
}))

// ===== 操作方法 =====
const resetTransform = () => {
    scale.value = 1
    rotate.value = 0
}

const zoomIn = () => {
    scale.value = Math.min(scale.value + ZOOM_STEP, ZOOM_MAX)
}

const zoomOut = () => {
    scale.value = Math.max(scale.value - ZOOM_STEP, ZOOM_MIN)
}

const rotateLeft = () => {
    rotate.value -= 90
}

const rotateRight = () => {
    rotate.value += 90
}

const prev = () => {
    if (isSingle.value) return
    if (props.infinite) {
        currentIndex.value = (currentIndex.value - 1 + props.urlList.length) % props.urlList.length
    } else if (currentIndex.value > 0) {
        currentIndex.value--
    }
    resetTransform()
    emit('switch', currentIndex.value)
}

const next = () => {
    if (isSingle.value) return
    if (props.infinite) {
        currentIndex.value = (currentIndex.value + 1) % props.urlList.length
    } else if (currentIndex.value < props.urlList.length - 1) {
        currentIndex.value++
    }
    resetTransform()
    emit('switch', currentIndex.value)
}

const close = () => {
    visible.value = false
    emit('update:modelValue', false)
    emit('close')
}

// ===== 图片加载 =====
const handleImageLoad = () => {
    loading.value = false
}

const handleImageError = () => {
    loading.value = false
}

// ===== 下载图片 =====
const downloadImage = async () => {
    if (!currentUrl.value) return
    try {
        // 使用 fetch 获取图片并转换为 Blob 对象，从而绕过直接使用 a.href 的跨域下载限制
        const response = await fetch(currentUrl.value)
        if (!response.ok) throw new Error('Network response was not ok')
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        
        // 尝试提取文件名
        let fileName = currentUrl.value.split('/').pop() || 'image.png'
        if (fileName.includes('?')) fileName = fileName.split('?')[0]
        if (!fileName.includes('.')) fileName += '.png'
        
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
    } catch (error) {
        console.error('Image download failed, falling back to window.open:', error)
        // 回退方案：跨域无法 fetch 时，直接在新窗口打开让用户手动保存
        const a = document.createElement('a')
        a.href = currentUrl.value
        a.download = 'image.png'
        a.target = '_blank'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
}

// ===== 键盘事件 =====
const handleKeydown = (e: KeyboardEvent) => {
    if (!visible.value) return
    switch (e.key) {
        case 'Escape':
            close()
            break
        case 'ArrowLeft':
            prev()
            break
        case 'ArrowRight':
            next()
            break
        case 'ArrowUp':
        case '+':
        case '=':
            e.preventDefault()
            zoomIn()
            break
        case 'ArrowDown':
        case '-':
            e.preventDefault()
            zoomOut()
            break
    }
}

// ===== 滚轮缩放 =====
const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
        zoomIn()
    } else {
        zoomOut()
    }
}

// ===== 遮罩点击 =====
const handleOverlayClick = (e: MouseEvent) => {
    // 仅在点击遮罩本身时关闭（不是子元素）
    if (e.target === e.currentTarget) {
        close()
    }
}

// ===== watch modelValue =====
watch(
    () => props.modelValue,
    (val) => {
        visible.value = val
        if (val) {
            currentIndex.value = props.initialIndex
            resetTransform()
            loading.value = true
            nextTick(() => {
                document.addEventListener('keydown', handleKeydown)
            })
        } else {
            document.removeEventListener('keydown', handleKeydown)
        }
    },
    { immediate: true }
)

// ===== 切换图片时重新 loading =====
watch(currentUrl, () => {
    loading.value = true
})

onMounted(() => {
    if (props.modelValue) {
        document.addEventListener('keydown', handleKeydown)
    }
})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown)
})

// ===== 暴露 =====
defineExpose({
    /** 关闭预览 */
    close,
    /** 上一张 */
    prev,
    /** 下一张 */
    next,
    /** 放大 */
    zoomIn,
    /** 缩小 */
    zoomOut,
    /** 左旋 */
    rotateLeft,
    /** 右旋 */
    rotateRight,
    /** 还原缩放 & 旋转 */
    resetTransform,
})
</script>

<template>
  <Teleport :to="teleportTo" :disabled="!teleportTo">
    <Transition name="cp-image-preview-fade">
      <div
        v-if="visible"
        :class="ns.b()"
        :style="overlayStyle"
        @click="handleOverlayClick"
        @wheel.prevent="handleWheel"
      >
        <!-- 关闭按钮 -->
        <CpButton
          :class="ns.e('close')"
          variant="semi"
          dimmed
          size="lg"
          square
          :type="props.type"
          :color="props.color"
          title="关闭预览 (ESC)"
          @click="close"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </CpButton>

        <!-- 左切换按钮 -->
        <CpButton
          v-if="!isSingle"
          :class="[ns.e('arrow'), ns.bem(undefined, 'arrow', 'left')]"
          variant="ghost"
          dimmed
          size="lg"
          square
          :type="props.type"
          :color="props.color"
          title="上一张 (←)"
          :disabled="!canPrev"
          @click.stop="prev"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </CpButton>

        <!-- 右切换按钮 -->
        <CpButton
          v-if="!isSingle"
          :class="[ns.e('arrow'), ns.bem(undefined, 'arrow', 'right')]"
          variant="ghost"
          dimmed
          size="lg"
          square
          :type="props.type"
          :color="props.color"
          title="下一张 (→)"
          :disabled="!canNext"
          @click.stop="next"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </CpButton>

        <!-- 图片容器 -->
        <div :class="ns.e('canvas')" @click.stop>
          <!-- 加载状态 -->
          <div v-if="loading" :class="ns.e('loading')">
            <CpLoading size="lg" :type="props.type" :color="props.color" />
          </div>

          <!-- 实际图片 -->
          <img
            v-show="!loading"
            :class="ns.e('img')"
            :src="currentUrl"
            :style="imgTransform"
            @load="handleImageLoad"
            @error="handleImageError"
          />
        </div>

        <!-- 底部工具栏 -->
        <div :class="ns.e('toolbar')" @click.stop>
          <!-- 缩小 -->
          <CpButton variant="ghost" dimmed square :type="props.type" :color="props.color" title="缩小 (-)" :disabled="scale <= ZOOM_MIN" @click="zoomOut">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35M8 11h6" />
            </svg>
          </CpButton>
          <!-- 放大 -->
          <CpButton variant="ghost" dimmed square :type="props.type" :color="props.color" title="放大 (+)" :disabled="scale >= ZOOM_MAX" @click="zoomIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </CpButton>
          <!-- 分隔 -->
          <span :class="ns.e('divider')" />
          <!-- 左旋 -->
          <CpButton variant="ghost" dimmed square :type="props.type" :color="props.color" title="向左旋转" @click="rotateLeft">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 4v6h6" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </CpButton>
          <!-- 右旋 -->
          <CpButton variant="ghost" dimmed square :type="props.type" :color="props.color" title="向右旋转" @click="rotateRight">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 4v6h-6" />
              <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
            </svg>
          </CpButton>
          <!-- 分隔 -->
          <span :class="ns.e('divider')" />
          <!-- 还原 -->
          <CpButton variant="ghost" dimmed square :type="props.type" :color="props.color" title="还原缩放与位置" @click="resetTransform">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18M3 9h18" />
            </svg>
          </CpButton>
          <!-- 下载 (可选) -->
          <template v-if="props.download">
            <!-- 分隔 -->
            <span :class="ns.e('divider')" />
            <CpButton variant="ghost" dimmed square :type="props.type" :color="props.color" title="下载图片" @click="downloadImage">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </CpButton>
          </template>
        </div>

        <!-- 图片计数 -->
        <div v-if="!isSingle" :class="ns.e('counter')">
          {{ currentIndex + 1 }} / {{ urlList.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
