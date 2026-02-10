declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly push: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly push: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
}>> & Readonly<{}>, {
    readonly push: number;
    readonly span: number;
    readonly tag: string;
    readonly offset: number;
    readonly pull: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
