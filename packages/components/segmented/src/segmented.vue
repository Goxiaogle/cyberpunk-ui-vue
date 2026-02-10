<script setup lang="ts">
/**
 * CpSegmented - 赛博朋克风格分段选择器
 * 一体化互斥选项控件条，选中项带滑块高亮效果
 */
import { computed, ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { segmentedProps, segmentedEmits, type SegmentedOption, type SegmentedValueType } from './segmented'

defineOptions({
  name: `${COMPONENT_PREFIX}Segmented`,
})

const props = defineProps(segmentedProps)
const emit = defineEmits(segmentedEmits)

const ns = useNamespace('segmented')

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
  const trackEl = trackRef.value

  const trackRect = trackEl.getBoundingClientRect()
  const itemRect = activeEl.getBoundingClientRect()

  indicatorStyle.value = {
    width: `${itemRect.width}px`,
    transform: `translateX(calc(${itemRect.left - trackRect.left}px + var(--cp-segmented-indicator-offset, -2px)))`,
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
  nextTick(updateIndicator)

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
  ns.is('disabled', props.disabled),
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

// ===== 选项点击 =====
const handleItemClick = (option: SegmentedOption) => {
  if (props.disabled || option.disabled) return
  if (option.value === props.modelValue) return

  emit('update:modelValue', option.value)
  emit('change', option.value)
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
      :disabled="disabled || option.disabled"
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
