import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpTimePicker } from '@cyberpunk-vue/components'

/**
 * # CpTimePicker 时间选择器
 *
 * 赛博朋克风格时间选择器，支持单时间、时间范围、时分秒步长和禁用时间段。
 */
const meta: Meta<typeof CpTimePicker> = {
  title: '表单 Form/TimePicker 时间选择',
  component: CpTimePicker,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['time', 'timerange'],
      description: '时间选择类型',
    },
    showSeconds: {
      control: 'boolean',
      description: '是否显示秒',
      table: { defaultValue: { summary: 'true' } },
    },
    hourStep: {
      control: { type: 'number', min: 1, max: 6 },
      description: '小时步长',
    },
    minuteStep: {
      control: { type: 'number', min: 1, max: 30 },
      description: '分钟步长',
    },
    secondStep: {
      control: { type: 'number', min: 1, max: 30 },
      description: '秒步长',
    },
    valueFormat: {
      control: 'text',
      description: '输出格式',
    },
  },
  args: {
    type: 'time',
    valueFormat: 'HH:mm:ss',
    placeholder: '选择时间',
  },
}

export default meta
type Story = StoryObj<typeof CpTimePicker>

/** 基础用法 */
export const 基础用法: Story = {
  render: args => ({
    components: { CpTimePicker },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="width: 300px;">
        <CpTimePicker v-model="value" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">当前时间: {{ value || '(未选择)' }}</p>
      </div>
    `,
  }),
}

/** 时间范围 */
export const 时间范围: Story = {
  render: () => ({
    components: { CpTimePicker },
    setup() {
      const value = ref<string[]>([])
      return { value }
    },
    template: `
      <div style="width: 360px;">
        <CpTimePicker
          v-model="value"
          type="timerange"
          value-format="HH:mm:ss"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :minute-step="5"
          :second-step="10"
        />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">范围: {{ value.join(' ~ ') || '(未选择)' }}</p>
      </div>
    `,
  }),
}

/** 不显示秒 */
export const 不显示秒: Story = {
  render: () => ({
    components: { CpTimePicker },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="width: 300px;">
        <CpTimePicker
          v-model="value"
          value-format="HH:mm"
          format="HH:mm"
          :show-seconds="false"
          :minute-step="15"
          placeholder="选择时分"
        />
      </div>
    `,
  }),
}

/** 禁用时间 */
export const 禁用时间: Story = {
  render: () => ({
    components: { CpTimePicker },
    setup() {
      const value = ref('')
      const disabledHours = () => [0, 1, 2, 3, 4, 5, 23]
      const disabledMinutes = () => [0, 1, 2, 3, 4]
      return { value, disabledHours, disabledMinutes }
    },
    template: `
      <div style="width: 300px;">
        <CpTimePicker
          v-model="value"
          value-format="HH:mm:ss"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          placeholder="部分时间不可选"
          variant="filled"
        />
      </div>
    `,
  }),
}
