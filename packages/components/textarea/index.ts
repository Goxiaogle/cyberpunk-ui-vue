import { withInstall } from '../utils'
import Textarea from './src/textarea.vue'

export const CpTextarea = withInstall(Textarea)
export default CpTextarea

export * from './src/textarea'
export type { TextareaInstance } from './src/instance'
