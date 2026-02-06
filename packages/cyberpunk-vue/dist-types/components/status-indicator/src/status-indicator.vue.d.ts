declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorShape>;
        readonly default: "dot";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly animation: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorAnimation>;
        readonly default: "none";
    };
    readonly duration: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1500;
    };
    readonly intensity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly gap: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "";
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorShape>;
        readonly default: "dot";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly animation: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorAnimation>;
        readonly default: "none";
    };
    readonly duration: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1500;
    };
    readonly intensity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly gap: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "";
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").StatusIndicatorType;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").StatusIndicatorShape;
    readonly label: string;
    readonly duration: string | number;
    readonly animation: import("packages/cyberpunk-vue").StatusIndicatorAnimation;
    readonly gap: string | number;
    readonly intensity: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
