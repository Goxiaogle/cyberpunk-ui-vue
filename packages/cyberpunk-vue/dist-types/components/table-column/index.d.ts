/**
 * CpTableColumn 表格列定义组件
 *
 * @description 配合 CpTable 使用，声明式定义表格列。
 *
 * @example
 * ```vue
 * <CpTableColumn prop="name" label="姓名" sortable />
 * <CpTableColumn type="selection" />
 * ```
 */
export declare const CpTableColumn: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ColumnType>;
        readonly default: "default";
    };
    readonly prop: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly minWidth: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly sortable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly align: {
        readonly type: import("vue").PropType<"left" | "center" | "right">;
        readonly default: "left";
    };
    readonly headerAlign: {
        readonly type: import("vue").PropType<"left" | "center" | "right" | "">;
        readonly default: "";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ColumnType>;
        readonly default: "default";
    };
    readonly prop: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly minWidth: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly sortable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly align: {
        readonly type: import("vue").PropType<"left" | "center" | "right">;
        readonly default: "left";
    };
    readonly headerAlign: {
        readonly type: import("vue").PropType<"left" | "center" | "right" | "">;
        readonly default: "";
    };
}>> & Readonly<{}>, {
    readonly type: import("packages/cyberpunk-vue").ColumnType;
    readonly label: string;
    readonly align: "right" | "left" | "center";
    readonly prop: string;
    readonly sortable: boolean;
    readonly headerAlign: "" | "right" | "left" | "center";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpTableColumn;
export * from './src/table-column';
export type { CpTableColumnInstance } from './src/instance';
