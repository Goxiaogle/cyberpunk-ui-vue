import type { ExtractPropTypes, PropType } from 'vue'

export type DatePickerValue = string | number | Date | null | undefined
export type DatePickerViewMode = 'day' | 'month' | 'year'

export interface DatePickerDayCell {
  /** 单元格日期 */
  date: Date
  /** 展示数字 */
  label: string
  /** 是否属于当前月份 */
  currentMonth: boolean
  /** 是否为今天 */
  today: boolean
  /** 是否选中 */
  selected: boolean
  /** 是否禁用 */
  disabled: boolean
}

/**
 * CpDatePicker 组件 Props 定义
 *
 * @description 赛博朋克风格日期面板。参考 Vuetify DatePicker 的 header / controls / month grid 分层，年份选择置于左侧，月份置于右侧，更符合中文日期选择习惯。
 *
 * @example
 * ```vue
 * <CpDatePicker v-model="date" value-format="YYYY-MM-DD" show-adjacent-months />
 * ```
 *
 * @slots
 * - `day` - 自定义日期单元格内容
 * - `header` - 自定义顶部标题区
 * - `actions` - 自定义底部操作区
 *
 * @exposes
 * - `goToday` - 跳转并选中今天
 * - `setViewDate` - 设置当前展示年月
 * @category 表单组件
 * @displayName CpDatePicker 日期面板
 */
export const datePickerProps = {
  /**
   * 绑定值 (v-model)
   * @default null
   */
  modelValue: {
    type: [String, Number, Date] as PropType<DatePickerValue>,
    default: null,
  },
  /**
   * 输出值格式。为空时输出 Date；传入 `timestamp` 时输出时间戳。
   * @default ''
   */
  valueFormat: {
    type: String,
    default: '',
  },
  /**
   * 标题文本
   * @default '选择日期'
   */
  title: {
    type: String,
    default: '选择日期',
  },
  /**
   * 是否显示相邻月份日期
   * @default true
   */
  showAdjacentMonths: {
    type: Boolean,
    default: true,
  },
  /**
   * 初始视图模式
   * @default 'day'
   */
  viewMode: {
    type: String as PropType<DatePickerViewMode>,
    default: 'day',
  },
  /**
   * 默认展示日期
   * @default undefined
   */
  defaultValue: {
    type: [String, Number, Date] as PropType<Exclude<DatePickerValue, null | undefined>>,
    default: undefined,
  },
  /**
   * 最小可选日期
   * @default undefined
   */
  min: {
    type: [String, Number, Date] as PropType<Exclude<DatePickerValue, null | undefined>>,
    default: undefined,
  },
  /**
   * 最大可选日期
   * @default undefined
   */
  max: {
    type: [String, Number, Date] as PropType<Exclude<DatePickerValue, null | undefined>>,
    default: undefined,
  },
  /**
   * 禁用日期判断函数
   */
  disabledDate: {
    type: Function as PropType<(date: Date) => boolean>,
    default: undefined,
  },
  /**
   * 自定义主题色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否禁用整个面板
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>

/**
 * CpDatePicker 组件事件定义
 */
export const datePickerEmits = {
  /**
   * v-model 更新事件
   */
  'update:modelValue': (_value: DatePickerValue) => true,
  /**
   * 值变化事件
   */
  change: (_value: DatePickerValue) => true,
  /**
   * 展示月份变化事件
   */
  'update:month': (month: number) => Number.isInteger(month),
  /**
   * 展示年份变化事件
   */
  'update:year': (year: number) => Number.isInteger(year),
  /**
   * 视图模式变化事件
   */
  'update:viewMode': (mode: DatePickerViewMode) => ['day', 'month', 'year'].includes(mode),
}

export type DatePickerEmits = typeof datePickerEmits
