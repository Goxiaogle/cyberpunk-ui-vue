import type { ExtractPropTypes, PropType } from 'vue'
import type { IconValue } from '../../icon/src/icon'
import type { MenuType, MenuMode, MenuShape, MenuVariant } from '../../menu/src/menu'

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
  index: string
  /** 显示文字 */
  label: string
  /** 图标（CpIcon 兼容值） */
  icon?: IconValue
  /** 是否禁用 */
  disabled?: boolean
  /** vue-router 路由 */
  route?: string | Record<string, unknown>
  /** 子菜单项（有 children 渲染为 SubMenu） */
  children?: MenuNavItem[]
  /** 分组标题（有 group 渲染为 MenuItemGroup） */
  group?: string
}

/**
 * CpMenuNav 组件 Props 定义
 *
 * 透传 CpMenu 所有 props + data 数据源
 */
export const menuNavProps = {
  /**
   * 菜单数据
   */
  data: {
    type: Array as PropType<MenuNavItem[]>,
    required: true as const,
  },
  /**
   * 菜单模式
   * @default 'vertical'
   */
  mode: {
    type: String as PropType<MenuMode>,
    default: 'vertical',
  },
  /**
   * 默认激活项 index
   * @default ''
   */
  defaultActive: {
    type: String,
    default: '',
  },
  /**
   * 默认展开的 sub-menu index 列表
   * @default []
   */
  defaultOpeneds: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /**
   * 是否只展开一个 sub-menu
   * @default false
   */
  uniqueOpened: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否折叠（仅 vertical 有效）
   * @default false
   */
  collapse: {
    type: Boolean,
    default: false,
  },
  /**
   * 颜色类型
   * @default 'default'
   */
  type: {
    type: String as PropType<MenuType>,
    default: 'default',
  },
  /**
   * 菜单形状
   * @default 'clip'
   */
  shape: {
    type: String as PropType<MenuShape>,
    default: 'clip',
  },
  /**
   * 菜单变体
   * @default 'solid'
   */
  variant: {
    type: String as PropType<MenuVariant>,
    default: 'solid',
  },
  /**
   * 自定义高亮颜色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否启用 vue-router 模式
   * @default false
   */
  router: {
    type: Boolean,
    default: false,
  },
} as const

export type MenuNavProps = ExtractPropTypes<typeof menuNavProps>

/**
 * CpMenuNav 组件事件定义
 */
export const menuNavEmits = {
  select: (index: string, indexPath: string[]) =>
    typeof index === 'string' && Array.isArray(indexPath),
  open: (index: string, indexPath: string[]) =>
    typeof index === 'string' && Array.isArray(indexPath),
  close: (index: string, indexPath: string[]) =>
    typeof index === 'string' && Array.isArray(indexPath),
}

export type MenuNavEmits = typeof menuNavEmits
