import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'
import type { RadioValueType, RadioType } from '../../radio/src/radio'

/**
 * CpRadioGroup 组件 Props 定义
 *
 * @description 单选框组容器，管理多个 CpRadio 的选中状态。
 *
 * @example
 * ```vue
 * <CpRadioGroup v-model="selected">
 *   <CpRadio label="A">选项 A</CpRadio>
 *   <CpRadio label="B">选项 B</CpRadio>
 *   <CpRadio label="C">选项 C</CpRadio>
 * </CpRadioGroup>
 * ```
 */
export const radioGroupProps = {
  /**
   * 绑定值 (v-model)
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValueType>,
    default: undefined,
  },
  /**
   * 是否禁用所有子单选框
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 子单选框尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'md',
  },
  /**
   * 子单选框类型（颜色预设）
   * @default 'primary'
   */
  type: {
    type: String as PropType<RadioType>,
    default: 'primary',
  },
  /**
   * 原生 name 属性，应用于所有子 Radio
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * 布局方向
   * @default 'horizontal'
   */
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
} as const

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

/**
 * CpRadioGroup 组件事件定义
 */
export const radioGroupEmits = {
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

export type RadioGroupEmits = typeof radioGroupEmits
