declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextareaSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextareaVariant>;
        readonly default: "outline";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly autosize: {
        readonly type: import("vue").PropType<boolean | {
            minRows
            /**
             * CpTextarea - 赛博朋克风格多行文本输入框
             */
            ?: number;
            maxRows
            /**
             * CpTextarea - 赛博朋克风格多行文本输入框
             */
            ?: number;
        }>;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    textareaRef: import("vue").Ref<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string, event: Event) => void;
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextareaSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextareaVariant>;
        readonly default: "outline";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly autosize: {
        readonly type: import("vue").PropType<boolean | {
            minRows
            /**
             * CpTextarea - 赛博朋克风格多行文本输入框
             */
            ?: number;
            maxRows
            /**
             * CpTextarea - 赛博朋克风格多行文本输入框
             */
            ?: number;
        }>;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{
    onInput?: ((value: string, event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly variant: import("packages/cyberpunk-vue").TextareaVariant;
    readonly disabled: boolean;
    readonly color: string;
    readonly textColor: string;
    readonly placeholder: string;
    readonly modelValue: string;
    readonly readonly: boolean;
    readonly maxlength: number;
    readonly showWordLimit: boolean;
    readonly rows: number;
    readonly autosize: boolean | {
        minRows?: number;
        maxRows?: number;
    };
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
