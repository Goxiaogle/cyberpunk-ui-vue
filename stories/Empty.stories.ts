import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpEmpty, CpButton } from '@cyberpunk-vue/components'
import MdiRadar from '~icons/mdi/radar'

/**
 * # CpEmpty 空状态
 *
 * 赛博朋克风格空状态组件，用于无数据、无搜索结果等场景的占位展示。
 *
 * ## 特性
 * - 📐 自动撑满父容器，水平+垂直居中
 * - 📝 标题 + 描述 两段式文字
 * - 🎨 6 种颜色类型 + 自定义颜色
 * - 🎯 多个插槽可自定义图标、标题、描述、底部操作
 * - 🔧 支持原生 \`icon\` 属性直接渲染 CpIcon 
 * - 🔧 SCSS 变量全面控制尺寸和颜色
 */
const meta: Meta<typeof CpEmpty> = {
    title: '反馈 Feedback/Empty 空状态',
    component: CpEmpty,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '标题文本',
            table: { defaultValue: { summary: '暂无数据' } },
        },
        description: {
            control: 'text',
            description: '描述/副标题文本',
        },
        type: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
            description: '颜色类型',
            table: { defaultValue: { summary: 'default' } },
        },
        color: {
            control: 'color',
            description: '自定义颜色（覆盖 type）',
        },
        imageSize: {
            control: { type: 'range', min: 32, max: 200, step: 8 },
            description: '图标尺寸 (px)',
            table: { defaultValue: { summary: '64' } },
        },
        icon: {
            control: 'text',
            description: '自定义图标名称（使用 CpIcon）',
        },
    },
}

export default meta
type Story = StoryObj<typeof CpEmpty>

/** 基础用法 */
export const 基础用法: Story = {
    args: {
        title: '暂无数据',
        description: '当前没有可显示的内容',
    },
    render: (args: any) => ({
        components: { CpEmpty },
        setup() { return { args } },
        template: `
      <div style="height: 320px; border: 1px dashed var(--cp-border); border-radius: 8px;">
        <CpEmpty v-bind="args" />
      </div>
    `,
    }),
}

/** 颜色类型 */
export const 颜色类型: Story = {
    render: () => ({
        components: { CpEmpty },
        template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <div v-for="t in ['default','primary','success','warning','error','info']" :key="t"
             style="height: 260px; border: 1px solid var(--cp-border); border-radius: 8px;">
          <CpEmpty :type="t" :title="t.charAt(0).toUpperCase() + t.slice(1)" description="颜色类型示例" />
        </div>
      </div>
    `,
    }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
    render: () => ({
        components: { CpEmpty },
        template: `
      <div style="display: flex; gap: 16px;">
        <div style="flex:1; height: 280px; border: 1px solid var(--cp-border); border-radius: 8px;">
          <CpEmpty color="#ff6ec7" title="自定义粉色" description="使用 color prop 覆盖默认颜色" />
        </div>
        <div style="flex:1; height: 280px; border: 1px solid var(--cp-border); border-radius: 8px;">
          <CpEmpty color="#ffd700" title="自定义金色" description="使用 color prop 覆盖默认颜色" />
        </div>
      </div>
    `,
    }),
}

/** 底部操作 */
export const 底部操作: Story = {
    render: () => ({
        components: { CpEmpty, CpButton },
        template: `
      <div style="height: 320px; border: 1px dashed var(--cp-border); border-radius: 8px;">
        <CpEmpty title="等待剧本解析" description="请先在左侧输入剧本并点击"开始拆解剧本"" type="primary">
          <CpButton type="primary" size="sm">开始拆解</CpButton>
        </CpEmpty>
      </div>
    `,
    }),
}

/** 自定义图标组件 */
export const 自定义图标组件: Story = {
    render: () => ({
        components: { CpEmpty },
        setup() { return { MdiRadar } },
        template: `
      <div style="height: 320px; border: 1px dashed var(--cp-border); border-radius: 8px;">
        <CpEmpty title="没有发现目标" description="雷达扫描区域内无任何生物信号" type="warning" :icon="MdiRadar" :image-size="80" />
      </div>
    `,
    }),
}

/** 自定义图标插槽 */
export const 自定义图标插槽: Story = {
    render: () => ({
        components: { CpEmpty },
        template: `
      <div style="height: 320px; border: 1px dashed var(--cp-border); border-radius: 8px;">
        <CpEmpty title="网络错误" description="请检查您的网络连接后重试" type="error">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"
                 stroke="var(--cp-color-error)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
              <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </template>
        </CpEmpty>
      </div>
    `,
    }),
}

/** 图片尺寸 */
export const 图片尺寸: Story = {
    render: () => ({
        components: { CpEmpty },
        template: `
      <div style="display: flex; gap: 16px;">
        <div v-for="size in [40, 64, 96, 128]" :key="size"
             style="flex:1; height: 280px; border: 1px solid var(--cp-border); border-radius: 8px;">
          <CpEmpty :image-size="size" :title="size + 'px'" description="图标尺寸示例" />
        </div>
      </div>
    `,
    }),
}

/** SCSS 变量定制 */
export const SCSS变量定制: Story = {
    render: () => ({
        components: { CpEmpty },
        template: `
      <div style="height: 320px; border: 1px dashed var(--cp-border); border-radius: 8px;">
        <CpEmpty
          title="自定义样式"
          description="通过 SCSS 变量调整标题字号、描述字号、间距等"
          style="
            --cp-empty-title-font-size: 20px;
            --cp-empty-description-font-size: 13px;
            --cp-empty-image-margin: 24px;
            --cp-empty-title-margin: 12px;
            --cp-empty-image-size: 80px;
            --cp-empty-title-color: var(--cp-color-primary);
            --cp-empty-description-color: var(--cp-text-secondary);
          "
        />
      </div>
    `,
    }),
}
