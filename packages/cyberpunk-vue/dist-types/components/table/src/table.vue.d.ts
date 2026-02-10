import { type SortOrder, type SortState } from './table';
declare var __VLS_1: {}, __VLS_27: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    empty?: (props: typeof __VLS_27) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        readonly type: import("vue").PropType<SortState>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showHeader: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>, {
    /** 清空选择 */
    clearSelection: () => void;
    /** 获取选中行 */
    getSelectionRows: () => any[];
    /** 排序 */
    sort: (prop: string, order: SortOrder) => void;
    /** 设置当前行 */
    setCurrentRow: (row: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selection: any[], row: any) => void;
    "select-all": (selection: any[]) => void;
    "sort-change": (sortState: SortState) => void;
    "row-click": (row: any, index: number, event: MouseEvent) => void;
    "selection-change": (selection: any[]) => void;
    "current-change": (currentRow: any, oldRow: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        readonly type: import("vue").PropType<SortState>;
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
    "onSort-change"?: ((sortState: SortState) => any) | undefined;
    "onRow-click"?: ((row: any, index: number, event: MouseEvent) => any) | undefined;
    "onSelection-change"?: ((selection: any[]) => any) | undefined;
    "onCurrent-change"?: ((currentRow: any, oldRow: any) => any) | undefined;
}>, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
