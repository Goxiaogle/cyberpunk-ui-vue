/**
 * CpCheckboxGroup 复选框组
 *
 * 用于管理多个 CpCheckbox 的选中状态。
 *
 * @example
 * ```vue
 * <CpCheckboxGroup v-model="selected">
 *   <CpCheckbox label="A">选项 A</CpCheckbox>
 *   <CpCheckbox label="B">选项 B</CpCheckbox>
 * </CpCheckboxGroup>
 * ```
 *
 * @see {@link CheckboxGroupProps} 查看所有可用属性
 */
export declare const CpCheckboxGroup: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType[]>;
            readonly default: () => never[];
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
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
            readonly default: "primary";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxShape>;
            readonly default: "clip";
        };
        readonly min: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly direction: {
            readonly type: import("vue").PropType<"horizontal" | "vertical">;
            readonly default: "horizontal";
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
        onChange?: ((value: import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
    }>, {
        modelValue: import("vue").Ref<import("packages/cyberpunk-vue").CheckboxValueType[], import("packages/cyberpunk-vue").CheckboxValueType[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
        change: (value: import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").CheckboxType;
        readonly disabled: boolean;
        readonly shape: import("packages/cyberpunk-vue").CheckboxShape;
        readonly modelValue: import("packages/cyberpunk-vue").CheckboxValueType[];
        readonly min: number;
        readonly max: number;
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
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType[]>;
            readonly default: () => never[];
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
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
            readonly default: "primary";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxShape>;
            readonly default: "clip";
        };
        readonly min: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly direction: {
            readonly type: import("vue").PropType<"horizontal" | "vertical">;
            readonly default: "horizontal";
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
        onChange?: ((value: import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
    }>, {
        modelValue: import("vue").Ref<import("packages/cyberpunk-vue").CheckboxValueType[], import("packages/cyberpunk-vue").CheckboxValueType[]>;
    }, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").CheckboxType;
        readonly disabled: boolean;
        readonly shape: import("packages/cyberpunk-vue").CheckboxShape;
        readonly modelValue: import("packages/cyberpunk-vue").CheckboxValueType[];
        readonly min: number;
        readonly max: number;
        readonly direction: "vertical" | "horizontal";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxValueType[]>;
        readonly default: () => never[];
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
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
        readonly default: "primary";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxShape>;
        readonly default: "clip";
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
    onChange?: ((value: import("packages/cyberpunk-vue").CheckboxValueType[]) => any) | undefined;
}>, {
    modelValue: import("vue").Ref<import("packages/cyberpunk-vue").CheckboxValueType[], import("packages/cyberpunk-vue").CheckboxValueType[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
    change: (value: import("packages/cyberpunk-vue").CheckboxValueType[]) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").CheckboxType;
    readonly disabled: boolean;
    readonly shape: import("packages/cyberpunk-vue").CheckboxShape;
    readonly modelValue: import("packages/cyberpunk-vue").CheckboxValueType[];
    readonly min: number;
    readonly max: number;
    readonly direction: "vertical" | "horizontal";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpCheckboxGroup;
export * from './src/checkbox-group';
export * from './src/constants';
export type { CheckboxGroupInstance } from './src/instance';
