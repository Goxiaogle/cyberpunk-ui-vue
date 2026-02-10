import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 表格颜色类型
 */
export type TableType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 表格尺寸
 */
export type TableSize = Size

/**
 * 排序方向
 */
export type SortOrder = 'ascending' | 'descending' | null

/**
 * 排序配置
 */
export interface SortState {
  prop: string
  order: SortOrder
}

/**
 * 列定义 (内部使用，由 CpTableColumn 注册)
 */
export interface TableColumnConfig {
  /** 唯一标识 (内部生成) */
  id: string
  /** 数据字段名 */
  prop: string
  /** 列标题 */
  label: string
  /** 列宽 */
  width?: string | number
  /** 最小列宽 */
  minWidth?: string | number
  /** 是否可排序 */
  sortable: boolean
  /** 特殊列类型 */
  columnType: 'default' | 'selection' | 'index'
  /** 内容对齐 */
  align: 'left' | 'center' | 'right'
  /** 表头对齐 */
  headerAlign: 'left' | 'center' | 'right' | ''
  /** 自定义渲染插槽 */
  slots: {
    default?: (...args: any[]) => any
    header?: (...args: any[]) => any
  }
}

/**
 * CpTable 组件 Props 定义
 */
export const tableProps = {
  /**
   * 表格数据
   */
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  /**
   * 尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<TableSize>,
    default: 'md',
  },
  /**
   * 颜色类型
   * @default 'default'
   */
  type: {
    type: String as PropType<TableType>,
    default: 'default',
  },
  /**
   * 是否显示条纹行
   * @default false
   */
  stripe: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否显示边框
   * @default false
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否高亮当前行
   * @default false
   */
  highlightCurrentRow: {
    type: Boolean,
    default: false,
  },
  /**
   * 固定高度 (启用固定表头)
   */
  height: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 最大高度
   */
  maxHeight: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 空数据文案
   * @default '暂无数据'
   */
  emptyText: {
    type: String,
    default: '暂无数据',
  },
  /**
   * 行唯一标识字段名
   * @default 'id'
   */
  rowKey: {
    type: [String, Function] as PropType<string | ((row: any) => string | number)>,
    default: 'id',
  },
  /**
   * 默认排序
   */
  defaultSort: {
    type: Object as PropType<SortState>,
  },
  /**
   * 自定义主题色（CSS 颜色值）
   * 优先级高于 type，设置后会覆盖 --cp-table-color
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否显示表头
   * @default true
   */
  showHeader: {
    type: Boolean,
    default: true,
  },
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>

/**
 * CpTable 事件定义
 */
export const tableEmits = {
  /** 排序变化 */
  'sort-change': (sortState: SortState) => true,
  /** 行点击 */
  'row-click': (row: any, index: number, event: MouseEvent) => true,
  /** 选中行变化 */
  'selection-change': (selection: any[]) => true,
  /** 全选 */
  'select-all': (selection: any[]) => true,
  /** 单行选中 */
  'select': (selection: any[], row: any) => true,
  /** 当前行变化 */
  'current-change': (currentRow: any | null, oldRow: any | null) => true,
}

export type TableEmits = typeof tableEmits
