import type { Meta, StoryObj } from '@storybook/vue3'
import { CpCard, CpButton } from '../packages/components'

/**
 * # CpCard 卡片
 * 
 * 赛博朋克风格卡片容器组件，用于展示内容分组。
 * 
 * ## 特性
 * - 🎨 4 种变体：solid、outline、semi、ghost
 * - 📐 3 种形状：clip、no-clip、round
 * - 🌟 3 种阴影模式：always、hover、never
 * - ⚡ 机甲风切角设计
 * - 📦 灵活的头部/底部插槽
 */
const meta: Meta<typeof CpCard> = {
  title: '布局 Layout/Card 卡片',
  component: CpCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '卡片标题',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'semi', 'ghost'],
      description: '卡片变体',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round'],
      description: '卡片形状',
      table: {
        defaultValue: { summary: 'clip' },
      },
    },
    shadow: {
      control: 'select',
      options: ['always', 'hover', 'never'],
      description: '阴影显示时机',
      table: {
        defaultValue: { summary: 'always' },
      },
    },
    headerBorder: {
      control: 'boolean',
      description: '是否显示头部分隔线',
    },
    footerBorder: {
      control: 'boolean',
      description: '是否显示底部分隔线',
    },
    overlayAnimation: {
      control: 'select',
      options: ['slide-up', 'slide-down', 'slide-left', 'slide-right', 'fade', 'scale'],
      description: '覆层出场动画',
      table: {
        defaultValue: { summary: 'slide-up' },
      },
    },
    overlayPosition: {
      control: 'select',
      options: ['bottom', 'top', 'center'],
      description: '覆层位置',
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
    overlayDuration: {
      control: { type: 'number', min: 100, max: 1000, step: 50 },
      description: '覆层 animation 持续时间 (ms)',
      table: {
        defaultValue: { summary: '300' },
      },
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '主题颜色类型',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'color',
      description: '自定义主题色 (覆盖 type)',
    },
    dimmed: {
      control: 'boolean',
      description: '是否开启平常减淡显示',
    },
    dimmedType: {
      control: 'select',
      options: ['saturation', 'gray'],
      description: '减淡模式类型',
      table: {
        defaultValue: { summary: 'saturation' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpCard>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    title: '系统监控',
    variant: 'solid',
    shape: 'clip',
    shadow: 'always',
  },
  render: (args: any) => ({
    components: { CpCard },
    setup() {
      return { args }
    },
    template: `
      <CpCard v-bind="args" style="width: 320px;">
        <p>CPU 使用率: 45%</p>
        <p>内存占用: 68%</p>
        <p>网络延迟: 12ms</p>
      </CpCard>
    `,
  }),
}

/** 变体展示 */
export const 变体展示: Story = {
  render: () => ({
    components: { CpCard },
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 700px;">
        <CpCard title="Solid 实心" variant="solid">
          <p>默认的实心背景卡片，适合主要内容展示。</p>
        </CpCard>
        <CpCard title="Outline 描边" variant="outline">
          <p>透明背景配合边框，适合次要信息区块。</p>
        </CpCard>
        <CpCard title="Semi 半透明" variant="semi">
          <p>毛玻璃效果背景，适合叠加在图片上使用。</p>
        </CpCard>
        <CpCard title="Ghost 幽灵" variant="ghost">
          <p>完全透明的背景，悬停才显示边界。</p>
        </CpCard>
      </div>
    `,
  }),
}

/** 形状模式 */
export const 形状模式: Story = {
  render: () => ({
    components: { CpCard },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <CpCard title="Clip 切角" shape="clip" style="width: 200px;">
          <p>机甲风格切角造型</p>
        </CpCard>
        <CpCard title="No-Clip 直角" shape="no-clip" style="width: 200px;">
          <p>标准直角矩形</p>
        </CpCard>
        <CpCard title="Round 圆角" shape="round" style="width: 200px;">
          <p>柔和的圆角设计</p>
        </CpCard>
      </div>
    `,
  }),
}

/** 阴影控制 */
export const 阴影控制: Story = {
  render: () => ({
    components: { CpCard },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <CpCard title="Always" shadow="always" style="width: 200px;">
          <p>始终显示阴影</p>
        </CpCard>
        <CpCard title="Hover" shadow="hover" style="width: 200px;">
          <p>悬停时显示阴影</p>
        </CpCard>
        <CpCard title="Never" shadow="never" style="width: 200px;">
          <p>不显示阴影</p>
        </CpCard>
      </div>
    `,
  }),
}

/** 带额外操作 */
export const 带额外操作: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <CpCard title="数据面板" style="width: 400px;">
        <template #extra>
          <CpButton size="sm" variant="ghost">刷新</CpButton>
          <CpButton size="sm" variant="outline" type="primary">导出</CpButton>
        </template>
        <p>这是一个带有头部操作按钮的卡片示例。</p>
        <p>通过 #extra 插槽可以在标题右侧放置任意内容。</p>
      </CpCard>
    `,
  }),
}

/** 自定义头部和底部 */
export const 自定义头部底部: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <CpCard style="width: 400px;">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">🚀</span>
            <div>
              <div style="font-weight: 600; color: var(--cp-text-primary);">任务中心</div>
              <div style="font-size: 12px; color: var(--cp-text-tertiary);">管理你的任务</div>
            </div>
          </div>
        </template>
        <p>自定义头部区域，可以放置任意内容。</p>
        <p>包括图标、副标题、状态指示器等。</p>
        <template #footer>
          <CpButton variant="ghost">取消</CpButton>
          <CpButton type="primary">确认</CpButton>
        </template>
      </CpCard>
    `,
  }),
}

/** 无头部卡片 */
export const 无头部卡片: Story = {
  render: () => ({
    components: { CpCard },
    template: `
      <CpCard style="width: 320px;">
        <p>这是一个没有头部的简洁卡片。</p>
        <p>适合纯内容展示场景。</p>
      </CpCard>
    `,
  }),
}

/** 组合示例 */
export const 组合示例: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 900px;">
        <CpCard title="Primary" variant="semi" style="border-color: var(--cp-color-primary);">
          <p style="color: var(--cp-color-primary);">主要信息卡片</p>
        </CpCard>
        <CpCard title="Success" variant="semi" style="border-color: var(--cp-color-success);">
          <p style="color: var(--cp-color-success);">成功状态卡片</p>
        </CpCard>
        <CpCard title="Warning" variant="semi" style="border-color: var(--cp-color-warning);">
          <p style="color: var(--cp-color-warning);">警告信息卡片</p>
        </CpCard>
      </div>
    `,
  }),
}

/** 隐藏式覆层 */
export const 隐藏式覆层: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <CpCard title="资产卡片" style="width: 300px; height: 200px;">
          <p>鼠标悬停查看操作按钮</p>
          <p style="color: var(--cp-text-tertiary); font-size: 12px;">覆层将从底部滑入</p>
          <template #overlay>
            <div style="display: flex; gap: 8px; justify-content: flex-end;">
              <CpButton size="sm" variant="ghost">取消</CpButton>
              <CpButton size="sm" type="primary">编辑资产</CpButton>
            </div>
          </template>
        </CpCard>
        <CpCard title="确认匹配" variant="outline" style="width: 300px; height: 200px; border-color: var(--cp-color-info);">
          <p>AI 智能匹配结果</p>
          <p style="color: var(--cp-text-tertiary); font-size: 12px;">悬停确认或拒绝</p>
          <template #overlay>
            <div style="display: flex; gap: 8px; justify-content: space-between;">
              <CpButton size="sm" variant="ghost" type="danger">拒绝</CpButton>
              <CpButton size="sm" type="info">确认匹配</CpButton>
            </div>
          </template>
        </CpCard>
      </div>
    `,
  }),
}

/** 覆层动画类型 */
export const 覆层动画类型: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 900px;">
        <CpCard title="Slide Up" overlay-animation="slide-up" style="height: 150px;">
          <p style="font-size: 12px;">从底部滑入 (默认)</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Slide Down" overlay-animation="slide-down" overlay-position="top" style="height: 150px;">
          <p style="font-size: 12px;">从顶部滑入</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Slide Left" overlay-animation="slide-left" style="height: 150px;">
          <p style="font-size: 12px;">从右侧滑入</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Slide Right" overlay-animation="slide-right" style="height: 150px;">
          <p style="font-size: 12px;">从左侧滑入</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Fade" overlay-animation="fade" style="height: 150px;">
          <p style="font-size: 12px;">渐显效果</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Scale" overlay-animation="scale" overlay-position="center" style="height: 150px;">
          <p style="font-size: 12px;">缩放效果</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
          </template>
        </CpCard>
      </div>
    `,
  }),
}

/** 覆层位置 */
export const 覆层位置: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <CpCard title="Bottom" overlay-position="bottom" style="width: 250px; height: 180px;">
          <p style="font-size: 12px;">覆层位于底部</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">底部操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Top" overlay-position="top" overlay-animation="slide-down" style="width: 250px; height: 180px;">
          <p style="font-size: 12px;">覆层位于顶部</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">顶部操作</CpButton>
          </template>
        </CpCard>
        <CpCard title="Center" overlay-position="center" overlay-animation="scale" style="width: 250px; height: 180px;">
          <p style="font-size: 12px;">覆层居中</p>
          <template #overlay>
            <CpButton size="sm" type="primary" style="width: 100%;">居中操作</CpButton>
          </template>
        </CpCard>
      </div>
    `,
  }),
}

/** 主题颜色展示 */
export const 主题颜色展示: Story = {
  render: () => ({
    components: { CpCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
          <CpCard title="Primary Solid" type="primary" variant="solid">主要实心色</CpCard>
          <CpCard title="Success Solid" type="success" variant="solid">成功实心色</CpCard>
          <CpCard title="Warning Solid" type="warning" variant="solid">警告实心色</CpCard>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
          <CpCard title="Error Outline" type="error" variant="outline">错误描边色</CpCard>
          <CpCard title="Info Outline" type="info" variant="outline">信息描边色</CpCard>
          <CpCard title="Primary Outline" type="primary" variant="outline">主要描边色</CpCard>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
          <CpCard title="Success Semi" type="success" variant="semi">成功半透明</CpCard>
          <CpCard title="Warning Semi" type="warning" variant="semi">警告半透明</CpCard>
          <CpCard title="Error Semi" type="error" variant="semi">错误半透明</CpCard>
        </div>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  args: {
    title: '自定义霓虹紫',
    color: '#bc13fe',
    variant: 'outline',
  },
  render: (args: any) => ({
    components: { CpCard },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 20px;">
        <CpCard v-bind="args" style="width: 280px;">
          使用线性注入的 CSS 变量控制颜色
        </CpCard>
        <CpCard title="极客金" color="#ffb000" variant="semi" style="width: 280px;">
          自定义颜色的半透明变体
        </CpCard>
      </div>
    `,
  }),
}

/** 减淡模式演示 */
export const 减淡模式演示: Story = {
  render: () => ({
    components: { CpCard, CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h4 style="color: #fff; margin-bottom: 10px;">低饱和度模式 (Saturation) - 推荐用于 UI 降噪</h4>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
            <CpCard title="激活状态" type="primary" :dimmed="false" style="height: 120px;">正常显示</CpCard>
            <CpCard title="减淡状态" type="primary" dimmed dimmed-type="saturation" style="height: 120px;">悬停可恢复</CpCard>
            <CpCard title="减淡状态" type="success" dimmed dimmed-type="saturation" style="height: 120px;">悬停可恢复</CpCard>
          </div>
        </div>
        
        <div>
          <h4 style="color: #fff; margin-bottom: 10px;">置灰模式 (Gray) - 适合表示不可用或非重点</h4>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
             <CpCard title="警告" type="warning" variant="outline" dimmed dimmed-type="gray" style="height: 120px;">平常为灰色</CpCard>
             <CpCard title="错误" type="error" variant="outline" dimmed dimmed-type="gray" style="height: 120px;">平常为灰色</CpCard>
             <CpCard title="信息" type="info" variant="outline" dimmed dimmed-type="gray" style="height: 120px;">平常为灰色</CpCard>
          </div>
        </div>
      </div>
    `,
  }),
}
