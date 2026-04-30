import type { ExtractPropTypes, PropType } from 'vue'
import type { Placement } from '@floating-ui/dom'
import type { Size } from '@cyberpunk-vue/hooks'

export type PickerType =
  | 'date'
  | 'dates'
  | 'week'
  | 'month'
  | 'year'
  | 'daterange'
  | 'monthrange'
  | 'yearrange'
  | 'time'
  | 'timerange'
  | 'datetime'
  | 'datetimerange'

export type PickerSize = Size
export type PickerShape = 'clip' | 'no-clip' | 'round'
export type PickerVariant = 'outline' | 'filled' | 'ghost'
export type PickerValueItem = string | number | Date
export type PickerModelValue = PickerValueItem | PickerValueItem[] | null | undefined
export type PickerRangeRole = 'start' | 'end'

export interface PickerShortcut {
  /** 快捷项显示文本 */
  text: string
  /** 快捷项值，可以是静态值或返回值的函数 */
  value: PickerModelValue | (() => PickerModelValue)
}

export interface PickerCell {
  /** 单元格对应日期 */
  date: Date
  /** 单元格显示文本 */
  label: string
  /** 是否为当前视图范围外的日期 */
  outside: boolean
  /** 是否为今天 */
  today: boolean
  /** 是否被选中 */
  selected: boolean
  /** 是否处于范围内 */
  inRange: boolean
  /** 是否为范围起点 */
  rangeStart: boolean
  /** 是否为范围终点 */
  rangeEnd: boolean
  /** 是否禁用 */
  disabled: boolean
}

export type DisabledTimeResolver = (role?: PickerRangeRole) => number[]

/**
 * CpDatePickerSelect 组件 Props 定义
 *
 * @description 输入框弹层日期选择器，支持日期、多日期、周、月、年以及日期范围选择。
 *
 * @example
 * ```vue
 * <CpDatePickerSelect v-model="date" value-format="YYYY-MM-DD" />
 * <CpDatePickerSelect v-model="range" type="daterange" value-format="YYYY-MM-DD" />
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
 * @displayName CpDatePickerSelect 日期选择选择器
 */
export const pickerProps = {
  /**
   * 绑定值 (v-model)
   * @default null
   */
  modelValue: {
    type: [String, Number, Date, Array] as PropType<PickerModelValue>,
    default: null,
  },
  /**
   * 选择器类型
   * @default 'date'
   */
  type: {
    type: String as PropType<PickerType>,
    default: 'date',
  },
  /**
   * 显示格式，例如 `YYYY-MM-DD HH:mm:ss`
   * @default 按 type 自动推导
   */
  format: {
    type: String,
    default: '',
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
   * 占位文本
   * @default ''
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * 范围起始占位文本
   * @default '开始'
   */
  startPlaceholder: {
    type: String,
    default: '开始',
  },
  /**
   * 范围结束占位文本
   * @default '结束'
   */
  endPlaceholder: {
    type: String,
    default: '结束',
  },
  /**
   * 范围分隔符
   * @default ' - '
   */
  rangeSeparator: {
    type: String,
    default: ' - ',
  },
  /**
   * 是否禁用
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否只读
   * @default false
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否允许直接输入
   * @default false
   */
  editable: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否可清空
   * @default true
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否显示确认按钮。未设置时范围、时间和日期时间类型默认需要确认。
   * @default undefined
   */
  confirm: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  /**
   * 组件尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<PickerSize>,
    default: 'md',
  },
  /**
   * 形状模式
   * @default 'clip'
   */
  shape: {
    type: String as PropType<PickerShape>,
    default: 'clip',
  },
  /**
   * 视觉变体
   * @default 'outline'
   */
  variant: {
    type: String as PropType<PickerVariant>,
    default: 'outline',
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
   * 未激活边框颜色
   * @default ''
   */
  inactiveColor: {
    type: String,
    default: '',
  },
  /**
   * Placeholder 颜色
   * @default ''
   */
  placeholderColor: {
    type: String,
    default: '',
  },
  /**
   * 触发器宽度
   * @default ''
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  /**
   * 弹出位置
   * @default 'bottom-start'
   */
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom-start',
  },
  /**
   * Teleport 目标
   * @default 'body'
   */
  teleportTo: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },
  /**
   * 禁用日期判断函数
   */
  disabledDate: {
    type: Function as PropType<(date: Date) => boolean>,
    default: undefined,
  },
  /**
   * 禁用小时列表
   */
  disabledHours: {
    type: Function as PropType<DisabledTimeResolver>,
    default: undefined,
  },
  /**
   * 禁用分钟列表
   */
  disabledMinutes: {
    type: Function as PropType<DisabledTimeResolver>,
    default: undefined,
  },
  /**
   * 禁用秒列表
   */
  disabledSeconds: {
    type: Function as PropType<DisabledTimeResolver>,
    default: undefined,
  },
  /**
   * 小时步长
   * @default 1
   */
  hourStep: {
    type: Number,
    default: 1,
  },
  /**
   * 分钟步长
   * @default 1
   */
  minuteStep: {
    type: Number,
    default: 1,
  },
  /**
   * 秒步长
   * @default 1
   */
  secondStep: {
    type: Number,
    default: 1,
  },
  /**
   * 是否显示秒
   * @default true
   */
  showSeconds: {
    type: Boolean,
    default: true,
  },
  /**
   * 快捷选项
   * @default []
   */
  shortcuts: {
    type: Array as PropType<PickerShortcut[]>,
    default: () => [],
  },
  /**
   * 默认展示日期
   */
  defaultValue: {
    type: [String, Number, Date] as PropType<PickerValueItem>,
    default: undefined,
  },
  /**
   * 默认时间，支持 `HH:mm:ss` 或范围数组
   * @default undefined
   */
  defaultTime: {
    type: [String, Array] as PropType<string | [string, string]>,
    default: undefined,
  },
  /**
   * 范围面板是否解除联动
   * @default false
   */
  unlinkPanels: {
    type: Boolean,
    default: false,
  },
} as const

export type PickerProps = ExtractPropTypes<typeof pickerProps>
export const datePickerSelectProps = pickerProps
export type DatePickerSelectProps = PickerProps

export const pickerEmits = {
  /**
   * v-model 更新事件
   */
  'update:modelValue': (_value: PickerModelValue) => true,
  /**
   * 值变化事件
   */
  change: (_value: PickerModelValue) => true,
  /**
   * 清空事件
   */
  clear: () => true,
  /**
   * 聚焦事件
   */
  focus: (event?: FocusEvent) => event === undefined || event instanceof FocusEvent,
  /**
   * 失焦事件
   */
  blur: (event?: FocusEvent) => event === undefined || event instanceof FocusEvent,
  /**
   * 浮层显示状态变化
   */
  visibleChange: (visible: boolean) => typeof visible === 'boolean',
}

export type PickerEmits = typeof pickerEmits
export const datePickerSelectEmits = pickerEmits
export type DatePickerSelectEmits = PickerEmits
