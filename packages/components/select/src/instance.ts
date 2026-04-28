import type Select from './select.vue'

/**
 * CpSelect 组件实例类型
 *
 * @description 用于 ref 引用时获取正确的类型提示
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * import type { SelectInstance } from '@cyberpunk-vue/components'
 * const selectRef = ref<SelectInstance>()
 * selectRef.value?.open()
 * </script>
 * ```
 */
export type SelectInstance = InstanceType<typeof Select> & unknown
