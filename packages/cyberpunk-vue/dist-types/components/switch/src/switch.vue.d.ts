declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SwitchSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SwitchType>;
        readonly default: "primary";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly inactiveColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly fitText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly activeText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly inactiveText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<() => Promise<boolean> | boolean>;
        readonly default: undefined;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    change: (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SwitchSize>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SwitchType>;
        readonly default: "primary";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly inactiveColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly fitText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly activeText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly inactiveText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<() => Promise<boolean> | boolean>;
        readonly default: undefined;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly name: string;
    readonly width: string | number;
    readonly type: import("packages/cyberpunk-vue").SwitchType;
    readonly disabled: boolean;
    readonly loading: boolean;
    readonly color: string;
    readonly modelValue: boolean;
    readonly inactiveColor: string;
    readonly fitText: boolean;
    readonly activeText: string;
    readonly inactiveText: string;
    readonly beforeChange: () => Promise<boolean> | boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
