import { withInstall } from '../utils'
import Spacer from './src/spacer.vue'

/**
 * CpSpacer 弹性空间占位组件
 *
 * 在 Flex 布局中填充剩余空间，实现元素的间距分布。
 *
 * @example
 * ```vue
 * <div style="display: flex">
 *   <CpButton>左侧</CpButton>
 *   <CpSpacer />
 *   <CpButton>右侧</CpButton>
 * </div>
 * ```
 */
export const CpSpacer = withInstall(Spacer)
export default CpSpacer

export * from './src/spacer'
