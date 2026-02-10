import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { CpSegmented } from '@cyberpunk-vue/components'

const meta: Meta<typeof CpSegmented> = {
  title: '表单 Form/Segmented 分段选择器',
  component: CpSegmented,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色预设类型',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'semi', 'ghost', 'neon'],
      description: '变体样式',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round', 'circle'],
      description: '形状模式',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    block: {
      control: 'boolean',
      description: '是否撑满宽度',
    },
    color: {
      control: 'color',
      description: '自定义主题色',
    },
  },
  args: {
    type: 'primary',
    variant: 'solid',
    size: 'md',
    shape: 'clip',
    disabled: false,
    block: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础用法 — 字符串选项
 */
export const Default: Story = {
  render: (args) => ({
    components: { CpSegmented },
    setup() {
      const value = ref('日')
      return { args, value }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpSegmented v-model="value" :options="['日', '周', '月', '年']" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          当前: <span style="color: var(--cp-color-primary);">{{ value }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * 颜色类型 — default / primary / success / warning / error / info
 */
export const Types: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        default: 'A',
        primary: 'A',
        success: 'A',
        warning: 'A',
        error: 'A',
        info: 'A',
      })
      const options = ['A', 'B', 'C']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="t in ['default', 'primary', 'success', 'warning', 'error', 'info']" :key="t"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            {{ t }}
          </span>
          <CpSegmented v-model="values[t]" :options="options" :type="t" />
        </div>
      </div>
    `,
  }),
}

/**
 * 变体样式 — solid / outline / semi / ghost / neon
 */
export const Variants: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        solid: '列表',
        outline: '列表',
        semi: '列表',
        ghost: '列表',
        neon: '列表',
      })
      const options = ['列表', '网格', '画廊']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div v-for="v in ['solid', 'outline', 'semi', 'ghost', 'neon']" :key="v"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            {{ v }}
          </span>
          <CpSegmented v-model="values[v]" :options="options" :variant="v" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 尺寸 — sm / md / lg
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const sm = ref('A')
      const md = ref('A')
      const lg = ref('A')
      const options = ['A', 'B', 'C']
      return { sm, md, lg, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">SM</span>
          <CpSegmented v-model="sm" :options="options" size="sm" type="primary" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">MD</span>
          <CpSegmented v-model="md" :options="options" size="md" type="primary" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">LG</span>
          <CpSegmented v-model="lg" :options="options" size="lg" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 形状模式 — clip / no-clip / round / circle
 */
export const Shapes: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        clip: 'A',
        'no-clip': 'A',
        round: 'A',
        circle: 'A',
      })
      const options = ['A', 'B', 'C']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="s in ['clip', 'no-clip', 'round', 'circle']" :key="s"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">
            {{ s }}
          </span>
          <CpSegmented v-model="values[s]" :options="options" :shape="s" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义颜色 — 搭配不同变体
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        solid: 'A',
        outline: 'A',
        semi: 'A',
        neon: 'A',
      })
      const options = ['A', 'B', 'C']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="v in ['solid', 'outline', 'semi', 'neon']" :key="v"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">
            {{ v }}
          </span>
          <CpSegmented v-model="values[v]" :options="options" :variant="v" color="#ff00ff" />
        </div>
      </div>
    `,
  }),
}

/**
 * Block 模式 — 撑满宽度
 */
export const Block: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const value = ref('标准')
      const options = ['标准', '性能', '省电', '自定义']
      return { value, options }
    },
    template: `
      <div style="max-width: 600px;">
        <CpSegmented v-model="value" :options="options" type="primary" block />
      </div>
    `,
  }),
}

/**
 * 禁用状态 — 整体禁用 & 单项禁用
 */
export const Disabled: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const v1 = ref('A')
      const v2 = ref('A')
      const optionsAll = ['A', 'B', 'C']
      const optionsMixed = [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B', disabled: true },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D', disabled: true },
      ]
      return { v1, v2, optionsAll, optionsMixed }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">整体禁用</p>
          <CpSegmented v-model="v1" :options="optionsAll" type="primary" disabled />
        </div>
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">单项禁用 (B, D)</p>
          <CpSegmented v-model="v2" :options="optionsMixed" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 对象选项 — label / value / disabled
 */
export const ObjectOptions: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const mode = ref('scan')
      const options = [
        { label: 'SCAN', value: 'scan' },
        { label: 'BREACH', value: 'breach' },
        { label: 'DECODE', value: 'decode' },
        { label: 'LOCKED', value: 'locked', disabled: true },
      ]
      return { mode, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpSegmented v-model="mode" :options="options" type="warning" variant="neon" />
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          MODE: <span style="color: var(--cp-color-warning); text-transform: uppercase;">{{ mode }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * 变体 × 类型 组合展示
 */
export const VariantTypeCombinations: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({})
      const variants = ['solid', 'outline', 'semi', 'ghost', 'neon']
      const types = ['primary', 'success', 'warning', 'error', 'info']
      const options = ['ON', 'OFF', 'AUTO']

      variants.forEach(v => {
        types.forEach(t => {
          values.value[`${v}-${t}`] = 'ON'
        })
      })

      return { values, variants, types, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div v-for="v in variants" :key="v">
          <p style="margin-bottom: 12px; color: var(--cp-text-muted); font-family: monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">
            {{ v }}
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px;">
            <CpSegmented
              v-for="t in types" :key="t"
              v-model="values[v + '-' + t]"
              :options="options"
              :variant="v"
              :type="t"
            />
          </div>
        </div>
      </div>
    `,
  }),
}
