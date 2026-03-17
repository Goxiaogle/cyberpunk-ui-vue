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
 * Menu 形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 * - `circle` - 全圆角胶囊形
 */
export type MenuShape = 'clip' | 'no-clip' | 'round' | 'circle'

/**
 * Menu 变体
 * - `solid` - 实心填充背景，默认
 * - `outline` - 边框样式
 * - `note` - 透明背景 + 发光条高亮（旧默认样式）
 */
export type MenuVariant = 'solid' | 'outline' | 'note'

/**
 * CpMenu 组件 Props 定义
 *
 * @description 赛博朋克风格导航菜单，支持水平/垂直模式、折叠、多色彩类型。
 * 内置路由前缀匹配：当 `defaultActive` 为 `/model-specs/xxx` 时，
 * 会自动匹配 `index="/model-specs"` 的菜单项并高亮其父级 SubMenu。
 * 页面刷新或路由变化时，对应的子菜单会自动展开。
 *
 * @example 基础用法
 * ```vue
 * <CpMenu default-active="1">
 *   <CpMenuItem index="1">菜单项一</CpMenuItem>
 *   <CpSubMenu index="2">
 *     <template #title>子菜单</template>
 *     <CpMenuItem index="2-1">子菜单项</CpMenuItem>
 *   </CpSubMenu>
 * </CpMenu>
 * ```
 *
 * @example 配合 vue-router（推荐：defaultActive + @select）
 * ```vue
 * <script setup>
 * import { computed } from 'vue'
 * import { useRouter, useRoute } from 'vue-router'
 *
 * const router = useRouter()
 * const route = useRoute()
 *
 * // 绑定 route.path 实现路由同步，支持子路由前缀匹配：
 * // 访问 /model-specs/xxx 会自动匹配 index="/model-specs" 并高亮父级 SubMenu
 * const activeMenu = computed(() => route.path)
 *
 * function handleMenuSelect(index: string) {
 *   router.push(index)
 * }
 * </script>
 *
 * <template>
 *   <CpMenu :default-active="activeMenu" @select="handleMenuSelect">
 *     <CpMenuItem index="/dashboard">仪表盘</CpMenuItem>
 *     <CpSubMenu index="ai-group">
 *       <template #title>AI Provider</template>
 *       <CpMenuItem index="/providers">Provider 管理</CpMenuItem>
 *       <CpMenuItem index="/model-specs">模型规格</CpMenuItem>
 *     </CpSubMenu>
 *   </CpMenu>
 * </template>
 * ```
 *
 * @example 内置 router 模式（自动调用 router.push）
 * ```vue
 * <!-- router 模式下点击菜单项自动导航，无需手动处理 @select -->
 * <CpMenu :router="true" :default-active="route.path">
 *   <CpMenuItem index="/dashboard">仪表盘</CpMenuItem>
 *   <CpMenuItem index="/settings">设置</CpMenuItem>
 * </CpMenu>
 * ```
 * @category 导航组件
 * @displayName CpMenu 菜单
 * @slots default - 菜单内容（CpMenuItem / CpSubMenu 等组合）
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
   * 菜单形状
   * - `clip` - 切角样式（默认，赛博朋克特色）
   * - `no-clip` - 直角矩形
   * - `round` - 圆角矩形
   * @default 'clip'
   */
  shape: {
    type: String as PropType<MenuShape>,
    default: 'clip',
  },
  /**
   * 菜单变体
   * - `solid` - 实心填充背景（默认）
   * - `outline` - 边框样式
   * - `note` - 透明背景 + 发光条高亮
   * @default 'solid'
   */
  variant: {
    type: String as PropType<MenuVariant>,
    default: 'solid',
  },
  /**
   * 默认激活的菜单项 index。
   * 支持前缀匹配：传入 `/model-specs/xxx` 会自动匹配 `index="/model-specs"` 的菜单项，
   * 并高亮其所有父级 SubMenu、自动展开对应子菜单目录。
   * 常见用法：绑定 `route.path` 实现路由同步。
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
   * 是否启用 vue-router 模式。
   * 开启后点击 CpMenuItem 会自动调用 `router.push(index)`，
   * 并监听路由变化自动同步激活状态。
   * 不开启时也可通过 `:default-active="route.path"` + `@select` 实现等效效果。
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
