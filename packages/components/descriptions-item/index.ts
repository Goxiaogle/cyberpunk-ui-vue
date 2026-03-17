import { withInstall } from '@cyberpunk-vue/components/utils'
import DescriptionsItem from './src/descriptions-item.vue'

/**
 * CpDescriptionsItem 描述列表条目组件
 *
 * @description 与 CpDescriptions 配合使用，声明式定义描述列表条目。
 *
 * @example
 * ```vue
 * <CpDescriptions title="设备信息">
 *   <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
 *   <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
 * </CpDescriptions>
 * ```
 */
export const CpDescriptionsItem = withInstall(DescriptionsItem)

export default CpDescriptionsItem
export * from './src/descriptions-item'
export type { CpDescriptionsItemInstance } from './src/instance'
