declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly precision: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputNumberSize>;
        readonly default: "md";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly controls: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly controlsPosition: {
        readonly type: import("vue").PropType<"right" | "both">;
        readonly default: "both";
    };
}>, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    change: (value: number, oldValue: number) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly precision: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").InputNumberSize>;
        readonly default: "md";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly controls: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly controlsPosition: {
        readonly type: import("vue").PropType<"right" | "both">;
        readonly default: "both";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number, oldValue: number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly disabled: boolean;
    readonly color: string;
    readonly placeholder: string;
    readonly modelValue: number;
    readonly readonly: boolean;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly precision: number;
    readonly controls: boolean;
    readonly controlsPosition: "right" | "both";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
