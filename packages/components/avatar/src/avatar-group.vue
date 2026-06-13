<script setup lang="ts">
/**
 * CpAvatarGroup - 头像组组件
 * 用于展示一组头像，支持堆叠和折叠模式
 */
import { computed, provide, useSlots, type VNode } from 'vue'
import { useNamespace, useDefaults, parseSizeNumber } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { avatarGroupProps, AVATAR_GROUP_INJECTION_KEY, type AvatarGroupContext } from './avatar-group'
import { avatarSizeMap, normalizeAvatarShape } from './avatar'

defineOptions({
    name: `${COMPONENT_PREFIX}AvatarGroup`,
})

defineSlots<{
  default?: () => any
}>()

const rawProps = defineProps(avatarGroupProps)
const props = useDefaults(rawProps, 'avatarGroup')
const slots = useSlots()

const ns = useNamespace('avatar-group')

// 计算实际尺寸值（px）
const sizeValue = computed(() => {
    return parseSizeNumber(props.size, avatarSizeMap, avatarSizeMap.md)
})

// 计算间距值
const spacingValue = computed(() => {
    const spacing = props.spacing
    if (typeof spacing === 'number') return `${spacing}px`
    return spacing
})

// 向子组件提供上下文，getter 保持 ConfigProvider defaults 切换时的响应式。
const groupContext: AvatarGroupContext = {
    get size() {
        return props.size
    },
    get shape() {
        return props.shape
    },
    get type() {
        return props.type
    },
}

provide<AvatarGroupContext>(AVATAR_GROUP_INJECTION_KEY, groupContext)

// 类名
const classes = computed(() => [
    ns.b(),
    ns.is('stacked', props.collapseAvatars),
])

// 样式
const styles = computed(() => ({
    '--cp-avatar-size': `${sizeValue.value}px`,
    '--cp-avatar-group-spacing': spacingValue.value,
}))

// 获取默认插槽的子节点
const getAvatarChildren = (): VNode[] => {
    const slot = slots.default
    if (!slot) return []
    const defaultSlot = slot()
    if (!defaultSlot) return []

    // 展平 Fragment
    const children: VNode[] = []
    const flatten = (nodes: any[]) => {
        nodes.forEach((node) => {
            if (Array.isArray(node.children)) {
                flatten(node.children)
            } else {
                children.push(node as VNode)
            }
        })
    }
    flatten(defaultSlot)
    return children
}

// 计算可见数量和隐藏数量
const visibleCount = computed(() => {
    const children = getAvatarChildren()
    if (props.max === undefined || props.max >= children.length) {
        return children.length
    }
    return props.max
})

const hiddenCount = computed(() => {
    const children = getAvatarChildren()
    const shown = props.max === undefined ? children.length : Math.min(props.max, children.length)
    // 优先使用自定义 total；仅当 total 大于已显示数量时生效
    if (props.total !== undefined && props.total > shown) {
        return props.total - shown
    }
    if (props.max === undefined || props.max >= children.length) {
        return 0
    }
    return children.length - props.max
})

// 折叠计数器形状（优先使用 collapseShape，否则跟随 shape）
const counterShape = computed(() => normalizeAvatarShape(props.collapseShape ?? props.shape))
const counterType = computed(() => props.type ?? 'default')

// 折叠计数器类名
const counterClasses = computed(() => [
    ns.e('counter'),
    ns.bem('', 'counter', `type-${counterType.value}`),
    ns.bem('', 'counter', `shape-${counterShape.value}`),
    props.collapseClass,
])
</script>

<template>
  <div :class="classes" :style="styles">
    <!-- 渲染子头像 -->
    <template v-for="(child, index) in getAvatarChildren()" :key="index">
      <component
        :is="child"
        v-if="index < visibleCount"
      />
    </template>

    <!-- 折叠计数器 -->
    <span
      v-if="hiddenCount > 0"
      :class="counterClasses"
      :style="props.collapseStyle"
      :title="props.collapseAvatarsTooltip"
    >
      +{{ hiddenCount }}
    </span>
  </div>
</template>
