import { withInstall } from '@cyberpunk-vue/components/utils'
import BreadcrumbItem from './src/breadcrumb-item.vue'

/**
 * CpBreadcrumbItem 面包屑子项
 *
 * @description 面包屑导航中的单个层级项，支持路由跳转。
 *
 * @example
 * ```vue
 * <CpBreadcrumbItem to="/home">首页</CpBreadcrumbItem>
 * <CpBreadcrumbItem>当前页</CpBreadcrumbItem>
 * ```
 */
export const CpBreadcrumbItem = withInstall(BreadcrumbItem)

export default CpBreadcrumbItem
export * from './src/breadcrumb-item'
export type { CpBreadcrumbItemInstance } from './src/instance'
