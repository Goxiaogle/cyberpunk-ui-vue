import { withInstall } from '@cyberpunk-vue/components/utils'
import Select from './src/select.vue'

/**
 * CpSelect 赛博朋克风格下拉选择器
 *
 * 支持多种尺寸、形态变体、可搜索/可清空功能。具有特色的切角造型。
 * 浮层定位基于 @floating-ui/dom，自动处理翻转、越界、以及触发器位置/尺寸变化的跟随。
 *
 * @example
 * ```vue
 * <CpSelect v-model="value" :options="options" placeholder="请选择" />
 * <CpSelect v-model="search" filterable clearable />
 * ```
 *
 * @see {@link SelectProps} 查看所有可用属性
 *
 * @slot default - 自定义选项内容
 * @slot prefix - 触发器前缀
 * @slot empty - 无选项时的空状态
 */
export const CpSelect = withInstall(Select)
export default CpSelect

export * from './src/select'
export type { SelectInstance } from './src/instance'
