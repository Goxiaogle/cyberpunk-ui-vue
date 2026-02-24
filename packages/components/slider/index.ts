import { withInstall } from '@cyberpunk-vue/components/utils'
import Slider from './src/slider.vue'

/**
 * CpSlider 赛博朋克风格滑块
 *
 * 用于在给定的数值范围内进行选择，支持单值和范围模式。
 *
 * @example
 * ```vue
 * <CpSlider v-model="value" />
 * <CpSlider v-model="range" range :min="0" :max="100" />
 * <CpSlider v-model="value" :marks="{ 0: '低', 50: '中', 100: '高' }" />
 * ```
 *
 * @see {@link SliderProps} 查看所有可用属性
 */
export const CpSlider = withInstall(Slider)
export default CpSlider

export * from './src/slider'
export type { SliderInstance } from './src/instance'
