import type { ExtractPropTypes } from 'vue'
import { pickerEmits, pickerProps } from '@cyberpunk-vue/components/date-picker/src/picker'

/**
 * CpTimePicker 组件 Props 定义
 *
 * @description 赛博朋克风格时间选择器，支持单时间、时间范围、时分秒步长和禁用时间段。
 *
 * @example
 * ```vue
 * <CpTimePicker v-model="time" value-format="HH:mm:ss" />
 * <CpTimePicker v-model="range" type="timerange" :minute-step="5" />
 * ```
 *
 * @slots
 * - `prefix` - 触发器前缀内容
 * - `suffix` - 触发器后缀内容
 * - `footer` - 自定义面板底部操作区
 *
 * @exposes
 * - `open` - 打开选择器浮层
 * - `close` - 关闭选择器浮层
 * - `toggle` - 切换选择器浮层
 * - `focus` - 聚焦触发器
 * - `blur` - 失焦触发器
 * @category 表单组件
 * @displayName CpTimePicker 时间选择器
 */
export const timePickerProps = {
  ...pickerProps,
  /**
   * 时间选择器类型
   * @default 'time'
   */
  type: {
    ...pickerProps.type,
    default: 'time',
  },
} as const

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>
export const timePickerEmits = pickerEmits
export type TimePickerEmits = typeof timePickerEmits
