import { withInstall } from '@cyberpunk-vue/components/utils'
import MenuItemGroup from './src/menu-item-group.vue'

/**
 * CpMenuItemGroup 赛博朋克风格菜单分组
 *
 * @example
 * ```vue
 * <CpMenuItemGroup title="分组一">
 *   <CpMenuItem index="1">菜单项</CpMenuItem>
 * </CpMenuItemGroup>
 * ```
 */
export const CpMenuItemGroup = withInstall(MenuItemGroup)
export default CpMenuItemGroup

export * from './src/menu-item-group'
export type { MenuItemGroupInstance } from './src/instance'
