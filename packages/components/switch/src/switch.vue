<script setup lang="ts">
/**
 * CpSwitch - 赛博朋克风格开关
 * 支持多种尺寸、异步切换、内嵌文字
 * 支持自定义颜色、加载状态、长文本自适应 (fitText)
 */
import { computed, ref } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { switchProps, switchEmits } from './switch'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Switch`,
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const ns = useNamespace('switch')

// 内部状态
const inputRef = ref<HTMLInputElement>()
const isSwitching = ref(false)

// 是否实际禁用
const actualDisabled = computed(() => {
  return props.disabled || props.loading || isSwitching.value
})

// 计算类名
const classes = computed(() => [
  ns.b(),
  ns.m(props.size),
  ns.is('checked', props.modelValue),
  ns.is('disabled', props.disabled),
  ns.is('loading', props.loading),
  ns.is('fit-text', props.fitText),
])

// 类型到颜色变量的映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// 自定义颜色和宽度样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  // color 属性优先，否则使用 type 对应的颜色
  if (props.color) {
    style['--cp-switch-active-color'] = props.color
    style['--cp-switch-active-color-light'] = `${props.color}40`
  } else if (props.type && typeColorMap[props.type]) {
    style['--cp-switch-active-color'] = typeColorMap[props.type]
    // 使用对应的 light 变量
    style['--cp-switch-active-color-light'] = `var(--cp-color-${props.type}-light)`
  }
  
  if (props.inactiveColor) {
    style['--cp-switch-inactive-color'] = props.inactiveColor
  }
  
  if (props.width) {
    style['width'] = typeof props.width === 'string' ? props.width : `${props.width}px`
  }
  
  return style
})

// 切换处理
const handleChange = async () => {
  if (actualDisabled.value) return

  const newValue = !props.modelValue

  // 如果有 beforeChange 钩子，先执行
  if (props.beforeChange) {
    isSwitching.value = true
    try {
      const result = await props.beforeChange()
      if (result === false) {
        isSwitching.value = false
        return
      }
    } catch {
      isSwitching.value = false
      return
    }
    isSwitching.value = false
  }

  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 暴露方法
defineExpose({
  inputRef,
})
</script>

<template>
  <div
    :class="classes"
    :style="customStyle"
    role="switch"
    :aria-checked="props.modelValue"
    :aria-disabled="actualDisabled"
    @click="handleChange"
  >
    <!-- 隐藏的原生 input 用于表单 -->
    <input
      ref="inputRef"
      type="checkbox"
      :class="ns.e('input')"
      :name="props.name"
      :checked="props.modelValue"
      :disabled="actualDisabled"
      @change.stop
    />
    
    <!-- 轨道 -->
    <div :class="ns.e('track')">
      <!-- 占位层 (用于 fitText 模式下撑开高度和宽度) -->
      <div v-if="props.fitText" :class="ns.e('wrapper')">
        <span class="wrapper-text active">{{ props.activeText }}</span>
        <span class="wrapper-text inactive">{{ props.inactiveText }}</span>
      </div>
      
      <!-- 未选中文字 (显示在右侧) -->
      <span v-if="props.inactiveText" :class="ns.e('inactive-text')">
        <span class="text-inner">{{ props.inactiveText }}</span>
      </span>
      
      <!-- 滑块 -->
      <div :class="ns.e('thumb')">
        <!-- 专属能量核心 Loading -->
        <div v-if="props.loading" class="cp-switch__loading-core">
          <svg viewBox="0 0 24 24" class="loading-svg">
            <!-- 外环扫描 -->
            <path 
              class="outer-ring" 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-dasharray="12 12"
              opacity="0.8"
            />
            <!-- 内核脉冲 -->
            <circle class="inner-core" cx="12" cy="12" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>
      
      <!-- 选中文字 (显示在左侧) -->
      <span v-if="props.activeText" :class="ns.e('active-text')">
        <span class="text-inner">{{ props.activeText }}</span>
      </span>
    </div>
  </div>
</template>
