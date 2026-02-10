<script setup lang="ts">
/**
 * CpTreeNode - 递归树节点组件
 * 负责渲染单个节点及其子节点
 *
 * 图标优先级（展开/收起/叶子区域）：
 * 1. #icon 插槽（完全自定义模板）
 * 2. expandIcon / collapseIcon / leafIcon prop（支持函数形式）
 * 3. 默认内置图标
 *
 * 节点前缀图标（nodeIcon 区域）：
 * 1. nodeIcon prop（Component 或函数）
 * 2. TreeNodeData.icon 字段（当 showNodeIcon=true 时自动读取，用 CpIcon 渲染）
 */
import { computed, inject, ref, type Component } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { treeNodeProps } from './tree-node'
import type { TreeNode } from './tree'
import { treeContextKey, type TreeIconProp } from './constants'
import CpIcon from '../../icon/src/icon.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}TreeNode`,
})

const props = defineProps(treeNodeProps)
const ns = useNamespace('tree')
const ctx = inject(treeContextKey)!

// ===== 辅助函数 =====

/** 解析 icon prop：如果是函数则传入 node 调用，否则直接返回 */
function resolveIconProp(iconProp: TreeIconProp | undefined): Component | null {
  if (!iconProp) return null
  if (typeof iconProp === 'function') {
    try {
      return (iconProp as (node: TreeNode) => Component)(props.node)
    } catch {
      return null
    }
  }
  return iconProp as Component
}

// ===== 状态计算 =====

const isExpanded = computed(() => ctx.expandedKeys.value.has(props.node.key))
const isChecked = computed(() => ctx.checkedKeys.value.has(props.node.key))
const isIndeterminate = computed(() =>
  ctx.indeterminateKeys.value.has(props.node.key)
)
const isCurrent = computed(
  () => ctx.highlightCurrent && ctx.currentNodeKey.value === props.node.key
)
const isVisible = computed(() => {
  if (!ctx.visibleKeys.value) return true
  return ctx.visibleKeys.value.has(props.node.key)
})

// 缩进样式
const paddingStyle = computed(() => ({
  paddingLeft: `${props.node.level * ctx.indent}px`,
}))

// 节点类名
const contentClasses = computed(() => [
  ns.e('node-content'),
  ns.is('expanded', isExpanded.value),
  ns.is('checked', isChecked.value),
  ns.is('current', isCurrent.value),
  ns.is('disabled', props.node.disabled),
  ns.is('leaf', props.node.isLeaf),
])

// ===== 前缀图标计算 =====

/** 展开/收起区域使用的图标组件（支持函数形式） */
const expandIconComponent = computed<Component | null>(() => {
  if (props.node.isLeaf) return null // 叶子节点不用展开图标

  if (isExpanded.value && ctx.collapseIcon) {
    return resolveIconProp(ctx.collapseIcon)
  }
  if (!isExpanded.value && ctx.expandIcon) {
    return resolveIconProp(ctx.expandIcon)
  }
  // 如果只提供了 expandIcon，没有 collapseIcon，展开时也用 expandIcon（CSS 旋转）
  if (ctx.expandIcon) {
    return resolveIconProp(ctx.expandIcon)
  }
  return null
})

/** 叶子节点图标（支持函数形式） */
const leafIconComponent = computed<Component | null>(() => {
  if (!props.node.isLeaf) return null
  return resolveIconProp(ctx.leafIcon)
})

/** 是否使用了自定义展开图标，同时没有单独的 collapseIcon（需要 CSS 旋转） */
const useRotateForExpand = computed(() => {
  return !!ctx.expandIcon && !ctx.collapseIcon
})

/**
 * 节点前缀图标（展开箭头后、复选框前）
 * 返回 { component: Component | null, iconString: string | null }
 * - component: Vue 组件（直接渲染）
 * - iconString: 字符串（通过 CpIcon 渲染，支持 SVG 字符串 / CSS 类名）
 */
const nodeIconResolved = computed<{ component: Component | null; iconString: string | null }>(() => {
  // 优先级 1: nodeIcon prop
  if (ctx.nodeIcon) {
    if (typeof ctx.nodeIcon === 'function') {
      try {
        const result = (ctx.nodeIcon as (node: TreeNode) => Component | string | undefined)(props.node)
        if (!result) return { component: null, iconString: null }
        if (typeof result === 'string') return { component: null, iconString: result }
        return { component: result as Component, iconString: null }
      } catch {
        return { component: null, iconString: null }
      }
    }
    // 静态组件
    return { component: ctx.nodeIcon as Component, iconString: null }
  }

  // 优先级 2: 自动读取 TreeNodeData.icon（当 showNodeIcon=true）
  if (ctx.showNodeIcon && props.node.data?.icon) {
    const iconVal = props.node.data.icon
    if (typeof iconVal === 'string') {
      return { component: null, iconString: iconVal }
    }
    if (typeof iconVal === 'object') {
      return { component: iconVal as Component, iconString: null }
    }
  }

  return { component: null, iconString: null }
})

/** 是否有节点前缀图标需要渲染 */
const hasNodeIcon = computed(() =>
  nodeIconResolved.value.component !== null || nodeIconResolved.value.iconString !== null
)

// ===== 交互处理 =====

const handleExpandClick = (e: Event) => {
  e.stopPropagation()
  if (!props.node.isLeaf) {
    ctx.toggleExpand(props.node)
  }
}

const handleCheckChange = (e: Event) => {
  e.stopPropagation()
  ctx.toggleCheck(props.node)
}

const handleContentClick = () => {
  ctx.handleNodeClick(props.node)
  // 点击内容区也触发展开/收起（如果有子节点）
  if (!props.node.isLeaf && !ctx.showCheckbox) {
    ctx.toggleExpand(props.node)
  }
}

// 子节点展开/收起动画
const childrenRef = ref<HTMLElement>()
</script>

<template>
  <div v-show="isVisible" :class="ns.e('node')" role="treeitem">
    <!-- 节点内容行 -->
    <div
      :class="contentClasses"
      :style="paddingStyle"
      @click="handleContentClick"
    >
      <!-- 展开箭头区 -->
      <span
        :class="[
          ns.e('expand-icon'),
          ns.is('expanded', isExpanded),
          ns.is('leaf', node.isLeaf),
          ns.is('custom-icon', !!expandIconComponent || !!leafIconComponent),
          ns.is('rotate-expand', useRotateForExpand && isExpanded),
        ]"
        @click="handleExpandClick"
      >
        <!-- 优先级 1: icon 插槽（完全自定义） -->
        <template v-if="ctx.slots.icon">
          <component
            :is="ctx.slots.icon"
            :node="node"
            :data="node.data"
            :expanded="isExpanded"
          />
        </template>

        <!-- 优先级 2: 自定义展开/收起/叶子图标组件（支持函数形式） -->
        <template v-else-if="expandIconComponent">
          <component :is="expandIconComponent" />
        </template>
        <template v-else-if="leafIconComponent">
          <component :is="leafIconComponent" />
        </template>

        <!-- 优先级 3: 默认内置图标 -->
        <template v-else>
          <svg
            v-if="!node.isLeaf"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="square"
          >
            <polyline points="9,6 15,12 9,18" />
          </svg>
          <!-- 叶子节点：占位小点 -->
          <span v-else :class="ns.e('leaf-dot')" />
        </template>
      </span>

      <!-- 节点前缀图标（可选，在展开箭头后、复选框/内容前） -->
      <span
        v-if="hasNodeIcon"
        :class="ns.e('node-icon')"
      >
        <!-- 组件形式直接渲染 -->
        <component :is="nodeIconResolved.component" v-if="nodeIconResolved.component" />
        <!-- 字符串形式通过 CpIcon 渲染 -->
        <CpIcon v-else-if="nodeIconResolved.iconString" :icon="nodeIconResolved.iconString" size="sm" />
      </span>

      <!-- 复选框 -->
      <span
        v-if="ctx.showCheckbox"
        :class="[
          ns.e('checkbox'),
          ns.is('checked', isChecked),
          ns.is('indeterminate', isIndeterminate),
          ns.is('disabled', node.disabled),
        ]"
        @click.stop="handleCheckChange"
      >
        <svg
          v-if="isChecked && !isIndeterminate"
          :class="ns.e('checkbox-icon')"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="square"
        >
          <polyline points="4,12 10,18 20,6" />
        </svg>
        <svg
          v-if="isIndeterminate"
          :class="ns.e('checkbox-icon')"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="square"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>

      <!-- 节点内容 -->
      <span :class="ns.e('label')">
        <template v-if="ctx.slots.default">
          <component :is="ctx.slots.default" :node="node" :data="node.data" />
        </template>
        <template v-else>{{ node.label }}</template>
      </span>
    </div>

    <!-- 子节点 -->
    <div
      v-if="node.children.length > 0"
      v-show="isExpanded"
      ref="childrenRef"
      :class="ns.e('children')"
    >
      <CpTreeNode
        v-for="(child, index) in node.children"
        :key="child.key"
        :node="child"
        :is-last="index === node.children.length - 1"
      />
    </div>
  </div>
</template>
