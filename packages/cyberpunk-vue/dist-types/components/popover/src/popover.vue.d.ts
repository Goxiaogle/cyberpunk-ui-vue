import type { PopoverVariant } from './popover';
declare var __VLS_1: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly placement: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PopoverPlacement>;
        readonly default: "top";
    };
    readonly trigger: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PopoverTrigger>;
        readonly default: "hover";
    };
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showArrow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly tooltip: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly openDelay: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly closeDelay: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly width: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "auto";
    };
    readonly maxWidth: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 300;
    };
    readonly closeOnClickOutside: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnEscape: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly teleportTo: {
        readonly type: import("vue").PropType<string | HTMLElement>;
        readonly default: "body";
    };
    readonly variant: {
        readonly type: import("vue").PropType<PopoverVariant>;
        readonly default: "solid";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PopoverType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, {
    /** @description 打开弹层 */
    open: () => void;
    /** @description 关闭弹层 */
    close: () => void;
    /** @description 切换弹层 */
    toggle: () => void;
    /** @description 更新位置 */
    updatePosition: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    close: () => void;
    open: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly placement: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PopoverPlacement>;
        readonly default: "top";
    };
    readonly trigger: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PopoverTrigger>;
        readonly default: "hover";
    };
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showArrow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly tooltip: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly openDelay: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly closeDelay: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly width: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "auto";
    };
    readonly maxWidth: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 300;
    };
    readonly closeOnClickOutside: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnEscape: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly teleportTo: {
        readonly type: import("vue").PropType<string | HTMLElement>;
        readonly default: "body";
    };
    readonly variant: {
        readonly type: import("vue").PropType<PopoverVariant>;
        readonly default: "solid";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PopoverType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {
    readonly width: string | number;
    readonly type: import("packages/cyberpunk-vue").PopoverType;
    readonly variant: PopoverVariant;
    readonly disabled: boolean;
    readonly color: string;
    readonly title: string;
    readonly content: string;
    readonly modelValue: boolean;
    readonly tooltip: boolean;
    readonly maxWidth: string | number;
    readonly offset: number;
    readonly placement: import("packages/cyberpunk-vue").PopoverPlacement;
    readonly trigger: import("packages/cyberpunk-vue").PopoverTrigger;
    readonly showArrow: boolean;
    readonly openDelay: number;
    readonly closeDelay: number;
    readonly closeOnClickOutside: boolean;
    readonly closeOnEscape: boolean;
    readonly teleportTo: string | HTMLElement;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
