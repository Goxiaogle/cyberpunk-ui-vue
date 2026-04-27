<script setup lang="ts">
/**
 * CpTree - 赛博朋克风格树形控件
 * 支持展开/收起、复选框级联、手风琴、连接线、过滤等功能
 */
import { computed, provide, ref, watch, useSlots } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import {
  treeProps,
  treeEmits,
  type TreeCascadeMode,
  type TreeNode,
  type TreeNodeData,
} from './tree'
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
  if (typeof key === 'string' || typeof key === 'number') return key
  return data.label
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
    }
  },
  { immediate: true }
)

// ===== 半选状态 =====
const indeterminateKeys = ref<Set<string | number>>(new Set())

// ===== 联动策略 =====
// checkMode 显式传入时生效；否则回退到 checkStrictly 的旧语义
const effectiveCheckMode = computed<TreeCascadeMode>(() => {
  if (props.checkMode) return props.checkMode
  return props.checkStrictly ? 'strict' : 'cascade'
})

// 计算半选 key
const updateIndeterminateKeys = () => {
  const mode = effectiveCheckMode.value
  if (mode === 'strict') {
    indeterminateKeys.value = new Set()
    return
  }

  const newIndeterminate = new Set<string | number>()
  const checked = checkedKeysSet.value

  if (mode === 'bubble') {
    // bubble 语义：勾选冒泡到祖先 → 若节点本身被勾选但某个后代未勾选，则为半选
    const walk = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        if (node.children.length > 0) {
          walk(node.children)
          if (checked.has(node.key)) {
            const hasUncheckedDescendant = node.children.some(
              (c) =>
                !c.disabled &&
                (!checked.has(c.key) || newIndeterminate.has(c.key))
            )
            if (hasUncheckedDescendant) newIndeterminate.add(node.key)
          }
        }
      }
    }
    walk(treeNodes.value)
    indeterminateKeys.value = newIndeterminate
    return
  }

  // cascade：从叶子节点开始向上计算
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

watch([checkedKeysSet, effectiveCheckMode], updateIndeterminateKeys, {
  immediate: true,
})

// ===== 当前高亮/单选节点 =====
const internalCurrentKey = ref<string | number | null>(
  props.defaultCurrentKey ?? null
)

const currentNodeKey = computed<string | number | null>(() => {
  if (props.currentKey !== undefined) return props.currentKey
  return internalCurrentKey.value
})

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
  const mode = effectiveCheckMode.value

  if (mode === 'strict') {
    // 严格模式：只切换当前节点
    if (isChecked) keys.delete(node.key)
    else keys.add(node.key)
  } else if (mode === 'bubble') {
    // 冒泡模式：勾选 = 自身 + 全部后代 + 向上冒泡祖先；取消 = 自身 + 全部后代，祖先保持
    if (isChecked) {
      keys.delete(node.key)
      uncheckChildren(node, keys)
    } else {
      keys.add(node.key)
      checkChildren(node, keys)
      let p = node.parent
      while (p) {
        if (!p.disabled) keys.add(p.key)
        p = p.parent
      }
    }
  } else {
    // cascade：完全双向联动
    if (isChecked) {
      keys.delete(node.key)
      uncheckChildren(node, keys)
    } else {
      keys.add(node.key)
      checkChildren(node, keys)
    }
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

const setCurrentNode = (node: TreeNode | null, emitEvent = true) => {
  const prevKey = currentNodeKey.value
  const nextKey = node ? node.key : null
  if (prevKey === nextKey) return

  if (props.currentKey !== undefined) {
    emit('update:currentKey', nextKey)
  } else {
    internalCurrentKey.value = nextKey
  }

  if (emitEvent) {
    const prev = prevKey != null ? nodeMap.get(prevKey) ?? null : null
    emit(
      'current-change',
      node ? node.data : null,
      node,
      prev ? prev.data : null,
      prev
    )
  }
}

const handleNodeClick = (node: TreeNode) => {
  // 高亮 / 单选模式下，点击节点即写入 currentKey 并触发反馈事件
  // disabled 节点不参与选中（但 node-click 事件仍然触发，便于外部业务感知）
  if (!node.disabled) {
    if (props.showRadio || props.highlightCurrent) {
      setCurrentNode(node)
    }
  }
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
  expandedKeys: expandedKeysSet,
  checkedKeys: checkedKeysSet,
  indeterminateKeys,
  currentNodeKey,
  showCheckbox: props.showCheckbox,
  showRadio: props.showRadio,
  checkStrictly: props.checkStrictly,
  get checkMode() {
    return effectiveCheckMode.value
  },
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

/** 获取当前选中节点的 key（highlightCurrent / showRadio 场景） */
const getCurrentKey = () => currentNodeKey.value

/** 获取当前选中节点的数据（highlightCurrent / showRadio 场景） */
const getCurrentNode = () => {
  const key = currentNodeKey.value
  if (key == null) return null
  return nodeMap.get(key)?.data ?? null
}

/** 以编程方式设置当前选中节点；传 null 清除 */
const setCurrentKey = (key: string | number | null) => {
  if (key == null) {
    setCurrentNode(null, false)
    return
  }
  const node = nodeMap.get(key)
  if (node) setCurrentNode(node, false)
}

defineExpose({
  filter,
  getCheckedKeys,
  setCheckedKeys,
  getHalfCheckedKeys,
  getCurrentKey,
  getCurrentNode,
  setCurrentKey,
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
