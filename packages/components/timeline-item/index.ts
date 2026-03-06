import { withInstall } from '@cyberpunk-vue/components/utils'
import TimelineItem from './src/timeline-item.vue'

/**
 * CpTimelineItem 赛博朋克风格时间轴子项
 *
 * 支持激活态、脉冲/发光/闪烁动画、空心节点、图标节点、丰富插槽。
 *
 * @example
 * ```vue
 * <CpTimelineItem timestamp="2024-01-01" type="primary" active animation="pulse">
 *   系统初始化完成
 * </CpTimelineItem>
 * ```
 *
 * @slot default - 主内容区域
 * @slot dot - 自定义节点
 * @slot timestamp - 自定义时间戳
 * @slot extra - 附加区域
 * @slot connector - 自定义连线
 */
export const CpTimelineItem = withInstall(TimelineItem)
export default CpTimelineItem

export * from './src/timeline-item'
export type { TimelineItemInstance } from './src/instance'
