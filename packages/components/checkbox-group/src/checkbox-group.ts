import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'
import type { CheckboxValueType, CheckboxType } from '../../checkbox/src/checkbox'

/**
 * CpCheckboxGroup 组件 Props 定义
 *
 * @description 复选框组容器，管理多个 CpCheckbox 的选中状态。
 *
 * @example
 * ```vue
 * <CpCheckboxGroup v-model="selected">
 *   <CpCheckbox label="A">选项 A</CpCheckbox>
 *   <CpCheckbox label="B">选项 B</CpCheckbox>
 *   <CpCheckbox label="C">选项 C</CpCheckbox>
 * </CpCheckboxGroup>
 * ```
 */
export const checkboxGroupProps = {
  /**
   * 绑定值数组 (v-model)
   */
  modelValue: {
    type: Array as PropType<CheckboxValueType[]>,
    default: () => [],
  },
  /**
   * 是否禁用所有子复选框
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 子复选框尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'md',
  },
  /**
   * 子复选框类型（颜色预设）
   * @default 'primary'
   */
  type: {
    type: String as PropType<CheckboxType>,
    default: 'primary',
  },
  /**
   * 最少选中数量
   */
  min: {
    type: Number,
    default: undefined,
  },
  /**
   * 最多选中数量
   */
  max: {
    type: Number,
    default: undefined,
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

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

/**
 * CpCheckboxGroup 组件事件定义
 */
export const checkboxGroupEmits = {
  /**
   * 值变化时触发 (v-model 绑定)
   */
  'update:modelValue': (value: CheckboxValueType[]) => Array.isArray(value),
  /**
   * 值变化时触发
   */
  change: (value: CheckboxValueType[]) => Array.isArray(value),
}

export type CheckboxGroupEmits = typeof checkboxGroupEmits
