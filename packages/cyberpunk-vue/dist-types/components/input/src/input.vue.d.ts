declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    suffix?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputType>;
        readonly default: "text";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputShape>;
        readonly default: "clip";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputVariant>;
        readonly default: "outline";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly inactiveBorderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly clearDuration: {
        readonly type: NumberConstructor;
        readonly default: 150;
    };
}>, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => void;
    input: (value: string | number, event: Event) => void;
    "update:modelValue": (value: string | number) => void;
    change: (value: string | number) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputType>;
        readonly default: "text";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputShape>;
        readonly default: "clip";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputVariant>;
        readonly default: "outline";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly inactiveBorderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly clearDuration: {
        readonly type: NumberConstructor;
        readonly default: 150;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onInput?: ((value: string | number, event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").InputType;
    readonly variant: import("packages/cyberpunk-vue").InputVariant;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").InputShape;
    readonly textColor: string;
    readonly placeholder: string;
    readonly modelValue: string | number;
    readonly readonly: boolean;
    readonly clearable: boolean;
    readonly maxlength: number;
    readonly autofocus: boolean;
    readonly showPassword: boolean;
    readonly showWordLimit: boolean;
    readonly inactiveBorderColor: string;
    readonly placeholderColor: string;
    readonly clearDuration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
