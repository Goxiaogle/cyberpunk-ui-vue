import { withInstall } from '@cyberpunk-vue/components/utils'
import Empty from './src/empty.vue'

/**
 * CpEmpty 赛博朋克风格空状态组件
 *
 * 用于无数据、无搜索结果、网络错误等场景的占位展示。
 * 组件始终撑满父容器，水平+垂直居中。
 *
 * @example
 * ```vue
 * <CpEmpty />
 * <CpEmpty title="无搜索结果" description="请尝试不同的关键词" />
 * <CpEmpty type="primary">
 *   <CpButton type="primary">刷新</CpButton>
 * </CpEmpty>
 * ```
 *
 * @see {@link EmptyProps} 查看所有可用属性
 */
export const CpEmpty = withInstall(Empty)
export default CpEmpty

export * from './src/empty'
export type { CpEmptyInstance } from './src/instance'
