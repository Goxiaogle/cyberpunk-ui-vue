import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { CpCheckbox, CpCheckboxGroup } from '@cyberpunk-vue/components';

/**
 * # CpCheckbox 复选框
 *
 * 赛博朋克风格复选框组件，支持半选状态、分组使用。
 *
 * ## 特性
 * - 🎨 切角几何边框设计
 * - ✨ 霓虹发光选中效果
 * - 📐 支持 sm/md/lg 及自定义尺寸
 * - ⬜ 支持 indeterminate 半选状态
 * - 🎭 支持边框模式 (border)
 */
const meta: Meta<typeof CpCheckbox> = {
  title: "表单 Form/Checkbox 复选框",
  component: CpCheckbox,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "绑定值",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "复选框尺寸",
    },
    type: {
      control: "select",
      options: ["primary", "success", "warning", "error", "info"],
      description: "颜色类型预设",
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
    },
    indeterminate: {
      control: "boolean",
      description: "半选状态",
    },
    border: {
      control: "boolean",
      description: "边框模式",
    },
    shape: {
      control: "select",
      options: ["clip", "no-clip", "round"],
      description: "复选框形状",
    },
    color: {
      control: "color",
      description: "自定义选中颜色",
    },
    checkColor: {
      control: "color",
      description: "自定义勾选标记（√）颜色，默认跟随 type 文字颜色",
    },
  },
  args: {
    modelValue: false,
    size: "md",
    type: "primary",
    disabled: false,
    indeterminate: false,
    border: false,
    shape: "clip",
  },
};

export default meta;
type Story = StoryObj<typeof CpCheckbox>;

/**
 * Playground - 使用右侧 Controls 面板调整所有属性
 */
export const Playground: Story = {
  render: (args) => ({
    components: { CpCheckbox },
    setup() {
      return { args };
    },
    template: `
      <CpCheckbox 
        v-model="args.modelValue"
        :size="args.size"
        :type="args.type"
        :disabled="args.disabled"
        :indeterminate="args.indeterminate"
        :border="args.border"
        :color="args.color"
        :check-color="args.checkColor"
        :shape="args.shape"
      >
        神经连接协议
      </CpCheckbox>
    `,
  }),
};

/** 基础用法 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <CpCheckbox v-model="checked">同意用户协议</CpCheckbox>
        <span style="font-family: 'Rajdhani'; color: var(--cp-text-muted);">
          状态: {{ checked ? '已同意' : '未选择' }}
        </span>
      </div>
    `,
  }),
};

/** 无文案 */
export const 无文案: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const checked = ref(false);
      const active = ref(true);
      const disabled = ref(false);
      const bordered = ref(false);
      return { checked, active, disabled, bordered };
    },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <CpCheckbox v-model="checked" />
        <CpCheckbox v-model="active" />
        <CpCheckbox v-model="disabled" disabled />
        <CpCheckbox v-model="bordered" border />
      </div>
    `,
  }),
};

/** 尺寸 */
export const 尺寸: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      return { sm, md, lg };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <CpCheckbox v-model="sm" size="sm">Small</CpCheckbox>
          <CpCheckbox v-model="md" size="md">Medium</CpCheckbox>
          <CpCheckbox v-model="lg" size="lg">Large</CpCheckbox>
        </div>
      </div>
    `,
  }),
};

/** 形状 */
export const 形状: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const clip = ref(true);
      const noClip = ref(true);
      const round = ref(true);
      return { clip, noClip, round };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 20px;">
          <CpCheckbox v-model="clip" shape="clip">Clip（切角）</CpCheckbox>
          <CpCheckbox v-model="noClip" shape="no-clip">No-clip（直角）</CpCheckbox>
          <CpCheckbox v-model="round" shape="round">Round（圆角）</CpCheckbox>
        </div>
        <p style="color: var(--cp-text-muted); font-size: 12px;">边框模式 + 形状</p>
        <div style="display: flex; align-items: center; gap: 12px;">
          <CpCheckbox v-model="clip" shape="clip" border>Clip</CpCheckbox>
          <CpCheckbox v-model="noClip" shape="no-clip" border>No-clip</CpCheckbox>
          <CpCheckbox v-model="round" shape="round" border>Round</CpCheckbox>
        </div>
      </div>
    `,
  }),
};

/** 颜色类型 */
export const 颜色类型: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const checks = ref({
        primary: true,
        success: true,
        warning: true,
        error: true,
        info: true,
      });
      return { checks };
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 20px;">
        <CpCheckbox v-model="checks.primary" type="primary">Primary</CpCheckbox>
        <CpCheckbox v-model="checks.success" type="success">Success</CpCheckbox>
        <CpCheckbox v-model="checks.warning" type="warning">Warning</CpCheckbox>
        <CpCheckbox v-model="checks.error" type="error">Error</CpCheckbox>
        <CpCheckbox v-model="checks.info" type="info">Info</CpCheckbox>
      </div>
    `,
  }),
};

/** 半选状态 (Indeterminate) */
export const 半选状态: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const allChecked = ref(false);
      const indeterminate = ref(true);
      const items = ref([true, false, false]);

      const handleAll = () => {
        // 半选状态 或 未全选 → 全选；已全选 → 取消全选
        if (indeterminate.value || !allChecked.value) {
          items.value = [true, true, true];
          allChecked.value = true;
        } else {
          items.value = [false, false, false];
          allChecked.value = false;
        }
        indeterminate.value = false;
      };

      const updateAll = () => {
        const checkedCount = items.value.filter(Boolean).length;
        allChecked.value = checkedCount === items.value.length;
        indeterminate.value =
          checkedCount > 0 && checkedCount < items.value.length;
      };

      return { allChecked, indeterminate, items, handleAll, updateAll };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <CpCheckbox 
          :modelValue="allChecked" 
          :indeterminate="indeterminate"
          @change="handleAll"
        >
          全选 / Select All
        </CpCheckbox>
        <div style="padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
          <CpCheckbox v-model="items[0]" @change="updateAll">选项 A</CpCheckbox>
          <CpCheckbox v-model="items[1]" @change="updateAll">选项 B</CpCheckbox>
          <CpCheckbox v-model="items[2]" @change="updateAll">选项 C</CpCheckbox>
        </div>
      </div>
    `,
  }),
};

/** 边框模式 */
export const 边框模式: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const c1 = ref(true);
      const c2 = ref(false);
      const c3 = ref(false);
      const c4 = ref(true);
      const c5 = ref(true);
      return { c1, c2, c3, c4, c5 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <CpCheckbox v-model="c1" border type="primary">神经接口</CpCheckbox>
          <CpCheckbox v-model="c2" border type="success">义体增强</CpCheckbox>
          <CpCheckbox v-model="c3" border type="error" disabled>核心屏蔽</CpCheckbox>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <CpCheckbox v-model="c4" border type="primary" disabled>已锁定（选中+禁用）</CpCheckbox>
          <CpCheckbox v-model="c5" border type="success" disabled indeterminate>已固化（半选+禁用）</CpCheckbox>
        </div>
      </div>
    `,
  }),
};

/** 分组使用 */
export const 分组使用: Story = {
  render: () => ({
    components: { CpCheckbox, CpCheckboxGroup },
    setup() {
      const selected = ref(["A", "C"]);
      return { selected };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpCheckboxGroup v-model="selected">
          <CpCheckbox label="A">选项 A</CpCheckbox>
          <CpCheckbox label="B">选项 B</CpCheckbox>
          <CpCheckbox label="C">选项 C</CpCheckbox>
          <CpCheckbox label="D" disabled>选项 D (禁用)</CpCheckbox>
        </CpCheckboxGroup>
        <div style="font-family: 'Rajdhani'; color: var(--cp-text-secondary);">
          已选: {{ selected.join(', ') || '无' }}
        </div>
      </div>
    `,
  }),
};

/** 垂直分组 */
export const 垂直分组: Story = {
  render: () => ({
    components: { CpCheckbox, CpCheckboxGroup },
    setup() {
      const selected = ref(["attack"]);
      return { selected };
    },
    template: `
      <CpCheckboxGroup v-model="selected" direction="vertical" type="error">
        <CpCheckbox label="attack">攻击模块</CpCheckbox>
        <CpCheckbox label="defense">防御模块</CpCheckbox>
        <CpCheckbox label="stealth">隐身模块</CpCheckbox>
        <CpCheckbox label="scan">扫描模块</CpCheckbox>
      </CpCheckboxGroup>
    `,
  }),
};

/** 限制选择数量 */
export const 限制选择数量: Story = {
  render: () => ({
    components: { CpCheckbox, CpCheckboxGroup },
    setup() {
      const selected = ref(["gpu"]);
      return { selected };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <p style="color: var(--cp-text-muted); font-size: 12px;">最少选 1 项，最多选 2 项</p>
        <CpCheckboxGroup v-model="selected" :min="1" :max="2">
          <CpCheckbox label="cpu">CPU 超频</CpCheckbox>
          <CpCheckbox label="gpu">GPU 增强</CpCheckbox>
          <CpCheckbox label="ram">RAM 扩展</CpCheckbox>
          <CpCheckbox label="ssd">SSD 加速</CpCheckbox>
        </CpCheckboxGroup>
        <div style="font-family: 'Rajdhani'; color: var(--cp-text-secondary);">
          已选 ({{ selected.length }}/2): {{ selected.join(', ') }}
        </div>
      </div>
    `,
  }),
};

/** 自定义勾选颜色 - 不同 type 默认使用对应文字色，也可手动指定 */
export const 自定义勾选颜色: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const checks = ref({
        primary: true,
        success: true,
        warning: true,
        error: true,
        info: true,
        custom: true,
      });
      return { checks };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p style="color: var(--cp-text-muted); font-size: 12px;">各 type 默认勾选颜色自动适配背景（与 Button 文字色一致）</p>
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
          <CpCheckbox v-model="checks.primary" type="primary">Primary</CpCheckbox>
          <CpCheckbox v-model="checks.success" type="success">Success</CpCheckbox>
          <CpCheckbox v-model="checks.warning" type="warning">Warning</CpCheckbox>
          <CpCheckbox v-model="checks.error" type="error">Error</CpCheckbox>
          <CpCheckbox v-model="checks.info" type="info">Info</CpCheckbox>
        </div>
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-top: 8px;">手动指定勾选颜色（checkColor）</p>
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
          <CpCheckbox v-model="checks.custom" type="error" check-color="#ffd700">金色勾 ✨</CpCheckbox>
          <CpCheckbox v-model="checks.custom" type="info" check-color="#ff00ff">粉色勾</CpCheckbox>
          <CpCheckbox v-model="checks.custom" type="primary" check-color="#ffffff">白色勾</CpCheckbox>
        </div>
      </div>
    `,
  }),
};

/** 自定义半选颜色 */
export const 自定义半选颜色: Story = {
  render: () => ({
    components: { CpCheckbox },
    setup() {
      const halfDefault = ref(false);
      const halfCustom = ref(false);
      const checkedCustom = ref(true);
      return { halfDefault, halfCustom, checkedCustom };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <CpCheckbox v-model="checkedCustom" type="info" check-color="#ffffff">
          已选自定义颜色（checkColor）
        </CpCheckbox>
        <CpCheckbox v-model="halfDefault" indeterminate type="success">
          半选默认颜色（随 type 变化）
        </CpCheckbox>
        <CpCheckbox v-model="halfCustom" indeterminate type="warning" check-color="#ffd700">
          半选自定义颜色（checkColor）
        </CpCheckbox>
      </div>
    `,
  }),
};
