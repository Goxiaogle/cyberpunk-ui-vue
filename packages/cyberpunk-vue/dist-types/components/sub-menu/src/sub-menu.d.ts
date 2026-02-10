import type { ExtractPropTypes } from 'vue';
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
};
export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
