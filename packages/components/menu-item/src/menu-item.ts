import type { ExtractPropTypes, PropType } from 'vue'
import type { IconValue } from '../../icon/src/icon'

/**
 * CpMenuItem 组件 Props 定义
 */
export const menuItemProps = {
  /**
   * 菜单项唯一标识（可选，不传时自动生成）
   */
  index: {
    type: String,
    default: undefined,
  },
  /**
   * 是否禁用
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 图标（CpIcon 兼容值：Vue 组件、Iconify 名称、SVG 字符串等）
   * 与 #icon 插槽共存，prop 优先
   */
  icon: {
    type: [Object, String] as PropType<IconValue>,
    default: undefined,
  },
  /**
   * vue-router 路由对象或路径
   */
  route: {
    type: [String, Object] as PropType<string | Record<string, unknown>>,
    default: undefined,
  },
} as const

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>

/**
 * CpMenuItem 组件事件定义
 */
export const menuItemEmits = {
  click: (index: string) => typeof index === 'string',
}

export type MenuItemEmits = typeof menuItemEmits
