import type { ExtractPropTypes } from 'vue';
/**
 * CpMenuItemGroup 组件 Props 定义
 */
export declare const menuItemGroupProps: {
    /**
     * 分组标题
     * @default ''
     */
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;
