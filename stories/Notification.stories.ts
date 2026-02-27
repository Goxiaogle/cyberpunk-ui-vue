import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { h, ref } from 'vue'
import { CpNotification, CpNotify, CpButton, CpTag } from '@cyberpunk-vue/components'

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
 * - 🔧 支持函数式 CpNotify() 与组件式 CpNotification 两种用法
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
    selectable: {
      control: 'boolean',
      description: '是否允许选中消息文本',
      table: { defaultValue: { summary: 'false' } },
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

// ===================================================================
// 函数式调用示例
// ===================================================================

/** 基础用法 */
export const 基础用法: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        const open = () => CpNotify({ title: '系统通知', message: '你有一条新的系统消息，请注意查收。' })
        return { open }
      },
      template: `<CpButton type="primary" @click="open">显示通知</CpButton>`,
    }
  },
}

/** 主题色变体 */
export const 主题色变体: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        return {
          primary: () => CpNotify({ title: '主要通知', message: '这是一条主要类型的通知消息。', type: 'primary' }),
          success: () => CpNotify.success({ title: '操作成功', message: '你的数据已成功保存至系统。' }),
          warning: () => CpNotify.warning({ title: '系统警告', message: '磁盘空间即将耗尽，请及时清理。' }),
          error: () => CpNotify.error({ title: '系统错误', message: '连接至主服务器失败，请检查网络状态。' }),
          info: () => CpNotify.info({ title: '信息提示', message: '系统将在 30 分钟后进行维护更新。' }),
        }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary" @click="primary">Primary</CpButton>
          <CpButton type="success" @click="success">Success</CpButton>
          <CpButton type="warning" @click="warning">Warning</CpButton>
          <CpButton type="error" @click="error">Error</CpButton>
          <CpButton type="info" @click="info">Info</CpButton>
        </div>
      `,
    }
  },
}

/** 不同位置 */
export const 不同位置: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        return {
          tr: () => CpNotify({ title: '右上角', message: 'position: top-right', type: 'primary', position: 'top-right' }),
          tl: () => CpNotify({ title: '左上角', message: 'position: top-left', type: 'success', position: 'top-left' }),
          br: () => CpNotify({ title: '右下角', message: 'position: bottom-right', type: 'warning', position: 'bottom-right' }),
          bl: () => CpNotify({ title: '左下角', message: 'position: bottom-left', type: 'error', position: 'bottom-left' }),
        }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton @click="tr">右上角</CpButton>
          <CpButton @click="tl">左上角</CpButton>
          <CpButton @click="br">右下角</CpButton>
          <CpButton @click="bl">左下角</CpButton>
        </div>
      `,
    }
  },
}

/** 变体与形状 */
export const 变体与形状: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        return {
          solidClip: () => CpNotify({ title: 'Solid Clip', message: '默认的赛博朋克切角风格', type: 'primary', variant: 'solid', shape: 'clip' }),
          solidRound: () => CpNotify({ title: 'Solid Round', message: '圆角矩形风格', type: 'success', variant: 'solid', shape: 'round' }),
          semiClip: () => CpNotify({ title: 'Semi Clip', message: '半透明毛玻璃 + 切角', type: 'warning', variant: 'semi', shape: 'clip' }),
          outlineNoClip: () => CpNotify({ title: 'Outline No-clip', message: '边框风格 + 直角', type: 'info', variant: 'outline', shape: 'no-clip' }),
        }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton @click="solidClip">Solid + Clip</CpButton>
          <CpButton @click="solidRound">Solid + Round</CpButton>
          <CpButton @click="semiClip">Semi + Clip</CpButton>
          <CpButton @click="outlineNoClip">Outline + No-clip</CpButton>
        </div>
      `,
    }
  },
}

/** 不自动关闭 */
export const 不自动关闭: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        const open = () => CpNotify({ title: '持久通知', message: '此通知不会自动关闭，需手动点击关闭按钮。', type: 'warning', duration: 0 })
        return { open }
      },
      template: `<CpButton type="warning" @click="open">显示（不自动关闭）</CpButton>`,
    }
  },
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        const open = () => CpNotify({
          title: '自定义配色',
          message: '使用自定义的颜色方案展示通知。',
          color: '#ff6b9d',
          bgColor: 'rgba(30, 20, 40, 0.95)',
          borderColor: '#ff6b9d',
          titleColor: '#ffb3d0',
          textColor: '#e0d0e8',
        })
        return { open }
      },
      template: `<CpButton @click="open">自定义颜色</CpButton>`,
    }
  },
}

/** 允许选中内容 */
export const 允许选中内容: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        const openDefault = () => CpNotify({
          title: '默认（不可选中）',
          message: '该通知的文字内容无法被鼠标选中复制。',
          type: 'info',
          duration: 0,
        })
        const openSelectable = () => CpNotify({
          title: '可选中内容',
          message: '请尝试用鼠标选中这段文字并复制：CYBER-2077-XK9',
          type: 'success',
          selectable: true,
          duration: 0,
        })
        return { openDefault, openSelectable }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="info" @click="openDefault">默认（不可选）</CpButton>
          <CpButton type="success" @click="openSelectable">允许选中 (selectable)</CpButton>
        </div>
      `,
    }
  },
}

/** HTML 内容 */
export const HTML内容: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        const open = () => CpNotify({
          title: '富文本通知',
          message: `<strong style='color: #00f0ff'>SYSTEM</strong>: 检测到 <em>3 个异常进程</em>，建议立即处理。`,
          type: 'info',
          dangerouslyUseHTMLString: true,
        })
        return { open }
      },
      template: `<CpButton type="info" @click="open">HTML 内容</CpButton>`,
    }
  },
}

/** VNode / h() 渲染函数 — 使用组件库组件 */
export const VNode组件组合: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        const openSimple = () => CpNotify({
          title: 'VNode 消息',
          message: h('i', { style: 'color: #00f0ff' }, '支持使用 h() 渲染函数创建富文本消息'),
          type: 'primary',
        })

        const openWithComponents = () => {
          const handle = CpNotify({
            title: '部署完成',
            type: 'success',
            duration: 0,
            message: h('div', { style: 'display:flex;flex-direction:column;gap:8px;' }, [
              h('div', { style: 'display:flex;align-items:center;gap:6px;' }, [
                h('span', '环境：'),
                h(CpTag, { type: 'success', size: 'sm' }, () => 'Production'),
              ]),
              h('div', { style: 'display:flex;align-items:center;gap:6px;' }, [
                h('span', '版本：'),
                h(CpTag, { type: 'primary', size: 'sm', variant: 'outline' }, () => 'v2.1.0'),
              ]),
              h('div', { style: 'display:flex;align-items:center;gap:6px;margin-top:4px;' }, [
                h(CpButton, {
                  size: 'sm',
                  type: 'success',
                  onClick: () => {
                    handle.close()
                  },
                }, () => '查看详情'),
                h(CpButton, {
                  size: 'sm',
                  variant: 'outline',
                  onClick: () => handle.close(),
                }, () => '关闭'),
              ]),
            ]),
          })
        }

        const openError = () => {
          CpNotify({
            title: '构建失败',
            type: 'error',
            duration: 0,
            message: h('div', { style: 'display:flex;flex-direction:column;gap:6px;' }, [
              h('span', '3 个错误需要修复：'),
              h('div', { style: 'display:flex;gap:4px;flex-wrap:wrap;' }, [
                h(CpTag, { type: 'error', size: 'sm' }, () => 'TypeError'),
                h(CpTag, { type: 'error', size: 'sm' }, () => 'SyntaxError'),
                h(CpTag, { type: 'warning', size: 'sm' }, () => 'Warning'),
              ]),
            ]),
          })
        }

        return { openSimple, openWithComponents, openError }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary" @click="openSimple">简单 VNode</CpButton>
          <CpButton type="success" @click="openWithComponents">h() + CpTag + CpButton</CpButton>
          <CpButton type="error" @click="openError">h() + 错误标签</CpButton>
        </div>
      `,
    }
  },
}

// ===================================================================
// 函数式进阶用法（自动关闭时长、点击事件）
// ===================================================================

/** 函数式进阶：自动关闭时长与点击事件 */
export const 函数式进阶用法: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        // 演示控制自动关闭时间
        const openFast = () => CpNotify({
          title: '阅后即焚',
          message: '这条通知会在 1.5 秒后自动关闭 (duration: 1500)',
          type: 'warning',
          duration: 1500,
        })

        // 演示绑定点击事件
        const openClickable = () => {
          const handle = CpNotify({
            title: '互动通知',
            message: '点我试试！点击通知区域将触发 onClick 事件，并关闭通知。',
            type: 'primary',
            duration: 0, // 不自动关闭，等待用户点击
            onClick: () => {
              // 触发 click 回调
              alert('通知被点击了！')
              handle.close()
            }
          })
        }

        return { openFast, openClickable }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="warning" @click="openFast">控制开启时间 (1500ms)</CpButton>
          <CpButton type="primary" @click="openClickable">绑定 onClick 事件</CpButton>
        </div>
      `,
    }
  },
}

// ===================================================================
// 需要组件模板的示例（插槽、操作区）
// ===================================================================

/** 插槽用法 — 自定义 title / default / icon */
export const 插槽用法: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const show = ref({ title: false, content: false, icon: false, all: false })
        return { show }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary" @click="show.title = true">#title 插槽</CpButton>
          <CpButton type="success" @click="show.content = true">#default 插槽</CpButton>
          <CpButton type="warning" @click="show.icon = true">#icon 插槽</CpButton>
          <CpButton type="error"   @click="show.all = true">组合使用</CpButton>

          <!-- #title 插槽 -->
          <CpNotification v-model="show.title" message="标题由插槽渲染" type="primary">
            <template #title>
              <span style="display:inline-flex;align-items:center;gap:6px;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                自定义标题
              </span>
            </template>
          </CpNotification>

          <!-- #default 插槽 -->
          <CpNotification v-model="show.content" title="内容插槽" type="success" position="top-left">
            <template #default>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span>✅ 文件 <code>main.ts</code> 编译完成</span>
                <span>✅ 静态资源已同步至 CDN</span>
                <span style="opacity:0.6;font-size:12px;">耗时 1.2s</span>
              </div>
            </template>
          </CpNotification>

          <!-- #icon 插槽 -->
          <CpNotification v-model="show.icon" title="自定义图标" message="使用插槽替换默认图标" type="warning" position="bottom-right">
            <template #icon>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
              </svg>
            </template>
          </CpNotification>

          <!-- 组合使用 -->
          <CpNotification v-model="show.all" type="error" position="bottom-left" :duration="0">
            <template #icon>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"/>
              </svg>
            </template>
            <template #title>
              <span style="color:#ff4757;font-weight:700;">⚠ 严重告警</span>
            </template>
            <template #default>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <span>节点 <b>CN-SH-03</b> 已离线超过 5 分钟</span>
                <span style="opacity:0.6;font-size:12px;">请立即检查网络连接</span>
              </div>
            </template>
          </CpNotification>
        </div>
      `,
    }
  },
}

/** Click 事件绑定 */
export const Click事件: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const visible = ref(false)
        const clickCount = ref(0)
        const handleClick = () => {
          clickCount.value++
        }
        return { visible, clickCount, handleClick }
      },
      template: `
        <div>
          <CpButton type="primary" @click="visible = true">显示可点击通知</CpButton>
          <p style="margin-top: 12px; color: var(--cp-text-secondary);">
            通知被点击了 <strong style="color: var(--cp-color-primary);">{{ clickCount }}</strong> 次
            <br />
            <small>点击通知区域触发计数，点击关闭按钮不触发</small>
          </p>
          <CpNotification
            v-model="visible"
            title="点击我"
            message="点击通知区域会计数，关闭按钮不影响计数。"
            type="primary"
            :duration="0"
            @click="handleClick"
          />
        </div>
      `,
    }
  },
}

/** 操作区插槽 */
export const 操作区插槽: Story = {
  render() {
    return {
      components: { CpNotification, CpButton },
      setup() {
        const visible = ref(false)
        return { visible }
      },
      template: `
        <div>
          <CpButton type="warning" @click="visible = true">带操作按钮的通知</CpButton>
          <CpNotification
            v-model="visible"
            title="版本更新"
            message="检测到新版本 v2.0.0，包含重要安全修复和性能优化。"
            type="warning"
            :duration="0"
          >
            <template #actions>
              <CpButton size="sm" type="warning" @click="visible = false">立即更新</CpButton>
              <CpButton size="sm" variant="outline" @click="visible = false">稍后提醒</CpButton>
            </template>
          </CpNotification>
        </div>
      `,
    }
  },
}

// ===================================================================
// 堆叠与全部关闭
// ===================================================================

/** 堆叠模式 */
export const 堆叠模式: Story = {
  render() {
    return {
      components: { CpButton },
      setup() {
        let count = 0
        const types = ['primary', 'success', 'warning', 'error', 'info'] as const

        const openVertical = () => {
          count++
          CpNotify({
            title: `垂直 #${count}`,
            message: `stacking: 'vertical' — 完整排列`,
            type: types[count % 5],
            stacking: 'vertical',
            duration: 0,
          })
        }

        const openOverlap = () => {
          count++
          CpNotify({
            title: `重叠 #${count}`,
            message: `stacking: 'overlap' — 仅露出一小部分`,
            type: types[count % 5],
            stacking: 'overlap',
            duration: 0,
            position: 'top-left',
          })
        }

        const closeAll = () => CpNotify.closeAll()

        return { openVertical, openOverlap, closeAll }
      },
      template: `
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary" @click="openVertical">垂直堆叠 (右上角)</CpButton>
          <CpButton type="warning" @click="openOverlap">重叠堆叠 (左上角)</CpButton>
          <CpButton variant="outline" @click="closeAll">关闭全部</CpButton>
        </div>
      `,
    }
  },
}
