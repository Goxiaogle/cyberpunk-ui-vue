import { withInstall } from '@cyberpunk-vue/components/utils'
import Radio from './src/radio.vue'

/**
 * CpRadio 赛博朋克风格单选框
 *
 * 用于单选场景，支持分组、自定义颜色、八边形指示器设计。
 *
 * @example
 * ```vue
 * <CpRadio v-model="picked" value="A">选项 A</CpRadio>
 * ```
 *
 * @see {@link RadioProps} 查看所有可用属性
 */
export const CpRadio = withInstall(Radio)
export default CpRadio

export * from './src/radio'
export type { RadioInstance } from './src/instance'
