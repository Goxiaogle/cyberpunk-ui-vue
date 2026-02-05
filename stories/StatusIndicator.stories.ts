import type { Meta, StoryObj } from '@storybook/vue3'
import { CpStatusIndicator } from '../packages/components'

/**
 * # CpStatusIndicator 状态指示器
 *
 * 赛博朋克风格状态指示器，用于独立显示各种状态。
 *
 * ## 特性
 * - 🎨 6 种颜色类型 + 自定义颜色
 * - 📐 3 种尺寸：sm、md、lg
 * - 🔷 3 种形状：dot（圆点）、square（方块）、diamond（菱形）
 * - ✨ 3 种动画：pulse（脉冲）、glow（发光）、blink（闪烁）
 * - 🏷️ 可选文字标签
 */
const meta: Meta<typeof CpStatusIndicator> = {
  title: '数据展示 Data Display/StatusIndicator 状态指示器',
  component: CpStatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
      description: '颜色类型',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    shape: {
      control: 'select',
      options: ['dot', 'square', 'diamond'],
      description: '形状',
      table: {
        defaultValue: { summary: 'dot' },
      },
    },
    animation: {
      control: 'select',
      options: ['none', 'pulse', 'glow', 'blink'],
      description: '动画效果',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    color: {
      control: 'color',
      description: '自定义颜色（覆盖 type）',
    },
    duration: {
      control: { type: 'text' },
      description: '动画持续时间 (数字默认 ms，字符串可指定单位如 1.5s)',
      table: {
        defaultValue: { summary: '1500' },
      },
    },
    intensity: {
      control: { type: 'range', min: 0.1, max: 5, step: 0.1 },
      description: '动画激烈程度 (倍率)',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    gap: {
      control: { type: 'text' },
      description: '间隙 (px)',
      table: {
        defaultValue: { summary: '4/6/8' },
      },
    },
    label: {
      control: 'text',
      description: '文字标签 (也可使用默认插槽)',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpStatusIndicator>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    type: 'success',
    size: 'md',
  },
  render: (args: any) => ({
    components: { CpStatusIndicator },
    setup() {
      return { args }
    },
    template: '<CpStatusIndicator v-bind="args" />',
  }),
}

/** 颜色类型 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpStatusIndicator type="primary" label="Primary" />
        <CpStatusIndicator type="success" label="Success" />
        <CpStatusIndicator type="warning" label="Warning" />
        <CpStatusIndicator type="error" label="Error" />
        <CpStatusIndicator type="info" label="Info" />
        <CpStatusIndicator type="default" label="Default" />
      </div>
    `,
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpStatusIndicator type="primary" size="sm" label="Small" />
        <CpStatusIndicator type="primary" size="md" label="Medium" />
        <CpStatusIndicator type="primary" size="lg" label="Large" />
      </div>
    `,
  }),
}

/** 形状 */
export const 形状: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 32px; align-items: center;">
        <CpStatusIndicator type="primary" shape="dot" label="圆点 Dot" />
        <CpStatusIndicator type="success" shape="square" label="方块 Square" />
        <CpStatusIndicator type="warning" shape="diamond" label="菱形 Diamond" />
      </div>
    `,
  }),
}

/** 动画效果 */
export const 动画效果: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 32px; align-items: center;">
        <CpStatusIndicator type="success" animation="pulse" label="脉冲 Pulse" />
        <CpStatusIndicator type="primary" animation="glow" label="发光 Glow" />
        <CpStatusIndicator type="error" animation="blink" label="闪烁 Blink" />
        <CpStatusIndicator type="info" animation="none" label="无动画 None" />
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpStatusIndicator color="#ff6b6b" label="珊瑚红" />
        <CpStatusIndicator color="#4ecdc4" label="青绿" />
        <CpStatusIndicator color="#ffe66d" label="柠檬黄" />
        <CpStatusIndicator color="#a29bfe" label="薰衣草" />
        <CpStatusIndicator color="#fd79a8" label="粉红" />
        <CpStatusIndicator color="#00f0ff" label="赛博蓝" />
      </div>
    `,
  }),
}

/** 动画时长 */
export const 动画时长: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 32px; align-items: center;">
        <CpStatusIndicator type="primary" animation="pulse" :duration="500" label="极速 (500ms)" />
        <CpStatusIndicator type="primary" animation="pulse" :duration="1500" label="正常 (1500ms)" />
        <CpStatusIndicator type="primary" animation="pulse" :duration="3000" label="缓慢 (3000ms)" />
      </div>
    `,
  }),
}

/** 自定义间隙 */
export const 自定义间隙: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <CpStatusIndicator type="success" size="lg" label="默认间隙 (lg: 8px)" />
          <CpStatusIndicator type="success" size="lg" :gap="20" label="大间隙 (20px)" />
          <CpStatusIndicator type="success" size="lg" gap="0px" label="无间隙" />
        </div>
      </div>
    `,
  }),
}

/** 动画激烈程度 */
export const 动画激烈程度: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div style="display: flex; gap: 32px; align-items: center;">
          <CpStatusIndicator type="success" animation="pulse" :intensity="0.5" label="轻微 (0.5)" />
          <CpStatusIndicator type="success" animation="pulse" :intensity="1" label="标准 (1)" />
          <CpStatusIndicator type="success" animation="pulse" :intensity="3" label="猛烈 (3)" />
        </div>
        <div style="display: flex; gap: 32px; align-items: center;">
          <CpStatusIndicator type="primary" animation="glow" :intensity="0.5" label="微光 (0.5)" />
          <CpStatusIndicator type="primary" animation="glow" :intensity="1" label="标准 (1)" />
          <CpStatusIndicator type="primary" animation="glow" :intensity="3" label="强光 (3)" />
        </div>
        <div style="display: flex; gap: 32px; align-items: center;">
          <CpStatusIndicator type="error" animation="blink" :intensity="0.5" label="平缓 (0.5)" />
          <CpStatusIndicator type="error" animation="blink" :intensity="1" label="标准 (1)" />
          <CpStatusIndicator type="error" animation="blink" :intensity="3" label="急促 (3)" />
        </div>
      </div>
    `,
  }),
}

/** 插槽支持 */
export const 插槽支持: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpStatusIndicator type="primary" animation="pulse">
          <span style="color: var(--cp-color-primary); font-weight: bold; text-decoration: underline;">
            使用插槽自定义样式
          </span>
        </CpStatusIndicator>
        <CpStatusIndicator type="warning">
          <div style="display: flex; flex-direction: column; line-height: 1;">
            <span>多行内容</span>
            <small style="opacity: 0.6; font-size: 10px;">Sub-label</small>
          </div>
        </CpStatusIndicator>
      </div>
    `,
  }),
}

/** 组合使用 */
export const 组合使用: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 24px; align-items: center;">
          <CpStatusIndicator type="success" animation="pulse" shape="dot" size="lg" label="系统在线" />
          <CpStatusIndicator type="warning" animation="glow" shape="diamond" size="lg" label="处理中" />
          <CpStatusIndicator type="error" animation="blink" shape="square" size="lg" label="连接断开" />
        </div>
        <div style="display: flex; gap: 24px; align-items: center;">
          <CpStatusIndicator color="#00f0ff" animation="pulse" shape="diamond" label="数据同步" />
          <CpStatusIndicator color="#ff00ff" animation="glow" shape="dot" label="AI 运行中" />
        </div>
      </div>
    `,
  }),
}

/** 状态面板示例 */
export const 状态面板: Story = {
  render: () => ({
    components: { CpStatusIndicator },
    template: `
      <div style="
        background: var(--cp-bg-elevated);
        border: 1px solid var(--cp-border);
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 240px;
      ">
        <div style="font-size: 14px; color: var(--cp-text-secondary); margin-bottom: 8px;">系统状态</div>
        <CpStatusIndicator type="success" animation="pulse" label="网络连接" />
        <CpStatusIndicator type="success" label="数据库服务" />
        <CpStatusIndicator type="warning" animation="glow" label="缓存服务" />
        <CpStatusIndicator type="error" animation="blink" label="消息队列" />
        <CpStatusIndicator type="info" label="备份服务" />
      </div>
    `,
  }),
}
