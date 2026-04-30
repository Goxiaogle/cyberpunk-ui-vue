import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpDatePickerSelect } from '@cyberpunk-vue/components'
import type { PickerShortcut } from '@cyberpunk-vue/components'

/**
 * # CpDatePickerSelect 日期选择选择器
 *
 * 输入框 + 弹层形式的日期选择器。`CpDatePicker` 是独立面板，`CpDatePickerSelect` 才负责表单输入和弹层定位。
 */
const meta: Meta<typeof CpDatePickerSelect> = {
  title: '表单 Form/DatePickerSelect 日期选择',
  component: CpDatePickerSelect,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'dates', 'week', 'month', 'year', 'daterange', 'monthrange', 'yearrange'],
      description: '选择器类型',
    },
    valueFormat: {
      control: 'text',
      description: '输出格式',
    },
    clearable: {
      control: 'boolean',
      description: '是否可清空',
    },
    editable: {
      control: 'boolean',
      description: '是否允许直接输入',
    },
  },
  args: {
    type: 'date',
    valueFormat: 'YYYY-MM-DD',
    placeholder: '选择日期',
  },
}

export default meta
type Story = StoryObj<typeof CpDatePickerSelect>

const shortcuts: PickerShortcut[] = [
  { text: '今天', value: () => new Date() },
  { text: '昨天', value: () => new Date(Date.now() - 24 * 60 * 60 * 1000) },
  { text: '近 7 天', value: () => [new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), new Date()] },
]

/** 基础用法 */
export const 基础用法: Story = {
  render: args => ({
    components: { CpDatePickerSelect },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="width: 320px;">
        <CpDatePickerSelect v-model="value" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">当前值: {{ value || '(未选择)' }}</p>
      </div>
    `,
  }),
}

/** 范围选择 */
export const 范围选择: Story = {
  render: () => ({
    components: { CpDatePickerSelect },
    setup() {
      const value = ref<string[]>([])
      return { value, shortcuts }
    },
    template: `
      <div style="width: 360px;">
        <CpDatePickerSelect
          v-model="value"
          type="daterange"
          value-format="YYYY-MM-DD"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :shortcuts="shortcuts"
        />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">范围: {{ value.join(' ~ ') || '(未选择)' }}</p>
      </div>
    `,
  }),
}
