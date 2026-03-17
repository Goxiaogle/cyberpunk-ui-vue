import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'
import type { FormRule, LabelVerticalAlign } from '@cyberpunk-vue/components/form/src/form'

/**
 * CpFormItem Props
  * @category 表单组件
 * @displayName CpFormItem 表单项
  * @description 表单项组件，包含标签、内容区和错误信息区域，支持验证规则和 Form 上下文继承
 * @slots default - 表单控件
 * @slots label - 自定义标签内容
 * @slots error - 自定义错误信息 (作用域: { error })
 * @exposes validate() - 验证该表单项
 * @exposes resetField() - 重置该表单项
 * @exposes clearValidate() - 清除验证状态
 * @exposes validateState - 当前验证状态 (ref)
 * @exposes validateMessage - 当前验证信息 (ref)
 * @example
 * ```vue
 * <CpFormItem label="名称" prop="name" required reserve-error-space>
 *   <CpInput v-model="formData.name" />
 * </CpFormItem>
 * ```
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
  /**
   * 覆盖 Form 的 labelVerticalAlign
   * 不传时继承 Form 设置
   */
  labelVerticalAlign: {
    type: String as PropType<LabelVerticalAlign>,
    default: undefined,
  },
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
