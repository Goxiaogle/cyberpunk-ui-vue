/**
 * CpNotification 赛博朋克风格通知提醒
 *
 * 用于在页面角落显示全局通知消息，支持多种类型、位置和变体。
 *
 * @example
 * ```vue
 * <CpNotification
 *   v-model="visible"
 *   title="系统通知"
 *   message="数据同步完成"
 *   type="success"
 * />
 * ```
 *
 * @see {@link NotificationProps} 查看所有可用属性
 *
 * @slot default - 自定义消息内容
 * @slot title - 自定义标题
 * @slot icon - 自定义图标
 */
export declare const CpNotification: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
        close: () => void;
        visible: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => void;
        close: () => void;
        destroy: () => void;
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        close: () => void;
        visible: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    close: () => void;
    visible: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    close: () => void;
    destroy: () => void;
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export default CpNotification;
export * from './src/notification';
export type { NotificationInstance } from './src/instance';
