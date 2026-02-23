import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 表单验证规则
 */
export interface FormRule {
  /** 是否必填 */
  required?: boolean
  /** 错误提示信息 */
  message?: string
  /** 触发时机 */
  trigger?: 'blur' | 'change'
  /** 最小长度/值 */
  min?: number
  /** 最大长度/值 */
  max?: number
  /** 正则匹配 */
  pattern?: RegExp
  /** 自定义校验器，返回 true 表示通过，返回 string 表示错误信息 */
  validator?: (value: unknown, rule: FormRule) => boolean | string | Promise<boolean | string>
}

export type FormRules = Record<string, FormRule | FormRule[]>

/**
 * 标签位置
 * - `left` - 左对齐
 * - `right` - 右对齐
 * - `top` - 顶部
 */
export type LabelPosition = 'left' | 'right' | 'top'

/**
 * 必填星号位置
 */
export type RequireAsteriskPosition = 'left' | 'right'

/**
 * CpForm Props
 */
export const formProps = {
  /** 表单数据对象 */
  model: {
    type: Object as PropType<Record<string, unknown>>,
    default: undefined,
  },
  /** 验证规则 */
  rules: {
    type: Object as PropType<FormRules>,
    default: () => ({}),
  },
  /**
   * 标签宽度
   * @default 'auto'
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 'auto',
  },
  /**
   * 标签位置
   * @default 'right'
   */
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: 'right',
  },
  /**
   * 标签后缀（如 ':'）
   * @default ''
   */
  labelSuffix: {
    type: String,
    default: '',
  },
  /**
   * 控件尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'md',
  },
  /**
   * 全局禁用
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 全局：是否显示验证错误信息
   * @default true
   */
  showMessage: {
    type: Boolean,
    default: true,
  },
  /**
   * 全局：是否预留错误信息占位高度
   * @default false
   */
  reserveErrorSpace: {
    type: Boolean,
    default: false,
  },
  /**
   * 行内表单模式
   * @default false
   */
  inline: {
    type: Boolean,
    default: false,
  },
  /**
   * 必填星号位置
   * @default 'left'
   */
  requireAsteriskPosition: {
    type: String as PropType<RequireAsteriskPosition>,
    default: 'left',
  },
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
