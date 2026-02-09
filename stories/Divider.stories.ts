import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpDivider, CpButton, CpText, CpTag } from '../packages/components'

/**
 * # CpDivider 分割线
 *
 * 赛博朋克风格分割线，用于分隔内容区块。
 *
 * ## 功能特性
 * - 水平/垂直两种方向
 * - 支持文字嵌入（左/中/右位置）
 * - 多种颜色类型（primary / success / warning / error / info）
 * - 多种变体（solid / gradient / glow）
 * - 线条样式（实线/虚线/点线/双线）
 * - 自定义颜色、粗细和间距
 */
const meta: Meta<typeof CpDivider> = {
  title: '布局 Layout/Divider 分割线',
  component: CpDivider,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    contentPosition: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'gradient', 'glow'],
    },
    borderStyle: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted', 'double'],
    },
    thickness: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
    },
    color: { control: 'color' },
    dashed: { control: 'boolean' },
    glow: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof CpDivider>

/** 基础用法 — 一条简单的水平分割线 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpDivider, CpText },
    template: `
      <div style="padding: 24px; width: 100%;">
        <CpText>上方内容区域</CpText>
        <CpDivider />
        <CpText>下方内容区域</CpText>
      </div>
    `,
  }),
}

/** 带文字 — 支持在分割线中嵌入文字 */
export const 带文字: Story = {
  render: () => ({
    components: { CpDivider, CpText },
    template: `
      <div style="padding: 24px; width: 100%;">
        <CpText>上方内容</CpText>
        <CpDivider>SECTION A</CpDivider>
        <CpText>中间内容</CpText>
        <CpDivider content-position="left">LEFT</CpDivider>
        <CpText>更多内容</CpText>
        <CpDivider content-position="right">RIGHT</CpDivider>
        <CpText>下方内容</CpText>
      </div>
    `,
  }),
}

/** 垂直方向 — 常用于行内元素分隔 */
export const 垂直方向: Story = {
  render: () => ({
    components: { CpDivider, CpText, CpButton },
    template: `
      <div style="padding: 24px; display: flex; align-items: center; gap: 0;">
        <CpText>首页</CpText>
        <CpDivider direction="vertical" />
        <CpText>产品</CpText>
        <CpDivider direction="vertical" />
        <CpText>关于</CpText>
        <CpDivider direction="vertical" type="primary" />
        <CpText type="primary">联系我们</CpText>
      </div>
    `,
  }),
}

/** 颜色类型 — 五种预设颜色 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpDivider },
    template: `
      <div style="padding: 24px; width: 100%;">
        <CpDivider type="primary">PRIMARY</CpDivider>
        <CpDivider type="success">SUCCESS</CpDivider>
        <CpDivider type="warning">WARNING</CpDivider>
        <CpDivider type="error">ERROR</CpDivider>
        <CpDivider type="info">INFO</CpDivider>
      </div>
    `,
  }),
}

/** 线条样式 — 支持实线、虚线、点线和双线 */
export const 线条样式: Story = {
  render: () => ({
    components: { CpDivider },
    template: `
      <div style="padding: 24px; width: 100%;">
        <CpDivider>SOLID</CpDivider>
        <CpDivider dashed>DASHED</CpDivider>
        <CpDivider border-style="dotted">DOTTED</CpDivider>
        <CpDivider border-style="double">DOUBLE</CpDivider>
      </div>
    `,
  }),
}

/** 渐变变体 — 线条从两端渐隐 */
export const 渐变变体: Story = {
  render: () => ({
    components: { CpDivider },
    template: `
      <div style="padding: 24px; width: 100%;">
        <CpDivider variant="gradient" />
        <div style="height: 16px" />
        <CpDivider variant="gradient" type="primary">GRADIENT</CpDivider>
        <div style="height: 16px" />
        <CpDivider variant="gradient" type="success">SYSTEM ONLINE</CpDivider>
        <div style="height: 16px" />
        <CpDivider variant="gradient" type="error">WARNING</CpDivider>
      </div>
    `,
  }),
}

/** 发光变体 — 赛博朋克霓虹发光效果 */
export const 发光变体: Story = {
  render: () => ({
    components: { CpDivider },
    template: `
      <div style="padding: 24px; width: 100%; background: var(--cp-bg-deep);">
        <CpDivider variant="glow" type="primary">NEON PRIMARY</CpDivider>
        <div style="height: 24px" />
        <CpDivider variant="glow" type="success">SYSTEM ACTIVE</CpDivider>
        <div style="height: 24px" />
        <CpDivider variant="glow" type="error">ALERT</CpDivider>
        <div style="height: 24px" />
        <CpDivider variant="glow" type="info">DATA STREAM</CpDivider>
        <div style="height: 24px" />
        <CpDivider glow type="warning" />
      </div>
    `,
  }),
}

/** 自定义样式 — 线条粗细和自定义颜色 */
export const 自定义样式: Story = {
  render: () => ({
    components: { CpDivider },
    template: `
      <div style="padding: 24px; width: 100%;">
        <CpDivider :thickness="1">1px</CpDivider>
        <CpDivider :thickness="2">2px</CpDivider>
        <CpDivider :thickness="3">3px</CpDivider>
        <CpDivider color="#ff00ff">CUSTOM MAGENTA</CpDivider>
        <CpDivider color="#ffd700" variant="glow">GOLD GLOW</CpDivider>
      </div>
    `,
  }),
}

/** 综合展示 — 模拟面板布局 */
export const 综合展示: Story = {
  render: () => ({
    components: { CpDivider, CpText, CpTag, CpButton },
    template: `
      <div style="padding: 24px; width: 100%; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <CpText type="primary" :size="18" bold>SYSTEM PANEL</CpText>
          <CpTag type="success" size="sm">ONLINE</CpTag>
        </div>

        <CpDivider type="primary" variant="gradient" />

        <CpText>系统状态: 所有服务正常运行</CpText>

        <CpDivider dashed content-position="left">详细信息</CpDivider>

        <div style="display: flex; align-items: center;">
          <CpText>CPU: 45%</CpText>
          <CpDivider direction="vertical" type="primary" />
          <CpText>内存: 67%</CpText>
          <CpDivider direction="vertical" type="warning" />
          <CpText>磁盘: 82%</CpText>
        </div>

        <CpDivider type="error" variant="glow" content-position="right">⚠ ALERTS</CpDivider>

        <CpText type="error">检测到 3 个异常连接</CpText>
      </div>
    `,
  }),
}
