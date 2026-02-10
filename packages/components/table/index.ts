import { withInstall } from '../utils'
import Table from './src/table.vue'

/**
 * CpTable 数据表格组件
 *
 * @description 赛博朋克风格数据表格，支持排序、多选、条纹、边框、固定表头。
 * 配合 CpTableColumn 声明式定义列。
 *
 * @example
 * ```vue
 * <CpTable :data="tableData" stripe border>
 *   <CpTableColumn prop="name" label="姓名" />
 *   <CpTableColumn prop="age" label="年龄" sortable />
 * </CpTable>
 * ```
 */
export const CpTable = withInstall(Table)

export default CpTable
export * from './src/table'
export type { CpTableInstance } from './src/instance'
