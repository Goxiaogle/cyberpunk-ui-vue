import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpRadio, CpRadioGroup } from '../packages/components'

/**
 * # CpRadio 单选框
 * 
 * 赛博朋克风格单选框组件，通常配合 RadioGroup 使用。
 * 
 * ## 特性
 * - 🔘 圆形指示器设计
 * - ✨ 霓虹发光选中效果
 * - 💫 脉冲扫描动画
 * - 📐 支持 sm/md/lg 及自定义尺寸
 * - 🎭 支持边框模式 (border)
 */
const meta: Meta<typeof CpRadio> = {
  title: '表单 Form/Radio 单选框',
  component: CpRadio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '单选框尺寸',
    },
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: '颜色类型预设',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    border: {
      control: 'boolean',
      description: '边框模式',
    },
    color: {
      control: 'color',
      description: '自定义选中颜色',
    },
  },
  args: {
    size: 'md',
    type: 'primary',
    disabled: false,
    border: false,
  },
}

export default meta
type Story = StoryObj<typeof CpRadio>

/** 基础用法 (配合 RadioGroup) */
export const 基础用法: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const selected = ref('A')
      return { selected }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpRadioGroup v-model="selected">
          <CpRadio label="A">选项 A</CpRadio>
          <CpRadio label="B">选项 B</CpRadio>
          <CpRadio label="C">选项 C</CpRadio>
        </CpRadioGroup>
        <div style="font-family: 'Rajdhani'; color: var(--cp-text-secondary);">
          已选: {{ selected }}
        </div>
      </div>
    `,
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const sm = ref('sm')
      const md = ref('md')
      const lg = ref('lg')
      return { sm, md, lg }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">Small</p>
          <CpRadioGroup v-model="sm" size="sm">
            <CpRadio label="sm">选项一</CpRadio>
            <CpRadio label="sm2">选项二</CpRadio>
          </CpRadioGroup>
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">Medium</p>
          <CpRadioGroup v-model="md" size="md">
            <CpRadio label="md">选项一</CpRadio>
            <CpRadio label="md2">选项二</CpRadio>
          </CpRadioGroup>
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">Large</p>
          <CpRadioGroup v-model="lg" size="lg">
            <CpRadio label="lg">选项一</CpRadio>
            <CpRadio label="lg2">选项二</CpRadio>
          </CpRadioGroup>
        </div>
      </div>
    `,
  }),
}

/** 颜色类型 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const selected = ref({
        primary: 'yes',
        success: 'yes',
        warning: 'yes',
        error: 'yes',
        info: 'yes',
      })
      return { selected }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpRadioGroup v-model="selected.primary" type="primary">
          <CpRadio label="yes">Primary Yes</CpRadio>
          <CpRadio label="no">Primary No</CpRadio>
        </CpRadioGroup>
        <CpRadioGroup v-model="selected.success" type="success">
          <CpRadio label="yes">Success Yes</CpRadio>
          <CpRadio label="no">Success No</CpRadio>
        </CpRadioGroup>
        <CpRadioGroup v-model="selected.warning" type="warning">
          <CpRadio label="yes">Warning Yes</CpRadio>
          <CpRadio label="no">Warning No</CpRadio>
        </CpRadioGroup>
        <CpRadioGroup v-model="selected.error" type="error">
          <CpRadio label="yes">Error Yes</CpRadio>
          <CpRadio label="no">Error No</CpRadio>
        </CpRadioGroup>
        <CpRadioGroup v-model="selected.info" type="info">
          <CpRadio label="yes">Info Yes</CpRadio>
          <CpRadio label="no">Info No</CpRadio>
        </CpRadioGroup>
      </div>
    `,
  }),
}

/** 边框模式 */
export const 边框模式: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const selected = ref('normal')
      return { selected }
    },
    template: `
      <CpRadioGroup v-model="selected">
        <CpRadio label="normal" border>普通模式</CpRadio>
        <CpRadio label="turbo" border type="success">涡轮增压</CpRadio>
        <CpRadio label="stealth" border type="info">隐身模式</CpRadio>
        <CpRadio label="combat" border type="error">战斗模式</CpRadio>
      </CpRadioGroup>
    `,
  }),
}

/** 禁用状态 */
export const 禁用状态: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const selected = ref('enabled')
      return { selected }
    },
    template: `
      <CpRadioGroup v-model="selected">
        <CpRadio label="enabled">可用选项</CpRadio>
        <CpRadio label="disabled" disabled>禁用选项</CpRadio>
        <CpRadio label="another">另一个可用选项</CpRadio>
      </CpRadioGroup>
    `,
  }),
}

/** 垂直布局 */
export const 垂直布局: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const mode = ref('stealth')
      return { mode }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-primary); font-family: 'Rajdhani'; font-size: 14px;">
          选择作战模式:
        </p>
        <CpRadioGroup v-model="mode" direction="vertical" type="error">
          <CpRadio label="assault">突击模式 - 最大输出</CpRadio>
          <CpRadio label="defense">防御模式 - 最大护盾</CpRadio>
          <CpRadio label="stealth">潜行模式 - 隐身增强</CpRadio>
          <CpRadio label="recon">侦察模式 - 扫描增强</CpRadio>
        </CpRadioGroup>
        <div style="font-family: 'Rajdhani'; color: var(--cp-color-error);">
          当前模式: {{ mode.toUpperCase() }}
        </div>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const selected = ref('pink')
      return { selected }
    },
    template: `
      <CpRadioGroup v-model="selected">
        <CpRadio label="pink" color="#ff00ff">霓虹粉</CpRadio>
        <CpRadio label="gold" color="#ffd700">赛博金</CpRadio>
        <CpRadio label="lime" color="#00ff88">矩阵绿</CpRadio>
      </CpRadioGroup>
    `,
  }),
}

/** 整组禁用 */
export const 整组禁用: Story = {
  render: () => ({
    components: { CpRadio, CpRadioGroup },
    setup() {
      const selected = ref('locked')
      return { selected }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <p style="color: var(--cp-text-muted); font-size: 12px;">
          ⚠️ 系统锁定中，无法更改设置
        </p>
        <CpRadioGroup v-model="selected" disabled>
          <CpRadio label="locked">当前配置</CpRadio>
          <CpRadio label="alt1">备用配置 1</CpRadio>
          <CpRadio label="alt2">备用配置 2</CpRadio>
        </CpRadioGroup>
      </div>
    `,
  }),
}
