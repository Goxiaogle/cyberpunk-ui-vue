declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconSize | string | number>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly tag: {
        readonly type: import("vue").PropType<"i" | "span" | "div">;
        readonly default: "i";
    };
    readonly spin: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconSize | string | number>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly tag: {
        readonly type: import("vue").PropType<"i" | "span" | "div">;
        readonly default: "i";
    };
    readonly spin: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{}>, {
    readonly size: string | number;
    readonly type: import("packages/cyberpunk-vue").IconType;
    readonly color: string;
    readonly icon: import("packages/cyberpunk-vue").IconValue;
    readonly tag: "div" | "i" | "span";
    readonly spin: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
