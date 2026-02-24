import { withInstall } from '@cyberpunk-vue/components/utils'
import Pagination from './src/pagination.vue'

/**
 * CpPagination 分页组件
 *
 * @description 赛博朋克风格分页导航组件。
 * 支持布局配置、多种颜色类型、形状、尺寸，以及 v-model 双向绑定。
 *
 * @example
 * ```vue
 * <CpPagination
 *   v-model:currentPage="page"
 *   v-model:pageSize="size"
 *   :total="100"
 *   layout="total, sizes, prev, pager, next, jumper"
 * />
 * ```
 */
export const CpPagination = withInstall(Pagination)

export default CpPagination
export * from './src/pagination'
export type { CpPaginationInstance } from './src/instance'
