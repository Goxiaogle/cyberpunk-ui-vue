import type { ExtractPropTypes, PropType } from 'vue'
import type { ColumnSortable, SortBy, SortMethod, SortOrder } from '@cyberpunk-vue/components/table/src/table'

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
 * <CpTableColumn prop="email" label="邮箱" :width="220" :min-width="160" :max-width="360" />
 * <CpTableColumn prop="createdAt" label="创建时间" sortable="custom" />
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
   * 最大列宽
   */
  maxWidth: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 是否允许拖动表头分割线调整当前列宽度
   *
   * 需要同时在 CpTable 上开启 `resizable` 才会生效。
   *
   * @default true
   */
  resizable: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否可排序
   *
   * - `false`：不可排序
   * - `true`：使用 CpTable 内置本地排序
   * - `'custom'`：只触发排序状态和事件，不做本地排序，适用于远程排序
   *
   * @default false
   */
  sortable: {
    type: [Boolean, String] as PropType<ColumnSortable>,
    default: false,
  },
  /**
   * 自定义本地排序函数
   *
   * 仅在 `sortable` 为 `true` 且表格未开启 `manualSort` 时生效。
   * 返回值规则与 `Array.prototype.sort` 一致。
   */
  sortMethod: {
    type: Function as PropType<SortMethod>,
    default: undefined,
  },
  /**
   * 自定义排序取值
   *
   * 支持字段名、字段名数组（依次比较）或函数。未设置时使用 `prop`。
   * 可用于展示字段与排序字段不一致，或需要嵌套字段排序的场景。
   */
  sortBy: {
    type: [String, Array, Function] as PropType<SortBy>,
    default: undefined,
  },
  /**
   * 当前列的排序切换顺序
   *
   * 未设置时继承 CpTable 的 `sortOrders`。
   *
   * @default undefined
   */
  sortOrders: {
    type: Array as PropType<SortOrder[]>,
    default: undefined,
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
