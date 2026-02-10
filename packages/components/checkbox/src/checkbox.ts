import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 复选框尺寸
 * - `sm` - 小尺寸 (14px)
 * - `md` - 中等尺寸 (18px)，默认
 * - `lg` - 大尺寸 (22px)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type CheckboxSize = Size

/**
 * 复选框类型（颜色预设）
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type CheckboxType = 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 复选框形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type CheckboxShape = 'clip' | 'no-clip' | 'round'

/**
 * 复选框值类型
 */
export type CheckboxValueType = string | number | boolean

/**
 * CpCheckbox 组件 Props 定义
 *
 * @description 赛博朋克风格复选框组件，支持半选状态、分组、自定义颜色。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpCheckbox v-model="checked">选项</CpCheckbox>
 *
 * <!-- 半选状态 -->
 * <CpCheckbox v-model="checked" indeterminate>全选</CpCheckbox>
 *
 * <!-- 分组使用 -->
 * <CpCheckboxGroup v-model="selected">
 *   <CpCheckbox label="A">选项 A</CpCheckbox>
 *   <CpCheckbox label="B">选项 B</CpCheckbox>
 * </CpCheckboxGroup>
 * ```
 */
export const checkboxProps = {
  /**
   * 绑定值 (v-model)
   * 单独使用时为 boolean，在 Group 中使用时为数组
   */
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<CheckboxValueType | CheckboxValueType[]>,
    default: undefined,
  },
  /**
   * 选项值，在 CheckboxGroup 中使用
   * @example `<CpCheckbox label="option1">选项1</CpCheckbox>`
   */
  label: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: undefined,
  },
  /**
   * 选中时的值（仅单独使用时有效）
   * @default true
   */
  trueValue: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: true,
  },
  /**
   * 未选中时的值（仅单独使用时有效）
   * @default false
   */
  falseValue: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: false,
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
   * 是否半选（indeterminate）状态
   * 常用于全选场景，表示部分选中
   * @default false
   */
  indeterminate: {
    type: Boolean,
    default: false,
  },
  /**
   * 复选框尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<CheckboxSize>,
    default: 'md',
  },
  /**
   * 复选框类型（颜色预设）
   * @default 'primary'
   */
  type: {
    type: String as PropType<CheckboxType>,
    default: 'primary',
  },
  /**
   * 自定义选中颜色
   * 优先级高于 type
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 自定义勾选标记（√）颜色
   * 用于在暗色背景下提高勾的可见度
   * 不传时默认跟随当前 type 的文字颜色（参考 Button 文字颜色）
   */
  checkColor: {
    type: String,
    default: '',
  },
  /**
   * 复选框形状
   * - `clip` - 切角样式（默认，赛博朋克特色）
   * - `no-clip` - 直角矩形
   * - `round` - 圆角矩形
   * @default 'clip'
   */
  shape: {
    type: String as PropType<CheckboxShape>,
    default: 'clip',
  },
  /**
   * 是否使用边框样式
   * 开启后整个标签区域带有边框
   * @default false
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * 原生 name 属性
   */
  name: {
    type: String,
    default: '',
  },
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

/**
 * CpCheckbox 组件事件定义
 */
export const checkboxEmits = {
  /**
   * 值变化时触发 (v-model 绑定)
   */
  'update:modelValue': (value: CheckboxValueType | CheckboxValueType[]) =>
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || Array.isArray(value),
  /**
   * 值变化时触发
   */
  change: (value: CheckboxValueType | CheckboxValueType[]) =>
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || Array.isArray(value),
}

export type CheckboxEmits = typeof checkboxEmits
