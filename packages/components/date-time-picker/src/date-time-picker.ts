import type { ExtractPropTypes } from 'vue'
import { pickerEmits, pickerProps } from '@cyberpunk-vue/components/date-picker/src/picker'

/**
 * CpDateTimePicker 组件 Props 定义
 *
 * @description 赛博朋克风格日期时间选择器，支持日期与时间组合选择以及日期时间范围选择。
 *
 * @example
 * ```vue
 * <CpDateTimePicker v-model="value" value-format="YYYY-MM-DD HH:mm:ss" />
 * <CpDateTimePicker v-model="range" type="datetimerange" />
 * ```
 *
 * @slots
 * - `prefix` - 触发器前缀内容
 * - `suffix` - 触发器后缀内容
 * - `cell` - 自定义日期单元格内容
 * - `footer` - 自定义面板底部操作区
 *
 * @exposes
 * - `open` - 打开选择器浮层
 * - `close` - 关闭选择器浮层
 * - `toggle` - 切换选择器浮层
 * - `focus` - 聚焦触发器
 * - `blur` - 失焦触发器
 * @category 表单组件
 * @displayName CpDateTimePicker 日期时间选择器
 */
export const dateTimePickerProps = {
  ...pickerProps,
  /**
   * 日期时间选择器类型
   * @default 'datetime'
   */
  type: {
    ...pickerProps.type,
    default: 'datetime',
  },
} as const

export type DateTimePickerProps = ExtractPropTypes<typeof dateTimePickerProps>
export const dateTimePickerEmits = pickerEmits
export type DateTimePickerEmits = typeof dateTimePickerEmits
