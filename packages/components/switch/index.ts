import { withInstall } from '@cyberpunk-vue/components/utils'
import Switch from './src/switch.vue'

/**
 * CpSwitch 赛博朋克风格开关
 *
 * 用于二态选择场景，支持异步切换、内嵌文字、自定义颜色。
 *
 * @example
 * ```vue
 * <CpSwitch v-model="enabled" />
 * <CpSwitch v-model="dark" active-text="ON" inactive-text="OFF" />
 * ```
 *
 * @see {@link SwitchProps} 查看所有可用属性
 */
export const CpSwitch = withInstall(Switch)
export default CpSwitch

export * from './src/switch'
export type { SwitchInstance } from './src/instance'
