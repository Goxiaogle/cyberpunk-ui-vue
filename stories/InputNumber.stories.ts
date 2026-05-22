import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpInputNumber } from '@cyberpunk-vue/components'

/**
 * # CpInputNumber 数字输入框
 * 
 * 赛博朋克风格数字输入组件，带增减控制按钮。
 * 
 * ## 特性
 * - 📐 机甲风切角设计
 * - ➕➖ 增减控制按钮
 * - 🖱️ hover / focus 滚轮增减
 * - 🔢 精度控制
 * - 📏 范围限制
 */
const meta: Meta<typeof CpInputNumber> = {
  title: '表单 Form/InputNumber 数字输入',
  component: CpInputNumber,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number',
      description: '绑定值',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    min: {
      control: 'number',
      description: '最小值',
    },
    max: {
      control: 'number',
      description: '最大值',
    },
    step: {
      control: 'number',
      description: '步长',
    },
    wheel: {
      control: 'boolean',
      description: '是否启用滚轮增减',
    },
    wheelReverse: {
      control: 'boolean',
      description: '是否反转滚轮方向',
    },
    wheelStep: {
      control: 'number',
      description: '滚轮独立步长',
    },
    precision: {
      control: 'number',
      description: '精度',
    },
    controls: {
      control: 'boolean',
      description: '是否显示控制按钮',
    },
    controlsPosition: {
      control: 'select',
      options: ['both', 'right'],
      description: '控制按钮位置',
    },
    disabled: {
      control: 'boolean',
      description: '禁用',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
  },
}

export default meta
type Story = StoryObj<typeof CpInputNumber>

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    modelValue: 1,
  },
  render: (args: any) => ({
    components: { CpInputNumber },
    setup() {
      const value = ref(args.modelValue ?? 1)
      // 排除 modelValue 避免与 v-model 冲突
      const { modelValue: _modelValue, ...restArgs } = args
      return { restArgs, value }
    },
    template: `
      <div>
        <CpInputNumber v-model="value" v-bind="restArgs" />
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-top: 8px;">
          当前值: {{ value }}
        </p>
      </div>
    `,
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpInputNumber },
    setup() {
      const v1 = ref(1)
      const v2 = ref(2)
      const v3 = ref(3)
      const rightV1 = ref(1)
      const rightV2 = ref(2)
      const rightV3 = ref(3)
      return { v1, v2, v3, rightV1, rightV2, rightV3 }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 160px); gap: 16px;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <p style="color: var(--cp-text-muted); font-size: 12px; margin: 0;">两侧控制器</p>
          <CpInputNumber v-model="v1" size="sm" />
          <CpInputNumber v-model="v2" size="md" />
          <CpInputNumber v-model="v3" size="lg" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <p style="color: var(--cp-text-muted); font-size: 12px; margin: 0;">右侧控制器</p>
          <CpInputNumber v-model="rightV1" size="sm" controls-position="right" />
          <CpInputNumber v-model="rightV2" size="md" controls-position="right" />
          <CpInputNumber v-model="rightV3" size="lg" controls-position="right" />
        </div>
      </div>
    `,
  }),
}

/** 范围限制 */
export const 范围限制: Story = {
  render: () => ({
    components: { CpInputNumber },
    setup() {
      const value = ref(5)
      return { value }
    },
    template: `
      <div>
        <CpInputNumber v-model="value" :min="1" :max="10" />
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-top: 8px;">
          范围: 1 - 10
        </p>
      </div>
    `,
  }),
}

/** 步长与精度 */
export const 步长与精度: Story = {
  render: () => ({
    components: { CpInputNumber },
    setup() {
      const price = ref(9.99)
      return { price }
    },
    template: `
      <div>
        <CpInputNumber v-model="price" :step="0.1" :precision="2" :min="0" />
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-top: 8px;">
          步长: 0.1, 精度: 2位小数
        </p>
      </div>
    `,
  }),
}

/** 滚轮增减 */
export const 滚轮增减: Story = {
  render: () => ({
    components: { CpInputNumber },
    setup() {
      const normal = ref(10)
      const reverse = ref(10)
      const customStep = ref(10)
      return { normal, reverse, customStep }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">默认方向：上滚 +1，下滚 -1</p>
          <CpInputNumber v-model="normal" :min="0" :max="20" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">反转方向：上滚 -1，下滚 +1</p>
          <CpInputNumber v-model="reverse" :min="0" :max="20" wheel-reverse />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">独立滚轮步长：按钮 ±1，滚轮 ±5</p>
          <CpInputNumber v-model="customStep" :min="0" :max="50" :step="1" :wheel-step="5" />
        </div>
      </div>
    `,
  }),
}

/** 控制按钮位置 */
export const 控制按钮位置: Story = {
  render: () => ({
    components: { CpInputNumber },
    setup() {
      const v1 = ref(1)
      const v2 = ref(1)
      const v3 = ref(1)
      return { v1, v2, v3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">Both (两侧)</p>
          <CpInputNumber v-model="v1" controls-position="both" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">Right (右侧)</p>
          <CpInputNumber v-model="v2" controls-position="right" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">无控制按钮</p>
          <CpInputNumber v-model="v3" :controls="false" />
        </div>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpInputNumber },
    setup() {
      const v1 = ref(10)
      const v2 = ref(20)
      const v3 = ref(30)
      return { v1, v2, v3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">珊瑚红</p>
          <CpInputNumber v-model="v1" color="#ff6b6b" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">薄荷绿</p>
          <CpInputNumber v-model="v2" color="#4ecdc4" />
        </div>
        <div>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 4px;">薰衣草紫 (右侧按钮)</p>
          <CpInputNumber v-model="v3" color="#a29bfe" controls-position="right" />
        </div>
      </div>
    `,
  }),
}
