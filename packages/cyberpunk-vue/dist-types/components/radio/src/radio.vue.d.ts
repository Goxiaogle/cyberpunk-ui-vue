declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioType>;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, {
    /** @description input 元素引用 */
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    /** @description 是否选中 */
    checked: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("packages/cyberpunk-vue").RadioValueType) => void;
    change: (value: import("packages/cyberpunk-vue").RadioValueType) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioType>;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
    onChange?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly name: string;
    readonly type: import("packages/cyberpunk-vue").RadioType;
    readonly disabled: boolean;
    readonly color: string;
    readonly label: import("packages/cyberpunk-vue").RadioValueType;
    readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
    readonly border: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
