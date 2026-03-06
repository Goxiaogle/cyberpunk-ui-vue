import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpTimeline, CpTimelineItem, CpButton, CpTag } from '@cyberpunk-vue/components'
import MdiMonitorDashboard from '~icons/mdi/monitor-dashboard'
import MdiShieldAlert from '~icons/mdi/shield-alert'
import MdiCheckDecagram from '~icons/mdi/check-decagram'
import MdiDatabaseArrowUp from '~icons/mdi/database-arrow-up'
import MdiServerNetwork from '~icons/mdi/server-network'

/**
 * # CpTimeline 时间轴
 *
 * 赛博朋克风格时间轴组件，用于垂直展示时间流信息、事件记录或进度操作流。
 *
 * ## 特性
 * - 🚦 多种颜色类型预设
 * - 💡 支持节点激活态和脉冲/发光/闪烁动画
 * - 📏 丰富的尺寸控制 (sm / md / lg)
 * - 🔄 支持 alternate 交替排列和 reverse 倒序显示
 * - 🎨 支持定制连线样式 (solid / dashed / dotted) 和颜色
 * - ⚙️ 极高的定制化：自定义节点、自定义时间戳、附加操作块
 */
const meta: Meta<typeof CpTimeline> = {
  title: '展示与反馈/Timeline 时间轴',
  component: CpTimeline,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['left', 'right', 'alternate'],
      description: '内容排列模式',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '全局颜色预设',
    },
    reverse: {
      control: 'boolean',
      description: '是否倒序排列',
    },
    lineStyle: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: '连线样式',
    },
    color: {
      control: 'color',
      description: '定制全局颜色',
    },
    lineColor: {
      control: 'color',
      description: '定制连线颜色',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpTimeline>

/** 基础用法 — 左侧对齐的标准时间轴 */
export const 基础用法: Story = {
  args: {
    mode: 'left',
    type: 'default',
    reverse: false,
    lineStyle: 'solid',
    color: '',
    lineColor: '',
  },
  render: (args) => ({
    components: { CpTimeline, CpTimelineItem },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; min-width: 300px;">
        <CpTimeline v-bind="args">
          <CpTimelineItem timestamp="2077.04.15">系统核心唤醒程序启动</CpTimelineItem>
          <CpTimelineItem timestamp="2077.04.16">网络协议栈初始化完成</CpTimelineItem>
          <CpTimelineItem timestamp="2077.04.17">建立神经链路连接</CpTimelineItem>
          <CpTimelineItem timestamp="2077.04.18">系统正式上线并在暗网节点广播</CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}

/** 颜色类型 — 支持多种语义颜色预设 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpTimeline, CpTimelineItem },
    template: `
      <div style="padding: 24px; min-width: 300px;">
        <CpTimeline>
          <CpTimelineItem type="success" timestamp="Step 1">权限验证通过 (Success)</CpTimelineItem>
          <CpTimelineItem type="info" timestamp="Step 2">数据同步中 (Info)</CpTimelineItem>
          <CpTimelineItem type="warning" timestamp="Step 3">检测到高负载预警 (Warning)</CpTimelineItem>
          <CpTimelineItem type="error" timestamp="Step 4">防火墙崩溃断线 (Error)</CpTimelineItem>
          <CpTimelineItem type="primary" timestamp="Step 5">应急备用线路激活 (Primary)</CpTimelineItem>
          <CpTimelineItem type="default" timestamp="Step 6">日志存档完毕 (Default)</CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}

/** 激活态与动画 — 赛博朋克风格的发光及脉冲/闪烁效果 */
export const 激活态与动画: Story = {
  render: () => ({
    components: { CpTimeline, CpTimelineItem },
    template: `
      <div style="padding: 24px; min-width: 300px; background: var(--cp-bg-deep);">
        <CpTimeline>
          <CpTimelineItem type="success" active>
            [Active] 核心数据节点在线，发光阴影效果
          </CpTimelineItem>
          <CpTimelineItem type="warning" animation="pulse">
            [Pulse Animation] 区域网络波动，扩散脉冲扫描效果
          </CpTimelineItem>
          <CpTimelineItem type="primary" animation="glow">
            [Glow Animation] 主机阵列运算中，呼吸发光效果
          </CpTimelineItem>
          <CpTimelineItem type="error" animation="blink">
            [Blink Animation] 致命系统错误，高频闪烁警报
          </CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}

/** 形状与尺寸 — 支持自定义颜色和不同大小的节点，以及空心状态 */
export const 形状与尺寸: Story = {
  render: () => ({
    components: { CpTimeline, CpTimelineItem },
    template: `
      <div style="padding: 24px; min-width: 300px;">
        <CpTimeline>
          <CpTimelineItem size="lg" type="primary">大型节点 (lg)</CpTimelineItem>
          <CpTimelineItem size="md" type="primary">中型节点 (md - Default)</CpTimelineItem>
          <CpTimelineItem size="sm" type="primary">小型节点 (sm)</CpTimelineItem>
          <CpTimelineItem hollow type="warning">空心节点指示 (hollow)</CpTimelineItem>
          <CpTimelineItem color="#ff00ff">客制化颜色 (Neon Pink)</CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}

/** 连线定制 — 支持全局及独立的连线样式 (dashed / dotted) 和连线颜色 */
export const 连线定制: Story = {
  render: () => ({
    components: { CpTimeline, CpTimelineItem },
    template: `
      <div style="padding: 24px; min-width: 300px;">
        <!-- 全局虚线，特定节点覆盖为点线 -->
        <CpTimeline lineStyle="dashed" lineColor="#404050">
          <CpTimelineItem>标准处理流 - 全局虚线配置</CpTimelineItem>
          <CpTimelineItem 
            type="primary" 
            lineStyle="solid" 
            lineColor="var(--cp-color-primary)"
          >
            重点监控阶段 - 覆盖为实线，赛博蓝连线
          </CpTimelineItem>
          <CpTimelineItem 
            type="warning" 
            lineStyle="dotted" 
            lineColor="var(--cp-color-warning)"
          >
            异常分叉路径 - 覆盖为点线，警用橙连线
          </CpTimelineItem>
          <CpTimelineItem type="success">恢复全局默认连线设置</CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}

/** 交替排列 — 左右交错的时间轴布局，非常适合大尺寸区域的日志展示 */
export const 交替排列: Story = {
  render: () => ({
    components: { CpTimeline, CpTimelineItem, CpTag },
    template: `
      <div style="padding: 24px; width: 600px;">
        <CpTimeline mode="alternate">
          <CpTimelineItem timestamp="08:00">基地警报解除</CpTimelineItem>
          <CpTimelineItem type="primary" timestamp="09:15">
            侦察小队出发前往废土区
          </CpTimelineItem>
          <CpTimelineItem type="warning" timestamp="11:30">
            <template #timestamp>
               <CpTag size="sm" type="warning" variant="outline">Anomaly Detected</CpTag>
            </template>
            检测到高能辐射波动异常
          </CpTimelineItem>
          <CpTimelineItem type="error" timestamp="12:05" animation="pulse">
            失去 B 小队生物体征信号！
          </CpTimelineItem>
          <CpTimelineItem type="success" timestamp="13:20">
            备用无人机已重建视觉捕获链路
          </CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}

/** 丰富插槽 — Icon 节点 / 自定义时间戳 / Extra 操作区 */
export const 丰富插槽: Story = {
  render: () => ({
    components: { 
      CpTimeline, CpTimelineItem, CpButton, CpTag,
      MdiMonitorDashboard, MdiShieldAlert, MdiCheckDecagram, MdiDatabaseArrowUp, MdiServerNetwork 
    },
    setup() {
      return { MdiMonitorDashboard, MdiShieldAlert, MdiCheckDecagram, MdiDatabaseArrowUp, MdiServerNetwork }
    },
    template: `
      <div style="padding: 24px; width: 400px; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <CpTimeline lineStyle="dashed">
          <!-- 自定义 Icon 节点 -->
          <CpTimelineItem type="info" :icon="MdiServerNetwork" timestamp="初始化">
            服务器集群冷启动中...
          </CpTimelineItem>
          
          <!-- Extra 附加操作区域 -->
          <CpTimelineItem type="warning" :icon="MdiDatabaseArrowUp">
            <template #timestamp>
              <span style="color: var(--cp-color-warning)">SYNC STATUS</span>
            </template>
            数据节点正在同步备份
            <template #extra>
              <div style="margin-top: 12px;">
                <CpButton size="sm" type="warning" variant="outline">终止进程</CpButton>
                <CpButton size="sm" type="primary" variant="ghost">查看日志</CpButton>
              </div>
            </template>
          </CpTimelineItem>
          
          <!-- 发光警报节点 -->
          <CpTimelineItem type="error" :icon="MdiShieldAlert" animation="glow" hollow>
            检测到未经授权的入侵尝试
            <div style="color: var(--cp-text-muted); font-size: 12px; margin-top: 4px;">来源 IP: 192.168.x.x (Masked)</div>
          </CpTimelineItem>
          
          <!-- 成功且带徽章时间戳 -->
          <CpTimelineItem type="success" :icon="MdiCheckDecagram" size="lg" placement="top">
            <template #timestamp>
              <CpTag type="success" variant="neon" size="sm">ALL CLEAR</CpTag> - TODAY 14:00
            </template>
            系统防御自检已完成通过，状态更新为安全。
          </CpTimelineItem>
        </CpTimeline>
      </div>
    `,
  }),
}
