import type { ExtractPropTypes, PropType } from 'vue'

/**
 * Menu 颜色类型
 */
export type MenuType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * Menu 模式
 */
export type MenuMode = 'horizontal' | 'vertical'

/**
 * CpMenu 组件 Props 定义
 *
 * @description 赛博朋克风格导航菜单，支持水平/垂直模式、折叠、多色彩类型。
 *
 * @example
 * ```vue
 * <CpMenu default-active="1">
 *   <CpMenuItem index="1">菜单项一</CpMenuItem>
 *   <CpSubMenu index="2">
 *     <template #title>子菜单</template>
 *     <CpMenuItem index="2-1">子菜单项</CpMenuItem>
 *   </CpSubMenu>
 * </CpMenu>
 * ```
 */
export const menuProps = {
  /**
   * 菜单布局方向
   * @default 'vertical'
   */
  mode: {
    type: String as PropType<MenuMode>,
    default: 'vertical',
  },
  /**
   * 默认激活的菜单项 index
   * @default ''
   */
  defaultActive: {
    type: String,
    default: '',
  },
  /**
   * 默认展开的子菜单 index 数组
   * @default []
   */
  defaultOpeneds: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /**
   * 是否只保持一个子菜单展开（手风琴模式）
   * @default false
   */
  uniqueOpened: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否折叠菜单（仅 vertical 模式有效）
   * @default false
   */
  collapse: {
    type: Boolean,
    default: false,
  },
  /**
   * 颜色预设类型
   * @default 'default'
   */
  type: {
    type: String as PropType<MenuType>,
    default: 'default',
  },
  /**
   * 自定义高亮颜色（覆盖 type 预设）
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 菜单背景色，默认使用 --cp-bg-base
   * @default ''
   */
  backgroundColor: {
    type: String,
    default: '',
  },
  /**
   * 菜单文字颜色，默认使用 --cp-text-secondary
   * @default ''
   */
  textColor: {
    type: String,
    default: '',
  },
  /**
   * 激活项文字颜色，默认跟随高亮色
   * @default ''
   */
  activeTextColor: {
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

export type MenuProps = ExtractPropTypes<typeof menuProps>

/**
 * CpMenu 组件事件定义
 */
export const menuEmits = {
  /** 菜单项被选中 */
  select: (index: string, indexPath: string[]) =>
    typeof index === 'string' && Array.isArray(indexPath),
  /** 子菜单展开 */
  open: (index: string, indexPath: string[]) =>
    typeof index === 'string' && Array.isArray(indexPath),
  /** 子菜单收起 */
  close: (index: string, indexPath: string[]) =>
    typeof index === 'string' && Array.isArray(indexPath),
}

export type MenuEmits = typeof menuEmits
