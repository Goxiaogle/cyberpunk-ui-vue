<script setup lang="ts">
/**
 * CpPopover - 赛博朋克风格弹出提示层
 * 支持多种弹出位置、触发方式，可作为 Tooltip 或 Popover 使用
 */
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount, nextTick, useSlots, type CSSProperties } from 'vue'
import type { PopoverTrigger } from './popover'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { popoverProps, popoverEmits } from './popover'

defineOptions({
  name: `${COMPONENT_PREFIX}Popover`,
})

const props = defineProps(popoverProps)
const emit = defineEmits(popoverEmits)

const ns = useNamespace('popover')
const slots = useSlots()

// ── 多触发模式状态机 ──────────────────────────────────

// 标准化 trigger prop 为 Set
const triggerModes = computed<Set<PopoverTrigger>>(() => {
  const t = props.trigger
  if (Array.isArray(t)) return new Set(t)
  return new Set([t])
})

// 当前激活的触发模式集合，popover 在集合非空时保持显示
const activeTriggers = reactive(new Set<PopoverTrigger>())

// hover 模式的延时器
let hoverOpenTimer: ReturnType<typeof setTimeout> | null = null
let hoverCloseTimer: ReturnType<typeof setTimeout> | null = null

const clearHoverTimers = () => {
  if (hoverOpenTimer) { clearTimeout(hoverOpenTimer); hoverOpenTimer = null }
  if (hoverCloseTimer) { clearTimeout(hoverCloseTimer); hoverCloseTimer = null }
}

/**
 * 激活一个触发模式
 */
const activate = (mode: PopoverTrigger) => {
  if (props.disabled) return
  if (mode === 'hover') {
    clearHoverTimers()
    if (props.openDelay > 0) {
      hoverOpenTimer = setTimeout(() => activeTriggers.add(mode), props.openDelay)
    } else {
      activeTriggers.add(mode)
    }
  } else {
    activeTriggers.add(mode)
  }
}

/**
 * 停用一个触发模式
 */
const deactivate = (mode: PopoverTrigger) => {
  if (mode === 'hover') {
    clearHoverTimers()
    if (props.closeDelay > 0) {
      hoverCloseTimer = setTimeout(() => activeTriggers.delete(mode), props.closeDelay)
    } else {
      activeTriggers.delete(mode)
    }
  } else {
    activeTriggers.delete(mode)
  }
}

// 实际显示状态，从 activeTriggers + v-model 派生
const visible = computed({
  get: () => {
    if (props.modelValue !== undefined) return props.modelValue
    return activeTriggers.size > 0
  },
  set: (val: boolean) => {
    if (props.modelValue !== undefined) {
      emit('update:modelValue', val)
    }
    // 强制开/关时清空或标记 manual
    if (val) {
      activeTriggers.add('manual')
    } else {
      activeTriggers.clear()
      clearHoverTimers()
    }
  },
})

// 发送事件
watch(() => activeTriggers.size > 0, (open) => {
  if (props.modelValue !== undefined) return // v-model 场景由外部控制
  if (open) emit('open')
  else emit('close')
})

// 触发器和弹层引用
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)

// 弹层位置
const popoverPosition = ref({ top: 0, left: 0 })

// 实际弹出方向（经 flip 后可能与 props.placement 不同）
const actualPlacement = ref(props.placement)

// 视口边界间距 (px)
const VIEWPORT_PADDING = 8

// ── 公开方法 ──────────────────────────────────────────

/** 强制打开弹层（激活 manual 模式） */
const open = () => { activate('manual') }

/** 强制关闭弹层（清空所有激活模式） */
const close = () => { visible.value = false }

/** 切换弹层 */
const toggle = () => {
  if (visible.value) close()
  else open()
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
    // 动态调整 offset: 如果显示箭头且不开翻转，增加 4px 间距 (8+4=12)，否则保持默认 8px
    const dynamicOffset = (props.showArrow && !props.flipArrow && props.offset === 8) 
      ? 12 
      : props.offset

    // 使用 offsetWidth/Height 测量布局尺寸，不受 transform (scale) 影响
    const popoverWidth = popoverRef.value.offsetWidth
    const popoverHeight = popoverRef.value.offsetHeight

    // 解析主轴和对齐
    const [preferredAxis, align] = props.placement.includes('-')
      ? props.placement.split('-') as [string, string]
      : [props.placement, 'center']

    let mainAxis = preferredAxis

    // ===== Flip 退避 =====
    if (props.fallback === 'flip') {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      if (mainAxis === 'top' || mainAxis === 'bottom') {
        const spaceAbove = triggerRect.top - dynamicOffset - VIEWPORT_PADDING
        const spaceBelow = viewportHeight - triggerRect.bottom - dynamicOffset - VIEWPORT_PADDING

        if (mainAxis === 'top' && spaceAbove < popoverHeight && spaceBelow > spaceAbove) {
          mainAxis = 'bottom'
        } else if (mainAxis === 'bottom' && spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
          mainAxis = 'top'
        }
      } else {
        const spaceLeft = triggerRect.left - dynamicOffset - VIEWPORT_PADDING
        const spaceRight = viewportWidth - triggerRect.right - dynamicOffset - VIEWPORT_PADDING

        if (mainAxis === 'left' && spaceLeft < popoverWidth && spaceRight > spaceLeft) {
          mainAxis = 'right'
        } else if (mainAxis === 'right' && spaceRight < popoverWidth && spaceLeft > spaceRight) {
          mainAxis = 'left'
        }
      }
    }

    // 更新实际 placement
    actualPlacement.value = (align !== 'center' ? `${mainAxis}-${align}` : mainAxis) as typeof props.placement

    // ===== 计算位置 =====
    let top = 0
    let left = 0

    switch (mainAxis) {
      case 'top':
        top = triggerRect.top - popoverHeight - dynamicOffset + window.scrollY
        break
      case 'bottom':
        top = triggerRect.bottom + dynamicOffset + window.scrollY
        break
      case 'left':
        left = triggerRect.left - popoverWidth - dynamicOffset + window.scrollX
        break
      case 'right':
        left = triggerRect.right + dynamicOffset + window.scrollX
        break
    }

    // 对齐方式
    if (mainAxis === 'top' || mainAxis === 'bottom') {
      switch (align) {
        case 'start':
          left = triggerRect.right - popoverWidth + window.scrollX
          break
        case 'end':
          left = triggerRect.left + window.scrollX
          break
        default: // center
          left = triggerRect.left + (triggerRect.width - popoverWidth) / 2 + window.scrollX
      }
    } else if (mainAxis === 'left' || mainAxis === 'right') {
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

    // ===== Shift 退避 =====
    if (props.fallback === 'shift') {
      const minLeft = window.scrollX + VIEWPORT_PADDING
      const maxLeft = window.scrollX + window.innerWidth - popoverWidth - VIEWPORT_PADDING
      const minTop = window.scrollY + VIEWPORT_PADDING
      const maxTop = window.scrollY + window.innerHeight - popoverHeight - VIEWPORT_PADDING

      left = Math.max(minLeft, Math.min(left, maxLeft))
      top = Math.max(minTop, Math.min(top, maxTop))
    }

    popoverPosition.value = { top, left }
    ticking = false
  })
}

// ===== 颜色变量 =====
const realColor = computed(() => {
  if (props.color) return props.color
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type})`
  return null
})

const realColorLight = computed(() => {
  if (props.color) return `color-mix(in srgb, ${props.color} 30%, transparent)`
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type}-light)`
  return null
})

// 弹层样式
const popoverStyle = computed<CSSProperties>(() => {
  const width = typeof props.width === 'number' ? `${props.width}px` : props.width
  const maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  const vars: Record<string, string> = {}
  if (realColor.value) vars['--cp-popover-color'] = realColor.value
  if (realColorLight.value) vars['--cp-popover-color-light'] = realColorLight.value

  return {
    ...vars,
    top: `${popoverPosition.value.top}px`,
    left: `${popoverPosition.value.left}px`,
    width: width === 'auto' ? undefined : width,
    maxWidth,
  }
})

// 弹层类名
const popoverClasses = computed(() => [
  ns.e('content'),
  `${ns.e('content')}--${actualPlacement.value.split('-')[0]}`,
  `${ns.e('content')}--${props.variant}`,
  `${ns.e('content')}--shape-${props.shape}`,
  props.type !== 'default' ? `${ns.e('content')}--${props.type}` : '',
  ns.is('tooltip', props.tooltip),
  ns.is('has-title', !!props.title && !props.tooltip),
  ns.is('has-arrow', props.showArrow),
  ns.is('flipped', props.flipArrow),
  ns.is('no-transition', props.transition === 'none'),
])

// 计算过渡动画名称
const reverseDirection: Record<string, string> = {
  top: 'bottom', bottom: 'top', left: 'right', right: 'left',
}

const transitionName = computed(() => {
  if (props.transition === 'none') return ''
  const direction = actualPlacement.value.split('-')[0] // top | bottom | left | right
  if (props.transition === 'slide') {
    return `${ns.namespace}-popover-slide-${direction}`
  }
  if (props.transition === 'slide-reverse') {
    return `${ns.namespace}-popover-slide-${reverseDirection[direction] ?? direction}`
  }
  // fade (default)
  return `${ns.namespace}-popover-fade`
})

// 箭头位置类名
const arrowClasses = computed(() => [
  ns.e('arrow'),
  `${ns.e('arrow')}--${actualPlacement.value.split('-')[0]}`,
])

// ── 触发器事件处理 ──────────────────────────────────

const handleMouseEnter = () => {
  if (triggerModes.value.has('hover')) activate('hover')
}

const handleMouseLeave = () => {
  if (triggerModes.value.has('hover')) deactivate('hover')
}

const handleClick = () => {
  if (!triggerModes.value.has('click')) return
  if (activeTriggers.has('click')) {
    deactivate('click')
  } else {
    activate('click')
  }
}

const handleFocus = () => {
  if (triggerModes.value.has('focus')) activate('focus')
}

const handleBlur = () => {
  if (triggerModes.value.has('focus')) deactivate('focus')
}

// 弹层内鼠标事件 (hover 模式保持显示)
const handlePopoverMouseEnter = () => {
  if (triggerModes.value.has('hover')) clearHoverTimers()
}

const handlePopoverMouseLeave = () => {
  if (triggerModes.value.has('hover')) deactivate('hover')
}

// 点击外部关闭（仅移除 click 激活）
const handleClickOutside = (event: MouseEvent) => {
  if (!props.closeOnClickOutside) return
  if (!visible.value) return
  // 仅当 click 或 manual 激活时生效
  if (!activeTriggers.has('click') && !triggerModes.value.has('manual')) return

  const target = event.target as Node
  const isClickInside =
    triggerRef.value?.contains(target) ||
    popoverRef.value?.contains(target)

  if (!isClickInside) {
    deactivate('click')
    deactivate('manual')
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
    // 第二帧：popover 已渲染，使用实际尺寸修正位置
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
  clearHoverTimers()
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
      <Transition :name="transitionName">
        <div
          v-if="visible"
          ref="popoverRef"
          :class="popoverClasses"
          :style="popoverStyle"
          @mouseenter="handlePopoverMouseEnter"
          @mouseleave="handlePopoverMouseLeave"
        >
          <!-- 背景层 (新增) -->
          <div :class="ns.e('background')" />

          <!-- 箭头 -->
          <div v-if="showArrow" :class="arrowClasses" />
          
          <!-- 自定义弹层内容 (完全替换默认结构) -->
          <template v-if="slots.popover">
            <slot name="popover" />
          </template>
          <template v-else>
            <!-- 标题 (非 Tooltip 模式) -->
            <div v-if="title && !tooltip" :class="ns.e('title')">
              {{ title }}
            </div>
            
            <!-- 内容 -->
            <div :class="ns.e('body')">
              <slot name="content">{{ content }}</slot>
            </div>
          </template>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
