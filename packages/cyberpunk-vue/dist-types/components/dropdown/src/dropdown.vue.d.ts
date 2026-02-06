import { type DropdownOption } from './dropdown';
declare var __VLS_1: {}, __VLS_11: {}, __VLS_13: {
    option: DropdownOption;
};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    empty?: (props: typeof __VLS_11) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly options: {
        readonly type: import("vue").PropType<DropdownOption[]>;
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
}>, {
    /** @description 打开下拉面板 */
    open: () => void;
    /** @description 关闭下拉面板 */
    close: () => void;
    /** @description 切换下拉面板 */
    toggle: () => void;
    /** @description 使下拉框获取焦点 */
    focus: () => void;
    /** @description 使下拉框失去焦点 */
    blur: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => void;
    "update:modelValue": (value: string | number) => void;
    change: (value: string | number) => void;
    focus: () => void;
    blur: () => void;
    visibleChange: (visible: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly options: {
        readonly type: import("vue").PropType<DropdownOption[]>;
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
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onFocus?: (() => any) | undefined;
    onBlur?: (() => any) | undefined;
    onVisibleChange?: ((visible: boolean) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly variant: import("packages/cyberpunk-vue").DropdownVariant;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").DropdownShape;
    readonly placeholder: string;
    readonly modelValue: string | number;
    readonly clearable: boolean;
    readonly placeholderColor: string;
    readonly maxHeight: number;
    readonly inline: boolean;
    readonly inactiveColor: string;
    readonly placement: import("packages/cyberpunk-vue").DropdownPlacement;
    readonly teleportTo: string | HTMLElement;
    readonly options: DropdownOption[];
    readonly filterPlaceholder: string;
    readonly filterable: boolean;
    readonly noMatchText: string;
    readonly noDataText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
