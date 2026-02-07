/**
 * CpProgress 赛博朋克风格进度条
 *
 * 支持线性、环形、仪表盘三种模式。具有条纹流动效果和不确定状态动画。
 *
 * @example
 * ```vue
 * <CpProgress :percentage="50" />
 * <CpProgress type="circle" :percentage="75" />
 * <CpProgress :percentage="60" striped striped-flow />
 * <CpProgress indeterminate />
 * ```
 *
 * @see {@link ProgressProps} 查看所有可用属性
 *
 * @slot default - 自定义进度文字内容
 */
export declare const CpProgress: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly percentage: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: 100;
            readonly validator: (val: number) => boolean;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressType>;
            readonly default: "line";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressSize>;
            readonly default: "md";
        };
        readonly status: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressStatus>;
            readonly default: undefined;
        };
        readonly color: {
            readonly type: import("vue").PropType<string | string[] | ((percentage: number) => string)>;
            readonly default: "";
        };
        readonly strokeWidth: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly showText: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly textInside: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly format: {
            readonly type: import("vue").PropType<(percentage: number) => string>;
            readonly default: undefined;
        };
        readonly strokeLinecap: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressLinecap>;
            readonly default: "round";
        };
        readonly width: {
            readonly type: NumberConstructor;
            readonly default: 126;
        };
        readonly striped: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly stripedFlow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly indeterminate: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly duration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 3000;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressShape>;
            readonly default: "clip";
        };
        readonly steps: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly stepGap: {
            readonly type: NumberConstructor;
            readonly default: 2;
        };
        readonly stepColors: {
            readonly type: import("vue").PropType<string[]>;
            readonly default: () => never[];
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: undefined;
        };
        readonly showInnerStripe: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly size: import("packages/cyberpunk-vue").ProgressSize;
        readonly width: number;
        readonly format: (percentage: number) => string;
        readonly type: import("packages/cyberpunk-vue").ProgressType;
        readonly loading: boolean;
        readonly color: string | string[] | ((percentage: number) => string);
        readonly shape: import("packages/cyberpunk-vue").ProgressShape;
        readonly textColor: string;
        readonly strokeWidth: number;
        readonly duration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly max: number;
        readonly percentage: number;
        readonly status: import("packages/cyberpunk-vue").ProgressStatus;
        readonly showText: boolean;
        readonly textInside: boolean;
        readonly strokeLinecap: import("packages/cyberpunk-vue").ProgressLinecap;
        readonly striped: boolean;
        readonly stripedFlow: boolean;
        readonly indeterminate: boolean;
        readonly steps: boolean;
        readonly stepGap: number;
        readonly stepColors: string[];
        readonly showInnerStripe: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly percentage: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: 100;
            readonly validator: (val: number) => boolean;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressType>;
            readonly default: "line";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressSize>;
            readonly default: "md";
        };
        readonly status: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressStatus>;
            readonly default: undefined;
        };
        readonly color: {
            readonly type: import("vue").PropType<string | string[] | ((percentage: number) => string)>;
            readonly default: "";
        };
        readonly strokeWidth: {
            readonly type: NumberConstructor;
            readonly default: undefined;
        };
        readonly showText: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly textInside: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly format: {
            readonly type: import("vue").PropType<(percentage: number) => string>;
            readonly default: undefined;
        };
        readonly strokeLinecap: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressLinecap>;
            readonly default: "round";
        };
        readonly width: {
            readonly type: NumberConstructor;
            readonly default: 126;
        };
        readonly striped: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly stripedFlow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly indeterminate: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly duration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 3000;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressShape>;
            readonly default: "clip";
        };
        readonly steps: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly stepGap: {
            readonly type: NumberConstructor;
            readonly default: 2;
        };
        readonly stepColors: {
            readonly type: import("vue").PropType<string[]>;
            readonly default: () => never[];
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: undefined;
        };
        readonly showInnerStripe: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly size: import("packages/cyberpunk-vue").ProgressSize;
        readonly width: number;
        readonly format: (percentage: number) => string;
        readonly type: import("packages/cyberpunk-vue").ProgressType;
        readonly loading: boolean;
        readonly color: string | string[] | ((percentage: number) => string);
        readonly shape: import("packages/cyberpunk-vue").ProgressShape;
        readonly textColor: string;
        readonly strokeWidth: number;
        readonly duration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly max: number;
        readonly percentage: number;
        readonly status: import("packages/cyberpunk-vue").ProgressStatus;
        readonly showText: boolean;
        readonly textInside: boolean;
        readonly strokeLinecap: import("packages/cyberpunk-vue").ProgressLinecap;
        readonly striped: boolean;
        readonly stripedFlow: boolean;
        readonly indeterminate: boolean;
        readonly steps: boolean;
        readonly stepGap: number;
        readonly stepColors: string[];
        readonly showInnerStripe: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly percentage: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressType>;
        readonly default: "line";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressSize>;
        readonly default: "md";
    };
    readonly status: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressStatus>;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: import("vue").PropType<string | string[] | ((percentage: number) => string)>;
        readonly default: "";
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly textInside: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: import("vue").PropType<(percentage: number) => string>;
        readonly default: undefined;
    };
    readonly strokeLinecap: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressLinecap>;
        readonly default: "round";
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 126;
    };
    readonly striped: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly stripedFlow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly duration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 3000;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressShape>;
        readonly default: "clip";
    };
    readonly steps: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly stepGap: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
    readonly stepColors: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showInnerStripe: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly size: import("packages/cyberpunk-vue").ProgressSize;
    readonly width: number;
    readonly format: (percentage: number) => string;
    readonly type: import("packages/cyberpunk-vue").ProgressType;
    readonly loading: boolean;
    readonly color: string | string[] | ((percentage: number) => string);
    readonly shape: import("packages/cyberpunk-vue").ProgressShape;
    readonly textColor: string;
    readonly strokeWidth: number;
    readonly duration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly max: number;
    readonly percentage: number;
    readonly status: import("packages/cyberpunk-vue").ProgressStatus;
    readonly showText: boolean;
    readonly textInside: boolean;
    readonly strokeLinecap: import("packages/cyberpunk-vue").ProgressLinecap;
    readonly striped: boolean;
    readonly stripedFlow: boolean;
    readonly indeterminate: boolean;
    readonly steps: boolean;
    readonly stepGap: number;
    readonly stepColors: string[];
    readonly showInnerStripe: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export default CpProgress;
export * from './src/progress';
export type { ProgressInstance } from './src/instance';
