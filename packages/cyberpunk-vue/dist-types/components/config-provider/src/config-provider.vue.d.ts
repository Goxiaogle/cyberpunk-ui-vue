declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly defaults: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ComponentDefaults>;
        readonly default: () => {};
    };
    readonly theme: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/constants").ThemeType>;
        readonly default: "dark";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly defaults: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ComponentDefaults>;
        readonly default: () => {};
    };
    readonly theme: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/constants").ThemeType>;
        readonly default: "dark";
    };
}>> & Readonly<{}>, {
    readonly defaults: import("packages/cyberpunk-vue").ComponentDefaults;
    readonly theme: import("@cyberpunk-vue/constants").ThemeType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
