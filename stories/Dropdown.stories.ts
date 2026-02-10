import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpDropdown } from '@cyberpunk-vue/components'
import type { DropdownOption } from '@cyberpunk-vue/components'

/**
 * # CpDropdown 下拉选择器
 * 
 * 赛博朋克风格下拉选择器组件，支持多种尺寸和形态变体。
 * 
 * ## 特性
 * - 🎨 3 种形态：outline、filled、ghost
 * - 📐 3 种尺寸：sm、md、lg
 * - 🔍 可搜索过滤
 * - 🧹 可清空
 * - ⌨️ 键盘导航
 * - ⚡ 机甲风切角设计
 * - ✨ Focus 霓虹发光效果
 */
const meta: Meta<typeof CpDropdown> = {
  title: '表单 Form/Dropdown 下拉框',
  component: CpDropdown,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '下拉框尺寸',
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
    clearable: {
      control: 'boolean',
      description: '是否可清空',
    },
    filterable: {
      control: 'boolean',
      description: '是否可搜索',
    },
    inline: {
      control: 'boolean',
      description: '是否启用行内搜索',
    },
    filterPlaceholder: {
      control: 'text',
      description: '搜索框占位文本',
    },
    inactiveColor: {
      control: 'color',
      description: '未激活状态边框颜色',
    },
    placeholderColor: {
      control: 'color',
      description: 'Placeholder 文字颜色',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
    },
    clearDuration: {
      control: { type: 'number', min: 50, max: 1000, step: 50 },
      description: '清除动画持续时间 (ms)',
      table: {
        defaultValue: { summary: '150' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CpDropdown>

// 基础选项
const basicOptions: DropdownOption[] = [
  { label: 'Netrunner 网络侵入者', value: 'netrunner' },
  { label: 'Solo 独狼', value: 'solo' },
  { label: 'Techie 技术专家', value: 'techie' },
  { label: 'Nomad 游牧民', value: 'nomad' },
  { label: 'Fixer 掮客', value: 'fixer' },
]

// 更多选项
const moreOptions: DropdownOption[] = [
  { label: 'Arasaka 荒坂', value: 'arasaka' },
  { label: 'Militech 军用科技', value: 'militech' },
  { label: 'Kang Tao 康涛', value: 'kangtao' },
  { label: 'Night Corp 夜之城公司', value: 'nightcorp' },
  { label: 'Biotechnica 生物科技', value: 'biotechnica' },
  { label: 'Petrochem 石油化工', value: 'petrochem' },
  { label: 'Trauma Team 创伤小组', value: 'traumateam' },
  { label: 'NCPD 夜城警察', value: 'ncpd' },
]

// 带禁用项的选项
const optionsWithDisabled: DropdownOption[] = [
  { label: 'V - 可选择', value: 'v' },
  { label: 'Johnny Silverhand - 禁用', value: 'johnny', disabled: true },
  { label: 'Jackie Welles - 可选择', value: 'jackie' },
  { label: 'Panam Palmer - 可选择', value: 'panam' },
  { label: 'Judy Alvarez - 禁用', value: 'judy', disabled: true },
]

/** 基础用法 */
export const 基础用法: Story = {
  args: {
    placeholder: '选择职业...',
    size: 'md',
    variant: 'outline',
  },
  render: (args) => ({
    components: { CpDropdown },
    setup() {
      const value = ref('')
      return { args, value, basicOptions }
    },
    template: `
      <div style="width: 300px;">
        <CpDropdown v-model="value" v-bind="args" :options="basicOptions" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          当前值: {{ value || '(未选择)' }}
        </p>
      </div>
    `,
  }),
}

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpDropdown size="sm" :options="basicOptions" placeholder="小型 Small" />
        <CpDropdown size="md" :options="basicOptions" placeholder="中型 Medium" />
        <CpDropdown size="lg" :options="basicOptions" placeholder="大型 Large" />
      </div>
    `,
  }),
}

/** 形态变体 */
export const 形态变体: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Outline (默认)</p>
          <CpDropdown variant="outline" :options="basicOptions" placeholder="描边下拉框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Filled</p>
          <CpDropdown variant="filled" :options="basicOptions" placeholder="填充下拉框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Ghost</p>
          <CpDropdown variant="ghost" :options="basicOptions" placeholder="幽灵下拉框" />
        </div>
      </div>
    `,
  }),
}

/** 形状模式 */
export const 形状模式: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Clip (切角)</p>
          <CpDropdown shape="clip" :options="basicOptions" placeholder="机甲切角" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">No-clip (直角)</p>
          <CpDropdown shape="no-clip" :options="basicOptions" placeholder="直角下拉框" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">Round (圆角)</p>
          <CpDropdown shape="round" :options="basicOptions" placeholder="圆角下拉框" />
        </div>
      </div>
    `,
  }),
}

/** 可清空 */
export const 可清空: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const value = ref('netrunner')
      return { value, basicOptions }
    },
    template: `
      <div style="width: 300px;">
        <CpDropdown v-model="value" :options="basicOptions" clearable placeholder="选择后可清空" />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          💡 选择后，悬停时右侧会出现清空按钮
        </p>
      </div>
    `,
  }),
}

/** 清除动画速度 */
export const 清除动画速度: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const fast = ref('netrunner')
      const normal = ref('solo')
      const slow = ref('techie')
      return { fast, normal, slow, basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">快速 (80ms)</p>
          <CpDropdown v-model="fast" :options="basicOptions" clearable :clear-duration="80" />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">默认 (150ms)</p>
          <CpDropdown v-model="normal" :options="basicOptions" clearable />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">慢速 (500ms)</p>
          <CpDropdown v-model="slow" :options="basicOptions" clearable :clear-duration="500" />
        </div>
        <p style="color: var(--cp-text-secondary); font-size: 12px;">
          ⏱ 通过 clear-duration 属性控制清除动画的速度
        </p>
      </div>
    `,
  }),
}

/** 可搜索 */
export const 可搜索: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const value = ref('')
      return { value, moreOptions }
    },
    template: `
      <div style="width: 300px;">
        <CpDropdown v-model="value" :options="moreOptions" filterable placeholder="输入搜索公司..." />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          🔍 打开下拉后可输入关键词过滤选项
        </p>
      </div>
    `,
  }),
}

/** 行内搜索 */
export const 行内搜索: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const value = ref('')
      return { value, moreOptions }
    },
    template: `
      <div style="width: 300px;">
        <CpDropdown 
          v-model="value" 
          :options="moreOptions" 
          :filterable="true" 
          :inline="true" 
          placeholder="点击直接在此输入搜索..." 
        />
        <p style="color: var(--cp-text-secondary); font-size: 12px; margin-top: 8px;">
          ⌨️ 触发器本身就是搜索框，无需在弹层中寻找搜索框
        </p>
      </div>
    `,
  }),
}

/** 禁用项 */
export const 禁用项: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const value = ref('')
      return { value, optionsWithDisabled }
    },
    template: `
      <div style="width: 300px;">
        <CpDropdown v-model="value" :options="optionsWithDisabled" placeholder="部分选项不可选" />
      </div>
    `,
  }),
}

/** 禁用状态 */
export const 禁用状态: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpDropdown disabled :options="basicOptions" placeholder="禁用状态" />
        <CpDropdown disabled model-value="netrunner" :options="basicOptions" />
      </div>
    `,
  }),
}

/** 高度自定义 */
export const 高度自定义: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const value = ref('')
      return { value, moreOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">自定义搜索提示</p>
          <CpDropdown 
            v-model="value" 
            :options="moreOptions" 
            filterable 
            filter-placeholder="输入你感兴趣的公司..." 
          />
        </div>
        <div>
          <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">自定义颜色 (Inactive & Placeholder)</p>
          <CpDropdown 
            :options="moreOptions" 
            inactive-color="#3d3d3d" 
            placeholder-color="#555" 
            placeholder="暗淡风格下拉框"
          />
        </div>
      </div>
    `,
  }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
        <CpDropdown color="#ff6b6b" :options="basicOptions" placeholder="珊瑚红" />
        <CpDropdown color="#4ecdc4" :options="basicOptions" placeholder="薄荷绿" variant="filled" />
        <CpDropdown color="#a29bfe" :options="basicOptions" placeholder="薰衣草紫" variant="ghost" />
      </div>
    `,
  }),
}

/** 综合示例 */
export const 综合示例: Story = {
  render: () => ({
    components: { CpDropdown },
    setup() {
      const job = ref('')
      const corp = ref('')
      return { job, corp, basicOptions, moreOptions }
    },
    template: `
      <div style="width: 320px; padding: 24px; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <h3 style="color: var(--cp-color-primary); margin-bottom: 16px; font-family: 'Orbitron', sans-serif;">
          MERCENARY PROFILE
        </h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div>
            <label style="display: block; color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">
              职业类型
            </label>
            <CpDropdown 
              v-model="job" 
              :options="basicOptions" 
              placeholder="选择职业" 
              variant="filled"
              clearable
            />
          </div>
          <div>
            <label style="display: block; color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 4px;">
              所属公司
            </label>
            <CpDropdown 
              v-model="corp" 
              :options="moreOptions" 
              placeholder="搜索公司..." 
              variant="filled"
              filterable
              clearable
            />
          </div>
        </div>
      </div>
    `,
  }),
}
