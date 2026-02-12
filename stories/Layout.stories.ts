import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { nextTick, onMounted, ref } from 'vue'
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
 *
 * ## 滚动穿透占位块获取与自定义
 * - Header / Footer 暴露 `getHeight()`，可读取当前真实高度（px）
 * - Main / Aside 暴露 `getPlaceholderHeights()`，可读取上下占位块高度（px）
 * - Main 占位块 class:
 *   - `cp-main__body-header-placeholder`
 *   - `cp-main__body-footer-placeholder`
 * - Aside 占位块 class:
 *   - `cp-aside__sidebar-header-placeholder`
 *   - `cp-aside__sidebar-footer-placeholder`
 * - 可通过 CSS 变量控制占位块高度:
 *   - `--cp-main-body-header-placeholder-height`
 *   - `--cp-main-body-footer-placeholder-height`
 *   - `--cp-aside-sidebar-header-placeholder-height`
 *   - `--cp-aside-sidebar-footer-placeholder-height`
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

/** 内容滚动示例 — 演示长内容滚动 */
export const 内容滚动示例: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpFooter, CpAside, CpMenu, CpMenuItem, CpText, CpDivider },
    setup() {
      const active = ref('item-1')
      return { active }
    },
    template: `
      <div style="width: 100%; height: 500px; border: 1px solid var(--cp-border); overflow: hidden;">
        <CpContainer>
          <CpHeader>
            <CpText type="primary" bold :size="16">◆ SCROLL DEMO</CpText>
          </CpHeader>
          <CpContainer>
            <CpAside width="240px">
              <CpMenu :default-active="active" type="primary" @select="(idx) => active = idx">
                <CpMenuItem v-for="i in 30" :key="i" :index="'item-' + i">
                  SIDEBAR_ITEM_{{ String(i).padStart(2, '0') }}
                </CpMenuItem>
              </CpMenu>
            </CpAside>
            <CpMain>
              <CpText bold :size="16" style="display: block; margin-bottom: 16px;">MAIN CONTENT AREA</CpText>
              <CpText type="secondary" style="margin-bottom: 16px; display: block;">
                This example demonstrates independent scrolling for both the Sidebar and Main content areas within a fixed-height container.
              </CpText>
              
              <div v-for="i in 20" :key="i" style="margin-bottom: 12px; padding: 12px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                  <CpText type="primary" bold>CONTENT_#{{ String(i).padStart(3, '0') }}</CpText>
                  <CpText type="muted" :size="12">{{ new Date().toLocaleTimeString() }}</CpText>
                </div>
                <CpText type="text" :size="13">
                  System log entry or content block. Try scrolling the sidebar and the main area separately.
                </CpText>
              </div>
              
              <CpDivider dashed style="margin: 20px 0;" />
              <CpText type="success" :size="12" style="display: block; text-align: center;">END OF CONTENT</CpText>
            </CpMain>
          </CpContainer>
          <CpFooter height="40px">
            <CpText type="muted" :size="12">SCROLL STATUS: ACTIVE</CpText>
          </CpFooter>
        </CpContainer>
      </div>
    `,
  }),
}

/** 滚动穿透 Header — CpMain 可滚动到 Header 后方（默认含 body 占位块） */
export const 滚动穿透Header: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpMain, CpText, CpTag },
    template: `
      <div style="width: 100%; max-width: 760px; height: 360px; border: 1px solid var(--cp-border); overflow: hidden;">
        <CpContainer>
          <CpHeader height="56px" style="gap: 12px;">
            <CpText type="primary" bold :size="15">◆ UNDER HEADER</CpText>
            <CpTag type="info" size="sm">scroll-under-header</CpTag>
          </CpHeader>
          <CpMain scroll-under-header style="background: linear-gradient(180deg, rgba(0, 240, 255, 0.08) 0%, transparent 35%);">
            <CpText type="muted" :size="12" style="display: block; margin-bottom: 10px;">
              默认占位块 class: <code>cp-main__body-header-placeholder</code>
            </CpText>
            <div
              v-for="i in 18"
              :key="'header-scroll-' + i"
              style="margin-bottom: 10px; padding: 10px 12px; border: 1px solid var(--cp-border); background: color-mix(in srgb, var(--cp-bg-elevated) 82%, transparent);"
            >
              <CpText type="primary" bold :size="13">LOG#{{ String(i).padStart(2, '0') }}</CpText>
            </div>
          </CpMain>
        </CpContainer>
      </div>
    `,
  }),
}

/** 滚动穿透 Footer — CpMain 可滚动到 Footer 后方（默认含 body 占位块） */
export const 滚动穿透Footer: Story = {
  render: () => ({
    components: { CpContainer, CpMain, CpFooter, CpText, CpTag },
    template: `
      <div style="width: 100%; max-width: 760px; height: 360px; border: 1px solid var(--cp-border); overflow: hidden;">
        <CpContainer>
          <CpMain scroll-under-footer style="background: linear-gradient(0deg, rgba(123, 104, 238, 0.12) 0%, transparent 35%);">
            <CpText type="muted" :size="12" style="display: block; margin-bottom: 10px;">
              默认占位块 class: <code>cp-main__body-footer-placeholder</code>
            </CpText>
            <div
              v-for="i in 20"
              :key="'footer-scroll-' + i"
              style="margin-bottom: 10px; padding: 10px 12px; border: 1px solid var(--cp-border); background: color-mix(in srgb, var(--cp-bg-elevated) 82%, transparent);"
            >
              <CpText type="info" bold :size="13">EVENT#{{ String(i).padStart(2, '0') }}</CpText>
            </div>
          </CpMain>
          <CpFooter height="60px" style="gap: 12px;">
            <CpText type="secondary" bold :size="14">◆ UNDER FOOTER</CpText>
            <CpTag type="success" size="sm">scroll-under-footer</CpTag>
          </CpFooter>
        </CpContainer>
      </div>
    `,
  }),
}

/** 占位块有无对比 — 同时展示 body/side 占位块 class 差异 */
export const 占位块有无对比: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpFooter, CpAside, CpMain, CpText, CpTag },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px; width: 100%;">
        <div style="height: 380px; border: 1px solid var(--cp-border); overflow: hidden;">
          <CpContainer>
            <CpHeader height="52px">
              <CpText type="success" bold :size="14">WITH PLACEHOLDER</CpText>
            </CpHeader>
            <CpContainer>
              <CpAside width="130px" scroll-under-header scroll-under-footer>
                <CpText type="muted" :size="11" style="display: block; margin-bottom: 8px;">cp-aside__sidebar-*</CpText>
                <div v-for="i in 18" :key="'aside-on-' + i" style="margin-bottom: 6px; padding: 6px 8px; border: 1px solid var(--cp-border); font-size: 12px;">
                  SIDE_{{ i }}
                </div>
              </CpAside>
              <CpMain scroll-under-header scroll-under-footer>
                <CpText type="muted" :size="11" style="display: block; margin-bottom: 8px;">cp-main__body-*</CpText>
                <div v-for="i in 18" :key="'main-on-' + i" style="margin-bottom: 6px; padding: 8px 10px; border: 1px solid var(--cp-border); font-size: 12px;">
                  BODY_{{ i }}
                </div>
              </CpMain>
            </CpContainer>
            <CpFooter height="44px">
              <CpTag type="success" size="sm">默认占位块</CpTag>
            </CpFooter>
          </CpContainer>
        </div>

        <div style="height: 380px; border: 1px solid var(--cp-border); overflow: hidden;">
          <CpContainer>
            <CpHeader height="52px">
              <CpText type="warning" bold :size="14">WITHOUT PLACEHOLDER</CpText>
            </CpHeader>
            <CpContainer>
              <CpAside
                width="130px"
                scroll-under-header
                scroll-under-footer
                style="--cp-aside-sidebar-header-placeholder-height: 0px; --cp-aside-sidebar-footer-placeholder-height: 0px;"
              >
                <CpText type="muted" :size="11" style="display: block; margin-bottom: 8px;">placeholder=0</CpText>
                <div v-for="i in 18" :key="'aside-off-' + i" style="margin-bottom: 6px; padding: 6px 8px; border: 1px solid var(--cp-border); font-size: 12px;">
                  SIDE_{{ i }}
                </div>
              </CpAside>
              <CpMain
                scroll-under-header
                scroll-under-footer
                style="--cp-main-body-header-placeholder-height: 0px; --cp-main-body-footer-placeholder-height: 0px;"
              >
                <CpText type="muted" :size="11" style="display: block; margin-bottom: 8px;">placeholder=0</CpText>
                <div v-for="i in 18" :key="'main-off-' + i" style="margin-bottom: 6px; padding: 8px 10px; border: 1px solid var(--cp-border); font-size: 12px;">
                  BODY_{{ i }}
                </div>
              </CpMain>
            </CpContainer>
            <CpFooter height="44px">
              <CpTag type="warning" size="sm">占位块关闭</CpTag>
            </CpFooter>
          </CpContainer>
        </div>
      </div>
    `,
  }),
}

/** 高度获取与占位块自定义 — 通过 ref 读取 Header/Footer 与占位块高度 */
export const 高度获取与占位块自定义: Story = {
  render: () => ({
    components: { CpContainer, CpHeader, CpFooter, CpAside, CpMain, CpText, CpTag, CpButton },
    setup() {
      const headerRef = ref<any>(null)
      const footerRef = ref<any>(null)
      const mainRef = ref<any>(null)
      const asideRef = ref<any>(null)

      const headerHeight = ref(0)
      const footerHeight = ref(0)
      const mainPlaceholderHeights = ref({ header: 0, footer: 0 })
      const asidePlaceholderHeights = ref({ header: 0, footer: 0 })

      const mainHeaderPlaceholderHeight = ref('0px')
      const mainFooterPlaceholderHeight = ref('0px')
      const asideHeaderPlaceholderHeight = ref('0px')
      const asideFooterPlaceholderHeight = ref('0px')

      const syncMetrics = async () => {
        await nextTick()
        headerHeight.value = headerRef.value?.getHeight?.() ?? 0
        footerHeight.value = footerRef.value?.getHeight?.() ?? 0

        // 自定义占位块策略：基于 header/footer 高度，额外增加安全边距
        mainHeaderPlaceholderHeight.value = `${headerHeight.value + 12}px`
        mainFooterPlaceholderHeight.value = `${footerHeight.value + 8}px`
        asideHeaderPlaceholderHeight.value = `${headerHeight.value}px`
        asideFooterPlaceholderHeight.value = `${footerHeight.value}px`

        await nextTick()
        mainPlaceholderHeights.value = mainRef.value?.getPlaceholderHeights?.() ?? { header: 0, footer: 0 }
        asidePlaceholderHeights.value = asideRef.value?.getPlaceholderHeights?.() ?? { header: 0, footer: 0 }
      }

      onMounted(syncMetrics)

      return {
        headerRef,
        footerRef,
        mainRef,
        asideRef,
        headerHeight,
        footerHeight,
        mainPlaceholderHeights,
        asidePlaceholderHeights,
        mainHeaderPlaceholderHeight,
        mainFooterPlaceholderHeight,
        asideHeaderPlaceholderHeight,
        asideFooterPlaceholderHeight,
        syncMetrics,
      }
    },
    template: `
      <div style="display: grid; gap: 12px; width: 100%;">
        <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
          <CpTag type="info" size="sm">header: {{ headerHeight }}px</CpTag>
          <CpTag type="warning" size="sm">footer: {{ footerHeight }}px</CpTag>
          <CpTag type="success" size="sm">main ph: {{ mainPlaceholderHeights.header }}/{{ mainPlaceholderHeights.footer }}px</CpTag>
          <CpTag type="primary" size="sm">aside ph: {{ asidePlaceholderHeights.header }}/{{ asidePlaceholderHeights.footer }}px</CpTag>
          <CpButton type="primary" size="sm" @click="syncMetrics">重新读取高度</CpButton>
        </div>

        <CpText type="muted" :size="12">
          使用了 ref API:
          header/footer => getHeight();
          main/aside => getPlaceholderHeights();
          占位块可通过对应 CSS 变量按需重设。
        </CpText>

        <div style="height: 380px; border: 1px solid var(--cp-border); overflow: hidden;">
          <CpContainer>
            <CpHeader ref="headerRef" height="58px">
              <CpText type="primary" bold :size="14">◆ METRICS + CUSTOM PLACEHOLDER</CpText>
            </CpHeader>
            <CpContainer>
              <CpAside
                ref="asideRef"
                width="160px"
                scroll-under-header
                scroll-under-footer
                :style="{
                  '--cp-aside-sidebar-header-placeholder-height': asideHeaderPlaceholderHeight,
                  '--cp-aside-sidebar-footer-placeholder-height': asideFooterPlaceholderHeight,
                }"
              >
                <div v-for="i in 16" :key="'aside-metric-' + i" style="margin-bottom: 8px; padding: 7px 8px; border: 1px solid var(--cp-border); font-size: 12px;">
                  SIDE_{{ i }}
                </div>
              </CpAside>
              <CpMain
                ref="mainRef"
                scroll-under-header
                scroll-under-footer
                :style="{
                  '--cp-main-body-header-placeholder-height': mainHeaderPlaceholderHeight,
                  '--cp-main-body-footer-placeholder-height': mainFooterPlaceholderHeight,
                }"
              >
                <div v-for="i in 18" :key="'main-metric-' + i" style="margin-bottom: 8px; padding: 8px 10px; border: 1px solid var(--cp-border); font-size: 12px;">
                  BODY_{{ i }}
                </div>
              </CpMain>
            </CpContainer>
            <CpFooter ref="footerRef" height="46px">
              <CpText type="secondary" :size="12">占位块高度由读取结果驱动，可继续叠加业务偏移</CpText>
            </CpFooter>
          </CpContainer>
        </div>
      </div>
    `,
  }),
}
