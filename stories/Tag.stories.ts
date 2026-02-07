import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'
import { CpTag } from '@cyberpunk-vue/components'

/**
 * CpTag 标签组件
 *
 * 用于展示标签、分类或状态的轻量级组件。
 * 支持多种颜色类型、变体样式、尺寸与可关闭功能。
 */
const meta: Meta<typeof CpTag> = {
  title: '数据展示 Data Display/Tag 标签',
  component: CpTag,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '标签类型（颜色预设）',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '标签尺寸',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'semi', 'note'],
      description: '变体样式',
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round'],
      description: '形状模式',
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    dashed: {
      control: 'boolean',
      description: '虚线边框',
    },
    selectable: {
      control: 'boolean',
      description: '是否可选中，开启后点击可切换选中状态',
    },
    selected: {
      control: 'boolean',
      description: '选中状态 (v-model:selected)',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
    default: {
      control: 'text',
      description: '标签内容',
      table: { category: 'slots' },
    },
    prefix: {
      control: false,
      description: '前缀内容，用于放置图标等',
      table: { category: 'slots' },
    },
    suffix: {
      control: false,
      description: '后缀内容，用于放置计数/徽章等',
      table: { category: 'slots' },
    },
  },
  args: {
    type: 'primary',
    size: 'md',
    variant: 'solid',
    shape: 'clip',
    closable: false,
    disabled: false,
    dashed: false,
    selectable: false,
    selected: false,
    color: '',
    default: '标签内容',
  },
}

export default meta
type Story = StoryObj<typeof CpTag>

/**
 * 基础用法 - 单个可控标签
 */
export const Basic: Story = {
  render: (args) => ({
    components: { CpTag },
    setup() {
      const isSelected = ref(args.selected)
      
      // 监听 args.selected 变化 (从 controls 面板)
      watch(() => args.selected, (val) => {
        isSelected.value = val
      })
      
      const onUpdateSelected = (val: boolean) => {
        isSelected.value = val
      }
      
      return { args, isSelected, onUpdateSelected }
    },
    template: `<CpTag v-bind="args" :selected="isSelected" @update:selected="onUpdateSelected">{{ args.default }}</CpTag>`,
  }),
}

/**
 * 颜色类型
 *
 * 展示所有预设的颜色类型。
 */
export const Types: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag>默认标签</CpTag>
        <CpTag type="primary">主要</CpTag>
        <CpTag type="success">成功</CpTag>
        <CpTag type="warning">警告</CpTag>
        <CpTag type="error">错误</CpTag>
        <CpTag type="info">信息</CpTag>
      </div>
    `,
  }),
}

/**
 * 尺寸对比
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <CpTag type="primary" size="sm">小尺寸</CpTag>
        <CpTag type="primary" size="md">中等尺寸</CpTag>
        <CpTag type="primary" size="lg">大尺寸</CpTag>
      </div>
    `,
  }),
}

/**
 * 变体样式
 *
 * - **Solid**: 实心填充（默认）
 * - **Outline**: 边框描边
 * - **Semi**: 半透明填充
 * - **Note**: 便利贴风格（左边框 + 半透明背景）
 */
export const Variants: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Solid</span>
          <CpTag type="primary" variant="solid">Primary</CpTag>
          <CpTag type="success" variant="solid">Success</CpTag>
          <CpTag type="warning" variant="solid">Warning</CpTag>
          <CpTag type="error" variant="solid">Error</CpTag>
          <CpTag type="info" variant="solid">Info</CpTag>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Outline</span>
          <CpTag type="primary" variant="outline">Primary</CpTag>
          <CpTag type="success" variant="outline">Success</CpTag>
          <CpTag type="warning" variant="outline">Warning</CpTag>
          <CpTag type="error" variant="outline">Error</CpTag>
          <CpTag type="info" variant="outline">Info</CpTag>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Semi</span>
          <CpTag type="primary" variant="semi">Primary</CpTag>
          <CpTag type="success" variant="semi">Success</CpTag>
          <CpTag type="warning" variant="semi">Warning</CpTag>
          <CpTag type="error" variant="semi">Error</CpTag>
          <CpTag type="info" variant="semi">Info</CpTag>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <span style="width: 60px; color: var(--cp-text-muted);">Note</span>
          <CpTag type="primary" variant="note">Primary</CpTag>
          <CpTag type="success" variant="note">Success</CpTag>
          <CpTag type="warning" variant="note">Warning</CpTag>
          <CpTag type="error" variant="note">Error</CpTag>
          <CpTag type="info" variant="note">Info</CpTag>
        </div>
      </div>
    `,
  }),
}

/**
 * 形状模式
 *
 * - **Clip**: 机甲切角效果（默认）
 * - **No-clip**: 标准直角
 * - **Round**: 圆角效果
 */
export const Shapes: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag type="primary" shape="clip">Clip 切角</CpTag>
        <CpTag type="primary" shape="no-clip">No-clip 直角</CpTag>
        <CpTag type="primary" shape="round">Round 圆角</CpTag>
      </div>
    `,
  }),
}

/**
 * 可关闭标签
 *
 * 设置 `closable` 属性显示关闭按钮，点击触发 `close` 事件。
 */
export const Closable: Story = {
  render: () => ({
    components: { CpTag },
    setup() {
      const handleClose = (type: string) => {
        console.log(`关闭标签: ${type}`)
        alert(`关闭标签: ${type}`)
      }
      return { handleClose }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag type="primary" closable @close="handleClose('primary')">可关闭</CpTag>
        <CpTag type="success" closable @close="handleClose('success')">可关闭</CpTag>
        <CpTag type="warning" closable @close="handleClose('warning')">可关闭</CpTag>
        <CpTag type="error" closable @close="handleClose('error')">可关闭</CpTag>
      </div>
    `,
  }),
}

/**
 * 虚线边框
 *
 * 配合 `outline` 或 `semi` 变体使用虚线边框效果。
 */
export const Dashed: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag type="primary" variant="outline" dashed>Outline Dashed</CpTag>
        <CpTag type="success" variant="semi" dashed>Semi Dashed</CpTag>
        <CpTag type="warning" variant="outline" dashed>Warning</CpTag>
      </div>
    `,
  }),
}

/**
 * 自定义颜色
 *
 * 使用 `color` 属性自定义标签颜色。
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag color="#ff00ff" variant="solid">Magenta</CpTag>
        <CpTag color="#00ffff" variant="solid">Cyan</CpTag>
        <CpTag color="#ff6b35" variant="outline">Orange</CpTag>
        <CpTag color="#a855f7" variant="semi">Purple</CpTag>
      </div>
    `,
  }),
}

/**
 * 禁用状态
 */
export const Disabled: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag type="primary" disabled>禁用标签</CpTag>
        <CpTag type="success" closable disabled>禁用可关闭</CpTag>
        <CpTag type="warning" variant="outline" disabled>Outline 禁用</CpTag>
      </div>
    `,
  }),
}

/**
 * 可选中标签
 *
 * 使用 `selectable` 开启选中功能，`v-model:selected` 绑定选中状态。
 * 点击标签可切换选中状态。
 */
export const Selectable: Story = {
  render: () => ({
    components: { CpTag },
    data() {
      return {
        selected1: false,
        selected2: true,
        selected3: false,
        selected4: false,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpTag type="primary" selectable v-model:selected="selected1">Solid</CpTag>
          <CpTag type="success" variant="outline" selectable v-model:selected="selected2">Outline</CpTag>
          <CpTag type="warning" variant="semi" selectable v-model:selected="selected3">Semi</CpTag>
          <CpTag type="info" variant="note" selectable v-model:selected="selected4">Note</CpTag>
        </div>
        <div style="color: var(--cp-text-muted); font-size: 12px;">
          选中状态: primary={{ selected1 }}, success={{ selected2 }}, warning={{ selected3 }}, info={{ selected4 }}
        </div>
      </div>
    `,
  }),
}

/**
 * 前缀/后缀插槽
 *
 * Note 变体支持 prefix（图标）和 suffix（计数）插槽，
 * 适合状态统计展示场景。
 */
export const PrefixSuffix: Story = {
  render: () => ({
    components: { CpTag },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpTag type="success" variant="note">
          <template #prefix>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </template>
          完全匹配
          <template #suffix>2</template>
        </CpTag>

        <CpTag type="warning" variant="note">
          <template #prefix>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </template>
          模糊匹配
          <template #suffix>0</template>
        </CpTag>

        <CpTag type="error" variant="note">
          <template #prefix>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M12 9v4m0 4h.01M4.93 4.93l14.14 14.14"/>
            </svg>
          </template>
          部分错误
          <template #suffix>0</template>
        </CpTag>

        <CpTag variant="note">
          <template #prefix>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </template>
          未找到
          <template #suffix>0</template>
        </CpTag>

        <CpTag type="primary" variant="note">
          <template #prefix>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </template>
          已有配音源
          <template #suffix>0</template>
        </CpTag>

        <CpTag type="info" variant="note">
          <template #prefix>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </template>
          异常长度
          <template #suffix>0</template>
        </CpTag>
      </div>
    `,
  }),
}
