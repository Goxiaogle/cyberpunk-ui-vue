import type { ExtractPropTypes, PropType } from 'vue'
import type { IconValue } from '@cyberpunk-vue/components/icon/src/icon'

/**
 * CpSubMenu 组件 Props 定义
 */
export const subMenuProps = {
  /**
   * 子菜单唯一标识
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
   * 子菜单标题文本
   * 与 #title 插槽共存，插槽优先
   */
  title: {
    type: String,
    default: undefined,
  },
} as const

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>
