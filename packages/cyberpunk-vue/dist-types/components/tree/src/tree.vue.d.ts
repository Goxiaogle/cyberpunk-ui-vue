import { type TreeNode, type TreeNodeData } from './tree';
declare var __VLS_4: {};
type __VLS_Slots = {} & {
    empty?: (props: typeof __VLS_4) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<TreeNodeData[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly checkStrictly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultExpandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly default: () => never[];
    };
    readonly expandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly default: undefined;
    };
    readonly checkedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly default: undefined;
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly nodeKey: {
        readonly type: StringConstructor;
        readonly default: "value";
    };
    readonly props: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeFieldProps>;
        readonly default: undefined;
    };
    readonly highlightCurrent: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeType>;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly connectorLine: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly load: {
        readonly type: import("vue").PropType<(node: TreeNode, resolve: (data: TreeNodeData[]) => void) => void>;
        readonly default: undefined;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(value: string, data: TreeNodeData, node: TreeNode) => boolean>;
        readonly default: undefined;
    };
    readonly expandIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly collapseIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly leafIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly nodeIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component | string | undefined)>;
        readonly default: undefined;
    };
    readonly showNodeIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>, {
    filter: (val: string) => void;
    getCheckedKeys: () => (string | number)[];
    setCheckedKeys: (keys: (string | number)[]) => void;
    getHalfCheckedKeys: () => (string | number)[];
    expandAll: () => void;
    collapseAll: () => void;
    treeNodes: import("vue").Ref<{
        key: string | number;
        label: string;
        level: number;
        data: {
            [x: string]: unknown;
            label: string;
            value?: string | number | undefined;
            children?: /*elided*/ any[] | undefined;
            disabled?: boolean | undefined;
            isLeaf?: boolean | undefined;
            icon?: string | undefined;
        };
        children: /*elided*/ any[];
        parent: /*elided*/ any | null;
        disabled: boolean;
        isLeaf: boolean;
        loading: boolean;
        loaded: boolean;
    }[], TreeNode[] | {
        key: string | number;
        label: string;
        level: number;
        data: {
            [x: string]: unknown;
            label: string;
            value?: string | number | undefined;
            children?: /*elided*/ any[] | undefined;
            disabled?: boolean | undefined;
            isLeaf?: boolean | undefined;
            icon?: string | undefined;
        };
        children: /*elided*/ any[];
        parent: /*elided*/ any | null;
        disabled: boolean;
        isLeaf: boolean;
        loading: boolean;
        loaded: boolean;
    }[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "node-click": (data: TreeNodeData, node: TreeNode) => void;
    "node-expand": (data: TreeNodeData, node: TreeNode) => void;
    "node-collapse": (data: TreeNodeData, node: TreeNode) => void;
    "check-change": (data: TreeNodeData, checked: boolean) => void;
    "update:checkedKeys": (keys: (string | number)[]) => void;
    "update:expandedKeys": (keys: (string | number)[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<TreeNodeData[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly checkStrictly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultExpandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly default: () => never[];
    };
    readonly expandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly default: undefined;
    };
    readonly checkedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly default: undefined;
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly nodeKey: {
        readonly type: StringConstructor;
        readonly default: "value";
    };
    readonly props: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeFieldProps>;
        readonly default: undefined;
    };
    readonly highlightCurrent: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeType>;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly connectorLine: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly load: {
        readonly type: import("vue").PropType<(node: TreeNode, resolve: (data: TreeNodeData[]) => void) => void>;
        readonly default: undefined;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(value: string, data: TreeNodeData, node: TreeNode) => boolean>;
        readonly default: undefined;
    };
    readonly expandIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly collapseIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly leafIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly nodeIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: TreeNode) => import("vue").Component | string | undefined)>;
        readonly default: undefined;
    };
    readonly showNodeIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{
    "onNode-click"?: ((data: TreeNodeData, node: TreeNode) => any) | undefined;
    "onNode-expand"?: ((data: TreeNodeData, node: TreeNode) => any) | undefined;
    "onNode-collapse"?: ((data: TreeNodeData, node: TreeNode) => any) | undefined;
    "onCheck-change"?: ((data: TreeNodeData, checked: boolean) => any) | undefined;
    "onUpdate:checkedKeys"?: ((keys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((keys: (string | number)[]) => any) | undefined;
}>, {
    readonly data: TreeNodeData[];
    readonly props: import("packages/cyberpunk-vue").TreeFieldProps;
    readonly type: import("packages/cyberpunk-vue").TreeType;
    readonly color: string;
    readonly load: (node: TreeNode, resolve: (data: TreeNodeData[]) => void) => void;
    readonly lazy: boolean;
    readonly showCheckbox: boolean;
    readonly checkStrictly: boolean;
    readonly defaultExpandAll: boolean;
    readonly defaultExpandedKeys: (string | number)[];
    readonly expandedKeys: (string | number)[];
    readonly checkedKeys: (string | number)[];
    readonly accordion: boolean;
    readonly indent: number;
    readonly nodeKey: string;
    readonly highlightCurrent: boolean;
    readonly connectorLine: boolean;
    readonly filterMethod: (value: string, data: TreeNodeData, node: TreeNode) => boolean;
    readonly expandIcon: import("vue").Component | ((node: TreeNode) => import("vue").Component);
    readonly collapseIcon: import("vue").Component | ((node: TreeNode) => import("vue").Component);
    readonly leafIcon: import("vue").Component | ((node: TreeNode) => import("vue").Component);
    readonly nodeIcon: import("vue").Component | ((node: TreeNode) => import("vue").Component | string | undefined);
    readonly showNodeIcon: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
