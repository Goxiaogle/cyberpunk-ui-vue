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
  },
  args: {
    size: 'md',
    type: 'default',
    stripe: false,
    border: false,
    highlightCurrentRow: false,
    emptyText: '暂无数据',
    color: '',
    loading: false,
    loadingText: '加载中...',
    disabled: false,
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
