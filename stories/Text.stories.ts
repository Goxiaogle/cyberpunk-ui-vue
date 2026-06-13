import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpConfigProvider, CpText } from '@cyberpunk-vue/components'

/**
 * CpText 特殊文字组件
 *
 * 用于快速切换文字层级并添加多种视觉效果的文字组件。
 * 支持 heading / body / caption 等层级、渲染标签切换，以及下划线、方框、发光、马克笔等效果组合。
 */
const meta: Meta<typeof CpText> = {
  title: '通用 General/Text 特殊文字',
  component: CpText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '文字类型（颜色预设）',
    },
    level: {
      control: 'select',
      options: ['heading', 'subheading', 'body', 'secondary', 'caption', 'muted'],
      description: '文字层级，控制默认字号、字重、行高和文本色',
    },
    tag: {
      control: 'select',
      options: ['span', 'p', 'div', 'label', 'strong', 'em', 'small', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: '渲染标签，只改变 HTML 标签，不改变视觉层级',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '文字尺寸，显式传入时覆盖 level 的默认字号',
    },
    align: {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
      description: '垂直对齐方式',
    },
    ellipsis: {
      control: 'boolean',
      description: '单行省略，文字超出可用宽度时显示省略号',
    },
    lineClamp: {
      control: { type: 'number', min: 1, max: 8, step: 1 },
      description: '多行省略行数，优先级高于 ellipsis',
    },
    contentClass: {
      control: 'text',
      description: '文字本体自定义类名，作用于 .cp-text__content',
    },
    contentStyle: {
      control: 'object',
      description: '文字本体自定义样式，作用于 .cp-text__content',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
    underline: {
      control: 'boolean',
      description: '下划线效果',
    },
    boxed: {
      control: 'boolean',
      description: '方框边框效果',
    },
    dashed: {
      control: 'boolean',
      description: '虚线样式（应用于下划线或方框）',
    },
    bold: {
      control: 'boolean',
      description: '加粗效果',
    },
    italic: {
      control: 'boolean',
      description: '斜体效果',
    },
    strikethrough: {
      control: 'boolean',
      description: '删除线效果',
    },
    glow: {
      control: 'boolean',
      description: '发光效果',
    },
    glowIntensity: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: '发光强度 (1-10)',
    },
    glowPulse: {
      control: 'boolean',
      description: '发光心跳动画',
    },
    glowPulseDuration: {
      control: { type: 'range', min: 0.5, max: 5, step: 0.1 },
      description: '心跳动画时长 (秒)',
    },
    lightWave: {
      control: 'boolean',
      description: '光波扫射动画',
    },
    lightWaveDuration: {
      control: { type: 'range', min: 0.5, max: 5, step: 0.1 },
      description: '光波动画时长 (秒)',
    },
    unselectable: {
      control: 'boolean',
      description: '禁止选中/复制',
    },
    marker: {
      control: 'boolean',
      description: '马克笔背景效果',
    },
    markerColor: {
      control: 'color',
      description: '马克笔自定义颜色',
    },
    overlap: {
      control: 'boolean',
      description: '重叠文字效果',
    },
    overlapOffsetX: {
      control: { type: 'range', min: -10, max: 10, step: 1 },
      description: '重叠文字 X 偏移量 (px)',
    },
    overlapOffsetY: {
      control: { type: 'range', min: -10, max: 10, step: 1 },
      description: '重叠文字 Y 偏移量 (px)',
    },
    overlapColor: {
      control: 'color',
      description: '重叠文字颜色',
    },
    default: {
      control: 'text',
      description: '文字内容',
      table: { category: 'slots' },
    },
    prefix: {
      control: false,
      description: '前缀内容',
      table: { category: 'slots' },
    },
    suffix: {
      control: false,
      description: '后缀内容',
      table: { category: 'slots' },
    },
  },
  args: {
    type: 'primary',
    level: 'body',
    tag: 'span',
    size: undefined,
    align: 'middle',
    ellipsis: false,
    lineClamp: undefined,
    contentClass: undefined,
    contentStyle: undefined,
    color: '',
    underline: false,
    boxed: false,
    dashed: false,
    bold: false,
    italic: false,
    strikethrough: false,
    glow: false,
    glowIntensity: 3,
    glowPulse: false,
    glowPulseDuration: 1.5,
    lightWave: false,
    lightWaveDuration: 2,
    marker: false,
    markerColor: '',
    overlap: false,
    overlapOffsetX: 2,
    overlapOffsetY: 2,
    overlapColor: '',
    unselectable: false,
    default: '特殊文字',
  },
}

export default meta
type Story = StoryObj<typeof CpText>

/**
 * 基础用法 - 可控文字效果
 */
export const Basic: Story = {
  render: (args) => ({
    components: { CpText },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; background: var(--cp-bg-deep); min-height: 100px; display: flex; align-items: center; justify-content: center;">
        <CpText v-bind="args">{{ args.default }}</CpText>
      </div>
    `,
  }),
}

/**
 * 颜色类型
 *
 * 展示所有预设的颜色类型。
 */
export const Types: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText>默认文字</CpText>
        <CpText type="primary">主要</CpText>
        <CpText type="success">成功</CpText>
        <CpText type="warning">警告</CpText>
        <CpText type="error">错误</CpText>
        <CpText type="info">信息</CpText>
      </div>
    `,
  }),
}

/**
 * 文字层级
 *
 * 使用 `level` 切换内置排版层级；需要语义标签时配合 `tag` 使用。
 */
export const Levels: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: grid; gap: 12px; max-width: 720px;">
        <CpText level="heading" tag="h2" style="margin: 0;">主题标题文字 Heading</CpText>
        <CpText level="subheading" tag="h3" style="margin: 0;">副标题文字 Subheading</CpText>
        <CpText level="body" tag="p" style="margin: 0;">
          普通正文 Body 使用主题主文字色和舒适行高，适合完整段落、说明文本和内容主体。
        </CpText>
        <CpText level="secondary" tag="p" style="margin: 0;">
          次级正文 Secondary 使用次级文字色，适合描述、表格辅助信息和卡片正文。
        </CpText>
        <CpText level="caption">Caption 用于标签、注释和紧凑元信息。</CpText>
        <CpText level="muted">Muted 用于空状态说明和低优先级元信息。</CpText>
      </div>
    `,
  }),
}

/**
 * 文本省略
 *
 * 使用 `ellipsis` 处理单行省略，使用 `lineClamp` 处理多行省略；需要根节点或父容器提供明确宽度/最大宽度。
 */
export const Ellipsis: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: grid; gap: 16px; max-width: 360px;">
        <CpText ellipsis style="max-width: 240px;">
          单行省略：这是一段非常长的文字，用于展示 CpText 在单行场景下的省略效果。
        </CpText>
        <CpText :line-clamp="2" tag="p" style="margin: 0; max-width: 320px;">
          多行省略：这是一段更长的段落内容，用于展示 CpText 在两行之后进行裁剪的效果。它应该保持主题文字色、字号和行高，同时在内容超出指定行数时显示省略。
        </CpText>
        <CpText :line-clamp="2" content-class="custom-text-content" :content-style="{ wordBreak: 'break-all' }" style="max-width: 320px;">
          contentClass 和 contentStyle 会作用到文字本体，可以用于覆盖内部文本节点的换行、断词或其他样式。
        </CpText>
      </div>
    `,
  }),
}

/**
 * 主题适配
 *
 * 默认文字色会读取当前主题的 `--cp-text-primary`，局部主题也会生效。
 */
export const ThemeAware: Story = {
  render: () => ({
    components: { CpConfigProvider, CpText },
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">
        <CpConfigProvider theme="dark" :sync-document="false">
          <div style="display: flex; flex-direction: column; gap: 12px; padding: 18px; background: var(--cp-bg-deep); border: 1px solid var(--cp-border);">
            <CpText bold>暗色默认文字</CpText>
            <CpText type="primary">暗色 Primary</CpText>
            <CpText type="success" underline>暗色 Success</CpText>
            <CpText type="warning" marker>暗色 Warning</CpText>
          </div>
        </CpConfigProvider>
        <CpConfigProvider theme="light" :sync-document="false">
          <div style="display: flex; flex-direction: column; gap: 12px; padding: 18px; background: var(--cp-bg-deep); border: 1px solid var(--cp-border);">
            <CpText bold>亮色默认文字</CpText>
            <CpText type="primary">亮色 Primary</CpText>
            <CpText type="success" underline>亮色 Success</CpText>
            <CpText type="warning" marker>亮色 Warning</CpText>
          </div>
        </CpConfigProvider>
      </div>
    `,
  }),
}

/**
 * 尺寸对比
 *
 * 支持 sm/md/lg 预设值或自定义数字。
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <CpText type="primary" size="sm">小号 (12px)</CpText>
        <CpText type="primary" size="md">中号 (14px)</CpText>
        <CpText type="primary" size="lg">大号 (16px)</CpText>
        <CpText type="primary" :size="20">自定义 (20px)</CpText>
      </div>
    `,
  }),
}

/**
 * 下划线效果
 *
 * 使用 `underline` 添加下划线，可配合 `dashed` 使用虚线。
 */
export const Underline: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText underline>默认下划线</CpText>
        <CpText type="primary" underline>Primary 下划线</CpText>
        <CpText type="success" underline>Success 下划线</CpText>
        <CpText type="warning" underline dashed>虚线下划线</CpText>
        <CpText type="error" underline dashed>Error 虚线</CpText>
      </div>
    `,
  }),
}

/**
 * 方框边框
 *
 * 使用 `boxed` 添加边框效果，可配合 `dashed` 使用虚线边框。
 */
export const Boxed: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText boxed>默认方框</CpText>
        <CpText type="primary" boxed>Primary 方框</CpText>
        <CpText type="success" boxed>Success 方框</CpText>
        <CpText type="warning" boxed dashed>虚线方框</CpText>
        <CpText type="error" boxed dashed>Error 虚线</CpText>
      </div>
    `,
  }),
}

/**
 * 文字样式
 *
 * 加粗、斜体、删除线效果。
 */
export const TextStyles: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText bold>加粗文字</CpText>
        <CpText italic>斜体文字</CpText>
        <CpText strikethrough>删除线</CpText>
        <CpText type="primary" bold italic>加粗斜体</CpText>
        <CpText type="error" strikethrough bold>删除线加粗</CpText>
      </div>
    `,
  }),
}

/**
 * 发光效果
 *
 * 霓虹发光效果，支持自定义强度。
 */
export const Glow: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; background: var(--cp-bg-deep);">
        <div style="color: var(--cp-text-muted); font-size: 12px;">基础发光</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" glow>Primary</CpText>
          <CpText type="success" glow>Success</CpText>
          <CpText type="warning" glow>Warning</CpText>
          <CpText type="error" glow>Error</CpText>
          <CpText type="info" glow>Info</CpText>
        </div>
        <div style="color: var(--cp-text-muted); font-size: 12px;">发光强度 (1-10)</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" glow :glow-intensity="1">强度 1</CpText>
          <CpText type="primary" glow :glow-intensity="3">强度 3</CpText>
          <CpText type="primary" glow :glow-intensity="5">强度 5</CpText>
          <CpText type="primary" glow :glow-intensity="8">强度 8</CpText>
          <CpText type="primary" glow :glow-intensity="10">强度 10</CpText>
        </div>
      </div>
    `,
  }),
}

/**
 * 发光心跳动画
 *
 * 使用 `glow-pulse` 开启呼吸脉冲动画效果。
 */
export const GlowPulse: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center; padding: 16px; background: var(--cp-bg-deep);">
        <CpText type="primary" glow glow-pulse :glow-intensity="5">Primary 心跳</CpText>
        <CpText type="success" glow glow-pulse :glow-intensity="5">Success 心跳</CpText>
        <CpText type="warning" glow glow-pulse :glow-intensity="5">Warning 心跳</CpText>
        <CpText type="error" glow glow-pulse :glow-intensity="5">Error 心跳</CpText>
        <CpText color="#ff00ff" glow glow-pulse :glow-intensity="8">强烈心跳</CpText>
      </div>
    `,
  }),
}

/**
 * 光波扫射动画
 *
 * 使用 `light-wave` 创建斜向高光扫过文字的赛博朋克效果。
 */
export const LightWave: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center; padding: 16px; background: var(--cp-bg-deep);">
        <CpText type="primary" light-wave size="lg">Primary 光波</CpText>
        <CpText type="success" light-wave size="lg">Success 光波</CpText>
        <CpText type="warning" light-wave size="lg">Warning 光波</CpText>
        <CpText type="error" light-wave size="lg">Error 光波</CpText>
        <CpText color="#ff00ff" light-wave glow :glow-intensity="3" size="lg">光波 + 发光</CpText>
      </div>
    `,
  }),
}


/**
 * 马克笔效果
 *
 * 类似荧光笔的高亮背景效果。
 */
export const Marker: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText type="primary" marker>Primary 马克笔</CpText>
        <CpText type="success" marker>Success 马克笔</CpText>
        <CpText type="warning" marker>Warning 马克笔</CpText>
        <CpText type="error" marker>Error 马克笔</CpText>
        <CpText type="info" marker>Info 马克笔</CpText>
      </div>
    `,
  }),
}

/**
 * 重叠文字效果
 *
 * 使用 `overlap` 开启重叠文字效果，通过 text-shadow 实现错位重影。
 * 支持自定义偏移量和颜色。
 */
export const Overlap: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 16px; background: var(--cp-bg-deep);">
        <div style="color: var(--cp-text-muted); font-size: 12px;">各类型颜色重叠</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" overlap size="lg" bold>Primary</CpText>
          <CpText type="success" overlap size="lg" bold>Success</CpText>
          <CpText type="warning" overlap size="lg" bold>Warning</CpText>
          <CpText type="error" overlap size="lg" bold>Error</CpText>
          <CpText type="info" overlap size="lg" bold>Info</CpText>
        </div>
        <div style="color: var(--cp-text-muted); font-size: 12px;">偏移量对比</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" overlap :overlap-offset-x="1" :overlap-offset-y="1" size="lg" bold>1px</CpText>
          <CpText type="primary" overlap :overlap-offset-x="2" :overlap-offset-y="2" size="lg" bold>2px</CpText>
          <CpText type="primary" overlap :overlap-offset-x="4" :overlap-offset-y="4" size="lg" bold>4px</CpText>
          <CpText type="primary" overlap :overlap-offset-x="-2" :overlap-offset-y="2" size="lg" bold>X:-2 Y:2</CpText>
          <CpText type="primary" overlap :overlap-offset-x="3" :overlap-offset-y="-1" size="lg" bold>X:3 Y:-1</CpText>
        </div>
        <div style="color: var(--cp-text-muted); font-size: 12px;">自定义重叠颜色</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" overlap overlap-color="rgba(0,255,255,0.5)" :overlap-offset-x="3" :overlap-offset-y="3" size="lg" bold>Cyan 阴影</CpText>
          <CpText type="error" overlap overlap-color="rgba(255,0,255,0.4)" :overlap-offset-x="2" :overlap-offset-y="2" size="lg" bold>Magenta 阴影</CpText>
          <CpText color="#ff6b35" overlap overlap-color="rgba(255,107,53,0.3)" :overlap-offset-x="3" :overlap-offset-y="2" size="lg" bold>Orange 阴影</CpText>
        </div>
        <div style="color: var(--cp-text-muted); font-size: 12px;">与其他效果组合</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" overlap glow size="lg" bold>重叠 + 发光</CpText>
          <CpText type="success" overlap underline size="lg" bold>重叠 + 下划线</CpText>
          <CpText type="warning" overlap marker size="lg" bold>重叠 + 马克笔</CpText>
          <CpText type="error" overlap boxed size="lg" bold>重叠 + 方框</CpText>
        </div>
      </div>
    `,
  }),
}

/**
 * 效果组合
 *
 * 多种效果可以自由组合使用。
 */
export const CombinedEffects: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" bold underline>加粗下划线</CpText>
          <CpText type="success" italic boxed>斜体方框</CpText>
          <CpText type="warning" bold glow>加粗发光</CpText>
          <CpText type="error" marker bold>马克笔加粗</CpText>
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <CpText type="primary" underline glow>下划线发光</CpText>
          <CpText type="info" boxed glow>方框发光</CpText>
          <CpText type="success" marker underline>马克笔下划线</CpText>
          <CpText type="warning" boxed dashed bold>虚线方框加粗</CpText>
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义颜色
 *
 * 使用 `color` 属性自定义文字颜色。
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText color="#ff00ff">Magenta</CpText>
        <CpText color="#00ffff" underline>Cyan 下划线</CpText>
        <CpText color="#ff6b35" boxed>Orange 方框</CpText>
        <CpText color="#a855f7" glow>Purple 发光</CpText>
        <CpText color="#10b981" marker>Green 马克笔</CpText>
      </div>
    `,
  }),
}

/**
 * 前缀/后缀插槽
 *
 * 支持添加前缀和后缀内容。
 */
export const PrefixSuffix: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <CpText type="primary">
          <template #prefix>👉</template>
          带前缀
        </CpText>
        <CpText type="success">
          带后缀
          <template #suffix>✅</template>
        </CpText>
        <CpText type="warning" marker>
          <template #prefix>⚠️</template>
          前后缀
          <template #suffix>!</template>
        </CpText>
      </div>
    `,
  }),
}

/**
 * 内联混排
 *
 * 作为内联元素在段落中使用，实现富文本效果。
 */
export const InlineMix: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <p style="font-size: 16px; line-height: 2; max-width: 600px;">
        这是一段普通文字，其中包含
        <CpText type="primary" bold>加粗主要文字</CpText>、
        <CpText type="success" underline>成功下划线</CpText>、
        <CpText type="warning" marker>警告马克笔</CpText>、
        <CpText type="error" strikethrough>删除线错误</CpText>
        以及
        <CpText type="info" glow>信息发光</CpText>
        效果。你可以自由组合这些效果，如
        <CpText color="#ff00ff" bold italic glow>加粗斜体发光</CpText>
        来创建引人注目的文字效果。
      </p>
    `,
  }),
}

/**
 * 禁止选中
 *
 * 使用 `unselectable` 防止文字被选中或复制。常用于 UI 标签或装饰性文字。
 */
export const Unselectable: Story = {
  render: () => ({
    components: { CpText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpText type="primary" unselectable>这段文字无法被鼠标选中</CpText>
        <CpText type="error" unselectable bold>也无法被复制 (Ctrl+C)</CpText>
        <CpText>这段是可以正常选中的对比文字</CpText>
      </div>
    `,
  }),
}
