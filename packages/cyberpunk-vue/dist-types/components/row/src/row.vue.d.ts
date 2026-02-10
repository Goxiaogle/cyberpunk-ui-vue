declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly gutter: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly justify: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowJustify>;
        readonly default: "start";
    };
    readonly align: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowAlign>;
        readonly default: "top";
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly gutter: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly justify: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowJustify>;
        readonly default: "start";
    };
    readonly align: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowAlign>;
        readonly default: "top";
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{}>, {
    readonly tag: string;
    readonly wrap: boolean;
    readonly justify: import("packages/cyberpunk-vue").RowJustify;
    readonly align: import("packages/cyberpunk-vue").RowAlign;
    readonly gutter: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
