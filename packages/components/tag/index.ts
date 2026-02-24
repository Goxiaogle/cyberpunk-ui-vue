import { withInstall } from '@cyberpunk-vue/components/utils'
import Tag from './src/tag.vue'

/**
 * CpTag 标签组件
 *
 * @description 赛博朋克风格标签，用于展示标签、分类或状态。
 * 支持多种颜色类型、变体样式、尺寸与可关闭功能。
 *
 * @example
 * ```vue
 * <CpTag type="primary">主要标签</CpTag>
 * <CpTag type="success" closable @close="onClose">成功</CpTag>
 * <CpTag variant="outline" color="#ff00ff">自定义</CpTag>
 * ```
 */
export const CpTag = withInstall(Tag)

export default CpTag
export * from './src/tag'
export type { CpTagInstance } from './src/instance'
