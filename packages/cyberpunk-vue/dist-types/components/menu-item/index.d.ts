/**
 * CpMenuItem 赛博朋克风格菜单项
 *
 * @example
 * ```vue
 * <CpMenuItem index="1">菜单项</CpMenuItem>
 * ```
 */
export declare const CpMenuItem: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly index: {
            readonly type: StringConstructor;
            readonly required: true;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
            readonly default: undefined;
        };
        readonly route: {
            readonly type: import("vue").PropType<string | Record<string, any>>;
            readonly default: undefined;
        };
    }>> & Readonly<{
        onClick?: ((index: string) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (index: string) => void;
    }, import("vue").PublicProps, {
        readonly disabled: boolean;
        readonly icon: import("packages/cyberpunk-vue").IconValue;
        readonly route: string | Record<string, any>;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly index: {
            readonly type: StringConstructor;
            readonly required: true;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
            readonly default: undefined;
        };
        readonly route: {
            readonly type: import("vue").PropType<string | Record<string, any>>;
            readonly default: undefined;
        };
    }>> & Readonly<{
        onClick?: ((index: string) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly icon: import("packages/cyberpunk-vue").IconValue;
        readonly route: string | Record<string, any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly index: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
    };
    readonly route: {
        readonly type: import("vue").PropType<string | Record<string, any>>;
        readonly default: undefined;
    };
}>> & Readonly<{
    onClick?: ((index: string) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (index: string) => void;
}, string, {
    readonly disabled: boolean;
    readonly icon: import("packages/cyberpunk-vue").IconValue;
    readonly route: string | Record<string, any>;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export default CpMenuItem;
export * from './src/menu-item';
export type { MenuItemInstance } from './src/instance';
