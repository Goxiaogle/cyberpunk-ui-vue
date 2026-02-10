/**
 * CpRadio 赛博朋克风格单选框
 *
 * 用于单选场景，支持分组、自定义颜色、八边形指示器设计。
 *
 * @example
 * ```vue
 * <CpRadio v-model="picked" value="A">选项 A</CpRadio>
 * ```
 *
 * @see {@link RadioProps} 查看所有可用属性
 */
export declare const CpRadio: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
            readonly default: undefined;
        };
        readonly value: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
            readonly default: undefined;
        };
        readonly label: {
            readonly type: import("vue").PropType<string | number>;
            readonly default: "";
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
        readonly glow: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly dotColor: {
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
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        checked: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("packages/cyberpunk-vue").RadioValueType) => void;
        change: (value: import("packages/cyberpunk-vue").RadioValueType) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly name: string;
        readonly value: import("packages/cyberpunk-vue").RadioValueType;
        readonly type: import("packages/cyberpunk-vue").RadioType;
        readonly disabled: boolean;
        readonly color: string;
        readonly label: string | number;
        readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
        readonly border: boolean;
        readonly glow: boolean;
        readonly dotColor: string;
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
        readonly value: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
            readonly default: undefined;
        };
        readonly label: {
            readonly type: import("vue").PropType<string | number>;
            readonly default: "";
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
        readonly glow: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly dotColor: {
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
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        checked: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly name: string;
        readonly value: import("packages/cyberpunk-vue").RadioValueType;
        readonly type: import("packages/cyberpunk-vue").RadioType;
        readonly disabled: boolean;
        readonly color: string;
        readonly label: string | number;
        readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
        readonly border: boolean;
        readonly glow: boolean;
        readonly dotColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly value: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RadioValueType>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
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
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly dotColor: {
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
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    checked: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("packages/cyberpunk-vue").RadioValueType) => void;
    change: (value: import("packages/cyberpunk-vue").RadioValueType) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly name: string;
    readonly value: import("packages/cyberpunk-vue").RadioValueType;
    readonly type: import("packages/cyberpunk-vue").RadioType;
    readonly disabled: boolean;
    readonly color: string;
    readonly label: string | number;
    readonly modelValue: import("packages/cyberpunk-vue").RadioValueType;
    readonly border: boolean;
    readonly glow: boolean;
    readonly dotColor: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpRadio;
export * from './src/radio';
export type { RadioInstance } from './src/instance';
