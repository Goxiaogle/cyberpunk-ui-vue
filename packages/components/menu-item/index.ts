import { withInstall } from '../utils'
import MenuItem from './src/menu-item.vue'

/**
 * CpMenuItem 赛博朋克风格菜单项
 *
 * @example
 * ```vue
 * <CpMenuItem index="1">菜单项</CpMenuItem>
 * ```
 */
export const CpMenuItem = withInstall(MenuItem)
export default CpMenuItem

export * from './src/menu-item'
export type { MenuItemInstance } from './src/instance'
