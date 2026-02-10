import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpTextarea } from '@cyberpunk-vue/components'

/**
 * # CpTextarea 多行输入框
 * 
 * 赛博朋克风格多行文本输入组件。
 * 
 * ## 特性
 * - 📐 机甲风切角设计
 * - ✨ Focus 霓虹发光
 * - 📊 字数统计
 * - 📏 自适应高度
 */
const meta: Meta<typeof CpTextarea> = {
  title: '表单 Form/Textarea 多行输入',
  component: CpTextarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: '形态变体',
    },
    rows: {
      control: 'number',
      description: '行数',
    },
    maxlength: {
      control: 'number',
      description: '最大长度',
    },
    showWordLimit: {
      control: 'boolean',
      description: '显示字数',
    },
    disabled: {
      control: 'boolean',
      description: '禁用',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
    textColor: {
      control: 'color',
      description: '文字颜色',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpTextarea>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    placeholder: '请输入内容...',
    rows: 4,
  },
  render: (args: any) => ({
    components: { CpTextarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="width: 400px;">
        <CpTextarea v-model="value" v-bind="args" />
      </div>
    `,
  }),
}

/** 形态变体 */
export const 形态变体: Story = {
  render: () => ({
    components: { CpTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">Outline</p>
          <CpTextarea variant="outline" placeholder="描边输入框" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">Filled</p>
          <CpTextarea variant="filled" placeholder="填充输入框" />
        </div>
      </div>
    `,
  }),
}

/** 字数统计 */
export const 字数统计: Story = {
  render: () => ({
    components: { CpTextarea },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="width: 400px;">
        <CpTextarea 
          v-model="value" 
          placeholder="最多输入 200 字" 
          :maxlength="200"
          show-word-limit
        />
      </div>
    `,
  }),
}

/** 自适应高度 */
export const 自适应高度: Story = {
  render: () => ({
    components: { CpTextarea },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="width: 400px;">
        <CpTextarea 
          v-model="value" 
          placeholder="输入多行内容，高度自动调整" 
          :autosize="{ minRows: 2, maxRows: 6 }"
        />
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-top: 8px;">
          高度范围: 2-6 行
        </p>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">珊瑚红</p>
          <CpTextarea color="#ff6b6b" placeholder="自定义颜色" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">薄荷绿 (Filled)</p>
          <CpTextarea color="#4ecdc4" variant="filled" placeholder="填充变体" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">薰衣草紫</p>
          <CpTextarea color="#a29bfe" placeholder="薰衣草紫" />
        </div>
      </div>
    `,
  }),
}

/** 自定义文字颜色 */
export const 自定义文字颜色: Story = {
  render: () => ({
    components: { CpTextarea },
    setup() {
      const value = ref('自定义文字颜色的多行文本')
      return { value }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpTextarea v-model="value" text-color="#ff6b6b" />
        <CpTextarea v-model="value" text-color="#4ecdc4" variant="filled" />
        <CpTextarea v-model="value" text-color="#a29bfe" />
      </div>
    `,
  }),
}
