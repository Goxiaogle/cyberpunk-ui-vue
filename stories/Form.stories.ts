import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, reactive } from "vue";
import { CpForm, CpFormItem } from "@cyberpunk-vue/components";
import { CpInput } from "@cyberpunk-vue/components";
import { CpTextarea } from "@cyberpunk-vue/components";
import { CpButton } from "@cyberpunk-vue/components";
import { CpSwitch } from "@cyberpunk-vue/components";
import { CpDropdown } from "@cyberpunk-vue/components";
import { CpCheckbox, CpCheckboxGroup } from "@cyberpunk-vue/components";
import { CpRadio, CpRadioGroup } from "@cyberpunk-vue/components";
import { CpSlider } from "@cyberpunk-vue/components";
import type { FormRules } from "@cyberpunk-vue/components";

/**
 * # CpForm 表单
 *
 * 赛博朋克风格表单容器，提供布局管理和表单验证。
 *
 * ## 特性
 * - 📐 Label 位置可选：left / right / top
 * - 📏 行内模式 (inline)
 * - ✅ 内置验证：required / min / max / pattern / 自定义 validator
 * - 📐 全局/独立控制错误占位高度 (reserveErrorSpace)
 * - 🎨 细粒度 CSS 变量定制
 */
const meta: Meta<typeof CpForm> = {
  title: "表单 Form/Form 表单",
  component: CpForm,
  tags: ["autodocs"],
  argTypes: {
    labelPosition: {
      control: "select",
      options: ["left", "right", "top"],
      description: "标签位置",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "控件尺寸",
    },
    inline: {
      control: "boolean",
      description: "行内模式",
    },
    disabled: {
      control: "boolean",
      description: "全局禁用",
    },
    reserveErrorSpace: {
      control: "boolean",
      description: "预留错误信息占位高度",
    },
    labelWidth: {
      control: "text",
      description: "标签宽度",
    },
    labelSuffix: {
      control: "text",
      description: "标签后缀",
    },
    requireAsteriskPosition: {
      control: "select",
      options: ["left", "right"],
      description: "必填星号位置",
    },
    labelVerticalAlign: {
      control: "select",
      options: ["center", "top", "bottom", "auto"],
      description: "标签垂直对齐方式（仅 labelPosition 为 left/right 时生效）",
    },
    labelAlign: {
      control: "select",
      options: ["left", "center", "right"],
      description: "标签内容对齐方式",
    },
  },
  args: {
    labelPosition: "right",
    size: "md",
    inline: false,
    disabled: false,
    reserveErrorSpace: false,
    labelWidth: "100px",
    labelSuffix: "",
    requireAsteriskPosition: "left",
  },
};

export default meta;
type Story = StoryObj<typeof CpForm>;

/**
 * 基础用法 — label 位置和尺寸
 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput },
    setup() {
      const formData = reactive({
        username: "",
        email: "",
        bio: "",
      });
      return { formData };
    },
    template: `
      <div style="max-width: 480px;">
        <CpForm :model="formData" label-width="80px" label-position="right">
          <CpFormItem label="用户名">
            <CpInput v-model="formData.username" placeholder="请输入用户名" />
          </CpFormItem>
          <CpFormItem label="邮箱">
            <CpInput v-model="formData.email" placeholder="请输入邮箱" />
          </CpFormItem>
          <CpFormItem label="简介">
            <CpInput v-model="formData.bio" placeholder="请输入个人简介" />
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};

/**
 * Label 位置 — left / right / top 对比
 */
export const Label位置: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput },
    setup() {
      const formData = reactive({ name: "", code: "" });
      const position = ref<"left" | "right" | "top">("right");
      const positions = ["left", "right", "top"] as const;
      return { formData, position, positions };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 480px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <span style="color: var(--cp-text-secondary); font-family: 'Rajdhani'; font-size: 14px;">Label 位置：</span>
          <button
            v-for="p in positions"
            :key="p"
            @click="position = p"
            :style="{
              padding: '4px 12px',
              border: '1px solid ' + (position === p ? 'var(--cp-color-primary)' : 'var(--cp-border)'),
              background: position === p ? 'rgba(0,240,255,0.1)' : 'transparent',
              color: position === p ? 'var(--cp-color-primary)' : 'var(--cp-text-secondary)',
              cursor: 'pointer',
              fontFamily: 'Rajdhani',
              fontSize: '14px',
            }"
          >{{ p }}</button>
        </div>

        <CpForm :model="formData" :label-position="position" label-width="80px">
          <CpFormItem label="名称">
            <CpInput v-model="formData.name" placeholder="请输入" />
          </CpFormItem>
          <CpFormItem label="代号">
            <CpInput v-model="formData.code" placeholder="请输入" />
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};

/**
 * 行内模式 — 表单项水平排列
 */
export const 行内模式: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput, CpButton },
    setup() {
      const formData = reactive({ keyword: "", type: "" });
      return { formData };
    },
    template: `
      <CpForm :model="formData" inline label-position="left">
        <CpFormItem label="关键词">
          <CpInput v-model="formData.keyword" placeholder="搜索..." style="width: 160px;" />
        </CpFormItem>
        <CpFormItem label="类型">
          <CpInput v-model="formData.type" placeholder="类型" style="width: 120px;" />
        </CpFormItem>
        <CpFormItem>
          <CpButton type="primary">搜索</CpButton>
        </CpFormItem>
      </CpForm>
    `,
  }),
};

/**
 * 表单验证 — required、min/max、pattern、自定义 validator
 */
export const 表单验证: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput, CpButton },
    setup() {
      const formRef = ref<InstanceType<typeof CpForm> | null>(null);
      const formData = reactive({
        username: "",
        password: "",
        email: "",
      });

      const rules: FormRules = {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 16, message: "长度 3 ~ 16 个字符", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码至少 6 个字符", trigger: "change" },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { pattern: /^[\w.-]+@[\w.-]+\.\w+$/, message: "邮箱格式不正确", trigger: "change" },
        ],
      };

      const submitResult = ref("");

      const onSubmit = async () => {
        if (!formRef.value) return;
        const valid = await formRef.value.validate();
        submitResult.value = valid ? "✅ 验证通过！" : "❌ 请检查表单";
      };

      const onReset = () => {
        formRef.value?.resetFields();
        submitResult.value = "";
      };

      return { formRef, formData, rules, submitResult, onSubmit, onReset };
    },
    template: `
      <div style="max-width: 480px;">
        <CpForm ref="formRef" :model="formData" :rules="rules" label-width="80px">
          <CpFormItem label="用户名" prop="username" required>
            <CpInput v-model="formData.username" placeholder="3-16 个字符" />
          </CpFormItem>
          <CpFormItem label="密码" prop="password" required>
            <CpInput v-model="formData.password" type="password" placeholder="至少 6 个字符" />
          </CpFormItem>
          <CpFormItem label="邮箱" prop="email" required>
            <CpInput v-model="formData.email" placeholder="example@mail.com" />
          </CpFormItem>
          <CpFormItem>
            <div style="display: flex; gap: 12px; align-items: center;">
              <CpButton type="primary" @click="onSubmit">提交</CpButton>
              <CpButton @click="onReset">重置</CpButton>
              <span v-if="submitResult" style="font-family: 'Rajdhani'; color: var(--cp-text-secondary);">
                {{ submitResult }}
              </span>
            </div>
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};

/**
 * 预留错误占位 — reserveErrorSpace 对比
 */
export const 预留错误占位: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput, CpButton },
    setup() {
      const formRef1 = ref<InstanceType<typeof CpForm> | null>(null);
      const formRef2 = ref<InstanceType<typeof CpForm> | null>(null);
      const data1 = reactive({ name: "", code: "" });
      const data2 = reactive({ name: "", code: "" });
      const rules: FormRules = {
        name: [{ required: true, message: "必填", trigger: "blur" }],
        code: [{ required: true, message: "必填", trigger: "blur" }],
      };

      const validate1 = () => formRef1.value?.validate();
      const validate2 = () => formRef2.value?.validate();
      const reset1 = () => formRef1.value?.resetFields();
      const reset2 = () => formRef2.value?.resetFields();

      return { formRef1, formRef2, data1, data2, rules, validate1, validate2, reset1, reset2 };
    },
    template: `
      <div style="display: flex; gap: 40px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 260px;">
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 12px;">
            reserveErrorSpace = false（默认）
          </p>
          <CpForm ref="formRef1" :model="data1" :rules="rules" label-width="60px" :reserve-error-space="false">
            <CpFormItem label="名称" prop="name" required>
              <CpInput v-model="data1.name" placeholder="请输入" />
            </CpFormItem>
            <CpFormItem label="代号" prop="code" required>
              <CpInput v-model="data1.code" placeholder="请输入" />
            </CpFormItem>
            <CpFormItem>
              <div style="display: flex; gap: 8px;">
                <CpButton type="primary" size="sm" @click="validate1">验证</CpButton>
                <CpButton size="sm" @click="reset1">重置</CpButton>
              </div>
            </CpFormItem>
          </CpForm>
        </div>

        <div style="flex: 1; min-width: 260px;">
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 12px;">
            reserveErrorSpace = true
          </p>
          <CpForm ref="formRef2" :model="data2" :rules="rules" label-width="60px" reserve-error-space>
            <CpFormItem label="名称" prop="name" required>
              <CpInput v-model="data2.name" placeholder="请输入" />
            </CpFormItem>
            <CpFormItem label="代号" prop="code" required>
              <CpInput v-model="data2.code" placeholder="请输入" />
            </CpFormItem>
            <CpFormItem>
              <div style="display: flex; gap: 8px;">
                <CpButton type="primary" size="sm" @click="validate2">验证</CpButton>
                <CpButton size="sm" @click="reset2">重置</CpButton>
              </div>
            </CpFormItem>
          </CpForm>
        </div>
      </div>
    `,
  }),
};

/**
 * 综合表单 — 多种表单控件组合
 */
export const 综合表单: Story = {
  render: () => ({
    components: {
      CpForm, CpFormItem, CpInput, CpButton, CpSwitch,
      CpDropdown, CpCheckbox, CpCheckboxGroup, CpRadio, CpRadioGroup, CpSlider,
    },
    setup() {
      const formRef = ref<InstanceType<typeof CpForm> | null>(null);
      const formData = reactive({
        name: "",
        region: "",
        type: "A",
        features: [] as string[],
        active: false,
        priority: 50,
      });

      const regionOptions = [
        { label: "华东区域", value: "east" },
        { label: "华西区域", value: "west" },
        { label: "华南区域", value: "south" },
        { label: "华北区域", value: "north" },
      ];

      const rules: FormRules = {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        region: [{ required: true, message: "请选择区域", trigger: "change" }],
      };

      const onSubmit = async () => {
        const valid = await formRef.value?.validate();
        if (valid) {
          console.log("Submit:", JSON.parse(JSON.stringify(formData)));
        }
      };

      const onReset = () => formRef.value?.resetFields();

      return { formRef, formData, regionOptions, rules, onSubmit, onReset };
    },
    template: `
      <div style="max-width: 520px;">
        <CpForm
          ref="formRef"
          :model="formData"
          :rules="rules"
          label-width="80px"
          label-suffix="："
        >
          <CpFormItem label="名称" prop="name" required reserve-error-space>
            <CpInput v-model="formData.name" placeholder="请输入项目名称" />
          </CpFormItem>

          <CpFormItem label="区域" prop="region" required reserve-error-space>
            <CpDropdown v-model="formData.region" :options="regionOptions" placeholder="请选择区域" />
          </CpFormItem>

          <CpFormItem label="类型" prop="type">
            <CpRadioGroup v-model="formData.type">
              <CpRadio value="A">标准型</CpRadio>
              <CpRadio value="B">增强型</CpRadio>
              <CpRadio value="C">实验型</CpRadio>
            </CpRadioGroup>
          </CpFormItem>

          <CpFormItem label="特性" prop="features">
            <CpCheckboxGroup v-model="formData.features">
              <CpCheckbox label="stealth">隐身</CpCheckbox>
              <CpCheckbox label="armor">护甲</CpCheckbox>
              <CpCheckbox label="scan">扫描</CpCheckbox>
            </CpCheckboxGroup>
          </CpFormItem>

          <CpFormItem label="优先级" prop="priority">
            <CpSlider v-model="formData.priority" />
          </CpFormItem>

          <CpFormItem label="激活" prop="active">
            <CpSwitch v-model="formData.active" />
          </CpFormItem>

          <CpFormItem>
            <div style="display: flex; gap: 12px;">
              <CpButton type="primary" @click="onSubmit">提交</CpButton>
              <CpButton @click="onReset">重置</CpButton>
            </div>
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};

/**
 * CSS 变量定制 — 通过 CSS 变量修改外观
 */
export const CSS变量定制: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput },
    setup() {
      const formData = reactive({ a: "", b: "" });
      return { formData };
    },
    template: `
      <div style="max-width: 480px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 16px;">
          通过 CSS 变量自定义标签颜色、间距、错误色等：
        </p>
        <CpForm
          :model="formData"
          label-width="100px"
          :style="{
            '--cp-form-gap': '24px',
            '--cp-form-label-color': '#ff9f1c',
            '--cp-form-label-font-weight': '700',
            '--cp-form-required-color': '#ff00ff',
            '--cp-form-error-color': '#ff00ff',
          }"
        >
          <CpFormItem label="自定义标签" required>
            <CpInput v-model="formData.a" placeholder="注意标签颜色和星号颜色" />
          </CpFormItem>
          <CpFormItem label="另一项">
            <CpInput v-model="formData.b" placeholder="注意间距变化" />
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};

/**
 * 全局禁用 — Form disabled 穿透到所有子控件
 *
 * 设置 `disabled` 后，内部所有表单控件（Input、Dropdown、Radio、Checkbox、Slider、Switch、Button）均自动禁用。
 * 优先级：控件自身 disabled > Group disabled > Form disabled。
 */
export const 全局禁用: Story = {
  render: () => ({
    components: {
      CpForm, CpFormItem, CpInput, CpButton, CpSwitch,
      CpDropdown, CpCheckbox, CpCheckboxGroup, CpRadio, CpRadioGroup, CpSlider,
    },
    setup() {
      const disabled = ref(true);

      const formData = reactive({
        name: "V",
        region: "east",
        type: "A",
        features: ["stealth"],
        active: true,
        priority: 60,
      });

      const regionOptions = [
        { label: "华东区域", value: "east" },
        { label: "华西区域", value: "west" },
        { label: "华南区域", value: "south" },
        { label: "华北区域", value: "north" },
      ];

      return { disabled, formData, regionOptions };
    },
    template: `
      <div style="max-width: 520px;">
        <div style="margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
          <CpSwitch v-model="disabled" />
          <span style="color: var(--cp-text-secondary); font-family: 'Rajdhani'; font-size: 14px;">
            Form disabled = {{ disabled }}
          </span>
        </div>

        <CpForm :model="formData" :disabled="disabled" label-width="80px" label-suffix="：">
          <CpFormItem label="名称">
            <CpInput v-model="formData.name" placeholder="请输入名称" />
          </CpFormItem>

          <CpFormItem label="区域">
            <CpDropdown v-model="formData.region" :options="regionOptions" placeholder="请选择" />
          </CpFormItem>

          <CpFormItem label="类型">
            <CpRadioGroup v-model="formData.type">
              <CpRadio value="A">标准型</CpRadio>
              <CpRadio value="B">增强型</CpRadio>
              <CpRadio value="C">实验型</CpRadio>
            </CpRadioGroup>
          </CpFormItem>

          <CpFormItem label="特性">
            <CpCheckboxGroup v-model="formData.features">
              <CpCheckbox label="stealth">隐身</CpCheckbox>
              <CpCheckbox label="armor">护甲</CpCheckbox>
              <CpCheckbox label="scan">扫描</CpCheckbox>
            </CpCheckboxGroup>
          </CpFormItem>

          <CpFormItem label="优先级">
            <CpSlider v-model="formData.priority" />
          </CpFormItem>

          <CpFormItem label="激活">
            <CpSwitch v-model="formData.active" />
          </CpFormItem>

          <CpFormItem>
            <div style="display: flex; gap: 12px;">
              <CpButton type="primary">提交</CpButton>
              <CpButton>重置</CpButton>
            </div>
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};

/**
 * Label 垂直对齐 — center / top / bottom / auto
 *
 * 当 labelPosition 为 left/right 时，通过 `labelVerticalAlign` 控制 label 在垂直方向的行为。
 * - `center`（默认）：居中对齐
 * - `top`：顶部对齐，带顶部间距
 * - `bottom`：底部对齐
 * - `auto`：内容矮时居中，超过阈值（默认 80px）后自动切为顶部对齐
 */
export const Label垂直对齐: Story = {
  render: () => ({
    components: { CpForm, CpFormItem, CpInput, CpTextarea },
    setup() {
      const align = ref<'center' | 'top' | 'bottom' | 'auto'>('center');
      const aligns = ['center', 'top', 'bottom', 'auto'] as const;
      const formData = reactive({
        name: '',
        desc: '',
        notes: '',
      });
      return { align, aligns, formData };
    },
    template: `
      <div style="max-width: 560px;">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 20px;">
          <span style="color: var(--cp-text-secondary); font-family: 'Rajdhani'; font-size: 14px;">labelVerticalAlign：</span>
          <button
            v-for="a in aligns"
            :key="a"
            @click="align = a"
            :style="{
              padding: '4px 12px',
              border: '1px solid ' + (align === a ? 'var(--cp-color-primary)' : 'var(--cp-border)'),
              background: align === a ? 'rgba(0,240,255,0.1)' : 'transparent',
              color: align === a ? 'var(--cp-color-primary)' : 'var(--cp-text-secondary)',
              cursor: 'pointer',
              fontFamily: 'Rajdhani',
              fontSize: '14px',
            }"
          >{{ a }}</button>
        </div>

        <CpForm :model="formData" label-width="100px" label-position="right" :label-vertical-align="align">
          <CpFormItem label="名称">
            <CpInput v-model="formData.name" placeholder="单行输入（矮内容）" />
          </CpFormItem>
          <CpFormItem label="描述">
            <CpTextarea v-model="formData.desc" :rows="4" placeholder="多行输入（中等高度）" />
          </CpFormItem>
          <CpFormItem label="备注">
            <CpTextarea v-model="formData.notes" :rows="8" placeholder="大段输入（高内容，auto 模式下会切换为顶部对齐）" />
          </CpFormItem>
        </CpForm>
      </div>
    `,
  }),
};
