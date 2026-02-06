/**
 * CpCard 赛博朋克风格卡片容器
 *
 * 用于展示内容分组，支持多种变体、形状模式和灵活的头部/底部布局。
 *
 * @example
 * ```vue
 * <CpCard title="系统信息">内容</CpCard>
 * <CpCard variant="semi" shape="round">毛玻璃卡片</CpCard>
 * ```
 *
 * @see {@link CardProps} 查看所有可用属性
 *
 * @slot default - 卡片主体内容
 * @slot header - 自定义整个头部区域
 * @slot title - 仅标题区域
 * @slot extra - 头部右侧额外操作区
 * @slot footer - 卡片底部区域
 */
export declare const CpCard: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly title: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly shadow: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShadow>;
            readonly default: "hover";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardVariant>;
            readonly default: "solid";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShape>;
            readonly default: "clip";
        };
        readonly bodyPadding: {
            readonly type: StringConstructor;
            readonly default: undefined;
        };
        readonly headerBorder: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly footerBorder: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly overlayAnimation: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayAnimation>;
            readonly default: "slide-up";
        };
        readonly overlayPosition: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayPosition>;
            readonly default: "bottom";
        };
        readonly overlayDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 300;
        };
        readonly overlayEffect: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
            readonly default: "blur-color";
        };
        readonly overlayColor: {
            readonly type: StringConstructor;
            readonly default: "rgba(26, 26, 36, 0.8)";
        };
        readonly overlayBlur: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: 10;
        };
        readonly actionEffect: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
            readonly default: undefined;
        };
        readonly actionColor: {
            readonly type: StringConstructor;
            readonly default: undefined;
        };
        readonly actionBlur: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: undefined;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly bgColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly shadowColor: StringConstructor;
        readonly dimmed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly dimmedDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 300;
        };
        readonly triggerImageHover: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly hoverScale: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly borderColor: StringConstructor;
        readonly dividerColor: StringConstructor;
        readonly headerDividerColor: StringConstructor;
        readonly footerDividerColor: StringConstructor;
        readonly backgroundClass: import("vue").PropType<any>;
        readonly backgroundStyle: import("vue").PropType<string | Record<string, any>>;
        readonly headerClass: import("vue").PropType<any>;
        readonly headerStyle: import("vue").PropType<string | Record<string, any>>;
        readonly bodyClass: import("vue").PropType<any>;
        readonly bodyStyle: import("vue").PropType<string | Record<string, any>>;
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly type: import("packages/cyberpunk-vue").CardType;
        readonly variant: import("packages/cyberpunk-vue").CardVariant;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").CardShape;
        readonly title: string;
        readonly shadow: import("packages/cyberpunk-vue").CardShadow;
        readonly bodyPadding: string;
        readonly headerBorder: boolean;
        readonly footerBorder: boolean;
        readonly overlayAnimation: import("packages/cyberpunk-vue").CardOverlayAnimation;
        readonly overlayPosition: import("packages/cyberpunk-vue").CardOverlayPosition;
        readonly overlayDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly overlayEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
        readonly overlayColor: string;
        readonly overlayBlur: string | number;
        readonly actionEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
        readonly actionColor: string;
        readonly actionBlur: string | number;
        readonly bgColor: string;
        readonly dimmed: boolean;
        readonly dimmedDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly triggerImageHover: boolean;
        readonly hoverScale: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly title: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly shadow: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShadow>;
            readonly default: "hover";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardVariant>;
            readonly default: "solid";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShape>;
            readonly default: "clip";
        };
        readonly bodyPadding: {
            readonly type: StringConstructor;
            readonly default: undefined;
        };
        readonly headerBorder: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly footerBorder: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly overlayAnimation: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayAnimation>;
            readonly default: "slide-up";
        };
        readonly overlayPosition: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayPosition>;
            readonly default: "bottom";
        };
        readonly overlayDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 300;
        };
        readonly overlayEffect: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
            readonly default: "blur-color";
        };
        readonly overlayColor: {
            readonly type: StringConstructor;
            readonly default: "rgba(26, 26, 36, 0.8)";
        };
        readonly overlayBlur: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: 10;
        };
        readonly actionEffect: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
            readonly default: undefined;
        };
        readonly actionColor: {
            readonly type: StringConstructor;
            readonly default: undefined;
        };
        readonly actionBlur: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: undefined;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly bgColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly shadowColor: StringConstructor;
        readonly dimmed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly dimmedDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 300;
        };
        readonly triggerImageHover: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly hoverScale: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly borderColor: StringConstructor;
        readonly dividerColor: StringConstructor;
        readonly headerDividerColor: StringConstructor;
        readonly footerDividerColor: StringConstructor;
        readonly backgroundClass: import("vue").PropType<any>;
        readonly backgroundStyle: import("vue").PropType<string | Record<string, any>>;
        readonly headerClass: import("vue").PropType<any>;
        readonly headerStyle: import("vue").PropType<string | Record<string, any>>;
        readonly bodyClass: import("vue").PropType<any>;
        readonly bodyStyle: import("vue").PropType<string | Record<string, any>>;
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly type: import("packages/cyberpunk-vue").CardType;
        readonly variant: import("packages/cyberpunk-vue").CardVariant;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").CardShape;
        readonly title: string;
        readonly shadow: import("packages/cyberpunk-vue").CardShadow;
        readonly bodyPadding: string;
        readonly headerBorder: boolean;
        readonly footerBorder: boolean;
        readonly overlayAnimation: import("packages/cyberpunk-vue").CardOverlayAnimation;
        readonly overlayPosition: import("packages/cyberpunk-vue").CardOverlayPosition;
        readonly overlayDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly overlayEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
        readonly overlayColor: string;
        readonly overlayBlur: string | number;
        readonly actionEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
        readonly actionColor: string;
        readonly actionBlur: string | number;
        readonly bgColor: string;
        readonly dimmed: boolean;
        readonly dimmedDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly triggerImageHover: boolean;
        readonly hoverScale: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadow: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShadow>;
        readonly default: "hover";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShape>;
        readonly default: "clip";
    };
    readonly bodyPadding: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly headerBorder: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly footerBorder: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly overlayAnimation: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayAnimation>;
        readonly default: "slide-up";
    };
    readonly overlayPosition: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayPosition>;
        readonly default: "bottom";
    };
    readonly overlayDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly overlayEffect: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
        readonly default: "blur-color";
    };
    readonly overlayColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(26, 26, 36, 0.8)";
    };
    readonly overlayBlur: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 10;
    };
    readonly actionEffect: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
        readonly default: undefined;
    };
    readonly actionColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly actionBlur: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: undefined;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bgColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadowColor: StringConstructor;
    readonly dimmed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dimmedDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly triggerImageHover: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hoverScale: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly borderColor: StringConstructor;
    readonly dividerColor: StringConstructor;
    readonly headerDividerColor: StringConstructor;
    readonly footerDividerColor: StringConstructor;
    readonly backgroundClass: import("vue").PropType<any>;
    readonly backgroundStyle: import("vue").PropType<string | Record<string, any>>;
    readonly headerClass: import("vue").PropType<any>;
    readonly headerStyle: import("vue").PropType<string | Record<string, any>>;
    readonly bodyClass: import("vue").PropType<any>;
    readonly bodyStyle: import("vue").PropType<string | Record<string, any>>;
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly type: import("packages/cyberpunk-vue").CardType;
    readonly variant: import("packages/cyberpunk-vue").CardVariant;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").CardShape;
    readonly title: string;
    readonly shadow: import("packages/cyberpunk-vue").CardShadow;
    readonly bodyPadding: string;
    readonly headerBorder: boolean;
    readonly footerBorder: boolean;
    readonly overlayAnimation: import("packages/cyberpunk-vue").CardOverlayAnimation;
    readonly overlayPosition: import("packages/cyberpunk-vue").CardOverlayPosition;
    readonly overlayDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly overlayEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
    readonly overlayColor: string;
    readonly overlayBlur: string | number;
    readonly actionEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
    readonly actionColor: string;
    readonly actionBlur: string | number;
    readonly bgColor: string;
    readonly dimmed: boolean;
    readonly dimmedDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly triggerImageHover: boolean;
    readonly hoverScale: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        cover?: (props: {}) => any;
    } & {
        header?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        extra?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    } & {
        overlay?: (props: {}) => any;
    };
})>;
export default CpCard;
export * from './src/card';
export type { CardInstance } from './src/instance';
