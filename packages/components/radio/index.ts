import { withInstall } from '../utils'
import Radio from './src/radio.vue'

/**
 * CpRadio 赛博朋克风格单选框
 *
 * 用于单选场景，通常配合 CpRadioGroup 使用。
 *
 * @example
 * ```vue
 * <CpRadioGroup v-model="selected">
 *   <CpRadio label="A">选项 A</CpRadio>
 *   <CpRadio label="B">选项 B</CpRadio>
 * </CpRadioGroup>
 * ```
 *
 * @see {@link RadioProps} 查看所有可用属性
 */
export const CpRadio = withInstall(Radio)
export default CpRadio

export * from './src/radio'
export type { RadioInstance } from './src/instance'
