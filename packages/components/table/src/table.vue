<script setup lang="ts">
/**
 * CpTable - 赛博朋克风格数据表格
 * 支持排序、多选、条纹、边框、固定表头
 */
import { computed, ref, watch, provide, useSlots, onMounted, type VNode } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { tableProps, tableEmits, type TableColumnConfig, type SortOrder, type SortState } from './table'
import { COMPONENT_PREFIX, TABLE_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import CpCheckbox from '@cyberpunk-vue/components/checkbox/src/checkbox.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Table`,
})

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const slots = useSlots()
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
const sortState = ref<SortState>({
  prop: props.defaultSort?.prop || '',
  order: props.defaultSort?.order || null,
})

const sortedData = computed(() => {
  const { prop, order } = sortState.value
  if (!prop || !order) return [...props.data]

  return [...props.data].sort((a, b) => {
    const valA = a[prop]
    const valB = b[prop]
    if (valA == null && valB == null) return 0
    if (valA == null) return order === 'ascending' ? -1 : 1
    if (valB == null) return order === 'ascending' ? 1 : -1
    if (typeof valA === 'number' && typeof valB === 'number') {
      return order === 'ascending' ? valA - valB : valB - valA
    }
    const strA = String(valA)
    const strB = String(valB)
    return order === 'ascending' ? strA.localeCompare(strB) : strB.localeCompare(strA)
  })
})

const handleSort = (col: TableColumnConfig) => {
  if (!col.sortable) return
  const currentOrder = sortState.value.prop === col.prop ? sortState.value.order : null
  let nextOrder: SortOrder = null
  if (currentOrder === null) nextOrder = 'ascending'
  else if (currentOrder === 'ascending') nextOrder = 'descending'
  else nextOrder = null

  sortState.value = { prop: col.prop, order: nextOrder }
  emit('sort-change', sortState.value)
}

const getSortClass = (col: TableColumnConfig) => {
  if (!col.sortable) return ''
  if (sortState.value.prop !== col.prop) return ''
  return sortState.value.order === 'ascending' ? 'is-ascending' : sortState.value.order === 'descending' ? 'is-descending' : ''
}

const isSortActive = (col: TableColumnConfig, order: Exclude<SortOrder, null>) =>
  sortState.value.prop === col.prop && sortState.value.order === order

// ===== 选择 =====
const selectedRows = ref<Set<any>>(new Set())

const hasSelectionColumn = computed(() => columns.value.some(c => c.columnType === 'selection'))

const isAllSelected = computed(() => {
  if (sortedData.value.length === 0) return false
  return sortedData.value.every(row => selectedRows.value.has(row))
})

const isIndeterminate = computed(() => {
  const count = sortedData.value.filter(row => selectedRows.value.has(row)).length
  return count > 0 && count < sortedData.value.length
})

const handleSelectRow = (row: any) => {
  const newSet = new Set(selectedRows.value)
  if (newSet.has(row)) {
    newSet.delete(row)
  } else {
    newSet.add(row)
  }
  selectedRows.value = newSet
  const selection = Array.from(newSet)
  emit('select', selection, row)
  emit('selection-change', selection)
}

const handleSelectAll = () => {
  let newSet: Set<any>
  if (isAllSelected.value) {
    newSet = new Set()
  } else {
    newSet = new Set(sortedData.value)
  }
  selectedRows.value = newSet
  const selection = Array.from(newSet)
  emit('select-all', selection)
  emit('selection-change', selection)
}

// ===== 当前行 =====
const currentRow = ref<any>(null)

const handleRowClick = (row: any, index: number, event: MouseEvent) => {
  emit('row-click', row, index, event)
  if (props.highlightCurrentRow) {
    const oldRow = currentRow.value
    currentRow.value = row
    emit('current-change', row, oldRow)
  }
}

// ===== rowKey =====
const getRowKey = (row: any, index: number): string | number => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row)
  }
  return row[props.rowKey] ?? index
}

// ===== 尺寸 =====
const tableSizeMap: Record<string, number> = { sm: 32, md: 40, lg: 48 }

const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`type-${props.type}`),
  ns.is('stripe', props.stripe),
  ns.is('border', props.border),
  ns.is('highlight-current-row', props.highlightCurrentRow),
  ns.is('scrollable', !!(props.height || props.maxHeight)),
])

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
  if (col.columnType === 'selection' || col.columnType === 'index') {
    if (!col.width) style.width = '50px'
  }
  return style
}

// 获取单元格值
const getCellValue = (row: any, col: TableColumnConfig) => {
  if (!col.prop) return ''
  // 支持嵌套属性 如 'address.city'
  return col.prop.split('.').reduce((obj, key) => obj?.[key], row)
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
    selectedRows.value = new Set()
    emit('selection-change', [])
  },
  /** 获取选中行 */
  getSelectionRows: () => Array.from(selectedRows.value),
  /** 排序 */
  sort: (prop: string, order: SortOrder) => {
    sortState.value = { prop, order }
    emit('sort-change', sortState.value)
  },
  /** 设置当前行 */
  setCurrentRow: (row: any) => {
    const old = currentRow.value
    currentRow.value = row
    emit('current-change', row, old)
  },
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
          <template v-if="sortedData.length > 0">
            <tr
              v-for="(row, rowIndex) in sortedData"
              :key="getRowKey(row, rowIndex)"
              :class="[
                ns.e('row'),
                ns.is('striped', stripe && rowIndex % 2 === 1),
                ns.is('current', highlightCurrentRow && currentRow === row),
                ns.is('selected', selectedRows.has(row)),
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
                    :model-value="selectedRows.has(row)"
                    :type="checkboxType"
                    :color="checkboxColor"
                    @change="handleSelectRow(row)"
                    @click.stop
                  />
                </template>
                <!-- Index 列 -->
                <template v-else-if="col.columnType === 'index'">
                  {{ rowIndex + 1 }}
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
  </div>
</template>
