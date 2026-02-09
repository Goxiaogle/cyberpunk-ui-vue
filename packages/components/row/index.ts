import { withInstall } from '../utils'
import Row from './src/row.vue'

/**
 * CpRow 栅格行容器
 *
 * @description 赛博朋克风格 Flex 行容器，配合 CpCol 实现 24 栅格布局。
 * 支持 gutter 间距、justify/align 对齐、自动换行。
 *
 * @example
 * ```vue
 * <CpRow :gutter="20">
 *   <CpCol :span="12">左</CpCol>
 *   <CpCol :span="12">右</CpCol>
 * </CpRow>
 * ```
 */
export const CpRow = withInstall(Row)

export default CpRow
export * from './src/row'
export type { CpRowInstance } from './src/instance'
