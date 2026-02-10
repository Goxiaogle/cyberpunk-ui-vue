/**
 * CpDialog - 赛博朋克风格模态对话框
 * 支持多种变体、形状、主题色、拖拽，以及各区域的颜色/样式/class 自定义
 */
import { type CSSProperties } from 'vue';
import { type DialogBeforeCloseFn } from './dialog';
declare var __VLS_14: {}, __VLS_16: {}, __VLS_18: {}, __VLS_20: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_14) => any;
} & {
    title?: (props: typeof __VLS_16) => any;
} & {
    default?: (props: typeof __VLS_18) => any;
} & {
    footer?: (props: typeof __VLS_20) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: import("vue").PropType<DialogBeforeCloseFn>;
        default: undefined;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogVariant>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogShape>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogType>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    titleColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    overlayColor: {
        type: StringConstructor;
        default: string;
    };
    closeColor: {
        type: StringConstructor;
        default: string;
    };
    headerDividerColor: {
        type: StringConstructor;
        default: string;
    };
    footerDividerColor: {
        type: StringConstructor;
        default: string;
    };
    dialogClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    headerClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    bodyClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    footerClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    overlayClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    modalClass: {
        type: StringConstructor;
        default: string;
    };
    dialogStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    headerStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    bodyStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    footerStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    overlayStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
}>, {
    /** @description 关闭对话框 */
    close: () => void;
    /** @description 重置拖拽位置 */
    resetPosition: () => void;
    /** @description 当前是否可见 */
    visible: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    cancel: () => void;
    close: () => void;
    open: () => void;
    opened: () => void;
    closed: () => void;
    confirm: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: import("vue").PropType<DialogBeforeCloseFn>;
        default: undefined;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogVariant>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogShape>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogType>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    titleColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    overlayColor: {
        type: StringConstructor;
        default: string;
    };
    closeColor: {
        type: StringConstructor;
        default: string;
    };
    headerDividerColor: {
        type: StringConstructor;
        default: string;
    };
    footerDividerColor: {
        type: StringConstructor;
        default: string;
    };
    dialogClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    headerClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    bodyClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    footerClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    overlayClass: {
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogCustomClass>;
        default: undefined;
    };
    modalClass: {
        type: StringConstructor;
        default: string;
    };
    dialogStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    headerStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    bodyStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    footerStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    overlayStyle: {
        type: import("vue").PropType<string | CSSProperties>;
        default: undefined;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    width: string | number;
    type: import("packages/cyberpunk-vue").DialogType;
    variant: import("packages/cyberpunk-vue").DialogVariant;
    color: string;
    shape: import("packages/cyberpunk-vue").DialogShape;
    textColor: string;
    title: string;
    modelValue: boolean;
    center: boolean;
    top: string;
    zIndex: number;
    borderColor: string;
    overflow: boolean;
    headerBorder: boolean;
    footerBorder: boolean;
    overlayColor: string;
    bgColor: string;
    headerDividerColor: string;
    footerDividerColor: string;
    headerClass: import("packages/cyberpunk-vue").DialogCustomClass;
    headerStyle: string | CSSProperties;
    bodyClass: import("packages/cyberpunk-vue").DialogCustomClass;
    bodyStyle: string | CSSProperties;
    overlayStyle: string | CSSProperties;
    draggable: boolean;
    closeOnEscape: boolean;
    fullscreen: boolean;
    modal: boolean;
    appendToBody: boolean;
    closeOnClickModal: boolean;
    showClose: boolean;
    beforeClose: DialogBeforeCloseFn;
    lockScroll: boolean;
    destroyOnClose: boolean;
    alignCenter: boolean;
    titleColor: string;
    closeColor: string;
    dialogClass: import("packages/cyberpunk-vue").DialogCustomClass;
    footerClass: import("packages/cyberpunk-vue").DialogCustomClass;
    overlayClass: import("packages/cyberpunk-vue").DialogCustomClass;
    modalClass: string;
    dialogStyle: string | CSSProperties;
    footerStyle: string | CSSProperties;
    showConfirmButton: boolean;
    showCancelButton: boolean;
    confirmText: string;
    cancelText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
