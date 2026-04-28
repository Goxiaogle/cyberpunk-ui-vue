/**
 * @deprecated 自 1.13.0 起 `CpDropdown` 已更名为 `CpSelect`。
 *
 * 改名原因：业界（Element Plus / Ant Design / Naive UI / PrimeVue v4 等）一致约定
 * `Select` 用于表单选值控件，`Dropdown` 用于动作菜单，本组件属于前者。
 *
 * 本入口保留 `CpDropdown` 名称以及 `Dropdown*` 类型别名，作为兼容期过渡。
 * 新代码请使用：
 * ```ts
 * import { CpSelect, type SelectOption } from 'cyberpunk-ui-vue'
 * ```
 */
import { CpSelect } from '@cyberpunk-vue/components/select'

/** @deprecated 请使用 `CpSelect` */
export const CpDropdown = CpSelect
export default CpDropdown

export * from './src/dropdown'
export type { DropdownInstance } from './src/instance'
