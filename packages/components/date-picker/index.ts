import { withInstall } from '@cyberpunk-vue/components/utils'
import DatePicker from './src/date-picker.vue'
import DatePickerSelect from './src/date-picker-select.vue'

/**
 * CpDatePicker 日期选择器
 *
 * 可嵌入日期面板，年份置于左侧，月份置于右侧。
 */
export const CpDatePicker = withInstall(DatePicker)
export const CpDatePickerSelect = withInstall(DatePickerSelect)
export default CpDatePicker

export * from './src/date-picker'
export * from './src/date-picker-select'
export * from './src/picker'
export type { DatePickerInstance } from './src/instance'
export type { DatePickerSelectInstance } from './src/select-instance'
