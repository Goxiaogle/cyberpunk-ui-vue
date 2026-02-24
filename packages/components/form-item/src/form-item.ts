import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'
import type { FormRule } from '@cyberpunk-vue/components/form/src/form'

/**
 * CpFormItem Props
 */
export const formItemProps = {
  /** 标签文本 */
  label: {
    type: String,
    default: '',
  },
  /**
   * 对应 Form model 中的字段名
   * 用于验证和重置
   */
  prop: {
    type: String,
    default: '',
  },
  /**
   * 是否必填（显示星号标记）
   * @default false
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * 单项验证规则（覆盖 Form 级规则）
   */
  rules: {
    type: [Object, Array] as PropType<FormRule | FormRule[]>,
    default: undefined,
  },
  /**
   * 覆盖 Form 的 labelWidth
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 独立控制是否显示错误信息
   * 不传时继承 Form 设置
   */
  showMessage: {
    type: Boolean,
    default: undefined,
  },
  /**
   * 独立控制是否预留错误信息占位高度
   * 不传时继承 Form 设置
   */
  reserveErrorSpace: {
    type: Boolean,
    default: undefined,
  },
  /**
   * 手动设置错误信息
   */
  error: {
    type: String,
    default: '',
  },
  /**
   * 覆盖 Form 的 size
   */
  size: {
    type: [String, Number] as PropType<Size>,
    default: undefined,
  },
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
