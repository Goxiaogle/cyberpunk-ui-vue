import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpSwitch } from '@cyberpunk-vue/components'

/**
 * # CpSwitch 开关 (V2)
 * 
 * 赛博朋克风格开关组件，全面升级视觉与功能。
 * 
 * ## 新增特性 (V2)
 * - 📏 `fitText`: 自适应宽度模式，完美支持长文本
 * - 🌀 专属 "能量核心" Loading 动画
 * - ✨ 增强的金属材质与 neon 光效
 * - 🔴🟢🔵 `type` 属性支持颜色预设
 */
const meta: Meta<typeof CpSwitch> = {
  title: '表单 Form/Switch 开关',
  component: CpSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '绑定值',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '开关尺寸',
    },
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: '颜色类型预设',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    loading: {
      control: 'boolean',
      description: 'Loading 状态',
    },
    fitText: {
      control: 'boolean',
      description: '是否适应文字宽度',
      table: { category: 'Layout' },
    },
    textPosition: {
      control: 'select',
      options: ['left', 'right', 'inner'],
      description: '文字显示位置',
      table: { category: 'Layout' },
    },
    width: {
      control: 'text',
      description: '强制宽度',
      table: { category: 'Layout' },
    },
    activeText: {
      control: 'text',
      description: '选中时显示的文字',
    },
    inactiveText: {
      control: 'text',
      description: '未选中时显示的文字',
    },
    color: { 
      control: 'color',
      description: '自定义选中颜色（优先于 type）',
    },
    inactiveColor: { 
      control: 'color',
      description: '自定义未选中颜色',
    },
  },
  args: {
    modelValue: false,
    size: 'md',
    type: 'primary',
    disabled: false,
    loading: false,
    fitText: false,
    textPosition: 'right',
    activeText: '',
    inactiveText: '',
  },
}

export default meta
type Story = StoryObj<typeof CpSwitch>

/** 
 * Playground - 使用右侧 Controls 面板调整所有属性 
 */
export const Playground: Story = {
  render: (args) => ({
    components: { CpSwitch },
    setup() {
      const value = ref(args.modelValue)
      return { args, value }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <CpSwitch 
          v-model="value" 
          :size="args.size"
          :type="args.type"
          :disabled="args.disabled"
          :loading="args.loading"
          :fit-text="args.fitText"
          :text-position="args.textPosition"
          :width="args.width"
          :active-text="args.activeText"
          :inactive-text="args.inactiveText"
          :color="args.color"
          :inactive-color="args.inactiveColor"
        />
        <span style="font-family: 'Rajdhani'; color: var(--cp-text-secondary);">
          STATUS: {{ value ? 'ACTIVE' : 'STANDBY' }}
        </span>
      </div>
    `,
  }),
}

/** 基础用法 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpSwitch },
    setup() {
      const value = ref(false)
      return { value }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <CpSwitch v-model="value" />
        <span style="font-family: 'Rajdhani'; color: var(--cp-text-secondary);">
          STATUS: {{ value ? 'ACTIVE' : 'STANDBY' }}
        </span>
      </div>
    `,
  }),
}

/** 炫酷 Loading */
export const 能量核心Loading: Story = {
  render: () => ({
    components: { CpSwitch },
    setup() {
      const v1 = ref(true)
      const v2 = ref(false)
      return { v1, v2 }
    },
    template: `
      <div style="display: flex; gap: 24px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <CpSwitch v-model="v1" loading />
          <span style="font-size: 12px; color: var(--cp-text-muted);">Loading (On)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <CpSwitch v-model="v2" loading />
          <span style="font-size: 12px; color: var(--cp-text-muted);">Loading (Off)</span>
        </div>
      </div>
    `,
  }),
}

/** fitText 长文本自适应 */
export const 长文本自适应: Story = {
  render: () => ({
    components: { CpSwitch },
    setup() {
      const v1 = ref(true)
      const v2 = ref(false)
      const v3 = ref(true)
      return { v1, v2, v3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <div>
          <p style="color: var(--cp-text-secondary); margin-bottom: 8px; font-size: 12px;">标准长度</p>
          <CpSwitch 
            v-model="v1" 
            fit-text 
            text-position="inner"
            active-text="System Online" 
            inactive-text="System Offline" 
          />
        </div>
        
        <div>
          <p style="color: var(--cp-text-secondary); margin-bottom: 8px; font-size: 12px;">超长文本</p>
          <CpSwitch 
            v-model="v2" 
            fit-text 
            text-position="inner"
            active-text="Warning: Self Destruct Sequence Initiated" 
            inactive-text="Safety Protocols Engaged" 
            color="#ff4757"
          />
        </div>

        <div>
           <p style="color: var(--cp-text-secondary); margin-bottom: 8px; font-size: 12px;">中文支持</p>
           <CpSwitch 
              v-model="v3"
              fit-text
              text-position="inner"
              size="lg"
              active-text="神经连接：已同步"
              inactive-text="神经连接：断开"
           />
        </div>
      </div>
    `,
  }),
}

/** 文字位置 */
export const 文字位置: Story = {
  render: () => ({
    components: { CpSwitch },
    setup() {
      const left = ref(true)
      const right = ref(false)
      const inner = ref(true)
      return { left, right, inner }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <CpSwitch
            v-model="left"
            text-position="left"
            active-text="ONLINE"
            inactive-text="OFFLINE"
          />
          <span style="color: var(--cp-text-muted);">Left</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <CpSwitch
            v-model="right"
            text-position="right"
            active-text="ONLINE"
            inactive-text="OFFLINE"
          />
          <span style="color: var(--cp-text-muted);">Right (默认)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <CpSwitch
            v-model="inner"
            text-position="inner"
            active-text="ON"
            inactive-text="OFF"
          />
          <span style="color: var(--cp-text-muted);">Inner</span>
        </div>
      </div>
    `,
  }),
}

/** 视觉美化展示 */
export const 视觉美化: Story = {
    render: () => ({
      components: { CpSwitch },
      setup() {
        const v1 = ref(true)
        const v2 = ref(true)
        const v3 = ref(true)
        return { v1, v2, v3 }
      },
      template: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <CpSwitch v-model="v1" size="lg" text-position="inner" active-text="CYBER" inactive-text="PUNK" />
            <span style="color: var(--cp-text-muted);">Large</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <CpSwitch v-model="v2" size="md" />
            <span style="color: var(--cp-text-muted);">Medium</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <CpSwitch v-model="v3" size="sm" />
            <span style="color: var(--cp-text-muted);">Small</span>
          </div>
        </div>
      `,
    }),
  }

/** 颜色类型 (type) */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpSwitch },
    setup() {
      const switches = ref({
        primary: true,
        success: true,
        warning: true,
        error: true,
        info: true,
      })
      return { switches }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="switches.primary" type="primary" />
          <span style="color: var(--cp-text-secondary);">Primary (默认)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="switches.success" type="success" />
          <span style="color: var(--cp-text-secondary);">Success</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="switches.warning" type="warning" />
          <span style="color: var(--cp-text-secondary);">Warning</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="switches.error" type="error" />
          <span style="color: var(--cp-text-secondary);">Error / Danger</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="switches.info" type="info" />
          <span style="color: var(--cp-text-secondary);">Info</span>
        </div>
      </div>
    `,
  }),
}

/** 自定义颜色 (color) */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpSwitch },
    setup() {
      const v1 = ref(true)
      const v2 = ref(true)
      return { v1, v2 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="v1" color="#ff00ff" />
          <span style="color: var(--cp-text-secondary);">自定义紫色 (#ff00ff)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpSwitch v-model="v2" color="#00ff88" inactive-color="#ff8800" />
          <span style="color: var(--cp-text-secondary);">自定义活跃+未活跃颜色</span>
        </div>
      </div>
    `,
  }),
}

