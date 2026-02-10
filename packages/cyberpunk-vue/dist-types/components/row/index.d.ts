/**
 * CpRow 栅格行容器
 *
 * @description 赛博朋克风格 Flex 行容器，配合 CpCol 实现 24 栅格布局。
 * 支持 gutter 间距、justify/align 对齐、自动换行。
 *
 * @example
 * ```vue
 * <CpRow :gutter="20">
 *   <CpCol :span="12">左</CpCol>
 *   <CpCol :span="12">右</CpCol>
 * </CpRow>
 * ```
 */
export declare const CpRow: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly gutter: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly justify: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowJustify>;
            readonly default: "start";
        };
        readonly align: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowAlign>;
            readonly default: "top";
        };
        readonly tag: {
            readonly type: StringConstructor;
            readonly default: "div";
        };
        readonly wrap: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly tag: string;
        readonly wrap: boolean;
        readonly justify: import("packages/cyberpunk-vue").RowJustify;
        readonly align: import("packages/cyberpunk-vue").RowAlign;
        readonly gutter: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly gutter: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly justify: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowJustify>;
            readonly default: "start";
        };
        readonly align: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowAlign>;
            readonly default: "top";
        };
        readonly tag: {
            readonly type: StringConstructor;
            readonly default: "div";
        };
        readonly wrap: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly tag: string;
        readonly wrap: boolean;
        readonly justify: import("packages/cyberpunk-vue").RowJustify;
        readonly align: import("packages/cyberpunk-vue").RowAlign;
        readonly gutter: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly gutter: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly justify: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowJustify>;
        readonly default: "start";
    };
    readonly align: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").RowAlign>;
        readonly default: "top";
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly tag: string;
    readonly wrap: boolean;
    readonly justify: import("packages/cyberpunk-vue").RowJustify;
    readonly align: import("packages/cyberpunk-vue").RowAlign;
    readonly gutter: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpRow;
export * from './src/row';
export type { CpRowInstance } from './src/instance';
