/**
 * CpMenuItemGroup 赛博朋克风格菜单分组
 *
 * @example
 * ```vue
 * <CpMenuItemGroup title="分组一">
 *   <CpMenuItem index="1">菜单项</CpMenuItem>
 * </CpMenuItemGroup>
 * ```
 */
export declare const CpMenuItemGroup: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly title: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly title: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly title: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly title: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly title: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export default CpMenuItemGroup;
export * from './src/menu-item-group';
export type { MenuItemGroupInstance } from './src/instance';
