import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

/**
 * 时间轴内容排列模式
 * - `left` - 内容在左侧（默认）
 * - `right` - 内容在右侧
 * - `alternate` - 内容左右交替排列
 */
export type TimelineMode = 'left' | 'right' | 'alternate'

/**
 * 时间轴颜色类型
 */
export type TimelineType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 连线样式
 */
export type TimelineLineStyle = 'solid' | 'dashed' | 'dotted'

/**
 * CpTimeline 注入上下文
 */
export interface TimelineContext {
  mode: TimelineMode
  type: TimelineType
  color: string
  lineStyle: TimelineLineStyle
  lineColor: string
}

/**
 * CpTimeline 注入 key
 */
export const TIMELINE_CONTEXT_KEY: InjectionKey<TimelineContext> = Symbol('cp-timeline-context')

/**
 * CpTimeline 组件 Props 定义
 *
 * @description 赛博朋克风格时间轴容器组件，用于事件记录、进度流程、日志展示等场景。
 *
 * @example
 * ```vue
 * <CpTimeline>
 *   <CpTimelineItem timestamp="2024-01-01">事件一</CpTimelineItem>
 *   <CpTimelineItem timestamp="2024-02-01">事件二</CpTimelineItem>
 * </CpTimeline>
 * ```
 *
 * @slots
 * - `default` - CpTimelineItem 列表
  * @category 展示组件
 * @displayName CpTimeline 时间轴
 */
export const timelineProps = {
  /**
   * 内容排列模式
   * @default 'left'
   */
  mode: {
    type: String as PropType<TimelineMode>,
    default: 'left',
  },
  /**
   * 全局颜色预设（子项可覆盖）
   * @default 'default'
   */
  type: {
    type: String as PropType<TimelineType>,
    default: 'default',
  },
  /**
   * 是否倒序排列
   * @default false
   */
  reverse: {
    type: Boolean,
    default: false,
  },
  /**
   * 自定义全局颜色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 全局连线样式
   * @default 'solid'
   */
  lineStyle: {
    type: String as PropType<TimelineLineStyle>,
    default: 'solid',
  },
  /**
   * 全局连线颜色（默认跟随 type/color）
   * @default ''
   */
  lineColor: {
    type: String,
    default: '',
  },
} as const

export type TimelineProps = ExtractPropTypes<typeof timelineProps>
