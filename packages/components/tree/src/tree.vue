<script setup lang="ts">
/**
 * CpTree - 赛博朋克风格树形控件
 * 支持展开/收起、复选框级联、手风琴、连接线、过滤等功能
 */
import { computed, provide, ref, watch, useSlots, toRef } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { treeProps, treeEmits, type TreeNode, type TreeNodeData } from './tree'
import { treeContextKey, type TreeContext } from './constants'
import CpTreeNode from './tree-node.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Tree`,
})

const props = defineProps(treeProps)
const emit = defineEmits(treeEmits)
const slots = useSlots()

const ns = useNamespace('tree')

// ===== 字段映射工具 =====
const getLabel = (data: TreeNodeData) =>
  data[props.props?.label || 'label'] as string
const getChildren = (data: TreeNodeData) =>
  data[props.props?.children || 'children'] as TreeNodeData[] | undefined
const getDisabled = (data: TreeNodeData) =>
  data[props.props?.disabled || 'disabled'] as boolean | undefined
const getIsLeaf = (data: TreeNodeData) =>
  data[props.props?.isLeaf || 'isLeaf'] as boolean | undefined
const getNodeKey = (data: TreeNodeData) => {
  const key = data[props.nodeKey]
  return key !== undefined ? key : data.label
}

// ===== 节点映射 =====
const nodeMap = new Map<string | number, TreeNode>()

// 将原始数据转为内部 TreeNode
const buildTree = (
  dataList: TreeNodeData[],
  parent: TreeNode | null = null,
  level = 0
): TreeNode[] => {
  return dataList.map((data) => {
    const key = getNodeKey(data)
    const children = getChildren(data)
    const node: TreeNode = {
      key,
      label: getLabel(data),
      level,
      data,
      children: [],
      parent,
      disabled: getDisabled(data) ?? false,
      isLeaf: getIsLeaf(data) ?? (!children || children.length === 0),
      loading: false,
      loaded: false,
    }
    nodeMap.set(key, node)
    if (children && children.length > 0) {
      node.children = buildTree(children, node, level + 1)
    }
    return node
  })
}

// 响应式节点树
const treeNodes = ref<TreeNode[]>([])

const rebuildTree = () => {
  nodeMap.clear()
  treeNodes.value = buildTree(props.data)
}

watch(() => props.data, rebuildTree, { immediate: true, deep: true })

// ===== 展开状态 =====
const internalExpandedKeys = ref<Set<string | number>>(new Set())

// 初始化展开 key
const initExpandedKeys = () => {
  if (props.defaultExpandAll) {
    const allKeys = new Set<string | number>()
    const collectKeys = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        if (!node.isLeaf) {
          allKeys.add(node.key)
        }
        if (node.children.length > 0) {
          collectKeys(node.children)
        }
      }
    }
    collectKeys(treeNodes.value)
    internalExpandedKeys.value = allKeys
  } else if (props.defaultExpandedKeys.length > 0) {
    internalExpandedKeys.value = new Set(props.defaultExpandedKeys)
  }
}

watch(treeNodes, initExpandedKeys, { immediate: true })

// 受控 vs 非受控
const expandedKeysSet = computed(() => {
  if (props.expandedKeys !== undefined) {
    return new Set(props.expandedKeys)
  }
  return internalExpandedKeys.value
})

// ===== 勾选状态 =====
const internalCheckedKeys = ref<Set<string | number>>(new Set())

// 受控 vs 非受控
const checkedKeysSet = computed(() => {
  if (props.checkedKeys !== undefined) {
    return new Set(props.checkedKeys)
  }
  return internalCheckedKeys.value
})

// 初始化勾选 key
watch(
  () => props.checkedKeys,
  (val) => {
    if (val !== undefined) {
      internalCheckedKeys.value = new Set(val)
      // 非严格模式时需要计算级联
      if (!props.checkStrictly) {
        updateIndeterminateKeys()
      }
    }
  },
  { immediate: true }
)

// ===== 半选状态 =====
const indeterminateKeys = ref<Set<string | number>>(new Set())

// 计算半选 key
const updateIndeterminateKeys = () => {
  if (props.checkStrictly) {
    indeterminateKeys.value = new Set()
    return
  }

  const newIndeterminate = new Set<string | number>()
  const checked = checkedKeysSet.value

  // 自底向上遍历
  const checkParent = (node: TreeNode) => {
    if (!node.parent) return

    const parent = node.parent
    const siblings = parent.children
    const allChecked = siblings.every(
      (s) => checked.has(s.key) && !s.disabled
    )
    const someChecked = siblings.some(
      (s) => checked.has(s.key) || newIndeterminate.has(s.key)
    )

    if (allChecked && !siblings.some((s) => s.disabled && !checked.has(s.key))) {
      // 所有非禁用子节点都选中了 → 父节点选中
      // 不在这里修改 checked，只标记 indeterminate
    } else if (someChecked) {
      newIndeterminate.add(parent.key)
    }

    checkParent(parent)
  }

  // 遍历所有节点
  const traverse = (nodes: TreeNode[]) => {
    for (const node of nodes) {
      if (node.children.length > 0) {
        traverse(node.children)
      }
    }
  }

  // 从叶子节点开始向上计算
  const computeFromBottom = (nodes: TreeNode[]) => {
    for (const node of nodes) {
      if (node.children.length > 0) {
        computeFromBottom(node.children)

        const enabledChildren = node.children.filter((c) => !c.disabled)
        if (enabledChildren.length === 0) continue

        const allChecked = enabledChildren.every((c) => checked.has(c.key))
        const someChecked = enabledChildren.some(
          (c) => checked.has(c.key) || newIndeterminate.has(c.key)
        )

        if (!allChecked && someChecked) {
          newIndeterminate.add(node.key)
        }
      }
    }
  }

  computeFromBottom(treeNodes.value)
  indeterminateKeys.value = newIndeterminate
}

watch(checkedKeysSet, updateIndeterminateKeys, { immediate: true })

// ===== 当前高亮节点 =====
const currentNodeKey = ref<string | number | null>(null)

// ===== 过滤 =====
const filterText = ref('')
const visibleKeys = ref<Set<string | number> | null>(null)

const computeVisibleKeys = () => {
  if (!filterText.value || !props.filterMethod) {
    visibleKeys.value = null
    return
  }

  const visible = new Set<string | number>()

  const traverse = (nodes: TreeNode[]): boolean => {
    let hasVisible = false
    for (const node of nodes) {
      let childVisible = false
      if (node.children.length > 0) {
        childVisible = traverse(node.children)
      }
      const selfVisible = props.filterMethod!(
        filterText.value,
        node.data,
        node
      )
      if (selfVisible || childVisible) {
        visible.add(node.key)
        hasVisible = true
      }
    }
    return hasVisible
  }

  traverse(treeNodes.value)
  visibleKeys.value = visible
}

watch(filterText, computeVisibleKeys)

// ===== 交互方法 =====

const toggleExpand = (node: TreeNode) => {
  const keys = new Set(expandedKeysSet.value)
  const isExpanded = keys.has(node.key)

  if (isExpanded) {
    keys.delete(node.key)
    emit('node-collapse', node.data, node)
  } else {
    // 手风琴模式：关闭同级节点
    if (props.accordion && node.parent) {
      for (const sibling of node.parent.children) {
        keys.delete(sibling.key)
      }
    } else if (props.accordion && !node.parent) {
      // 根级手风琴
      for (const root of treeNodes.value) {
        keys.delete(root.key)
      }
    }
    keys.add(node.key)
    emit('node-expand', node.data, node)
  }

  if (props.expandedKeys !== undefined) {
    emit('update:expandedKeys', Array.from(keys))
  } else {
    internalExpandedKeys.value = keys
  }
}

const toggleCheck = (node: TreeNode) => {
  if (node.disabled) return

  const keys = new Set(checkedKeysSet.value)
  const isChecked = keys.has(node.key)

  if (props.checkStrictly) {
    // 严格模式：只切换当前节点
    if (isChecked) {
      keys.delete(node.key)
    } else {
      keys.add(node.key)
    }
  } else {
    // 级联模式
    if (isChecked) {
      // 取消勾选：向下取消所有子节点
      keys.delete(node.key)
      uncheckChildren(node, keys)
    } else {
      // 勾选：向下勾选所有子节点
      keys.add(node.key)
      checkChildren(node, keys)
    }
    // 向上更新父节点
    updateParentCheck(node.parent, keys)
  }

  emit('check-change', node.data, !isChecked)

  if (props.checkedKeys !== undefined) {
    emit('update:checkedKeys', Array.from(keys))
  } else {
    internalCheckedKeys.value = keys
  }
}

// 向下勾选所有未禁用子节点
const checkChildren = (node: TreeNode, keys: Set<string | number>) => {
  for (const child of node.children) {
    if (!child.disabled) {
      keys.add(child.key)
    }
    checkChildren(child, keys)
  }
}

// 向下取消所有未禁用子节点
const uncheckChildren = (node: TreeNode, keys: Set<string | number>) => {
  for (const child of node.children) {
    if (!child.disabled) {
      keys.delete(child.key)
    }
    uncheckChildren(child, keys)
  }
}

// 向上更新父节点
const updateParentCheck = (
  parent: TreeNode | null,
  keys: Set<string | number>
) => {
  if (!parent) return

  const enabledChildren = parent.children.filter((c) => !c.disabled)
  if (enabledChildren.length === 0) return

  const allChecked = enabledChildren.every((c) => keys.has(c.key))

  if (allChecked) {
    keys.add(parent.key)
  } else {
    keys.delete(parent.key)
  }

  updateParentCheck(parent.parent, keys)
}

const setCurrentNode = (node: TreeNode) => {
  if (props.highlightCurrent) {
    currentNodeKey.value = node.key
  }
}

const handleNodeClick = (node: TreeNode) => {
  setCurrentNode(node)
  emit('node-click', node.data, node)
}

// ===== 类名 =====
const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('connector-line', props.connectorLine),
  ns.is('custom-color', !!props.color),
])

// ===== 自定义颜色 =====
const customStyle = computed(() => {
  if (!props.color) return {}
  return {
    '--cp-tree-active-color': props.color,
    '--cp-tree-active-color-light': `${props.color}66`,
  } as Record<string, string>
})

// ===== Provide 上下文 =====
const context: TreeContext = {
  expandedKeys: expandedKeysSet as any,
  checkedKeys: checkedKeysSet as any,
  indeterminateKeys,
  currentNodeKey,
  showCheckbox: props.showCheckbox,
  checkStrictly: props.checkStrictly,
  accordion: props.accordion,
  indent: props.indent,
  highlightCurrent: props.highlightCurrent,
  type: props.type,
  connectorLine: props.connectorLine,
  filterText,
  visibleKeys,
  toggleExpand,
  toggleCheck,
  setCurrentNode,
  handleNodeClick,
  nodeMap,
  slots,
  expandIcon: props.expandIcon,
  collapseIcon: props.collapseIcon,
  leafIcon: props.leafIcon,
  nodeIcon: props.nodeIcon,
  showNodeIcon: props.showNodeIcon,
}

provide(treeContextKey, context)

// ===== 暴露方法 =====

/** 过滤节点 */
const filter = (val: string) => {
  filterText.value = val
}

/** 获取所有勾选的 key */
const getCheckedKeys = () => Array.from(checkedKeysSet.value)

/** 设置勾选的 key */
const setCheckedKeys = (keys: (string | number)[]) => {
  if (props.checkedKeys !== undefined) {
    emit('update:checkedKeys', keys)
  } else {
    internalCheckedKeys.value = new Set(keys)
  }
}

/** 展开所有节点 */
const expandAll = () => {
  const allKeys = new Set<string | number>()
  const traverse = (nodes: TreeNode[]) => {
    for (const node of nodes) {
      if (!node.isLeaf) allKeys.add(node.key)
      if (node.children.length) traverse(node.children)
    }
  }
  traverse(treeNodes.value)
  if (props.expandedKeys !== undefined) {
    emit('update:expandedKeys', Array.from(allKeys))
  } else {
    internalExpandedKeys.value = allKeys
  }
}

/** 收起所有节点 */
const collapseAll = () => {
  if (props.expandedKeys !== undefined) {
    emit('update:expandedKeys', [])
  } else {
    internalExpandedKeys.value = new Set()
  }
}

/** 获取半选的 key */
const getHalfCheckedKeys = () => Array.from(indeterminateKeys.value)

defineExpose({
  filter,
  getCheckedKeys,
  setCheckedKeys,
  getHalfCheckedKeys,
  expandAll,
  collapseAll,
  treeNodes,
})
</script>

<template>
  <div :class="classes" :style="customStyle" role="tree">
    <template v-if="treeNodes.length > 0">
      <CpTreeNode
        v-for="(node, index) in treeNodes"
        :key="node.key"
        :node="node"
        :is-last="index === treeNodes.length - 1"
      />
    </template>
    <div v-else :class="ns.e('empty')">
      <slot name="empty">
        <span :class="ns.e('empty-text')">NO DATA</span>
      </slot>
    </div>
  </div>
</template>
