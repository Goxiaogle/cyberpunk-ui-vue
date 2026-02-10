<script setup lang="ts">
/**
 * CpPopover - 赛博朋克风格弹出提示层
 * 支持多种弹出位置、触发方式，可作为 Tooltip 或 Popover 使用
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, type CSSProperties } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { popoverProps, popoverEmits } from './popover'

defineOptions({
  name: `${COMPONENT_PREFIX}Popover`,
})

const props = defineProps(popoverProps)
const emit = defineEmits(popoverEmits)

const ns = useNamespace('popover')

// 内部显示状态
const internalVisible = ref(false)

// 实际显示状态，支持 v-model 和内部控制
const visible = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalVisible.value,
  set: (val: boolean) => {
    if (props.modelValue !== undefined) {
      emit('update:modelValue', val)
    } else {
      internalVisible.value = val
    }
    if (val) {
      emit('open')
    } else {
      emit('close')
    }
  },
})

// 触发器和弹层引用
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)

// 弹层位置
const popoverPosition = ref({ top: 0, left: 0 })

// 延时器
let openTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null

// 清除定时器
const clearTimers = () => {
  if (openTimer) {
    clearTimeout(openTimer)
    openTimer = null
  }
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

// 打开弹层
const open = () => {
  if (props.disabled) return
  clearTimers()
  
  if (props.trigger === 'hover' && props.openDelay > 0) {
    openTimer = setTimeout(() => {
      visible.value = true
    }, props.openDelay)
  } else {
    visible.value = true
  }
}

// 关闭弹层
const close = () => {
  clearTimers()
  
  if (props.trigger === 'hover' && props.closeDelay > 0) {
    closeTimer = setTimeout(() => {
      visible.value = false
    }, props.closeDelay)
  } else {
    visible.value = false
  }
}

// 切换弹层
const toggle = () => {
  if (visible.value) {
    close()
  } else {
    open()
  }
}

// 更新弹层位置 (带有简单节流)
let ticking = false
const updatePosition = () => {
  if (!visible.value || !triggerRef.value || !popoverRef.value || ticking) return

  ticking = true
  requestAnimationFrame(() => {
    if (!triggerRef.value || !popoverRef.value) {
      ticking = false
      return
    }

    const triggerRect = triggerRef.value.getBoundingClientRect()
    const offset = props.offset
    // 使用 offsetWidth/Height 测量布局尺寸，不受 transform (scale) 影响
    const popoverWidth = popoverRef.value.offsetWidth
    const popoverHeight = popoverRef.value.offsetHeight

    let top = 0
    let left = 0

    // 主轴位置
    const [mainAxis, align] = props.placement.includes('-')
      ? props.placement.split('-') as [string, string]
      : [props.placement, 'center']

    switch (mainAxis) {
      case 'top':
        top = triggerRect.top - popoverHeight - offset + window.scrollY
        break
      case 'bottom':
        top = triggerRect.bottom + offset + window.scrollY
        break
      case 'left':
        left = triggerRect.left - popoverWidth - offset + window.scrollX
        break
      case 'right':
        left = triggerRect.right + offset + window.scrollX
        break
    }

    // 对齐方式
    if (mainAxis === 'top' || mainAxis === 'bottom') {
      switch (align) {
        case 'start':
          left = triggerRect.left + window.scrollX
          break
        case 'end':
          left = triggerRect.right - popoverWidth + window.scrollX
          break
        default: // center
          left = triggerRect.left + (triggerRect.width - popoverWidth) / 2 + window.scrollX
      }
    } else {
      switch (align) {
        case 'start':
          top = triggerRect.top + window.scrollY
          break
        case 'end':
          top = triggerRect.bottom - popoverHeight + window.scrollY
          break
        default: // center
          top = triggerRect.top + (triggerRect.height - popoverHeight) / 2 + window.scrollY
      }
    }

    popoverPosition.value = { top, left }
    ticking = false
  })
}

// 弹层样式
const popoverStyle = computed<CSSProperties>(() => {
  const width = typeof props.width === 'number' ? `${props.width}px` : props.width
  const maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  
  return {
    top: `${popoverPosition.value.top}px`,
    left: `${popoverPosition.value.left}px`,
    width: width === 'auto' ? undefined : width,
    maxWidth,
  }
})

// 弹层类名
const popoverClasses = computed(() => [
  ns.e('content'),
  `${ns.e('content')}--${props.placement.split('-')[0]}`,
  ns.is('tooltip', props.tooltip),
  ns.is('has-title', !!props.title && !props.tooltip),
])

// 箭头位置类名
const arrowClasses = computed(() => [
  ns.e('arrow'),
  `${ns.e('arrow')}--${props.placement.split('-')[0]}`,
])

// 触发器事件处理
const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    open()
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    close()
  }
}

const handleClick = () => {
  if (props.trigger === 'click') {
    toggle()
  }
}

const handleFocus = () => {
  if (props.trigger === 'focus') {
    open()
  }
}

const handleBlur = () => {
  if (props.trigger === 'focus') {
    close()
  }
}

// 弹层内鼠标事件 (hover 模式保持显示)
const handlePopoverMouseEnter = () => {
  if (props.trigger === 'hover') {
    clearTimers()
  }
}

const handlePopoverMouseLeave = () => {
  if (props.trigger === 'hover') {
    close()
  }
}

// 点击外部关闭
const handleClickOutside = (event: MouseEvent) => {
  if (!props.closeOnClickOutside) return
  if (props.trigger !== 'click' && props.trigger !== 'manual') return
  if (!visible.value) return

  const target = event.target as Node
  const isClickInside = 
    triggerRef.value?.contains(target) || 
    popoverRef.value?.contains(target)

  if (!isClickInside) {
    close()
  }
}

// Escape 键关闭
const handleKeydown = (event: KeyboardEvent) => {
  if (props.closeOnEscape && event.key === 'Escape' && visible.value) {
    close()
  }
}

// 监听显示状态，更新位置
watch(visible, async (val) => {
  if (val) {
    await nextTick()
    updatePosition()
  }
})

// 暴露方法
defineExpose({
  /** @description 打开弹层 */
  open,
  /** @description 关闭弹层 */
  close,
  /** @description 切换弹层 */
  toggle,
  /** @description 更新位置 */
  updatePosition,
})

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  // 使用捕获阶段监听滚动，确保能监听到所有滚动事件
  window.addEventListener('resize', updatePosition)
  window.addEventListener('scroll', updatePosition, true)
})

onBeforeUnmount(() => {
  clearTimers()
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
})
</script>

<template>
  <div :class="ns.b()">
    <!-- 触发器 -->
    <div
      ref="triggerRef"
      :class="ns.e('trigger')"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <slot />
    </div>

    <!-- 弹层 -->
    <Teleport :to="teleportTo">
      <Transition :name="ns.namespace + '-popover-fade'">
        <div
          v-if="visible"
          ref="popoverRef"
          :class="popoverClasses"
          :style="popoverStyle"
          @mouseenter="handlePopoverMouseEnter"
          @mouseleave="handlePopoverMouseLeave"
        >
          <!-- 箭头 -->
          <div v-if="showArrow" :class="arrowClasses" />
          
          <!-- 标题 (非 Tooltip 模式) -->
          <div v-if="title && !tooltip" :class="ns.e('title')">
            {{ title }}
          </div>
          
          <!-- 内容 -->
          <div :class="ns.e('body')">
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
