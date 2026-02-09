import { withInstall } from '../utils'
import Col from './src/col.vue'

/**
 * CpCol 栅格列组件
 *
 * @description 赛博朋克风格 24 栅格列，配合 CpRow 使用。
 * 支持 span 列宽、offset 偏移、push/pull 位移。
 *
 * @example
 * ```vue
 * <CpRow :gutter="20">
 *   <CpCol :span="8">1/3</CpCol>
 *   <CpCol :span="16">2/3</CpCol>
 * </CpRow>
 * ```
 */
export const CpCol = withInstall(Col)

export default CpCol
export * from './src/col'
export type { CpColInstance } from './src/instance'
