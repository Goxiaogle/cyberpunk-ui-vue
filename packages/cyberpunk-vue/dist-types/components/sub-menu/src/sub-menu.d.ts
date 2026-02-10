import type { ExtractPropTypes, PropType } from 'vue';
import type { IconValue } from '../../icon/src/icon';
/**
 * CpSubMenu 组件 Props 定义
 */
export declare const subMenuProps: {
    /**
     * 子菜单唯一标识
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
};
export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
