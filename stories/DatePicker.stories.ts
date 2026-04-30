import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpDatePicker } from '@cyberpunk-vue/components'

/**
 * # CpDatePicker 日期面板
 *
 * 独立日期选择面板，参考 Vuetify DatePicker 的 header / controls / grid 分层。
 * 本库采用更适合中文用户的排版：年份选择在左侧，月份与日期选择在右侧。
 *
 * ## 特性
 * - 独立面板，不包含输入框和弹层
 * - 左侧年份窗口，右侧月份与日期网格
 * - 支持相邻月份日期显示/隐藏
 * - 支持禁用日期、自定义日期单元格、自定义主题色
 */
const meta: Meta<typeof CpDatePicker> = {
  title: '表单 Form/DatePicker 日期面板',
  component: CpDatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值',
    },
    valueFormat: {
      control: 'text',
      description: '输出格式，留空时输出 Date',
    },
    showAdjacentMonths: {
      control: 'boolean',
      description: '是否显示相邻月份日期',
      table: { defaultValue: { summary: 'true' } },
    },
    viewMode: {
      control: 'select',
      options: ['day', 'month', 'year'],
      description: '初始视图模式',
      table: { defaultValue: { summary: 'day' } },
    },
    color: {
      control: 'color',
      description: '自定义主题色',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
  },
  args: {
    valueFormat: 'YYYY-MM-DD',
    showAdjacentMonths: true,
  },
}

export default meta
type Story = StoryObj<typeof CpDatePicker>

/** 基础用法 */
export const 基础用法: Story = {
  render: args => ({
    components: { CpDatePicker },
    setup() {
      const value = ref('2026-04-16')
      return { args, value }
    },
    template: `
      <div>
        <CpDatePicker v-model="value" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 12px;">当前值: {{ value }}</p>
      </div>
    `,
  }),
}

/** 隐藏相邻月份 */
export const 隐藏相邻月份: Story = {
  render: () => ({
    components: { CpDatePicker },
    setup() {
      const value = ref('2026-04-16')
      return { value }
    },
    template: `
      <CpDatePicker v-model="value" value-format="YYYY-MM-DD" :show-adjacent-months="false" />
    `,
  }),
}

/** 初始月份视图 */
export const 初始月份视图: Story = {
  render: () => ({
    components: { CpDatePicker },
    setup() {
      const value = ref('2026-04-16')
      return { value }
    },
    template: `
      <CpDatePicker v-model="value" value-format="YYYY-MM-DD" view-mode="month" color="#ff2bd6" />
    `,
  }),
}

/** 禁用日期 */
export const 禁用日期: Story = {
  render: () => ({
    components: { CpDatePicker },
    setup() {
      const value = ref('')
      const disabledDate = (date: Date) => date.getTime() < Date.now() - 24 * 60 * 60 * 1000
      return { value, disabledDate }
    },
    template: `
      <CpDatePicker
        v-model="value"
        value-format="YYYY-MM-DD"
        :disabled-date="disabledDate"
        title="选择未来日期"
      />
    `,
  }),
}

/** 自定义日期单元格 */
export const 自定义日期单元格: Story = {
  render: () => ({
    components: { CpDatePicker },
    setup() {
      const value = ref('2026-04-16')
      return { value }
    },
    template: `
      <CpDatePicker v-model="value" value-format="YYYY-MM-DD" color="#7cff6b">
        <template #day="{ cell }">
          <span>{{ cell.label }}</span>
          <span v-if="cell.today" style="position:absolute; bottom:4px; width:4px; height:4px; background:currentColor;"></span>
        </template>
      </CpDatePicker>
    `,
  }),
}
