/**
 * CpBadge 徽章组件
 *
 * @description 赛博朋克风格徽章，用于在另一个元素上显示数字、小红点或状态标识。
 * 支持多种颜色类型、变体样式、最大值限制与自定义偏移。
 *
 * @example
 * ```vue
 * <CpBadge :value="5">
 *   <CpButton>消息</CpButton>
 * </CpBadge>
 * <CpBadge dot type="primary">
 *   <CpIcon icon="Bell" />
 * </CpBadge>
 * ```
 */
export declare const CpBadge: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<string | number>;
            readonly default: "";
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: 99;
        };
        readonly min: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly dot: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly hidden: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly showZero: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeType>;
            readonly default: "error";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeVariant>;
            readonly default: "solid";
        };
        readonly offset: {
            readonly type: import("vue").PropType<[number, number]>;
            readonly default: undefined;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeSize>;
            readonly default: "default";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly size: import("packages/cyberpunk-vue").BadgeSize;
        readonly value: string | number;
        readonly type: import("packages/cyberpunk-vue").BadgeType;
        readonly variant: import("packages/cyberpunk-vue").BadgeVariant;
        readonly color: string;
        readonly textColor: string;
        readonly hidden: boolean;
        readonly min: number;
        readonly max: number;
        readonly dot: boolean;
        readonly offset: [number, number];
        readonly showZero: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<string | number>;
            readonly default: "";
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: 99;
        };
        readonly min: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly dot: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly hidden: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly showZero: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeType>;
            readonly default: "error";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeVariant>;
            readonly default: "solid";
        };
        readonly offset: {
            readonly type: import("vue").PropType<[number, number]>;
            readonly default: undefined;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeSize>;
            readonly default: "default";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly size: import("packages/cyberpunk-vue").BadgeSize;
        readonly value: string | number;
        readonly type: import("packages/cyberpunk-vue").BadgeType;
        readonly variant: import("packages/cyberpunk-vue").BadgeVariant;
        readonly color: string;
        readonly textColor: string;
        readonly hidden: boolean;
        readonly min: number;
        readonly max: number;
        readonly dot: boolean;
        readonly offset: [number, number];
        readonly showZero: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly dot: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hidden: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showZero: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeType>;
        readonly default: "error";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeVariant>;
        readonly default: "solid";
    };
    readonly offset: {
        readonly type: import("vue").PropType<[number, number]>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeSize>;
        readonly default: "default";
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly size: import("packages/cyberpunk-vue").BadgeSize;
    readonly value: string | number;
    readonly type: import("packages/cyberpunk-vue").BadgeType;
    readonly variant: import("packages/cyberpunk-vue").BadgeVariant;
    readonly color: string;
    readonly textColor: string;
    readonly hidden: boolean;
    readonly min: number;
    readonly max: number;
    readonly dot: boolean;
    readonly offset: [number, number];
    readonly showZero: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpBadge;
export * from './src/badge';
export type { CpBadgeInstance } from './src/instance';
