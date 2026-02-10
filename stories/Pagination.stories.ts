import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, computed } from 'vue'
import { CpPagination, CpButton } from '@cyberpunk-vue/components'
import { usePagination } from '@cyberpunk-vue/hooks'

/**
 * CpPagination 分页组件
 *
 * 赛博朋克风格分页导航组件。
 * 支持布局配置、多种颜色类型、形状、尺寸。
 * 可配合 `usePagination` Hook 实现表格数据分页。
 */
const meta: Meta<typeof CpPagination> = {
  title: '导航组件 Navigation/Pagination 分页',
  component: CpPagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: '当前页码 (v-model:currentPage)',
    },
    pageSize: {
      control: 'number',
      description: '每页显示条数 (v-model:pageSize)',
    },
    total: {
      control: 'number',
      description: '总条数',
    },
    pageSizes: {
      control: 'object',
      description: '可选的每页条数列表',
    },
    pagerCount: {
      control: { type: 'range', min: 5, max: 21, step: 2 },
      description: '最大可见页码按钮数（奇数）',
    },
    layout: {
      control: 'text',
      description: '布局配置，逗号分隔 (total, sizes, prev, pager, next, jumper, spacer)',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    hideOnSinglePage: {
      control: 'boolean',
      description: '只有一页时隐藏',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色类型',
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round', 'circle'],
      description: '形状',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    color: {
      control: 'color',
      description: '自定义颜色（优先级高于 type）',
    },
    buttonVariant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'neon', 'semi'],
      description: '分页按钮变体（CpButton variant）',
    },
    totalTemplate: {
      control: 'text',
      description: 'Total 文案模板，{total} 为占位符',
    },
    sizeTemplate: {
      control: 'text',
      description: 'Sizes 文案模板，{size} 为占位符',
    },
  },
  args: {
    currentPage: 1,
    pageSize: 10,
    total: 100,
    pageSizes: [10, 20, 50, 100],
    pagerCount: 7,
    layout: 'prev, pager, next',
    disabled: false,
    hideOnSinglePage: false,
    type: 'default',
    shape: 'clip',
    size: 'md',
    color: '',
    buttonVariant: 'solid',
    totalTemplate: '共 {total} 条',
    sizeTemplate: '{size} 条/页',
  },
}

export default meta
type Story = StoryObj<typeof CpPagination>

/**
 * 基础用法 - 可通过 Controls 面板调节参数
 */
export const Basic: Story = {
  render: (args) => ({
    components: { CpPagination },
    setup() {
      const page = ref(args.currentPage)
      const size = ref(args.pageSize)
      return { args, page, size }
    },
    template: `
      <div>
        <CpPagination
          v-bind="args"
          v-model:currentPage="page"
          v-model:pageSize="size"
        />
        <p style="margin-top: 16px; color: var(--cp-text-muted); font-size: 12px;">
          当前页: {{ page }} / 每页: {{ size }} 条
        </p>
      </div>
    `,
  }),
}

/**
 * 完整布局
 *
 * 展示所有布局模块：total, sizes, prev, pager, next, jumper
 */
export const FullLayout: Story = {
  render: () => ({
    components: { CpPagination },
    setup() {
      const page = ref(1)
      const size = ref(10)
      return { page, size }
    },
    template: `
      <CpPagination
        v-model:currentPage="page"
        v-model:pageSize="size"
        :total="200"
        layout="total, sizes, prev, pager, next, jumper"
        type="primary"
      />
    `,
  }),
}

/**
 * Spacer 左右分离布局
 *
 * 使用 `spacer` 布局项在左侧和右侧之间插入弹性占位符，实现左右分离布局。
 */
export const SpacerLayout: Story = {
  render: () => ({
    components: { CpPagination },
    setup() {
      const page = ref(1)
      const size = ref(10)
      return { page, size }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">① total 在左，prev/pager/next 在右</div>
          <CpPagination
            v-model:currentPage="page"
            v-model:pageSize="size"
            :total="200"
            layout="total, spacer, prev, pager, next"
            type="primary"
          />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">② total + sizes 在左，prev/pager/next + jumper 在右</div>
          <CpPagination
            v-model:currentPage="page"
            v-model:pageSize="size"
            :total="200"
            layout="total, sizes, spacer, prev, pager, next, jumper"
            type="primary"
          />
        </div>
      </div>
    `,
  }),
}

/**
 * 颜色类型
 *
 * 展示所有预设颜色类型的分页组件。
 */
export const Types: Story = {
  render: () => ({
    components: { CpPagination },
    setup() {
      const types = ['default', 'primary', 'success', 'warning', 'error', 'info']
      return { types }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="t in types" :key="t" style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 60px; color: var(--cp-text-muted); font-size: 12px; text-transform: capitalize;">{{ t }}</span>
          <CpPagination
            :currentPage="3"
            :total="100"
            :type="t"
            layout="prev, pager, next"
          />
        </div>
      </div>
    `,
  }),
}

/**
 * 形状模式
 *
 * - **Clip**: 机甲切角效果（默认）
 * - **No-clip**: 标准直角
 * - **Round**: 圆角效果
 * - **Circle**: 完全圆形
 */
export const Shapes: Story = {
  render: () => ({
    components: { CpPagination },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 60px; color: var(--cp-text-muted); font-size: 12px;">Clip</span>
          <CpPagination :currentPage="3" :total="100" shape="clip" type="primary" layout="prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 60px; color: var(--cp-text-muted); font-size: 12px;">No-clip</span>
          <CpPagination :currentPage="3" :total="100" shape="no-clip" type="primary" layout="prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 60px; color: var(--cp-text-muted); font-size: 12px;">Round</span>
          <CpPagination :currentPage="3" :total="100" shape="round" type="primary" layout="prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 60px; color: var(--cp-text-muted); font-size: 12px;">Circle</span>
          <CpPagination :currentPage="3" :total="100" shape="circle" type="primary" layout="prev, pager, next" />
        </div>
      </div>
    `,
  }),
}

/**
 * 尺寸对比
 *
 * sm / md / lg 三种尺寸。
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpPagination },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 30px; color: var(--cp-text-muted); font-size: 12px;">SM</span>
          <CpPagination :currentPage="3" :total="100" size="sm" type="primary" layout="prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 30px; color: var(--cp-text-muted); font-size: 12px;">MD</span>
          <CpPagination :currentPage="3" :total="100" size="md" type="primary" layout="prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 30px; color: var(--cp-text-muted); font-size: 12px;">LG</span>
          <CpPagination :currentPage="3" :total="100" size="lg" type="primary" layout="prev, pager, next" />
        </div>
      </div>
    `,
  }),
}

/**
 * 配合 usePagination + 模拟表格
 *
 * 使用 `usePagination` Hook 自动切片数据，
 * 展示完整的表格分页场景。
 */
export const WithTable: Story = {
  render: () => ({
    components: { CpPagination },
    setup() {
      // 模拟 50 条数据
      const allData = ref(
        Array.from({ length: 50 }, (_, i) => ({
          id: i + 1,
          name: `用户-${String(i + 1).padStart(3, '0')}`,
          status: ['在线', '离线', '忙碌'][i % 3],
          level: Math.floor(Math.random() * 100),
        }))
      )

      const { currentPage, pageSize, pageCount, slicedData, total } = usePagination({
        defaultPageSize: 10,
        total: computed(() => allData.value.length),
      })

      const tableData = slicedData(allData)

      return { currentPage, pageSize, total, pageCount, tableData }
    },
    template: `
      <div>
        <div style="margin-bottom: 16px; color: var(--cp-text-muted); font-size: 12px;">
          共 {{ total }} 条数据，{{ pageCount }} 页，当前第 {{ currentPage }} 页
        </div>

        <!-- 简易表格 -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 1px solid var(--cp-border);">
              <th style="padding: 8px 12px; text-align: left; color: var(--cp-color-primary); font-weight: 600;">ID</th>
              <th style="padding: 8px 12px; text-align: left; color: var(--cp-color-primary); font-weight: 600;">名称</th>
              <th style="padding: 8px 12px; text-align: left; color: var(--cp-color-primary); font-weight: 600;">状态</th>
              <th style="padding: 8px 12px; text-align: left; color: var(--cp-color-primary); font-weight: 600;">等级</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in tableData"
              :key="row.id"
              style="border-bottom: 1px solid var(--cp-border-default); transition: background 0.2s;"
              @mouseenter="$event.currentTarget.style.background = 'var(--cp-state-hover)'"
              @mouseleave="$event.currentTarget.style.background = 'transparent'"
            >
              <td style="padding: 8px 12px; color: var(--cp-text-muted);">{{ row.id }}</td>
              <td style="padding: 8px 12px; color: var(--cp-text-primary);">{{ row.name }}</td>
              <td style="padding: 8px 12px;">
                <span :style="{
                  color: row.status === '在线' ? 'var(--cp-color-success)' :
                         row.status === '忙碌' ? 'var(--cp-color-warning)' :
                         'var(--cp-text-muted)'
                }">{{ row.status }}</span>
              </td>
              <td style="padding: 8px 12px; color: var(--cp-color-primary); font-weight: 600;">{{ row.level }}</td>
            </tr>
          </tbody>
        </table>

        <CpPagination
          v-model:currentPage="currentPage"
          v-model:pageSize="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          type="primary"
        />
      </div>
    `,
  }),
}

/**
 * 单页隐藏
 *
 * 设置 `hideOnSinglePage` 后，只有一页数据时自动隐藏分页组件。
 */
export const HideOnSinglePage: Story = {
  render: () => ({
    components: { CpPagination },
    setup() {
      const total = ref(5)
      return { total }
    },
    template: `
      <div>
        <div style="margin-bottom: 12px;">
          <label style="color: var(--cp-text-secondary); font-size: 13px;">
            总条数:
            <input
              v-model.number="total"
              type="number"
              min="0"
              style="width: 60px; margin-left: 8px; padding: 4px 8px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); color: var(--cp-text-primary); text-align: center;"
            />
          </label>
          <span style="margin-left: 12px; color: var(--cp-text-muted); font-size: 12px;">
            (设置 ≤ 10 时分页组件会隐藏)
          </span>
        </div>
        <CpPagination
          :total="total"
          :pageSize="10"
          hideOnSinglePage
          type="primary"
          layout="prev, pager, next"
        />
      </div>
    `,
  }),
}
/**
 * 自定义颜色
 *
 * 使用 `color` prop 设置任意 CSS 颜色，优先级高于 `type`。
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpPagination },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 80px; color: var(--cp-text-muted); font-size: 12px;">#ff6b6b</span>
          <CpPagination :currentPage="3" :total="100" color="#ff6b6b" layout="total, sizes, prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 80px; color: var(--cp-text-muted); font-size: 12px;">#a855f7</span>
          <CpPagination :currentPage="3" :total="100" color="#a855f7" layout="total, sizes, prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 80px; color: var(--cp-text-muted); font-size: 12px;">#22d3ee</span>
          <CpPagination :currentPage="3" :total="100" color="#22d3ee" layout="total, sizes, prev, pager, next" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 80px; color: var(--cp-text-muted); font-size: 12px;">#facc15</span>
          <CpPagination :currentPage="3" :total="100" color="#facc15" layout="total, sizes, prev, pager, next" />
        </div>
      </div>
    `,
  }),
}

/**
 * 文案国际化
 *
 * 通过 `totalTemplate` 和 `sizeTemplate` 自定义显示文案。
 */
export const I18n: Story = {
  render: () => ({
    components: { CpPagination },
    setup() {
      const page = ref(1)
      const size = ref(10)
      return { page, size }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">English</div>
          <CpPagination
            v-model:currentPage="page"
            v-model:pageSize="size"
            :total="200"
            layout="total, sizes, prev, pager, next, jumper"
            type="primary"
            totalTemplate="Total {total}"
            sizeTemplate="{size} / page"
          />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">中文（默认）</div>
          <CpPagination
            :currentPage="3"
            :total="200"
            layout="total, sizes, prev, pager, next, jumper"
            type="primary"
          />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">Custom</div>
          <CpPagination
            :currentPage="3"
            :total="200"
            layout="total, sizes, prev, pager, next"
            type="success"
            totalTemplate="{total} records"
            sizeTemplate="Show {size}"
          />
        </div>
      </div>
    `,
  }),
}
/**
 * 自定义插槽
 *
 * 通过插槽替换默认的前后按钮、页码项、跳转器等 UI 实现。
 * 每个插槽都提供完整的上下文数据（type、color、disabled、回调等）。
 *
 * **可用插槽：**
 * - `prev` — 上一页按钮 `{ disabled, onClick, currentPage, type, color, shape, size }`
 * - `next` — 下一页按钮 `{ disabled, onClick, currentPage, type, color, shape, size }`
 * - `pager` — 整个页码区 `{ pages, currentPage, pageCount, onPageClick, onEllipsisClick, disabled, type, color, shape, size }`
 * - `pager-item` — 单个页码项（仅数字页码） `{ page, active, disabled, onClick, type, color }`
 * - `ellipsis` — 省略号按钮 `{ disabled, onClick, type, color, buttonVariant }`
 * - `sizes` — 页数选择器 `{ pageSize, pageSizes, options, onChange, disabled, type, color, shape, size }`
 * - `jumper` — 跳转器 `{ pageCount, disabled, onJump, type, color, shape, size }`
 */
export const CustomSlots: Story = {
  render: () => ({
    components: { CpPagination, CpButton },
    setup() {
      const page = ref(3)
      const size = ref(10)
      return { page, size }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- 示例 1: 使用 CpButton 替换前后按钮 -->
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">① CpButton 替换前后按钮</div>
          <CpPagination
            v-model:currentPage="page"
            v-model:pageSize="size"
            :total="200"
            layout="total, prev, pager, next"
            type="primary"
          >
            <template #prev="{ disabled, onClick }">
              <CpButton size="sm" type="primary" :disabled="disabled" @click="onClick">PREV</CpButton>
            </template>
            <template #next="{ disabled, onClick }">
              <CpButton size="sm" type="primary" :disabled="disabled" @click="onClick">NEXT</CpButton>
            </template>
          </CpPagination>
        </div>

        <!-- 示例 2: 自定义 pager-item + ellipsis 外观 -->
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">② 自定义 pager-item + ellipsis</div>
          <CpPagination
            v-model:currentPage="page"
            :total="200"
            layout="prev, pager, next"
            type="success"
          >
            <template #pager-item="{ page: p, active, onClick }">
              <CpButton
                size="sm"
                :type="active ? 'success' : 'default'"
                :variant="active ? 'solid' : 'outline'"
                square
                @click="onClick"
              >
                {{ p }}
              </CpButton>
            </template>
            <template #ellipsis="{ onClick }">
              <CpButton
                size="sm"
                type="default"
                variant="ghost"
                square
                @click="onClick"
                style="letter-spacing: 2px;"
              >
                ···
              </CpButton>
            </template>
          </CpPagination>
        </div>

        <!-- 示例 3: 自定义 jumper -->
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">③ 自定义 jumper 插槽</div>
          <CpPagination
            v-model:currentPage="page"
            :total="200"
            layout="prev, pager, next, jumper"
            type="warning"
          >
            <template #jumper="{ pageCount, onJump }">
              <span style="display: inline-flex; align-items: center; gap: 6px; color: var(--cp-text-secondary); font-size: 13px;">
                Go to
                <CpButton
                  v-for="n in Math.min(pageCount, 5)"
                  :key="n"
                  size="sm"
                  :type="n === page ? 'warning' : 'default'"
                  @click="onJump(n)"
                  style="min-width: 28px; padding: 0;"
                >
                  {{ n }}
                </CpButton>
                <span v-if="pageCount > 5" style="color: var(--cp-text-muted);">...</span>
              </span>
            </template>
          </CpPagination>
        </div>
      </div>
    `,
  }),
}
