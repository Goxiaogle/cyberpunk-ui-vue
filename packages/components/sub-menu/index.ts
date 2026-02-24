import { withInstall } from '@cyberpunk-vue/components/utils'
import SubMenu from './src/sub-menu.vue'

/**
 * CpSubMenu 赛博朋克风格子菜单
 *
 * @example
 * ```vue
 * <CpSubMenu index="1">
 *   <template #title>子菜单标题</template>
 *   <CpMenuItem index="1-1">子项一</CpMenuItem>
 * </CpSubMenu>
 * ```
 */
export const CpSubMenu = withInstall(SubMenu)
export default CpSubMenu

export * from './src/sub-menu'
export type { SubMenuInstance } from './src/instance'
