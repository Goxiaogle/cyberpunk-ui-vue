/**
 * CpDropdown 赛博朋克风格下拉选择器
 *
 * 支持多种尺寸、形态变体、可搜索/可清空功能。具有特色的切角造型。
 *
 * @example
 * ```vue
 * <CpDropdown v-model="value" :options="options" placeholder="请选择" />
 * <CpDropdown v-model="search" filterable clearable />
 * ```
 *
 * @see {@link DropdownProps} 查看所有可用属性
 *
 * @slot default - 自定义选项内容
 * @slot prefix - 触发器前缀
 * @slot empty - 无选项时的空状态
 */
export declare const CpDropdown: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import("vue").PropType<string | number>;
            readonly default: "";
        };
        readonly options: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownOption[]>;
            readonly default: () => never[];
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请选择";
        };
        readonly filterPlaceholder: {
            readonly type: StringConstructor;
            readonly default: "搜索...";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly clearable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly filterable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownSize>;
            readonly default: "md";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownShape>;
            readonly default: "clip";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownVariant>;
            readonly default: "outline";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly inactiveColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholderColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly inline: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly placement: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownPlacement>;
            readonly default: "bottom-start";
        };
        readonly teleportTo: {
            readonly type: import("vue").PropType<string | HTMLElement>;
            readonly default: "body";
        };
        readonly maxHeight: {
            readonly type: NumberConstructor;
            readonly default: 256;
        };
        readonly noMatchText: {
            readonly type: StringConstructor;
            readonly default: "无匹配数据";
        };
        readonly noDataText: {
            readonly type: StringConstructor;
            readonly default: "无数据";
        };
        readonly clearDuration: {
            readonly type: NumberConstructor;
            readonly default: 150;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onFocus?: (() => any) | undefined;
        onBlur?: (() => any) | undefined;
        onVisibleChange?: ((visible: boolean) => any) | undefined;
    }>, {
        open: () => void;
        close: () => void;
        toggle: () => void;
        focus: () => void;
        blur: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        clear: () => void;
        "update:modelValue": (value: string | number) => void;
        change: (value: string | number) => void;
        focus: () => void;
        blur: () => void;
        visibleChange: (visible: boolean) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly variant: import("packages/cyberpunk-vue").DropdownVariant;
        readonly disabled: boolean;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").DropdownShape;
        readonly placeholder: string;
        readonly modelValue: string | number;
        readonly clearable: boolean;
        readonly placeholderColor: string;
        readonly clearDuration: number;
        readonly maxHeight: number;
        readonly inline: boolean;
        readonly inactiveColor: string;
        readonly placement: import("packages/cyberpunk-vue").DropdownPlacement;
        readonly teleportTo: string | HTMLElement;
        readonly options: import("packages/cyberpunk-vue").DropdownOption[];
        readonly filterPlaceholder: string;
        readonly filterable: boolean;
        readonly noMatchText: string;
        readonly noDataText: string;
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
        readonly options: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownOption[]>;
            readonly default: () => never[];
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请选择";
        };
        readonly filterPlaceholder: {
            readonly type: StringConstructor;
            readonly default: "搜索...";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly clearable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly filterable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownSize>;
            readonly default: "md";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownShape>;
            readonly default: "clip";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownVariant>;
            readonly default: "outline";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly inactiveColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholderColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly inline: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly placement: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownPlacement>;
            readonly default: "bottom-start";
        };
        readonly teleportTo: {
            readonly type: import("vue").PropType<string | HTMLElement>;
            readonly default: "body";
        };
        readonly maxHeight: {
            readonly type: NumberConstructor;
            readonly default: 256;
        };
        readonly noMatchText: {
            readonly type: StringConstructor;
            readonly default: "无匹配数据";
        };
        readonly noDataText: {
            readonly type: StringConstructor;
            readonly default: "无数据";
        };
        readonly clearDuration: {
            readonly type: NumberConstructor;
            readonly default: 150;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onFocus?: (() => any) | undefined;
        onBlur?: (() => any) | undefined;
        onVisibleChange?: ((visible: boolean) => any) | undefined;
    }>, {
        open: () => void;
        close: () => void;
        toggle: () => void;
        focus: () => void;
        blur: () => void;
    }, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly variant: import("packages/cyberpunk-vue").DropdownVariant;
        readonly disabled: boolean;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").DropdownShape;
        readonly placeholder: string;
        readonly modelValue: string | number;
        readonly clearable: boolean;
        readonly placeholderColor: string;
        readonly clearDuration: number;
        readonly maxHeight: number;
        readonly inline: boolean;
        readonly inactiveColor: string;
        readonly placement: import("packages/cyberpunk-vue").DropdownPlacement;
        readonly teleportTo: string | HTMLElement;
        readonly options: import("packages/cyberpunk-vue").DropdownOption[];
        readonly filterPlaceholder: string;
        readonly filterable: boolean;
        readonly noMatchText: string;
        readonly noDataText: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly options: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownOption[]>;
        readonly default: () => never[];
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "请选择";
    };
    readonly filterPlaceholder: {
        readonly type: StringConstructor;
        readonly default: "搜索...";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly filterable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownShape>;
        readonly default: "clip";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownVariant>;
        readonly default: "outline";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly inactiveColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly inline: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placement: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DropdownPlacement>;
        readonly default: "bottom-start";
    };
    readonly teleportTo: {
        readonly type: import("vue").PropType<string | HTMLElement>;
        readonly default: "body";
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
        readonly default: 256;
    };
    readonly noMatchText: {
        readonly type: StringConstructor;
        readonly default: "无匹配数据";
    };
    readonly noDataText: {
        readonly type: StringConstructor;
        readonly default: "无数据";
    };
    readonly clearDuration: {
        readonly type: NumberConstructor;
        readonly default: 150;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onFocus?: (() => any) | undefined;
    onBlur?: (() => any) | undefined;
    onVisibleChange?: ((visible: boolean) => any) | undefined;
}>, {
    open: () => void;
    close: () => void;
    toggle: () => void;
    focus: () => void;
    blur: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => void;
    "update:modelValue": (value: string | number) => void;
    change: (value: string | number) => void;
    focus: () => void;
    blur: () => void;
    visibleChange: (visible: boolean) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly variant: import("packages/cyberpunk-vue").DropdownVariant;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").DropdownShape;
    readonly placeholder: string;
    readonly modelValue: string | number;
    readonly clearable: boolean;
    readonly placeholderColor: string;
    readonly clearDuration: number;
    readonly maxHeight: number;
    readonly inline: boolean;
    readonly inactiveColor: string;
    readonly placement: import("packages/cyberpunk-vue").DropdownPlacement;
    readonly teleportTo: string | HTMLElement;
    readonly options: import("packages/cyberpunk-vue").DropdownOption[];
    readonly filterPlaceholder: string;
    readonly filterable: boolean;
    readonly noMatchText: string;
    readonly noDataText: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        empty?: (props: {}) => any;
    } & {
        default?: (props: {
            option: import("packages/cyberpunk-vue").DropdownOption;
        }) => any;
    };
})>;
export default CpDropdown;
export * from './src/dropdown';
export type { DropdownInstance } from './src/instance';
