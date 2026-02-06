export declare const CpStatusIndicator: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorType>;
            readonly default: "default";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorSize>;
            readonly default: "md";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorShape>;
            readonly default: "dot";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly animation: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorAnimation>;
            readonly default: "none";
        };
        readonly duration: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: 1500;
        };
        readonly intensity: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly gap: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: "";
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").StatusIndicatorType;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").StatusIndicatorShape;
        readonly label: string;
        readonly duration: string | number;
        readonly animation: import("packages/cyberpunk-vue").StatusIndicatorAnimation;
        readonly gap: string | number;
        readonly intensity: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorType>;
            readonly default: "default";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorSize>;
            readonly default: "md";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorShape>;
            readonly default: "dot";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly animation: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorAnimation>;
            readonly default: "none";
        };
        readonly duration: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: 1500;
        };
        readonly intensity: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly gap: {
            readonly type: import("vue").PropType<number | string>;
            readonly default: "";
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").StatusIndicatorType;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").StatusIndicatorShape;
        readonly label: string;
        readonly duration: string | number;
        readonly animation: import("packages/cyberpunk-vue").StatusIndicatorAnimation;
        readonly gap: string | number;
        readonly intensity: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorShape>;
        readonly default: "dot";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly animation: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").StatusIndicatorAnimation>;
        readonly default: "none";
    };
    readonly duration: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1500;
    };
    readonly intensity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly gap: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: "";
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").StatusIndicatorType;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").StatusIndicatorShape;
    readonly label: string;
    readonly duration: string | number;
    readonly animation: import("packages/cyberpunk-vue").StatusIndicatorAnimation;
    readonly gap: string | number;
    readonly intensity: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpStatusIndicator;
export * from './src/status-indicator';
export type { CpStatusIndicatorInstance } from './src/instance';
