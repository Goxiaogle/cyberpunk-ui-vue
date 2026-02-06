/**
 * CpLoading 赛博朋克风格加载器
 *
 * 环形 SVG 动画效果，可用于按钮内置加载、页面加载、异步操作等场景。
 *
 * @example
 * ```vue
 * <CpLoading />
 * <CpLoading type="primary" size="lg" />
 * <CpLoading color="#ff00ff" :stroke-width="2" />
 * ```
 *
 * @see {@link LoadingProps} 查看所有可用属性
 */
export declare const CpLoading: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").LoadingType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").LoadingSize>;
        readonly default: "md";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").LoadingType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").LoadingSize>;
        readonly default: "md";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
}>> & Readonly<{}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").LoadingType;
    readonly color: string;
    readonly strokeWidth: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpLoading;
export * from './src/loading';
export type { CpLoadingInstance } from './src/instance';
