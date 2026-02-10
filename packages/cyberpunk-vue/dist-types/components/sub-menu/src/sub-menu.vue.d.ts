declare var __VLS_1: {}, __VLS_3: {}, __VLS_9: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_1) => any;
} & {
    title?: (props: typeof __VLS_3) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly index: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly index: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{}>, {
    readonly disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
