import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpBreadcrumb, CpBreadcrumbItem } from '@cyberpunk-vue/components'
import { markRaw } from 'vue'
import MdiChevronRight from '~icons/mdi/chevron-right'
import MdiArrowRight from '~icons/mdi/arrow-right'
import MdiSlashForward from '~icons/mdi/slash-forward'

/**
 * # CpBreadcrumb 面包屑导航
 *
 * 赛博朋克风格面包屑，展示当前页面在层级结构中的位置。
 *
 * ## 功能特性
 * - 文本 / 图标 / 插槽三种分隔符模式
 * - 多种变体（default / plain / outline / background）
 * - 多种颜色类型（primary / success / warning / error / info）
 * - 自定义颜色覆盖
 * - 可点击链接项（支持 vue-router）
 * - 最后一项自动高亮为当前页
 * - CSS 变量精细控制分隔符间距
 */
const meta: Meta<typeof CpBreadcrumb> = {
  title: '导航 Navigation/Breadcrumb 面包屑',
  component: CpBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: '分隔符文本',
    },
    variant: {
      control: 'select',
      options: ['default', 'plain', 'outline', 'background'],
      description: '变体样式',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色预设类型',
    },
    color: {
      control: 'color',
      description: '自定义主题色',
    },
  },
  args: {
    separator: '/',
    variant: 'default',
    type: 'default',
    color: '',
  },
}

export default meta
type Story = StoryObj<typeof CpBreadcrumb>

/**
 * 基础用法 - 可通过 Controls 面板实时调整 Props
 */
export const Basic: Story = {
  render: (args) => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px;">
        <CpBreadcrumb v-bind="args">
          <CpBreadcrumbItem to="/">首页</CpBreadcrumbItem>
          <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
          <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/** 自定义文本分隔符 — 使用不同文字分隔 */
export const 自定义文本分隔符: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
        <CpBreadcrumb separator=">">
          <CpBreadcrumbItem>首页</CpBreadcrumbItem>
          <CpBreadcrumbItem>产品中心</CpBreadcrumbItem>
          <CpBreadcrumbItem>产品详情</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb separator="·">
          <CpBreadcrumbItem>HOME</CpBreadcrumbItem>
          <CpBreadcrumbItem>DASHBOARD</CpBreadcrumbItem>
          <CpBreadcrumbItem>ANALYTICS</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb separator="»">
          <CpBreadcrumbItem>根节点</CpBreadcrumbItem>
          <CpBreadcrumbItem>子节点</CpBreadcrumbItem>
          <CpBreadcrumbItem>叶子节点</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/** 图标分隔符 — 使用 separatorIcon 传入 unplugin-icons 图标组件 */
export const 图标分隔符: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    setup() {
      return {
        MdiChevronRight: markRaw(MdiChevronRight),
        MdiArrowRight: markRaw(MdiArrowRight),
        MdiSlashForward: markRaw(MdiSlashForward),
      }
    },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
        <CpBreadcrumb :separator-icon="MdiChevronRight">
          <CpBreadcrumbItem>首页</CpBreadcrumbItem>
          <CpBreadcrumbItem>数据中心</CpBreadcrumbItem>
          <CpBreadcrumbItem>实时监控</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb :separator-icon="MdiArrowRight" type="primary">
          <CpBreadcrumbItem>控制台</CpBreadcrumbItem>
          <CpBreadcrumbItem>网络拓扑</CpBreadcrumbItem>
          <CpBreadcrumbItem>节点详情</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb :separator-icon="MdiSlashForward" type="success">
          <CpBreadcrumbItem>HOME</CpBreadcrumbItem>
          <CpBreadcrumbItem>MODULE</CpBreadcrumbItem>
          <CpBreadcrumbItem>DETAIL</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/** 分隔符插槽 — 在 BreadcrumbItem 上使用 #separator 插槽完全自定义 */
export const 分隔符插槽: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    template: `
      <div style="padding: 24px;">
        <CpBreadcrumb type="warning">
          <CpBreadcrumbItem>
            DATA NODE
            <template #separator>
              <span style="color: var(--cp-color-warning); font-size: 10px; letter-spacing: 1px;">▸▸</span>
            </template>
          </CpBreadcrumbItem>
          <CpBreadcrumbItem>
            CLUSTER
            <template #separator>
              <span style="color: var(--cp-color-warning); font-size: 10px; letter-spacing: 1px;">▸▸</span>
            </template>
          </CpBreadcrumbItem>
          <CpBreadcrumbItem>SHARD-07</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/**
 * 变体展示
 *
 * - **Default**: 纯文本 + 下划线 hover 动画
 * - **Plain**: 仅文字颜色变化，无任何装饰
 * - **Outline**: 边框描边
 * - **Background**: 背景填充
 */
export const 变体: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    setup() {
      return { MdiChevronRight: markRaw(MdiChevronRight) }
    },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 28px;">
        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">DEFAULT（下划线动画）</div>
          <CpBreadcrumb variant="default" type="primary" :separator-icon="MdiChevronRight">
            <CpBreadcrumbItem to="/">首页</CpBreadcrumbItem>
            <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
            <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>

        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">PLAIN（仅文字颜色变化）</div>
          <CpBreadcrumb variant="plain" type="primary" :separator-icon="MdiChevronRight">
            <CpBreadcrumbItem to="/">首页</CpBreadcrumbItem>
            <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
            <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>

        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">OUTLINE（边框描边）</div>
          <CpBreadcrumb variant="outline" type="primary" :separator-icon="MdiChevronRight">
            <CpBreadcrumbItem to="/">首页</CpBreadcrumbItem>
            <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
            <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>

        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">BACKGROUND（背景填充）</div>
          <CpBreadcrumb variant="background" type="primary" :separator-icon="MdiChevronRight">
            <CpBreadcrumbItem to="/">首页</CpBreadcrumbItem>
            <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
            <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>
      </div>
    `,
  }),
}

/** 颜色类型 — 五种预设颜色 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 20px;">
        <CpBreadcrumb type="primary">
          <CpBreadcrumbItem>PRIMARY</CpBreadcrumbItem>
          <CpBreadcrumbItem>SUB NODE</CpBreadcrumbItem>
          <CpBreadcrumbItem>CURRENT</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb type="success">
          <CpBreadcrumbItem>SUCCESS</CpBreadcrumbItem>
          <CpBreadcrumbItem>SUB NODE</CpBreadcrumbItem>
          <CpBreadcrumbItem>CURRENT</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb type="warning">
          <CpBreadcrumbItem>WARNING</CpBreadcrumbItem>
          <CpBreadcrumbItem>SUB NODE</CpBreadcrumbItem>
          <CpBreadcrumbItem>CURRENT</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb type="error">
          <CpBreadcrumbItem>ERROR</CpBreadcrumbItem>
          <CpBreadcrumbItem>SUB NODE</CpBreadcrumbItem>
          <CpBreadcrumbItem>CURRENT</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb type="info">
          <CpBreadcrumbItem>INFO</CpBreadcrumbItem>
          <CpBreadcrumbItem>SUB NODE</CpBreadcrumbItem>
          <CpBreadcrumbItem>CURRENT</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/** 自定义颜色 — 覆盖 type 预设 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 20px;">
        <CpBreadcrumb color="#ff6ec7">
          <CpBreadcrumbItem>PINK NEON</CpBreadcrumbItem>
          <CpBreadcrumbItem>SUB ROUTE</CpBreadcrumbItem>
          <CpBreadcrumbItem>TERMINAL</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb color="#ffd700" variant="outline">
          <CpBreadcrumbItem>GOLD</CpBreadcrumbItem>
          <CpBreadcrumbItem>PATHWAY</CpBreadcrumbItem>
          <CpBreadcrumbItem>DESTINATION</CpBreadcrumbItem>
        </CpBreadcrumb>

        <CpBreadcrumb color="#9945ff" variant="background">
          <CpBreadcrumbItem>VIOLET</CpBreadcrumbItem>
          <CpBreadcrumbItem>NETWORK</CpBreadcrumbItem>
          <CpBreadcrumbItem>ENDPOINT</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/** 自定义间距 — 通过 CSS 变量控制分隔符间距 */
export const 自定义间距: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    setup() {
      return { MdiChevronRight: markRaw(MdiChevronRight) }
    },
    template: `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">GAP: 4px (紧凑)</div>
          <CpBreadcrumb
            :separator-icon="MdiChevronRight"
            type="primary"
            style="--cp-breadcrumb-separator-gap: 4px;"
          >
            <CpBreadcrumbItem>HOME</CpBreadcrumbItem>
            <CpBreadcrumbItem>MODULE</CpBreadcrumbItem>
            <CpBreadcrumbItem>PAGE</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>

        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">GAP: 8px (默认)</div>
          <CpBreadcrumb :separator-icon="MdiChevronRight" type="primary">
            <CpBreadcrumbItem>HOME</CpBreadcrumbItem>
            <CpBreadcrumbItem>MODULE</CpBreadcrumbItem>
            <CpBreadcrumbItem>PAGE</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>

        <div>
          <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px; letter-spacing: 0.1em;">GAP: 16px (宽松)</div>
          <CpBreadcrumb
            :separator-icon="MdiChevronRight"
            type="primary"
            style="--cp-breadcrumb-separator-gap: 16px;"
          >
            <CpBreadcrumbItem>HOME</CpBreadcrumbItem>
            <CpBreadcrumbItem>MODULE</CpBreadcrumbItem>
            <CpBreadcrumbItem>PAGE</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>
      </div>
    `,
  }),
}

/** 带链接 — 可点击的面包屑项，hover 有视觉反馈 */
export const 带链接: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    setup() {
      return { MdiChevronRight: markRaw(MdiChevronRight) }
    },
    template: `
      <div style="padding: 24px;">
        <CpBreadcrumb type="primary" :separator-icon="MdiChevronRight">
          <CpBreadcrumbItem to="/">首页</CpBreadcrumbItem>
          <CpBreadcrumbItem to="/system">系统管理</CpBreadcrumbItem>
          <CpBreadcrumbItem to="/system/users">用户中心</CpBreadcrumbItem>
          <CpBreadcrumbItem>用户详情</CpBreadcrumbItem>
        </CpBreadcrumb>
      </div>
    `,
  }),
}

/** 综合展示 — 模拟面板顶部导航场景 */
export const 综合展示: Story = {
  render: () => ({
    components: { CpBreadcrumb, CpBreadcrumbItem },
    setup() {
      return { MdiChevronRight: markRaw(MdiChevronRight) }
    },
    template: `
      <div style="padding: 24px; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--cp-border);">
          <CpBreadcrumb :separator-icon="MdiChevronRight" type="primary" variant="background">
            <CpBreadcrumbItem to="/">CONTROL CENTER</CpBreadcrumbItem>
            <CpBreadcrumbItem to="/network">NETWORK GRID</CpBreadcrumbItem>
            <CpBreadcrumbItem to="/network/nodes">NODE CLUSTER</CpBreadcrumbItem>
            <CpBreadcrumbItem>CN-SH-07</CpBreadcrumbItem>
          </CpBreadcrumb>
        </div>
        <div style="color: var(--cp-text-secondary); font-size: 14px;">
          当前面板的详细内容区域…
        </div>
      </div>
    `,
  }),
}
