/**
 * CpIcon 统一图标组件
 *
 * 支持多种图标来源：Vue 组件、原始 SVG、Iconify 图标名。
 * 自动处理 SVG 尺寸归一化，保证图标在不同来源下表现一致。
 *
 * @example
 * ```vue
 * <CpIcon icon="mdi:home" />
 * <CpIcon :icon="MyIconComponent" />
 * <CpIcon icon="mdi:check" type="success" size="lg" />
 * <CpIcon icon="mdi:loading" spin />
 * ```
 *
 * @see {@link IconProps} 查看所有可用属性
 */
export declare const CpIcon: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly icon: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
            readonly default: undefined;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconSize | string | number>;
            readonly default: "md";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly tag: {
            readonly type: import("vue").PropType<"i" | "span" | "div">;
            readonly default: "i";
        };
        readonly spin: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly size: string | number;
        readonly type: import("packages/cyberpunk-vue").IconType;
        readonly color: string;
        readonly icon: import("packages/cyberpunk-vue").IconValue;
        readonly tag: "div" | "i" | "span";
        readonly spin: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly icon: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
            readonly default: undefined;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconSize | string | number>;
            readonly default: "md";
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly tag: {
            readonly type: import("vue").PropType<"i" | "span" | "div">;
            readonly default: "i";
        };
        readonly spin: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly size: string | number;
        readonly type: import("packages/cyberpunk-vue").IconType;
        readonly color: string;
        readonly icon: import("packages/cyberpunk-vue").IconValue;
        readonly tag: "div" | "i" | "span";
        readonly spin: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconSize | string | number>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly tag: {
        readonly type: import("vue").PropType<"i" | "span" | "div">;
        readonly default: "i";
    };
    readonly spin: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly size: string | number;
    readonly type: import("packages/cyberpunk-vue").IconType;
    readonly color: string;
    readonly icon: import("packages/cyberpunk-vue").IconValue;
    readonly tag: "div" | "i" | "span";
    readonly spin: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpIcon;
export * from './src/icon';
