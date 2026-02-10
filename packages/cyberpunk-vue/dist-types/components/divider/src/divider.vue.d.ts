declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly direction: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerDirection>;
        readonly default: "horizontal";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly contentPosition: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerContentPosition>;
        readonly default: "center";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerVariant>;
        readonly default: "solid";
    };
    readonly borderStyle: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerBorderStyle>;
        readonly default: "solid";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly thickness: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1;
    };
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly margin: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly direction: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerDirection>;
        readonly default: "horizontal";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly contentPosition: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerContentPosition>;
        readonly default: "center";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerVariant>;
        readonly default: "solid";
    };
    readonly borderStyle: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerBorderStyle>;
        readonly default: "solid";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly thickness: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1;
    };
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly margin: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "";
    };
}>> & Readonly<{}>, {
    readonly type: import("packages/cyberpunk-vue").DividerType;
    readonly variant: import("packages/cyberpunk-vue").DividerVariant;
    readonly color: string;
    readonly dashed: boolean;
    readonly direction: import("packages/cyberpunk-vue").DividerDirection;
    readonly borderStyle: import("packages/cyberpunk-vue").DividerBorderStyle;
    readonly margin: string | number;
    readonly glow: boolean;
    readonly contentPosition: import("packages/cyberpunk-vue").DividerContentPosition;
    readonly thickness: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
