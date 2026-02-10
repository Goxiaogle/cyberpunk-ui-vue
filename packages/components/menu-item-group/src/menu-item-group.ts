import type { ExtractPropTypes } from 'vue'

/**
 * CpMenuItemGroup 组件 Props 定义
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
