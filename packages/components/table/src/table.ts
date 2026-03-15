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
 * 树形数据配置
 */
export interface TableTreeProps {
  /** 子节点字段名 @default 'children' */
  children?: string
  /** 标记是否有子节点的字段名（用于懒加载场景） */
  hasChildren?: string
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
  columnType: 'default' | 'selection' | 'index' | 'expand'
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
  * @category 展示组件
 * @displayName CpTable 表格
  * @description 赛博朋克风格数据表格，支持排序、多选、条纹、边框、固定表头、树形展开、行展开。配合 CpTableColumn 声明式定义列
 * @slots default - CpTableColumn 列定义
 * @slots empty - 空数据自定义内容 (默认: CpEmpty 组件)
 * @slots loading - 自定义加载中内容（替代默认 CpLoading + 文字）
 * @exposes clearSelection() - 清空选择
 * @exposes getSelectionRows() - 获取选中行数组
 * @exposes sort(prop, order) - 编程式排序
 * @exposes setCurrentRow(row) - 设置当前行
 * @exposes toggleRowExpand(row, expanded?) - 切换行展开（展开列模式）
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpTable :data="tableData" stripe border>
 *   <CpTableColumn prop="name" label="姓名" sortable />
 *   <CpTableColumn prop="age" label="年龄" sortable />
 * </CpTable>
 *
 * <!-- 行展开：使用 type="expand" 列 -->
 * <CpTable :data="tableData" row-key="id">
 *   <CpTableColumn type="expand">
 *     <template #default="{ row }">
 *       <p>邮箱: {{ row.email }}</p>
 *       <p>备注: {{ row.remark }}</p>
 *     </template>
 *   </CpTableColumn>
 *   <CpTableColumn prop="name" label="姓名" />
 * </CpTable>
 *
 * <!-- 行展开：控制哪些行可展开 -->
 * <CpTable
 *   :data="tableData"
 *   row-key="id"
 *   :row-expandable="(row) => !!row.details"
 *   :expand-row-keys="[1, 3]"
 *   @expand-change="handleExpandChange"
 * >
 *   <CpTableColumn type="expand">
 *     <template #default="{ row }">{{ row.details }}</template>
 *   </CpTableColumn>
 *   <CpTableColumn prop="name" label="姓名" />
 * </CpTable>
 * ```
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
  /**
   * 是否处于加载状态
   * 加载时会在表格内容上显示遮罩层，阻止用户交互
   * @default false
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * 加载中显示的文字
   * @default '加载中...'
   */
  loadingText: {
    type: String,
    default: '加载中...',
  },
  /**
   * 是否处于禁用状态
   * 禁用时表格整体变灰且不可交互
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 树形数据配置
   * 传入后启用树形模式，表格将递归渲染子行
   * @example { children: 'children' }
   */
  treeProps: {
    type: Object as PropType<TableTreeProps>,
    default: undefined,
  },
  /**
   * 是否默认展开所有树形行
   * @default false
   */
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  /**
   * 每级层级缩进像素
   * @default 16
   */
  indent: {
    type: Number,
    default: 16,
  },
  /**
   * 受控展开行 key 数组（展开列模式）
   * 传入后组件变为受控模式，由外部决定哪些行处于展开状态
   * @example [1, 3, 5]
   */
  expandRowKeys: {
    type: Array as PropType<(string | number)[]>,
    default: undefined,
  },
  /**
   * 控制每行是否可展开
   * 不传则所有行均可展开；返回 false 的行不显示展开按钮
   * @param row 当前行数据
   * @returns true 可展开 / false 不可展开
   * @example (row) => !!row.details
   */
  rowExpandable: {
    type: Function as PropType<(row: any) => boolean>,
    default: undefined,
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
  /** 树形行展开/折叠 或 行展开列展开/折叠 */
  'expand-change': (row: any, expanded: boolean) => true,
}

export type TableEmits = typeof tableEmits
