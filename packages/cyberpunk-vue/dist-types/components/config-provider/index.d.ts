/**
 * CpConfigProvider 全局配置提供者
 *
 * 用于设置组件库的全局默认值和主题，通常放在应用根组件中包裹所有子组件。
 *
 * @example
 * ```vue
 * <CpConfigProvider
 *   :defaults="{ button: { size: 'lg' }, input: { clearable: true } }"
 *   theme="dark"
 * >
 *   <App />
 * </CpConfigProvider>
 * ```
 *
 * @see {@link ConfigProviderProps} 查看所有可用属性
 *
 * @slot default - 被配置包裹的子组件
 */
export declare const CpConfigProvider: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly defaults: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ComponentDefaults>;
            readonly default: () => {};
        };
        readonly theme: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/constants").ThemeType>;
            readonly default: "dark";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly defaults: import("packages/cyberpunk-vue").ComponentDefaults;
        readonly theme: import("@cyberpunk-vue/constants").ThemeType;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly defaults: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ComponentDefaults>;
            readonly default: () => {};
        };
        readonly theme: {
            readonly type: import("vue").PropType<import("@cyberpunk-vue/constants").ThemeType>;
            readonly default: "dark";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly defaults: import("packages/cyberpunk-vue").ComponentDefaults;
        readonly theme: import("@cyberpunk-vue/constants").ThemeType;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly defaults: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ComponentDefaults>;
        readonly default: () => {};
    };
    readonly theme: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/constants").ThemeType>;
        readonly default: "dark";
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly defaults: import("packages/cyberpunk-vue").ComponentDefaults;
    readonly theme: import("@cyberpunk-vue/constants").ThemeType;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpConfigProvider;
export * from './src/config-provider';
export type { ConfigProviderInstance } from './src/instance';
