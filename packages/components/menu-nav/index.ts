import { withInstall } from '../utils'
import MenuNav from './src/menu-nav.vue'

/**
 * CpMenuNav 数据驱动导航菜单
 *
 * 通过结构化数据自动生成嵌套菜单，无需手动编写 slot。
 *
 * @example
 * ```vue
 * <CpMenuNav :data="menuData" default-active="1" type="primary" />
 * ```
 *
 * @see {@link MenuNavItem} 数据结构定义
 */
export const CpMenuNav = withInstall(MenuNav)
export default CpMenuNav

export * from './src/menu-nav'
export type { MenuNavInstance } from './src/instance'
