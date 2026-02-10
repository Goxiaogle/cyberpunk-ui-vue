declare var __VLS_5: {}, __VLS_7: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_5) => any;
} & {
    title?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
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
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
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
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {
    readonly disabled: boolean;
    readonly icon: import("packages/cyberpunk-vue").IconValue;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
