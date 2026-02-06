import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { CpInput } from '../packages/components'
import MdiMagnify from '~icons/mdi/magnify'
import MdiAccount from '~icons/mdi/account'
import MdiLock from '~icons/mdi/lock'
import MdiEmail from '~icons/mdi/email'

/**
 * # CpInput 输入框
 * 
 * 赛博朋克风格输入框组件，支持多种尺寸和形态变体。
 * 
 * ## 特性
 * - 🎨 3 种形态：outline、filled、ghost
 * - 📐 3 种尺寸：sm、md、lg
 * - ⚡ 机甲风切角设计
 * - ✨ Focus 霓虹发光效果
 * - 🧹 可清空功能
 */
const meta: Meta<typeof CpInput> = {
  title: '表单 Form/Input 输入框',
  component: CpInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email', 'tel', 'url'],
      description: '输入类型',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '输入框尺寸',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'ghost'],
      description: '形态变体',
      table: {
        defaultValue: { summary: 'outline' },
      },
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round'],
      description: '形状模式',
      table: {
        defaultValue: { summary: 'clip' },
      },
    },
    placeholder: {
      control: 'text',
      description: '占位文本',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
    },
    clearable: {
      control: 'boolean',
      description: '是否可清空',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
    showPassword: {
      control: 'boolean',
      description: '密码可见性切换',
    },
    showWordLimit: {
      control: 'boolean',
      description: '显示字数统计',
    },
    maxlength: {
      control: 'number',
      description: '最大输入长度',
    },
    inactiveBorderColor: {
      control: 'color',
      description: '未聚焦状态边框颜色',
    },
    placeholderColor: {
      control: 'color',
      description: 'Placeholder 文字颜色',
    },
    textColor: {
      control: 'color',
      description: '文字颜色',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpInput>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    placeholder: '请输入内容...',
    size: 'md',
    variant: 'outline',
  },
  render: (args: any) => ({
    components: { CpInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="width: 300px;">
        <CpInput v-model="value" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          当前值: {{ value || '(空)' }}
        </p>
      </div>
    `,
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpInput size="sm" placeholder="小型 Small" />
        <CpInput size="md" placeholder="中型 Medium" />
        <CpInput size="lg" placeholder="大型 Large" />
      </div>
    `,
  }),
}

/** 形态变体 */
export const 形态变体: Story = {
  render: () => ({
    components: { CpInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Outline (默认)</p>
          <CpInput variant="outline" placeholder="描边输入框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Filled</p>
          <CpInput variant="filled" placeholder="填充输入框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Ghost</p>
          <CpInput variant="ghost" placeholder="幽灵输入框" />
        </div>
      </div>
    `,
  }),
}

/** 形状模式 */
export const 形状模式: Story = {
  render: () => ({
    components: { CpInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Clip (切角)</p>
          <CpInput shape="clip" placeholder="机甲切角" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">No-clip (直角)</p>
          <CpInput shape="no-clip" placeholder="直角输入框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Round (圆角)</p>
          <CpInput shape="round" placeholder="圆角输入框" />
        </div>
      </div>
    `,
  }),
}

/** 前后插槽 (图标) */
export const 前后插槽: Story = {
  render: () => ({
    components: { CpInput, MdiMagnify, MdiAccount, MdiLock, MdiEmail },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpInput placeholder="搜索...">
          <template #prefix><MdiMagnify /></template>
        </CpInput>
        <CpInput placeholder="用户名">
          <template #prefix><MdiAccount /></template>
        </CpInput>
        <CpInput type="password" placeholder="密码">
          <template #prefix><MdiLock /></template>
        </CpInput>
        <CpInput placeholder="邮箱">
          <template #prefix><MdiEmail /></template>
          <template #suffix>@example.com</template>
        </CpInput>
      </div>
    `,
  }),
}

/** 禁用与只读 */
export const 禁用与只读: Story = {
  render: () => ({
    components: { CpInput },
    setup() {
      const value = ref('只读内容')
      return { value }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpInput disabled placeholder="禁用状态" />
        <CpInput :model-value="value" readonly />
      </div>
    `,
  }),
}

/** 可清空 */
export const 可清空: Story = {
  render: () => ({
    components: { CpInput },
    setup() {
      const value = ref('可清空内容')
      return { value }
    },
    template: `
      <div style="width: 300px;">
        <CpInput v-model="value" clearable placeholder="输入后可清空" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          💡 输入内容后，右侧会出现清空按钮
        </p>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpInput color="#ff6b6b" placeholder="珊瑚红" />
        <CpInput color="#4ecdc4" placeholder="薄荷绿" variant="filled" />
        <CpInput color="#a29bfe" placeholder="薰衣草紫" variant="ghost" />
      </div>
    `,
  }),
}

/** 自定义边框与占位符颜色 */
export const 自定义边框与占位符颜色: Story = {
  render: () => ({
    components: { CpInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">自定义 Inactive 边框颜色</p>
          <CpInput inactive-border-color="#ff6b6b" placeholder="红色边框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">自定义 Placeholder 颜色</p>
          <CpInput placeholder-color="#4ecdc4" placeholder="薄荷绿提示文字" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">同时自定义边框和占位符</p>
          <CpInput 
            inactive-border-color="#a29bfe" 
            placeholder-color="rgba(162, 155, 254, 0.7)"
            placeholder="紫色主题" 
            variant="filled"
          />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Ghost 变体 + 自定义颜色</p>
          <CpInput 
            inactive-border-color="#ffd93d" 
            placeholder-color="#ffd93d"
            placeholder="金色幽灵输入框" 
            variant="ghost"
          />
        </div>
      </div>
    `,
  }),
}

/** 自定义文字颜色 */
export const 自定义文字颜色: Story = {
  render: () => ({
    components: { CpInput },
    setup() {
      const redValue = ref('珊瑚红文字')
      const greenValue = ref('薄荷绿文字')
      const purpleValue = ref('薰衣草紫文字')
      return { redValue, greenValue, purpleValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpInput v-model="redValue" text-color="#ff6b6b" />
        <CpInput v-model="greenValue" text-color="#4ecdc4" variant="filled" />
        <CpInput v-model="purpleValue" text-color="#a29bfe" variant="ghost" />
      </div>
    `,
  }),
}

/** 综合示例 */
export const 综合示例: Story = {
  render: () => ({
    components: { CpInput, MdiAccount, MdiLock },
    setup() {
      const username = ref('')
      const password = ref('')
      return { username, password }
    },
    template: `
      <div style="width: 320px; padding: 24px; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <h3 style="color: var(--cp-color-primary); margin-bottom: 16px; font-family: 'Orbitron', sans-serif;">
          SYSTEM LOGIN
        </h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <CpInput 
            v-model="username" 
            placeholder="用户名" 
            variant="filled"
            clearable
          >
            <template #prefix><MdiAccount /></template>
          </CpInput>
          <CpInput 
            v-model="password" 
            type="password" 
            placeholder="密码" 
            variant="filled"
            show-password
          >
            <template #prefix><MdiLock /></template>
          </CpInput>
        </div>
      </div>
    `,
  }),
}

/** 密码可见性切换 */
export const 密码可见性: Story = {
  render: () => ({
    components: { CpInput, MdiLock },
    setup() {
      const password = ref('cyberpunk2077')
      return { password }
    },
    template: `
      <div style="width: 300px;">
        <CpInput 
          v-model="password" 
          type="password" 
          placeholder="输入密码" 
          show-password
        >
          <template #prefix><MdiLock /></template>
        </CpInput>
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          👁 点击眼睛图标切换密码可见性
        </p>
      </div>
    `,
  }),
}

/** 字数统计 */
export const 字数统计: Story = {
  render: () => ({
    components: { CpInput },
    setup() {
      const bio = ref('')
      const comment = ref('已有内容')
      return { bio, comment }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">个人简介</p>
          <CpInput 
            v-model="bio" 
            placeholder="请输入个人简介" 
            :maxlength="50"
            show-word-limit
          />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">配合 Filled 变体</p>
          <CpInput 
            v-model="comment" 
            variant="filled"
            :maxlength="100"
            show-word-limit
            clearable
          />
        </div>
      </div>
    `,
  }),
}

