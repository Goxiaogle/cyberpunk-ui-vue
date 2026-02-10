import type { ExtractPropTypes, PropType } from 'vue';
import type { IconValue } from '../../icon/src/icon';
/**
 * CpMenuItem 组件 Props 定义
 */
export declare const menuItemProps: {
    /**
     * 菜单项唯一标识
     */
    readonly index: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    /**
     * 是否禁用
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 图标（CpIcon 兼容值：Vue 组件、Iconify 名称、SVG 字符串等）
     * 与 #icon 插槽共存，prop 优先
     */
    readonly icon: {
        readonly type: PropType<IconValue>;
        readonly default: undefined;
    };
    /**
     * vue-router 路由对象或路径
     */
    readonly route: {
        readonly type: PropType<string | Record<string, any>>;
        readonly default: undefined;
    };
};
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
/**
 * CpMenuItem 组件事件定义
 */
export declare const menuItemEmits: {
    click: (index: string) => boolean;
};
export type MenuItemEmits = typeof menuItemEmits;
