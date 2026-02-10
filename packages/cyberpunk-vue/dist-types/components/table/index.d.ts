/**
 * CpTable 数据表格组件
 *
 * @description 赛博朋克风格数据表格，支持排序、多选、条纹、边框、固定表头。
 * 配合 CpTableColumn 声明式定义列。
 *
 * @example
 * ```vue
 * <CpTable :data="tableData" stripe border>
 *   <CpTableColumn prop="name" label="姓名" />
 *   <CpTableColumn prop="age" label="年龄" sortable />
 * </CpTable>
 * ```
 */
export declare const CpTable: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly data: {
            readonly type: import("vue").PropType<any[]>;
            readonly default: () => never[];
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TableSize>;
            readonly default: "md";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TableType>;
            readonly default: "default";
        };
        readonly stripe: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly highlightCurrentRow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly height: {
            readonly type: import("vue").PropType<string | number>;
        };
        readonly maxHeight: {
            readonly type: import("vue").PropType<string | number>;
        };
        readonly emptyText: {
            readonly type: StringConstructor;
            readonly default: "暂无数据";
        };
        readonly rowKey: {
            readonly type: import("vue").PropType<string | ((row: any) => string | number)>;
            readonly default: "id";
        };
        readonly defaultSort: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SortState>;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly showHeader: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{
        onSelect?: ((selection: any[], row: any) => any) | undefined;
        "onSelect-all"?: ((selection: any[]) => any) | undefined;
        "onSort-change"?: ((sortState: import("packages/cyberpunk-vue").SortState) => any) | undefined;
        "onRow-click"?: ((row: any, index: number, event: MouseEvent) => any) | undefined;
        "onSelection-change"?: ((selection: any[]) => any) | undefined;
        "onCurrent-change"?: ((currentRow: any, oldRow: any) => any) | undefined;
    }>, {
        clearSelection: () => void;
        getSelectionRows: () => any[];
        sort: (prop: string, order: import("packages/cyberpunk-vue").SortOrder) => void;
        setCurrentRow: (row: any) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (selection: any[], row: any) => void;
        "select-all": (selection: any[]) => void;
        "sort-change": (sortState: import("packages/cyberpunk-vue").SortState) => void;
        "row-click": (row: any, index: number, event: MouseEvent) => void;
        "selection-change": (selection: any[]) => void;
        "current-change": (currentRow: any, oldRow: any) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly data: any[];
        readonly type: import("packages/cyberpunk-vue").TableType;
        readonly color: string;
        readonly border: boolean;
        readonly showHeader: boolean;
        readonly stripe: boolean;
        readonly highlightCurrentRow: boolean;
        readonly emptyText: string;
        readonly rowKey: string | ((row: any) => string | number);
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly data: {
            readonly type: import("vue").PropType<any[]>;
            readonly default: () => never[];
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TableSize>;
            readonly default: "md";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TableType>;
            readonly default: "default";
        };
        readonly stripe: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly highlightCurrentRow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly height: {
            readonly type: import("vue").PropType<string | number>;
        };
        readonly maxHeight: {
            readonly type: import("vue").PropType<string | number>;
        };
        readonly emptyText: {
            readonly type: StringConstructor;
            readonly default: "暂无数据";
        };
        readonly rowKey: {
            readonly type: import("vue").PropType<string | ((row: any) => string | number)>;
            readonly default: "id";
        };
        readonly defaultSort: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SortState>;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly showHeader: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{
        onSelect?: ((selection: any[], row: any) => any) | undefined;
        "onSelect-all"?: ((selection: any[]) => any) | undefined;
        "onSort-change"?: ((sortState: import("packages/cyberpunk-vue").SortState) => any) | undefined;
        "onRow-click"?: ((row: any, index: number, event: MouseEvent) => any) | undefined;
        "onSelection-change"?: ((selection: any[]) => any) | undefined;
        "onCurrent-change"?: ((currentRow: any, oldRow: any) => any) | undefined;
    }>, {
        clearSelection: () => void;
        getSelectionRows: () => any[];
        sort: (prop: string, order: import("packages/cyberpunk-vue").SortOrder) => void;
        setCurrentRow: (row: any) => void;
    }, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly data: any[];
        readonly type: import("packages/cyberpunk-vue").TableType;
        readonly color: string;
        readonly border: boolean;
        readonly showHeader: boolean;
        readonly stripe: boolean;
        readonly highlightCurrentRow: boolean;
        readonly emptyText: string;
        readonly rowKey: string | ((row: any) => string | number);
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<any[]>;
        readonly default: () => never[];
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TableSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TableType>;
        readonly default: "default";
    };
    readonly stripe: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly highlightCurrentRow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly height: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly maxHeight: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly emptyText: {
        readonly type: StringConstructor;
        readonly default: "暂无数据";
    };
    readonly rowKey: {
        readonly type: import("vue").PropType<string | ((row: any) => string | number)>;
        readonly default: "id";
    };
    readonly defaultSort: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SortState>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showHeader: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{
    onSelect?: ((selection: any[], row: any) => any) | undefined;
    "onSelect-all"?: ((selection: any[]) => any) | undefined;
    "onSort-change"?: ((sortState: import("packages/cyberpunk-vue").SortState) => any) | undefined;
    "onRow-click"?: ((row: any, index: number, event: MouseEvent) => any) | undefined;
    "onSelection-change"?: ((selection: any[]) => any) | undefined;
    "onCurrent-change"?: ((currentRow: any, oldRow: any) => any) | undefined;
}>, {
    clearSelection: () => void;
    getSelectionRows: () => any[];
    sort: (prop: string, order: import("packages/cyberpunk-vue").SortOrder) => void;
    setCurrentRow: (row: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selection: any[], row: any) => void;
    "select-all": (selection: any[]) => void;
    "sort-change": (sortState: import("packages/cyberpunk-vue").SortState) => void;
    "row-click": (row: any, index: number, event: MouseEvent) => void;
    "selection-change": (selection: any[]) => void;
    "current-change": (currentRow: any, oldRow: any) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly data: any[];
    readonly type: import("packages/cyberpunk-vue").TableType;
    readonly color: string;
    readonly border: boolean;
    readonly showHeader: boolean;
    readonly stripe: boolean;
    readonly highlightCurrentRow: boolean;
    readonly emptyText: string;
    readonly rowKey: string | ((row: any) => string | number);
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        empty?: (props: {}) => any;
    };
})>;
export default CpTable;
export * from './src/table';
export type { CpTableInstance } from './src/instance';
