import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpBadge, CpButton } from '@cyberpunk-vue/components'

/**
 * CpBadge 徽章组件
 *
 * 用于在另一个元素上显示数字、小红点或状态标识。
 * 支持多种颜色类型、变体样式、最大值限制与自定义偏移。
 */
const meta: Meta<typeof CpBadge> = {
  title: '数据展示 Data Display/Badge 徽章',
  component: CpBadge,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '徽章显示内容（数字或字符串）',
    },
    max: {
      control: 'number',
      description: '最大显示数值，超出显示 `{max}+`',
    },
    dot: {
      control: 'boolean',
      description: '小红点模式',
    },
    hidden: {
      control: 'boolean',
      description: '是否隐藏徽章',
    },
    showZero: {
      control: 'boolean',
      description: '值为 0 时是否显示',
    },
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
      description: '徽章颜色类型',
    },
    color: {
      control: 'color',
      description: '自定义背景颜色',
    },
    textColor: {
      control: 'color',
      description: '自定义文本颜色',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'glow'],
      description: '变体样式',
    },
    offset: {
      control: 'object',
      description: '自定义偏移量 [x, y]',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: '徽章尺寸',
    },
  },
  args: {
    value: 5,
    max: 99,
    min: 0,
    dot: false,
    hidden: false,
    showZero: false,
    type: 'error',
    variant: 'solid',
    size: 'default',
    color: '',
    textColor: '',
  },
}

export default meta
type Story = StoryObj<typeof CpBadge>

/**
 * 基础用法 - 单个可控徽章
 */
export const Basic: Story = {
  render: (args: any) => ({
    components: { CpBadge, CpButton },
    setup() {
      return { args }
    },
    template: `
      <CpBadge v-bind="args">
        <CpButton>消息</CpButton>
      </CpBadge>
    `,
  }),
}

/**
 * 颜色类型
 *
 * 展示所有预设的颜色类型，包括新增的 `default` 类型。
 */
export const Types: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge :value="5" type="error">
          <CpButton>Error</CpButton>
        </CpBadge>
        <CpBadge :value="10" type="primary">
          <CpButton>Primary</CpButton>
        </CpBadge>
        <CpBadge :value="15" type="success">
          <CpButton>Success</CpButton>
        </CpBadge>
        <CpBadge :value="20" type="warning">
          <CpButton>Warning</CpButton>
        </CpBadge>
        <CpBadge :value="25" type="info">
          <CpButton>Info</CpButton>
        </CpBadge>
        <CpBadge :value="30" type="default">
          <CpButton>Default</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 最小值与最大值限制
 *
 * - `max`: 超出时显示 `{max}+`
 * - `min`: 低于时显示 `{min}-`
 */
export const Range: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge :value="100" :max="99">
          <CpButton>max=99</CpButton>
        </CpBadge>
        <CpBadge :value="2" :min="5">
          <CpButton>min=5</CpButton>
        </CpBadge>
        <CpBadge :value="1" :min="10">
          <CpButton>min=10</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 自定义外观
 *
 * 使用 `color` 修改背景色，使用 `textColor` 修改文字颜色。
 */
export const CustomAppearance: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge :value="8" color="#ff00ff" text-color="#000">
          <CpButton>粉底黑字</CpButton>
        </CpBadge>
        <CpBadge :value="123" color="rgba(255, 255, 255, 0.2)" text-color="#0ff">
          <CpButton>透传光感</CpButton>
        </CpBadge>
        <CpBadge value="GO" color="#000" text-color="#00f0ff" variant="outline">
          <CpButton>黑底青字</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 小红点
 *
 * 使用 `dot` 属性显示简化的小红点，用于纯状态提示。
 */
export const Dot: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge dot type="error">
          <CpButton>消息</CpButton>
        </CpBadge>
        <CpBadge dot type="primary">
          <CpButton>通知</CpButton>
        </CpBadge>
        <CpBadge dot type="success">
          <CpButton>在线</CpButton>
        </CpBadge>
        <CpBadge dot type="warning">
          <CpButton>警告</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 变体样式
 *
 * - **Solid**: 实心填充（默认）
 * - **Outline**: 边框描边
 * - **Glow**: 发光效果（赛博朋克风格）
 */
export const Variants: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Solid</span>
          <CpBadge :value="5" variant="solid" type="error">
            <CpButton>Error</CpButton>
          </CpBadge>
          <CpBadge :value="5" variant="solid" type="primary">
            <CpButton>Primary</CpButton>
          </CpBadge>
          <CpBadge :value="5" variant="solid" type="success">
            <CpButton>Success</CpButton>
          </CpBadge>
        </div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Outline</span>
          <CpBadge :value="5" variant="outline" type="error">
            <CpButton>Error</CpButton>
          </CpBadge>
          <CpBadge :value="5" variant="outline" type="primary">
            <CpButton>Primary</CpButton>
          </CpBadge>
          <CpBadge :value="5" variant="outline" type="success">
            <CpButton>Success</CpButton>
          </CpBadge>
        </div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Glow</span>
          <CpBadge :value="5" variant="glow" type="error">
            <CpButton>Error</CpButton>
          </CpBadge>
          <CpBadge :value="5" variant="glow" type="primary">
            <CpButton>Primary</CpButton>
          </CpBadge>
          <CpBadge :value="5" variant="glow" type="success">
            <CpButton>Success</CpButton>
          </CpBadge>
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义颜色
 *
 * 使用 `color` 属性自定义徽章颜色。
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge :value="5" color="#ff00ff">
          <CpButton>Magenta</CpButton>
        </CpBadge>
        <CpBadge :value="10" color="#00ffff">
          <CpButton>Cyan</CpButton>
        </CpBadge>
        <CpBadge :value="15" color="#ff6b35">
          <CpButton>Orange</CpButton>
        </CpBadge>
        <CpBadge dot color="#a855f7">
          <CpButton>Purple Dot</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 自定义偏移
 *
 * 使用 `offset` 属性自定义徽章位置偏移。正值向右/下偏移。
 */
export const Offset: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 48px; flex-wrap: wrap;">
        <CpBadge :value="5" :offset="[0, 0]">
          <CpButton>默认位置</CpButton>
        </CpBadge>
        <CpBadge :value="5" :offset="[-5, 5]">
          <CpButton>左下偏移</CpButton>
        </CpBadge>
        <CpBadge :value="5" :offset="[10, -5]">
          <CpButton>右上偏移</CpButton>
        </CpBadge>
        <CpBadge :value="5" :offset="[15, 10]">
          <CpButton>右下偏移</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 隐藏与零值
 *
 * - `hidden` 属性可强制隐藏徽章
 * - `showZero` 属性控制值为 0 时是否显示
 */
export const HiddenAndZero: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge :value="0">
          <CpButton>value=0 (隐藏)</CpButton>
        </CpBadge>
        <CpBadge :value="0" show-zero>
          <CpButton>value=0 showZero</CpButton>
        </CpBadge>
        <CpBadge :value="5" hidden>
          <CpButton>hidden=true</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 字符串内容
 *
 * 徽章支持显示字符串内容，如 "new"、"hot" 等。
 */
export const StringValue: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <CpBadge value="new" type="primary">
          <CpButton>新功能</CpButton>
        </CpBadge>
        <CpBadge value="hot" type="error">
          <CpButton>热门</CpButton>
        </CpBadge>
        <CpBadge value="VIP" type="warning" variant="glow">
          <CpButton>会员</CpButton>
        </CpBadge>
      </div>
    `,
  }),
}

/**
 * 尺寸
 *
 * 支持 `small`、`default`、`large` 三种尺寸。
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpBadge, CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Small</span>
          <CpBadge :value="5" size="small">
            <CpButton>消息</CpButton>
          </CpBadge>
          <CpBadge :value="99" size="small" type="primary">
            <CpButton>通知</CpButton>
          </CpBadge>
          <CpBadge dot size="small" type="success">
            <CpButton>在线</CpButton>
          </CpBadge>
        </div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Default</span>
          <CpBadge :value="5" size="default">
            <CpButton>消息</CpButton>
          </CpBadge>
          <CpBadge :value="99" size="default" type="primary">
            <CpButton>通知</CpButton>
          </CpBadge>
          <CpBadge dot size="default" type="success">
            <CpButton>在线</CpButton>
          </CpBadge>
        </div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Large</span>
          <CpBadge :value="5" size="large">
            <CpButton>消息</CpButton>
          </CpBadge>
          <CpBadge :value="99" size="large" type="primary">
            <CpButton>通知</CpButton>
          </CpBadge>
          <CpBadge dot size="large" type="success">
            <CpButton>在线</CpButton>
          </CpBadge>
        </div>
      </div>
    `,
  }),
}
