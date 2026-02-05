<script setup lang="ts">
/**
 * CpSlider - 赛博朋克风格滑块
 * 支持单值/范围模式、刻度标记、垂直模式
 */
import { computed, ref, onBeforeUnmount } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { sliderProps, sliderEmits } from './slider'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Slider`,
})

const props = defineProps(sliderProps)
const emit = defineEmits(sliderEmits)

const ns = useNamespace('slider')

// Refs
const sliderRef = ref<HTMLDivElement>()
const isDragging = ref(false)
const activeThumb = ref<'start' | 'end' | null>(null)
const showStartTooltip = ref(false)
const showEndTooltip = ref(false)

// 内部拖动值 - 用于即时视觉反馈
const dragStartValue = ref<number | null>(null)
const dragEndValue = ref<number | null>(null)

// 计算属性
const classes = computed(() => [
  ns.b(),
  ns.m(props.size),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', props.disabled),
  ns.is('vertical', props.vertical),
  ns.is('range', props.range),
  ns.is('dragging', isDragging.value),
  ns.is('custom-color', !!props.color),
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-slider-custom-color'] = props.color
    style['--cp-slider-custom-color-light'] = `${props.color}66`
  }
  if (props.vertical && props.height) {
    style['height'] = props.height
  }
  return style
})

// 获取当前值（规范化为数组）
const valueRange = computed<[number, number]>(() => {
  if (props.range && Array.isArray(props.modelValue)) {
    return props.modelValue
  }
  return [props.min, typeof props.modelValue === 'number' ? props.modelValue : props.min]
})

// 显示值 - 拖动时使用内部值，否则使用 prop 值
const displayRange = computed<[number, number]>(() => {
  if (isDragging.value) {
    const start = dragStartValue.value ?? valueRange.value[0]
    const end = dragEndValue.value ?? valueRange.value[1]
    return [start, end]
  }
  return valueRange.value
})

// 计算百分比位置 - 使用 displayRange
const startPercent = computed(() => {
  const range = props.max - props.min
  if (range === 0) return 0
  return ((displayRange.value[0] - props.min) / range) * 100
})

const endPercent = computed(() => {
  const range = props.max - props.min
  if (range === 0) return 0
  return ((displayRange.value[1] - props.min) / range) * 100
})

// 轨道填充样式
const barStyle = computed(() => {
  if (props.vertical) {
    return props.range
      ? { bottom: `${startPercent.value}%`, height: `${endPercent.value - startPercent.value}%` }
      : { bottom: '0%', height: `${endPercent.value}%` }
  }
  return props.range
    ? { left: `${startPercent.value}%`, width: `${endPercent.value - startPercent.value}%` }
    : { left: '0%', width: `${endPercent.value}%` }
})

// 滑块位置
const startThumbStyle = computed(() => {
  return props.vertical
    ? { bottom: `${startPercent.value}%` }
    : { left: `${startPercent.value}%` }
})

const endThumbStyle = computed(() => {
  return props.vertical
    ? { bottom: `${endPercent.value}%` }
    : { left: `${endPercent.value}%` }
})

// 刻度点
const stops = computed(() => {
  if (!props.showStops || props.step <= 0) return []
  const stopCount = Math.floor((props.max - props.min) / props.step)
  const stops: number[] = []
  for (let i = 1; i < stopCount; i++) {
    const value = props.min + i * props.step
    const percent = ((value - props.min) / (props.max - props.min)) * 100
    stops.push(percent)
  }
  return stops
})

// 刻度标记
const markList = computed(() => {
  if (!props.marks) return []
  return Object.entries(props.marks).map(([key, value]) => {
    const numKey = Number(key)
    const percent = ((numKey - props.min) / (props.max - props.min)) * 100
    const label = typeof value === 'string' ? value : value.label || ''
    const style = typeof value === 'object' ? value.style : undefined
    return { value: numKey, percent, label, style }
  })
})

// 格式化 tooltip 文本
const formatValue = (value: number) => {
  if (props.formatTooltip) {
    return props.formatTooltip(value)
  }
  return String(value)
}

// 计算点击位置对应的值
const getValueFromPosition = (clientX: number, clientY: number) => {
  if (!sliderRef.value) return props.min

  const rect = sliderRef.value.getBoundingClientRect()
  let percent: number

  if (props.vertical) {
    percent = (rect.bottom - clientY) / rect.height
  } else {
    percent = (clientX - rect.left) / rect.width
  }

  percent = Math.max(0, Math.min(1, percent))
  let value = props.min + percent * (props.max - props.min)

  // 应用步长
  if (props.step > 0) {
    value = Math.round(value / props.step) * props.step
  }

  // 限制范围
  value = Math.max(props.min, Math.min(props.max, value))

  return value
}

// 更新值
const updateValue = (newValue: number, isEnd = false) => {
  if (props.disabled) return

  let result: number | [number, number]

  if (props.range) {
    const [start, end] = valueRange.value
    if (activeThumb.value === 'start') {
      result = [Math.min(newValue, end), end]
    } else {
      result = [start, Math.max(newValue, start)]
    }
  } else {
    result = newValue
  }

  emit('update:modelValue', result)
  emit('input', result)

  if (isEnd) {
    emit('change', result)
  }
}

// 确定拖动哪个滑块
const determineActiveThumb = (value: number) => {
  if (!props.range) {
    activeThumb.value = 'end'
    return
  }

  const [start, end] = valueRange.value
  const distToStart = Math.abs(value - start)
  const distToEnd = Math.abs(value - end)

  activeThumb.value = distToStart <= distToEnd ? 'start' : 'end'
}

// 事件处理
const handleTrackClick = (event: MouseEvent) => {
  if (props.disabled) return
  
  const value = getValueFromPosition(event.clientX, event.clientY)
  determineActiveThumb(value)
  updateValue(value, true)
}

const handleThumbMouseDown = (event: MouseEvent, thumb: 'start' | 'end') => {
  if (props.disabled) return
  
  event.preventDefault()
  event.stopPropagation()

  activeThumb.value = thumb
  isDragging.value = true
  
  // 初始化内部拖动值
  dragStartValue.value = valueRange.value[0]
  dragEndValue.value = valueRange.value[1]
  
  if (thumb === 'start') {
    showStartTooltip.value = true
  } else {
    showEndTooltip.value = true
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value || props.disabled) return

  const value = getValueFromPosition(event.clientX, event.clientY)
  
  // 立即更新内部拖动值 - 实现即时视觉反馈
  if (props.range) {
    if (activeThumb.value === 'start') {
      dragStartValue.value = Math.min(value, dragEndValue.value ?? valueRange.value[1])
    } else {
      dragEndValue.value = Math.max(value, dragStartValue.value ?? valueRange.value[0])
    }
  } else {
    dragEndValue.value = value
  }
  
  // 同时 emit 更新（可能有延迟，但视觉已经是即时的）
  updateValue(value)
}

const handleMouseUp = () => {
  if (isDragging.value) {
    // 使用当前拖动值作为最终值
    const finalStart = dragStartValue.value ?? valueRange.value[0]
    const finalEnd = dragEndValue.value ?? valueRange.value[1]
    
    // 计算最终结果
    const result = props.range ? [finalStart, finalEnd] as [number, number] : finalEnd
    
    // 先触发 update:modelValue 确保父组件更新
    emit('update:modelValue', result)
    emit('input', result)
    emit('change', result)
    
    // 然后清理状态
    isDragging.value = false
    activeThumb.value = null // 重置 activeThumb 移除 is-active 类
    showStartTooltip.value = false
    showEndTooltip.value = false
    dragStartValue.value = null
    dragEndValue.value = null
  }

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

// 键盘支持
const handleKeyDown = (event: KeyboardEvent, thumb: 'start' | 'end') => {
  if (props.disabled) return

  let delta = 0
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      delta = -props.step
      break
    case 'ArrowRight':
    case 'ArrowUp':
      delta = props.step
      break
    case 'Home':
      delta = props.min - (thumb === 'start' ? valueRange.value[0] : valueRange.value[1])
      break
    case 'End':
      delta = props.max - (thumb === 'start' ? valueRange.value[0] : valueRange.value[1])
      break
    default:
      return
  }

  event.preventDefault()
  activeThumb.value = thumb
  const currentValue = thumb === 'start' ? valueRange.value[0] : valueRange.value[1]
  updateValue(currentValue + delta, true)
}

// Tooltip 显示控制
const handleThumbMouseEnter = (thumb: 'start' | 'end') => {
  if (!props.showTooltip || props.disabled) return
  if (thumb === 'start') {
    showStartTooltip.value = true
  } else {
    showEndTooltip.value = true
  }
}

const handleThumbMouseLeave = (thumb: 'start' | 'end') => {
  if (isDragging.value) return
  if (thumb === 'start') {
    showStartTooltip.value = false
  } else {
    showEndTooltip.value = false
  }
}

// 清理
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})

// 暴露方法
defineExpose({
  sliderRef,
})
</script>

<template>
  <div ref="sliderRef" :class="classes" :style="customStyle">
    <!-- 轨道 -->
    <div :class="ns.e('runway')" @click="handleTrackClick">
      <!-- 填充条 -->
      <div :class="ns.e('bar')" :style="barStyle" />

      <!-- 刻度点 -->
      <div
        v-for="(stop, index) in stops"
        :key="index"
        :class="ns.e('stop')"
        :style="vertical ? { bottom: `${stop}%` } : { left: `${stop}%` }"
      />
    </div>

    <!-- 刻度标记 -->
    <div v-if="marks" :class="ns.e('marks')">
      <div
        v-for="mark in markList"
        :key="mark.value"
        :class="ns.e('mark')"
        :style="[
          vertical ? { bottom: `${mark.percent}%` } : { left: `${mark.percent}%` },
          mark.style,
        ]"
      >
        <span :class="ns.e('mark-text')">{{ mark.label }}</span>
      </div>
    </div>

    <!-- 起始滑块 (范围模式) -->
    <div
      v-if="range"
      :class="[ns.e('thumb'), ns.is('active', activeThumb === 'start')]"
      :style="startThumbStyle"
      tabindex="0"
      @mousedown="handleThumbMouseDown($event, 'start')"
      @mouseenter="handleThumbMouseEnter('start')"
      @mouseleave="handleThumbMouseLeave('start')"
      @keydown="handleKeyDown($event, 'start')"
    >
      <div v-if="showTooltip && showStartTooltip" :class="ns.e('tooltip')">
        {{ formatValue(displayRange[0]) }}
      </div>
    </div>

    <!-- 结束滑块 -->
    <div
      :class="[ns.e('thumb'), ns.is('active', activeThumb === 'end')]"
      :style="endThumbStyle"
      tabindex="0"
      @mousedown="handleThumbMouseDown($event, 'end')"
      @mouseenter="handleThumbMouseEnter('end')"
      @mouseleave="handleThumbMouseLeave('end')"
      @keydown="handleKeyDown($event, 'end')"
    >
      <div v-if="showTooltip && showEndTooltip" :class="ns.e('tooltip')">
        {{ formatValue(displayRange[1]) }}
      </div>
    </div>
  </div>
</template>
