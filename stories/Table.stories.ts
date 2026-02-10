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
  },
  args: {
    size: 'md',
    type: 'default',
    stripe: false,
    border: false,
    highlightCurrentRow: false,
    emptyText: '暂无数据',
    color: '',
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
