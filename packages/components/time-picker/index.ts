import { withInstall } from '@cyberpunk-vue/components/utils'
import TimePicker from './src/time-picker.vue'

/**
 * CpTimePicker 时间选择器
 *
 * 支持单时间、时间范围、时分秒步长和禁用时间段。
 */
export const CpTimePicker = withInstall(TimePicker)
export default CpTimePicker

export * from './src/time-picker'
export * from '@cyberpunk-vue/components/date-picker/src/picker'
export type { TimePickerInstance } from './src/instance'
