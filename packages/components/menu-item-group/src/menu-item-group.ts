import type { ExtractPropTypes } from 'vue'

/**
 * CpMenuItemGroup 组件 Props 定义
  * @category 导航组件
 * @displayName CpMenuItemGroup 菜单分组
  * @slots title - 自定义标题
 * @slots default - 分组内菜单项
 */
export const menuItemGroupProps = {
  /**
   * 分组标题
   * @default ''
   */
  title: {
    type: String,
    default: '',
  },
} as const

export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>
