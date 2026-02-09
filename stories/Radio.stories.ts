import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { CpRadio } from '../packages/components/radio'
import { CpRadioGroup } from '../packages/components/radio-group'

const meta: Meta<typeof CpRadio> = {
  title: '表单 Form/Radio 单选框',
  component: CpRadio,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: '颜色预设类型',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    border: {
      control: 'boolean',
      description: '边框模式',
    },
    glow: {
      control: 'boolean',
      description: '霓虹辉光效果',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
  },
  args: {
    type: 'primary',
    size: 'md',
    disabled: false,
    border: false,
    glow: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础用法 — 单独使用
 */
export const Default: Story = {
  render: (args) => ({
    components: { CpRadio },
    setup() {
      const picked = ref('A')
      return { args, picked }
    },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpRadio v-model="picked" value="A" v-bind="args">选项 A</CpRadio>
        <CpRadio v-model="picked" value="B" v-bind="args">选项 B</CpRadio>
        <CpRadio v-model="picked" value="C" v-bind="args">选项 C</CpRadio>
      </div>
      <p style="margin-top: 16px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
        当前选中: <span style="color: var(--cp-color-primary);">{{ picked }}</span>
      </p>
    `,
  }),
}

/**
 * 颜色类型 — primary / success / warning / error / info
 */
export const Types: Story = {
  render: () => ({
    components: { CpRadio },
    setup() {
      const values = ref<Record<string, string>>({
        primary: 'on',
        success: 'on',
        warning: 'on',
        error: 'on',
        info: 'on',
      })
      return { values }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div v-for="t in ['primary', 'success', 'warning', 'error', 'info']" :key="t"
             style="display: flex; gap: 16px; align-items: center;">
          <CpRadio v-model="values[t]" value="on" :type="t">{{ t }} - 开启</CpRadio>
          <CpRadio v-model="values[t]" value="off" :type="t">{{ t }} - 关闭</CpRadio>
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
    components: { CpRadio },
    setup() {
      const sm = ref('A')
      const md = ref('A')
      const lg = ref('A')
      return { sm, md, lg }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">SM</span>
          <CpRadio v-model="sm" value="A" size="sm">选项 A</CpRadio>
          <CpRadio v-model="sm" value="B" size="sm">选项 B</CpRadio>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">MD</span>
          <CpRadio v-model="md" value="A" size="md">选项 A</CpRadio>
          <CpRadio v-model="md" value="B" size="md">选项 B</CpRadio>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">LG</span>
          <CpRadio v-model="lg" value="A" size="lg">选项 A</CpRadio>
          <CpRadio v-model="lg" value="B" size="lg">选项 B</CpRadio>
        </div>
      </div>
    `,
  }),
}

/**
 * 禁用状态
 */
export const Disabled: Story = {
  render: () => ({
    components: { CpRadio },
    setup() {
      const picked = ref('A')
      return { picked }
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <CpRadio v-model="picked" value="A" disabled>禁用已选</CpRadio>
        <CpRadio v-model="picked" value="B" disabled>禁用未选</CpRadio>
        <CpRadio v-model="picked" value="C">正常选项</CpRadio>
      </div>
    `,
  }),
}

/**
 * 边框模式 — 卡片式选择
 */
export const Border: Story = {
  render: () => ({
    components: { CpRadio },
    setup() {
      const picked = ref('standard')
      return { picked }
    },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <CpRadio v-model="picked" value="standard" border>标准模式</CpRadio>
        <CpRadio v-model="picked" value="performance" border type="warning">性能模式</CpRadio>
        <CpRadio v-model="picked" value="stealth" border type="info">隐匿模式</CpRadio>
        <CpRadio v-model="picked" value="locked" border disabled>锁定模式</CpRadio>
      </div>
      <p style="margin-top: 12px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
        已选择: <span style="color: var(--cp-color-primary);">{{ picked }}</span>
      </p>
    `,
  }),
}

/**
 * RadioGroup 分组 — 水平布局
 */
export const Group: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const picked = ref('netrunner')
      return { picked }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <CpRadioGroup v-model="picked">
          <CpRadio value="netrunner">NET::RUNNER</CpRadio>
          <CpRadio value="solo">SOLO</CpRadio>
          <CpRadio value="techie">TECHIE</CpRadio>
          <CpRadio value="fixer">FIXER</CpRadio>
        </CpRadioGroup>
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          职业: <span style="color: var(--cp-color-primary); text-transform: uppercase;">{{ picked }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * RadioGroup 垂直布局
 */
export const GroupVertical: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const difficulty = ref('normal')
      return { difficulty }
    },
    template: `
      <CpRadioGroup v-model="difficulty" direction="vertical" type="warning">
        <CpRadio value="easy">轻松模式 — 敌人 AI 降级</CpRadio>
        <CpRadio value="normal">标准模式 — 推荐难度</CpRadio>
        <CpRadio value="hard">困难模式 — 增强探测</CpRadio>
        <CpRadio value="nightmare" disabled>噩梦模式 — 需要解锁</CpRadio>
      </CpRadioGroup>
    `,
  }),
}

/**
 * RadioGroup 各类型颜色
 */
export const GroupTypes: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const values = ref<Record<string, string>>({
        primary: 'A',
        success: 'A',
        warning: 'A',
        error: 'A',
        info: 'A',
      })
      return { values }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="t in ['primary', 'success', 'warning', 'error', 'info']" :key="t">
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            {{ t }}
          </p>
          <CpRadioGroup v-model="values[t]" :type="t">
            <CpRadio value="A">选项 A</CpRadio>
            <CpRadio value="B">选项 B</CpRadio>
            <CpRadio value="C">选项 C</CpRadio>
          </CpRadioGroup>
        </div>
      </div>
    `,
  }),
}

/**
 * 边框模式 + 分组
 */
export const GroupBorder: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const plan = ref('basic')
      return { plan }
    },
    template: `
      <CpRadioGroup v-model="plan" type="info">
        <CpRadio value="basic" border>基础套餐</CpRadio>
        <CpRadio value="pro" border>专业套餐</CpRadio>
        <CpRadio value="enterprise" border>企业套餐</CpRadio>
      </CpRadioGroup>
    `,
  }),
}

/**
 * 自定义颜色
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpRadio },
    setup() {
      const picked = ref('neon')
      return { picked }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <CpRadio v-model="picked" value="neon" color="#ff00ff">霓虹粉</CpRadio>
        <CpRadio v-model="picked" value="gold" color="#ffd700">赛博金</CpRadio>
        <CpRadio v-model="picked" value="lime" color="#39ff14">荧光绿</CpRadio>
      </div>
    `,
  }),
}
