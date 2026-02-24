import { withInstall } from '@cyberpunk-vue/components/utils'
import CheckboxGroup from './src/checkbox-group.vue'

/**
 * CpCheckboxGroup 复选框组
 *
 * 用于管理多个 CpCheckbox 的选中状态。
 *
 * @example
 * ```vue
 * <CpCheckboxGroup v-model="selected">
 *   <CpCheckbox label="A">选项 A</CpCheckbox>
 *   <CpCheckbox label="B">选项 B</CpCheckbox>
 * </CpCheckboxGroup>
 * ```
 *
 * @see {@link CheckboxGroupProps} 查看所有可用属性
 */
export const CpCheckboxGroup = withInstall(CheckboxGroup)
export default CpCheckboxGroup

export * from './src/checkbox-group'
export * from './src/constants'
export type { CheckboxGroupInstance } from './src/instance'
