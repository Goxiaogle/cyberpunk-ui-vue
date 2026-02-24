import { withInstall } from '@cyberpunk-vue/components/utils'
import Breadcrumb from './src/breadcrumb.vue'

/**
 * CpBreadcrumb 面包屑导航
 *
 * @description 赛博朋克风格面包屑导航，展示当前页面的路径层级。
 * 支持自定义分隔符（文本/图标/插槽）、多种颜色类型。
 *
 * @example
 * ```vue
 * <CpBreadcrumb>
 *   <CpBreadcrumbItem>首页</CpBreadcrumbItem>
 *   <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
 *   <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
 * </CpBreadcrumb>
 * ```
 */
export const CpBreadcrumb = withInstall(Breadcrumb)

export default CpBreadcrumb
export * from './src/breadcrumb'
export type { CpBreadcrumbInstance } from './src/instance'
