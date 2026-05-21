import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, computed } from 'vue'
import { CpTable, CpTableColumn, CpPagination, CpTag, CpButton } from '@cyberpunk-vue/components'
import { usePagination } from '@cyberpunk-vue/hooks'

// 模拟数据
const generateData = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: ['张三', '李四', '王五', '赵六', '孙七', '周八', '吴九', '郑十'][i % 8],
    age: 20 + (i % 30),
    role: ['工程师', '设计师', '产品经理', '运维', '测试'][i % 5],
    status: ['active', 'inactive', 'pending'][i % 3],
    email: `user${i + 1}@cyber.net`,
    score: Math.floor(Math.random() * 100),
    date: `2026-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
  }))

const smallData = generateData(5)
const mediumData = generateData(20)
const largeData = generateData(100)

/**
 * CpTable 数据表格
 *
 * 赛博朋克风格数据表格组件，支持排序、多选、条纹、边框、固定表头，
 * 配合 CpTableColumn 声明式定义列，支持自定义列模板和分页。
 */
const meta: Meta<typeof CpTable> = {
  title: '数据展示 Data Display/Table 表格',
  component: CpTable,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '表格尺寸',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色类型',
    },
    stripe: {
      control: 'boolean',
      description: '条纹行',
    },
    border: {
      control: 'boolean',
      description: '边框',
    },
    highlightCurrentRow: {
      control: 'boolean',
      description: '高亮当前行',
    },
    rowClassName: {
      control: false,
      description: '行 class 名。可传字符串、数组、对象，或函数按行动态返回 class，常用于业务状态行高亮',
      table: {
        type: {
          summary: 'string | string[] | Record<string, boolean> | ({ row, rowIndex }) => string | string[] | Record<string, boolean>',
        },
      },
    },
    emptyText: {
      control: 'text',
      description: '空数据文案',
    },
    color: {
      control: 'color',
      description: '自定义主题色（CSS 颜色值），优先级高于 type',
    },
    loading: {
      control: 'boolean',
      description: '加载状态',
    },
    loadingText: {
      control: 'text',
      description: '加载中文案',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态',
    },
    manualSort: {
      control: 'boolean',
      description: '手动排序模式。开启后只维护排序状态和事件，不对 data 做本地排序，适用于远程排序',
    },
    resizable: {
      control: 'boolean',
      description: '允许拖动表头分割线调整列宽，列宽会受 CpTableColumn 的 minWidth / maxWidth 限制',
    },
    sortState: {
      control: false,
      description: '受控排序状态，配合 v-model:sort-state 使用',
    },
    sortOrders: {
      control: false,
      description: '排序切换顺序，默认 ascending -> descending -> null',
    },
  },
  args: {
    size: 'md',
    type: 'default',
    stripe: false,
    border: false,
    highlightCurrentRow: false,
    rowClassName: '',
    emptyText: '暂无数据',
    color: '',
    loading: false,
    loadingText: '加载中...',
    disabled: false,
    manualSort: false,
    resizable: false,
  },
}

export default meta
type Story = StoryObj<typeof CpTable>

/**
 * 基础用法
 *
 * 最简单的表格，传入 `data` 并用 `CpTableColumn` 声明列。
 */
export const Basic: Story = {
  render: (args) => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { args, tableData: smallData }
    },
    template: `
      <CpTable v-bind="args" :data="tableData">
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="age" label="年龄" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="email" label="邮箱" />
      </CpTable>
    `,
  }),
}

/**
 * 条纹行
 *
 * 开启 `stripe` 使奇偶行背景交替显示，提升可读性。
 */
export const Stripe: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: mediumData.slice(0, 8) }
    },
    template: `
      <CpTable :data="tableData" stripe>
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="age" label="年龄" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="email" label="邮箱" />
      </CpTable>
    `,
  }),
}

/**
 * 边框模式
 *
 * 开启 `border` 显示所有单元格边框。
 */
export const Border: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: smallData }
    },
    template: `
      <CpTable :data="tableData" border>
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="age" label="年龄" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="email" label="邮箱" />
      </CpTable>
    `,
  }),
}

/**
 * 尺寸对比
 *
 * 支持 `sm`、`md`、`lg` 三种尺寸。
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: smallData.slice(0, 3) }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">SM</div>
          <CpTable :data="tableData" size="sm" border>
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" />
            <CpTableColumn prop="age" label="年龄" />
            <CpTableColumn prop="role" label="角色" />
          </CpTable>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">MD</div>
          <CpTable :data="tableData" size="md" border>
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" />
            <CpTableColumn prop="age" label="年龄" />
            <CpTableColumn prop="role" label="角色" />
          </CpTable>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">LG</div>
          <CpTable :data="tableData" size="lg" border>
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" />
            <CpTableColumn prop="age" label="年龄" />
            <CpTableColumn prop="role" label="角色" />
          </CpTable>
        </div>
      </div>
    `,
  }),
}

/**
 * 排序
 *
 * 对列设置 `sortable` 后，点击表头可切换升序/降序。
 */
export const Sortable: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      const tableData = ref(mediumData.slice(0, 10))
      const onSortChange = (sort: any) => {
        console.log('sort-change:', sort)
      }
      return { tableData, onSortChange }
    },
    template: `
      <CpTable :data="tableData" stripe @sort-change="onSortChange">
        <CpTableColumn prop="id" label="ID" :width="60" sortable />
        <CpTableColumn prop="name" label="姓名" sortable />
        <CpTableColumn prop="age" label="年龄" sortable />
        <CpTableColumn prop="score" label="分数" sortable />
        <CpTableColumn prop="role" label="角色" />
      </CpTable>
    `,
  }),
}

/**
 * 远程排序
 *
 * 开启 `manual-sort` 后，表格只更新排序状态并触发 `sort-change`，
 * 不会对当前页 `data` 做本地排序。调用者可用 `v-model:sort-state`
 * 绑定排序状态，再请求服务端返回已排序的数据。
 */
export const RemoteSorting: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      const sourceData = mediumData.slice(0, 20)
      const tableData = ref(sourceData.slice(0, 8))
      const loading = ref(false)
      const sortState = ref<{ prop: string, order: 'ascending' | 'descending' | null }>({
        prop: '',
        order: null,
      })
      let requestId = 0

      const compareValue = (a: any, b: any, prop: string) => {
        const valA = a[prop]
        const valB = b[prop]
        if (valA == null && valB == null) return 0
        if (valA == null) return -1
        if (valB == null) return 1
        if (typeof valA === 'number' && typeof valB === 'number') return valA - valB
        return String(valA).localeCompare(String(valB))
      }

      const fetchRemoteData = (nextSort = sortState.value) => {
        const currentRequest = ++requestId
        loading.value = true
        window.setTimeout(() => {
          if (currentRequest !== requestId) return
          const nextData = [...sourceData]
          if (nextSort.prop && nextSort.order) {
            nextData.sort((a, b) => {
              const result = compareValue(a, b, nextSort.prop)
              return nextSort.order === 'ascending' ? result : -result
            })
          }
          tableData.value = nextData.slice(0, 8)
          loading.value = false
        }, 500)
      }

      const onSortChange = (sort: { prop: string, order: 'ascending' | 'descending' | null }) => {
        fetchRemoteData({ prop: sort.prop, order: sort.order })
      }

      return { tableData, loading, sortState, onSortChange }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <CpTable
          v-model:sort-state="sortState"
          :data="tableData"
          :loading="loading"
          manual-sort
          stripe
          border
          loading-text="请求远程数据..."
          @sort-change="onSortChange"
        >
          <CpTableColumn prop="id" label="ID" :width="60" sortable />
          <CpTableColumn prop="name" label="姓名" sortable />
          <CpTableColumn prop="age" label="年龄" sortable />
          <CpTableColumn prop="score" label="分数" sortable />
          <CpTableColumn prop="date" label="日期" sortable />
        </CpTable>
        <div style="color: var(--cp-text-muted); font-size: 12px;">
          当前远程排序：{{ sortState.prop || '未排序' }} / {{ sortState.order || 'none' }}
        </div>
      </div>
    `,
  }),
}

/**
 * 多选
 *
 * 添加 `type="selection"` 列启用多选功能。
 */
export const Selection: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      const tableData = ref(mediumData.slice(0, 8))
      const selected = ref<any[]>([])
      const onSelectionChange = (selection: any[]) => {
        selected.value = selection
      }
      return { tableData, selected, onSelectionChange }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <CpTable :data="tableData" stripe @selection-change="onSelectionChange">
          <CpTableColumn type="selection" />
          <CpTableColumn prop="id" label="ID" :width="60" />
          <CpTableColumn prop="name" label="姓名" />
          <CpTableColumn prop="age" label="年龄" />
          <CpTableColumn prop="role" label="角色" />
          <CpTableColumn prop="email" label="邮箱" />
        </CpTable>
        <div style="color: var(--cp-text-muted); font-size: 12px;">
          已选中 {{ selected.length }} 项
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义列模板
 *
 * 使用 `#default` 作用域插槽自定义单元格渲染。
 * 嵌套使用 CpTag、CpButton 等其他组件。
 */
export const CustomColumn: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      const tableData = ref(mediumData.slice(0, 8))
      const statusMap: Record<string, { label: string; type: string }> = {
        active: { label: '在线', type: 'success' },
        inactive: { label: '离线', type: 'error' },
        pending: { label: '待审', type: 'warning' },
      }
      const handleEdit = (row: any) => {
        console.log('编辑:', row)
      }
      const handleDelete = (row: any) => {
        console.log('删除:', row)
      }
      return { tableData, statusMap, handleEdit, handleDelete }
    },
    template: `
      <CpTable :data="tableData" stripe border>
        <CpTableColumn type="index" label="#" :width="50" />
        <CpTableColumn prop="name" label="姓名" sortable />
        <CpTableColumn prop="age" label="年龄" sortable align="center" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="status" label="状态" align="center">
          <template #default="{ row }">
            <CpTag
              :type="statusMap[row.status]?.type || 'default'"
              variant="semi"
              size="sm"
            >
              {{ statusMap[row.status]?.label || row.status }}
            </CpTag>
          </template>
        </CpTableColumn>
        <CpTableColumn prop="score" label="分数" sortable align="right">
          <template #default="{ row }">
            <span :style="{ color: row.score >= 60 ? 'var(--cp-color-success)' : 'var(--cp-color-error)', fontWeight: 600 }">
              {{ row.score }}
            </span>
          </template>
        </CpTableColumn>
        <CpTableColumn label="操作" :width="160" align="center">
          <template #default="{ row }">
            <div style="display: flex; gap: 6px; justify-content: center;">
              <CpButton type="primary" variant="ghost" size="sm" @click="handleEdit(row)">编辑</CpButton>
              <CpButton type="error" variant="ghost" size="sm" @click="handleDelete(row)">删除</CpButton>
            </div>
          </template>
        </CpTableColumn>
      </CpTable>
    `,
  }),
}

/**
 * 颜色类型
 *
 * 通过 `type` prop 设置表格主题色，多选框颜色会跟随类型自动变化。
 */
export const Types: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: smallData.slice(0, 3) }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div v-for="t in ['default', 'primary', 'success', 'warning', 'error', 'info']" :key="t">
          <div style="color: var(--cp-text-muted); margin-bottom: 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">{{ t }}</div>
          <CpTable :data="tableData" :type="t" stripe>
            <CpTableColumn type="selection" />
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" sortable />
            <CpTableColumn prop="role" label="角色" />
            <CpTableColumn prop="email" label="邮箱" />
          </CpTable>
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义主题色
 *
 * 使用 `color` prop 指定任意 CSS 颜色值作为表格主题色，
 * 表头渐变、发光边框、hover 背景、多选框颜色均会自动适配。
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: smallData.slice(0, 4) }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 6px; font-size: 12px;">color="#e040fb" (紫粉)</div>
          <CpTable :data="tableData" color="#e040fb" stripe>
            <CpTableColumn type="selection" />
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" sortable />
            <CpTableColumn prop="role" label="角色" />
            <CpTableColumn prop="email" label="邮箱" />
          </CpTable>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 6px; font-size: 12px;">color="#ff6d00" (橙色)</div>
          <CpTable :data="tableData" color="#ff6d00" stripe>
            <CpTableColumn type="selection" />
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" sortable />
            <CpTableColumn prop="role" label="角色" />
            <CpTableColumn prop="email" label="邮箱" />
          </CpTable>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 6px; font-size: 12px;">color="#76ff03" (荧光绿)</div>
          <CpTable :data="tableData" color="#76ff03" stripe>
            <CpTableColumn type="selection" />
            <CpTableColumn prop="id" label="ID" :width="60" />
            <CpTableColumn prop="name" label="姓名" sortable />
            <CpTableColumn prop="role" label="角色" />
            <CpTableColumn prop="email" label="邮箱" />
          </CpTable>
        </div>
      </div>
    `,
  }),
}

/**
 * 空数据状态
 */
export const Empty: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    template: `
      <CpTable :data="[]" border>
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="age" label="年龄" />
        <CpTableColumn prop="role" label="角色" />
      </CpTable>
    `,
  }),
}

/**
 * 固定表头
 *
 * 设置 `height` 或 `maxHeight` 固定表头，表体滚动。
 */
export const FixedHeader: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: mediumData }
    },
    template: `
      <CpTable :data="tableData" height="320px" stripe border>
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" sortable />
        <CpTableColumn prop="age" label="年龄" sortable />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="email" label="邮箱" />
        <CpTableColumn prop="date" label="日期" />
      </CpTable>
    `,
  }),
}

/**
 * 拖拽调整列宽
 *
 * 开启 `resizable` 后，可拖动表头右侧分割线调整列宽。
 * `width` 作为初始宽度，`minWidth` / `maxWidth` 用于限制拖动范围。
 */
export const ResizableColumns: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag },
    setup() {
      return { tableData: mediumData.slice(0, 8) }
    },
    template: `
      <CpTable :data="tableData" resizable stripe border>
        <CpTableColumn prop="id" label="ID" :width="72" :min-width="56" :max-width="120" />
        <CpTableColumn prop="name" label="姓名" :width="120" :min-width="90" :max-width="220" sortable />
        <CpTableColumn prop="role" label="角色" :width="140" :min-width="100" :max-width="260" />
        <CpTableColumn prop="status" label="状态" :width="120" :min-width="100" :max-width="180">
          <template #default="{ row }">
            <CpTag :type="row.status === 'active' ? 'success' : row.status === 'pending' ? 'warning' : 'error'" size="sm">
              {{ row.status }}
            </CpTag>
          </template>
        </CpTableColumn>
        <CpTableColumn prop="email" label="邮箱" :width="240" :min-width="180" :max-width="420" />
        <CpTableColumn prop="date" label="日期" :width="140" :min-width="120" :max-width="220" />
      </CpTable>
    `,
  }),
}

/**
 * 高亮当前行
 *
 * 开启 `highlightCurrentRow`，点击行高亮显示。
 */
export const HighlightCurrentRow: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      const tableData = ref(mediumData.slice(0, 8))
      const currentRow = ref<any>(null)
      const onCurrentChange = (row: any) => {
        currentRow.value = row
      }
      return { tableData, currentRow, onCurrentChange }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <CpTable :data="tableData" highlight-current-row @current-change="onCurrentChange">
          <CpTableColumn prop="id" label="ID" :width="60" />
          <CpTableColumn prop="name" label="姓名" />
          <CpTableColumn prop="age" label="年龄" />
          <CpTableColumn prop="role" label="角色" />
          <CpTableColumn prop="email" label="邮箱" />
        </CpTable>
        <div style="color: var(--cp-text-muted); font-size: 12px;">
          当前行: {{ currentRow ? currentRow.name : '未选择' }}
        </div>
      </div>
    `,
  }),
}

/**
 * 行状态高亮
 *
 * 使用 `rowClassName` 按业务条件返回行 class，可高亮一行或多行。
 * 组件内置 `is-success-row`、`is-warning-row`、`is-error-row`、`is-info-row` 四个常用状态类。
 */
export const RowClassName: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag },
    setup() {
      const tableData = ref(mediumData.slice(0, 9))
      const statusMap: Record<string, { label: string; type: 'success' | 'warning' | 'error' }> = {
        active: { label: '在线', type: 'success' },
        inactive: { label: '离线', type: 'error' },
        pending: { label: '待审', type: 'warning' },
      }
      const rowClassName = ({ row }: { row: any }) => ({
        'is-success-row': row.status === 'active',
        'is-warning-row': row.status === 'pending',
        'is-error-row': row.status === 'inactive',
      })

      return { tableData, statusMap, rowClassName }
    },
    template: `
      <CpTable :data="tableData" :row-class-name="rowClassName" border>
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="status" label="状态" align="center">
          <template #default="{ row }">
            <CpTag :type="statusMap[row.status].type" size="sm">
              {{ statusMap[row.status].label }}
            </CpTag>
          </template>
        </CpTableColumn>
        <CpTableColumn prop="email" label="邮箱" />
      </CpTable>
    `,
  }),
}

/**
 * 分页表格
 *
 * 配合 `usePagination` Hook 和 `CpPagination` 组件实现分页。
 * 使用 `slicedData` 方法对数据进行切片。
 */
export const WithPagination: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpPagination, CpTag },
    setup() {
      const allData = ref(largeData)

      const {
        currentPage,
        pageSize,
        total,
        slicedData,
      } = usePagination({
        defaultPageSize: 10,
        total: computed(() => allData.value.length),
      })

      const tableData = slicedData(allData)

      const statusMap: Record<string, { label: string; type: string }> = {
        active: { label: '在线', type: 'success' },
        inactive: { label: '离线', type: 'error' },
        pending: { label: '待审', type: 'warning' },
      }

      return {
        allData,
        tableData,
        currentPage,
        pageSize,
        total,
        statusMap,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpTable :data="tableData" stripe type="primary">
          <CpTableColumn type="index" label="#" :width="50" />
          <CpTableColumn prop="name" label="姓名" sortable />
          <CpTableColumn prop="age" label="年龄" sortable />
          <CpTableColumn prop="role" label="角色" />
          <CpTableColumn prop="status" label="状态" align="center">
            <template #default="{ row }">
              <CpTag
                :type="statusMap[row.status]?.type || 'default'"
                variant="semi"
                size="sm"
              >
                {{ statusMap[row.status]?.label || row.status }}
              </CpTag>
            </template>
          </CpTableColumn>
          <CpTableColumn prop="score" label="分数" sortable align="right" />
          <CpTableColumn prop="email" label="邮箱" />
        </CpTable>

        <CpPagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="[5, 10, 20, 50]"
        />
      </div>
    `,
  }),
}

/**
 * 分页 + 多选
 *
 * 结合分页和多选功能，展示完整的数据表格场景。
 */
export const PaginationWithSelection: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpPagination, CpTag, CpButton },
    setup() {
      const allData = ref(largeData)

      const {
        currentPage,
        pageSize,
        total,
        slicedData,
      } = usePagination({
        defaultPageSize: 10,
        total: computed(() => allData.value.length),
      })

      const tableData = slicedData(allData)
      const selected = ref<any[]>([])

      const onSelectionChange = (selection: any[]) => {
        selected.value = selection
      }

      const statusMap: Record<string, { label: string; type: string }> = {
        active: { label: '在线', type: 'success' },
        inactive: { label: '离线', type: 'error' },
        pending: { label: '待审', type: 'warning' },
      }

      const handleBatchDelete = () => {
        console.log('批量删除:', selected.value.map(r => r.id))
      }

      return {
        tableData,
        currentPage,
        pageSize,
        total,
        selected,
        statusMap,
        onSelectionChange,
        handleBatchDelete,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpButton
            type="error"
            variant="outline"
            size="sm"
            :disabled="selected.length === 0"
            @click="handleBatchDelete"
          >
            批量删除 ({{ selected.length }})
          </CpButton>
          <span style="color: var(--cp-text-muted); font-size: 12px;">
            共 {{ total }} 条记录
          </span>
        </div>

        <CpTable :data="tableData" stripe border type="primary" @selection-change="onSelectionChange">
          <CpTableColumn type="selection" />
          <CpTableColumn prop="id" label="ID" :width="60" sortable />
          <CpTableColumn prop="name" label="姓名" sortable />
          <CpTableColumn prop="age" label="年龄" sortable />
          <CpTableColumn prop="role" label="角色" />
          <CpTableColumn prop="status" label="状态" align="center">
            <template #default="{ row }">
              <CpTag
                :type="statusMap[row.status]?.type || 'default'"
                variant="semi"
                size="sm"
              >
                {{ statusMap[row.status]?.label || row.status }}
              </CpTag>
            </template>
          </CpTableColumn>
          <CpTableColumn prop="email" label="邮箱" />
        </CpTable>

        <CpPagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="[5, 10, 20, 50]"
        />
      </div>
    `,
  }),
}

/**
 * 加载状态
 *
 * 设置 `loading` 显示加载遮罩，阻止用户交互。
 * 配合 `loadingText` 自定义加载文案。
 */
export const Loading: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpButton },
    setup() {
      const tableData = ref(smallData)
      const loading = ref(true)
      const toggle = () => { loading.value = !loading.value }
      return { tableData, loading, toggle }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div>
          <CpButton type="primary" size="sm" @click="toggle">
            {{ loading ? '停止加载' : '开始加载' }}
          </CpButton>
        </div>
        <CpTable :data="tableData" :loading="loading" loading-text="数据加载中..." stripe border>
          <CpTableColumn prop="id" label="ID" :width="60" />
          <CpTableColumn prop="name" label="姓名" />
          <CpTableColumn prop="age" label="年龄" />
          <CpTableColumn prop="role" label="角色" />
          <CpTableColumn prop="email" label="邮箱" />
        </CpTable>
      </div>
    `,
  }),
}

/**
 * 禁用状态
 *
 * 设置 `disabled` 使表格整体变灰且不可交互。
 */
export const Disabled: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: smallData }
    },
    template: `
      <CpTable :data="tableData" disabled stripe border type="primary">
        <CpTableColumn type="selection" />
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" sortable />
        <CpTableColumn prop="age" label="年龄" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="email" label="邮箱" />
      </CpTable>
    `,
  }),
}

/**
 * 加载 + 禁用
 *
 * `loading` 和 `disabled` 可以同时使用。
 * 禁用时遮罩也不可交互。
 */
export const LoadingAndDisabled: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn },
    setup() {
      return { tableData: smallData }
    },
    template: `
      <CpTable :data="tableData" loading disabled loading-text="系统维护中..." stripe border type="warning">
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="age" label="年龄" />
        <CpTableColumn prop="role" label="角色" />
        <CpTableColumn prop="email" label="邮箱" />
      </CpTable>
    `,
  }),
}

// ===== 树形表格模拟数据 =====
const treeData = [
  {
    id: 1,
    name: '总部',
    order: 0,
    status: '正常',
    createTime: '2026-01-18 10:58:14',
    children: [
      {
        id: 2,
        name: '技术中心',
        order: 1,
        status: '正常',
        createTime: '2026-01-18 10:58:14',
        children: [
          { id: 3, name: '研发部门', order: 1, status: '正常', createTime: '2026-01-18 10:58:14' },
          { id: 4, name: '市场部门', order: 2, status: '正常', createTime: '2026-01-18 10:58:15' },
          { id: 5, name: '测试部门', order: 3, status: '正常', createTime: '2026-01-18 10:58:15' },
          { id: 6, name: '财务部门', order: 4, status: '正常', createTime: '2026-01-18 10:58:15' },
          { id: 7, name: '运维部门', order: 5, status: '正常', createTime: '2026-01-18 10:58:15' },
        ],
      },
      {
        id: 8,
        name: '运营中心',
        order: 2,
        status: '正常',
        createTime: '2026-01-18 10:58:14',
        children: [
          { id: 9, name: '市场部门', order: 1, status: '正常', createTime: '2026-01-18 10:58:15' },
          { id: 10, name: '财务部门', order: 2, status: '正常', createTime: '2026-01-18 10:58:15' },
        ],
      },
    ],
  },
]

/**
 * 树形表格
 *
 * 通过 `treeProps` 启用树形数据展示。
 * 传入 `{ children: 'children' }` 指定子节点字段名。
 * 点击行首箭头展开/折叠子行。
 */
export const TreeTable: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      const tableRef = ref()
      const onExpandChange = (row: any, expanded: boolean) => {
        console.log('expand-change:', row.name, expanded)
      }
      return { treeData, tableRef, onExpandChange }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; gap: 8px;">
          <CpButton type="primary" size="sm" variant="outline" @click="tableRef?.expandAll()">展开全部</CpButton>
          <CpButton size="sm" variant="outline" @click="tableRef?.collapseAll()">折叠全部</CpButton>
        </div>
        <CpTable
          ref="tableRef"
          :data="treeData"
          :tree-props="{ children: 'children' }"
          row-key="id"
          border
          @expand-change="onExpandChange"
        >
          <CpTableColumn prop="name" label="部门名称" min-width="200" />
          <CpTableColumn prop="order" label="排序" width="100" align="center" />
          <CpTableColumn prop="status" label="状态" width="100" align="center">
            <template #default="{ row }">
              <CpTag type="primary" variant="semi" size="sm">
                {{ row.status }}
              </CpTag>
            </template>
          </CpTableColumn>
          <CpTableColumn prop="createTime" label="创建时间" width="200" align="center" />
          <CpTableColumn label="操作" width="200" align="center">
            <template #default="{ row }">
              <div style="display: flex; gap: 6px; justify-content: center;">
                <CpButton type="primary" variant="ghost" size="sm">修改</CpButton>
                <CpButton type="primary" variant="ghost" size="sm">新增</CpButton>
                <CpButton type="error" variant="ghost" size="sm" v-if="row.children">删除</CpButton>
              </div>
            </template>
          </CpTableColumn>
        </CpTable>
      </div>
    `,
  }),
}

/**
 * 树形表格 + 多选
 *
 * 同时启用 `tree-props` 与 `type="selection"` 列。
 * 通过 `tree-check-mode` 控制父子节点联动策略：
 *
 * - **`strict`（默认）**：父子独立，互不影响。表头全选仅覆盖顶层根节点。
 * - **`cascade`**：完全双向联动。勾父 → 全部后代勾选；勾/取子 → 父按直接子状态自动更新（含半选）；表头覆盖整棵树。
 * - **`bubble`**：半联动。勾任一节点 → 级联勾全部后代 + 向上冒泡勾祖先；取消父 → 后代全部取消；取消子不影响父（子全取消后父仍保留选中）。
 *
 * 示例中可切换模式观察差异：
 */
export const TreeTableWithSelection: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      const tableRef = ref()
      const mode = ref<'strict' | 'cascade' | 'bubble'>('strict')
      const selected = ref<any[]>([])
      const onSelectionChange = (selection: any[]) => {
        selected.value = selection
      }
      const modeLabel: Record<string, string> = {
        strict: '严格独立',
        cascade: '完全联动',
        bubble: '冒泡半联动',
      }
      const modeDesc: Record<string, string> = {
        strict: '父子独立，各自勾选。表头全选仅覆盖顶层节点。',
        cascade: '勾父 → 全部后代勾选；勾/取子 → 父按直接子状态自动更新（含半选）。',
        bubble: '勾选任一节点 → 自身 + 全部后代 + 向上冒泡勾选祖先；取消父 → 全部后代取消；取消子不影响父（子全取消后父仍保留选中）。',
      }
      // 切模式时清空选择，避免跨模式语义不一致
      const switchMode = (next: 'strict' | 'cascade' | 'bubble') => {
        mode.value = next
        tableRef.value?.clearSelection()
      }
      return { treeData, tableRef, mode, selected, modeLabel, modeDesc, onSelectionChange, switchMode }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="color: var(--cp-text-muted); font-size: 12px;">联动模式:</span>
          <CpButton
            v-for="m in ['strict', 'cascade', 'bubble']"
            :key="m"
            size="sm"
            :type="mode === m ? 'primary' : 'default'"
            :variant="mode === m ? 'solid' : 'outline'"
            @click="switchMode(m)"
          >
            {{ modeLabel[m] }}
          </CpButton>
          <CpButton size="sm" variant="ghost" @click="tableRef?.expandAll()">展开全部</CpButton>
          <CpButton size="sm" variant="ghost" @click="tableRef?.collapseAll()">折叠全部</CpButton>
          <CpButton size="sm" variant="ghost" @click="tableRef?.clearSelection()">清空选择</CpButton>
        </div>

        <div style="color: var(--cp-text-muted); font-size: 12px; line-height: 1.6;">
          <strong style="color: var(--cp-color-primary);">{{ modeLabel[mode] }}</strong> — {{ modeDesc[mode] }}
        </div>

        <CpTable
          ref="tableRef"
          :data="treeData"
          :tree-props="{ children: 'children' }"
          :tree-check-mode="mode"
          row-key="id"
          default-expand-all
          border
          type="primary"
          @selection-change="onSelectionChange"
        >
          <CpTableColumn type="selection" :width="50" />
          <CpTableColumn prop="name" label="部门名称" min-width="220" />
          <CpTableColumn prop="order" label="排序" width="80" align="center" />
          <CpTableColumn prop="status" label="状态" width="100" align="center">
            <template #default="{ row }">
              <CpTag type="success" variant="semi" size="sm">{{ row.status }}</CpTag>
            </template>
          </CpTableColumn>
          <CpTableColumn prop="createTime" label="创建时间" width="200" align="center" />
        </CpTable>

        <div style="color: var(--cp-text-muted); font-size: 12px;">
          已选中 {{ selected.length }} 项: {{ selected.map(r => r.name).join('、') || '无' }}
        </div>
      </div>
    `,
  }),
}

/**
 * 选中值输出形态
 *
 * 通过 `selection-payload` 控制 `selection-change` 等事件的 payload 形态：
 *
 * - **`rows`（默认）**：行对象数组
 * - **`keys`**：rowKey 数组（根据 `row-key` prop 取值）
 * - **`detail`**：结构化对象 `{ rows, keys, halfRows, halfKeys }`，独立返回半选
 *
 * 配合 `include-half-checked` 可在 `rows` / `keys` 输出中混入半选节点（`detail` 本身已分离，该 prop 对其无效）。
 *
 * 同时演示程序式 API：
 * - `getSelectionRows()` / `getSelectionKeys()`
 * - `getHalfCheckedRows()` / `getHalfCheckedKeys()`
 * - `getSelectionDetail()`
 */
export const TreeTableSelectionPayload: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      const tableRef = ref()
      const payloadShape = ref<'rows' | 'keys' | 'detail'>('rows')
      const includeHalf = ref(false)
      const checkMode = ref<'strict' | 'cascade' | 'bubble'>('strict')
      const lastPayload = ref<any>(null)
      const modeLabel: Record<string, string> = {
        strict: '不联动 strict',
        cascade: '完全联动 cascade',
        bubble: '冒泡半联动 bubble',
      }

      const onSelectionChange = (selection: any) => {
        lastPayload.value = selection
      }

      const switchShape = (next: 'rows' | 'keys' | 'detail') => {
        payloadShape.value = next
      }

      const formatPayload = (p: any): string => {
        if (p == null) return '(尚未触发 selection-change)'
        const summarize = (item: any) => {
          if (item && typeof item === 'object' && 'name' in item) return `${item.name}#${item.id}`
          return JSON.stringify(item)
        }
        if (Array.isArray(p)) return `[${p.map(summarize).join(', ')}]`
        return JSON.stringify({
          rows: p.rows.map(summarize),
          keys: p.keys,
          halfRows: p.halfRows.map(summarize),
          halfKeys: p.halfKeys,
        }, null, 2)
      }

      const callGetDetail = () => {
        const d = tableRef.value?.getSelectionDetail()
        console.log('getSelectionDetail():', d)
        alert('已输出到 console.log，详情:\n' + JSON.stringify({
          keys: d.keys,
          halfKeys: d.halfKeys,
        }, null, 2))
      }

      return {
        treeData,
        tableRef,
        payloadShape,
        includeHalf,
        checkMode,
        modeLabel,
        lastPayload,
        onSelectionChange,
        switchShape,
        formatPayload,
        callGetDetail,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- 模式切换 -->
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="color: var(--cp-text-muted); font-size: 12px; min-width: 80px;">联动模式:</span>
          <CpButton
            v-for="m in ['strict', 'cascade', 'bubble']"
            :key="m"
            size="sm"
            :type="checkMode === m ? 'primary' : 'default'"
            :variant="checkMode === m ? 'solid' : 'outline'"
            @click="checkMode = m; tableRef?.clearSelection()"
          >{{ modeLabel[m] }}</CpButton>
        </div>

        <!-- payload 形态切换 -->
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="color: var(--cp-text-muted); font-size: 12px; min-width: 80px;">输出形态:</span>
          <CpButton
            v-for="s in ['rows', 'keys', 'detail']"
            :key="s"
            size="sm"
            :type="payloadShape === s ? 'primary' : 'default'"
            :variant="payloadShape === s ? 'solid' : 'outline'"
            @click="switchShape(s)"
          >{{ s }}</CpButton>

          <span style="color: var(--cp-text-muted); font-size: 12px; margin-left: 16px;">
            <input
              type="checkbox"
              v-model="includeHalf"
              :disabled="payloadShape === 'detail'"
              style="vertical-align: middle; margin-right: 4px;"
            />
            include-half-checked
            <span v-if="payloadShape === 'detail'" style="opacity: 0.5;">(detail 模式无效)</span>
          </span>

          <CpButton size="sm" variant="ghost" @click="callGetDetail">调用 getSelectionDetail()</CpButton>
          <CpButton size="sm" variant="ghost" @click="tableRef?.clearSelection()">清空选择</CpButton>
        </div>

        <CpTable
          ref="tableRef"
          :data="treeData"
          :tree-props="{ children: 'children' }"
          :tree-check-mode="checkMode"
          :selection-payload="payloadShape"
          :include-half-checked="includeHalf"
          row-key="id"
          default-expand-all
          border
          type="primary"
          @selection-change="onSelectionChange"
        >
          <CpTableColumn type="selection" :width="50" />
          <CpTableColumn prop="name" label="部门名称" min-width="200" />
          <CpTableColumn prop="order" label="排序" width="80" align="center" />
          <CpTableColumn prop="status" label="状态" width="100" align="center">
            <template #default="{ row }">
              <CpTag type="success" variant="semi" size="sm">{{ row.status }}</CpTag>
            </template>
          </CpTableColumn>
        </CpTable>

        <div style="font-size: 12px; line-height: 1.6;">
          <div style="color: var(--cp-text-muted); margin-bottom: 4px;">@selection-change payload:</div>
          <pre style="margin: 0; padding: 8px 12px; background: var(--cp-bg-subtle, rgba(0,0,0,0.25)); border-radius: 4px; color: var(--cp-color-primary); white-space: pre-wrap; word-break: break-all;">{{ formatPayload(lastPayload) }}</pre>
        </div>
      </div>
    `,
  }),
}

/**
 * 表单回填（v-model:checkedKeys）
 *
 * 配合 `row-key` + `v-model:checked-keys` 双向绑定选中的 rowKey 数组，
 * 常用于编辑已有记录、权限分配、批量操作等表单场景。
 *
 * 关键点：
 * - 回填**不做级联归一化**——传什么 key 就只勾中那行。
 *   所以编辑场景里后端存什么 key 进来，就能原样显示，保存时的 keys 也能原样回存。
 * - 父行的 indeterminate 视觉由组件自动计算（从当前勾选集派生）。
 * - `selection-payload="keys"` 只是为了让 `@selection-change` 的 payload 是 keys 数组，
 *   `v-model:checked-keys` 本身始终同步 keys 数组，与 `selection-payload` 无关。
 */
export const FormRestoreSelection: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      // 模拟表单状态
      const form = ref({
        name: '工程师组',
        memberIds: [3, 5, 7] as (string | number)[], // 回填：研发、测试、运维
      })
      // 模拟"从后端拉回详情" — 延迟 600ms 才得到数据
      const list = ref<any[]>([])
      const loading = ref(true)
      setTimeout(() => {
        list.value = [
          { id: 3, name: '研发部门', order: 1, status: '正常' },
          { id: 4, name: '市场部门', order: 2, status: '正常' },
          { id: 5, name: '测试部门', order: 3, status: '正常' },
          { id: 6, name: '财务部门', order: 4, status: '正常' },
          { id: 7, name: '运维部门', order: 5, status: '正常' },
        ]
        loading.value = false
      }, 600)

      const reset = () => { form.value.memberIds = [3, 5, 7] }
      const clearAll = () => { form.value.memberIds = [] }
      const selectAll = () => { form.value.memberIds = list.value.map(r => r.id) }
      const loadFromBackend = () => { form.value.memberIds = [4, 6] } // 模拟另一套已存数据

      return { form, list, loading, reset, clearAll, selectAll, loadFromBackend }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <CpButton size="sm" variant="outline" @click="reset">重置到初始值 [3,5,7]</CpButton>
          <CpButton size="sm" variant="outline" @click="loadFromBackend">加载另一套 [4,6]</CpButton>
          <CpButton size="sm" variant="outline" @click="selectAll">全部勾选</CpButton>
          <CpButton size="sm" variant="outline" @click="clearAll">清空</CpButton>
        </div>

        <div style="color: var(--cp-text-muted); font-size: 12px; line-height: 1.6;">
          <strong>form.memberIds（真相来源）:</strong>
          <code style="color: var(--cp-color-primary);">{{ JSON.stringify(form.memberIds) }}</code>
          <div>↕ 双向绑定</div>
          <strong>表格选中：</strong>点击行内复选框会立刻写回 form.memberIds；点击上方按钮修改 form.memberIds 会立刻同步到表格。
        </div>

        <CpTable
          :data="list"
          row-key="id"
          v-model:checked-keys="form.memberIds"
          :loading="loading"
          border
          type="primary"
        >
          <CpTableColumn type="selection" :width="50" />
          <CpTableColumn prop="id" label="ID" :width="80" align="center" />
          <CpTableColumn prop="name" label="部门名称" min-width="160" />
          <CpTableColumn prop="status" label="状态" :width="100" align="center">
            <template #default="{ row }">
              <CpTag type="success" variant="semi" size="sm">{{ row.status }}</CpTag>
            </template>
          </CpTableColumn>
        </CpTable>
      </div>
    `,
  }),
}

/**
 * 表单回填 — 树形 + 级联
 *
 * 展示 `v-model:checked-keys` 在树形表格下与 `tree-check-mode` 的组合：
 * - 回填时不会做级联（传 `[3]` 只勾 id=3 那行，即便处于 cascade/bubble 模式）
 * - 用户手动点击时才按 `tree-check-mode` 触发级联
 * - 这样"后端存的 keys 等于组件读的 keys"，读写保持对称
 */
export const FormRestoreSelectionTree: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      const checkedKeys = ref<(string | number)[]>([3, 5, 9])
      const mode = ref<'strict' | 'cascade' | 'bubble'>('cascade')
      const presets: Record<string, (string | number)[]> = {
        'only-leaves': [3, 5, 9],
        'subtree-tech': [2, 3, 4, 5, 6, 7],
        'all': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'empty': [],
      }
      const loadPreset = (k: string) => { checkedKeys.value = presets[k] }
      return { treeData, checkedKeys, mode, loadPreset }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="color: var(--cp-text-muted); font-size: 12px;">联动模式:</span>
          <CpButton
            v-for="m in ['strict', 'cascade', 'bubble']"
            :key="m"
            size="sm"
            :type="mode === m ? 'primary' : 'default'"
            :variant="mode === m ? 'solid' : 'outline'"
            @click="mode = m"
          >{{ m }}</CpButton>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="color: var(--cp-text-muted); font-size: 12px;">回填预设:</span>
          <CpButton size="sm" variant="outline" @click="loadPreset('only-leaves')">仅叶子 [3,5,9]</CpButton>
          <CpButton size="sm" variant="outline" @click="loadPreset('subtree-tech')">技术中心整棵 [2..7]</CpButton>
          <CpButton size="sm" variant="outline" @click="loadPreset('all')">全部</CpButton>
          <CpButton size="sm" variant="outline" @click="loadPreset('empty')">清空</CpButton>
        </div>

        <div style="color: var(--cp-text-muted); font-size: 12px;">
          <strong>checkedKeys:</strong>
          <code style="color: var(--cp-color-primary);">{{ JSON.stringify(checkedKeys) }}</code>
        </div>

        <CpTable
          :data="treeData"
          :tree-props="{ children: 'children' }"
          :tree-check-mode="mode"
          v-model:checked-keys="checkedKeys"
          row-key="id"
          default-expand-all
          border
          type="primary"
        >
          <CpTableColumn type="selection" :width="50" />
          <CpTableColumn prop="name" label="部门名称" min-width="220" />
          <CpTableColumn prop="order" label="排序" width="80" align="center" />
          <CpTableColumn prop="status" label="状态" width="100" align="center">
            <template #default="{ row }">
              <CpTag type="success" variant="semi" size="sm">{{ row.status }}</CpTag>
            </template>
          </CpTableColumn>
        </CpTable>
      </div>
    `,
  }),
}

/**
 * 树形表格 — 默认展开
 *
 * 设置 `default-expand-all` 使所有树节点默认展开。
 */
export const TreeTableDefaultExpandAll: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag },
    setup() {
      return { treeData }
    },
    template: `
      <CpTable
        :data="treeData"
        :tree-props="{ children: 'children' }"
        row-key="id"
        default-expand-all
        stripe
      >
        <CpTableColumn prop="name" label="部门名称" min-width="200" />
        <CpTableColumn prop="order" label="排序" width="100" align="center" />
        <CpTableColumn prop="status" label="状态" width="100" align="center">
          <template #default="{ row }">
            <CpTag type="success" variant="semi" size="sm">
              {{ row.status }}
            </CpTag>
          </template>
        </CpTableColumn>
        <CpTableColumn prop="createTime" label="创建时间" width="200" align="center" />
      </CpTable>
    `,
  }),
}

// ===== 行展开模拟数据 =====
const expandData = [
  { id: 1, name: '张三', age: 28, role: '工程师', email: 'zhangsan@cyber.net', remark: '负责前端架构设计，熟悉 Vue/React 技术栈。', details: '入职日期: 2024-03-15\n部门: 技术中心 - 研发部\n技能: Vue, React, TypeScript, Node.js' },
  { id: 2, name: '李四', age: 32, role: '设计师', email: 'lisi@cyber.net', remark: '视觉设计主管，擅长赛博朋克风格。', details: '入职日期: 2023-06-01\n部门: 设计中心\n技能: Figma, Sketch, Photoshop, Motion Design' },
  { id: 3, name: '王五', age: 25, role: '产品经理', email: 'wangwu@cyber.net', remark: '负责B端产品线。', details: null },
  { id: 4, name: '赵六', age: 30, role: '运维', email: 'zhaoliu@cyber.net', remark: '基础设施运维，Kubernetes 专家。', details: '入职日期: 2022-11-20\n部门: 技术中心 - 运维部\n技能: Kubernetes, Docker, AWS, Linux' },
  { id: 5, name: '孙七', age: 27, role: '测试', email: 'sunqi@cyber.net', remark: '自动化测试工程师。', details: '入职日期: 2025-01-10\n部门: 技术中心 - 测试部\n技能: Cypress, Playwright, Jest, Selenium' },
]

/**
 * 行展开
 *
 * 通过 `type="expand"` 列启用行展开功能。
 * 点击行首箭头展开/折叠自定义详情内容。
 * 使用 `row-expandable` 控制哪些行可以展开（此处只展开有 `details` 的行）。
 */
export const ExpandRow: Story = {
  render: () => ({
    components: { CpTable, CpTableColumn, CpTag, CpButton },
    setup() {
      const onExpandChange = (row: any, expanded: boolean) => {
        console.log('expand-change:', row.name, expanded)
      }
      const isExpandable = (row: any) => !!row.details
      return { expandData, onExpandChange, isExpandable }
    },
    template: `
      <CpTable
        :data="expandData"
        row-key="id"
        border
        stripe
        :row-expandable="isExpandable"
        @expand-change="onExpandChange"
      >
        <CpTableColumn type="expand">
          <template #default="{ row }">
            <div style="display: grid; grid-template-columns: 120px 1fr; gap: 8px 16px; font-size: 13px;">
              <span style="color: var(--cp-text-muted);">邮箱</span>
              <span>{{ row.email }}</span>
              <span style="color: var(--cp-text-muted);">备注</span>
              <span>{{ row.remark }}</span>
              <span style="color: var(--cp-text-muted);">详细信息</span>
              <pre style="margin: 0; white-space: pre-wrap; font-family: var(--cp-font-family-ui);">{{ row.details }}</pre>
            </div>
          </template>
        </CpTableColumn>
        <CpTableColumn prop="id" label="ID" :width="60" />
        <CpTableColumn prop="name" label="姓名" />
        <CpTableColumn prop="age" label="年龄" align="center" />
        <CpTableColumn prop="role" label="角色">
          <template #default="{ row }">
            <CpTag type="primary" variant="semi" size="sm">{{ row.role }}</CpTag>
          </template>
        </CpTableColumn>
      </CpTable>
    `,
  }),
}
