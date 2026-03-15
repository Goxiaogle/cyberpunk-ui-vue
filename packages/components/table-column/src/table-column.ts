import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 列特殊类型
 * - `default` — 普通数据列
 * - `selection` — 多选列
 * - `index` — 序号列
 * - `expand` — 展开列
 */
export type ColumnType = 'default' | 'selection' | 'index' | 'expand'

/**
 * CpTableColumn 组件 Props 定义
  * @category 展示组件
 * @displayName CpTableColumn 表格列
  * @description 表格列定义组件，支持 default / selection / index / expand 四种列类型
  * @slots default - 自定义单元格 (作用域: { row, column, $index })；当 type="expand" 时作为展开内容 (作用域: { row, $index })
 * @slots header - 自定义表头 (作用域: { column, $index })
 * @example
 * ```vue
 * <!-- 普通数据列 -->
 * <CpTableColumn prop="name" label="姓名" sortable />
 *
 * <!-- 自定义单元格渲染 -->
 * <CpTableColumn prop="status" label="状态">
 *   <template #default="{ row }">
 *     <CpTag :type="row.active ? 'success' : 'error'">
 *       {{ row.active ? '在线' : '离线' }}
 *     </CpTag>
 *   </template>
 * </CpTableColumn>
 *
 * <!-- 展开列：点击箭头展开行详情 -->
 * <CpTableColumn type="expand">
 *   <template #default="{ row }">
 *     <p>邮箱: {{ row.email }}</p>
 *     <p>备注: {{ row.remark }}</p>
 *   </template>
 * </CpTableColumn>
 *
 * <!-- 多选列 -->
 * <CpTableColumn type="selection" />
 *
 * <!-- 序号列 -->
 * <CpTableColumn type="index" label="#" :width="50" />
 * ```
 */
export const tableColumnProps = {
  /**
   * 列特殊类型
   * @default 'default'
   */
  type: {
    type: String as PropType<ColumnType>,
    default: 'default',
  },
  /**
   * 数据字段名
   * @default ''
   */
  prop: {
    type: String,
    default: '',
  },
  /**
   * 列标题
   * @default ''
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * 列宽 (px 或百分比)
   */
  width: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 最小列宽
   */
  minWidth: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 是否可排序
   * @default false
   */
  sortable: {
    type: Boolean,
    default: false,
  },
  /**
   * 内容对齐方式
   * @default 'left'
   */
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  /**
   * 表头对齐方式 (默认跟随 align)
   */
  headerAlign: {
    type: String as PropType<'left' | 'center' | 'right' | ''>,
    default: '',
  },
} as const

export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
