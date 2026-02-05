import type { Meta, StoryObj } from '@storybook/vue3'
import { CpSpacer, CpButton } from '../packages/components'

/**
 * # CpSpacer 弹性空间
 * 
 * 简单的 flex 空间占位组件，仅提供 `flex-grow: 1` 效果。
 * 
 * ## 使用场景
 * - 在 flex 布局中分隔元素
 * - 将元素推向容器两端
 * - 创建动态间距
 */
const meta: Meta<typeof CpSpacer> = {
  title: '布局 Layout/Spacer 弹性空间',
  component: CpSpacer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CpSpacer>

/** 基础用法 - 将按钮推向两端 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpSpacer, CpButton },
    template: `
      <div style="display: flex; gap: 12px; padding: 16px; border: 1px dashed var(--cp-border-color); width: 100%;">
        <CpButton type="primary">左侧按钮</CpButton>
        <CpSpacer />
        <CpButton type="success">右侧按钮</CpButton>
      </div>
    `,
  }),
}

/** 导航栏布局 */
export const 导航栏布局: Story = {
  render: () => ({
    components: { CpSpacer, CpButton },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--cp-bg-elevated); clip-path: var(--cp-clip-path);">
        <span style="color: var(--cp-color-primary); font-weight: bold; font-size: 18px;">CYBER</span>
        <CpSpacer />
        <CpButton variant="ghost" size="sm">首页</CpButton>
        <CpButton variant="ghost" size="sm">产品</CpButton>
        <CpButton variant="ghost" size="sm">关于</CpButton>
        <CpButton type="primary" size="sm">登录</CpButton>
      </div>
    `,
  }),
}

/** 多个 Spacer 均分空间 */
export const 均分空间: Story = {
  render: () => ({
    components: { CpSpacer, CpButton },
    template: `
      <div style="display: flex; gap: 12px; padding: 16px; border: 1px dashed var(--cp-border-color); width: 100%;">
        <CpButton>左</CpButton>
        <CpSpacer />
        <CpButton type="warning">中</CpButton>
        <CpSpacer />
        <CpButton>右</CpButton>
      </div>
    `,
  }),
}
