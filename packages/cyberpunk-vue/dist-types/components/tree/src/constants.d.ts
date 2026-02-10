import type { Component, InjectionKey, Ref, Slots } from 'vue';
import type { TreeNode, TreeType } from './tree';
/**
 * 图标 Prop 值类型
 * 支持直接传组件，或传函数按节点返回不同组件
 */
export type TreeIconProp = Component | ((node: TreeNode) => Component);
/**
 * nodeIcon 的返回值可以是组件、字符串（CpIcon 渲染）、或 undefined（不显示）
 */
export type TreeNodeIconProp = Component | ((node: TreeNode) => Component | string | undefined);
export interface TreeContext {
    /** 展开的 key 集合 */
    expandedKeys: Ref<Set<string | number>>;
    /** 勾选的 key 集合 */
    checkedKeys: Ref<Set<string | number>>;
    /** 半选的 key 集合 */
    indeterminateKeys: Ref<Set<string | number>>;
    /** 当前高亮节点 key */
    currentNodeKey: Ref<string | number | null>;
    /** 是否显示复选框 */
    showCheckbox: boolean;
    /** 是否严格模式（父子不关联） */
    checkStrictly: boolean;
    /** 是否手风琴模式 */
    accordion: boolean;
    /** 缩进像素 */
    indent: number;
    /** 是否高亮当前节点 */
    highlightCurrent: boolean;
    /** 颜色类型 */
    type: TreeType;
    /** 是否显示连接线 */
    connectorLine: boolean;
    /** 过滤文本（响应式） */
    filterText: Ref<string>;
    /** 可见节点 key 集合（过滤后） */
    visibleKeys: Ref<Set<string | number> | null>;
    /** 切换展开/收起 */
    toggleExpand: (node: TreeNode) => void;
    /** 切换勾选 */
    toggleCheck: (node: TreeNode) => void;
    /** 设置当前高亮节点 */
    setCurrentNode: (node: TreeNode) => void;
    /** 触发 node-click 事件 */
    handleNodeClick: (node: TreeNode) => void;
    /** 获取所有节点的映射 */
    nodeMap: Map<string | number, TreeNode>;
    /** 传递 Tree 的 slots 给 TreeNode 使用 */
    slots: Slots;
    /** 自定义展开图标（支持函数形式） */
    expandIcon?: TreeIconProp;
    /** 自定义收起图标（支持函数形式） */
    collapseIcon?: TreeIconProp;
    /** 自定义叶子节点图标（支持函数形式） */
    leafIcon?: TreeIconProp;
    /** 自定义节点前缀图标（支持函数形式，可返回字符串） */
    nodeIcon?: TreeNodeIconProp;
    /** 是否自动显示节点数据中的 icon 字段 */
    showNodeIcon: boolean;
}
export declare const treeContextKey: InjectionKey<TreeContext>;
