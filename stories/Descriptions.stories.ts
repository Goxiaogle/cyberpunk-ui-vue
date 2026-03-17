import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpDescriptions, CpDescriptionsItem, CpTag, CpButton } from '@cyberpunk-vue/components'

/**
 * # CpDescriptions 描述列表
 *
 * 赛博朋克风格描述列表组件，以键值对形式展示结构化数据。
 *
 * ## 特性
 * - 🎨 多种颜色类型 + 自定义主题色 + 单项 type/color/labelColor/contentColor
 * - 📐 三种尺寸：sm、md、lg
 * - 📊 支持水平/垂直两种排列方向
 * - 🔲 三种变体：solid（边框+背景）、outline（仅边框）、ghost（无边框）
 * - 🧩 灵活列数与跨列
 * - 🏷️ label / content 水平 + 垂直对齐控制（含 auto 模式）
 * - 🎰 自定义标题与额外操作区
 */
const meta: Meta<typeof CpDescriptions> = {
  title: '数据展示 Data Display/Descriptions 描述列表',
  component: CpDescriptions,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '标题',
    },
    column: {
      control: { type: 'number', min: 1, max: 6 },
      description: '一行几列',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '排列方向',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
      description: '变体样式',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色类型',
    },
    color: {
      control: 'color',
      description: '自定义主题色',
    },
    labelAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'label 水平对齐',
    },
    labelVerticalAlign: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'auto'],
      description: 'label 垂直对齐',
    },
    contentAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: '内容水平对齐',
    },
    contentVerticalAlign: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'auto'],
      description: '内容垂直对齐',
    },
  },
  args: {
    title: '设备信息',
    column: 3,
    direction: 'horizontal',
    variant: 'solid',
    size: 'md',
    type: 'default',
    color: '',
    labelAlign: 'left',
    labelVerticalAlign: 'center',
    contentAlign: 'left',
    contentVerticalAlign: 'center',
  },
}

export default meta
type Story = StoryObj<typeof CpDescriptions>

/**
 * 基础用法
 *
 * 最简单的描述列表，三列带边框（默认 variant="solid"）。
 */
export const Basic: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { CpDescriptions, CpDescriptionsItem },
    setup() {
      return { args }
    },
    template: `
      <CpDescriptions v-bind="args">
        <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
        <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
        <CpDescriptionsItem label="协议版本">v2.8.1</CpDescriptionsItem>
        <CpDescriptionsItem label="IP 地址">192.168.1.42</CpDescriptionsItem>
        <CpDescriptionsItem label="负载">23%</CpDescriptionsItem>
        <CpDescriptionsItem label="最后心跳">2026-03-17 15:00:00</CpDescriptionsItem>
      </CpDescriptions>
    `,
  }),
}

/**
 * 变体对比
 *
 * `variant="solid"`（默认）边框 + 背景，`variant="outline"` 仅边框，`variant="ghost"` 无边框。
 */
export const Variants: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">variant="solid"（默认）</div>
          <CpDescriptions title="用户资料" :column="2" variant="solid">
            <CpDescriptionsItem label="用户名">NeonRunner</CpDescriptionsItem>
            <CpDescriptionsItem label="等级">S</CpDescriptionsItem>
            <CpDescriptionsItem label="邮箱">neon@cyber.net</CpDescriptionsItem>
            <CpDescriptionsItem label="注册时间">2025-01-15</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">variant="outline"</div>
          <CpDescriptions title="用户资料" :column="2" variant="outline">
            <CpDescriptionsItem label="用户名">NeonRunner</CpDescriptionsItem>
            <CpDescriptionsItem label="等级">S</CpDescriptionsItem>
            <CpDescriptionsItem label="邮箱">neon@cyber.net</CpDescriptionsItem>
            <CpDescriptionsItem label="注册时间">2025-01-15</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">variant="ghost"</div>
          <CpDescriptions title="用户资料" :column="2" variant="ghost">
            <CpDescriptionsItem label="用户名">NeonRunner</CpDescriptionsItem>
            <CpDescriptionsItem label="等级">S</CpDescriptionsItem>
            <CpDescriptionsItem label="邮箱">neon@cyber.net</CpDescriptionsItem>
            <CpDescriptionsItem label="注册时间">2025-01-15</CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * 垂直排列
 *
 * `direction="vertical"` 使 label 在上、内容在下。
 */
export const Vertical: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <CpDescriptions title="系统配置" :column="3" direction="vertical">
        <CpDescriptionsItem label="CPU 核心">16 核</CpDescriptionsItem>
        <CpDescriptionsItem label="内存">128 GB DDR5</CpDescriptionsItem>
        <CpDescriptionsItem label="存储">2 TB NVMe SSD</CpDescriptionsItem>
        <CpDescriptionsItem label="操作系统">CyberOS 4.2</CpDescriptionsItem>
        <CpDescriptionsItem label="内核版本">6.8.0-cyber</CpDescriptionsItem>
        <CpDescriptionsItem label="运行时间">127 天 14 小时</CpDescriptionsItem>
      </CpDescriptions>
    `,
  }),
}

/**
 * 列数对比
 *
 * 支持不同列数：1列、2列、4列。
 */
export const ColumnVariants: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">1 列</div>
          <CpDescriptions title="单列模式" :column="1">
            <CpDescriptionsItem label="名称">CYB-NODE-ALPHA</CpDescriptionsItem>
            <CpDescriptionsItem label="描述">主控节点，负责任务调度与资源分配</CpDescriptionsItem>
            <CpDescriptionsItem label="创建时间">2026-01-01 00:00:00</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">2 列</div>
          <CpDescriptions title="双列模式" :column="2">
            <CpDescriptionsItem label="名称">CYB-NODE-ALPHA</CpDescriptionsItem>
            <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
            <CpDescriptionsItem label="CPU">48%</CpDescriptionsItem>
            <CpDescriptionsItem label="内存">72%</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">4 列</div>
          <CpDescriptions title="四列模式" :column="4">
            <CpDescriptionsItem label="A">值A</CpDescriptionsItem>
            <CpDescriptionsItem label="B">值B</CpDescriptionsItem>
            <CpDescriptionsItem label="C">值C</CpDescriptionsItem>
            <CpDescriptionsItem label="D">值D</CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * 尺寸对比
 *
 * 支持 `sm`、`md`、`lg` 三种尺寸。
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div v-for="s in ['sm', 'md', 'lg']" :key="s">
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px; text-transform: uppercase;">{{ s }}</div>
          <CpDescriptions :size="s" :column="3">
            <CpDescriptionsItem label="节点">CYB-7749</CpDescriptionsItem>
            <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
            <CpDescriptionsItem label="版本">v2.8.1</CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * 颜色类型
 *
 * 通过 `type` 设置描述列表主题色。
 */
export const Types: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div v-for="t in ['default', 'primary', 'success', 'warning', 'error', 'info']" :key="t">
          <CpDescriptions :title="t.toUpperCase()" :type="t" :column="3">
            <CpDescriptionsItem label="节点">CYB-7749</CpDescriptionsItem>
            <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
            <CpDescriptionsItem label="协议">v2.8.1</CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义主题色
 *
 * 使用 `color` prop 指定任意 CSS 颜色值。
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 6px; font-size: 12px;">color="#e040fb" (紫粉)</div>
          <CpDescriptions color="#e040fb" :column="3">
            <CpDescriptionsItem label="节点">CYB-7749</CpDescriptionsItem>
            <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
            <CpDescriptionsItem label="版本">v2.8.1</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 6px; font-size: 12px;">color="#76ff03" (荧光绿)</div>
          <CpDescriptions color="#76ff03" :column="3">
            <CpDescriptionsItem label="节点">CYB-7749</CpDescriptionsItem>
            <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
            <CpDescriptionsItem label="版本">v2.8.1</CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * 跨列
 *
 * 使用 `span` 属性让条目占据多列。
 */
export const Span: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <CpDescriptions title="任务详情" :column="3">
        <CpDescriptionsItem label="任务 ID">TASK-20260317-001</CpDescriptionsItem>
        <CpDescriptionsItem label="优先级">高</CpDescriptionsItem>
        <CpDescriptionsItem label="状态">执行中</CpDescriptionsItem>
        <CpDescriptionsItem label="描述" :span="3">
          这是一个跨越三列的长文本区域，用于展示任务的详细描述信息。该任务涉及多个子系统的协调调度，包括数据采集模块、分析引擎和告警系统的联动。
        </CpDescriptionsItem>
        <CpDescriptionsItem label="执行者" :span="2">NeonRunner / CyberOps 团队</CpDescriptionsItem>
        <CpDescriptionsItem label="截止日期">2026-04-01</CpDescriptionsItem>
      </CpDescriptions>
    `,
  }),
}

/**
 * 自定义插槽
 *
 * 使用 `#default` 和 `#label` 插槽自定义内容渲染。
 */
export const CustomSlots: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem, CpTag, CpButton },
    template: `
      <CpDescriptions title="节点监控" :column="3" type="primary">
        <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
        <CpDescriptionsItem label="状态">
          <CpTag type="success" variant="semi" size="sm">在线</CpTag>
        </CpDescriptionsItem>
        <CpDescriptionsItem label="健康度">
          <span style="color: var(--cp-color-success); font-weight: 600;">98.7%</span>
        </CpDescriptionsItem>
        <CpDescriptionsItem label="告警">
          <CpTag type="warning" variant="semi" size="sm">2 条</CpTag>
        </CpDescriptionsItem>
        <CpDescriptionsItem label="最后部署">2026-03-17 10:30:00</CpDescriptionsItem>
        <CpDescriptionsItem label="操作">
          <div style="display: flex; gap: 6px;">
            <CpButton type="primary" variant="ghost" size="sm">重启</CpButton>
            <CpButton type="error" variant="ghost" size="sm">下线</CpButton>
          </div>
        </CpDescriptionsItem>
      </CpDescriptions>
    `,
  }),
}

/**
 * 标题与额外操作
 *
 * 通过 `title` / `extra` 或对应插槽自定义头部区域。
 */
export const TitleAndExtra: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem, CpButton },
    template: `
      <CpDescriptions :column="3" type="primary">
        <template #title>
          <span style="display: flex; align-items: center; gap: 6px;">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="color: var(--cp-color-primary);">
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="8" cy="8" r="3" />
            </svg>
            节点详情
          </span>
        </template>
        <template #extra>
          <CpButton type="primary" variant="outline" size="sm">编辑</CpButton>
        </template>
        <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
        <CpDescriptionsItem label="区域">华东-1</CpDescriptionsItem>
        <CpDescriptionsItem label="可用区">cn-east-1a</CpDescriptionsItem>
        <CpDescriptionsItem label="创建时间" :span="2">2025-06-15 08:00:00</CpDescriptionsItem>
        <CpDescriptionsItem label="备注">主节点</CpDescriptionsItem>
      </CpDescriptions>
    `,
  }),
}

/**
 * 垂直对齐
 *
 * 通过 `labelVerticalAlign` 和 `contentVerticalAlign` 控制垂直位置。
 * `auto` 模式在内容矮时居中，超过阈值后自动切为顶部对齐。
 */
export const VerticalAlign: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div v-for="align in ['center', 'top', 'bottom', 'auto']" :key="align">
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">
            labelVerticalAlign="{{ align }}" &amp; contentVerticalAlign="{{ align }}"
          </div>
          <CpDescriptions :column="2" :label-vertical-align="align" :content-vertical-align="align">
            <CpDescriptionsItem label="短内容">单行文本</CpDescriptionsItem>
            <CpDescriptionsItem label="长内容">
              <div>这是一段多行内容，用于测试垂直对齐效果。</div>
              <div style="margin-top: 8px;">第二行内容，展示对齐行为。</div>
              <div style="margin-top: 8px;">第三行内容。</div>
            </CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * Label 宽度与对齐
 *
 * 通过 `labelWidth` 和 `labelAlign` 控制标签列的宽度和对齐方式。
 */
export const LabelWidthAndAlign: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <CpDescriptions title="右对齐 label (120px)" :column="2" label-align="right" :label-width="120">
          <CpDescriptionsItem label="用户名">NeonRunner</CpDescriptionsItem>
          <CpDescriptionsItem label="等级">S</CpDescriptionsItem>
          <CpDescriptionsItem label="邮箱">neon@cyber.net</CpDescriptionsItem>
          <CpDescriptionsItem label="部门">CyberOps</CpDescriptionsItem>
        </CpDescriptions>
        <CpDescriptions title="居中对齐 label" :column="2" label-align="center" :label-width="100">
          <CpDescriptionsItem label="CPU">48%</CpDescriptionsItem>
          <CpDescriptionsItem label="内存">72%</CpDescriptionsItem>
          <CpDescriptionsItem label="磁盘">35%</CpDescriptionsItem>
          <CpDescriptionsItem label="网络">12 MB/s</CpDescriptionsItem>
        </CpDescriptions>
      </div>
    `,
  }),
}

/**
 * 颜色自定义
 *
 * 支持三种颜色自定义方式：
 * 1. 全局 CSS 变量 `--cp-descriptions-label-color` / `--cp-descriptions-content-color`
 * 2. 单项 `labelColor` / `contentColor` prop
 * 3. 单项 `type` / `color` prop 覆盖父级主题
 */
export const ItemColors: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">全局 CSS 变量覆盖</div>
          <CpDescriptions
            :column="3"
            style="--cp-descriptions-label-color: #e040fb; --cp-descriptions-content-color: #76ff03;"
          >
            <CpDescriptionsItem label="节点">CYB-7749</CpDescriptionsItem>
            <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
            <CpDescriptionsItem label="版本">v2.8.1</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">单项 labelColor / contentColor</div>
          <CpDescriptions :column="3" variant="outline">
            <CpDescriptionsItem label="正常">默认颜色</CpDescriptionsItem>
            <CpDescriptionsItem label="告警" label-color="#ff9800" content-color="#ff9800">3 条未处理</CpDescriptionsItem>
            <CpDescriptionsItem label="错误" label-color="#f44336" content-color="#f44336">连接超时</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">单项 type 覆盖（label + content 同色）</div>
          <CpDescriptions :column="3">
            <CpDescriptionsItem label="默认">default</CpDescriptionsItem>
            <CpDescriptionsItem label="成功" type="success">上线完成</CpDescriptionsItem>
            <CpDescriptionsItem label="告警" type="warning">延迟升高</CpDescriptionsItem>
            <CpDescriptionsItem label="错误" type="error">连接断开</CpDescriptionsItem>
            <CpDescriptionsItem label="信息" type="info">版本已更新</CpDescriptionsItem>
            <CpDescriptionsItem label="主要" type="primary">任务进行中</CpDescriptionsItem>
          </CpDescriptions>
        </div>
        <div>
          <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 12px;">单项 color 自定义色</div>
          <CpDescriptions :column="3">
            <CpDescriptionsItem label="紫粉" color="#e040fb">自定义色值</CpDescriptionsItem>
            <CpDescriptionsItem label="荧光绿" color="#76ff03">自定义色值</CpDescriptionsItem>
            <CpDescriptionsItem label="天蓝" color="#00bcd4">自定义色值</CpDescriptionsItem>
          </CpDescriptions>
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义 Label 插槽
 *
 * 用 `#label` 插槽自定义标签内容，支持图标、微标签等富文本展示。
 */
export const LabelSlot: Story = {
  render: () => ({
    components: { CpDescriptions, CpDescriptionsItem, CpTag },
    template: `
      <CpDescriptions title="自定义 Label" :column="2">
        <CpDescriptionsItem>
          <template #label>
            <span style="display: inline-flex; align-items: center; gap: 4px;">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="var(--cp-color-primary)">
                <circle cx="8" cy="8" r="6" />
              </svg>
              节点 ID
            </span>
          </template>
          CYB-7749
        </CpDescriptionsItem>
        <CpDescriptionsItem>
          <template #label>
            <span style="display: inline-flex; align-items: center; gap: 4px;">
              <CpTag type="success" size="sm">在线</CpTag>
              状态
            </span>
          </template>
          已运行 127 天
        </CpDescriptionsItem>
        <CpDescriptionsItem>
          <template #label>
            <span style="color: var(--cp-color-warning); font-weight: 700;">&#9888; 告警</span>
          </template>
          3 条未处理
        </CpDescriptionsItem>
        <CpDescriptionsItem label="普通 Label">对比默认文本 label</CpDescriptionsItem>
      </CpDescriptions>
    `,
  }),
}
