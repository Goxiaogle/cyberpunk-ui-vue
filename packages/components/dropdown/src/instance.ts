import type Dropdown from './dropdown.vue'

/**
 * CpDropdown 组件实例类型
 * 
 * @description 用于 ref 引用时获取正确的类型提示
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import type { DropdownInstance } from '@cyberpunk-vue/components'
 * const dropdownRef = ref<DropdownInstance>()
 * dropdownRef.value?.open()
 * </script>
 * ```
 */
export type DropdownInstance = InstanceType<typeof Dropdown> & unknown
