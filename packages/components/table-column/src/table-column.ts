import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 列特殊类型
 * - `default` — 普通数据列
 * - `selection` — 多选列
 * - `index` — 序号列
 */
export type ColumnType = 'default' | 'selection' | 'index'

/**
 * CpTableColumn 组件 Props 定义
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
