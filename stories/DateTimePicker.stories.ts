import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpDateTimePicker } from '@cyberpunk-vue/components'
import type { PickerShortcut } from '@cyberpunk-vue/components'

/**
 * # CpDateTimePicker 日期时间选择器
 *
 * 日期面板和时间面板组合选择，支持单值、范围、默认时间、快捷项和禁用日期时间。
 */
const meta: Meta<typeof CpDateTimePicker> = {
  title: '表单 Form/DateTimePicker 日期时间选择',
  component: CpDateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['datetime', 'datetimerange'],
      description: '日期时间选择类型',
    },
    valueFormat: {
      control: 'text',
      description: '输出格式',
    },
    defaultTime: {
      control: 'text',
      description: '默认时间',
    },
  },
  args: {
    type: 'datetime',
    valueFormat: 'YYYY-MM-DD HH:mm:ss',
    placeholder: '选择日期时间',
  },
}

export default meta
type Story = StoryObj<typeof CpDateTimePicker>

const rangeShortcuts: PickerShortcut[] = [
  {
    text: '未来 1 小时',
    value: () => [new Date(), new Date(Date.now() + 60 * 60 * 1000)],
  },
  {
    text: '未来 24 小时',
    value: () => [new Date(), new Date(Date.now() + 24 * 60 * 60 * 1000)],
  },
]

/** 基础用法 */
export const 基础用法: Story = {
  render: args => ({
    components: { CpDateTimePicker },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="width: 360px;">
        <CpDateTimePicker v-model="value" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">当前值: {{ value || '(未选择)' }}</p>
      </div>
    `,
  }),
}

/** 日期时间范围 */
export const 日期时间范围: Story = {
  render: () => ({
    components: { CpDateTimePicker },
    setup() {
      const value = ref<string[]>([])
      return { value, rangeShortcuts }
    },
    template: `
      <div style="width: 420px;">
        <CpDateTimePicker
          v-model="value"
          type="datetimerange"
          value-format="YYYY-MM-DD HH:mm:ss"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :shortcuts="rangeShortcuts"
          :default-time="['09:00:00', '18:00:00']"
        />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">范围: {{ value.join(' ~ ') || '(未选择)' }}</p>
      </div>
    `,
  }),
}

/** 分钟精度 */
export const 分钟精度: Story = {
  render: () => ({
    components: { CpDateTimePicker },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="width: 360px;">
        <CpDateTimePicker
          v-model="value"
          value-format="YYYY-MM-DD HH:mm"
          format="YYYY-MM-DD HH:mm"
          :show-seconds="false"
          :minute-step="15"
          placeholder="按 15 分钟选择"
          color="#7cff6b"
        />
      </div>
    `,
  }),
}

/** 禁用过去日期 */
export const 禁用过去日期: Story = {
  render: () => ({
    components: { CpDateTimePicker },
    setup() {
      const value = ref('')
      const disabledDate = (date: Date) => date.getTime() < Date.now() - 24 * 60 * 60 * 1000
      return { value, disabledDate }
    },
    template: `
      <div style="width: 360px;">
        <CpDateTimePicker
          v-model="value"
          value-format="YYYY-MM-DD HH:mm:ss"
          :disabled-date="disabledDate"
          placeholder="只能选择未来日期时间"
          variant="filled"
        />
      </div>
    `,
  }),
}
