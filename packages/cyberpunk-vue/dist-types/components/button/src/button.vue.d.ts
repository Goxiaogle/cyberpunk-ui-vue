declare var __VLS_21: {}, __VLS_27: {}, __VLS_29: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_21) => any;
} & {
    default?: (props: typeof __VLS_27) => any;
} & {
    suffix?: (props: typeof __VLS_29) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
        readonly default: "solid";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly nativeType: {
        readonly type: import("vue").PropType<"button" | "submit" | "reset">;
        readonly default: "button";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shape: {
        readonly type: import("vue").PropType<"clip" | "no-clip" | "round" | "circle">;
        readonly default: "clip";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingPlaceholder: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly icon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly iconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly prefixIcon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly suffixIcon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly prefixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly iconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
    readonly prefixIconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
    readonly suffixIconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
        readonly default: "solid";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly nativeType: {
        readonly type: import("vue").PropType<"button" | "submit" | "reset">;
        readonly default: "button";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shape: {
        readonly type: import("vue").PropType<"clip" | "no-clip" | "round" | "circle">;
        readonly default: "clip";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingPlaceholder: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly icon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly iconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly prefixIcon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly suffixIcon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly prefixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly iconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
    readonly prefixIconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
    readonly suffixIconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
}>> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").ButtonType;
    readonly variant: import("packages/cyberpunk-vue").ButtonVariant;
    readonly disabled: boolean;
    readonly loading: boolean;
    readonly block: boolean;
    readonly nativeType: "button" | "submit" | "reset";
    readonly color: string;
    readonly shape: "clip" | "no-clip" | "round" | "circle";
    readonly dashed: boolean;
    readonly loadingPlaceholder: boolean;
    readonly loadingDisabled: boolean;
    readonly textColor: string;
    readonly icon: object;
    readonly square: boolean;
    readonly iconColor: string;
    readonly prefixIcon: object;
    readonly suffixIcon: object;
    readonly prefixIconColor: string;
    readonly suffixIconColor: string;
    readonly iconSize: import("@cyberpunk-vue/hooks").Size;
    readonly prefixIconSize: import("@cyberpunk-vue/hooks").Size;
    readonly suffixIconSize: import("@cyberpunk-vue/hooks").Size;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
