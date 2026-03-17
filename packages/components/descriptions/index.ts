import { withInstall } from '@cyberpunk-vue/components/utils'
import Descriptions from './src/descriptions.vue'

/**
 * CpDescriptions 描述列表组件
 *
 * @description 赛博朋克风格描述列表，以键值对形式展示结构化数据。
 * 配合 CpDescriptionsItem 声明式定义条目。
 *
 * @example
 * ```vue
 * <CpDescriptions title="设备信息" :column="3" border>
 *   <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
 *   <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
 * </CpDescriptions>
 * ```
 */
export const CpDescriptions = withInstall(Descriptions)

export default CpDescriptions
export * from './src/descriptions'
export type { CpDescriptionsInstance } from './src/instance'
