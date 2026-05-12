import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpLoading } from '@cyberpunk-vue/components'

/**
 * # CpLoading 加载
 * 
 * 赛博朋克风格加载器，采用 Google Material Design 圆形加载动画。
 * 
 * ## 特性
 * - 🔄 双重动画：旋转 + 弧线伸缩
 * - 🎨 6 种颜色类型
 * - 📐 3 种尺寸：sm、md、lg
 * - 🎯 可自定义颜色和描边宽度
 */
const meta: Meta<typeof CpLoading> = {
    title: '反馈 Feedback/Loading 加载',
    component: CpLoading,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
            description: '加载器颜色类型',
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: '加载器尺寸',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        color: {
            control: 'color',
            description: '自定义颜色（覆盖 type）',
        },
        strokeWidth: {
            control: { type: 'range', min: 2, max: 8, step: 1 },
            description: '描边宽度；未传入时按 size 的 10% 自动生成',
            table: {
                defaultValue: { summary: 'auto' },
            },
        },
        variant: {
            control: 'radio',
            options: ['circular', 'spinner', 'spinner-solid'],
            description: '加载器变体',
            table: {
                defaultValue: { summary: 'circular' },
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof CpLoading>

/** 基础用法 */
export const 基础用法: Story = {
    args: {
        type: 'primary',
        size: 'md',
        variant: 'circular',
    },
    render: (args: any) => ({
        components: { CpLoading },
        setup() {
            return { args }
        },
        template: '<CpLoading v-bind="args" />',
    }),
}

/** 尺寸 */
export const 尺寸: Story = {
    render: () => ({
        components: { CpLoading },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpLoading size="sm" />
        <CpLoading size="md" />
        <CpLoading size="lg" />
      </div>
    `,
    }),
}

/** 颜色类型 */
export const 颜色类型: Story = {
    render: () => ({
        components: { CpLoading },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpLoading type="primary" />
        <CpLoading type="success" />
        <CpLoading type="warning" />
        <CpLoading type="error" />
        <CpLoading type="info" />
        <CpLoading type="default" />
      </div>
    `,
    }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
    render: () => ({
        components: { CpLoading },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpLoading color="#ff6b6b" />
        <CpLoading color="#4ecdc4" />
        <CpLoading color="#ffe66d" />
        <CpLoading color="#a29bfe" />
        <CpLoading color="#fd79a8" />
        <CpLoading color="#00f0ff" />
      </div>
    `,
    }),
}

/** 描边宽度 */
export const 描边宽度: Story = {
    render: () => ({
        components: { CpLoading },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpLoading :stroke-width="2" size="lg" />
        <CpLoading :stroke-width="4" size="lg" />
        <CpLoading :stroke-width="6" size="lg" />
        <CpLoading :stroke-width="8" size="lg" />
      </div>
    `,
    }),
}

/** 加载场景示例 */
export const 加载场景: Story = {
    render: () => ({
        components: { CpLoading },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 12px; color: var(--cp-text-secondary);">
          <CpLoading size="sm" />
          <span>正在加载中...</span>
        </div>
        <div style="
          width: 200px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cp-bg-elevated);
          border: 1px solid var(--cp-border);
          border-radius: 8px;
        ">
          <CpLoading type="primary" />
        </div>
      </div>
    `,
    }),
}

/** 变体 (Variants) */
export const 变体: Story = {
    render: () => ({
        components: { CpLoading },
        template: `
      <div style="display: flex; gap: 48px; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <span style="color: var(--cp-text-secondary); font-size: 14px;">circular</span>
            <CpLoading variant="circular" size="lg" type="primary" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <span style="color: var(--cp-text-secondary); font-size: 14px;">spinner</span>
            <CpLoading variant="spinner" size="lg" type="success" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <span style="color: var(--cp-text-secondary); font-size: 14px;">spinner-solid</span>
            <CpLoading variant="spinner-solid" size="lg" type="warning" />
        </div>
      </div>
    `,
    }),
}
