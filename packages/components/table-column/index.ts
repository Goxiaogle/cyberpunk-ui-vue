import { withInstall } from '../utils'
import TableColumn from './src/table-column.vue'

/**
 * CpTableColumn 表格列定义组件
 *
 * @description 配合 CpTable 使用，声明式定义表格列。
 *
 * @example
 * ```vue
 * <CpTableColumn prop="name" label="姓名" sortable />
 * <CpTableColumn type="selection" />
 * ```
 */
export const CpTableColumn = withInstall(TableColumn)

export default CpTableColumn
export * from './src/table-column'
export type { CpTableColumnInstance } from './src/instance'
