/**
 * CpTree 赛博朋克风格树形控件
 *
 * 用于展示层级数据，支持展开/收起、复选框级联、手风琴模式。
 *
 * @example
 * ```vue
 * <CpTree :data="treeData" show-checkbox />
 * ```
 *
 * @see {@link TreeProps} 查看所有可用属性
 */
export declare const CpTree: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly data: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeNodeData[]>;
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
            readonly type: import("vue").PropType<(node: import("packages/cyberpunk-vue").TreeNode, resolve: (data: import("packages/cyberpunk-vue").TreeNodeData[]) => void) => void>;
            readonly default: undefined;
        };
        readonly filterMethod: {
            readonly type: import("vue").PropType<(value: string, data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => boolean>;
            readonly default: undefined;
        };
        readonly expandIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
            readonly default: undefined;
        };
        readonly collapseIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
            readonly default: undefined;
        };
        readonly leafIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
            readonly default: undefined;
        };
        readonly nodeIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component | string | undefined)>;
            readonly default: undefined;
        };
        readonly showNodeIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{
        "onNode-click"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
        "onNode-expand"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
        "onNode-collapse"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
        "onCheck-change"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, checked: boolean) => any) | undefined;
        "onUpdate:checkedKeys"?: ((keys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((keys: (string | number)[]) => any) | undefined;
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
                [x: string]: any;
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
        }[], import("packages/cyberpunk-vue").TreeNode[] | {
            key: string | number;
            label: string;
            level: number;
            data: {
                [x: string]: any;
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
        "node-click": (data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => void;
        "node-expand": (data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => void;
        "node-collapse": (data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => void;
        "check-change": (data: import("packages/cyberpunk-vue").TreeNodeData, checked: boolean) => void;
        "update:checkedKeys": (keys: (string | number)[]) => void;
        "update:expandedKeys": (keys: (string | number)[]) => void;
    }, import("vue").PublicProps, {
        readonly data: import("packages/cyberpunk-vue").TreeNodeData[];
        readonly props: import("packages/cyberpunk-vue").TreeFieldProps;
        readonly type: import("packages/cyberpunk-vue").TreeType;
        readonly color: string;
        readonly load: (node: import("packages/cyberpunk-vue").TreeNode, resolve: (data: import("packages/cyberpunk-vue").TreeNodeData[]) => void) => void;
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
        readonly filterMethod: (value: string, data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => boolean;
        readonly expandIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
        readonly collapseIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
        readonly leafIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
        readonly nodeIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component | string | undefined);
        readonly showNodeIcon: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly data: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeNodeData[]>;
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
            readonly type: import("vue").PropType<(node: import("packages/cyberpunk-vue").TreeNode, resolve: (data: import("packages/cyberpunk-vue").TreeNodeData[]) => void) => void>;
            readonly default: undefined;
        };
        readonly filterMethod: {
            readonly type: import("vue").PropType<(value: string, data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => boolean>;
            readonly default: undefined;
        };
        readonly expandIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
            readonly default: undefined;
        };
        readonly collapseIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
            readonly default: undefined;
        };
        readonly leafIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
            readonly default: undefined;
        };
        readonly nodeIcon: {
            readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component | string | undefined)>;
            readonly default: undefined;
        };
        readonly showNodeIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{
        "onNode-click"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
        "onNode-expand"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
        "onNode-collapse"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
        "onCheck-change"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, checked: boolean) => any) | undefined;
        "onUpdate:checkedKeys"?: ((keys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((keys: (string | number)[]) => any) | undefined;
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
                [x: string]: any;
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
        }[], import("packages/cyberpunk-vue").TreeNode[] | {
            key: string | number;
            label: string;
            level: number;
            data: {
                [x: string]: any;
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
    }, {}, {}, {}, {
        readonly data: import("packages/cyberpunk-vue").TreeNodeData[];
        readonly props: import("packages/cyberpunk-vue").TreeFieldProps;
        readonly type: import("packages/cyberpunk-vue").TreeType;
        readonly color: string;
        readonly load: (node: import("packages/cyberpunk-vue").TreeNode, resolve: (data: import("packages/cyberpunk-vue").TreeNodeData[]) => void) => void;
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
        readonly filterMethod: (value: string, data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => boolean;
        readonly expandIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
        readonly collapseIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
        readonly leafIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
        readonly nodeIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component | string | undefined);
        readonly showNodeIcon: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TreeNodeData[]>;
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
        readonly type: import("vue").PropType<(node: import("packages/cyberpunk-vue").TreeNode, resolve: (data: import("packages/cyberpunk-vue").TreeNodeData[]) => void) => void>;
        readonly default: undefined;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(value: string, data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => boolean>;
        readonly default: undefined;
    };
    readonly expandIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly collapseIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly leafIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component)>;
        readonly default: undefined;
    };
    readonly nodeIcon: {
        readonly type: import("vue").PropType<import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component | string | undefined)>;
        readonly default: undefined;
    };
    readonly showNodeIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{
    "onNode-click"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
    "onNode-expand"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
    "onNode-collapse"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => any) | undefined;
    "onCheck-change"?: ((data: import("packages/cyberpunk-vue").TreeNodeData, checked: boolean) => any) | undefined;
    "onUpdate:checkedKeys"?: ((keys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((keys: (string | number)[]) => any) | undefined;
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
            [x: string]: any;
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
    }[], import("packages/cyberpunk-vue").TreeNode[] | {
        key: string | number;
        label: string;
        level: number;
        data: {
            [x: string]: any;
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
    "node-click": (data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => void;
    "node-expand": (data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => void;
    "node-collapse": (data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => void;
    "check-change": (data: import("packages/cyberpunk-vue").TreeNodeData, checked: boolean) => void;
    "update:checkedKeys": (keys: (string | number)[]) => void;
    "update:expandedKeys": (keys: (string | number)[]) => void;
}, string, {
    readonly data: import("packages/cyberpunk-vue").TreeNodeData[];
    readonly props: import("packages/cyberpunk-vue").TreeFieldProps;
    readonly type: import("packages/cyberpunk-vue").TreeType;
    readonly color: string;
    readonly load: (node: import("packages/cyberpunk-vue").TreeNode, resolve: (data: import("packages/cyberpunk-vue").TreeNodeData[]) => void) => void;
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
    readonly filterMethod: (value: string, data: import("packages/cyberpunk-vue").TreeNodeData, node: import("packages/cyberpunk-vue").TreeNode) => boolean;
    readonly expandIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
    readonly collapseIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
    readonly leafIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component);
    readonly nodeIcon: import("vue").Component | ((node: import("packages/cyberpunk-vue").TreeNode) => import("vue").Component | string | undefined);
    readonly showNodeIcon: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        empty?: (props: {}) => any;
    };
})>;
export default CpTree;
export * from './src/tree';
export type { TreeInstance } from './src/instance';
