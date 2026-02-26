<script setup lang="ts">
/**
 * CpEmpty - 赛博朋克风格空状态组件
 * 撑满父容器，水平+垂直居中展示
 * 图标 + 标题 + 描述 + 底部操作
 */
import { computed, useSlots } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { emptyProps } from './empty'
import { CpIcon } from '@cyberpunk-vue/components/icon'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}Empty`,
})

const props = defineProps(emptyProps)
const slots = useSlots()
const ns = useNamespace('empty')

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('custom-color', !!props.color),
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-empty-color'] = props.color
  }
  if (props.imageSize !== 64) {
    style['--cp-empty-image-size'] = `${props.imageSize}px`
  }
  return style
})

const showDescription = computed(() => props.description || slots.description)
const showBottom = computed(() => slots.default)
</script>

<template>
  <div :class="classes" :style="customStyle">
    <div :class="ns.e('content')">
      <!-- 图标区域 -->
      <div :class="ns.e('image')">
        <slot name="icon">
          <CpIcon v-if="icon" :icon="icon" :size="imageSize" :color="color || 'var(--cp-empty-color, var(--cp-text-muted))'" />
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
          >
            <!-- 底部阴影 -->
            <ellipse cx="32" cy="56" rx="20" ry="4" fill="currentColor" fill-opacity="0.1" />
            
            <!-- 后面文件夹 -->
            <path d="M10 20C10 17.7909 11.7909 16 14 16H24L28 20H50C52.2091 20 54 21.7909 54 24V48C54 50.2091 52.2091 52 50 52H14C11.7909 52 10 50.2091 10 48V20Z" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
            
            <!-- 纸张文件 -->
            <path d="M28 20V12C28 10.8954 28.8954 10 30 10H42L48 16V28" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
            <path d="M42 10V16H48" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
            <line x1="33" y1="18" x2="43" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            <line x1="33" y1="24" x2="39" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            
            <!-- 前面文件夹 -->
            <path d="M12 30H52L54 52H10L12 30Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
          </svg>
        </slot>
      </div>

      <!-- 标题 -->
      <div :class="ns.e('title')">
        <slot name="title">{{ title }}</slot>
      </div>

      <!-- 描述 -->
      <div v-if="showDescription" :class="ns.e('description')">
        <slot name="description">{{ description }}</slot>
      </div>

      <!-- 底部操作区 -->
      <div v-if="showBottom" :class="ns.e('bottom')">
        <slot />
      </div>
    </div>
  </div>
</template>
