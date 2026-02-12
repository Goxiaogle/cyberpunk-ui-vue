import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpButton } from '@cyberpunk-vue/components'

// 从 unplugin-icons 导入真实图标 (mdi 图标集) - 用于 IconButton 示例
import MdiHome from '~icons/mdi/home'
import MdiCog from '~icons/mdi/cog'
import MdiPlus from '~icons/mdi/plus'
import MdiMagnify from '~icons/mdi/magnify'
import MdiHeart from '~icons/mdi/heart'
import MdiStar from '~icons/mdi/star'
import MdiPencil from '~icons/mdi/pencil'
import MdiDelete from '~icons/mdi/delete'

/**
 * # CpButton 按钮
 *
 * 赛博朋克风格按钮组件，支持多种颜色、尺寸和形态变体。
 *
 * ## 特性
 * - 🎨 5 种颜色类型：primary、success、warning、error、info
 * - 📐 3 种尺寸：sm、md、lg
 * - 🔮 4 种形态：solid、outline、ghost、neon
 * - ⚡ 机甲风切角设计
 * - ✨ 霓虹发光效果
 */
const meta: Meta<typeof CpButton> = {
  title: '通用 General/Button 按钮',
  component: CpButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
      description: '按钮颜色类型',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'ButtonType' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '按钮尺寸',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'neon', 'semi'],
      description: '按钮形态/变体',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    loading: {
      control: 'boolean',
      description: '是否加载中',
    },
    block: {
      control: 'boolean',
      description: '是否为块级按钮（占满宽度）',
    },
    square: {
      control: 'boolean',
      description: '是否为正方形按钮（宽度等于高度，与 icon-only 一致）',
    },
    textColor: {
      control: 'color',
      description: '自定义文字颜色',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpButton>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    type: 'default',
    size: 'md',
    variant: 'solid',
  },
  render: (args: any) => ({
    components: { CpButton },
    setup() {
      return { args }
    },
    template: '<CpButton v-bind="args">赛博朋克</CpButton>',
  }),
}

/** 颜色类型 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpButton type="primary">主要 Primary</CpButton>
        <CpButton type="success">成功 Success</CpButton>
        <CpButton type="warning">警告 Warning</CpButton>
        <CpButton type="error">错误 Error</CpButton>
        <CpButton type="info">信息 Info</CpButton>
        <CpButton type="default">默认 Default</CpButton>
      </div>
    `,
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <CpButton size="sm">小型 Small</CpButton>
        <CpButton size="md">中型 Medium</CpButton>
        <CpButton size="lg">大型 Large</CpButton>
      </div>
    `,
  }),
}

/** 形态变体 */
export const 形态变体: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px;">
          <CpButton variant="solid">Solid 实心</CpButton>
          <CpButton variant="solid" type="success">Solid</CpButton>
          <CpButton variant="solid" type="error">Solid</CpButton>
        </div>
        <div style="display: flex; gap: 12px;">
          <CpButton variant="semi">Semi 半填充</CpButton>
          <CpButton variant="semi" type="success">Semi</CpButton>
          <CpButton variant="semi" type="error">Semi</CpButton>
        </div>
        <div style="display: flex; gap: 12px;">
          <CpButton variant="outline">Outline 描边</CpButton>
          <CpButton variant="outline" type="success">Outline</CpButton>
          <CpButton variant="outline" type="error">Outline</CpButton>
        </div>
        <div style="display: flex; gap: 12px;">
          <CpButton variant="ghost">Ghost 幽灵</CpButton>
          <CpButton variant="ghost" type="success">Ghost</CpButton>
          <CpButton variant="ghost" type="error">Ghost</CpButton>
        </div>
        <div style="display: flex; gap: 12px;">
          <CpButton variant="neon">Neon 霓虹</CpButton>
          <CpButton variant="neon" type="success">Neon</CpButton>
          <CpButton variant="neon" type="error">Neon</CpButton>
        </div>
      </div>
    `,
  }),
}

/** 禁用与加载 */
export const 禁用与加载: Story = {
  render: () => ({
    components: { CpButton },
    setup() {
      const loading1 = ref(false)
      const loading2 = ref(false)
      const loading3 = ref(false)
      const toggle1 = () => {
        loading1.value = true
        setTimeout(() => loading1.value = false, 2000)
      }
      const toggle2 = () => {
        loading2.value = true
        setTimeout(() => loading2.value = false, 2000)
      }
      const toggle3 = () => {
        loading3.value = true
        setTimeout(() => loading3.value = false, 2000)
      }
      return { loading1, loading2, loading3, toggle1, toggle2, toggle3, ref }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px;">
          <CpButton disabled>禁用状态</CpButton>
          <CpButton loading>加载中...</CpButton>
          <CpButton loading loading-disabled>加载 + 禁用样式</CpButton>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="color: var(--cp-text-secondary); width: 120px;">无占位符:</span>
          <CpButton :loading="loading1" @click="toggle1">点击加载</CpButton>
          <span style="color: var(--cp-text-tertiary); font-size: 12px;">← 宽度会变化</span>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="color: var(--cp-text-secondary); width: 120px;">有占位符:</span>
          <CpButton :loading="loading2" loading-placeholder @click="toggle2">点击加载</CpButton>
          <span style="color: var(--cp-text-tertiary); font-size: 12px;">← 宽度保持不变</span>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="color: var(--cp-text-secondary); width: 120px;">加载时禁用:</span>
          <CpButton :loading="loading3" loading-disabled @click="toggle3">点击加载</CpButton>
          <span style="color: var(--cp-text-tertiary); font-size: 12px;">← 加载时呈禁用样式</span>
        </div>
      </div>
    `,
  }),
}


/** 块级按钮 */
export const 块级按钮: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="width: 300px;">
        <CpButton block>块级按钮</CpButton>
      </div>
    `,
  }),
}

/** 前后插槽 (Icon 预留) */
export const 前后插槽: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpButton>
          <template #prefix>◀</template>
          前置图标
        </CpButton>
        <CpButton type="success">
          后置图标
          <template #suffix>▶</template>
        </CpButton>
        <CpButton type="warning" variant="semi">
          <template #prefix>⚡</template>
          双侧图标
          <template #suffix>⚡</template>
        </CpButton>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px;">
          <CpButton color="#ff6b6b">Solid 自定义</CpButton>
          <CpButton color="#4ecdc4" variant="outline">Outline 自定义</CpButton>
          <CpButton color="#ffe66d" variant="semi">Semi 自定义</CpButton>
        </div>
        <div style="display: flex; gap: 12px;">
          <CpButton color="#a29bfe" variant="ghost">Ghost 自定义</CpButton>
          <CpButton color="#fd79a8" variant="neon">Neon 自定义</CpButton>
        </div>
      </div>
    `,
  }),
}

/** 自定义文字颜色 */
export const 自定义文字颜色: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin: 0;">
          💡 Success 按钮的文字默认为黑色，不随主题切换
        </p>
        <div style="display: flex; gap: 12px;">
          <CpButton type="success">默认黑色文字</CpButton>
          <CpButton type="success" text-color="#fff">白色文字</CpButton>
          <CpButton type="success" text-color="#00f0ff">赛博青文字</CpButton>
        </div>
        <div style="display: flex; gap: 12px;">
          <CpButton type="primary" text-color="#ffe66d">Primary + 黄色文字</CpButton>
          <CpButton type="warning" text-color="#000">Warning + 黑色文字</CpButton>
          <CpButton variant="outline" text-color="#ff6b6b">Outline + 红色文字</CpButton>
        </div>
      </div>
    `,
  }),
}

/** 形状模式 */
export const 形状模式: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="width: 80px; color: #888;">clip (切角):</span>
          <CpButton shape="clip">默认切角</CpButton>
          <CpButton shape="clip" variant="outline" type="success">切角 Outline</CpButton>
          <CpButton shape="clip" variant="semi" type="warning">切角 Semi</CpButton>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="width: 80px; color: #888;">no-clip (直角):</span>
          <CpButton shape="no-clip">直角按钮</CpButton>
          <CpButton shape="no-clip" variant="outline" type="success">直角 Outline</CpButton>
          <CpButton shape="no-clip" variant="semi" type="warning">直角 Semi</CpButton>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="width: 80px; color: #888;">round (圆角):</span>
          <CpButton shape="round">圆角按钮</CpButton>
          <CpButton shape="round" variant="outline" type="success">圆角 Outline</CpButton>
          <CpButton shape="round" variant="semi" type="warning">圆角 Semi</CpButton>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="width: 80px; color: #888;">circle (胶囊):</span>
          <CpButton shape="circle">胶囊按钮</CpButton>
          <CpButton shape="circle" variant="outline" type="success">胶囊 Outline</CpButton>
          <CpButton shape="circle" variant="semi" type="warning">胶囊 Semi</CpButton>
        </div>
      </div>
    `,
  }),
}

/** 虚线边框 */
export const 虚线边框: Story = {
  render: () => ({
    components: { CpButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <CpButton dashed variant="outline">虚线 Outline</CpButton>
        <CpButton dashed variant="semi" type="success">虚线 Semi</CpButton>
        <CpButton dashed variant="neon" type="warning">虚线 Neon</CpButton>
        <CpButton dashed shape="round" variant="outline" type="error">虚线 + 圆角</CpButton>
      </div>
    `,
  }),
}

/** 暗黑/日间模式 */
export const 主题模式: Story = {
  render: () => ({
    components: { CpButton },
    setup() {
      const toggleTheme = () => {
        const html = document.documentElement
        const current = html.getAttribute('data-theme')
        html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light')
      }
      return { toggleTheme }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <CpButton @click="toggleTheme" type="primary" variant="semi">
            🌓 点击切换主题
          </CpButton>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary">Primary</CpButton>
          <CpButton type="success">Success</CpButton>
          <CpButton type="warning">Warning</CpButton>
          <CpButton type="error">Error</CpButton>
          <CpButton type="info">Info</CpButton>
          <CpButton type="default">Default</CpButton>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary" variant="outline">Primary</CpButton>
          <CpButton type="success" variant="semi">Success</CpButton>
          <CpButton type="warning" variant="ghost">Warning</CpButton>
          <CpButton type="error" variant="neon">Error</CpButton>
        </div>
        <p style="color: var(--cp-text-secondary); font-size: 12px;">
          💡 切换后观察按钮在不同主题下的表现
        </p>
      </div>
    `,
  }),
}

/** 自定义主题色 */
export const 自定义主题色: Story = {
  render: () => ({
    components: { CpButton },
    setup() {
      const setThemeColor = (color: string) => {
        document.documentElement.style.setProperty('--cp-color-primary', color)
      }
      const resetTheme = () => {
        document.documentElement.style.removeProperty('--cp-color-primary')
      }
      return { setThemeColor, resetTheme }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin: 0;">
          💡 只需覆盖 <code style="color: var(--cp-color-primary);">--cp-color-primary</code>，
          <code style="color: var(--cp-color-primary);">-light</code> 和
          <code style="color: var(--cp-color-primary);">-dark</code> 会通过 color-mix() 自动推导，
          无需手动设置。其它颜色（success / warning / error / info）同理。
        </p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <CpButton @click="setThemeColor('#ff6b6b')" color="#ff6b6b" size="sm">珊瑚红</CpButton>
          <CpButton @click="setThemeColor('#4ecdc4')" color="#4ecdc4" size="sm">薄荷绿</CpButton>
          <CpButton @click="setThemeColor('#ffe66d')" color="#ffe66d" size="sm">柠檬黄</CpButton>
          <CpButton @click="setThemeColor('#a29bfe')" color="#a29bfe" size="sm">薰衣草紫</CpButton>
          <CpButton @click="setThemeColor('#fd79a8')" color="#fd79a8" size="sm">樱花粉</CpButton>
          <CpButton @click="setThemeColor('#00f0ff')" color="#00f0ff" size="sm">赛博青</CpButton>
          <CpButton @click="resetTheme()" variant="outline" size="sm">🔄 重置</CpButton>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <CpButton type="primary">Solid</CpButton>
          <CpButton type="primary" variant="outline">Outline</CpButton>
          <CpButton type="primary" variant="semi">Semi</CpButton>
          <CpButton type="primary" variant="ghost">Ghost</CpButton>
          <CpButton type="primary" variant="neon">Neon ✨</CpButton>
        </div>
        <p style="color: var(--cp-text-muted); font-size: 11px; margin: 0;">
          观察 Neon 的发光效果和 Semi 的半透明背景均自动跟随主色变化
        </p>
      </div>
    `,
  }),
}

/** 纯图标按钮 (IconButton) */
export const 纯图标按钮: Story = {
  name: 'IconButton 纯图标按钮',
  render: () => ({
    components: { CpButton },
    setup() {
      // 使用顶层导入的图标
      return {
        MdiHome, MdiCog, MdiPlus,
        MdiSearch: MdiMagnify, // 重命名为模板中使用的名称
        MdiHeart, MdiStar,
        MdiEdit: MdiPencil,   // 重命名为模板中使用的名称
        MdiDelete
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 使用 <code style="color: var(--cp-color-primary);">:icon</code> 属性传入图标组件，按钮将变为正方形图标按钮
        </p>
        
        <!-- 尺寸对比 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">尺寸 Sizes</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiHome" size="sm" />
            <CpButton :icon="MdiHome" size="md" />
            <CpButton :icon="MdiHome" size="lg" />
          </div>
        </div>
        
        <!-- 颜色类型 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">颜色类型 Types</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiPlus" type="primary" />
            <CpButton :icon="MdiHeart" type="success" />
            <CpButton :icon="MdiStar" type="warning" />
            <CpButton :icon="MdiDelete" type="error" />
            <CpButton :icon="MdiSearch" type="info" />
            <CpButton :icon="MdiCog" type="default" />
          </div>
        </div>
        
        <!-- 变体 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">变体 Variants</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiEdit" type="primary" variant="solid" />
            <CpButton :icon="MdiEdit" type="primary" variant="semi" />
            <CpButton :icon="MdiEdit" type="primary" variant="outline" />
            <CpButton :icon="MdiEdit" type="primary" variant="ghost" />
            <CpButton :icon="MdiEdit" type="primary" variant="neon" />
          </div>
        </div>
        
        <!-- 形状 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">形状 Shapes</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiPlus" type="success" shape="clip" />
            <CpButton :icon="MdiPlus" type="success" shape="no-clip" />
            <CpButton :icon="MdiPlus" type="success" shape="round" />
            <CpButton :icon="MdiPlus" type="success" shape="circle" />
          </div>
        </div>
        
        <!-- 状态 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">状态 States</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiCog" type="primary" />
            <CpButton :icon="MdiCog" type="primary" disabled />
            <CpButton :icon="MdiCog" type="primary" loading />
          </div>
        </div>
      </div>
    `,
  }),
}

/** 正方形按钮 (Square) */
export const 正方形按钮: Story = {
  name: 'Square 正方形按钮',
  render: () => ({
    components: { CpButton },
    setup() {
      return { MdiHome, MdiCog, MdiPlus, MdiHeart, MdiStar }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 使用 <code style="color: var(--cp-color-primary);">square</code> 属性让按钮变为正方形，表现与 icon-only 一致，但可自由放置任意内容
        </p>
        
        <!-- 尺寸对比 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">尺寸 Sizes</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton square size="sm">A</CpButton>
            <CpButton square size="md">B</CpButton>
            <CpButton square size="lg">C</CpButton>
          </div>
        </div>
        
        <!-- 颜色类型 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">颜色类型 Types</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton square type="primary">1</CpButton>
            <CpButton square type="success">2</CpButton>
            <CpButton square type="warning">3</CpButton>
            <CpButton square type="error">4</CpButton>
            <CpButton square type="info">5</CpButton>
            <CpButton square type="default">6</CpButton>
          </div>
        </div>
        
        <!-- 变体 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">变体 Variants</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton square type="primary" variant="solid">S</CpButton>
            <CpButton square type="primary" variant="semi">Se</CpButton>
            <CpButton square type="primary" variant="outline">O</CpButton>
            <CpButton square type="primary" variant="ghost">G</CpButton>
            <CpButton square type="primary" variant="neon">N</CpButton>
          </div>
        </div>
        
        <!-- 形状 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">形状 Shapes</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton square type="success" shape="clip">✦</CpButton>
            <CpButton square type="success" shape="no-clip">✦</CpButton>
            <CpButton square type="success" shape="round">✦</CpButton>
            <CpButton square type="success" shape="circle">✦</CpButton>
          </div>
        </div>

        <!-- 与 icon-only 对比 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">与 icon-only 对比</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiHome" type="primary" />
            <CpButton square type="primary">
              <template #prefix>🏠</template>
            </CpButton>
            <span style="color: var(--cp-text-tertiary); font-size: 12px;">← 两者尺寸一致</span>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 前缀/后缀图标与颜色 */
export const 前后缀图标: Story = {
  name: '前后缀图标 & 颜色控制',
  render: () => ({
    components: { CpButton },
    setup() {
      return { MdiHome, MdiCog, MdiPlus, MdiMagnify, MdiHeart, MdiStar, MdiPencil, MdiDelete }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 使用 <code style="color: var(--cp-color-primary);">prefix-icon</code> / <code style="color: var(--cp-color-primary);">suffix-icon</code> 快捷传入图标
        </p>
        
        <!-- 基础用法 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">前后缀图标</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :prefix-icon="MdiHome">首页</CpButton>
            <CpButton :suffix-icon="MdiCog" type="success">设置</CpButton>
            <CpButton :prefix-icon="MdiStar" :suffix-icon="MdiHeart" type="warning">收藏</CpButton>
          </div>
        </div>
        
        <!-- 图标颜色 (icon-color) -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">
            icon-color: 统一控制所有图标颜色
          </p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :prefix-icon="MdiHeart" icon-color="#ff6b6b">红色图标</CpButton>
            <CpButton :icon="MdiStar" icon-color="#ffe66d" />
            <CpButton :prefix-icon="MdiPlus" :suffix-icon="MdiCog" icon-color="#4ecdc4" type="info">统一绿色</CpButton>
          </div>
        </div>
        
        <!-- 单独控制颜色 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">
            prefix-icon-color / suffix-icon-color: 单独控制
          </p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :prefix-icon="MdiHeart" prefix-icon-color="#ff6b6b" type="primary">红色前缀</CpButton>
            <CpButton :suffix-icon="MdiStar" suffix-icon-color="#ffe66d" type="success">黄色后缀</CpButton>
            <CpButton 
              :prefix-icon="MdiHeart" 
              :suffix-icon="MdiStar" 
              prefix-icon-color="#ff6b6b"
              suffix-icon-color="#ffe66d"
            >双色图标</CpButton>
          </div>
        </div>
        
        <!-- 颜色优先级演示 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">
            优先级: prefix-icon-color &gt; icon-color &gt; text-color
          </p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton 
              :prefix-icon="MdiHeart" 
              :suffix-icon="MdiStar"
              text-color="#888"
            >text-color #888</CpButton>
            <CpButton 
              :prefix-icon="MdiHeart" 
              :suffix-icon="MdiStar"
              text-color="#888"
              icon-color="#4ecdc4"
            >icon-color 覆盖</CpButton>
            <CpButton 
              :prefix-icon="MdiHeart" 
              :suffix-icon="MdiStar"
              text-color="#888"
              icon-color="#4ecdc4"
              prefix-icon-color="#ff6b6b"
            >prefix 单独覆盖</CpButton>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 图标尺寸控制 */
export const 图标尺寸控制: Story = {
  name: '图标尺寸控制',
  render: () => ({
    components: { CpButton },
    setup() {
      return { MdiHome, MdiCog, MdiStar, MdiHeart }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 图标尺寸默认与按钮尺寸同步 (sm/md/lg)，也可通过 <code style="color: var(--cp-color-primary);">icon-size</code> 统一覆盖，或通过各自的 size 属性精确控制。
        </p>
        
        <!-- 自动同步演示 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">自动同步 (默认行为)</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton size="sm" :prefix-icon="MdiHome">Small</CpButton>
            <CpButton size="md" :prefix-icon="MdiHome">Medium</CpButton>
            <CpButton size="lg" :prefix-icon="MdiHome">Large</CpButton>
          </div>
        </div>

        <!-- 统一覆盖 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">统一覆盖 (icon-size="lg")</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton size="sm" :icon="MdiStar" icon-size="lg" />
            <CpButton size="sm" :prefix-icon="MdiStar" icon-size="lg">小按钮大图标</CpButton>
          </div>
        </div>

        <!-- 精确控制 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">精确控制 (prefix-icon-size / suffix-icon-size)</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton 
              :prefix-icon="MdiStar" 
              :suffix-icon="MdiHeart" 
              prefix-icon-size="lg" 
              suffix-icon-size="sm"
            >不同尺寸图标</CpButton>
          </div>
        </div>

        <!-- 自定义数值 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">自定义数值 (px / rem / em)</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiCog" icon-size="32" />
            <CpButton :prefix-icon="MdiCog" icon-size="1.2rem">1.2rem 图标</CpButton>
            <CpButton :prefix-icon="MdiCog" icon-size="1em">与文字同高 (1em)</CpButton>
          </div>
        </div>
      </div>
    `,
  }),
}

/** 高度控制 */
export const 高度控制: Story = {
  render: () => ({
    components: { CpButton },
    setup() {
      return { MdiPlus, MdiCog }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <p style="color: var(--cp-text-secondary); font-size: 14px; margin: 0;">
          💡 现在可以通过 SCSS/CSS 变量或 size 属性精确控制按钮高度。
        </p>
        
        <!-- CSS 变量覆盖 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">1. CSS 变量覆盖 (Preset size overrides)</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton size="md" style="--cp-button-height-md: 48px;">MD 变为 48px</CpButton>
            <CpButton size="sm" style="--cp-button-height-sm: 40px;">SM 变为 40px</CpButton>
          </div>
        </div>

        <!-- size 属性自定义 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">2. size 属性自定义 (Custom size prop)</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton size="60px">60px 按钮</CpButton>
            <CpButton size="24px" :icon="MdiPlus" shape="circle" />
            <CpButton size="2rem">2rem 按钮</CpButton>
          </div>
        </div>

        <!-- IconOnly 模式同步 -->
        <div>
          <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0 0 8px;">3. IconButton 尺寸同步</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <CpButton :icon="MdiCog" size="50px" type="primary" />
            <CpButton :icon="MdiCog" size="30px" type="success" />
          </div>
        </div>
      </div>
    `,
  }),
}
