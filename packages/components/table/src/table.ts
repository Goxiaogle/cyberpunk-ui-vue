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
 * 列排序模式
 * - `false`：不可排序
 * - `true`：组件内部本地排序
 * - `'custom'`：只维护排序 UI 与事件，由调用者远程排序
 */
export type ColumnSortable = boolean | 'custom'

/**
 * 排序配置
 */
export interface SortState {
  prop: string
  order: SortOrder
}

/**
 * sort-change 事件 payload
 */
export interface SortChangePayload extends SortState {
  /** 当前触发排序的列配置；通过编程式排序且未匹配到列时为 null */
  column: TableColumnConfig | null
}

/**
 * 排序取值配置
 */
export type SortBy = string | string[] | ((row: any) => any)

/**
 * 自定义本地排序函数
 */
export type SortMethod = (a: any, b: any, order: Exclude<SortOrder, null>) => number

/**
 * 树形 + 多选联动策略
 */
export type TreeCheckMode = 'strict' | 'cascade' | 'bubble'

/**
 * selection-change / select / select-all 事件 payload 的输出形态
 * - `'rows'`：数组，每项为完整行对象（默认）
 * - `'keys'`：数组，每项为该行的 rowKey 值
 * - `'detail'`：结构化对象，同时返回 checked 与 half-checked 两套数据
 */
export type SelectionPayloadShape = 'rows' | 'keys' | 'detail'

/**
 * `selectionPayload === 'detail'` 时的事件 payload 结构
 */
export interface SelectionDetail {
  /** 完全选中的行对象数组 */
  rows: any[]
  /** 完全选中行的 rowKey 数组 */
  keys: (string | number)[]
  /** 半选行对象数组（仅 cascade / bubble 模式可能非空） */
  halfRows: any[]
  /** 半选行的 rowKey 数组 */
  halfKeys: (string | number)[]
}

/**
 * selection-change 等事件 payload 的联合类型
 * 具体形态由 `selectionPayload` prop 决定
 */
export type SelectionPayload = any[] | (string | number)[] | SelectionDetail

/**
 * 行 class 绑定值，保持与 Vue `:class` 支持的形态一致
 */
export type TableRowClassValue = string | string[] | Record<string, boolean> | null | undefined

/**
 * rowClassName 函数参数
 */
export interface TableRowClassNameParams {
  /** 当前行数据 */
  row: any
  /** 当前渲染行索引（树形表格下为展开后的可见行索引） */
  rowIndex: number
}

/**
 * 行 class 配置
 */
export type TableRowClassName = TableRowClassValue | ((params: TableRowClassNameParams) => TableRowClassValue)

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
  /** 最大列宽 */
  maxWidth?: string | number
  /** 是否允许拖动表头分割线调整列宽 */
  resizable: boolean
  /** 是否可排序 */
  sortable: ColumnSortable
  /** 自定义本地排序函数 */
  sortMethod?: SortMethod
  /** 自定义排序取值字段或函数 */
  sortBy?: SortBy
  /** 排序切换顺序 */
  sortOrders?: SortOrder[]
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
 * @exposes getSelectionRows() - 获取选中行对象数组
 * @exposes getSelectionKeys() - 获取选中行 rowKey 数组
 * @exposes getHalfCheckedRows() - 获取半选行对象数组（仅联动模式）
 * @exposes getHalfCheckedKeys() - 获取半选行 rowKey 数组（仅联动模式）
 * @exposes getSelectionDetail() - 获取结构化选中详情 { rows, keys, halfRows, halfKeys }
 * @exposes setSelectionKeys(keys) - 程序式设置选中 rowKey 数组
 * @exposes sort(prop, order) - 编程式排序
 * @exposes clearSort() - 清空排序
 * @exposes getSortState() - 获取当前排序状态
 * @exposes setCurrentRow(row) - 设置当前行
 * @exposes toggleRowExpand(row, expanded?) - 切换行展开（展开列模式）
 * @example
 * ```vue
 * <!-- 远程排序：只维护排序状态，不做本地排序 -->
 * <CpTable
 *   v-model:sort-state="sortState"
 *   :data="tableData"
 *   manual-sort
 *   @sort-change="fetchTableData"
 * >
 *   <CpTableColumn prop="createdAt" label="创建时间" sortable />
 * </CpTable>
 *
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
 *
 * <!-- 行状态高亮：按业务条件返回 class -->
 * <CpTable
 *   :data="tableData"
 *   :row-class-name="({ row }) => row.status === 'error' ? 'is-error-row' : ''"
 * >
 *   <CpTableColumn prop="name" label="姓名" />
 *   <CpTableColumn prop="status" label="状态" />
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
   * 行 class 名
   *
   * 可传字符串、数组、对象，或函数按行动态返回 class。函数参数包含当前行数据与渲染索引。
   * 常用于根据业务状态高亮一行或多行；组件内置可直接使用的状态类：
   * `is-success-row`、`is-warning-row`、`is-error-row`、`is-info-row`。
   *
   * @example
   * ```vue
   * <CpTable
   *   :data="tableData"
   *   :row-class-name="({ row }) => row.status === 'offline' ? 'is-error-row' : ''"
   * />
   * ```
   */
  rowClassName: {
    type: [String, Array, Object, Function] as PropType<TableRowClassName>,
    default: '',
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
   * 是否允许拖动表头分割线调整列宽
   *
   * 开启后，列的 `width` 作为初始宽度，拖动后的运行时宽度会受
   * `minWidth` / `maxWidth` 限制。
   *
   * @default false
   */
  resizable: {
    type: Boolean,
    default: false,
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
   *
   * 仅作为非受控模式下的初始排序状态；后续外部变更不会自动覆盖内部状态。
   */
  defaultSort: {
    type: Object as PropType<SortState>,
  },
  /**
   * 受控排序状态（配合 `v-model:sort-state`）
   *
   * 传入后排序状态由外部维护；组件点击表头只触发 `update:sortState`
   * 与 `sort-change`，视觉状态会跟随外部传回的新值。
   *
   * @example
   * ```vue
   * <CpTable v-model:sort-state="sortState" :data="rows" />
   * ```
   */
  sortState: {
    type: Object as PropType<SortState>,
    default: undefined,
  },
  /**
   * 手动排序模式
   *
   * 开启后组件只维护排序状态与排序图标，不会对 `data` 做本地排序。
   * 适用于服务端排序、URL 状态同步、外部 store 管理等场景。
   *
   * 也可以在列上设置 `sortable="custom"` 仅让某一列进入手动排序。
   *
   * @default false
   */
  manualSort: {
    type: Boolean,
    default: false,
  },
  /**
   * 排序切换顺序
   *
   * 默认按升序、降序、取消排序循环。可传 `['descending', 'ascending']`
   * 让列始终保持有序状态，不进入取消排序。
   *
   * @default ['ascending', 'descending', null]
   */
  sortOrders: {
    type: Array as PropType<SortOrder[]>,
    default: () => ['ascending', 'descending', null],
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
  /**
   * 树形 + 多选场景下，父子节点的联动策略
   * - `'strict'`（默认）：父子独立，互不影响
   * - `'cascade'`：完全双向联动。勾父 → 全部后代勾选；勾/取子 → 父按直接子状态自动更新（含半选）
   * - `'bubble'`：勾选任何节点 → 级联勾选全部后代 + 向上冒泡勾选祖先；取消父 → 后代全部取消；取消子不影响父（子全部取消时父仍可保持选中）
   * 仅在同时启用 `treeProps` 与 `type="selection"` 列时生效
   * @default 'strict'
   */
  treeCheckMode: {
    type: String as PropType<TreeCheckMode>,
    default: 'strict',
  },
  /**
   * selection-change / select / select-all 事件 payload 的输出形态
   * - `'rows'`（默认）：数组，每项是完整行对象（等价原行为）
   * - `'keys'`：数组，每项是该行的 rowKey 值
   * - `'detail'`：结构化对象 `{ rows, keys, halfRows, halfKeys }`，同时返回全选与半选
   * @default 'rows'
   */
  selectionPayload: {
    type: String as PropType<SelectionPayloadShape>,
    default: 'rows',
  },
  /**
   * `selectionPayload` 为 `'rows'` 或 `'keys'` 时，是否将半选节点也混入数组
   * 仅在联动模式（cascade / bubble）下可能产生半选节点
   * `selectionPayload === 'detail'` 时此 prop 无效（detail 本身已分离全选与半选）
   * @default false
   */
  includeHalfChecked: {
    type: Boolean,
    default: false,
  },
  /**
   * 受控选中 rowKey 数组（配合 `v-model:checked-keys`）
   * 典型场景：表单回填、编辑已有记录、权限/批量分配等
   *
   * - 传入 `undefined`（默认）：组件使用内部状态，非受控
   * - 传入数组（含空数组）：进入受控模式，外部数组为真相来源
   *
   * 回填时**不做级联归一化**：传 `[3]` 就只选中 id=3 那一行，即便在 cascade/bubble 模式下也不会
   * 自动补勾父节点或后代。父节点的 indeterminate 视觉态由组件自动计算。
   * 这样保证 `v-model:checkedKeys` 读写对称——`getSelectionKeys()` 输出什么，回填就能用什么。
   *
   * @example
   * ```vue
   * <CpTable v-model:checked-keys="form.selectedIds" row-key="id" :data="list">
   *   <CpTableColumn type="selection" />
   * </CpTable>
   * ```
   */
  checkedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: undefined,
  },
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>

/**
 * CpTable 事件定义
 * selection / select / select-all payload 的具体形态由 `selectionPayload` prop 决定
 */
export const tableEmits = {
  /** 排序变化 */
  'sort-change': (_sortState: SortChangePayload) => true,
  /** 列宽拖动变化 */
  'column-resize': (_column: TableColumnConfig, _width: number, _oldWidth: number) => true,
  /** 行点击 */
  'row-click': (row: any, index: number, event: MouseEvent) => true,
  /** 选中行变化 */
  'selection-change': (selection: SelectionPayload) => true,
  /** 全选 */
  'select-all': (selection: SelectionPayload) => true,
  /** 单行选中 */
  'select': (selection: SelectionPayload, row: any) => true,
  /** 当前行变化 */
  'current-change': (currentRow: any | null, oldRow: any | null) => true,
  /** 树形行展开/折叠 或 行展开列展开/折叠 */
  'expand-change': (row: any, expanded: boolean) => true,
  /** 受控 checkedKeys 变化（用于 `v-model:checked-keys`） */
  'update:checkedKeys': (keys: (string | number)[]) => true,
  /** 受控 sortState 变化（用于 `v-model:sort-state`） */
  'update:sortState': (_sortState: SortState) => true,
}

export type TableEmits = typeof tableEmits
