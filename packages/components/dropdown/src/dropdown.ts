/**
 * @deprecated 自 1.13.0 起 `CpDropdown` 已更名为 `CpSelect`，本模块仅作向后兼容别名保留。
 * 新代码请直接从 `@cyberpunk-vue/components/select` 导入。语义上 Dropdown 通常指动作菜单，
 * 而表单选值控件应叫 Select —— 这与 Element Plus / Ant Design / PrimeVue 等主流库保持一致。
 */
import {
  selectProps,
  selectEmits,
  type SelectOption,
  type SelectSize,
  type SelectShape,
  type SelectVariant,
  type SelectPlacement,
  type SelectProps,
  type SelectEmits,
} from '@cyberpunk-vue/components/select/src/select'

/** @deprecated 请使用 `SelectOption` */
export type DropdownOption = SelectOption
/** @deprecated 请使用 `SelectSize` */
export type DropdownSize = SelectSize
/** @deprecated 请使用 `SelectShape` */
export type DropdownShape = SelectShape
/** @deprecated 请使用 `SelectVariant` */
export type DropdownVariant = SelectVariant
/** @deprecated 请使用 `SelectPlacement` */
export type DropdownPlacement = SelectPlacement
/** @deprecated 请使用 `SelectProps` */
export type DropdownProps = SelectProps
/** @deprecated 请使用 `SelectEmits` */
export type DropdownEmits = SelectEmits

/** @deprecated 请使用 `selectProps` */
export const dropdownProps = selectProps
/** @deprecated 请使用 `selectEmits` */
export const dropdownEmits = selectEmits
