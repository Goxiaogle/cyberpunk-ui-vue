import type { Meta, StoryObj } from '@storybook/vue3'
import { CpIcon } from '../packages/components'
import { CpButton } from '../packages/components'

// 从 unplugin-icons 导入真实图标 (MDI 图标集)
import MdiHome from '~icons/mdi/home'
import MdiCog from '~icons/mdi/cog'
import MdiLoading from '~icons/mdi/loading'
import MdiStar from '~icons/mdi/star'
import MdiHeart from '~icons/mdi/heart'
import MdiAccount from '~icons/mdi/account'
import MdiMagnify from '~icons/mdi/magnify'
import MdiPlus from '~icons/mdi/plus'
import MdiCheck from '~icons/mdi/check'
import MdiClose from '~icons/mdi/close'
import MdiAlert from '~icons/mdi/alert'
import MdiInformation from '~icons/mdi/information'
import MdiRocket from '~icons/mdi/rocket-launch'
import MdiFlash from '~icons/mdi/flash'
import MdiShield from '~icons/mdi/shield'

// 示例 SVG
const svgString = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`

/**
 * # CpIcon 图标
 * 
 * 灵活的图标组件，支持多种图标来源。
 * 
 * ## 使用方式
 * - **Component 模式**: Vue 组件 (unplugin-icons 推荐)
 * - **SVG 模式**: SVG 字符串内联渲染
 * - **CSS Class 模式**: 字体图标类名
 * - **Slot 模式**: 自定义内容
 * 
 * ## unplugin-icons 用法
 * ```ts
 * import MdiHome from '~icons/mdi/home'
 * ```
 * ```vue
 * <CpIcon :icon="MdiHome" />
 * ```
 */
const meta: Meta<typeof CpIcon> = {
  title: '通用 General/Icon 图标',
  component: CpIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '图标尺寸',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
      description: '颜色类型',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
    spin: {
      control: 'boolean',
      description: '旋转动画',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpIcon>

/** 基础用法 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpIcon :icon="MdiHome" />
        <CpIcon :icon="MdiCog" />
        <CpIcon :icon="MdiStar" />
        <CpIcon :icon="MdiHeart" />
      </div>
    `,
    setup() {
      return { MdiHome, MdiCog, MdiStar, MdiHeart }
    },
  }),
}

/** unplugin-icons 用法 */
export const UnpluginIcons用法: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 使用 unplugin-icons 只需导入图标组件：<br/>
          <code style="color: var(--cp-color-primary);">import MdiHome from '~icons/mdi/home'</code>
        </p>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <CpIcon :icon="MdiHome" />
          <CpIcon :icon="MdiCog" />
          <CpIcon :icon="MdiStar" />
          <CpIcon :icon="MdiHeart" />
          <CpIcon :icon="MdiAccount" />
          <CpIcon :icon="MdiMagnify" />
          <CpIcon :icon="MdiPlus" />
          <CpIcon :icon="MdiCheck" />
          <CpIcon :icon="MdiClose" />
          <CpIcon :icon="MdiRocket" />
          <CpIcon :icon="MdiFlash" />
          <CpIcon :icon="MdiShield" />
        </div>
      </div>
    `,
    setup() {
      return { MdiHome, MdiCog, MdiStar, MdiHeart, MdiAccount, MdiMagnify, MdiPlus, MdiCheck, MdiClose, MdiRocket, MdiFlash, MdiShield }
    },
  }),
}

/** SVG 模式 */
export const SVG模式: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          直接传入 SVG 字符串，自动内联渲染
        </p>
        <div style="display: flex; gap: 16px; align-items: center;">
          <CpIcon :icon="svg" type="success" />
          <CpIcon :icon="svg" type="primary" size="lg" />
        </div>
      </div>
    `,
    setup() {
      return { svg: svgString }
    },
  }),
}

/** Slot 模式 */
export const Slot模式: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          通过 slot 传入任意内容
        </p>
        <div style="display: flex; gap: 16px; align-items: center;">
          <CpIcon type="warning" size="lg">
            <MdiRocket />
          </CpIcon>
          <CpIcon type="error" size="lg">
            ⚡
          </CpIcon>
        </div>
      </div>
    `,
    setup() {
      return { MdiRocket }
    },
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="text-align: center;">
          <CpIcon :icon="MdiRocket" size="sm" />
          <div style="color: var(--cp-text-tertiary); font-size: 12px; margin-top: 4px;">sm (16px)</div>
        </div>
        <div style="text-align: center;">
          <CpIcon :icon="MdiRocket" size="md" />
          <div style="color: var(--cp-text-tertiary); font-size: 12px; margin-top: 4px;">md (24px)</div>
        </div>
        <div style="text-align: center;">
          <CpIcon :icon="MdiRocket" size="lg" />
          <div style="color: var(--cp-text-tertiary); font-size: 12px; margin-top: 4px;">lg (32px)</div>
        </div>
        <div style="text-align: center;">
          <CpIcon :icon="MdiRocket" :size="48" />
          <div style="color: var(--cp-text-tertiary); font-size: 12px; margin-top: 4px;">48px (自定义)</div>
        </div>
      </div>
    `,
    setup() {
      return { MdiRocket }
    },
  }),
}

/** 颜色类型 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <CpIcon :icon="MdiFlash" type="primary" size="lg" />
        <CpIcon :icon="MdiCheck" type="success" size="lg" />
        <CpIcon :icon="MdiAlert" type="warning" size="lg" />
        <CpIcon :icon="MdiClose" type="error" size="lg" />
        <CpIcon :icon="MdiInformation" type="info" size="lg" />
        <CpIcon :icon="MdiCog" type="default" size="lg" />
      </div>
    `,
    setup() {
      return { MdiFlash, MdiCheck, MdiAlert, MdiClose, MdiInformation, MdiCog }
    },
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <CpIcon :icon="MdiHeart" color="#ff6b6b" size="lg" />
        <CpIcon :icon="MdiStar" color="#4ecdc4" size="lg" />
        <CpIcon :icon="MdiFlash" color="#ffe66d" size="lg" />
        <CpIcon :icon="MdiRocket" color="#a29bfe" size="lg" />
        <CpIcon :icon="MdiShield" color="#fd79a8" size="lg" />
      </div>
    `,
    setup() {
      return { MdiHeart, MdiStar, MdiFlash, MdiRocket, MdiShield }
    },
  }),
}

/** 旋转动画 */
export const 旋转动画: Story = {
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpIcon :icon="MdiLoading" spin type="primary" size="lg" />
        <CpIcon :icon="MdiCog" spin type="info" size="lg" />
        <span style="color: var(--cp-text-secondary);">← 可用于 loading 状态</span>
      </div>
    `,
    setup() {
      return { MdiLoading, MdiCog }
    },
  }),
}

/** 与 Button 配合使用 */
export const 与Button配合: Story = {
  render: () => ({
    components: { CpIcon, CpButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpButton>
          <template #prefix>
            <CpIcon :icon="MdiHome" />
          </template>
          首页
        </CpButton>
        <CpButton type="success" variant="outline">
          设置
          <template #suffix>
            <CpIcon :icon="MdiCog" />
          </template>
        </CpButton>
        <CpButton type="warning" variant="semi">
          <template #prefix>
            <CpIcon :icon="MdiRocket" />
          </template>
          发射
          <template #suffix>
            <CpIcon :icon="MdiFlash" />
          </template>
        </CpButton>
        <CpButton type="primary" variant="neon">
          <template #prefix>
            <CpIcon :icon="MdiStar" />
          </template>
          收藏
        </CpButton>
      </div>
    `,
    setup() {
      return { MdiHome, MdiCog, MdiRocket, MdiFlash, MdiStar }
    },
  }),
}

/** 图标展示 */
export const 图标展示: Story = {
  name: 'MDI 图标库',
  render: () => ({
    components: { CpIcon },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 MDI 包含 7000+ 图标，查看完整列表: 
          <a href="https://icon-sets.iconify.design/mdi/" target="_blank" style="color: var(--cp-color-primary);">
            Iconify MDI
          </a>
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 16px;">
          <div v-for="icon in icons" :key="icon.name" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <CpIcon :icon="icon.component" size="lg" />
            <span style="color: var(--cp-text-tertiary); font-size: 10px;">{{ icon.name }}</span>
          </div>
        </div>
      </div>
    `,
    setup() {
      const icons = [
        { name: 'home', component: MdiHome },
        { name: 'cog', component: MdiCog },
        { name: 'star', component: MdiStar },
        { name: 'heart', component: MdiHeart },
        { name: 'account', component: MdiAccount },
        { name: 'magnify', component: MdiMagnify },
        { name: 'plus', component: MdiPlus },
        { name: 'check', component: MdiCheck },
        { name: 'close', component: MdiClose },
        { name: 'alert', component: MdiAlert },
        { name: 'info', component: MdiInformation },
        { name: 'rocket', component: MdiRocket },
        { name: 'flash', component: MdiFlash },
        { name: 'shield', component: MdiShield },
        { name: 'loading', component: MdiLoading },
      ]
      return { icons }
    },
  }),
}
