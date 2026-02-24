import { withInstall } from '@cyberpunk-vue/components/utils'
import InputNumber from './src/input-number.vue'

export const CpInputNumber = withInstall(InputNumber)
export default CpInputNumber

export * from './src/input-number'
export type { InputNumberInstance } from './src/instance'
