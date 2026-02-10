import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpDialog, CpButton, CpText, CpInput, CpSwitch } from '@cyberpunk-vue/components'

/**
 * # CpDialog 模态对话框
 *
 * 赛博朋克风格模态对话框组件，用于在保留页面上下文的情况下展示重要交互内容。
 *
 * ## 特性
 * - 🎨 多种变体 (solid / semi / outline)
 * - ✂️ 切角/直角/圆角形状
 * - 🌈 主题色 (primary / success / warning / error / info)
 * - 🎯 全屏模式
 * - 🖱️ 拖拽移动
 * - 🔧 高度可定制 (颜色/样式/class)
 * - 🎬 流畅入场/出场动画
 */
const meta: Meta<typeof CpDialog> = {
  title: '反馈 Feedback/Dialog 对话框',
  component: CpDialog,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否显示 (v-model)',
    },
    title: {
      control: 'text',
      description: '对话框标题',
    },
    width: {
      control: 'text',
      description: '宽度',
      table: { defaultValue: { summary: '520px' } },
    },
    top: {
      control: 'text',
      description: '距顶部距离',
      table: { defaultValue: { summary: '15vh' } },
    },
    fullscreen: {
      control: 'boolean',
      description: '全屏模式',
    },
    modal: {
      control: 'boolean',
      description: '是否显示遮罩',
    },
    closeOnClickModal: {
      control: 'boolean',
      description: '点击遮罩关闭',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'ESC 关闭',
    },
    showClose: {
      control: 'boolean',
      description: '显示关闭按钮',
    },
    draggable: {
      control: 'boolean',
      description: '可拖拽',
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
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '主题色',
      table: { defaultValue: { summary: 'default' } },
    },
    center: {
      control: 'boolean',
      description: '居中布局',
    },
    headerBorder: {
      control: 'boolean',
      description: '头部分隔线',
    },
    footerBorder: {
      control: 'boolean',
      description: '底部分隔线',
    },
    confirmText: {
      control: 'text',
      description: '确认按钮文本',
      table: { defaultValue: { summary: '确认' } },
    },
    cancelText: {
      control: 'text',
      description: '取消按钮文本',
      table: { defaultValue: { summary: '取消' } },
    },
    showConfirmButton: {
      control: 'boolean',
      description: '显示确认按钮',
      table: { defaultValue: { summary: 'true' } },
    },
    showCancelButton: {
      control: 'boolean',
      description: '显示取消按钮',
      table: { defaultValue: { summary: 'true' } },
    },
    color: {
      control: 'color',
      description: '自定义主色调',
    },
    bgColor: {
      control: 'color',
      description: '自定义背景颜色',
    },
    borderColor: {
      control: 'color',
      description: '自定义边框颜色',
    },
    titleColor: {
      control: 'color',
      description: '标题文字颜色',
    },
    textColor: {
      control: 'color',
      description: '内容区文字颜色',
    },
    overlayColor: {
      control: 'color',
      description: '遮罩颜色',
    },
    closeColor: {
      control: 'color',
      description: '关闭按钮颜色',
    },
    alignCenter: {
      control: 'boolean',
      description: '垂直居中布局',
    },
    appendToBody: {
      control: 'boolean',
      description: '是否挂载到 body',
      table: { defaultValue: { summary: 'true' } },
    },
    beforeClose: {
      control: false,
      description: '关闭前回调 (done: () => void) => void',
    },
    overflow: {
      control: 'boolean',
      description: '拖拽时允许超出视口',
      table: { defaultValue: { summary: 'false' } },
    },
    modalClass: {
      control: 'text',
      description: '遮罩层追加 class',
    },
    zIndex: {
      control: { type: 'number', min: 1, max: 10000 },
      description: 'z-index',
      table: { defaultValue: { summary: '2000' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpDialog>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    title: '系统通知',
    variant: 'solid',
    shape: 'clip',
    type: 'default',
    showClose: true,
    closeOnClickModal: true,
    closeOnEscape: true,
    headerBorder: true,
    footerBorder: true,
    center: false,
    draggable: false,
    fullscreen: false,
    width: '520px',
    top: '15vh',
    alignCenter: true,
    appendToBody: true,
  },
  render: (args) => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible, args }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="primary" @click="visible = true">打开对话框</CpButton>
        <CpDialog v-model="visible" v-bind="args">
          <CpText>这是一条来自赛博空间的通知消息。请确认您的操作。</CpText>
        </CpDialog>
      </div>
    `,
  }),
}

/** 自定义内容 - 表单 */
export const 自定义内容: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText, CpInput, CpSwitch },
    setup() {
      const visible = ref(false)
      const username = ref('')
      const password = ref('')
      return { visible, username, password }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="primary" variant="outline" @click="visible = true">用户登录</CpButton>
        <CpDialog v-model="visible" title="身份验证" width="420px" type="primary">
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <CpText size="sm" style="margin-bottom: 6px; display: block;">用户名</CpText>
              <CpInput v-model="username" placeholder="请输入用户名" />
            </div>
            <div>
              <CpText size="sm" style="margin-bottom: 6px; display: block;">密码</CpText>
              <CpInput v-model="password" placeholder="请输入密码" type="password" />
            </div>
          </div>
          <template #footer>
            <CpButton @click="visible = false">取消</CpButton>
            <CpButton type="primary" @click="visible = false">登录</CpButton>
          </template>
        </CpDialog>
      </div>
    `,
  }),
}

/** 主题色 */
export const 主题色变体: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visibleMap = ref<Record<string, boolean>>({
        primary: false,
        success: false,
        warning: false,
        error: false,
        info: false,
      })
      return { visibleMap }
    },
    template: `
      <div style="padding: 40px; display: flex; gap: 12px; flex-wrap: wrap;">
        <CpButton type="primary" @click="visibleMap.primary = true">Primary</CpButton>
        <CpButton type="success" @click="visibleMap.success = true">Success</CpButton>
        <CpButton type="warning" @click="visibleMap.warning = true">Warning</CpButton>
        <CpButton type="error" @click="visibleMap.error = true">Error</CpButton>
        <CpButton type="info" @click="visibleMap.info = true">Info</CpButton>

        <CpDialog v-model="visibleMap.primary" title="Primary 对话框" type="primary" width="400px">
          <CpText>这是 Primary 主题色的对话框。</CpText>
        </CpDialog>

        <CpDialog v-model="visibleMap.success" title="Success 对话框" type="success" width="400px">
          <CpText>操作执行成功！</CpText>
        </CpDialog>

        <CpDialog v-model="visibleMap.warning" title="Warning 对话框" type="warning" width="400px">
          <CpText>请注意，此操作可能有风险。</CpText>
        </CpDialog>

        <CpDialog v-model="visibleMap.error" title="Error 对话框" type="error" width="400px">
          <CpText>系统检测到异常，请立即处理。</CpText>
        </CpDialog>

        <CpDialog v-model="visibleMap.info" title="Info 对话框" type="info" width="400px" confirm-text="知道了" :show-cancel-button="false">
          <CpText>这是一条信息提示。</CpText>
        </CpDialog>
      </div>
    `,
  }),
}

/** 变体与形状 */
export const 变体与形状: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const variants = ['solid', 'semi', 'outline'] as const
      const shapes = ['clip', 'no-clip', 'round'] as const
      const active = ref({ variant: 'solid' as string, shape: 'clip' as string })
      const visible = ref(false)
      const open = (v: string, s: string) => {
        active.value = { variant: v, shape: s }
        visible.value = true
      }
      return { variants, shapes, active, visible, open }
    },
    template: `
      <div style="padding: 40px;">
        <div v-for="v in variants" :key="v" style="margin-bottom: 16px;">
          <CpText block style="margin-bottom: 8px; text-transform: capitalize; font-weight: 600;">{{ v }}</CpText>
          <div style="display: flex; gap: 8px;">
            <CpButton v-for="s in shapes" :key="s" size="sm" variant="outline" @click="open(v, s)">
              {{ v }} / {{ s }}
            </CpButton>
          </div>
        </div>

        <CpDialog
          v-model="visible"
          :title="active.variant + ' / ' + active.shape"
          :variant="active.variant"
          :shape="active.shape"
          type="primary"
          width="440px"
        >
          <CpText>变体: <strong>{{ active.variant }}</strong></CpText>
          <CpText>形状: <strong>{{ active.shape }}</strong></CpText>
          <template #footer>
            <CpButton type="primary" @click="visible = false">关闭</CpButton>
          </template>
        </CpDialog>
      </div>
    `,
  }),
}

/** 全屏模式 */
export const 全屏模式: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="info" @click="visible = true">全屏对话框</CpButton>
        <CpDialog v-model="visible" title="全屏模式" fullscreen type="info">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
            <CpText size="lg">全屏内容区域</CpText>
          </div>
        </CpDialog>
      </div>
    `,
  }),
}

/** 顶部对齐 */
export const 顶部对齐: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="primary" @click="visible = true">顶部对齐</CpButton>
        <CpDialog v-model="visible" title="顶部对齐" :align-center="false" type="primary" width="380px" top="15vh">
          <CpText>对话框现在距离顶部 15vh (align-center="false")。</CpText>
        </CpDialog>
      </div>
    `,
  }),
}

/** 居中布局 */
export const 居中布局: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="warning" @click="visible = true">居中对话框 (内容居中)</CpButton>
        <CpDialog v-model="visible" title="确认操作" center type="warning" width="380px">
          <div style="text-align: center;">
            <CpText>确定要执行此操作吗？此操作不可撤销。</CpText>
          </div>
        </CpDialog>
      </div>
    `,
  }),
}

/** 可拖拽 */
export const 可拖拽: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="success" @click="visible = true">可拖拽对话框</CpButton>
        <CpDialog v-model="visible" title="拖拽移动" draggable type="success" width="420px">
          <CpText>拖拽标题栏可以移动对话框位置。</CpText>
        </CpDialog>
      </div>
    `,
  }),
}

/** 嵌套对话框 */
export const 嵌套对话框: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const outer = ref(false)
      const inner = ref(false)
      return { outer, inner }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="primary" @click="outer = true">打开外层</CpButton>
        <CpDialog v-model="outer" title="外层对话框" type="primary" width="500px">
          <CpText>这是外层对话框的内容。</CpText>
          <CpButton type="info" style="margin-top: 12px;" @click="inner = true">打开内层</CpButton>
          <CpDialog v-model="inner" title="内层对话框" type="info" width="360px" :z-index="2100">
            <CpText>这是内层嵌套的对话框。</CpText>
            <template #footer>
              <CpButton type="info" @click="inner = false">关闭内层</CpButton>
            </template>
          </CpDialog>
          <template #footer>
            <CpButton @click="outer = false">关闭外层</CpButton>
          </template>
        </CpDialog>
      </div>
    `,
  }),
}

/** 自定义颜色与样式 */
export const 自定义颜色与样式: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton @click="visible = true" style="background: #ff6ec7; color: #0a0a0f; border-color: #ff6ec7;">自定义风格</CpButton>
        <CpDialog
          v-model="visible"
          title="自定义颜色"
          color="#ff6ec7"
          bg-color="rgba(20, 10, 25, 0.95)"
          title-color="#ff6ec7"
          text-color="#e0b0d0"
          overlay-color="rgba(30, 5, 20, 0.8)"
          close-color="#ff6ec7"
          header-divider-color="rgba(255, 110, 199, 0.3)"
          footer-divider-color="rgba(255, 110, 199, 0.3)"
          border-color="rgba(255, 110, 199, 0.4)"
          width="460px"
          shape="round"
          :body-style="{ padding: '24px 28px' }"
          :header-style="{ padding: '16px 28px' }"
        >
          <CpText>这是一个完全自定义颜色和样式的对话框。</CpText>
          <CpText size="sm" style="margin-top: 8px; opacity: 0.7;">所有颜色、padding、class 均可单独定制。</CpText>
          <template #footer>
            <CpButton @click="visible = false">关闭</CpButton>
          </template>
        </CpDialog>
      </div>
    `,
  }),
}

/** 无头部 / 无底部 */
export const 极简模式: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton variant="outline" @click="visible = true">极简对话框</CpButton>
        <CpDialog v-model="visible" :show-close="false" width="360px" :header-border="false" :footer-border="false">
          <div style="text-align: center; padding: 20px 0;">
            <CpText size="lg" style="display: block; margin-bottom: 12px; font-weight: 600;">操作完成</CpText>
            <CpText>任务已成功执行。</CpText>
            <CpButton type="primary" style="margin-top: 20px;" @click="visible = false">好的</CpButton>
          </div>
        </CpDialog>
      </div>
    `,
  }),
}

/** 禁止关闭反馈 - 点击遮罩或按 ESC 时抖动提示 */
export const 禁止关闭反馈: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="error" @click="visible = true">必须处理的对话框</CpButton>
        <CpDialog
          v-model="visible"
          title="重要确认"
          type="error"
          width="420px"
          :close-on-click-modal="false"
          :close-on-escape="false"
          :show-close="false"
        >
          <CpText>此操作需要您明确确认，无法通过 ESC 或点击遮罩关闭。</CpText>
          <CpText size="sm" style="margin-top: 8px; opacity: 0.6;">尝试点击遮罩或按 ESC 查看抖动反馈效果。</CpText>
          <template #footer>
            <CpButton type="error" @click="visible = false">我已确认</CpButton>
          </template>
        </CpDialog>
      </div>
    `,
  }),
}

/** 挂载到 body 控制 */
export const 挂载到Body: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visibleBody = ref(false)
      const visibleInline = ref(false)
      return { visibleBody, visibleInline }
    },
    template: `
      <div style="padding: 40px;">
        <div style="display: flex; gap: 12px; margin-bottom: 20px;">
          <CpButton type="primary" @click="visibleBody = true">挂载到 body（默认）</CpButton>
          <CpButton type="info" @click="visibleInline = true">原地渲染（不挂载到 body）</CpButton>
        </div>

        <CpDialog v-model="visibleBody" title="挂载到 body" type="primary" width="400px">
          <CpText>此对话框 Teleport 到 body（默认行为）。</CpText>
          <CpText size="sm" style="margin-top: 8px; opacity: 0.6;">打开 DevTools 可以看到此对话框渲染在 body 下。</CpText>
        </CpDialog>

        <div style="position: relative; border: 1px dashed rgba(0,240,255,0.3); padding: 20px; margin-top: 16px; min-height: 80px;">
          <CpText size="sm" style="opacity: 0.5;">内联容器区域</CpText>
          <CpDialog
            v-model="visibleInline"
            title="原地渲染"
            type="info"
            width="400px"
            :append-to-body="false"
          >
            <CpText>此对话框未 Teleport，原地渲染在父组件中。</CpText>
            <CpText size="sm" style="margin-top: 8px; opacity: 0.6;">打开 DevTools 可以看到此对话框渲染在当前组件树中。</CpText>
          </CpDialog>
        </div>
      </div>
    `,
  }),
}

/** beforeClose 关闭前确认 */
export const 关闭前确认: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      const confirmVisible = ref(false)

      const handleBeforeClose = (done: () => void) => {
        confirmVisible.value = true
        // done 函数保存起来，二次确认后调用
        ;(window as any).__dialogDone = done
      }

      const confirmClose = () => {
        confirmVisible.value = false
        const done = (window as any).__dialogDone
        if (done) done()
      }

      const cancelClose = () => {
        confirmVisible.value = false
      }

      return { visible, confirmVisible, handleBeforeClose, confirmClose, cancelClose }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="warning" @click="visible = true">打开带关闭确认的对话框</CpButton>
        <CpDialog
          v-model="visible"
          title="重要数据编辑"
          type="warning"
          width="460px"
          :beforeClose="handleBeforeClose"
        >
          <CpText>此对话框关闭前会弹出二次确认。</CpText>
          <CpText size="sm" style="margin-top: 8px; opacity: 0.6;">尝试点击关闭按钮、遮罩或按 ESC。</CpText>
        </CpDialog>

        <CpDialog
          v-model="confirmVisible"
          title="确认关闭？"
          type="error"
          width="340px"
          :z-index="2100"
          :show-cancel-button="false"
          :show-confirm-button="false"
        >
          <CpText>确定要关闭吗？未保存的更改将丢失。</CpText>
          <template #footer>
            <CpButton @click="cancelClose">取消</CpButton>
            <CpButton type="error" @click="confirmClose">确认关闭</CpButton>
          </template>
        </CpDialog>
      </div>
    `,
  }),
}

/** 垂直居中 + 内容居中组合 */
export const 垂直且内容居中: Story = {
  render: () => ({
    components: { CpDialog, CpButton, CpText },
    setup() {
      const visible = ref(false)
      return { visible }
    },
    template: `
      <div style="padding: 40px;">
        <CpButton type="success" @click="visible = true">垂直 + 内容居中</CpButton>
        <CpDialog
          v-model="visible"
          title="完全居中"
          align-center
          center
          type="success"
          width="380px"
        >
          <div style="text-align: center;">
            <CpText>对话框垂直居中于屏幕，标题和按钮也内容居中。</CpText>
          </div>
        </CpDialog>
      </div>
    `,
  }),
}
