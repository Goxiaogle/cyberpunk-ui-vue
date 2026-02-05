import { withInstall } from '../utils'
import StatusIndicator from './src/status-indicator.vue'

export const CpStatusIndicator = withInstall(StatusIndicator)
export default CpStatusIndicator

export * from './src/status-indicator'
export type { CpStatusIndicatorInstance } from './src/instance'
