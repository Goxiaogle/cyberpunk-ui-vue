/**
 * CpInput 赛博朋克风格输入框
 *
 * 支持多种尺寸、形态变体、可清空功能。具有特色的切角造型。
 *
 * @example
 * ```vue
 * <CpInput v-model="value" placeholder="请输入" />
 * <CpInput v-model="search" clearable>
 *   <template #prefix><CpIcon icon="mdi:magnify" /></template>
 * </CpInput>
 * ```
 *
 * @see {@link InputProps} 查看所有可用属性
 *
 * @slot prefix - 输入框前缀，常用于放置图标
 * @slot suffix - 输入框后缀，常用于放置图标或按钮
 */
export declare const CpInput: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        focus: () => void | undefined;
        blur: () => void | undefined;
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
})>;
export default CpInput;
export * from './src/input';
export type { InputInstance } from './src/instance';
