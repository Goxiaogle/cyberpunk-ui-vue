/**
 * CpDivider 分割线组件
 *
 * @description 赛博朋克风格分割线，用于分隔内容区块。
 * 支持水平/垂直方向、文字嵌入、多种颜色类型和变体样式。
 *
 * @example
 * ```vue
 * <CpDivider />
 * <CpDivider type="primary">SECTION</CpDivider>
 * <CpDivider direction="vertical" />
 * ```
 */
export declare const CpDivider: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly direction: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerDirection>;
            readonly default: "horizontal";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly contentPosition: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerContentPosition>;
            readonly default: "center";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerVariant>;
            readonly default: "solid";
        };
        readonly borderStyle: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerBorderStyle>;
            readonly default: "solid";
        };
        readonly dashed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly thickness: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: 1;
        };
        readonly glow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly margin: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: "";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly type: import("packages/cyberpunk-vue").DividerType;
        readonly variant: import("packages/cyberpunk-vue").DividerVariant;
        readonly color: string;
        readonly dashed: boolean;
        readonly direction: import("packages/cyberpunk-vue").DividerDirection;
        readonly borderStyle: import("packages/cyberpunk-vue").DividerBorderStyle;
        readonly margin: string | number;
        readonly glow: boolean;
        readonly contentPosition: import("packages/cyberpunk-vue").DividerContentPosition;
        readonly thickness: string | number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly direction: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerDirection>;
            readonly default: "horizontal";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly contentPosition: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerContentPosition>;
            readonly default: "center";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerVariant>;
            readonly default: "solid";
        };
        readonly borderStyle: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerBorderStyle>;
            readonly default: "solid";
        };
        readonly dashed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly thickness: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: 1;
        };
        readonly glow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly margin: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: "";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly type: import("packages/cyberpunk-vue").DividerType;
        readonly variant: import("packages/cyberpunk-vue").DividerVariant;
        readonly color: string;
        readonly dashed: boolean;
        readonly direction: import("packages/cyberpunk-vue").DividerDirection;
        readonly borderStyle: import("packages/cyberpunk-vue").DividerBorderStyle;
        readonly margin: string | number;
        readonly glow: boolean;
        readonly contentPosition: import("packages/cyberpunk-vue").DividerContentPosition;
        readonly thickness: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly direction: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerDirection>;
        readonly default: "horizontal";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly contentPosition: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerContentPosition>;
        readonly default: "center";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerVariant>;
        readonly default: "solid";
    };
    readonly borderStyle: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").DividerBorderStyle>;
        readonly default: "solid";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly thickness: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1;
    };
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly margin: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "";
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly type: import("packages/cyberpunk-vue").DividerType;
    readonly variant: import("packages/cyberpunk-vue").DividerVariant;
    readonly color: string;
    readonly dashed: boolean;
    readonly direction: import("packages/cyberpunk-vue").DividerDirection;
    readonly borderStyle: import("packages/cyberpunk-vue").DividerBorderStyle;
    readonly margin: string | number;
    readonly glow: boolean;
    readonly contentPosition: import("packages/cyberpunk-vue").DividerContentPosition;
    readonly thickness: string | number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpDivider;
export * from './src/divider';
export type { CpDividerInstance } from './src/instance';
