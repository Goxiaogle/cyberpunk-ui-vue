/**
 * CpMenu 赛博朋克风格导航菜单
 *
 * 支持水平/垂直布局、折叠模式、多色彩类型、自定义背景/文字颜色。
 *
 * @example
 * ```vue
 * <CpMenu default-active="1">
 *   <CpMenuItem index="1">导航一</CpMenuItem>
 *   <CpMenuItem index="2">导航二</CpMenuItem>
 * </CpMenu>
 * ```
 *
 * @see {@link MenuProps} 查看所有可用属性
 */
export declare const CpMenu: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly mode: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuMode>;
            readonly default: "vertical";
        };
        readonly defaultActive: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly defaultOpeneds: {
            readonly type: import("vue").PropType<string[]>;
            readonly default: () => never[];
        };
        readonly uniqueOpened: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly collapse: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly backgroundColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly activeTextColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly router: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{
        onSelect?: ((index: string, indexPath: string[]) => any) | undefined;
        onClose?: ((index: string, indexPath: string[]) => any) | undefined;
        onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (index: string, indexPath: string[]) => void;
        close: (index: string, indexPath: string[]) => void;
        open: (index: string, indexPath: string[]) => void;
    }, import("vue").PublicProps, {
        readonly mode: import("packages/cyberpunk-vue").MenuMode;
        readonly type: import("packages/cyberpunk-vue").MenuType;
        readonly color: string;
        readonly textColor: string;
        readonly collapse: boolean;
        readonly backgroundColor: string;
        readonly defaultActive: string;
        readonly defaultOpeneds: string[];
        readonly uniqueOpened: boolean;
        readonly activeTextColor: string;
        readonly router: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly mode: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuMode>;
            readonly default: "vertical";
        };
        readonly defaultActive: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly defaultOpeneds: {
            readonly type: import("vue").PropType<string[]>;
            readonly default: () => never[];
        };
        readonly uniqueOpened: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly collapse: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuType>;
            readonly default: "default";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly backgroundColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly activeTextColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly router: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{
        onSelect?: ((index: string, indexPath: string[]) => any) | undefined;
        onClose?: ((index: string, indexPath: string[]) => any) | undefined;
        onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly mode: import("packages/cyberpunk-vue").MenuMode;
        readonly type: import("packages/cyberpunk-vue").MenuType;
        readonly color: string;
        readonly textColor: string;
        readonly collapse: boolean;
        readonly backgroundColor: string;
        readonly defaultActive: string;
        readonly defaultOpeneds: string[];
        readonly uniqueOpened: boolean;
        readonly activeTextColor: string;
        readonly router: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly mode: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuMode>;
        readonly default: "vertical";
    };
    readonly defaultActive: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly defaultOpeneds: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly uniqueOpened: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly activeTextColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{
    onSelect?: ((index: string, indexPath: string[]) => any) | undefined;
    onClose?: ((index: string, indexPath: string[]) => any) | undefined;
    onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (index: string, indexPath: string[]) => void;
    close: (index: string, indexPath: string[]) => void;
    open: (index: string, indexPath: string[]) => void;
}, string, {
    readonly mode: import("packages/cyberpunk-vue").MenuMode;
    readonly type: import("packages/cyberpunk-vue").MenuType;
    readonly color: string;
    readonly textColor: string;
    readonly collapse: boolean;
    readonly backgroundColor: string;
    readonly defaultActive: string;
    readonly defaultOpeneds: string[];
    readonly uniqueOpened: boolean;
    readonly activeTextColor: string;
    readonly router: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default CpMenu;
export * from './src/menu';
export * from './src/constants';
export type { MenuInstance } from './src/instance';
