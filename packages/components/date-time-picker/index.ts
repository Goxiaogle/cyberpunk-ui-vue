import { withInstall } from '@cyberpunk-vue/components/utils'
import DateTimePicker from './src/date-time-picker.vue'

/**
 * CpDateTimePicker 日期时间选择器
 *
 * 支持日期与时间组合选择、日期时间范围选择和确认式提交。
 */
export const CpDateTimePicker = withInstall(DateTimePicker)
export default CpDateTimePicker

export * from './src/date-time-picker'
export * from '@cyberpunk-vue/components/date-picker/src/picker'
export type { DateTimePickerInstance } from './src/instance'
