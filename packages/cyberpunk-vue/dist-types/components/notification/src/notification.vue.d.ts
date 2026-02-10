declare var __VLS_13: {}, __VLS_15: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_13) => any;
} & {
    title?: (props: typeof __VLS_15) => any;
} & {
    default?: (props: typeof __VLS_17) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly message: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly dangerouslyUseHTMLString: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationType>;
        readonly default: "default";
    };
    readonly position: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationPosition>;
        readonly default: "top-right";
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 4500;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationShape>;
        readonly default: "clip";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bgColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly titleColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 9999;
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "330px";
    };
    readonly animationDuration: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
}>, {
    /** @description 关闭通知 */
    close: () => void;
    /** @description 当前是否可见 */
    visible: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    close: () => void;
    destroy: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly message: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly dangerouslyUseHTMLString: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationType>;
        readonly default: "default";
    };
    readonly position: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationPosition>;
        readonly default: "top-right";
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 4500;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").NotificationShape>;
        readonly default: "clip";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bgColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly titleColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 9999;
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "330px";
    };
    readonly animationDuration: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onDestroy?: (() => any) | undefined;
}>, {
    readonly width: string | number;
    readonly type: import("packages/cyberpunk-vue").NotificationType;
    readonly variant: import("packages/cyberpunk-vue").NotificationVariant;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").NotificationShape;
    readonly textColor: string;
    readonly title: string;
    readonly duration: number;
    readonly modelValue: boolean;
    readonly position: import("packages/cyberpunk-vue").NotificationPosition;
    readonly animationDuration: number;
    readonly zIndex: number;
    readonly borderColor: string;
    readonly offset: number;
    readonly bgColor: string;
    readonly message: string;
    readonly showClose: boolean;
    readonly titleColor: string;
    readonly dangerouslyUseHTMLString: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
