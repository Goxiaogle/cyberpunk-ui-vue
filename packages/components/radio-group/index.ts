import { withInstall } from '../utils'
import RadioGroup from './src/radio-group.vue'

/**
 * CpRadioGroup 单选框组
 *
 * 用于管理多个 CpRadio 的选中状态。
 *
 * @example
 * ```vue
 * <CpRadioGroup v-model="picked">
 *   <CpRadio value="A">选项 A</CpRadio>
 *   <CpRadio value="B">选项 B</CpRadio>
 * </CpRadioGroup>
 * ```
 *
 * @see {@link RadioGroupProps} 查看所有可用属性
 */
export const CpRadioGroup = withInstall(RadioGroup)
export default CpRadioGroup

export * from './src/radio-group'
export * from './src/constants'
export type { RadioGroupInstance } from './src/instance'
