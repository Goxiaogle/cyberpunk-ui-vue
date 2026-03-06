import { withInstall } from '@cyberpunk-vue/components/utils'
import Timeline from './src/timeline.vue'

/**
 * CpTimeline 赛博朋克风格时间轴
 *
 * 垂直时间轴容器，用于事件记录、进度流程、日志展示等场景。
 *
 * @example
 * ```vue
 * <CpTimeline>
 *   <CpTimelineItem timestamp="2024-01-01">事件一</CpTimelineItem>
 *   <CpTimelineItem timestamp="2024-02-01" active animation="pulse">事件二</CpTimelineItem>
 * </CpTimeline>
 * ```
 *
 * @slot default - CpTimelineItem 列表
 */
export const CpTimeline = withInstall(Timeline)
export default CpTimeline

export * from './src/timeline'
export type { TimelineInstance } from './src/instance'
