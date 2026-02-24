import { withInstall } from '@cyberpunk-vue/components/utils'
import Divider from './src/divider.vue'

/**
 * CpDivider 分割线组件
 *
 * @description 赛博朋克风格分割线，用于分隔内容区块。
 * 支持水平/垂直方向、文字嵌入、多种颜色类型和变体样式。
 *
 * @example
 * ```vue
 * <CpDivider />
 * <CpDivider type="primary">SECTION</CpDivider>
 * <CpDivider direction="vertical" />
 * ```
 */
export const CpDivider = withInstall(Divider)

export default CpDivider
export * from './src/divider'
export type { CpDividerInstance } from './src/instance'
