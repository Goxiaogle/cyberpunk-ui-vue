import type { InjectionKey, Ref } from 'vue'
import type { MenuMode, MenuType, MenuShape, MenuVariant } from './menu'

/**
 * Menu → MenuItem / SubMenu 的上下文
 */
export interface MenuContext {
  /** 获取下一个自动生成的唯一 index */
  generateIndex: () => string
  /** 当前激活项 index */
  activeIndex: Ref<string>
  /** 当前激活项的完整索引路径 */
  activeIndexPath: Ref<string[]>
  /** 当前展开的子菜单 index 集合 */
  openedMenus: Ref<Set<string>>
  /** 菜单模式 */
  mode: MenuMode
  /** 是否折叠 */
  collapse: Ref<boolean>
  /** 颜色类型 */
  type: MenuType
  /** 菜单形状 */
  shape: MenuShape
  /** 菜单变体 */
  variant: MenuVariant
  /** 是否 vue-router 模式 */
  router: boolean
  /** 自定义高亮色 */
  color: string
  /** 选中菜单项 */
  handleSelect: (index: string, indexPath: string[]) => void
  /** 切换子菜单展开/收起（点击模式） */
  handleSubMenuClick: (index: string, indexPath: string[]) => void
  /** 打开子菜单（hover 模式） */
  openMenu: (index: string, indexPath: string[]) => void
  /** 关闭子菜单（hover 模式） */
  closeMenu: (index: string, indexPath: string[]) => void
}

/** SubMenu → 子项的上下文（索引路径 + hover 管理） */
export interface SubMenuContext {
  /** 父级索引路径 */
  indexPath: string[]
  /** 层级深度 */
  level: number
  /** 鼠标是否在子内容中 */
  mouseInChild: Ref<boolean>
  /** 向父级传播 mouseleave */
  handleMouseleave?: (deepDispatch?: boolean) => void
}

export const menuContextKey: InjectionKey<MenuContext> = Symbol('menuContext')
export const subMenuContextKey: InjectionKey<SubMenuContext> = Symbol('subMenuContext')
