<script setup lang="ts">
/**
 * CpAvatarGroup - 头像组组件
 * 用于展示一组头像，支持堆叠和折叠模式
 */
import { computed, provide, useSlots, VNode } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { avatarGroupProps, AVATAR_GROUP_INJECTION_KEY, type AvatarGroupContext } from './avatar-group'
import { avatarSizeMap } from './avatar'

defineOptions({
    name: `${COMPONENT_PREFIX}AvatarGroup`,
})

const props = defineProps(avatarGroupProps)
const slots = useSlots()

const ns = useNamespace('avatar-group')

// 计算实际尺寸值（px）
const sizeValue = computed(() => {
    const size = props.size
    if (typeof size === 'number') return size
    return avatarSizeMap[size] ?? avatarSizeMap.md
})

// 计算间距值
const spacingValue = computed(() => {
    const spacing = props.spacing
    if (typeof spacing === 'number') return `${spacing}px`
    return spacing
})

// 向子组件提供上下文
provide<AvatarGroupContext>(AVATAR_GROUP_INJECTION_KEY, {
    size: props.size,
    shape: props.shape,
})

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
    const defaultSlot = (slot as any)()
    if (!defaultSlot) return []

    // 展平 Fragment
    const children: VNode[] = []
    const flatten = (nodes: VNode[]) => {
        nodes.forEach((node) => {
            if (Array.isArray(node.children)) {
                flatten(node.children as VNode[])
            } else {
                children.push(node)
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
    if (props.max === undefined || props.max >= children.length) {
        return 0
    }
    return children.length - props.max
})

// 折叠计数器形状（优先使用 collapseShape，否则跟随 shape）
const counterShape = computed(() => props.collapseShape ?? props.shape)

// 折叠计数器类名
const counterClasses = computed(() => [
    ns.e('counter'),
    ns.bem('', 'counter', `shape-${counterShape.value}`),
    props.collapseClass,
])
</script>

<template>
    <div :class="classes" :style="styles">
        <!-- 渲染子头像 -->
        <template v-for="(child, index) in getAvatarChildren()" :key="index">
            <component
                v-if="index < visibleCount"
                :is="child"
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
