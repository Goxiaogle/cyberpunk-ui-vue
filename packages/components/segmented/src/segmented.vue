<script setup lang="ts">
/**
 * CpSegmented - 赛博朋克风格分段选择器
 * 一体化互斥选项控件条，选中项带滑块高亮效果
 */
import { computed, ref, inject, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { segmentedProps, segmentedEmits, type SegmentedOption, type SegmentedValueType } from './segmented'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Segmented`,
})

const props = defineProps(segmentedProps)
const emit = defineEmits(segmentedEmits)

const ns = useNamespace('segmented')
const formContext = inject(formContextKey, undefined)
const isDisabled = computed(() => props.disabled || formContext?.disabled.value || false)

// 尺寸映射
const segmentedSizeMap = { sm: 28, md: 36, lg: 44 }

// ===== 标准化选项 =====
const normalizedOptions = computed<SegmentedOption[]>(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { label: String(opt), value: opt }
    }
    return opt
  })
})

// ===== 滑块位置计算 =====
const trackRef = ref<HTMLElement>()
const itemRefs = ref<HTMLElement[]>([])
const indicatorStyle = ref<Record<string, string>>({})

const setItemRef = (el: any, index: number) => {
  if (el) {
    itemRefs.value[index] = el as HTMLElement
  }
}

const updateIndicator = () => {
  const activeIndex = normalizedOptions.value.findIndex(
    (opt) => opt.value === props.modelValue
  )
  if (activeIndex < 0 || !itemRefs.value[activeIndex] || !trackRef.value) {
    indicatorStyle.value = { opacity: '0' }
    return
  }

  const activeEl = itemRefs.value[activeIndex]

  // 使用 offsetLeft / offsetWidth 代替 getBoundingClientRect()
  // 因为 getBoundingClientRect 会受到祖先元素 CSS transform 的影响
  // （如 Dialog 入场动画的 scale(0.92)），导致计算出的宽度和位置不正确
  indicatorStyle.value = {
    width: `${activeEl.offsetWidth}px`,
    transform: `translateX(calc(${activeEl.offsetLeft}px + var(--cp-segmented-indicator-offset, 0px)))`,
    opacity: '1',
  }
}

// 监听值变化更新滑块
watch(
  () => props.modelValue,
  () => nextTick(updateIndicator),
)

// 监听 options 变化
watch(
  () => props.options,
  () => nextTick(updateIndicator),
  { deep: true },
)

// ResizeObserver 监听尺寸变化
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  // requestAnimationFrame 确保浏览器已完成布局计算
  // （nextTick 仅保证 Vue DOM 已刷新，不保证浏览器布局完成）
  requestAnimationFrame(updateIndicator)

  // 自定义字体加载完成后重新计算（字体影响文字宽度和元素偏移量）
  document.fonts.ready.then(updateIndicator)

  if (trackRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateIndicator()
    })
    resizeObserver.observe(trackRef.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

// ===== 类名 =====
const classes = computed(() => [
  ns.b(),
  ns.m(props.variant),
  ns.m(props.type),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', isDisabled.value),
  ns.is('block', props.block),
  ns.is('custom-color', !!props.color),
  ns.is('custom-size', !isPresetSize(props.size)),
])

// ===== 自定义样式 =====
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.color) {
    style['--cp-segmented-color'] = props.color
    style['--cp-segmented-color-light'] = `${props.color}25`
  }

  if (!isPresetSize(props.size)) {
    style['--cp-segmented-height'] = normalizeSize(props.size, segmentedSizeMap)
  }

  return style
})

// ===== 清空 =====
const clearValue = () => {
  if (isDisabled.value || props.modelValue === undefined) return
  emit('update:modelValue', undefined)
  emit('change', undefined)
  emit('clear')
}

// ===== 选项点击 =====
const handleItemClick = (option: SegmentedOption) => {
  if (isDisabled.value || option.disabled) return
  if (option.value === props.modelValue) {
    // 再次点击已选项：clearable 时清空，否则忽略
    if (props.clearable) clearValue()
    return
  }

  emit('update:modelValue', option.value)
  emit('change', option.value)
}

// ===== 键盘：Esc 清空 =====
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key !== 'Escape') return
  if (!props.clearable || isDisabled.value) return
  if (props.modelValue === undefined) return
  e.preventDefault()
  clearValue()
}

// ===== 选项类名 =====
const getItemClasses = (option: SegmentedOption) => [
  ns.e('item'),
  ns.is('active', option.value === props.modelValue),
  ns.is('disabled', !!option.disabled),
]

defineExpose({
  /** @description 更新滑块位置 */
  updateIndicator,
})
</script>

<template>
  <div
    ref="trackRef"
    :class="classes"
    :style="customStyle"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <!-- 滑块指示器 -->
    <div
      :class="ns.e('indicator')"
      :style="indicatorStyle"
    />

    <!-- 选项列表 -->
    <button
      v-for="(option, index) in normalizedOptions"
      :key="option.value"
      :ref="(el) => setItemRef(el, index)"
      :class="getItemClasses(option)"
      :disabled="isDisabled || option.disabled"
      type="button"
      role="radio"
      :aria-checked="option.value === modelValue"
      @click="handleItemClick(option)"
    >
      <!-- 图标 -->
      <component
        v-if="option.icon"
        :is="option.icon"
        :class="ns.e('item-icon')"
      />
      <!-- 文本 -->
      <span :class="ns.e('item-label')">{{ option.label }}</span>
    </button>
  </div>
</template>
