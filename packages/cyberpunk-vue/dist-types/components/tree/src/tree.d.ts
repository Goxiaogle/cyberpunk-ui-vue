import type { Component, ExtractPropTypes, PropType } from 'vue';
/**
 * 树节点数据模型
 */
export interface TreeNodeData {
    /** 节点文本 */
    label: string;
    /** 节点唯一标识 */
    value?: string | number;
    /** 子节点 */
    children?: TreeNodeData[];
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否叶子节点（懒加载场景） */
    isLeaf?: boolean;
    /** 自定义图标名称 */
    icon?: string;
    /** 允许用户扩展的任意数据 */
    [key: string]: any;
}
/**
 * 字段映射配置
 * 用于非标准数据结构的字段名映射
 */
export interface TreeFieldProps {
    label?: string;
    children?: string;
    disabled?: string;
    isLeaf?: string;
}
/**
 * 内部树节点（带运行时状态）
 */
export interface TreeNode {
    /** 节点唯一 key */
    key: string | number;
    /** 显示文本 */
    label: string;
    /** 层级深度（从 0 开始） */
    level: number;
    /** 原始数据 */
    data: TreeNodeData;
    /** 子节点 */
    children: TreeNode[];
    /** 父节点 */
    parent: TreeNode | null;
    /** 是否禁用 */
    disabled: boolean;
    /** 是否叶子节点 */
    isLeaf: boolean;
    /** 是否正在加载（懒加载） */
    loading: boolean;
    /** 是否已加载过（懒加载） */
    loaded: boolean;
}
/**
 * 树形控件颜色类型
 */
export type TreeType = 'primary' | 'success' | 'warning' | 'error' | 'info';
/**
 * CpTree 组件 Props 定义
 *
 * @description 赛博朋克风格树形控件，用于展示层级数据。
 *
 * @example
 * ```vue
 * <CpTree :data="treeData" show-checkbox />
 * ```
 */
export declare const treeProps: {
    /**
     * 树节点数据
     */
    readonly data: {
        readonly type: PropType<TreeNodeData[]>;
        readonly default: () => never[];
    };
    /**
     * 是否显示复选框
     * @default false
     */
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 严格模式：父子节点互不关联
     * - `false`（默认）：勾选父节点自动勾选所有子节点，子节点全选时自动勾上父节点，部分选中显示半选
     * - `true`：父子独立勾选，互不影响
     * @default false
     */
    readonly checkStrictly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 默认展开所有节点
     * @default false
     */
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 默认展开的节点 key
     */
    readonly defaultExpandedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly default: () => never[];
    };
    /**
     * 受控展开的节点 key (v-model:expandedKeys)
     */
    readonly expandedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly default: undefined;
    };
    /**
     * 受控勾选的节点 key (v-model:checkedKeys)
     */
    readonly checkedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly default: undefined;
    };
    /**
     * 手风琴模式：同级只展开一个节点
     * @default false
     */
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 每级缩进像素
     * @default 16
     */
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    /**
     * 节点唯一标识字段名
     * @default 'value'
     */
    readonly nodeKey: {
        readonly type: StringConstructor;
        readonly default: "value";
    };
    /**
     * 字段映射 { label, children, disabled, isLeaf }
     */
    readonly props: {
        readonly type: PropType<TreeFieldProps>;
        readonly default: undefined;
    };
    /**
     * 是否高亮当前点击节点
     * @default false
     */
    readonly highlightCurrent: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 颜色类型
     * @default 'primary'
     */
    readonly type: {
        readonly type: PropType<TreeType>;
        readonly default: "primary";
    };
    /**
     * 自定义主题颜色
     * 传入有效 CSS 颜色值，覆盖 type 预设颜色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否显示连接线
     * @default true
     */
    readonly connectorLine: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 是否懒加载
     * @default false
     */
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 懒加载回调
     */
    readonly load: {
        readonly type: PropType<(node: TreeNode, resolve: (data: TreeNodeData[]) => void) => void>;
        readonly default: undefined;
    };
    /**
     * 过滤方法
     */
    readonly filterMethod: {
        readonly type: PropType<(value: string, data: TreeNodeData, node: TreeNode) => boolean>;
        readonly default: undefined;
    };
    /**
     * 自定义展开图标（节点未展开时显示）
     * - `Component`: 统一图标
     * - `(node: TreeNode) => Component`: 按节点返回不同图标
     */
    readonly expandIcon: {
        readonly type: PropType<Component | ((node: TreeNode) => Component)>;
        readonly default: undefined;
    };
    /**
     * 自定义收起图标（节点已展开时显示）
     * 如果未提供，则复用 expandIcon（带旋转动画）
     * - `Component`: 统一图标
     * - `(node: TreeNode) => Component`: 按节点返回不同图标
     */
    readonly collapseIcon: {
        readonly type: PropType<Component | ((node: TreeNode) => Component)>;
        readonly default: undefined;
    };
    /**
     * 自定义叶子节点图标
     * - `Component`: 统一图标
     * - `(node: TreeNode) => Component`: 按节点返回不同图标
     */
    readonly leafIcon: {
        readonly type: PropType<Component | ((node: TreeNode) => Component)>;
        readonly default: undefined;
    };
    /**
     * 自定义节点前缀图标
     * 在展开箭头之后、复选框之前显示
     * - `Component`: 统一图标
     * - `(node: TreeNode) => Component | string | undefined`: 按节点返回不同图标
     * 当 showNodeIcon 为 true 时，如果未设置此 prop，则自动读取 `TreeNodeData.icon` 字段
     */
    readonly nodeIcon: {
        readonly type: PropType<Component | ((node: TreeNode) => Component | string | undefined)>;
        readonly default: undefined;
    };
    /**
     * 是否自动显示节点数据中的 icon 字段
     * 当为 true 且未设置 nodeIcon 时，自动读取 TreeNodeData.icon 并通过 CpIcon 渲染
     * @default true
     */
    readonly showNodeIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type TreeProps = ExtractPropTypes<typeof treeProps>;
/**
 * CpTree 组件事件定义
 */
export declare const treeEmits: {
    /** 节点被点击 */
    'node-click': (data: TreeNodeData, node: TreeNode) => boolean;
    /** 节点展开 */
    'node-expand': (data: TreeNodeData, node: TreeNode) => boolean;
    /** 节点收起 */
    'node-collapse': (data: TreeNodeData, node: TreeNode) => boolean;
    /** 勾选变化 */
    'check-change': (data: TreeNodeData, checked: boolean) => boolean;
    /** v-model:checkedKeys */
    'update:checkedKeys': (keys: (string | number)[]) => boolean;
    /** v-model:expandedKeys */
    'update:expandedKeys': (keys: (string | number)[]) => boolean;
};
export type TreeEmits = typeof treeEmits;
