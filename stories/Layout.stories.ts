import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import {
  CpRow, CpCol,
  CpContainer, CpHeader, CpFooter, CpMain, CpAside,
  CpText, CpButton, CpDivider, CpTag,
  CpMenu, CpMenuItem, CpSubMenu,
} from '@cyberpunk-vue/components'

import MdiHome from '~icons/mdi/home'
import MdiViewDashboard from '~icons/mdi/view-dashboard'
import MdiAccountGroup from '~icons/mdi/account-group'
import MdiCog from '~icons/mdi/cog'
import MdiTune from '~icons/mdi/tune'
import MdiShieldLock from '~icons/mdi/shield-lock'
import MdiAccessPointNetwork from '~icons/mdi/access-point-network'
import MdiChartLine from '~icons/mdi/chart-line'
import MdiPulse from '~icons/mdi/pulse'
import MdiTextBoxSearch from '~icons/mdi/text-box-search'
import MdiConsole from '~icons/mdi/console'
import MdiFormatListBulleted from '~icons/mdi/format-list-bulleted'
import MdiDatabase from '~icons/mdi/database'
import MdiWrench from '~icons/mdi/wrench'
import MdiBell from '~icons/mdi/bell'
import MdiFileDocument from '~icons/mdi/file-document'

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

/** 基础容器布局 — Header 水平菜单 + Main + Footer */
export const 基础容器布局: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpFooter, CpText, CpTag, CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('home')
      return {
        active,
        MdiHome, MdiFormatListBulleted, MdiDatabase, MdiWrench,
      }
    },
    template: `
      <div style="width: 100%; height: 400px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader style="padding: 0 16px; gap: 16px;">
            <CpText type="primary" bold :size="16" style="white-space: nowrap;">◆ CYBERPUNK</CpText>
            <CpMenu mode="horizontal" :default-active="active" type="primary" @select="(idx) => active = idx" style="flex: 1; border: none;">
              <CpMenuItem index="home" :icon="MdiHome">首页</CpMenuItem>
              <CpMenuItem index="tasks" :icon="MdiFormatListBulleted">任务中心</CpMenuItem>
              <CpSubMenu index="data" :icon="MdiDatabase">
                <template #title>数据终端</template>
                <CpMenuItem index="data-stream">实时流</CpMenuItem>
                <CpMenuItem index="data-archive">归档库</CpMenuItem>
              </CpSubMenu>
              <CpMenuItem index="tools" :icon="MdiWrench">工具箱</CpMenuItem>
            </CpMenu>
            <CpTag type="success" size="sm">ONLINE</CpTag>
          </CpHeader>
          <CpMain>
            <CpText bold :size="16" style="margin-bottom: 8px; display: block;">{{ active.toUpperCase() }}</CpText>
            <CpText type="secondary">Header 中嵌入水平 CpMenu，实现顶部导航栏 + 内容区的经典布局。</CpText>
          </CpMain>
          <CpFooter>
            <CpText type="muted" :size="12">© 2026 CYBERPUNK SYSTEM v2.0.0</CpText>
          </CpFooter>
        </CpContainer>
      </div>
    `,
  }),
}

/** 侧边栏布局 — Header + Aside(CpMenu) + Main + Footer */
export const 侧边栏布局: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpFooter, CpAside, CpText, CpTag, CpDivider, CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('dashboard')
      return {
        active,
        MdiViewDashboard, MdiAccountGroup, MdiCog, MdiTune,
        MdiShieldLock, MdiAccessPointNetwork, MdiChartLine,
        MdiPulse, MdiTextBoxSearch, MdiConsole,
      }
    },
    template: `
      <div style="width: 100%; height: 520px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">◆ CONTROL PANEL</CpText>
            <div style="flex: 1;" />
            <CpTag type="info" size="sm">v2.0</CpTag>
          </CpHeader>
          <CpContainer>
            <CpAside width="220px">
              <CpMenu :default-active="active" type="primary" :default-openeds="['system']" @select="(idx) => active = idx">
                <CpMenuItem index="dashboard" :icon="MdiViewDashboard">DASHBOARD</CpMenuItem>
                <CpMenuItem index="users" :icon="MdiAccountGroup">用户管理</CpMenuItem>
                <CpSubMenu index="system" :icon="MdiCog">
                  <template #title>系统配置</template>
                  <CpMenuItem index="system-general" :icon="MdiTune">基础设置</CpMenuItem>
                  <CpMenuItem index="system-security" :icon="MdiShieldLock">安全策略</CpMenuItem>
                  <CpMenuItem index="system-network" :icon="MdiAccessPointNetwork">网络配置</CpMenuItem>
                </CpSubMenu>
                <CpSubMenu index="monitor" :icon="MdiChartLine">
                  <template #title>监控面板</template>
                  <CpMenuItem index="monitor-realtime" :icon="MdiPulse">实时监控</CpMenuItem>
                  <CpMenuItem index="monitor-log" :icon="MdiTextBoxSearch">日志分析</CpMenuItem>
                </CpSubMenu>
                <CpMenuItem index="terminal" :icon="MdiConsole">TERMINAL</CpMenuItem>
              </CpMenu>
            </CpAside>
            <CpMain>
              <CpText bold :size="16" style="margin-bottom: 12px; display: block;">{{ active.toUpperCase() }}</CpText>
              <CpText type="secondary">Aside 内嵌入垂直 CpMenu，实现侧边导航 + 内容区的后台管理布局。</CpText>
              <CpDivider dashed style="margin: 16px 0;" />
              <CpText type="muted" :size="12">当前激活: {{ active }}</CpText>
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

/** 右侧边栏 — Main + 右侧 CpMenu 列表 */
export const 右侧边栏: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpAside, CpText, CpDivider, CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('alerts')
      return {
        active,
        MdiBell, MdiFileDocument, MdiChartLine, MdiPulse,
      }
    },
    template: `
      <div style="width: 100%; height: 420px; border: 1px solid var(--cp-border);">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">◆ DATA MONITOR</CpText>
          </CpHeader>
          <CpContainer>
            <CpMain>
              <CpText bold :size="16" style="display: block;">MAIN CONTENT</CpText>
              <CpText type="secondary" style="margin-top: 8px;">主内容区域在左侧，右侧 Aside 嵌入 CpMenu 作为辅助导航或快速操作面板。</CpText>
              <CpDivider dashed style="margin: 16px 0;" />
              <CpText type="muted" :size="12">当前面板: {{ active }}</CpText>
            </CpMain>
            <CpAside width="200px" style="border-right: none; border-left: 1px solid var(--cp-border);">
              <CpMenu :default-active="active" type="info" @select="(idx) => active = idx">
                <CpMenuItem index="alerts" :icon="MdiBell">告警列表</CpMenuItem>
                <CpSubMenu index="reports" :icon="MdiFileDocument">
                  <template #title>报表</template>
                  <CpMenuItem index="reports-daily">日报</CpMenuItem>
                  <CpMenuItem index="reports-weekly">周报</CpMenuItem>
                </CpSubMenu>
                <CpMenuItem index="trends" :icon="MdiChartLine">趋势图</CpMenuItem>
                <CpMenuItem index="heartbeat" :icon="MdiPulse">心跳检测</CpMenuItem>
              </CpMenu>
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
                  <CpText type="primary" bold :size="14" style="display: block;">MODULE A</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">CPU Usage: 45%</CpText>
                </div>
              </CpCol>
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 120px;">
                  <CpText type="success" bold :size="14" style="display: block;">MODULE B</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">Memory: 67%</CpText>
                </div>
              </CpCol>
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 120px;">
                  <CpText type="warning" bold :size="14" style="display: block;">MODULE C</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">Disk: 82%</CpText>
                </div>
              </CpCol>
            </CpRow>
            <CpDivider type="primary" variant="gradient" style="margin: 20px 0;" />
            <CpRow :gutter="16">
              <CpCol :span="16">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 160px;">
                  <CpText type="info" bold :size="14" style="display: block;">DATA STREAM</CpText>
                  <CpText type="secondary" :size="12" style="margin-top: 8px;">实时数据流监控面板</CpText>
                </div>
              </CpCol>
              <CpCol :span="8">
                <div style="background: var(--cp-bg-elevated); border: 1px solid var(--cp-border); padding: 16px; height: 160px;">
                  <CpText type="error" bold :size="14" style="display: block;">ALERTS</CpText>
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
