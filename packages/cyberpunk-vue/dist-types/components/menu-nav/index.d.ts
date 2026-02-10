/**
 * CpMenuNav 数据驱动导航菜单
 *
 * 通过结构化数据自动生成嵌套菜单，无需手动编写 slot。
 *
 * @example
 * ```vue
 * <CpMenuNav :data="menuData" default-active="1" type="primary" />
 * ```
 *
 * @see {@link MenuNavItem} 数据结构定义
 */
export declare const CpMenuNav: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuNavItem[]>;
        readonly required: true;
    };
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (index: string, indexPath: string[]) => void;
    close: (index: string, indexPath: string[]) => void;
    open: (index: string, indexPath: string[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuNavItem[]>;
        readonly required: true;
    };
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
}>, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpMenuNav;
export * from './src/menu-nav';
export type { MenuNavInstance } from './src/instance';
