import { withInstall } from '@cyberpunk-vue/components/utils'
import Popover from './src/popover.vue'

export const CpPopover = withInstall(Popover)
export default CpPopover

export * from './src/popover'
export type { PopoverInstance } from './src/instance'
