import type { Component, ExtractPropTypes, PropType } from 'vue'
import type { DurationValue } from '@cyberpunk-vue/hooks'

/**
 * 时间轴节点颜色类型
 */
export type TimelineItemType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 时间轴节点尺寸
 */
export type TimelineItemSize = 'sm' | 'md' | 'lg'

/**
 * 时间轴节点动画效果
 * - `none` - 无动画（默认）
 * - `pulse` - 脉冲扩散效果
 * - `glow` - 发光呼吸效果
 * - `blink` - 闪烁效果
 */
export type TimelineItemAnimation = 'none' | 'pulse' | 'glow' | 'blink'

/**
 * 时间戳位置
 */
export type TimelineItemPlacement = 'top' | 'bottom'

/**
 * 连线样式
 */
export type TimelineItemLineStyle = 'solid' | 'dashed' | 'dotted'

/**
 * CpTimelineItem 组件 Props 定义
 *
 * @description 赛博朋克风格时间轴子项组件，支持激活态、动画效果和丰富的插槽定制。
 *
 * @example
 * ```vue
 * <CpTimelineItem timestamp="2024-01-01" type="primary" active animation="pulse">
 *   系统初始化完成
 * </CpTimelineItem>
 * ```
 *
 * @slots
 * - `default` - 主内容区域
 * - `dot` - 自定义节点（完全替换默认圆点）
 * - `timestamp` - 自定义时间戳内容
 * - `extra` - 内容下方附加区域
 * - `connector` - 自定义连线
 */
export const timelineItemProps = {
  /**
   * 时间戳文本
   * @default ''
   */
  timestamp: {
    type: String,
    default: '',
  },
  /**
   * 时间戳位置
   * @default 'bottom'
   */
  placement: {
    type: String as PropType<TimelineItemPlacement>,
    default: 'bottom',
  },
  /**
   * 颜色类型（空字符串时继承父级）
   * @default ''
   */
  type: {
    type: String as PropType<TimelineItemType | ''>,
    default: '',
  },
  /**
   * 自定义节点颜色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 节点尺寸
   * @default 'md'
   */
  size: {
    type: String as PropType<TimelineItemSize>,
    default: 'md',
  },
  /**
   * 空心节点（仅显示边框）
   * @default false
   */
  hollow: {
    type: Boolean,
    default: false,
  },
  /**
   * 隐藏时间戳
   * @default false
   */
  hideTimestamp: {
    type: Boolean,
    default: false,
  },
  /**
   * 自定义节点图标
   */
  icon: {
    type: [Object, Function] as PropType<Component>,
    default: undefined,
  },
  /**
   * 激活态（高亮发光）
   * @default false
   */
  active: {
    type: Boolean,
    default: false,
  },
  /**
   * 节点动画效果
   * @default 'none'
   */
  animation: {
    type: String as PropType<TimelineItemAnimation>,
    default: 'none',
  },
  /**
   * 动画持续时间
   * 数字默认毫秒 (ms)，字符串可指定单位 (如 '1.5s' 或 '1500ms')
   * @default 1500
   */
  duration: {
    type: [Number, String] as PropType<DurationValue>,
    default: 1500,
  },
  /**
   * 动画激烈程度
   * @default 1
   */
  intensity: {
    type: Number,
    default: 1,
  },
  /**
   * 该项连线样式（覆盖全局）
   * @default ''
   */
  lineStyle: {
    type: String as PropType<TimelineItemLineStyle | ''>,
    default: '',
  },
  /**
   * 该项连线颜色（覆盖全局）
   * @default ''
   */
  lineColor: {
    type: String,
    default: '',
  },
} as const

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>
