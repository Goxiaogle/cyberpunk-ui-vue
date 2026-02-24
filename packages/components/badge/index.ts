import { withInstall } from '@cyberpunk-vue/components/utils'
import Badge from './src/badge.vue'

/**
 * CpBadge 徽章组件
 *
 * @description 赛博朋克风格徽章，用于在另一个元素上显示数字、小红点或状态标识。
 * 支持多种颜色类型、变体样式、最大值限制与自定义偏移。
 *
 * @example
 * ```vue
 * <CpBadge :value="5">
 *   <CpButton>消息</CpButton>
 * </CpBadge>
 * <CpBadge dot type="primary">
 *   <CpIcon icon="Bell" />
 * </CpBadge>
 * ```
 */
export const CpBadge = withInstall(Badge)

export default CpBadge
export * from './src/badge'
export type { CpBadgeInstance } from './src/instance'
