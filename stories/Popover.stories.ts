import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpPopover, CpButton, CpText } from '@cyberpunk-vue/components'

/**
 * # CpPopover 弹出提示层
 *
 * 赛博朋克风格的弹出层组件，用于文字提示或简单选择操作。
 *
 * ## 特性
 * - 📍 12 种弹出位置 (top/bottom/left/right + start/center/end)
 * - ⚡ 4 种触发方式 (hover/click/focus/manual)
 * - 🎯 Tooltip 模式 (简化样式)
 * - 🎨 赛博朋克切角设计
 * - ✨ 流畅入场动画
 */
const meta: Meta<typeof CpPopover> = {
  title: '反馈 Feedback/Popover 弹出层',
  component: CpPopover,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否显示 (v-model)',
    },
    placement: {
      control: 'select',
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end',
      ],
      description: '弹出位置',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    trigger: {
      control: 'multi-select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: '触发方式（支持多选）',
      table: {
        defaultValue: { summary: 'hover' },
      },
    },
    content: {
      control: 'text',
      description: '弹层内容',
    },
    title: {
      control: 'text',
      description: '弹层标题',
    },
    showArrow: {
      control: 'boolean',
      description: '是否显示箭头',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    offset: {
      control: { type: 'number', min: 0, max: 30 },
      description: '偏移距离 (px)',
      table: {
        defaultValue: { summary: '8' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    tooltip: {
      control: 'boolean',
      description: '启用 Tooltip 模式',
    },
    openDelay: {
      control: { type: 'number', min: 0, max: 1000 },
      description: '打开延迟 (ms)',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    closeDelay: {
      control: { type: 'number', min: 0, max: 1000 },
      description: '关闭延迟 (ms)',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    width: {
      control: 'text',
      description: '弹层宽度',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    maxWidth: {
      control: { type: 'number', min: 100, max: 600 },
      description: '弹层最大宽度',
      table: {
        defaultValue: { summary: '300' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'neon', 'ghost'],
      description: '变体样式',
      table: {
        defaultValue: { summary: 'solid' },
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
      description: '自定义主色调',
    },
    flipArrow: {
      control: 'boolean',
      description: '翻转箭头方向（true 为内嵌缺角，false 为外凸箭头）',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round'],
      description: '弹层形状',
      table: {
        defaultValue: { summary: 'clip' },
      },
    },
    transition: {
      control: 'select',
      options: ['fade', 'slide', 'slide-reverse', 'none'],
      description: '过渡动画',
      table: {
        defaultValue: { summary: 'fade' },
      },
    },
    fallback: {
      control: 'select',
      options: ['flip', 'shift', 'none'],
      description: '视口边界退避策略',
      table: {
        defaultValue: { summary: 'flip' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpPopover>

/** 基础用法 - Tooltip 模式 */
export const 基础用法: Story = {
  args: {
    content: '这是一段提示文字',
    tooltip: true,
    placement: 'top',
  },
  render: (args) => ({
    components: { CpPopover, CpButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <CpPopover v-bind="args">
          <CpButton type="primary">悬停查看提示</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 点击触发 */
export const 点击触发: Story = {
  args: {
    title: '系统通知',
    content: '您有 3 条未读消息',
    trigger: 'click',
    placement: 'bottom',
  },
  render: (args) => ({
    components: { CpPopover, CpButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <CpPopover v-bind="args">
          <CpButton type="info" variant="outline">点击打开</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 弹出位置 */
export const 弹出位置: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 100px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <!-- 顶部 -->
        <div style="display: flex; gap: 12px;">
          <CpPopover content="top-start" tooltip placement="top-start">
            <CpButton size="sm">上左</CpButton>
          </CpPopover>
          <CpPopover content="top" tooltip placement="top">
            <CpButton size="sm">上</CpButton>
          </CpPopover>
          <CpPopover content="top-end" tooltip placement="top-end">
            <CpButton size="sm">上右</CpButton>
          </CpPopover>
        </div>
        
        <!-- 左右 -->
        <div style="display: flex; gap: 180px;">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <CpPopover content="left-start" tooltip placement="left-start">
              <CpButton size="sm">左上</CpButton>
            </CpPopover>
            <CpPopover content="left" tooltip placement="left">
              <CpButton size="sm">左</CpButton>
            </CpPopover>
            <CpPopover content="left-end" tooltip placement="left-end">
              <CpButton size="sm">左下</CpButton>
            </CpPopover>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <CpPopover content="right-start" tooltip placement="right-start">
              <CpButton size="sm">右上</CpButton>
            </CpPopover>
            <CpPopover content="right" tooltip placement="right">
              <CpButton size="sm">右</CpButton>
            </CpPopover>
            <CpPopover content="right-end" tooltip placement="right-end">
              <CpButton size="sm">右下</CpButton>
            </CpPopover>
          </div>
        </div>
        
        <!-- 底部 -->
        <div style="display: flex; gap: 12px;">
          <CpPopover content="bottom-start" tooltip placement="bottom-start">
            <CpButton size="sm">下左</CpButton>
          </CpPopover>
          <CpPopover content="bottom" tooltip placement="bottom">
            <CpButton size="sm">下</CpButton>
          </CpPopover>
          <CpPopover content="bottom-end" tooltip placement="bottom-end">
            <CpButton size="sm">下右</CpButton>
          </CpPopover>
        </div>
      </div>
    `,
  }),
}

/** 触发方式 */
export const 触发方式: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 60px; display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
        <CpPopover content="鼠标悬停触发" tooltip trigger="hover">
          <CpButton>Hover 触发</CpButton>
        </CpPopover>
        
        <CpPopover content="鼠标点击触发" tooltip trigger="click">
          <CpButton type="primary">Click 触发</CpButton>
        </CpPopover>
        
        <CpPopover content="聚焦时触发" tooltip trigger="focus">
          <CpButton type="info" variant="outline">Focus 触发</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** Popover 模式 (带标题) */
export const Popover模式: Story = {
  render: () => ({
    components: { CpPopover, CpButton, CpText },
    template: `
      <div style="padding: 60px; display: flex; gap: 20px; justify-content: center;">
        <CpPopover 
          title="用户信息" 
          trigger="click" 
          placement="bottom"
          :max-width="250"
        >
          <template #content>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <CpText>用户名：CyberPilot</CpText>
              <CpText size="sm" type="secondary">ID: #00FF41</CpText>
              <CpText size="sm" type="secondary">状态：在线</CpText>
            </div>
          </template>
          <CpButton type="primary" variant="outline">查看用户</CpButton>
        </CpPopover>
        
        <CpPopover 
          title="系统状态" 
          trigger="click" 
          placement="bottom-end"
          :max-width="280"
        >
          <template #content>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <CpText size="sm">CPU: 45%</CpText>
              <CpText size="sm">内存: 8.2GB / 16GB</CpText>
              <CpText size="sm">网络: 稳定</CpText>
            </div>
          </template>
          <CpButton type="success" variant="semi">系统监控</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 禁用状态 */
export const 禁用状态: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 60px; display: flex; gap: 20px; justify-content: center;">
        <CpPopover content="可以显示" tooltip>
          <CpButton>正常状态</CpButton>
        </CpPopover>
        
        <CpPopover content="不会显示" tooltip disabled>
          <CpButton type="default">禁用弹层</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 自定义宽度 */
export const 自定义宽度: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 60px; display: flex; gap: 20px; justify-content: center;">
        <CpPopover 
          title="固定宽度" 
          content="这个弹层有固定的宽度 (200px)，内容会自动换行显示。"
          :width="200"
          trigger="click"
        >
          <CpButton>固定宽度</CpButton>
        </CpPopover>
        
        <CpPopover 
          title="限制最大宽度" 
          content="这个弹层最大宽度为 400px，当内容较多时会自动换行，保持良好的阅读体验。这是一段较长的文字用于演示效果。"
          :max-width="400"
          trigger="click"
        >
          <CpButton type="primary">限制最大宽度</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 滚动跟随 */
export const 滚动跟随: Story = {
  render: () => ({
    components: { CpPopover, CpButton, CpText },
    template: `
      <div style="height: 300px; overflow: auto; border: 1px dashed var(--cp-border); padding: 20px; position: relative;">
        <div style="height: 600px; padding-top: 100px;">
          <CpText block style="margin-bottom: 20px;">请滚动下方区域查看弹层如何跟随元素：</CpText>
          <CpPopover title="跟随滚动" content="我应该始终保持在按钮上方，即使在局部滚动容器中。" trigger="click">
            <CpButton type="primary">点击并滚动</CpButton>
          </CpPopover>
          <div style="height: 400px;"></div>
          <CpPopover content="底部提示" tooltip placement="bottom">
            <CpButton variant="outline">底部悬停</CpButton>
          </CpPopover>
        </div>
      </div>
      <div style="height: 1000px; padding-top: 50px;">
        <CpText block>这是外部页面滚动测试：</CpText>
        <CpPopover content="全局滚动测试" tooltip>
          <CpButton type="success">悬停我并滚动页面</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 变体样式 */
export const 变体样式: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 60px; display: flex; gap: 40px; justify-content: center; flex-wrap: wrap;">
        <CpPopover title="Solid (Default)" content="这是默认的实心变体样式" variant="solid" trigger="click">
          <CpButton>Solid 变体</CpButton>
        </CpPopover>
        
        <CpPopover title="Outline" content="这是边框发光变体样式" variant="outline" trigger="click">
          <CpButton type="primary">Outline 变体</CpButton>
        </CpPopover>
        
        <CpPopover title="Neon" content="这是霓虹超级发光变体样式" variant="neon" trigger="click">
          <CpButton type="success">Neon 变体</CpButton>
        </CpPopover>
        
        <CpPopover title="Ghost" content="这是极简虚幻变体样式" variant="ghost" trigger="click">
          <CpButton type="info">Ghost 变体</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 主题颜色 */
export const 主题颜色: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 60px; display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
        <CpPopover content="Primary 类型" type="primary" tooltip>
          <CpButton type="primary">Primary</CpButton>
        </CpPopover>
        
        <CpPopover content="Success 类型" type="success" tooltip>
          <CpButton type="success">Success</CpButton>
        </CpPopover>
        
        <CpPopover content="Warning 类型" type="warning" tooltip>
          <CpButton type="warning">Warning</CpButton>
        </CpPopover>
        
        <CpPopover content="Error 类型" type="error" tooltip>
          <CpButton type="error">Error</CpButton>
        </CpPopover>
        
        <CpPopover content="自定义紫色" color="#bf00ff" tooltip>
          <CpButton color="#bf00ff">Custom Color</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 混合演示 */
export const 混合演示: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 60px; display: flex; gap: 30px; justify-content: center; flex-wrap: wrap;">
        <CpPopover title="Neon Warning" content="高能警告：探测到未知信号" variant="neon" type="warning" trigger="click">
          <CpButton type="warning">Neon Warning</CpButton>
        </CpPopover>
        
        <CpPopover title="Outline Success" content="系统自检完成，一切正常" variant="outline" type="success" trigger="click">
          <CpButton type="success" variant="outline">Outline Success</CpButton>
        </CpPopover>
        <CpPopover title="Solid Error" content="核心熔毁警告，立即撤离！" variant="solid" type="error" trigger="click">
          <CpButton type="error" variant="semi">Solid Error</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 翻转箭头 (Flip Arrow) */
export const 翻转箭头: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 100px; display: flex; gap: 60px; justify-content: center; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 24px; align-items: center;">
          <CpButton size="sm" style="pointer-events: none;">内嵌缺角 (flipArrow=true)</CpButton>
          
          <CpPopover content="箭头内嵌成缺角" placement="top" :flip-arrow="true" tooltip>
            <CpButton type="primary">Top ▲</CpButton>
          </CpPopover>

          <CpPopover content="箭头内嵌成缺角" placement="bottom" :flip-arrow="true" tooltip>
            <CpButton type="primary">Bottom ▼</CpButton>
          </CpPopover>
          
          <div style="display: flex; gap: 16px;">
            <CpPopover content="箭头内嵌成缺角" placement="left" :flip-arrow="true" tooltip>
              <CpButton type="primary">Left ◀</CpButton>
            </CpPopover>
            <CpPopover content="箭头内嵌成缺角" placement="right" :flip-arrow="true" tooltip>
              <CpButton type="primary">Right ▶</CpButton>
            </CpPopover>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 24px; align-items: center;">
          <CpButton size="sm" style="pointer-events: none;">指向触发器 (flipArrow=false)</CpButton>
          
          <CpPopover content="箭头指向触发器" placement="top" :flip-arrow="false" tooltip>
            <CpButton>Top ▲</CpButton>
          </CpPopover>
          
          <CpPopover content="箭头指向触发器" placement="bottom" :flip-arrow="false" tooltip>
            <CpButton>Bottom ▼</CpButton>
          </CpPopover>

          <div style="display: flex; gap: 16px;">
            <CpPopover content="箭头指向触发器" placement="left" :flip-arrow="false" tooltip>
              <CpButton>Left ◀</CpButton>
            </CpPopover>
            <CpPopover content="箭头指向触发器" placement="right" :flip-arrow="false" tooltip>
              <CpButton>Right ▶</CpButton>
            </CpPopover>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 弹层形状 */
export const 弹层形状: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 80px; display: flex; gap: 40px; justify-content: center; flex-wrap: wrap;">
        <CpPopover title="Clip (默认)" content="赛博朋克切角样式" shape="clip" trigger="click">
          <CpButton type="primary">Shape: clip</CpButton>
        </CpPopover>
        
        <CpPopover title="No-Clip" content="直角矩形样式，无切角" shape="no-clip" trigger="click">
          <CpButton type="primary" variant="outline">Shape: no-clip</CpButton>
        </CpPopover>
        
        <CpPopover title="Round" content="圆角矩形样式" shape="round" trigger="click">
          <CpButton type="primary" variant="outline">Shape: round</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}

/** 过渡动画 */
export const 过渡动画: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="padding: 80px; display: flex; flex-direction: column; gap: 40px; align-items: center;">
        <div style="display: flex; gap: 30px; align-items: center; flex-wrap: wrap; justify-content: center;">
          <CpButton size="sm" style="pointer-events: none; min-width: 140px;">fade (默认)</CpButton>
          <CpPopover content="从中心缩放" tooltip transition="fade" placement="top">
            <CpButton type="primary">Top</CpButton>
          </CpPopover>
          <CpPopover content="从中心缩放" tooltip transition="fade" placement="bottom">
            <CpButton type="primary">Bottom</CpButton>
          </CpPopover>
          <CpPopover content="从中心缩放" tooltip transition="fade" placement="left">
            <CpButton type="primary">Left</CpButton>
          </CpPopover>
          <CpPopover content="从中心缩放" tooltip transition="fade" placement="right">
            <CpButton type="primary">Right</CpButton>
          </CpPopover>
        </div>

        <div style="display: flex; gap: 30px; align-items: center; flex-wrap: wrap; justify-content: center;">
          <CpButton size="sm" style="pointer-events: none; min-width: 140px;">slide</CpButton>
          <CpPopover content="从上方滑入" tooltip transition="slide" placement="top">
            <CpButton type="success">Top</CpButton>
          </CpPopover>
          <CpPopover content="从下方滑入" tooltip transition="slide" placement="bottom">
            <CpButton type="success">Bottom</CpButton>
          </CpPopover>
          <CpPopover content="从左方滑入" tooltip transition="slide" placement="left">
            <CpButton type="success">Left</CpButton>
          </CpPopover>
          <CpPopover content="从右方滑入" tooltip transition="slide" placement="right">
            <CpButton type="success">Right</CpButton>
          </CpPopover>
        </div>

        <div style="display: flex; gap: 30px; align-items: center; flex-wrap: wrap; justify-content: center;">
          <CpButton size="sm" style="pointer-events: none; min-width: 140px;">slide-reverse</CpButton>
          <CpPopover content="从下方滑入（反向）" tooltip transition="slide-reverse" placement="top">
            <CpButton type="warning">Top</CpButton>
          </CpPopover>
          <CpPopover content="从上方滑入（反向）" tooltip transition="slide-reverse" placement="bottom">
            <CpButton type="warning">Bottom</CpButton>
          </CpPopover>
          <CpPopover content="从右方滑入（反向）" tooltip transition="slide-reverse" placement="left">
            <CpButton type="warning">Left</CpButton>
          </CpPopover>
          <CpPopover content="从左方滑入（反向）" tooltip transition="slide-reverse" placement="right">
            <CpButton type="warning">Right</CpButton>
          </CpPopover>
        </div>

        <div style="display: flex; gap: 30px; align-items: center; flex-wrap: wrap; justify-content: center;">
          <CpButton size="sm" style="pointer-events: none; min-width: 140px;">none</CpButton>
          <CpPopover content="无动画，直接显示" tooltip transition="none" placement="top">
            <CpButton>Top</CpButton>
          </CpPopover>
          <CpPopover content="无动画，直接显示" tooltip transition="none" placement="bottom">
            <CpButton>Bottom</CpButton>
          </CpPopover>
        </div>
      </div>
    `,
  }),
}

/** 退避行为 */
export const 退避行为: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="position: relative; height: 100vh; width: 100%;">
        <p style="text-align: center; padding-top: 40px; color: var(--cp-text-color-secondary);">
          按钮使用 position: fixed 固定在视口角落，<br/>
          悬停查看退避效果
        </p>

        <!-- ===== Flip 模式 ===== -->
        <div style="position: fixed; top: 8px; left: 8px; z-index: 9999;">
          <CpPopover content="placement=top，顶部空间不足 → 翻转到 bottom" tooltip placement="top" fallback="flip" transition="slide">
            <CpButton type="primary" size="sm">↑ Top Flip</CpButton>
          </CpPopover>
        </div>

        <div style="position: fixed; top: 8px; right: 8px; z-index: 9999;">
          <CpPopover content="placement=right，右侧空间不足 → 翻转到 left" tooltip placement="right" fallback="flip" transition="slide">
            <CpButton type="primary" size="sm">→ Right Flip</CpButton>
          </CpPopover>
        </div>

        <div style="position: fixed; bottom: 8px; left: 8px; z-index: 9999;">
          <CpPopover content="placement=left，左侧空间不足 → 翻转到 right" tooltip placement="left" fallback="flip" transition="slide">
            <CpButton type="primary" size="sm">← Left Flip</CpButton>
          </CpPopover>
        </div>

        <div style="position: fixed; bottom: 8px; right: 8px; z-index: 9999;">
          <CpPopover content="placement=bottom，底部空间不足 → 翻转到 top" tooltip placement="bottom" fallback="flip" transition="slide">
            <CpButton type="success" size="sm">↓ Bottom Flip</CpButton>
          </CpPopover>
        </div>

        <!-- ===== Shift 模式 ===== -->
        <div style="position: fixed; top: 50%; left: 8px; transform: translateY(-50%); z-index: 9999;">
          <CpPopover content="placement=top 始终向上，但水平方向被钳制在视口内" tooltip placement="top" fallback="shift" :max-width="320">
            <CpButton type="warning" size="sm">↑ Top Shift (左边缘)</CpButton>
          </CpPopover>
        </div>

        <div style="position: fixed; top: 50%; right: 8px; transform: translateY(-50%); z-index: 9999;">
          <CpPopover content="placement=top 始终向上，但水平方向被钳制在视口内" tooltip placement="top" fallback="shift" :max-width="320">
            <CpButton type="warning" size="sm">↑ Top Shift (右边缘)</CpButton>
          </CpPopover>
        </div>
      </div>
    `,
  }),
}

/** 多触发模式 */
export const 多触发模式: Story = {
  render: () => ({
    components: { CpPopover, CpButton },
    template: `
      <div style="display: flex; gap: 40px; padding: 80px 40px; flex-wrap: wrap;">
        <CpPopover
          content="hover 进入 → hover 离开关闭；click 进入 → click 关闭。两者独立。"
          :trigger="['hover', 'click']"
          transition="slide"
          placement="top"
        >
          <CpButton type="primary">hover + click</CpButton>
        </CpPopover>

        <CpPopover
          content="可同时由 hover/focus/click 任一方式打开，按对应方式关闭"
          :trigger="['hover', 'click', 'focus']"
          transition="slide"
          placement="bottom"
        >
          <CpButton type="success">hover + click + focus</CpButton>
        </CpPopover>

        <CpPopover
          content="仅点击打开/关闭（单触发——兼容原有行为）"
          trigger="click"
          placement="bottom"
        >
          <CpButton type="warning">仅 click</CpButton>
        </CpPopover>
      </div>
    `,
  }),
}
