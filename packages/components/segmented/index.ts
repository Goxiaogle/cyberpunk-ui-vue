import { withInstall } from '../utils'
import Segmented from './src/segmented.vue'

/**
 * CpSegmented 分段选择器
 *
 * 一组按钮式互斥选项，选中项带滑块高亮效果。
 *
 * @example
 * ```vue
 * <CpSegmented v-model="active" :options="['日', '周', '月']" />
 * ```
 *
 * @see {@link SegmentedProps} 查看所有可用属性
 */
export const CpSegmented = withInstall(Segmented)
export default CpSegmented

export * from './src/segmented'
export type { SegmentedInstance } from './src/instance'
