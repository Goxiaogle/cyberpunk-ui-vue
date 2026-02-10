/**
 * CpCheckbox 赛博朋克风格复选框
 *
 * 用于多选场景，支持半选状态、分组、自定义颜色。
 *
 * @example
 * ```vue
 * <CpCheckbox v-model="checked">同意协议</CpCheckbox>
 * ```
 *
 * @see {@link CheckboxProps} 查看所有可用属性
 */
export declare const CpCheckbox: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        checked: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
        change: (value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        checked: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    checked: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
    change: (value: import("packages/cyberpunk-vue").CheckboxValueType | import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpCheckbox;
export * from './src/checkbox';
export type { CheckboxInstance } from './src/instance';
