import type CpContainer from './container.vue'
import type CpHeader from './header.vue'
import type CpFooter from './footer.vue'
import type CpMain from './main.vue'
import type CpAside from './aside.vue'

export type CpContainerInstance = InstanceType<typeof CpContainer> & unknown
export type CpHeaderInstance = InstanceType<typeof CpHeader> & unknown
export type CpFooterInstance = InstanceType<typeof CpFooter> & unknown
export type CpMainInstance = InstanceType<typeof CpMain> & unknown
export type CpAsideInstance = InstanceType<typeof CpAside> & unknown
