/**
 * CpRadioGroup 单选框组
 *
 * 用于管理多个 CpRadio 的选中状态。
 *
 * @example
 * ```vue
 * <CpRadioGroup v-model="picked">
 *   <CpRadio value="A">选项 A</CpRadio>
 *   <CpRadio value="B">选项 B</CpRadio>
 * </CpRadioGroup>
 * ```
 *
 * @see {@link RadioGroupProps} 查看所有可用属性
 */
export declare const CpRadioGroup: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
            readonly default: undefined;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").Size>;
            readonly default: "md";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioType>;
            readonly default: "primary";
        };
        readonly direction: {
            readonly type: import("vue").PropType<"horizontal" | "vertical">;
            readonly default: "horizontal";
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
        onChange?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
    }>, {
        modelValue: import("vue").Ref<import("packages/cyberpunk-vue").RadioValueType | undefined, import("packages/cyberpunk-vue").RadioValueType | undefined>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("packages/cyberpunk-vue").RadioValueType) => void;
        change: (value: import("packages/cyberpunk-vue").RadioValueType) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").RadioType;
        readonly disabled: boolean;
        readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
        readonly direction: "vertical" | "horizontal";
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
            readonly default: undefined;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").Size>;
            readonly default: "md";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioType>;
            readonly default: "primary";
        };
        readonly direction: {
            readonly type: import("vue").PropType<"horizontal" | "vertical">;
            readonly default: "horizontal";
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
        onChange?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
    }>, {
        modelValue: import("vue").Ref<import("packages/cyberpunk-vue").RadioValueType | undefined, import("packages/cyberpunk-vue").RadioValueType | undefined>;
    }, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").RadioType;
        readonly disabled: boolean;
        readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
        readonly direction: "vertical" | "horizontal";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").Size>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioType>;
        readonly default: "primary";
    };
    readonly direction: {
        readonly type: import("vue").PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
    onChange?: ((value: import("packages/cyberpunk-vue").RadioValueType) => any) | undefined;
}>, {
    modelValue: import("vue").Ref<import("packages/cyberpunk-vue").RadioValueType | undefined, import("packages/cyberpunk-vue").RadioValueType | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("packages/cyberpunk-vue").RadioValueType) => void;
    change: (value: import("packages/cyberpunk-vue").RadioValueType) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").RadioType;
    readonly disabled: boolean;
    readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
    readonly direction: "vertical" | "horizontal";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpRadioGroup;
export * from './src/radio-group';
export * from './src/constants';
export type { RadioGroupInstance } from './src/instance';
