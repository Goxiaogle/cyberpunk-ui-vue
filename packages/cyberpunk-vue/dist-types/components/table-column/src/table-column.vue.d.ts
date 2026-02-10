declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
