import type { Meta, StoryObj } from '@storybook/vue3-vite'
import {
  CpRow, CpCol,
  CpContainer, CpHeader, CpFooter, CpMain, CpAside,
  CpText, CpButton, CpDivider, CpTag,
} from '../packages/components'

/**
 * # Layout 布局
 *
 * 赛博朋克风格的布局组件系列，包含两套布局方案：
 *
 * ## 栅格系统 (CpRow / CpCol)
 * - 基于 24 栅格的响应式列布局
 * - 支持 gutter 间距、offset 偏移、push/pull 位移
 * - justify / align 灵活对齐
 *
 * ## 页面容器 (CpContainer / CpHeader / CpFooter / CpMain / CpAside)
 * - 用于构建页面级框架布局
 * - Container 自动检测子元素类型切换排列方向
 * - Header / Footer / Aside 带赛博朋克发光边线装饰
 */
const meta: Meta<typeof CpRow> = {
  title: '布局 Layout/Layout 布局',
  component: CpRow,
  tags: ['autodocs'],
  argTypes: {
    gutter: {
      control: { type: 'range', min: 0, max: 40, step: 4 },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
    },
    align: {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    wrap: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof CpRow>

// ===== 辅助样式 =====
const colStyle = (bg = 'var(--cp-color-primary)') => `
  background: ${bg};
  color: var(--cp-text-on-bright);
  padding: 12px 0;
  text-align: center;
  font-family: 'Rajdhani', monospace;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid rgba(0, 240, 255, 0.3);
`

const colStyleAlt = colStyle('rgba(0, 240, 255, 0.6)')
const colStylePrimary = colStyle('var(--cp-color-primary)')

// ===== 栅格系统 Stories =====

/** 基础栅格 — 24 栅格系统基本用法 */
export const 基础栅格: Story = {
  render: () => ({
    components: { CpRow, CpCol },
    template: `
      <div style="width: 100%;">
        <CpRow>
          <CpCol :span="24"><div style="${colStylePrimary}">span-24</div></CpCol>
        </CpRow>
        <CpRow style="margin-top: 12px;">
          <CpCol :span="12"><div style="${colStylePrimary}">span-12</div></CpCol>
          <CpCol :span="12"><div style="${colStyleAlt}">span-12</div></CpCol>
        </CpRow>
        <CpRow style="margin-top: 12px;">
          <CpCol :span="8"><div style="${colStylePrimary}">span-8</div></CpCol>
          <CpCol :span="8"><div style="${colStyleAlt}">span-8</div></CpCol>
          <CpCol :span="8"><div style="${colStylePrimary}">span-8</div></CpCol>
        </CpRow>
        <CpRow style="margin-top: 12px;">
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
        </CpRow>
        <CpRow style="margin-top: 12px;">
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
        </CpRow>
      </div>
    `,
  }),
}

/** Gutter 间距 — 列之间的间距 */
export const Gutter间距: Story = {
  render: () => ({
    components: { CpRow, CpCol },
    template: `
      <div style="width: 100%;">
        <p style="color: var(--cp-text-secondary); margin-bottom: 8px;">gutter = 0</p>
        <CpRow :gutter="0">
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
        </CpRow>

        <p style="color: var(--cp-text-secondary); margin: 16px 0 8px;">gutter = 16</p>
        <CpRow :gutter="16">
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
        </CpRow>

        <p style="color: var(--cp-text-secondary); margin: 16px 0 8px;">gutter = 32</p>
        <CpRow :gutter="32">
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6"><div style="${colStyleAlt}">span-6</div></CpCol>
        </CpRow>
      </div>
    `,
  }),
}

/** Offset 偏移 — 列的左侧偏移 */
export const Offset偏移: Story = {
  render: () => ({
    components: { CpRow, CpCol },
    template: `
      <div style="width: 100%;">
        <CpRow>
          <CpCol :span="6"><div style="${colStylePrimary}">span-6</div></CpCol>
          <CpCol :span="6" :offset="6"><div style="${colStyleAlt}">span-6, offset-6</div></CpCol>
        </CpRow>
        <CpRow style="margin-top: 12px;">
          <CpCol :span="6" :offset="6"><div style="${colStylePrimary}">span-6, offset-6</div></CpCol>
          <CpCol :span="6" :offset="6"><div style="${colStyleAlt}">span-6, offset-6</div></CpCol>
        </CpRow>
        <CpRow style="margin-top: 12px;">
          <CpCol :span="12" :offset="6"><div style="${colStylePrimary}">span-12, offset-6</div></CpCol>
        </CpRow>
      </div>
    `,
  }),
}

/** 对齐方式 — justify 和 align 控制 */
export const 对齐方式: Story = {
  render: () => ({
    components: { CpRow, CpCol, CpText },
    template: `
      <div style="width: 100%;">
        <CpText type="primary" :size="12" style="margin-bottom: 8px; display: block;">justify: start</CpText>
        <CpRow justify="start" style="background: rgba(0,240,255,0.05); padding: 8px 0;">
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
        </CpRow>

        <CpText type="primary" :size="12" style="margin: 16px 0 8px; display: block;">justify: center</CpText>
        <CpRow justify="center" style="background: rgba(0,240,255,0.05); padding: 8px 0;">
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
        </CpRow>

        <CpText type="primary" :size="12" style="margin: 16px 0 8px; display: block;">justify: end</CpText>
        <CpRow justify="end" style="background: rgba(0,240,255,0.05); padding: 8px 0;">
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
        </CpRow>

        <CpText type="primary" :size="12" style="margin: 16px 0 8px; display: block;">justify: space-between</CpText>
        <CpRow justify="space-between" style="background: rgba(0,240,255,0.05); padding: 8px 0;">
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
        </CpRow>

        <CpText type="primary" :size="12" style="margin: 16px 0 8px; display: block;">justify: space-around</CpText>
        <CpRow justify="space-around" style="background: rgba(0,240,255,0.05); padding: 8px 0;">
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStyleAlt}">4</div></CpCol>
          <CpCol :span="4"><div style="${colStylePrimary}">4</div></CpCol>
        </CpRow>
      </div>
    `,
  }),
}

// ===== Container 页面布局 Stories =====

/** 基础容器布局 — Header + Main + Footer */
export const 基础容器布局: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpFooter, CpText, CpTag },
    template: `
      <div style="width: 100%; height: 400px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">CYBERPUNK SYSTEM</CpText>
            <div style="flex: 1;" />
            <CpTag type="success" size="sm">ONLINE</CpTag>
          </CpHeader>
          <CpMain>
            <CpText>主内容区域 — 这里放置页面的核心内容。</CpText>
            <CpText type="secondary" style="margin-top: 8px;">Container 会自动检测到 Header/Footer 子组件并切换为垂直布局。</CpText>
          </CpMain>
          <CpFooter>
            <CpText type="muted" :size="12">© 2026 CYBERPUNK SYSTEM v2.0.0</CpText>
          </CpFooter>
        </CpContainer>
      </div>
    `,
  }),
}

/** 侧边栏布局 — Header + Aside + Main + Footer */
export const 侧边栏布局: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpFooter, CpAside, CpText, CpTag, CpDivider },
    template: `
      <div style="width: 100%; height: 480px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">◆ CONTROL PANEL</CpText>
            <div style="flex: 1;" />
            <CpTag type="info" size="sm">v2.0</CpTag>
          </CpHeader>
          <CpContainer>
            <CpAside width="220px">
              <CpText type="primary" bold :size="14" style="margin-bottom: 12px;">▸ NAVIGATION</CpText>
              <CpDivider type="primary" />
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
                <CpText style="cursor: pointer; padding: 6px 8px; border-left: 2px solid var(--cp-color-primary);">Dashboard</CpText>
                <CpText style="cursor: pointer; padding: 6px 8px; opacity: 0.7;">Analytics</CpText>
                <CpText style="cursor: pointer; padding: 6px 8px; opacity: 0.7;">Settings</CpText>
                <CpText style="cursor: pointer; padding: 6px 8px; opacity: 0.7;">Network</CpText>
              </div>
            </CpAside>
            <CpMain>
              <CpText bold :size="16" style="margin-bottom: 12px;">DASHBOARD</CpText>
              <CpText type="secondary">系统运行正常，所有模块已加载。</CpText>
              <CpDivider dashed style="margin: 16px 0;" />
              <CpText type="secondary">在这个布局中，Container 内嵌套了 Aside 和 Main。外层 Container 检测到 Header 后垂直排列，内层 Container 水平排列 Aside 和 Main。</CpText>
            </CpMain>
          </CpContainer>
          <CpFooter height="48px">
            <CpText type="muted" :size="12">SYSTEM STATUS: ALL GREEN</CpText>
          </CpFooter>
        </CpContainer>
      </div>
    `,
  }),
}

/** 右侧边栏 — 侧边栏在右侧 */
export const 右侧边栏: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpAside, CpText, CpDivider },
    template: `
      <div style="width: 100%; height: 380px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">◆ DATA MONITOR</CpText>
          </CpHeader>
          <CpContainer>
            <CpMain>
              <CpText bold :size="16">MAIN CONTENT</CpText>
              <CpText type="secondary" style="margin-top: 8px;">主内容区域在左侧，侧边栏在右侧。</CpText>
            </CpMain>
            <CpAside width="240px" style="border-right: none; border-left: 1px solid var(--cp-border);">
              <CpText type="primary" bold :size="14">▸ INFO PANEL</CpText>
              <CpDivider type="info" />
              <CpText type="secondary" :size="13" style="margin-top: 8px;">在这里放置辅助信息、属性面板或附加操作。</CpText>
            </CpAside>
          </CpContainer>
        </CpContainer>
      </div>
    `,
  }),
}

/** 栅格与容器组合 — 在容器内使用栅格 */
export const 栅格与容器组合: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpFooter, CpRow, CpCol, CpText, CpDivider },
    template: `
      <div style="width: 100%; height: 500px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">◆ GRID IN CONTAINER</CpText>
          </CpHeader>
          <CpMain>
            <CpRow :gutter="16">
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 120px;">
                  <CpText type="primary" bold :size="14">MODULE A</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">CPU Usage: 45%</CpText>
                </div>
              </CpCol>
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 120px;">
                  <CpText type="success" bold :size="14">MODULE B</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">Memory: 67%</CpText>
                </div>
              </CpCol>
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 120px;">
                  <CpText type="warning" bold :size="14">MODULE C</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">Disk: 82%</CpText>
                </div>
              </CpCol>
            </CpRow>
            <CpDivider type="primary" variant="gradient" style="margin: 20px 0;" />
            <CpRow :gutter="16">
              <CpCol :span="16">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 160px;">
                  <CpText type="info" bold :size="14">DATA STREAM</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">实时数据流监控面板</CpText>
                </div>
              </CpCol>
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 160px;">
                  <CpText type="error" bold :size="14">ALERTS</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">3 个未处理警报</CpText>
                </div>
              </CpCol>
            </CpRow>
          </CpMain>
          <CpFooter height="40px">
            <CpText type="muted" :size="12">GRID + CONTAINER DEMO</CpText>
          </CpFooter>
        </CpContainer>
      </div>
    `,
  }),
}
