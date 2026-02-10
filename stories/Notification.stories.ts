import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpNotification, CpButton } from '../packages/components'

/**
 * # CpNotification 通知提醒
 *
 * 赛博朋克风格的全局通知组件，从屏幕角落滑入展示重要消息。
 *
 * - 📍 四角定位 (top-right / top-left / bottom-right / bottom-left)
 * - 🎨 多主题色 (success / warning / error / info)
 * - ⏱️ 自动关闭 + hover 暂停
 * - ✂️ 切角/直角/圆角形状
 * - 🌈 solid / semi / outline 变体
 * - 🎬 可自定义动画时长
 */
const meta: Meta<typeof CpNotification> = {
  title: '反馈 Feedback/Notification 通知',
  component: CpNotification,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否显示 (v-model)',
    },
    title: {
      control: 'text',
      description: '标题',
    },
    message: {
      control: 'text',
      description: '消息内容',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '主题色',
      table: { defaultValue: { summary: 'default' } },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: '弹出位置',
      table: { defaultValue: { summary: 'top-right' } },
    },
    duration: {
      control: { type: 'number', min: 0, step: 500 },
      description: '自动关闭延迟 (ms), 0=不自动关闭',
      table: { defaultValue: { summary: '4500' } },
    },
    showClose: {
      control: 'boolean',
      description: '显示关闭按钮',
      table: { defaultValue: { summary: 'true' } },
    },
    offset: {
      control: { type: 'number', min: 0, max: 200 },
      description: '距窗口边缘偏移 (px)',
      table: { defaultValue: { summary: '16' } },
    },
    variant: {
      control: 'select',
      options: ['solid', 'semi', 'outline'],
      description: '变体',
      table: { defaultValue: { summary: 'solid' } },
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round'],
      description: '形状',
      table: { defaultValue: { summary: 'clip' } },
    },
    width: {
      control: 'text',
      description: '宽度',
      table: { defaultValue: { summary: '330px' } },
    },
    animationDuration: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
      description: '动画时长 (ms)',
      table: { defaultValue: { summary: '300' } },
    },
    color: {
      control: 'color',
      description: '自定义主色',
    },
    bgColor: {
      control: 'color',
      description: '自定义背景色',
    },
    borderColor: {
      control: 'color',
      description: '自定义边框色',
    },
    titleColor: {
      control: 'color',
      description: '标题文字颜色',
    },
    textColor: {
      control: 'color',
      description: '消息文字颜色',
    },
    zIndex: {
      control: { type: 'number', min: 1, max: 99999 },
      description: 'z-index',
      table: { defaultValue: { summary: '9999' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpNotification>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    title: '系统通知',
    message: '你有一条新的系统消息，请注意查收。',
    type: 'default',
    position: 'top-right',
    duration: 4500,
    showClose: true,
    variant: 'solid',
    shape: 'clip',
    animationDuration: 300,
  },
  render(args) {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const visible = ref(false)
        return { args, visible }
      },
      template: `
        <div>
          <CpButton type="primary" @click="visible = true">显示通知</CpButton>
          <CpNotification v-bind="args" v-model="visible" />
        </div>
      `,
    }
  },
}

/** 主题色变体 */
export const 主题色变体: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const show = ref({ success: false, warning: false, error: false, info: false })
        return { show }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="success" @click="show.success = true">Success</CpButton>
          <CpButton type="warning" @click="show.warning = true">Warning</CpButton>
          <CpButton type="error" @click="show.error = true">Error</CpButton>
          <CpButton type="info" @click="show.info = true">Info</CpButton>

          <CpNotification
            v-model="show.success"
            title="操作成功"
            message="你的数据已成功保存至系统。"
            type="success"
          />
          <CpNotification
            v-model="show.warning"
            title="系统警告"
            message="磁盘空间即将耗尽，请及时清理。"
            type="warning"
          />
          <CpNotification
            v-model="show.error"
            title="系统错误"
            message="连接至主服务器失败，请检查网络状态。"
            type="error"
            position="top-left"
          />
          <CpNotification
            v-model="show.info"
            title="信息提示"
            message="系统将在 30 分钟后进行维护更新。"
            type="info"
            position="top-left"
          />
        </div>
      `,
    }
  },
}

/** 不同位置 */
export const 不同位置: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const show = ref({ tr: false, tl: false, br: false, bl: false })
        return { show }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton @click="show.tr = true">右上角</CpButton>
          <CpButton @click="show.tl = true">左上角</CpButton>
          <CpButton @click="show.br = true">右下角</CpButton>
          <CpButton @click="show.bl = true">左下角</CpButton>

          <CpNotification v-model="show.tr" title="右上角" message="position: top-right" type="primary" position="top-right" />
          <CpNotification v-model="show.tl" title="左上角" message="position: top-left" type="success" position="top-left" />
          <CpNotification v-model="show.br" title="右下角" message="position: bottom-right" type="warning" position="bottom-right" />
          <CpNotification v-model="show.bl" title="左下角" message="position: bottom-left" type="error" position="bottom-left" />
        </div>
      `,
    }
  },
}

/** 变体与形状 */
export const 变体与形状: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const show = ref({
          solidClip: false,
          solidRound: false,
          semiClip: false,
          outlineNoClip: false,
        })
        return { show }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton @click="show.solidClip = true">Solid + Clip</CpButton>
          <CpButton @click="show.solidRound = true">Solid + Round</CpButton>
          <CpButton @click="show.semiClip = true">Semi + Clip</CpButton>
          <CpButton @click="show.outlineNoClip = true">Outline + No-clip</CpButton>

          <CpNotification v-model="show.solidClip" title="Solid Clip" message="默认的赛博朋克切角风格" type="primary" variant="solid" shape="clip" />
          <CpNotification v-model="show.solidRound" title="Solid Round" message="圆角矩形风格" type="success" variant="solid" shape="round" position="top-left" />
          <CpNotification v-model="show.semiClip" title="Semi Clip" message="半透明毛玻璃 + 切角" type="warning" variant="semi" shape="clip" position="bottom-right" />
          <CpNotification v-model="show.outlineNoClip" title="Outline No-clip" message="边框风格 + 直角" type="info" variant="outline" shape="no-clip" position="bottom-left" />
        </div>
      `,
    }
  },
}

/** 不自动关闭 */
export const 不自动关闭: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const visible = ref(false)
        return { visible }
      },
      template: `
        <div>
          <CpButton type="warning" @click="visible = true">显示（不自动关闭）</CpButton>
          <CpNotification
            v-model="visible"
            title="持久通知"
            message="此通知不会自动关闭，需手动点击关闭按钮。"
            type="warning"
            :duration="0"
          />
        </div>
      `,
    }
  },
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const visible = ref(false)
        return { visible }
      },
      template: `
        <div>
          <CpButton @click="visible = true">自定义颜色</CpButton>
          <CpNotification
            v-model="visible"
            title="自定义配色"
            message="使用自定义的颜色方案展示通知。"
            color="#ff6b9d"
            bgColor="rgba(30, 20, 40, 0.95)"
            borderColor="#ff6b9d"
            titleColor="#ffb3d0"
            textColor="#e0d0e8"
          />
        </div>
      `,
    }
  },
}

/** 自定义动画时长 */
export const 自定义动画时长: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const showFast = ref(false)
        const showSlow = ref(false)
        return { showFast, showSlow }
      },
      template: `
        <div style="display: flex; gap: 12px;">
          <CpButton @click="showFast = true">快速动画 (100ms)</CpButton>
          <CpButton @click="showSlow = true">慢速动画 (800ms)</CpButton>

          <CpNotification
            v-model="showFast"
            title="快速滑入"
            message="animationDuration: 100ms"
            type="primary"
            :animationDuration="100"
          />
          <CpNotification
            v-model="showSlow"
            title="慢速滑入"
            message="animationDuration: 800ms"
            type="success"
            position="top-left"
            :animationDuration="800"
          />
        </div>
      `,
    }
  },
}

/** HTML 内容 */
export const HTML内容: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const visible = ref(false)
        return { visible }
      },
      template: `
        <div>
          <CpButton type="info" @click="visible = true">HTML 内容</CpButton>
          <CpNotification
            v-model="visible"
            title="富文本通知"
            message="<strong style='color: #00f0ff'>SYSTEM</strong>: 检测到 <em>3 个异常进程</em>，建议立即处理。"
            type="info"
            :dangerouslyUseHTMLString="true"
          />
        </div>
      `,
    }
  },
}
