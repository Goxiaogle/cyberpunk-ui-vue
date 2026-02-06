import { withInstall } from '../utils'
import Dropdown from './src/dropdown.vue'

/**
 * CpDropdown 赛博朋克风格下拉选择器
 *
 * 支持多种尺寸、形态变体、可搜索/可清空功能。具有特色的切角造型。
 *
 * @example
 * ```vue
 * <CpDropdown v-model="value" :options="options" placeholder="请选择" />
 * <CpDropdown v-model="search" filterable clearable />
 * ```
 *
 * @see {@link DropdownProps} 查看所有可用属性
 *
 * @slot default - 自定义选项内容
 * @slot prefix - 触发器前缀
 * @slot empty - 无选项时的空状态
 */
export const CpDropdown = withInstall(Dropdown)
export default CpDropdown

export * from './src/dropdown'
export type { DropdownInstance } from './src/instance'
