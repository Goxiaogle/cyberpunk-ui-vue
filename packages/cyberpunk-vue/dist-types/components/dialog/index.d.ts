/**
 * CpDialog 赛博朋克风格模态对话框
 *
 * 用于在保留页面上下文的情况下展示重要交互内容，支持多种变体、形状和主题色。
 *
 * @example
 * ```vue
 * <CpDialog v-model="visible" title="系统通知">
 *   <p>对话框内容</p>
 *   <template #footer>
 *     <CpButton @click="visible = false">取消</CpButton>
 *     <CpButton type="primary" @click="visible = false">确认</CpButton>
 *   </template>
 * </CpDialog>
 * ```
 *
 * @see {@link DialogProps} 查看所有可用属性
 *
 * @slot default - 对话框主体内容
 * @slot header - 自定义整个头部区域
 * @slot title - 仅标题区域
 * @slot footer - 底部操作区域
 */
export declare const CpDialog: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<import("packages/cyberpunk-vue").DialogBeforeCloseFn>;
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
            type: import("vue").PropType<any>;
            default: undefined;
        };
        headerClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        bodyClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        footerClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        overlayClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        modalClass: {
            type: StringConstructor;
            default: string;
        };
        dialogStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        headerStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        bodyStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        footerStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        overlayStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
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
        close: () => void;
        resetPosition: () => void;
        visible: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => void;
        cancel: () => void;
        close: () => void;
        open: () => void;
        opened: () => void;
        closed: () => void;
        confirm: () => void;
    }, import("vue").PublicProps, {
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
        headerClass: any;
        headerStyle: string | Record<string, any>;
        bodyClass: any;
        bodyStyle: string | Record<string, any>;
        overlayStyle: string | Record<string, any>;
        draggable: boolean;
        closeOnEscape: boolean;
        fullscreen: boolean;
        modal: boolean;
        appendToBody: boolean;
        closeOnClickModal: boolean;
        showClose: boolean;
        beforeClose: import("packages/cyberpunk-vue").DialogBeforeCloseFn;
        lockScroll: boolean;
        destroyOnClose: boolean;
        alignCenter: boolean;
        titleColor: string;
        closeColor: string;
        dialogClass: any;
        footerClass: any;
        overlayClass: any;
        modalClass: string;
        dialogStyle: string | Record<string, any>;
        footerStyle: string | Record<string, any>;
        showConfirmButton: boolean;
        showCancelButton: boolean;
        confirmText: string;
        cancelText: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<import("packages/cyberpunk-vue").DialogBeforeCloseFn>;
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
            type: import("vue").PropType<any>;
            default: undefined;
        };
        headerClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        bodyClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        footerClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        overlayClass: {
            type: import("vue").PropType<any>;
            default: undefined;
        };
        modalClass: {
            type: StringConstructor;
            default: string;
        };
        dialogStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        headerStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        bodyStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        footerStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
            default: undefined;
        };
        overlayStyle: {
            type: import("vue").PropType<string | Record<string, any>>;
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
        close: () => void;
        resetPosition: () => void;
        visible: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, {
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
        headerClass: any;
        headerStyle: string | Record<string, any>;
        bodyClass: any;
        bodyStyle: string | Record<string, any>;
        overlayStyle: string | Record<string, any>;
        draggable: boolean;
        closeOnEscape: boolean;
        fullscreen: boolean;
        modal: boolean;
        appendToBody: boolean;
        closeOnClickModal: boolean;
        showClose: boolean;
        beforeClose: import("packages/cyberpunk-vue").DialogBeforeCloseFn;
        lockScroll: boolean;
        destroyOnClose: boolean;
        alignCenter: boolean;
        titleColor: string;
        closeColor: string;
        dialogClass: any;
        footerClass: any;
        overlayClass: any;
        modalClass: string;
        dialogStyle: string | Record<string, any>;
        footerStyle: string | Record<string, any>;
        showConfirmButton: boolean;
        showCancelButton: boolean;
        confirmText: string;
        cancelText: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("packages/cyberpunk-vue").DialogBeforeCloseFn>;
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
        type: import("vue").PropType<any>;
        default: undefined;
    };
    headerClass: {
        type: import("vue").PropType<any>;
        default: undefined;
    };
    bodyClass: {
        type: import("vue").PropType<any>;
        default: undefined;
    };
    footerClass: {
        type: import("vue").PropType<any>;
        default: undefined;
    };
    overlayClass: {
        type: import("vue").PropType<any>;
        default: undefined;
    };
    modalClass: {
        type: StringConstructor;
        default: string;
    };
    dialogStyle: {
        type: import("vue").PropType<string | Record<string, any>>;
        default: undefined;
    };
    headerStyle: {
        type: import("vue").PropType<string | Record<string, any>>;
        default: undefined;
    };
    bodyStyle: {
        type: import("vue").PropType<string | Record<string, any>>;
        default: undefined;
    };
    footerStyle: {
        type: import("vue").PropType<string | Record<string, any>>;
        default: undefined;
    };
    overlayStyle: {
        type: import("vue").PropType<string | Record<string, any>>;
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
    close: () => void;
    resetPosition: () => void;
    visible: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    cancel: () => void;
    close: () => void;
    open: () => void;
    opened: () => void;
    closed: () => void;
    confirm: () => void;
}, string, {
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
    headerClass: any;
    headerStyle: string | Record<string, any>;
    bodyClass: any;
    bodyStyle: string | Record<string, any>;
    overlayStyle: string | Record<string, any>;
    draggable: boolean;
    closeOnEscape: boolean;
    fullscreen: boolean;
    modal: boolean;
    appendToBody: boolean;
    closeOnClickModal: boolean;
    showClose: boolean;
    beforeClose: import("packages/cyberpunk-vue").DialogBeforeCloseFn;
    lockScroll: boolean;
    destroyOnClose: boolean;
    alignCenter: boolean;
    titleColor: string;
    closeColor: string;
    dialogClass: any;
    footerClass: any;
    overlayClass: any;
    modalClass: string;
    dialogStyle: string | Record<string, any>;
    footerStyle: string | Record<string, any>;
    showConfirmButton: boolean;
    showCancelButton: boolean;
    confirmText: string;
    cancelText: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
})>;
export default CpDialog;
export * from './src/dialog';
export type { DialogInstance } from './src/instance';
