import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { CpSlider } from '@cyberpunk-vue/components'

const meta: Meta<typeof CpSlider> = {
  title: '表单 Form/Slider 滑块',
  component: CpSlider,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'number' },
      description: '绑定值',
    },
    min: {
      control: { type: 'number' },
      description: '最小值',
    },
    max: {
      control: { type: 'number' },
      description: '最大值',
    },
    step: {
      control: { type: 'number' },
      description: '步长',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '滑块尺寸',
    },
    shape: {
      control: { type: 'select' },
      options: ['clip', 'no-clip', 'round'],
      description: '滑块形状',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
    },
    range: {
      control: { type: 'boolean' },
      description: '是否为范围选择',
    },
    showTooltip: {
      control: { type: 'boolean' },
      description: '是否显示数值提示',
    },
    showStops: {
      control: { type: 'boolean' },
      description: '是否显示刻度点',
    },
    vertical: {
      control: { type: 'boolean' },
      description: '是否垂直模式',
    },
    color: {
      control: { type: 'color' },
      description: '自定义颜色',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpSlider>

// ========== 基础用法 ==========
export const Default: Story = {
  name: '基础用法',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value = ref(30)
      return { value }
    },
    template: `
      <div style="padding: 40px 20px;">
        <CpSlider v-model="value" />
        <p style="margin-top: 20px; color: var(--cp-text-secondary);">
          当前值: {{ value }}
        </p>
      </div>
    `,
  }),
}

// ========== 尺寸变体 ==========
export const Sizes: Story = {
  name: '尺寸变体',
  render: () => ({
    components: { CpSlider },
    setup() {
      const valueSm = ref(25)
      const valueMd = ref(50)
      const valueLg = ref(75)
      return { valueSm, valueMd, valueLg }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px 20px;">
        <div>
          <span style="color: var(--cp-text-secondary); margin-bottom: 8px; display: block;">小 (sm)</span>
          <CpSlider v-model="valueSm" size="sm" />
        </div>
        <div>
          <span style="color: var(--cp-text-secondary); margin-bottom: 8px; display: block;">中 (md) - 默认</span>
          <CpSlider v-model="valueMd" size="md" />
        </div>
        <div>
          <span style="color: var(--cp-text-secondary); margin-bottom: 8px; display: block;">大 (lg)</span>
          <CpSlider v-model="valueLg" size="lg" />
        </div>
      </div>
    `,
  }),
}

// ========== 形状变体 ==========
export const Shapes: Story = {
  name: '形状变体',
  render: () => ({
    components: { CpSlider },
    setup() {
      const valueClip = ref(40)
      const valueNoClip = ref(60)
      const valueRound = ref(80)
      return { valueClip, valueNoClip, valueRound }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px 20px;">
        <div>
          <span style="color: var(--cp-text-secondary); margin-bottom: 8px; display: block;">切角 (clip) - 默认</span>
          <CpSlider v-model="valueClip" shape="clip" />
        </div>
        <div>
          <span style="color: var(--cp-text-secondary); margin-bottom: 8px; display: block;">直角 (no-clip)</span>
          <CpSlider v-model="valueNoClip" shape="no-clip" />
        </div>
        <div>
          <span style="color: var(--cp-text-secondary); margin-bottom: 8px; display: block;">圆角 (round)</span>
          <CpSlider v-model="valueRound" shape="round" />
        </div>
      </div>
    `,
  }),
}

// ========== 范围选择 ==========
export const Range: Story = {
  name: '范围选择',
  render: () => ({
    components: { CpSlider },
    setup() {
      const rangeValue = ref<[number, number]>([20, 80])
      return { rangeValue }
    },
    template: `
      <div style="padding: 40px 20px;">
        <CpSlider v-model="rangeValue" range />
        <p style="margin-top: 20px; color: var(--cp-text-secondary);">
          范围: {{ rangeValue[0] }} - {{ rangeValue[1] }}
        </p>
      </div>
    `,
  }),
}

// ========== 步长与刻度 ==========
export const StepsAndStops: Story = {
  name: '步长与刻度',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value = ref(50)
      return { value }
    },
    template: `
      <div style="padding: 40px 20px;">
        <CpSlider v-model="value" :step="10" show-stops />
        <p style="margin-top: 20px; color: var(--cp-text-secondary);">
          当前值: {{ value }} (步长: 10)
        </p>
      </div>
    `,
  }),
}

// ========== 刻度标记 ==========
export const Marks: Story = {
  name: '刻度标记',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value = ref(37)
      const marks = {
        0: '0°C',
        37: '体温',
        100: '沸点',
      }
      return { value, marks }
    },
    template: `
      <div style="padding: 40px 20px 60px;">
        <CpSlider v-model="value" :marks="marks" />
        <p style="margin-top: 40px; color: var(--cp-text-secondary);">
          当前温度: {{ value }}°C
        </p>
      </div>
    `,
  }),
}

// ========== 垂直模式 ==========
export const Vertical: Story = {
  name: '垂直模式',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value1 = ref(30)
      const value2 = ref(60)
      const rangeValue = ref<[number, number]>([20, 80])
      return { value1, value2, rangeValue }
    },
    template: `
      <div style="display: flex; gap: 80px; padding: 40px; height: 300px;">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <CpSlider v-model="value1" vertical height="200px" />
          <span style="margin-top: 16px; color: var(--cp-text-secondary);">基础</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <CpSlider v-model="value2" vertical height="200px" shape="round" />
          <span style="margin-top: 16px; color: var(--cp-text-secondary);">圆角</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <CpSlider v-model="rangeValue" vertical height="200px" range />
          <span style="margin-top: 16px; color: var(--cp-text-secondary);">范围</span>
        </div>
      </div>
    `,
  }),
}

// ========== 自定义颜色 ==========
export const CustomColors: Story = {
  name: '自定义颜色',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value1 = ref(40)
      const value2 = ref(60)
      const value3 = ref(80)
      return { value1, value2, value3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px 20px;">
        <CpSlider v-model="value1" color="#ff00ff" />
        <CpSlider v-model="value2" color="#00ff88" />
        <CpSlider v-model="value3" color="#ff6600" />
      </div>
    `,
  }),
}

// ========== 格式化 Tooltip ==========
export const FormatTooltip: Story = {
  name: '格式化提示',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value = ref(50)
      const formatTooltip = (val: number) => `${val}%`
      return { value, formatTooltip }
    },
    template: `
      <div style="padding: 40px 20px;">
        <CpSlider v-model="value" :format-tooltip="formatTooltip" />
        <p style="margin-top: 20px; color: var(--cp-text-secondary);">
          进度: {{ value }}%
        </p>
      </div>
    `,
  }),
}

// ========== 禁用状态 ==========
export const Disabled: Story = {
  name: '禁用状态',
  render: () => ({
    components: { CpSlider },
    setup() {
      const value = ref(50)
      const rangeValue = ref<[number, number]>([30, 70])
      return { value, rangeValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px 20px;">
        <CpSlider v-model="value" disabled />
        <CpSlider v-model="rangeValue" range disabled />
      </div>
    `,
  }),
}

// ========== 综合示例 ==========
export const Comprehensive: Story = {
  name: '综合示例',
  render: () => ({
    components: { CpSlider },
    setup() {
      const volume = ref(75)
      const brightness = ref(50)
      const temperature = ref<[number, number]>([18, 26])
      
      const tempMarks = {
        16: '16°',
        20: '20°',
        24: '24°',
        28: '28°',
      }
      
      const formatVolume = (val: number) => val === 0 ? '静音' : `${val}%`
      
      return { volume, brightness, temperature, tempMarks, formatVolume }
    },
    template: `
      <div style="padding: 40px; max-width: 400px;">
        <div style="margin-bottom: 40px;">
          <h4 style="color: var(--cp-text-primary); margin-bottom: 16px;">🔊 音量控制</h4>
          <CpSlider v-model="volume" :format-tooltip="formatVolume" color="#00ff88" />
        </div>
        
        <div style="margin-bottom: 40px;">
          <h4 style="color: var(--cp-text-primary); margin-bottom: 16px;">☀️ 亮度调节</h4>
          <CpSlider v-model="brightness" shape="round" />
        </div>
        
        <div style="margin-bottom: 60px;">
          <h4 style="color: var(--cp-text-primary); margin-bottom: 16px;">🌡️ 温度范围</h4>
          <CpSlider 
            v-model="temperature" 
            range 
            :min="16" 
            :max="28" 
            :step="1"
            :marks="tempMarks"
            color="#ff6600"
          />
        </div>
        
        <div style="padding: 16px; background: var(--cp-bg-muted); border: 1px solid var(--cp-border);">
          <p style="color: var(--cp-text-secondary); margin: 0;">
            音量: {{ volume }}% | 亮度: {{ brightness }}% | 温度: {{ temperature[0] }}° - {{ temperature[1] }}°
          </p>
        </div>
      </div>
    `,
  }),
}
