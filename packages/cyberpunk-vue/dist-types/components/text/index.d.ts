/**
 * CpText 特殊文字组件
 *
 * @description 赛博朋克风格特殊文字，可快速为文字添加多种视觉效果。
 * 支持下划线、方框、加粗、斜体、删除线、发光、马克笔等效果。
 *
 * @example
 * ```vue
 * <CpText type="primary" underline>下划线</CpText>
 * <CpText type="success" glow>发光效果</CpText>
 * <CpText type="warning" marker bold>马克笔加粗</CpText>
 * ```
 */
export declare const CpText: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextSize>;
            readonly default: "md";
        };
        readonly align: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextAlign>;
            readonly default: "middle";
        };
        readonly underline: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly boxed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly dashed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly italic: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly strikethrough: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly glow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly glowIntensity: {
            readonly type: NumberConstructor;
            readonly default: 3;
        };
        readonly glowPulse: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly lightWave: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly lightWaveDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 2000;
        };
        readonly marker: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly markerColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly glowPulseDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 1500;
        };
        readonly unselectable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly size: import("packages/cyberpunk-vue").TextSize;
        readonly bold: boolean;
        readonly type: import("packages/cyberpunk-vue").TextType;
        readonly color: string;
        readonly dashed: boolean;
        readonly marker: boolean;
        readonly italic: boolean;
        readonly underline: boolean;
        readonly align: import("packages/cyberpunk-vue").TextAlign;
        readonly boxed: boolean;
        readonly strikethrough: boolean;
        readonly glow: boolean;
        readonly glowIntensity: number;
        readonly glowPulse: boolean;
        readonly lightWave: boolean;
        readonly lightWaveDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly markerColor: string;
        readonly glowPulseDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly unselectable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextSize>;
            readonly default: "md";
        };
        readonly align: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextAlign>;
            readonly default: "middle";
        };
        readonly underline: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly boxed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly dashed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly italic: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly strikethrough: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly glow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly glowIntensity: {
            readonly type: NumberConstructor;
            readonly default: 3;
        };
        readonly glowPulse: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly lightWave: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly lightWaveDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 2000;
        };
        readonly marker: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly markerColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly glowPulseDuration: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
            readonly default: 1500;
        };
        readonly unselectable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly size: import("packages/cyberpunk-vue").TextSize;
        readonly bold: boolean;
        readonly type: import("packages/cyberpunk-vue").TextType;
        readonly color: string;
        readonly dashed: boolean;
        readonly marker: boolean;
        readonly italic: boolean;
        readonly underline: boolean;
        readonly align: import("packages/cyberpunk-vue").TextAlign;
        readonly boxed: boolean;
        readonly strikethrough: boolean;
        readonly glow: boolean;
        readonly glowIntensity: number;
        readonly glowPulse: boolean;
        readonly lightWave: boolean;
        readonly lightWaveDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly markerColor: string;
        readonly glowPulseDuration: import("@cyberpunk-vue/hooks").DurationValue;
        readonly unselectable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextSize>;
        readonly default: "md";
    };
    readonly align: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextAlign>;
        readonly default: "middle";
    };
    readonly underline: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly boxed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly italic: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly strikethrough: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly glowIntensity: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly glowPulse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lightWave: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lightWaveDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 2000;
    };
    readonly marker: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly markerColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly glowPulseDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 1500;
    };
    readonly unselectable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly size: import("packages/cyberpunk-vue").TextSize;
    readonly bold: boolean;
    readonly type: import("packages/cyberpunk-vue").TextType;
    readonly color: string;
    readonly dashed: boolean;
    readonly marker: boolean;
    readonly italic: boolean;
    readonly underline: boolean;
    readonly align: import("packages/cyberpunk-vue").TextAlign;
    readonly boxed: boolean;
    readonly strikethrough: boolean;
    readonly glow: boolean;
    readonly glowIntensity: number;
    readonly glowPulse: boolean;
    readonly lightWave: boolean;
    readonly lightWaveDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly markerColor: string;
    readonly glowPulseDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly unselectable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
})>;
export default CpText;
export * from './src/text';
export type { CpTextInstance } from './src/instance';
