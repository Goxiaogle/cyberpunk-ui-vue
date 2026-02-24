import { withInstall } from '@cyberpunk-vue/components/utils'
import Menu from './src/menu.vue'

/**
 * CpMenu 赛博朋克风格导航菜单
 *
 * 支持水平/垂直布局、折叠模式、多色彩类型、自定义背景/文字颜色。
 *
 * @example
 * ```vue
 * <CpMenu default-active="1">
 *   <CpMenuItem index="1">导航一</CpMenuItem>
 *   <CpMenuItem index="2">导航二</CpMenuItem>
 * </CpMenu>
 * ```
 *
 * @see {@link MenuProps} 查看所有可用属性
 */
export const CpMenu = withInstall(Menu)
export default CpMenu

export * from './src/menu'
export * from './src/constants'
export type { MenuInstance } from './src/instance'
