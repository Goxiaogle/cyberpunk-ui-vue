<script setup lang="ts">
/**
 * CpTable - 赛博朋克风格数据表格
 * 支持排序、多选、条纹、边框、固定表头、树形数据
 */
import { computed, ref, shallowRef, toRaw, watch, provide } from 'vue'
import { useNamespace, isPresetSize } from '@cyberpunk-vue/hooks'
import { tableProps, tableEmits, type TableColumnConfig, type SortOrder, type SortState, type SortChangePayload, type SelectionDetail, type SelectionPayload } from './table'
import { COMPONENT_PREFIX, TABLE_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import CpCheckbox from '@cyberpunk-vue/components/checkbox/src/checkbox.vue'
import { CpLoading } from '@cyberpunk-vue/components/loading'

defineOptions({
  name: `${COMPONENT_PREFIX}Table`,
})

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const ns = useNamespace('table')

// ===== 列注册 =====
const columns = ref<TableColumnConfig[]>([])
let columnIdCounter = 0

const registerColumn = (config: Omit<TableColumnConfig, 'id'>) => {
  const id = `cp-col-${columnIdCounter++}`
  const fullConfig: TableColumnConfig = { ...config, id }
  columns.value.push(fullConfig)
  return id
}

const unregisterColumn = (id: string) => {
  const idx = columns.value.findIndex(c => c.id === id)
  if (idx > -1) {
    columns.value.splice(idx, 1)
  }
}

provide(TABLE_CONTEXT_KEY, { registerColumn, unregisterColumn })

// ===== 排序 =====
const innerSortState = ref<SortState>({
  prop: props.defaultSort?.prop || '',
  order: props.defaultSort?.order || null,
})

const isSortControlled = computed(() => props.sortState !== undefined)

const currentSortState = computed<SortState>(() => props.sortState ?? innerSortState.value)

const activeSortColumn = computed(() => {
  const { prop } = currentSortState.value
  if (!prop) return null
  return columns.value.find(col => col.prop === prop) || null
})

const getValueByPath = (row: any, path: string) => {
  if (!path) return undefined
  return path.split('.').reduce((obj, key) => obj?.[key], row)
}

const getSortValue = (row: any, col: TableColumnConfig | null, prop: string) => {
  const sortBy = col?.sortBy ?? prop
  if (typeof sortBy === 'function') return sortBy(row)
  if (Array.isArray(sortBy)) return sortBy.map(key => getValueByPath(row, key))
  return getValueByPath(row, sortBy)
}

const compareSortValue = (valA: any, valB: any): number => {
  if (Array.isArray(valA) || Array.isArray(valB)) {
    const arrA = Array.isArray(valA) ? valA : [valA]
    const arrB = Array.isArray(valB) ? valB : [valB]
    const length = Math.max(arrA.length, arrB.length)
    for (let i = 0; i < length; i++) {
      const result = compareSortValue(arrA[i], arrB[i])
      if (result !== 0) return result
    }
    return 0
  }
  if (valA == null && valB == null) return 0
  if (valA == null) return -1
  if (valB == null) return 1
  if (typeof valA === 'number' && typeof valB === 'number') return valA - valB
  return String(valA).localeCompare(String(valB))
}

const isManualSortColumn = (col: TableColumnConfig | null) =>
  props.manualSort || col?.sortable === 'custom'

const sortedData = computed(() => {
  const { prop, order } = currentSortState.value
  if (!prop || !order) return [...props.data]
  const col = activeSortColumn.value
  if (isManualSortColumn(col)) return [...props.data]

  return [...props.data].sort((a, b) => {
    if (col?.sortMethod) {
      return col.sortMethod(a, b, order)
    }
    const result = compareSortValue(getSortValue(a, col, prop), getSortValue(b, col, prop))
    return order === 'ascending' ? result : -result
  })
})

const getSortOrders = (col: TableColumnConfig): SortOrder[] => {
  const orders = col.sortOrders?.length ? col.sortOrders : props.sortOrders
  const normalized = orders.filter((order): order is SortOrder => order === 'ascending' || order === 'descending' || order === null)
  return normalized.length > 0 ? normalized : ['ascending', 'descending', null]
}

const getNextSortOrder = (col: TableColumnConfig): SortOrder => {
  const currentOrder = currentSortState.value.prop === col.prop ? currentSortState.value.order : null
  const orders = getSortOrders(col)
  const currentIndex = orders.findIndex(order => order === currentOrder)
  return currentIndex === -1 ? orders[0] : orders[(currentIndex + 1) % orders.length]
}

const buildSortChangePayload = (state: SortState, column: TableColumnConfig | null): SortChangePayload => ({
  ...state,
  column,
})

const commitSortState = (state: SortState, column: TableColumnConfig | null) => {
  if (!isSortControlled.value) {
    innerSortState.value = state
  }
  emit('update:sortState', state)
  emit('sort-change', buildSortChangePayload(state, column))
}

const handleSort = (col: TableColumnConfig) => {
  if (!col.sortable) return
  commitSortState({ prop: col.prop, order: getNextSortOrder(col) }, col)
}

const getSortClass = (col: TableColumnConfig) => {
  if (!col.sortable) return ''
  if (currentSortState.value.prop !== col.prop) return ''
  return currentSortState.value.order === 'ascending' ? 'is-ascending' : currentSortState.value.order === 'descending' ? 'is-descending' : ''
}

const isSortActive = (col: TableColumnConfig, order: Exclude<SortOrder, null>) =>
  currentSortState.value.prop === col.prop && currentSortState.value.order === order

// ===== 选择 =====
// 使用 shallowRef 避免 Vue 把 Set 包成 reactive 代理——
// 一旦 Set 被代理，iterator / has / add 会在 raw 与 reactive 两种引用间切换，
// 同一行可能以两种引用混入 Set，导致 delete 失效、重复计数等问题。
// 所有进入 Set 的行引用都通过 toRaw 归一化为 raw。
const selectedRows = shallowRef<Set<any>>(new Set())

// 归一化 row 引用：统一存 raw，避免 reactive 包装引入的身份差异
const rawRow = (row: any): any => toRaw(row)

// 树形节点索引：父、直接子、所有后代（不含自身）
// 声明在 childrenField 之前，通过闭包在访问时读取；非树模式下返回空 Map
// 所有 key 与 descendants 都用 raw 引用
interface TreeNodeInfo {
  parent: any | null
  children: any[]
  descendants: any[]
}

const treeNodeInfoMap = computed<Map<any, TreeNodeInfo>>(() => {
  const map = new Map<any, TreeNodeInfo>()
  if (!isTreeMode.value) return map
  const field = childrenField.value
  const walk = (nodes: any[], parent: any | null) => {
    for (const node of nodes) {
      const rawNode = rawRow(node)
      const rawChildren: any[] = Array.isArray(rawNode[field])
        ? rawNode[field].map(rawRow)
        : []
      const info: TreeNodeInfo = { parent, children: rawChildren, descendants: [] }
      map.set(rawNode, info)
      walk(rawChildren, rawNode)
      for (const c of rawChildren) {
        const ci = map.get(c)
        if (ci) info.descendants.push(c, ...ci.descendants)
      }
    }
  }
  walk(props.data, null)
  return map
})

// 整棵树全部节点（仅树模式下非空）
const allTreeRows = computed<any[]>(() => Array.from(treeNodeInfoMap.value.keys()))

// key → raw row 查找，用于受控 checkedKeys 回填以及 setSelectionKeys
// 树模式走整棵树，非树模式走 props.data
const keyToRowMap = computed<Map<string | number, any>>(() => {
  const m = new Map<string | number, any>()
  if (isTreeMode.value) {
    for (const r of allTreeRows.value) {
      m.set(getRowKey(r, -1), r)
    }
  } else {
    props.data.forEach((r, i) => {
      m.set(getRowKey(r, i), rawRow(r))
    })
  }
  return m
})

// 当前树选择策略：非树模式强制视为 strict
const treeCheckMode = computed<'strict' | 'cascade' | 'bubble'>(() => {
  if (!isTreeMode.value) return 'strict'
  return props.treeCheckMode
})

// 跨树行聚合：全选/半选/父行半选等需要遍历整棵树
const isCrossTreeSelect = computed(() => treeCheckMode.value !== 'strict')

// 模板中使用：某行是否已选中（统一 raw 引用比较）
const isRowSelected = (row: any): boolean => selectedRows.value.has(rawRow(row))

const isAllSelected = computed(() => {
  const target = isCrossTreeSelect.value ? allTreeRows.value : sortedData.value
  if (target.length === 0) return false
  return target.every(row => selectedRows.value.has(rawRow(row)))
})

const isIndeterminate = computed(() => {
  const target = isCrossTreeSelect.value ? allTreeRows.value : sortedData.value
  const count = target.filter(row => selectedRows.value.has(rawRow(row))).length
  return count > 0 && count < target.length
})

// 父行半选：联动 / 半联动模式下有后代且部分后代被选
const isRowIndeterminate = (row: any): boolean => {
  if (!isCrossTreeSelect.value) return false
  const info = treeNodeInfoMap.value.get(rawRow(row))
  if (!info || info.descendants.length === 0) return false
  const selectedCount = info.descendants.filter(d => selectedRows.value.has(d)).length
  return selectedCount > 0 && selectedCount < info.descendants.length
}

// 半选行集合（仅 cascade / bubble 模式下非空），内部均为 raw
const halfCheckedRows = computed<any[]>(() => {
  if (!isCrossTreeSelect.value) return []
  return allTreeRows.value.filter(r => isRowIndeterminate(r))
})

// 根据 props 构造 selection 事件 payload
const rowsToKeys = (rows: any[]) => rows.map(r => getRowKey(r, -1))

// 当前选中集合的 keys 数组是否与给定 keys 完全一致（不计顺序）
const currentKeysMatch = (keys: readonly (string | number)[]): boolean => {
  const cur = selectedRows.value
  if (cur.size !== keys.length) return false
  const lookup = keyToRowMap.value
  for (const k of keys) {
    const r = lookup.get(k)
    if (r === undefined || !cur.has(r)) return false
  }
  return true
}

// 将外部 keys 同步到内部选择集（受控回填 / setSelectionKeys 共用）
// 不做级联归一化——传什么 key 就只勾中那些行
const applyCheckedKeys = (keys: readonly (string | number)[]) => {
  if (currentKeysMatch(keys)) return
  const lookup = keyToRowMap.value
  const next = new Set<any>()
  for (const k of keys) {
    const r = lookup.get(k)
    if (r !== undefined) next.add(r)
  }
  selectedRows.value = next
}

// 统一提交：写 state + 广播 selection-change + 同步 v-model
const commitSelection = (newSet: Set<any>): SelectionPayload => {
  selectedRows.value = newSet
  const rows = Array.from(newSet)
  const payload = buildSelectionPayload(rows)
  emit('selection-change', payload)
  emit('update:checkedKeys', rowsToKeys(rows))
  return payload
}

const buildSelectionPayload = (rows: any[]): SelectionPayload => {
  if (props.selectionPayload === 'detail') {
    const halves = halfCheckedRows.value
    const detail: SelectionDetail = {
      rows,
      keys: rowsToKeys(rows),
      halfRows: [...halves],
      halfKeys: rowsToKeys(halves),
    }
    return detail
  }
  const combined = props.includeHalfChecked ? [...rows, ...halfCheckedRows.value] : rows
  if (props.selectionPayload === 'keys') return rowsToKeys(combined)
  return combined
}

const handleSelectRow = (row: any) => {
  if (props.loading || props.disabled) return
  const rawTarget = rawRow(row)
  const newSet = new Set(selectedRows.value)
  const mode = treeCheckMode.value
  // info 里的 children / descendants 已经是 raw，map key 也是 raw
  const info = mode !== 'strict' ? treeNodeInfoMap.value.get(rawTarget) : undefined

  if (info && mode === 'cascade') {
    // 双向联动：向下同步 + 向上回溯
    const family = [rawTarget, ...info.descendants]
    const targetChecked = !family.every(n => newSet.has(n))
    for (const n of family) {
      if (targetChecked) newSet.add(n)
      else newSet.delete(n)
    }
    let p = info.parent
    while (p) {
      const pInfo = treeNodeInfoMap.value.get(p)
      if (!pInfo) break
      const allChildrenChecked = pInfo.children.length > 0 && pInfo.children.every(c => newSet.has(c))
      if (allChildrenChecked) newSet.add(p)
      else newSet.delete(p)
      p = pInfo.parent
    }
  } else if (info && mode === 'bubble') {
    // 半联动：
    // - 勾选：自身 + 全部后代 + 向上冒泡勾选祖先（维护"已勾选节点的祖先必然已勾选"不变式）
    // - 取消：自身 + 全部后代；祖先保持原状态（cascade 与 bubble 的关键差异——
    //   子全部取消后父仍可保持选中，表达"父被显式保留"的语义）
    if (newSet.has(rawTarget)) {
      newSet.delete(rawTarget)
      for (const d of info.descendants) newSet.delete(d)
    } else {
      newSet.add(rawTarget)
      for (const d of info.descendants) newSet.add(d)
      let p = info.parent
      while (p) {
        newSet.add(p)
        const pInfo = treeNodeInfoMap.value.get(p)
        p = pInfo ? pInfo.parent : null
      }
    }
  } else {
    if (newSet.has(rawTarget)) newSet.delete(rawTarget)
    else newSet.add(rawTarget)
  }

  const payload = commitSelection(newSet)
  emit('select', payload, row)
}

const handleSelectAll = () => {
  if (props.loading || props.disabled) return
  const target = isCrossTreeSelect.value ? allTreeRows.value : sortedData.value
  const newSet: Set<any> = isAllSelected.value
    ? new Set()
    : new Set(target.map(rawRow))
  const payload = commitSelection(newSet)
  emit('select-all', payload)
}

// ===== 当前行 =====
const currentRow = ref<any>(null)

const handleRowClick = (row: any, index: number, event: MouseEvent) => {
  if (props.loading || props.disabled) return
  emit('row-click', row, index, event)
  if (props.highlightCurrentRow) {
    const oldRow = currentRow.value
    currentRow.value = row
    emit('current-change', row, oldRow)
  }
}

// 行 class 透传给 Vue :class，支持用户按业务状态高亮一行或多行。
const getRowClassName = (row: any, rowIndex: number) => {
  const rowClassName = props.rowClassName
  if (typeof rowClassName === 'function') {
    return rowClassName({ row, rowIndex })
  }
  return rowClassName
}

// ===== rowKey =====
const getRowKey = (row: any, index: number): string | number => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row)
  }
  return row[props.rowKey] ?? index
}

// ===== 树形数据 =====
const isTreeMode = computed(() => !!props.treeProps)

// 获取子节点字段名
const childrenField = computed(() => props.treeProps?.children || 'children')
const hasChildrenField = computed(() => props.treeProps?.hasChildren || '')

// 树形展开的行 key 集合
const expandedRowKeys = ref<Set<string | number>>(new Set())

// 初始化展开状态
const initTreeExpanded = () => {
  if (!isTreeMode.value) return
  if (props.defaultExpandAll) {
    const keys = new Set<string | number>()
    const collectKeys = (data: any[]) => {
      for (const row of data) {
        const key = getRowKey(row, -1)
        const children = row[childrenField.value]
        if (children && children.length > 0) {
          keys.add(key)
          collectKeys(children)
        }
      }
    }
    collectKeys(props.data)
    expandedRowKeys.value = keys
  }
}

watch(() => props.data, initTreeExpanded, { immediate: true })

// 受控 checkedKeys：外部传入 / 外部变更 / 数据异步加载后回填
// - undefined 走非受控，不处理
// - 有值则把 key → row 映射后写入 selectedRows；不做级联归一化
// - currentKeysMatch 判重避免"emit → parent 更新 → watch 再回写"的无意义抖动
watch(
  () => props.checkedKeys,
  (keys) => {
    if (keys !== undefined) applyCheckedKeys(keys)
  },
  { immediate: true },
)

// 数据异步到达时，用最新的 key→row 映射重放一次受控 keys，
// 否则初次挂载时 props.data 还是空数组会把 selectedRows 打成空
watch(keyToRowMap, () => {
  if (props.checkedKeys !== undefined) applyCheckedKeys(props.checkedKeys)
})
watch(() => props.defaultExpandAll, initTreeExpanded)

// 检查行是否有子节点
const rowHasChildren = (row: any): boolean => {
  if (hasChildrenField.value && row[hasChildrenField.value]) return true
  const children = row[childrenField.value]
  return Array.isArray(children) && children.length > 0
}

// 切换行展开
const toggleRowExpansion = (row: any, expanded?: boolean) => {
  const key = getRowKey(row, -1)
  const newSet = new Set(expandedRowKeys.value)
  const isExpanded = newSet.has(key)
  const targetExpanded = expanded !== undefined ? expanded : !isExpanded

  if (targetExpanded) {
    newSet.add(key)
  } else {
    newSet.delete(key)
  }
  expandedRowKeys.value = newSet
  emit('expand-change', row, targetExpanded)
}

// 展开所有树节点
const expandAllRows = () => {
  const keys = new Set<string | number>()
  const collectKeys = (data: any[]) => {
    for (const row of data) {
      const key = getRowKey(row, -1)
      if (rowHasChildren(row)) {
        keys.add(key)
        const children = row[childrenField.value]
        if (Array.isArray(children)) collectKeys(children)
      }
    }
  }
  collectKeys(props.data)
  expandedRowKeys.value = keys
}

// 折叠所有树节点
const collapseAllRows = () => {
  expandedRowKeys.value = new Set()
}

interface FlatRow {
  row: any
  level: number
  hasChildren: boolean
  expanded: boolean
}

// 将树形数据扁平化为渲染列表
const flattenedData = computed<FlatRow[]>(() => {
  if (!isTreeMode.value) return []

  const result: FlatRow[] = []
  const flatten = (data: any[], level: number) => {
    for (const row of data) {
      const key = getRowKey(row, -1)
      const hasChild = rowHasChildren(row)
      const expanded = expandedRowKeys.value.has(key)

      result.push({ row, level, hasChildren: hasChild, expanded })

      if (hasChild && expanded) {
        const children = row[childrenField.value]
        if (Array.isArray(children)) {
          flatten(children, level + 1)
        }
      }
    }
  }

  // In tree mode, use sortedData (the top-level sorted) and recursively flatten
  flatten(sortedData.value, 0)
  return result
})

// 最终渲染的数据（非树形时直接用 sortedData）
const renderData = computed(() => {
  if (isTreeMode.value) {
    return flattenedData.value.map(f => f.row)
  }
  return sortedData.value
})

// 获取某行的 FlatRow 信息（用于缩进、箭头渲染）
const getFlatRow = (row: any): FlatRow | undefined => {
  return flattenedData.value.find(f => f.row === row)
}

// 判断当前列是否是第一个数据列（用于显示树形缩进和箭头）
const isFirstDataColumn = (col: TableColumnConfig): boolean => {
  const dataColumns = columns.value.filter(c => c.columnType === 'default')
  return dataColumns.length > 0 && dataColumns[0].id === col.id
}

// ===== 行展开（expand 列模式） =====
const rowExpandedKeys = ref<Set<string | number>>(new Set())

// 检测展开列
const expandColumn = computed(() => columns.value.find(c => c.columnType === 'expand'))

// 检查行是否可展开
const isRowExpandable = (row: any): boolean => {
  if (!expandColumn.value) return false
  if (typeof props.rowExpandable === 'function') return props.rowExpandable(row)
  return true
}

// 检查行是否已展开
const isRowExpanded = (row: any): boolean => {
  const key = getRowKey(row, -1)
  return rowExpandedKeys.value.has(key)
}

// 切换行展开
const toggleRowExpand = (row: any, expanded?: boolean) => {
  if (props.loading || props.disabled) return
  if (!isRowExpandable(row)) return
  const key = getRowKey(row, -1)
  const newSet = new Set(rowExpandedKeys.value)
  const isExpanded = newSet.has(key)
  const targetExpanded = expanded !== undefined ? expanded : !isExpanded

  if (targetExpanded) {
    newSet.add(key)
  } else {
    newSet.delete(key)
  }
  rowExpandedKeys.value = newSet
  emit('expand-change', row, targetExpanded)
}

// 受控模式：watch expandRowKeys prop
watch(
  () => props.expandRowKeys,
  (keys) => {
    if (keys !== undefined) {
      rowExpandedKeys.value = new Set(keys)
    }
  },
  { immediate: true },
)

// ===== 尺寸 =====
const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`type-${props.type}`),
  ns.is('stripe', props.stripe),
  ns.is('border', props.border),
  ns.is('highlight-current-row', props.highlightCurrentRow),
  ns.is('scrollable', !!(props.height || props.maxHeight)),
  ns.is('loading', props.loading),
  ns.is('disabled', props.disabled),
])

// 计算最终主题色（用于 Loading spinner）
const realColor = computed(() => {
  if (props.color) return props.color
  if (props.type && props.type !== 'default') return `var(--cp-color-${props.type})`
  return null
})

// 自定义颜色 inline style
const rootStyle = computed(() => {
  if (!props.color) return {}
  return {
    '--cp-table-color': props.color,
    '--cp-table-header-bg': `linear-gradient(180deg, color-mix(in srgb, ${props.color} 18%, transparent) 0%, color-mix(in srgb, ${props.color} 6%, transparent) 100%)`,
    '--cp-table-header-border-color': `color-mix(in srgb, ${props.color} 40%, transparent)`,
    '--cp-table-row-hover-bg': `color-mix(in srgb, ${props.color} 6%, transparent)`,
    '--cp-table-row-current-bg': `color-mix(in srgb, ${props.color} 10%, transparent)`,
    '--cp-table-row-selected-bg': `color-mix(in srgb, ${props.color} 8%, transparent)`,
  }
})

// Checkbox 使用的 type / color
const checkboxType = computed(() => props.color ? undefined : (props.type === 'default' ? undefined : props.type))
const checkboxColor = computed(() => props.color || undefined)

const bodyStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.height) {
    const h = typeof props.height === 'number' ? `${props.height}px` : props.height
    style['height'] = h
    style['overflow-y'] = 'auto'
  }
  if (props.maxHeight) {
    const mh = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight
    style['max-height'] = mh
    style['overflow-y'] = 'auto'
  }
  return style
})

// 列宽样式
const getColStyle = (col: TableColumnConfig) => {
  const style: Record<string, string> = {}
  if (col.width) {
    style.width = typeof col.width === 'number' ? `${col.width}px` : col.width
  }
  if (col.minWidth) {
    style.minWidth = typeof col.minWidth === 'number' ? `${col.minWidth}px` : col.minWidth
  }
  if (col.columnType === 'selection' || col.columnType === 'index' || col.columnType === 'expand') {
    if (!col.width) style.width = '50px'
  }
  return style
}

// 获取单元格值
const getCellValue = (row: any, col: TableColumnConfig) => {
  if (!col.prop) return ''
  // 支持嵌套属性 如 'address.city'
  return getValueByPath(row, col.prop)
}

// 对齐样式
const getAlignClass = (align: string) => {
  if (align === 'center') return ns.m('align-center')
  if (align === 'right') return ns.m('align-right')
  return ''
}

// 暴露方法
defineExpose({
  /** 清空选择 */
  clearSelection: () => {
    commitSelection(new Set())
  },
  /** 程序式设置选中 rowKey 数组（不做级联归一化，与受控 prop 语义一致） */
  setSelectionKeys: (keys: (string | number)[]) => {
    if (currentKeysMatch(keys)) return
    const lookup = keyToRowMap.value
    const next = new Set<any>()
    for (const k of keys) {
      const r = lookup.get(k)
      if (r !== undefined) next.add(r)
    }
    commitSelection(next)
  },
  /** 获取完全选中行对象数组 */
  getSelectionRows: (): any[] => Array.from(selectedRows.value),
  /** 获取完全选中行的 rowKey 数组 */
  getSelectionKeys: (): (string | number)[] => rowsToKeys(Array.from(selectedRows.value)),
  /** 获取半选行对象数组（仅 cascade / bubble 模式可能非空） */
  getHalfCheckedRows: (): any[] => [...halfCheckedRows.value],
  /** 获取半选行的 rowKey 数组（仅 cascade / bubble 模式可能非空） */
  getHalfCheckedKeys: (): (string | number)[] => rowsToKeys(halfCheckedRows.value),
  /** 获取结构化选中详情 { rows, keys, halfRows, halfKeys } */
  getSelectionDetail: (): SelectionDetail => {
    const rows = Array.from(selectedRows.value)
    const halves = halfCheckedRows.value
    return {
      rows,
      keys: rowsToKeys(rows),
      halfRows: [...halves],
      halfKeys: rowsToKeys(halves),
    }
  },
  /** 排序 */
  sort: (prop: string, order: SortOrder) => {
    const column = columns.value.find(col => col.prop === prop) || null
    commitSortState({ prop, order }, column)
  },
  /** 清空排序 */
  clearSort: () => {
    commitSortState({ prop: '', order: null }, null)
  },
  /** 获取当前排序状态 */
  getSortState: (): SortState => ({ ...currentSortState.value }),
  /** 设置当前行 */
  setCurrentRow: (row: any) => {
    const old = currentRow.value
    currentRow.value = row
    emit('current-change', row, old)
  },
  /** 切换行展开（树形模式） */
  toggleRowExpansion,
  /** 展开所有行（树形模式） */
  expandAll: expandAllRows,
  /** 折叠所有行（树形模式） */
  collapseAll: collapseAllRows,
  /** 切换行展开（展开列模式） */
  toggleRowExpand,
})
</script>

<template>
  <div :class="classes" :style="rootStyle">
    <!-- 隐藏的 slot，用于收集 CpTableColumn 注册 -->
    <div style="display: none;">
      <slot />
    </div>

    <!-- 表格容器 -->
    <div :class="ns.e('wrapper')">
      <table :class="ns.e('inner')">
        <!-- 表头 -->
        <thead v-if="showHeader" :class="ns.e('header')">
          <tr :class="ns.e('header-row')">
            <th
              v-for="col in columns"
              :key="col.id"
              :class="[
                ns.e('header-cell'),
                col.sortable && ns.is('sortable', true),
                getSortClass(col),
                getAlignClass(col.headerAlign || col.align),
              ]"
              :style="getColStyle(col)"
              @click="col.sortable ? handleSort(col) : undefined"
            >
              <!-- Selection 全选 -->
              <template v-if="col.columnType === 'selection'">
                <CpCheckbox
                  :model-value="isAllSelected"
                  :indeterminate="isIndeterminate"
                  :type="checkboxType"
                  :color="checkboxColor"
                  @change="handleSelectAll"
                  @click.stop
                />
              </template>
              <!-- Index / Default 表头 -->
              <template v-else>
                <!-- 自定义表头插槽 -->
                <component
                  v-if="col.slots.header"
                  :is="{ render: () => col.slots.header!({ column: col, $index: columns.indexOf(col) }) }"
                />
                <span v-else :class="ns.e('header-label')">
                  {{ col.columnType === 'index' ? (col.label || '#') : col.label }}
                </span>
                <!-- 排序指示器 -->
                <span v-if="col.sortable" :class="ns.e('sort-icon')">
                  <svg
                    :class="[ns.e('sort-caret'), ns.is('ascending'), ns.is('active', isSortActive(col, 'ascending'))]"
                    viewBox="0 0 8 5" width="8" height="5"
                  >
                    <path d="M4 0l4 5H0z" fill="currentColor" />
                  </svg>
                  <svg
                    :class="[ns.e('sort-caret'), ns.is('descending'), ns.is('active', isSortActive(col, 'descending'))]"
                    viewBox="0 0 8 5" width="8" height="5"
                  >
                    <path d="M4 5L0 0h8z" fill="currentColor" />
                  </svg>
                </span>
              </template>
            </th>
          </tr>
        </thead>

        <!-- 表体 -->
        <tbody :class="ns.e('body')" :style="bodyStyle">
          <template v-if="renderData.length > 0">
            <template
              v-for="(row, rowIndex) in renderData"
              :key="getRowKey(row, rowIndex)"
            >
            <tr
              :class="[
                ns.e('row'),
                ns.is('striped', stripe && rowIndex % 2 === 1),
                ns.is('current', highlightCurrentRow && currentRow === row),
                ns.is('selected', isRowSelected(row)),
                ns.is('expanded', expandColumn && isRowExpanded(row)),
                getRowClassName(row, rowIndex),
              ]"
              @click="handleRowClick(row, rowIndex, $event)"
            >
              <td
                v-for="col in columns"
                :key="col.id"
                :class="[ns.e('cell'), getAlignClass(col.align)]"
                :style="getColStyle(col)"
              >
                <!-- Selection 列 -->
                <template v-if="col.columnType === 'selection'">
                  <CpCheckbox
                    :model-value="isRowSelected(row)"
                    :indeterminate="isRowIndeterminate(row)"
                    :type="checkboxType"
                    :color="checkboxColor"
                    @change="handleSelectRow(row)"
                    @click.stop
                  />
                </template>
                <!-- Expand 展开列 -->
                <template v-else-if="col.columnType === 'expand'">
                  <span
                    v-if="isRowExpandable(row)"
                    :class="[ns.e('expand-trigger'), ns.is('expanded', isRowExpanded(row))]"
                    @click.stop="toggleRowExpand(row)"
                  >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                      <path d="M6 3l5 5-5 5V3z" />
                    </svg>
                  </span>
                </template>
                <!-- Index 列 -->
                <template v-else-if="col.columnType === 'index'">
                  {{ rowIndex + 1 }}
                </template>
                <!-- 树形模式：第一数据列带缩进和展开箭头 -->
                <template v-else-if="isTreeMode && isFirstDataColumn(col)">
                  <div :class="ns.e('tree-cell')">
                    <!-- 缩进占位 -->
                    <span
                      v-if="getFlatRow(row)"
                      :class="ns.e('tree-indent')"
                      :style="{ width: `${(getFlatRow(row)?.level || 0) * indent}px` }"
                    />
                    <!-- 展开/折叠箭头 -->
                    <span
                      v-if="getFlatRow(row)?.hasChildren"
                      :class="[ns.e('expand-icon'), ns.is('expanded', getFlatRow(row)?.expanded)]"
                      @click.stop="toggleRowExpansion(row)"
                    >
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                        <path d="M6 3l5 5-5 5V3z" />
                      </svg>
                    </span>
                    <!-- 叶子节点占位 -->
                    <span v-else :class="ns.e('expand-placeholder')" />
                    <!-- 单元格内容 -->
                    <span :class="ns.e('tree-content')">
                      <component
                        v-if="col.slots.default"
                        :is="{ render: () => col.slots.default!({ row, column: col, $index: rowIndex }) }"
                      />
                      <template v-else>
                        {{ getCellValue(row, col) }}
                      </template>
                    </span>
                  </div>
                </template>
                <!-- 自定义内容插槽 -->
                <template v-else-if="col.slots.default">
                  <component
                    :is="{ render: () => col.slots.default!({ row, column: col, $index: rowIndex }) }"
                  />
                </template>
                <!-- 默认：取 prop 值 -->
                <template v-else>
                  {{ getCellValue(row, col) }}
                </template>
              </td>
            </tr>
            <!-- 展开内容行 -->
            <tr
              v-if="expandColumn && isRowExpanded(row)"
              :class="ns.e('expanded-row')"
            >
              <td :colspan="columns.length" :class="ns.e('expanded-cell')">
                <div :class="ns.e('expanded-content')">
                  <component
                    v-if="expandColumn?.slots.default"
                    :is="{ render: () => expandColumn!.slots.default!({ row, $index: rowIndex }) }"
                  />
                </div>
              </td>
            </tr>
            </template>
          </template>

          <!-- 空状态 -->
          <tr v-else :class="ns.e('empty-row')">
            <td :colspan="columns.length" :class="ns.e('empty-cell')">
              <slot name="empty">
                <div :class="ns.e('empty')">
                  <svg :class="ns.e('empty-icon')" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="8" y="12" width="48" height="40" rx="2" />
                    <line x1="8" y1="24" x2="56" y2="24" />
                    <line x1="24" y1="24" x2="24" y2="52" />
                    <line x1="40" y1="24" x2="40" y2="52" />
                    <line x1="8" y1="36" x2="56" y2="36" />
                  </svg>
                  <span :class="ns.e('empty-text')">{{ emptyText }}</span>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Loading Overlay -->
    <Transition name="cp-table-loading">
      <div v-if="loading" :class="ns.e('loading-overlay')">
        <slot name="loading">
          <CpLoading :color="realColor || undefined" />
          <span v-if="loadingText" :class="ns.e('loading-text')">{{ loadingText }}</span>
        </slot>
      </div>
    </Transition>
  </div>
</template>
