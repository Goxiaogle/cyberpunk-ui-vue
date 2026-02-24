import { withInstall } from '@cyberpunk-vue/components/utils'
import Checkbox from './src/checkbox.vue'

/**
 * CpCheckbox 赛博朋克风格复选框
 *
 * 用于多选场景，支持半选状态、分组、自定义颜色。
 *
 * @example
 * ```vue
 * <CpCheckbox v-model="checked">同意协议</CpCheckbox>
 * ```
 *
 * @see {@link CheckboxProps} 查看所有可用属性
 */
export const CpCheckbox = withInstall(Checkbox)
export default CpCheckbox

export * from './src/checkbox'
export type { CheckboxInstance } from './src/instance'
