import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, markRaw } from 'vue'
import { CpMenu } from '@cyberpunk-vue/components/menu'
import { CpMenuItem } from '@cyberpunk-vue/components/menu-item'
import { CpSubMenu } from '@cyberpunk-vue/components/sub-menu'
import { CpMenuItemGroup } from '@cyberpunk-vue/components/menu-item-group'
import { CpMenuNav } from '@cyberpunk-vue/components/menu-nav'
import type { MenuNavItem } from '@cyberpunk-vue/components/menu-nav'

// unplugin-icons 导入
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
import MdiFlask from '~icons/mdi/flask'
import MdiAccountKey from '~icons/mdi/account-key'
import MdiBrain from '~icons/mdi/brain'
import MdiAtom from '~icons/mdi/atom'
import MdiHome from '~icons/mdi/home'
import MdiFormatListBulleted from '~icons/mdi/format-list-bulleted'
import MdiDatabase from '~icons/mdi/database'
import MdiWrench from '~icons/mdi/wrench'
import MdiFileDocument from '~icons/mdi/file-document'
import MdiInformation from '~icons/mdi/information'
import MdiPackageVariant from '~icons/mdi/package-variant'
import MdiBookOpen from '~icons/mdi/book-open-page-variant'
import MdiEye from '~icons/mdi/eye'
import MdiLightbulb from '~icons/mdi/lightbulb'
import MdiDomain from '~icons/mdi/domain'
import MdiAccountMultiple from '~icons/mdi/account-multiple'
import MdiCurrencyUsd from '~icons/mdi/currency-usd'
import MdiFileDocumentOutline from '~icons/mdi/file-document-outline'
import MdiApi from '~icons/mdi/api'
import MdiUpdate from '~icons/mdi/update'

const meta: Meta<typeof CpMenu> = {
  title: '导航 Navigation/Menu 菜单',
  component: CpMenu,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: '菜单布局方向',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色预设类型',
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round', 'circle'],
      description: '菜单形状',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'note'],
      description: '菜单变体',
    },
    collapse: {
      control: 'boolean',
      description: '是否折叠（仅 vertical 有效）',
    },
    uniqueOpened: {
      control: 'boolean',
      description: '手风琴模式',
    },
    color: {
      control: 'color',
      description: '自定义高亮颜色',
    },
  },
  args: {
    mode: 'vertical',
    type: 'default',
    shape: 'clip',
    variant: 'solid',
    collapse: false,
    uniqueOpened: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础用法 — 垂直菜单
 */
export const Default: Story = {
  render: (args) => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const activeIndex = ref('1')
      return { args, activeIndex }
    },
    template: `
      <div style="width: 240px;">
        <CpMenu v-bind="args" :default-active="activeIndex" @select="(idx) => activeIndex = idx">
          <CpMenuItem index="1">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </template>
            系统总览
          </CpMenuItem>
          <CpMenuItem index="2">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </template>
            用户管理
          </CpMenuItem>
          <CpSubMenu index="3">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </template>
            <template #title>系统配置</template>
            <CpMenuItem index="3-1">基础设置</CpMenuItem>
            <CpMenuItem index="3-2">安全策略</CpMenuItem>
            <CpMenuItem index="3-3">网络配置</CpMenuItem>
          </CpSubMenu>
          <CpSubMenu index="4">
            <template #title>数据面板</template>
            <CpMenuItem index="4-1">实时监控</CpMenuItem>
            <CpMenuItem index="4-2">日志分析</CpMenuItem>
          </CpSubMenu>
        </CpMenu>
      </div>
      <p style="margin-top: 16px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
        当前激活: <span style="color: var(--cp-color-primary);">{{ activeIndex }}</span>
      </p>
    `,
  }),
}

/**
 * 水平导航栏 — hover 自动展开/关闭，支持嵌套子菜单
 */
export const Horizontal: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('1')
      return {
        active,
        MdiHome, MdiFormatListBulleted, MdiDatabase, MdiWrench,
      }
    },
    template: `
      <CpMenu mode="horizontal" :default-active="active" type="primary" @select="(idx) => active = idx">
        <CpMenuItem index="1" :icon="MdiHome">首页</CpMenuItem>
        <CpMenuItem index="2" :icon="MdiFormatListBulleted">任务中心</CpMenuItem>
        <CpSubMenu index="3" :icon="MdiDatabase">
          <template #title>数据终端</template>
          <CpMenuItem index="3-1">实时流</CpMenuItem>
          <CpMenuItem index="3-2">归档库</CpMenuItem>
          <CpSubMenu index="3-3">
            <template #title>高级分析</template>
            <CpMenuItem index="3-3-1">趋势预测</CpMenuItem>
            <CpMenuItem index="3-3-2">异常检测</CpMenuItem>
            <CpSubMenu index="3-3-3">
              <template #title>模型管理</template>
              <CpMenuItem index="3-3-3-1">模型训练</CpMenuItem>
              <CpMenuItem index="3-3-3-2">模型部署</CpMenuItem>
            </CpSubMenu>
          </CpSubMenu>
        </CpSubMenu>
        <CpSubMenu index="4" :icon="MdiWrench">
          <template #title>系统管理</template>
          <CpMenuItem index="4-1">用户权限</CpMenuItem>
          <CpMenuItem index="4-2">审计日志</CpMenuItem>
        </CpSubMenu>
        <CpMenuItem index="5">系统日志</CpMenuItem>
      </CpMenu>
      <p style="margin-top: 16px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
        当前: <span style="color: var(--cp-color-primary);">{{ active }}</span>
      </p>
    `,
  }),
}

/**
 * 带图标菜单
 */
export const WithIcons: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('dashboard')
      return { active }
    },
    template: `
      <div style="width: 220px;">
        <CpMenu :default-active="active" type="primary" @select="(idx) => active = idx">
          <CpMenuItem index="dashboard">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            </template>
            DASHBOARD
          </CpMenuItem>
          <CpMenuItem index="network">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            </template>
            NETWORK
          </CpMenuItem>
          <CpSubMenu index="security">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            </template>
            <template #title>SECURITY</template>
            <CpMenuItem index="security-scan">漏洞扫描</CpMenuItem>
            <CpMenuItem index="security-firewall">防火墙</CpMenuItem>
            <CpMenuItem index="security-log">审计日志</CpMenuItem>
          </CpSubMenu>
          <CpMenuItem index="terminal">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 19V7H4v12h16m0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.11.89-2 2-2h16M7.5 17l1.41-1.41L6.33 13l2.58-2.59L7.5 9l-4 4 4 4m9-8l-1.41 1.41L17.67 13l-2.58 2.59L16.5 17l4-4-4-4z"/></svg>
            </template>
            TERMINAL
          </CpMenuItem>
        </CpMenu>
      </div>
    `,
  }),
}

/**
 * 折叠模式
 */
export const Collapse: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const collapsed = ref(false)
      const active = ref('1')
      return { collapsed, active }
    },
    template: `
      <div>
        <button
          @click="collapsed = !collapsed"
          style="margin-bottom: 12px; padding: 6px 16px; background: var(--cp-bg-elevated); color: var(--cp-text-primary); border: 1px solid var(--cp-border); cursor: pointer; font-family: 'Rajdhani', sans-serif;"
        >
          {{ collapsed ? '展开菜单' : '折叠菜单' }}
        </button>
        <div :style="{ width: collapsed ? '56px' : '220px', transition: 'width 0.3s' }">
          <CpMenu :collapse="collapsed" :default-active="active" type="primary" @select="(idx) => active = idx">
            <CpMenuItem index="1">
              <template #icon>
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              </template>
              主控台
            </CpMenuItem>
            <CpMenuItem index="2">
              <template #icon>
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </template>
              人员档案
            </CpMenuItem>
            <CpSubMenu index="3">
              <template #icon>
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
              </template>
              <template #title>系统设置</template>
              <CpMenuItem index="3-1">通用</CpMenuItem>
              <CpMenuItem index="3-2">安全</CpMenuItem>
            </CpSubMenu>
          </CpMenu>
        </div>
      </div>
    `,
  }),
}

/**
 * 深层嵌套 — 垂直模式 3 级 + 水平模式多级飞出
 */
export const DeepNesting: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu, CpMenuItemGroup },
    setup() {
      const active1 = ref('1-1-1')
      const active2 = ref('h-1')
      return { active1, active2 }
    },
    template: `
      <div style="display: flex; gap: 40px; flex-wrap: wrap; align-items: flex-start;">
        <!-- 垂直深层嵌套 -->
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            垂直 — 3 级嵌套
          </p>
          <div style="width: 260px;">
            <CpMenu :default-active="active1" type="info" @select="(idx) => active1 = idx">
              <CpSubMenu index="1">
                <template #title>系统架构</template>
                <CpSubMenu index="1-1">
                  <template #title>微服务集群</template>
                  <CpMenuItem index="1-1-1">网关服务</CpMenuItem>
                  <CpMenuItem index="1-1-2">认证服务</CpMenuItem>
                  <CpSubMenu index="1-1-3">
                    <template #title>数据服务</template>
                    <CpMenuItem index="1-1-3-1">MySQL 主库</CpMenuItem>
                    <CpMenuItem index="1-1-3-2">Redis 缓存</CpMenuItem>
                    <CpMenuItem index="1-1-3-3">ES 搜索引擎</CpMenuItem>
                  </CpSubMenu>
                </CpSubMenu>
                <CpSubMenu index="1-2">
                  <template #title>基础设施</template>
                  <CpMenuItem index="1-2-1">K8s 编排</CpMenuItem>
                  <CpMenuItem index="1-2-2">Docker 镜像</CpMenuItem>
                </CpSubMenu>
              </CpSubMenu>
              <CpSubMenu index="2">
                <template #title>监控告警</template>
                <CpMenuItem index="2-1">Prometheus</CpMenuItem>
                <CpMenuItem index="2-2">Grafana</CpMenuItem>
                <CpSubMenu index="2-3">
                  <template #title>告警规则</template>
                  <CpMenuItem index="2-3-1">CPU 阈值</CpMenuItem>
                  <CpMenuItem index="2-3-2">内存阈值</CpMenuItem>
                  <CpMenuItem index="2-3-3">磁盘阈值</CpMenuItem>
                </CpSubMenu>
              </CpSubMenu>
              <CpMenuItem index="3">系统总览</CpMenuItem>
            </CpMenu>
          </div>
          <p style="margin-top: 8px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif; font-size: 13px;">
            当前: <span style="color: var(--cp-color-info);">{{ active1 }}</span>
          </p>
        </div>

        <!-- 水平深层嵌套（hover 飞出） -->
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            水平 — 多级飞出
          </p>
          <CpMenu mode="horizontal" :default-active="active2" type="warning" @select="(idx) => active2 = idx">
            <CpMenuItem index="h-1">首页</CpMenuItem>
            <CpSubMenu index="h-2">
              <template #title>产品</template>
              <CpMenuItem index="h-2-1">产品概览</CpMenuItem>
              <CpSubMenu index="h-2-2">
                <template #title>解决方案</template>
                <CpMenuItem index="h-2-2-1">企业版</CpMenuItem>
                <CpMenuItem index="h-2-2-2">社区版</CpMenuItem>
                <CpSubMenu index="h-2-2-3">
                  <template #title>定制服务</template>
                  <CpMenuItem index="h-2-2-3-1">架构咨询</CpMenuItem>
                  <CpMenuItem index="h-2-2-3-2">性能调优</CpMenuItem>
                </CpSubMenu>
              </CpSubMenu>
              <CpMenuItem index="h-2-3">定价</CpMenuItem>
            </CpSubMenu>
            <CpSubMenu index="h-3">
              <template #title>资源</template>
              <CpMenuItem index="h-3-1">文档</CpMenuItem>
              <CpMenuItem index="h-3-2">API</CpMenuItem>
            </CpSubMenu>
            <CpMenuItem index="h-4">关于</CpMenuItem>
          </CpMenu>
          <p style="margin-top: 8px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif; font-size: 13px;">
            当前: <span style="color: var(--cp-color-warning);">{{ active2 }}</span>
          </p>
        </div>
      </div>
    `,
  }),
}

/**
 * 颜色类型 — 展示各 type 变体
 */
export const ColorTypes: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const types = ['default', 'primary', 'success', 'warning', 'error', 'info']
      return { types }
    },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <div v-for="t in types" :key="t" style="width: 200px;">
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            {{ t }}
          </p>
          <CpMenu :type="t" default-active="1">
            <CpMenuItem index="1">激活项</CpMenuItem>
            <CpMenuItem index="2">普通项</CpMenuItem>
            <CpSubMenu index="3">
              <template #title>子菜单</template>
              <CpMenuItem index="3-1">子项一</CpMenuItem>
            </CpSubMenu>
          </CpMenu>
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义颜色 — 通过 color prop 和 CSS 变量覆盖默认配色
 */
export const CustomColors: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <div style="width: 220px;">
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">深色背景 + 粉色高亮</p>
          <CpMenu
            default-active="1"
            color="#ff00ff"
            style="--cp-menu-bg: #1a1025; --cp-menu-text: #c0b0d0;"
          >
            <CpMenuItem index="1">霓虹粉高亮</CpMenuItem>
            <CpMenuItem index="2">普通选项</CpMenuItem>
            <CpSubMenu index="3">
              <template #title>子菜单</template>
              <CpMenuItem index="3-1">子项一</CpMenuItem>
            </CpSubMenu>
          </CpMenu>
        </div>
        <div style="width: 220px;">
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">暗绿背景 + 金色高亮</p>
          <CpMenu
            default-active="1"
            color="#ffd700"
            style="--cp-menu-bg: #0a1a0a; --cp-menu-text: #80a080;"
          >
            <CpMenuItem index="1">激活项</CpMenuItem>
            <CpMenuItem index="2">普通项</CpMenuItem>
            <CpSubMenu index="3">
              <template #title>子菜单</template>
              <CpMenuItem index="3-1">子项一</CpMenuItem>
            </CpSubMenu>
          </CpMenu>
        </div>
        <div style="width: 220px;">
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">默认背景 + 荧光绿</p>
          <CpMenu
            default-active="2"
            color="#39ff14"
          >
            <CpMenuItem index="1">选项一</CpMenuItem>
            <CpMenuItem index="2">选项二</CpMenuItem>
            <CpMenuItem index="3">选项三</CpMenuItem>
          </CpMenu>
        </div>
      </div>
    `,
  }),
}

/**
 * 分组菜单
 */
export const Groups: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu, CpMenuItemGroup },
    setup() {
      const active = ref('1-1')
      return { active }
    },
    template: `
      <div style="width: 240px;">
        <CpMenu :default-active="active" type="primary" @select="(idx) => active = idx">
          <CpMenuItemGroup title="核心模块">
            <CpMenuItem index="1-1">
              <template #icon>
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
              </template>
              数据总览
            </CpMenuItem>
            <CpMenuItem index="1-2">
              <template #icon>
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </template>
              身份认证
            </CpMenuItem>
          </CpMenuItemGroup>
          <CpMenuItemGroup title="高级功能">
            <CpMenuItem index="2-1">AI 推理引擎</CpMenuItem>
            <CpMenuItem index="2-2">量子解密</CpMenuItem>
            <CpMenuItem index="2-3" disabled>实验功能 [锁定]</CpMenuItem>
          </CpMenuItemGroup>
        </CpMenu>
      </div>
    `,
  }),
}

/**
 * 禁用项
 */
export const Disabled: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('1')
      return { active }
    },
    template: `
      <div style="width: 220px;">
        <CpMenu :default-active="active" @select="(idx) => active = idx">
          <CpMenuItem index="1">可用选项</CpMenuItem>
          <CpMenuItem index="2" disabled>禁用选项</CpMenuItem>
          <CpSubMenu index="3" disabled>
            <template #title>禁用子菜单</template>
            <CpMenuItem index="3-1">子项一</CpMenuItem>
          </CpSubMenu>
          <CpMenuItem index="4">正常选项</CpMenuItem>
        </CpMenu>
      </div>
    `,
  }),
}

/**
 * CpIcon 集成 — 使用 icon prop 替代 #icon 插槽
 */
export const IconProp: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
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
      <div style="width: 220px;">
        <CpMenu :default-active="active" type="primary" @select="(idx) => active = idx">
          <CpMenuItem index="dashboard" :icon="MdiViewDashboard">
            DASHBOARD
          </CpMenuItem>
          <CpMenuItem index="users" :icon="MdiAccountGroup">
            用户管理
          </CpMenuItem>
          <CpSubMenu index="system" :icon="MdiCog">
            <template #title>系统设置</template>
            <CpMenuItem index="system-general" :icon="MdiTune">通用</CpMenuItem>
            <CpMenuItem index="system-security" :icon="MdiShieldLock">安全</CpMenuItem>
            <CpMenuItem index="system-network" :icon="MdiAccessPointNetwork">网络</CpMenuItem>
          </CpSubMenu>
          <CpSubMenu index="monitor" :icon="MdiChartLine">
            <template #title>监控面板</template>
            <CpMenuItem index="monitor-realtime" :icon="MdiPulse">实时</CpMenuItem>
            <CpMenuItem index="monitor-log" :icon="MdiTextBoxSearch">日志</CpMenuItem>
          </CpSubMenu>
          <CpMenuItem index="terminal" :icon="MdiConsole">
            TERMINAL
          </CpMenuItem>
        </CpMenu>
      </div>
      <p style="margin-top: 12px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">
        提示: icon prop 传入 unplugin-icons 导入的 Vue 组件 (:icon="MdiHome")
      </p>
    `,
  }),
}

/**
 * 数据驱动菜单 — CpMenuNav 垂直模式
 */
export const DataDriven: Story = {
  render: () => ({
    components: { CpMenuNav },
    setup() {
      const active = ref('1-1')
      const menuData: MenuNavItem[] = [
        { index: '1-1', label: '系统总览', icon: markRaw(MdiViewDashboard) },
        { index: '1-2', label: '用户管理', icon: markRaw(MdiAccountGroup) },
        {
          index: '2', label: '系统配置', icon: markRaw(MdiCog),
          children: [
            { index: '2-1', label: '基础设置', icon: markRaw(MdiTune) },
            { index: '2-2', label: '安全策略', icon: markRaw(MdiShieldLock) },
            {
              index: '2-3', label: '网络配置', icon: markRaw(MdiAccessPointNetwork),
              children: [
                { index: '2-3-1', label: 'DNS' },
                { index: '2-3-2', label: '防火墙' },
                { index: '2-3-3', label: '代理' },
              ]
            },
          ]
        },
        {
          index: '3', label: '监控告警', icon: markRaw(MdiChartLine),
          children: [
            { index: '3-1', label: 'Prometheus' },
            { index: '3-2', label: 'Grafana' },
          ]
        },
        { index: '4', label: '终端', icon: markRaw(MdiConsole) },
        { index: '5', label: '实验功能', icon: markRaw(MdiFlask), disabled: true },
      ]
      return { active, menuData }
    },
    template: `
      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <div style="width: 260px;">
          <CpMenuNav
            :data="menuData"
            :default-active="active"
            type="primary"
            :default-openeds="['2']"
            @select="(idx) => active = idx"
          />
        </div>
        <div style="padding: 16px;">
          <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
            当前: <span style="color: var(--cp-color-primary);">{{ active }}</span>
          </p>
        </div>
      </div>
    `,
  }),
}

/**
 * 数据驱动菜单 — CpMenuNav 水平模式
 */
export const DataDrivenHorizontal: Story = {
  render: () => ({
    components: { CpMenuNav },
    setup() {
      const active = ref('home')
      const menuData: MenuNavItem[] = [
        { index: 'home', label: '首页', icon: markRaw(MdiHome) },
        {
          index: 'products', label: '产品', icon: markRaw(MdiPackageVariant),
          children: [
            { index: 'products-overview', label: '产品概览', icon: markRaw(MdiEye) },
            {
              index: 'products-solutions', label: '解决方案', icon: markRaw(MdiLightbulb),
              children: [
                { index: 'products-enterprise', label: '企业版', icon: markRaw(MdiDomain) },
                { index: 'products-community', label: '社区版', icon: markRaw(MdiAccountMultiple) },
              ]
            },
            { index: 'products-pricing', label: '定价', icon: markRaw(MdiCurrencyUsd) },
          ]
        },
        {
          index: 'resources', label: '资源', icon: markRaw(MdiBookOpen),
          children: [
            { index: 'resources-docs', label: '文档', icon: markRaw(MdiFileDocumentOutline) },
            { index: 'resources-api', label: 'API', icon: markRaw(MdiApi) },
            { index: 'resources-changelog', label: '更新日志', icon: markRaw(MdiUpdate) },
          ]
        },
        { index: 'about', label: '关于', icon: markRaw(MdiInformation) },
      ]
      return { active, menuData }
    },
    template: `
      <div>
        <CpMenuNav
          :data="menuData"
          mode="horizontal"
          :default-active="active"
          type="warning"
          @select="(idx) => active = idx"
        />
        <p style="margin-top: 16px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          当前: <span style="color: var(--cp-color-warning);">{{ active }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * 数据驱动菜单 — 分组模式
 */
export const DataDrivenGroups: Story = {
  render: () => ({
    components: { CpMenuNav },
    setup() {
      const active = ref('core-1')
      const menuData: MenuNavItem[] = [
        {
          index: 'group-core', label: '', group: '核心模块',
          children: [
            { index: 'core-1', label: '数据总览', icon: markRaw(MdiViewDashboard) },
            { index: 'core-2', label: '身份认证', icon: markRaw(MdiAccountKey) },
          ]
        },
        {
          index: 'group-advanced', label: '', group: '高级功能',
          children: [
            { index: 'adv-1', label: 'AI 推理引擎', icon: markRaw(MdiBrain) },
            { index: 'adv-2', label: '量子解密', icon: markRaw(MdiAtom) },
            { index: 'adv-3', label: '实验功能 [锁定]', icon: markRaw(MdiFlask), disabled: true },
          ]
        },
      ]
      return { active, menuData }
    },
    template: `
      <div style="width: 240px;">
        <CpMenuNav
          :data="menuData"
          :default-active="active"
          type="success"
          @select="(idx) => active = idx"
        />
      </div>
    `,
  }),
}

/**
 * 自动 Index — 无需手动指定 index，组件自动生成唯一标识
 */
export const AutoIndex: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const active = ref('')
      return {
        active,
        MdiHome, MdiAccountGroup, MdiCog, MdiTune, MdiShieldLock, MdiChartLine, MdiConsole,
      }
    },
    template: `
      <div style="display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap;">
        <!-- 全部省略 index -->
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            无需手动 index
          </p>
          <div style="width: 240px;">
            <CpMenu type="primary" @select="(idx) => active = idx">
              <CpMenuItem :icon="MdiHome">首页</CpMenuItem>
              <CpMenuItem :icon="MdiAccountGroup">用户管理</CpMenuItem>
              <CpSubMenu :icon="MdiCog">
                <template #title>系统设置</template>
                <CpMenuItem :icon="MdiTune">通用</CpMenuItem>
                <CpMenuItem :icon="MdiShieldLock">安全</CpMenuItem>
              </CpSubMenu>
              <CpSubMenu :icon="MdiChartLine">
                <template #title>数据面板</template>
                <CpMenuItem>实时监控</CpMenuItem>
                <CpMenuItem>日志分析</CpMenuItem>
              </CpSubMenu>
              <CpMenuItem :icon="MdiConsole">终端</CpMenuItem>
            </CpMenu>
          </div>
          <p style="margin-top: 12px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
            当前激活: <span style="color: var(--cp-color-primary);">{{ active || '(未选择)' }}</span>
          </p>
          <p style="margin-top: 4px; color: var(--cp-text-muted); font-family: monospace; font-size: 11px;">
            提示: index 自动生成，不再需要手动指定
          </p>
        </div>

        <!-- 混合模式：部分手动 + 部分自动 -->
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            混合模式（手动 + 自动）
          </p>
          <div style="width: 240px;">
            <CpMenu type="success" default-active="home" @select="(idx) => active = idx">
              <CpMenuItem index="home" :icon="MdiHome">首页（手动 index）</CpMenuItem>
              <CpMenuItem :icon="MdiAccountGroup">用户（自动 index）</CpMenuItem>
              <CpSubMenu index="settings" :icon="MdiCog">
                <template #title>设置（手动 index）</template>
                <CpMenuItem>通用（自动）</CpMenuItem>
                <CpMenuItem index="security">安全（手动）</CpMenuItem>
              </CpSubMenu>
            </CpMenu>
          </div>
        </div>
      </div>
    `,
  }),
}

/**
 * 形状 × 变体矩阵
 */
export const ShapeVariant: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const shapes = ['clip', 'no-clip', 'round', 'circle'] as const
      const variants = ['solid', 'outline', 'note'] as const
      return {
        shapes, variants,
        MdiViewDashboard, MdiAccountGroup, MdiCog, MdiTune, MdiShieldLock,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div v-for="variant in variants" :key="variant">
          <p style="margin-bottom: 12px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            variant: {{ variant }}
          </p>
          <div style="display: flex; gap: 24px; flex-wrap: wrap;">
            <div v-for="shape in shapes" :key="shape" style="width: 220px;">
              <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 11px;">
                shape: {{ shape }}
              </p>
              <CpMenu :shape="shape" :variant="variant" type="primary" default-active="1">
                <CpMenuItem index="1" :icon="MdiViewDashboard">系统总览</CpMenuItem>
                <CpMenuItem index="2" :icon="MdiAccountGroup">用户管理</CpMenuItem>
                <CpSubMenu index="3" :icon="MdiCog">
                  <template #title>系统设置</template>
                  <CpMenuItem index="3-1" :icon="MdiTune">通用</CpMenuItem>
                  <CpMenuItem index="3-2" :icon="MdiShieldLock">安全</CpMenuItem>
                </CpSubMenu>
              </CpMenu>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

/**
 * 水平模式 — 形状 × 变体矩阵
 */
export const HorizontalShapeVariant: Story = {
  render: () => ({
    components: { CpMenu, CpMenuItem, CpSubMenu },
    setup() {
      const shapes = ['clip', 'no-clip', 'round', 'circle'] as const
      const variants = ['solid', 'outline', 'note'] as const
      return {
        shapes, variants,
        MdiViewDashboard, MdiAccountGroup, MdiCog, MdiTune, MdiShieldLock,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div v-for="variant in variants" :key="variant">
          <p style="margin-bottom: 12px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            variant: {{ variant }}
          </p>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div v-for="shape in shapes" :key="shape">
              <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-family: monospace; font-size: 11px;">
                shape: {{ shape }}
              </p>
              <CpMenu mode="horizontal" :shape="shape" :variant="variant" type="primary" default-active="1">
                <CpMenuItem index="1" :icon="MdiViewDashboard">系统总览</CpMenuItem>
                <CpMenuItem index="2" :icon="MdiAccountGroup">用户管理</CpMenuItem>
                <CpSubMenu index="3" :icon="MdiCog">
                  <template #title>系统设置</template>
                  <CpMenuItem index="3-1" :icon="MdiTune">通用</CpMenuItem>
                  <CpMenuItem index="3-2" :icon="MdiShieldLock">安全</CpMenuItem>
                </CpSubMenu>
              </CpMenu>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
