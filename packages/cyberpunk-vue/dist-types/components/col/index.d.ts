/**
 * CpCol 栅格列组件
 *
 * @description 赛博朋克风格 24 栅格列，配合 CpRow 使用。
 * 支持 span 列宽、offset 偏移、push/pull 位移。
 *
 * @example
 * ```vue
 * <CpRow :gutter="20">
 *   <CpCol :span="8">1/3</CpCol>
 *   <CpCol :span="16">2/3</CpCol>
 * </CpRow>
 * ```
 */
export declare const CpCol: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly span: {
            readonly type: NumberConstructor;
            readonly default: 24;
        };
        readonly offset: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly push: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly pull: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly tag: {
            readonly type: StringConstructor;
            readonly default: "div";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly push: number;
        readonly span: number;
        readonly tag: string;
        readonly offset: number;
        readonly pull: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly span: {
            readonly type: NumberConstructor;
            readonly default: 24;
        };
        readonly offset: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly push: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly pull: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly tag: {
            readonly type: StringConstructor;
            readonly default: "div";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly push: number;
        readonly span: number;
        readonly tag: string;
        readonly offset: number;
        readonly pull: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly push: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly push: number;
    readonly span: number;
    readonly tag: string;
    readonly offset: number;
    readonly pull: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpCol;
export * from './src/col';
export type { CpColInstance } from './src/instance';
