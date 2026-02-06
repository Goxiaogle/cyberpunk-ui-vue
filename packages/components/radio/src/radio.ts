import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 单选框尺寸
 * - `sm` - 小尺寸 (14px)
 * - `md` - 中等尺寸 (18px)，默认
 * - `lg` - 大尺寸 (22px)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type RadioSize = Size

/**
 * 单选框类型（颜色预设）
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type RadioType = 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 单选框值类型
 */
export type RadioValueType = string | number | boolean

/**
 * CpRadio 组件 Props 定义
 *
 * @description 赛博朋克风格单选框组件，支持分组、自定义颜色。
 *
 * @example
 * ```vue
 * <!-- 分组使用 -->
 * <CpRadioGroup v-model="selected">
 *   <CpRadio label="A">选项 A</CpRadio>
 *   <CpRadio label="B">选项 B</CpRadio>
 * </CpRadioGroup>
 * ```
 */
export const radioProps = {
  /**
   * 绑定值 (v-model)
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValueType>,
    default: undefined,
  },
  /**
   * 选项值
   * @example `<CpRadio label="option1">选项1</CpRadio>`
   */
  label: {
    type: [String, Number, Boolean] as PropType<RadioValueType>,
    default: undefined,
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
   * 单选框尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<RadioSize>,
    default: 'md',
  },
  /**
   * 单选框类型（颜色预设）
   * @default 'primary'
   */
  type: {
    type: String as PropType<RadioType>,
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
   * 是否使用边框样式
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

export type RadioProps = ExtractPropTypes<typeof radioProps>

/**
 * CpRadio 组件事件定义
 */
export const radioEmits = {
  /**
   * 值变化时触发 (v-model 绑定)
   */
  'update:modelValue': (value: RadioValueType) =>
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean',
  /**
   * 值变化时触发
   */
  change: (value: RadioValueType) =>
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean',
}

export type RadioEmits = typeof radioEmits
