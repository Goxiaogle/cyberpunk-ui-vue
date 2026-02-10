declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType>;
        readonly default: undefined;
    };
    readonly trueValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType>;
        readonly default: true;
    };
    readonly falseValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType>;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly checkColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxShape>;
        readonly default: "clip";
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
    "update:modelValue": (value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
    change: (value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType>;
        readonly default: undefined;
    };
    readonly trueValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType>;
        readonly default: true;
    };
    readonly falseValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType>;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly checkColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxShape>;
        readonly default: "clip";
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
    "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
    onChange?: ((value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly name: string;
    readonly type: import("packages/cyberpunk-vue").CheckboxType;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").CheckboxShape;
    readonly label: import("packages/cyberpunk-vue").CheckboxValueType;
    readonly modelValue: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[];
    readonly indeterminate: boolean;
    readonly border: boolean;
    readonly trueValue: import("packages/cyberpunk-vue").CheckboxValueType;
    readonly falseValue: import("packages/cyberpunk-vue").CheckboxValueType;
    readonly checkColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
