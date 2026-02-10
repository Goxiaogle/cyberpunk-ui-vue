import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpPatternBackground, CpCard, CpText, CpButton } from '@cyberpunk-vue/components'

/**
 * # CpPatternBackground 图案背景
 *
 * 用于展示各种装饰性背景图案，如网格、棋盘格、点阵、条纹等。
 *
 * ## 使用场景
 * - 页面装饰背景
 * - 卡片内容背景
 * - 空状态占位
 * - 科技感/赛博朋克风格界面
 *
 * ## 图案类型
 * | 类型 | 描述 |
 * |------|------|
 * | `grid` | 网格线，科技感背景 |
 * | `checkerboard` | 棋盘格，透明背景指示 |
 * | `dots` | 点阵，柔和装饰 |
 * | `stripes` | 条纹，动态感 |
 * | `cross` | 十字交叉线 |
 */
const meta: Meta<typeof CpPatternBackground> = {
  title: '布局 Layout/PatternBackground 图案背景',
  component: CpPatternBackground,
  tags: ['autodocs'],
  argTypes: {
    pattern: {
      control: 'select',
      options: ['grid', 'checkerboard', 'dots', 'stripes', 'cross'],
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical', 'diagonal', 'diagonal-reverse'],
    },
    size: {
      control: { type: 'range', min: 5, max: 100, step: 5 },
    },
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
    },
    lineWidth: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    dotScale: {
      control: { type: 'range', min: 0.01, max: 0.5, step: 0.01 },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpPatternBackground>

/** 网格线图案 - 科技感背景 */
export const Grid: Story = {
  args: {
    pattern: 'grid',
    color: 'var(--cp-color-primary, #00f0ff)',
    size: 40,
    opacity: 0.8,
    lineWidth: 1,
  },
  render: (args) => ({
    components: { CpPatternBackground },
    setup: () => ({ args }),
    template: `
      <div style="height: 200px; position: relative; background: var(--cp-bg-deep, #0a0a0f);">
        <CpPatternBackground v-bind="args" cover />
      </div>
    `,
  }),
}

/** 棋盘格图案 - 透明背景指示器 */
export const Checkerboard: Story = {
  args: {
    pattern: 'checkerboard',
    color: 'rgba(255, 255, 255, 0.15)',
    size: 20,
    opacity: 1,
  },
  render: (args) => ({
    components: { CpPatternBackground },
    setup: () => ({ args }),
    template: `
      <div style="height: 200px; position: relative; background: var(--cp-bg-elevated, #1a1a24);">
        <CpPatternBackground v-bind="args" cover />
      </div>
    `,
  }),
}

/** 点阵图案 - 柔和装饰 */
export const Dots: Story = {
  args: {
    pattern: 'dots',
    color: 'var(--cp-color-primary, #00f0ff)',
    size: 20,
    dotScale: 0.25,
    opacity: 0.8,
  },
  render: (args) => ({
    components: { CpPatternBackground },
    setup: () => ({ args }),
    template: `
      <div style="height: 200px; position: relative; background: var(--cp-bg-deep, #0a0a0f);">
        <CpPatternBackground v-bind="args" cover />
      </div>
    `,
  }),
}

/** 条纹图案 - 对角线 */
export const Stripes: Story = {
  args: {
    pattern: 'stripes',
    color: 'rgba(255, 255, 255, 0.15)',
    size: 15,
    lineWidth: 2,
    direction: 'diagonal',
    opacity: 1,
  },
  render: (args) => ({
    components: { CpPatternBackground },
    setup: () => ({ args }),
    template: `
      <div style="height: 200px; position: relative; background: linear-gradient(135deg, #1a0f10 0%, #2a1a1c 100%);">
        <CpPatternBackground v-bind="args" cover />
      </div>
    `,
  }),
}

/** 十字图案 */
export const Cross: Story = {
  args: {
    pattern: 'cross',
    color: 'var(--cp-color-success, #39ff14)',
    size: 30,
    lineWidth: 1,
    opacity: 0.7,
  },
  render: (args) => ({
    components: { CpPatternBackground },
    setup: () => ({ args }),
    template: `
      <div style="height: 200px; position: relative; background: var(--cp-bg-deep, #0a0a0f);">
        <CpPatternBackground v-bind="args" cover />
      </div>
    `,
  }),
}

/** 所有图案类型对比 */
export const 图案类型对比: Story = {
  render: () => ({
    components: { CpPatternBackground, CpText },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <div style="height: 150px; position: relative; background: var(--cp-bg-deep, #0a0a0f); border: 1px solid var(--cp-border, #2a2a3a); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-primary, #00f0ff)" :size="30" :opacity="0.8" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText bold>Grid 网格</CpText>
          </div>
        </div>
        <div style="height: 150px; position: relative; background: var(--cp-bg-deep, #0a0a0f); border: 1px solid var(--cp-border, #2a2a3a); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="checkerboard" color="rgba(255,255,255,0.2)" :size="16" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText bold>Checkerboard 棋盘</CpText>
          </div>
        </div>
        <div style="height: 150px; position: relative; background: var(--cp-bg-deep, #0a0a0f); border: 1px solid var(--cp-border, #2a2a3a); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="dots" color="var(--cp-color-info, #7b68ee)" :size="20" :dotScale="0.25" :opacity="0.9" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText bold>Dots 点阵</CpText>
          </div>
        </div>
        <div style="height: 150px; position: relative; background: var(--cp-bg-deep, #0a0a0f); border: 1px solid var(--cp-border, #2a2a3a); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="stripes" color="rgba(255,255,255,0.15)" :size="12" direction="diagonal" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText bold>Stripes 条纹</CpText>
          </div>
        </div>
        <div style="height: 150px; position: relative; background: var(--cp-bg-deep, #0a0a0f); border: 1px solid var(--cp-border, #2a2a3a); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="cross" color="var(--cp-color-warning, #ff9f1c)" :size="25" :opacity="0.7" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText bold>Cross 十字</CpText>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 条纹方向对比 */
export const 条纹方向: Story = {
  render: () => ({
    components: { CpPatternBackground, CpText },
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <div style="height: 120px; position: relative; background: var(--cp-bg-elevated); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="stripes" color="var(--cp-color-primary, #00f0ff)" direction="horizontal" :size="15" :lineWidth="2" :opacity="0.9" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">horizontal</CpText>
          </div>
        </div>
        <div style="height: 120px; position: relative; background: var(--cp-bg-elevated); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="stripes" color="var(--cp-color-primary, #00f0ff)" direction="vertical" :size="15" :lineWidth="2" :opacity="0.9" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">vertical</CpText>
          </div>
        </div>
        <div style="height: 120px; position: relative; background: var(--cp-bg-elevated); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="stripes" color="var(--cp-color-primary, #00f0ff)" direction="diagonal" :size="15" :lineWidth="2" :opacity="0.9" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">diagonal</CpText>
          </div>
        </div>
        <div style="height: 120px; position: relative; background: var(--cp-bg-elevated); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="stripes" color="var(--cp-color-primary, #00f0ff)" direction="diagonal-reverse" :size="15" :lineWidth="2" :opacity="0.9" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">diagonal-reverse</CpText>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 颜色变化 */
export const 颜色配置: Story = {
  render: () => ({
    components: { CpPatternBackground, CpText },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <div style="height: 120px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-primary)" :size="30" :opacity="0.8" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText type="primary" :size="10">Primary</CpText>
          </div>
        </div>

        <div style="height: 120px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-success)" :size="30" :opacity="0.8" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText type="success" :size="10">Success</CpText>
          </div>
        </div>

        <div style="height: 120px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-warning)" :size="30" :opacity="0.8" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText type="warning" :size="10">Warning</CpText>
          </div>
        </div>

        <div style="height: 120px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-error)" :size="30" :opacity="0.8" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText type="error" :size="10">Error</CpText>
          </div>
        </div>

        <div style="height: 120px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-info)" :size="30" :opacity="0.8" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText type="info" :size="10">Info</CpText>
          </div>
        </div>

        <div style="height: 120px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="#ff00ff" :size="30" :opacity="0.7" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10" color="#ff00ff">Custom</CpText>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 尺寸变化 */
export const 尺寸调整: Story = {
  render: () => ({
    components: { CpPatternBackground, CpText },
    template: `
      <div style="display: flex; gap: 12px;">
        <div style="flex: 1; height: 150px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="dots" color="rgba(255,255,255,0.6)" :size="10" :dotScale="0.25" :opacity="1" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">size: 10</CpText>
          </div>
        </div>
        <div style="flex: 1; height: 150px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="dots" color="rgba(255,255,255,0.6)" :size="30" :dotScale="0.25" :opacity="1" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">size: 30</CpText>
          </div>
        </div>
        <div style="flex: 1; height: 150px; position: relative; background: var(--cp-bg-deep); border-radius: 8px; overflow: hidden;">
          <CpPatternBackground pattern="dots" color="rgba(255,255,255,0.6)" :size="60" :dotScale="0.25" :opacity="1" cover />
          <div style="position: absolute; bottom: 8px; left: 8px; z-index: 1;">
            <CpText :size="10">size: 60</CpText>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 实际应用 - 卡片装饰背景 */
export const 卡片装饰背景: Story = {
  render: () => ({
    components: { CpPatternBackground, CpCard, CpText, CpButton },
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
        <CpCard title="系统监控" variant="semi" style="position: relative; overflow: hidden;">
          <CpPatternBackground pattern="grid" color="var(--cp-color-primary, #00f0ff)" :size="40" :opacity="0.2" cover decorative />
          <div style="position: relative; z-index: 1;">
            <CpText>CPU 使用率: 45%</CpText>
            <br />
            <CpText>内存占用: 8.2 GB</CpText>
          </div>
        </CpCard>
        
        <CpCard title="数据分析" variant="semi" style="position: relative; overflow: hidden;">
          <CpPatternBackground pattern="dots" color="var(--cp-color-info, #7b68ee)" :size="25" :dotScale="0.25" :opacity="0.5" cover decorative />
          <div style="position: relative; z-index: 1;">
            <CpText>实时数据流</CpText>
            <br />
            <CpButton size="sm" type="info" style="margin-top: 8px;">查看详情</CpButton>
          </div>
        </CpCard>
      </div>
    `,
  }),
}

/** 渐变背景叠加 */
export const 渐变背景叠加: Story = {
  render: () => ({
    components: { CpPatternBackground, CpText },
    template: `
      <div style="height: 250px; position: relative; background: linear-gradient(135deg, #0f0808 0%, #1a1025 50%, #0a1520 100%); border-radius: 12px; overflow: hidden;">
        <CpPatternBackground pattern="grid" color="var(--cp-color-primary, #00f0ff)" :size="60" :opacity="0.3" cover decorative />
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1;">
          <CpText type="primary" :size="32" bold>CYBERPUNK</CpText>
          <CpText :size="14" style="margin-top: 8px; opacity: 0.6;">Pattern Background Demo</CpText>
        </div>
      </div>
    `,
  }),
}
