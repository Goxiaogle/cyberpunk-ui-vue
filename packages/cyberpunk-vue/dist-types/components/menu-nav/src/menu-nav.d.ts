import type { ExtractPropTypes, PropType } from 'vue';
import type { IconValue } from '../../icon/src/icon';
import type { MenuType, MenuMode } from '../../menu/src/menu';
/**
 * 菜单项数据结构
 *
 * @example
 * ```ts
 * const data: MenuNavItem[] = [
 *   { index: '1', label: '首页', icon: 'mdi:home' },
 *   {
 *     index: '2', label: '系统管理', icon: 'mdi:cog',
 *     children: [
 *       { index: '2-1', label: '用户管理' },
 *       { index: '2-2', label: '角色管理' },
 *     ]
 *   },
 *   {
 *     group: '高级功能',
 *     children: [
 *       { index: '3-1', label: 'AI 引擎' },
 *       { index: '3-2', label: '量子计算' },
 *     ]
 *   }
 * ]
 * ```
 */
export interface MenuNavItem {
    /** 唯一标识 */
    index: string;
    /** 显示文字 */
    label: string;
    /** 图标（CpIcon 兼容值） */
    icon?: IconValue;
    /** 是否禁用 */
    disabled?: boolean;
    /** vue-router 路由 */
    route?: string | Record<string, any>;
    /** 子菜单项（有 children 渲染为 SubMenu） */
    children?: MenuNavItem[];
    /** 分组标题（有 group 渲染为 MenuItemGroup） */
    group?: string;
}
/**
 * CpMenuNav 组件 Props 定义
 *
 * 透传 CpMenu 所有 props + data 数据源
 */
export declare const menuNavProps: {
    /**
     * 菜单数据
     */
    readonly data: {
        readonly type: PropType<MenuNavItem[]>;
        readonly required: true;
    };
    /**
     * 菜单模式
     * @default 'vertical'
     */
    readonly mode: {
        readonly type: PropType<MenuMode>;
        readonly default: "vertical";
    };
    /**
     * 默认激活项 index
     * @default ''
     */
    readonly defaultActive: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 默认展开的 sub-menu index 列表
     * @default []
     */
    readonly defaultOpeneds: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
    };
    /**
     * 是否只展开一个 sub-menu
     * @default false
     */
    readonly uniqueOpened: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否折叠（仅 vertical 有效）
     * @default false
     */
    readonly collapse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 颜色类型
     * @default 'default'
     */
    readonly type: {
        readonly type: PropType<MenuType>;
        readonly default: "default";
    };
    /**
     * 自定义高亮颜色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 菜单背景色
     * @default ''
     */
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 菜单文字颜色
     * @default ''
     */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 激活文字颜色
     * @default ''
     */
    readonly activeTextColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否启用 vue-router 模式
     * @default false
     */
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export type MenuNavProps = ExtractPropTypes<typeof menuNavProps>;
/**
 * CpMenuNav 组件事件定义
 */
export declare const menuNavEmits: {
    select: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    close: (index: string, indexPath: string[]) => boolean;
};
export type MenuNavEmits = typeof menuNavEmits;
