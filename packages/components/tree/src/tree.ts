import type { Component, ExtractPropTypes, PropType } from 'vue'

/**
 * 树节点数据模型
 */
export interface TreeNodeData {
  /** 节点文本 */
  label: string
  /** 节点唯一标识 */
  value?: string | number
  /** 子节点 */
  children?: TreeNodeData[]
  /** 是否禁用 */
  disabled?: boolean
  /** 是否叶子节点（懒加载场景） */
  isLeaf?: boolean
  /** 自定义图标名称 */
  icon?: string
  /** 允许用户扩展的任意数据 */
  [key: string]: unknown
}

/**
 * 字段映射配置
 * 用于非标准数据结构的字段名映射
 */
export interface TreeFieldProps {
  label?: string
  children?: string
  disabled?: string
  isLeaf?: string
}

/**
 * 内部树节点（带运行时状态）
 */
export interface TreeNode {
  /** 节点唯一 key */
  key: string | number
  /** 显示文本 */
  label: string
  /** 层级深度（从 0 开始） */
  level: number
  /** 原始数据 */
  data: TreeNodeData
  /** 子节点 */
  children: TreeNode[]
  /** 父节点 */
  parent: TreeNode | null
  /** 是否禁用 */
  disabled: boolean
  /** 是否叶子节点 */
  isLeaf: boolean
  /** 是否正在加载（懒加载） */
  loading: boolean
  /** 是否已加载过（懒加载） */
  loaded: boolean
}

/**
 * 树形控件颜色类型
 */
export type TreeType = 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 复选框父子联动策略
 * - `'strict'`：父子独立，互不影响
 * - `'cascade'`：完全双向联动。勾父 → 全部后代勾选；勾/取子 → 父按直接子状态自动更新（含半选）
 * - `'bubble'`：勾选任何节点 → 级联勾选全部后代 + 向上冒泡勾选祖先；取消父 → 后代全部取消；取消子不影响父
 */
export type TreeCascadeMode = 'strict' | 'cascade' | 'bubble'

/**
 * CpTree 组件 Props 定义
 *
 * @description 赛博朋克风格树形控件，用于展示层级数据。
 *
 * @example
 * ```vue
 * <CpTree :data="treeData" show-checkbox />
 * ```
  * @category 展示组件
 * @displayName CpTree 树形控件
  * @slots default - 自定义节点内容 (作用域: { node, data })
 * @slots icon - 自定义展开/叶子图标 (作用域: { node, data, expanded })
 * @slots empty - 空数据时的展示内容
 */
export const treeProps = {
  /**
   * 树节点数据
   */
  data: {
    type: Array as PropType<TreeNodeData[]>,
    default: () => [],
  },
  /**
   * 是否显示复选框（多选模式）
   * @default false
   */
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否显示单选框（单选模式）
   * 与 `showCheckbox` 互斥；开启后每个节点左侧渲染单选指示器，
   * 点击节点（非禁用）即将该节点设为当前选中节点，状态通过 `currentKey` / `update:currentKey` / `current-change` 反馈。
   * @default false
   */
  showRadio: {
    type: Boolean,
    default: false,
  },
  /**
   * 严格模式：父子节点互不关联
   * - `false`（默认）：勾选父节点自动勾选所有子节点，子节点全选时自动勾上父节点，部分选中显示半选
   * - `true`：父子独立勾选，互不影响
   * @deprecated 请使用 `checkMode` 指定联动策略。当 `checkMode` 显式传入时本 prop 被忽略。
   * @default false
   */
  checkStrictly: {
    type: Boolean,
    default: false,
  },
  /**
   * 复选框父子联动策略（参考 CpTable `treeCheckMode`）
   * - `'strict'`：父子独立，互不影响
   * - `'cascade'`：完全双向联动
   * - `'bubble'`：勾选级联+向上冒泡；取消父 → 后代全部取消；取消子不影响父
   *
   * 未显式传入时：若 `checkStrictly` 为 `true` 则等价 `'strict'`，否则等价 `'cascade'`（兼容旧行为）。
   */
  checkMode: {
    type: String as PropType<TreeCascadeMode>,
    default: undefined,
  },
  /**
   * 默认展开所有节点
   * @default false
   */
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  /**
   * 默认展开的节点 key
   */
  defaultExpandedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  /**
   * 受控展开的节点 key (v-model:expandedKeys)
   */
  expandedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: undefined,
  },
  /**
   * 受控勾选的节点 key (v-model:checkedKeys)
   */
  checkedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: undefined,
  },
  /**
   * 手风琴模式：同级只展开一个节点
   * @default false
   */
  accordion: {
    type: Boolean,
    default: false,
  },
  /**
   * 每级缩进像素
   * @default 16
   */
  indent: {
    type: Number,
    default: 16,
  },
  /**
   * 节点唯一标识字段名
   * @default 'value'
   */
  nodeKey: {
    type: String,
    default: 'value',
  },
  /**
   * 字段映射 { label, children, disabled, isLeaf }
   */
  props: {
    type: Object as PropType<TreeFieldProps>,
    default: undefined,
  },
  /**
   * 是否高亮当前点击节点
   * @default false
   */
  highlightCurrent: {
    type: Boolean,
    default: false,
  },
  /**
   * 默认当前选中节点 key（非受控）
   */
  defaultCurrentKey: {
    type: [String, Number, null] as PropType<string | number | null>,
    default: null,
  },
  /**
   * 受控当前选中节点 key（v-model:currentKey）
   * 与 `highlightCurrent` / `showRadio` 共用同一份状态：
   * - `highlightCurrent`=true：点击节点高亮并写入 currentKey
   * - `showRadio`=true：点击节点选中并写入 currentKey
   */
  currentKey: {
    type: [String, Number, null] as PropType<string | number | null>,
    default: undefined,
  },
  /**
   * 颜色类型
   * @default 'primary'
   */
  type: {
    type: String as PropType<TreeType>,
    default: 'primary',
  },
  /**
   * 自定义主题颜色
   * 传入有效 CSS 颜色值，覆盖 type 预设颜色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否显示连接线
   * @default true
   */
  connectorLine: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否懒加载
   * @default false
   */
  lazy: {
    type: Boolean,
    default: false,
  },
  /**
   * 懒加载回调
   */
  load: {
    type: Function as PropType<(node: TreeNode, resolve: (data: TreeNodeData[]) => void) => void>,
    default: undefined,
  },
  /**
   * 过滤方法
   */
  filterMethod: {
    type: Function as PropType<(value: string, data: TreeNodeData, node: TreeNode) => boolean>,
    default: undefined,
  },
  /**
   * 自定义展开图标（节点未展开时显示）
   * - `Component`: 统一图标
   * - `(node: TreeNode) => Component`: 按节点返回不同图标
   */
  expandIcon: {
    type: [Object, Function] as PropType<Component | ((node: TreeNode) => Component)>,
    default: undefined,
  },
  /**
   * 自定义收起图标（节点已展开时显示）
   * 如果未提供，则复用 expandIcon（带旋转动画）
   * - `Component`: 统一图标
   * - `(node: TreeNode) => Component`: 按节点返回不同图标
   */
  collapseIcon: {
    type: [Object, Function] as PropType<Component | ((node: TreeNode) => Component)>,
    default: undefined,
  },
  /**
   * 自定义叶子节点图标
   * - `Component`: 统一图标
   * - `(node: TreeNode) => Component`: 按节点返回不同图标
   */
  leafIcon: {
    type: [Object, Function] as PropType<Component | ((node: TreeNode) => Component)>,
    default: undefined,
  },
  /**
   * 自定义节点前缀图标
   * 在单选/复选指示器之后、标签之前显示（若未启用 showRadio/showCheckbox 则紧跟展开箭头）
   * - `Component`: 统一图标
   * - `(node: TreeNode) => Component | string | undefined`: 按节点返回不同图标
   * 当 showNodeIcon 为 true 时，如果未设置此 prop，则自动读取 `TreeNodeData.icon` 字段
   */
  nodeIcon: {
    type: [Object, Function] as PropType<Component | ((node: TreeNode) => Component | string | undefined)>,
    default: undefined,
  },
  /**
   * 是否自动显示节点数据中的 icon 字段
   * 当为 true 且未设置 nodeIcon 时，自动读取 TreeNodeData.icon 并通过 CpIcon 渲染
   * @default true
   */
  showNodeIcon: {
    type: Boolean,
    default: true,
  },
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>

/**
 * CpTree 组件事件定义
 */
export const treeEmits = {
  /** 节点被点击 */
  'node-click': (data: TreeNodeData, node: TreeNode) =>
    data !== undefined && node !== undefined,
  /** 节点展开 */
  'node-expand': (data: TreeNodeData, node: TreeNode) =>
    data !== undefined && node !== undefined,
  /** 节点收起 */
  'node-collapse': (data: TreeNodeData, node: TreeNode) =>
    data !== undefined && node !== undefined,
  /** 勾选变化 */
  'check-change': (data: TreeNodeData, checked: boolean) =>
    data !== undefined && typeof checked === 'boolean',
  /** 当前选中节点变化（highlightCurrent / showRadio 场景） */
  'current-change': (
    data: TreeNodeData | null,
    node: TreeNode | null,
    prevData: TreeNodeData | null,
    prevNode: TreeNode | null
  ) => true,
  /** v-model:checkedKeys */
  'update:checkedKeys': (keys: (string | number)[]) => Array.isArray(keys),
  /** v-model:expandedKeys */
  'update:expandedKeys': (keys: (string | number)[]) => Array.isArray(keys),
  /** v-model:currentKey */
  'update:currentKey': (key: string | number | null) =>
    key === null || typeof key === 'string' || typeof key === 'number',
}

export type TreeEmits = typeof treeEmits
