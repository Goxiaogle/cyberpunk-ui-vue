import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, markRaw } from "vue";
import { CpTree } from '@cyberpunk-vue/components';

// 从 unplugin-icons 导入真实图标 (MDI 图标集)
import MdiPlus from '~icons/mdi/plus'
import MdiMinus from '~icons/mdi/minus'
import MdiCircleSmall from '~icons/mdi/circle-small'
import MdiFolder from '~icons/mdi/folder'
import MdiFolderOpen from '~icons/mdi/folder-open'
import MdiFileDocument from '~icons/mdi/file-document'
import MdiLanguageTypescript from '~icons/mdi/language-typescript'
import MdiLanguageVue from '~icons/mdi/vuejs'
import MdiNpm from '~icons/mdi/npm'
import MdiFileDocumentOutline from '~icons/mdi/file-document-outline'
import MdiChevronRight from '~icons/mdi/chevron-right'
import MdiChevronDown from '~icons/mdi/chevron-down'
import MdiRhombus from '~icons/mdi/rhombus'

// 示例数据
const basicTreeData = [
  {
    label: "系统核心",
    value: "core",
    children: [
      {
        label: "神经处理器",
        value: "cpu",
        children: [
          { label: "量子运算单元", value: "quantum-unit" },
          { label: "光子缓存阵列", value: "photon-cache" },
          { label: "熵值监控器", value: "entropy-monitor" },
        ],
      },
      {
        label: "内存矩阵",
        value: "memory",
        children: [
          { label: "主存储区 - 512TB", value: "main-storage" },
          { label: "高速缓冲区", value: "fast-buffer" },
        ],
      },
      { label: "I/O 控制器", value: "io-controller" },
    ],
  },
  {
    label: "义体增强",
    value: "cyberware",
    children: [
      {
        label: "战斗增强",
        value: "combat",
        children: [
          { label: "钛合金手臂", value: "titanium-arm" },
          { label: "视觉增强目镜", value: "optic-enhance" },
          { label: "反射弧加速器", value: "reflex-boost", disabled: true },
        ],
      },
      {
        label: "隐匿系统",
        value: "stealth",
        children: [
          { label: "光学迷彩", value: "optical-camo" },
          { label: "声波抑制器", value: "sound-dampener" },
        ],
      },
    ],
  },
  {
    label: "网络接口",
    value: "network",
    children: [
      { label: "加密通道 Alpha", value: "channel-alpha" },
      { label: "加密通道 Beta", value: "channel-beta" },
      { label: "深网连接器", value: "deep-net", disabled: true },
    ],
  },
];

/**
 * # CpTree 树形控件
 *
 * 赛博朋克风格树形控件组件，用于展示层级数据结构。
 *
 * ## 特性
 * - 🌲 递归树结构，支持无限层级
 * - ☑️ 复选框模式，支持级联 / 严格（独立）两种策略
 * - 🎹 手风琴模式（同级互斥展开）
 * - 🔌 电路连接线装饰
 * - ✨ 霓虹发光高亮效果
 * - 📐 多种颜色类型
 */
const meta: Meta<typeof CpTree> = {
  title: "数据展示 Data/Tree 树形控件",
  component: CpTree,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "树节点数据",
    },
    showCheckbox: {
      control: "boolean",
      description: "是否显示复选框（多选）",
    },
    showRadio: {
      control: "boolean",
      description: "是否显示单选框（与 showCheckbox 互斥）",
    },
    checkMode: {
      control: "select",
      options: ["strict", "cascade", "bubble"],
      description: "父子联动策略",
    },
    checkStrictly: {
      control: "boolean",
      description: "严格模式（已废弃，请使用 checkMode）",
    },
    defaultExpandAll: {
      control: "boolean",
      description: "默认展开所有节点",
    },
    accordion: {
      control: "boolean",
      description: "手风琴模式",
    },
    indent: {
      control: { type: "number", min: 8, max: 40, step: 4 },
      description: "每级缩进 (px)",
    },
    highlightCurrent: {
      control: "boolean",
      description: "高亮当前点击节点",
    },
    type: {
      control: "select",
      options: ["primary", "success", "warning", "error", "info"],
      description: "颜色类型",
    },
    connectorLine: {
      control: "boolean",
      description: "是否显示连接线",
    },
  },
  args: {
    data: basicTreeData,
    showCheckbox: false,
    showRadio: false,
    checkMode: undefined,
    checkStrictly: false,
    defaultExpandAll: false,
    accordion: false,
    indent: 16,
    highlightCurrent: false,
    type: "primary",
    connectorLine: true,
  },
};

export default meta;
type Story = StoryObj<typeof CpTree>;

/**
 * Playground - 使用右侧 Controls 面板调整所有属性
 */
export const Playground: Story = {
  render: (args) => ({
    components: { CpTree },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree
          :data="args.data"
          :show-checkbox="args.showCheckbox"
          :show-radio="args.showRadio"
          :check-mode="args.checkMode"
          :check-strictly="args.checkStrictly"
          :default-expand-all="args.defaultExpandAll"
          :accordion="args.accordion"
          :indent="args.indent"
          :highlight-current="args.highlightCurrent"
          :type="args.type"
          :connector-line="args.connectorLine"
        />
      </div>
    `,
  }),
};

/** 基础用法：highlight-current + v-model:currentKey + default-current-key */
export const 基础用法: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      // 通过 default-current-key 指定初始选中节点（非受控初始值）
      const currentKey = ref<string | number | null>("photon-cache");
      return { data: basicTreeData, currentKey };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          无需 showCheckbox / showRadio：仅凭 highlight-current 即可实现单选反馈。
          通过 v-model:current-key 受控绑定（此处 ref 初始值即作为默认选中）。
        </p>
        <CpTree
          :data="data"
          default-expand-all
          highlight-current
          v-model:current-key="currentKey"
        />
        <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
          font-family: 'Rajdhani', monospace; font-size: 13px; color: var(--cp-text-secondary);">
          <span style="color: var(--cp-color-primary);">// 当前选中</span>
          {{ currentKey ?? '(未选择，点击任一节点)' }}
        </div>
      </div>
    `,
  }),
};

/** 复选框模式（级联选择） */
export const 复选框级联选择: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const checked = ref<(string | number)[]>(["photon-cache"]);
      return { data: basicTreeData, checked };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree
          :data="data"
          show-checkbox
          default-expand-all
          v-model:checked-keys="checked"
        />
        <div style="margin-top: 16px; padding: 12px; border: 1px solid var(--cp-border);
          background: rgba(20,20,25,0.6); font-family: 'Rajdhani', monospace;
          font-size: 13px; color: var(--cp-text-secondary);">
          <div style="color: var(--cp-color-primary); margin-bottom: 4px;">// 已选节点 key</div>
          {{ checked.length > 0 ? checked.join(', ') : '(无)' }}
        </div>
      </div>
    `,
  }),
};

/** 复选框模式（严格/独立） */
export const 复选框严格模式: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const checked = ref<(string | number)[]>([]);
      return { data: basicTreeData, checked };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          checkStrictly = true：父子节点独立勾选，互不影响
        </p>
        <CpTree
          :data="data"
          show-checkbox
          check-strictly
          default-expand-all
          v-model:checked-keys="checked"
        />
        <div style="margin-top: 16px; padding: 12px; border: 1px solid var(--cp-border);
          background: rgba(20,20,25,0.6); font-family: 'Rajdhani', monospace;
          font-size: 13px; color: var(--cp-text-secondary);">
          <div style="color: var(--cp-color-primary); margin-bottom: 4px;">// 已选节点 key</div>
          {{ checked.length > 0 ? checked.join(', ') : '(无)' }}
        </div>
      </div>
    `,
  }),
};

/** 级联选择对比 */
export const 级联选择对比: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const cascadeChecked = ref<(string | number)[]>([]);
      const strictChecked = ref<(string | number)[]>([]);
      return { data: basicTreeData, cascadeChecked, strictChecked };
    },
    template: `
      <div style="display: flex; gap: 32px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 280px;">
          <h3 style="color: var(--cp-color-primary); font-family: 'Rajdhani'; font-size: 14px;
            letter-spacing: 0.1em; margin-bottom: 12px;">
            ▸ 级联模式 (checkStrictly = false)
          </h3>
          <CpTree
            :data="data"
            show-checkbox
            default-expand-all
            v-model:checked-keys="cascadeChecked"
          />
          <div style="margin-top: 8px; font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-muted);">
            已选: {{ cascadeChecked.join(', ') || '无' }}
          </div>
        </div>
        <div style="flex: 1; min-width: 280px;">
          <h3 style="color: var(--cp-color-warning); font-family: 'Rajdhani'; font-size: 14px;
            letter-spacing: 0.1em; margin-bottom: 12px;">
            ▸ 严格模式 (checkStrictly = true)
          </h3>
          <CpTree
            :data="data"
            show-checkbox
            check-strictly
            default-expand-all
            type="warning"
            v-model:checked-keys="strictChecked"
          />
          <div style="margin-top: 8px; font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-muted);">
            已选: {{ strictChecked.join(', ') || '无' }}
          </div>
        </div>
      </div>
    `,
  }),
};

/** 默认展开所有 */
export const 默认展开: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      return { data: basicTreeData };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree :data="data" default-expand-all />
      </div>
    `,
  }),
};

/** 手风琴模式 */
export const 手风琴模式: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      return { data: basicTreeData };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          同级节点只能展开一个
        </p>
        <CpTree :data="data" accordion />
      </div>
    `,
  }),
};

/** 自定义节点内容 */
export const 自定义节点内容: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const data = [
        {
          label: "前端团队",
          value: "frontend",
          children: [
            { label: "张三", value: "zhangsan", role: "Team Lead" },
            { label: "李四", value: "lisi", role: "Senior Dev" },
            { label: "王五", value: "wangwu", role: "Junior Dev" },
          ],
        },
        {
          label: "后端团队",
          value: "backend",
          children: [
            { label: "赵六", value: "zhaoliu", role: "Architect" },
            { label: "孙七", value: "sunqi", role: "DevOps" },
          ],
        },
      ];
      return { data };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree :data="data" default-expand-all>
          <template #default="{ node, data }">
            <span style="display: flex; align-items: center; gap: 8px; width: 100%;">
              <span>{{ data.label }}</span>
              <span v-if="data.role"
                style="font-size: 11px; color: var(--cp-color-primary);
                  padding: 1px 8px; border: 1px solid var(--cp-color-primary-light);
                  background: rgba(0, 240, 255, 0.05); letter-spacing: 0.05em;">
                {{ data.role }}
              </span>
            </span>
          </template>
        </CpTree>
      </div>
    `,
  }),
};

/** 连接线开关 */
export const 连接线样式: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const showLine = ref(true);
      return { data: basicTreeData, showLine };
    },
    template: `
      <div style="max-width: 500px;">
        <div style="margin-bottom: 12px;">
          <label style="display: inline-flex; align-items: center; gap: 6px;
            font-family: 'Rajdhani'; color: var(--cp-text-secondary); cursor: pointer;">
            <input type="checkbox" v-model="showLine" />
            显示连接线
          </label>
        </div>
        <CpTree :data="data" default-expand-all :connector-line="showLine" />
      </div>
    `,
  }),
};

/** 高亮当前节点（v-model:currentKey 反馈） */
export const 高亮当前节点: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const currentKey = ref<string | number | null>("photon-cache");
      const currentLabel = ref("");
      const handleCurrent = (data: any) => {
        currentLabel.value = data?.label ?? "";
      };
      return { data: basicTreeData, currentKey, currentLabel, handleCurrent };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree
          :data="data"
          default-expand-all
          highlight-current
          v-model:current-key="currentKey"
          @current-change="handleCurrent"
        />
        <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
          font-family: 'Rajdhani', monospace; font-size: 13px; color: var(--cp-text-secondary);">
          <div style="color: var(--cp-color-primary); margin-bottom: 4px;">// 当前 key</div>
          {{ currentKey ?? '(无)' }}
          <div v-if="currentLabel" style="margin-top: 4px;">
            <span style="color: var(--cp-color-primary);">current-change →</span> {{ currentLabel }}
          </div>
        </div>
      </div>
    `,
  }),
};

/** 禁用节点 + 默认选中 */
export const 禁用与默认选中: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      // 构造一份含多层禁用节点的数据，覆盖单选 / 复选两种模式
      const disabledTree = [
        {
          label: "系统核心",
          value: "core",
          children: [
            { label: "量子运算单元", value: "quantum-unit" },
            { label: "光子缓存阵列", value: "photon-cache" },
            {
              label: "熵值监控器（只读）",
              value: "entropy-monitor",
              disabled: true,
            },
          ],
        },
        {
          label: "义体增强（维护中）",
          value: "cyberware",
          disabled: true,
          children: [
            { label: "钛合金手臂", value: "titanium-arm" },
            { label: "视觉增强目镜", value: "optic-enhance" },
            { label: "反射弧加速器", value: "reflex-boost", disabled: true },
          ],
        },
        {
          label: "网络接口",
          value: "network",
          children: [
            { label: "加密通道 Alpha", value: "channel-alpha" },
            { label: "加密通道 Beta", value: "channel-beta" },
            { label: "深网连接器", value: "deep-net", disabled: true },
          ],
        },
      ];

      // 面板 1：纯 highlightCurrent（非受控 defaultCurrentKey）
      const highlightClicked = ref<string>("");
      const handleHighlightClick = (data: any) => {
        highlightClicked.value = data.disabled
          ? `${data.label}（已禁用，忽略）`
          : data.label;
      };

      // 面板 2：showRadio 单选（受控 v-model），默认选中 "光子缓存阵列"
      const radioKey = ref<string | number | null>("photon-cache");
      const lastClicked = ref<string>("");
      const handleRadioClick = (data: any) => {
        lastClicked.value = data.disabled
          ? `${data.label}（已禁用，忽略）`
          : data.label;
      };

      // 面板 3：showCheckbox 复选，默认勾中两个节点；点击禁用节点不会影响状态
      const checkedKeys = ref<(string | number)[]>([
        "quantum-unit",
        "channel-alpha",
      ]);

      return {
        disabledTree,
        highlightClicked,
        handleHighlightClick,
        radioKey,
        lastClicked,
        handleRadioClick,
        checkedKeys,
      };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <!-- 纯 highlightCurrent + defaultCurrentKey（非受控） -->
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: var(--cp-color-info); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 8px; text-transform: uppercase;">
            highlight-current · 非受控 · default-current-key
          </h3>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 12px;">
            无 showRadio / showCheckbox，仅依靠 highlight-current 做单选。
            default-current-key 指定初始高亮节点；disabled 节点点击无效。
          </p>
          <CpTree
            :data="disabledTree"
            type="info"
            highlight-current
            default-expand-all
            default-current-key="channel-alpha"
            @node-click="handleHighlightClick"
          />
          <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
            font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-secondary);">
            <div>
              <span style="color: var(--cp-color-info);">// 初始</span> channel-alpha（非受控）
            </div>
            <div v-if="highlightClicked" style="margin-top: 4px;">
              <span style="color: var(--cp-color-info);">// node-click</span>
              {{ highlightClicked }}
            </div>
          </div>
        </div>

        <!-- 单选 + disabled -->
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: var(--cp-color-primary); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 8px; text-transform: uppercase;">
            showRadio · 受控 · v-model 初始 photon-cache
          </h3>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 12px;">
            初始已选中"光子缓存阵列"。点击灰色节点——current-change 不触发、
            v-model 值不变；node-click 仍然回调。
          </p>
          <CpTree
            :data="disabledTree"
            show-radio
            highlight-current
            default-expand-all
            v-model:current-key="radioKey"
            @node-click="handleRadioClick"
          />
          <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
            font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-secondary);">
            <div>
              <span style="color: var(--cp-color-primary);">// currentKey</span>
              {{ radioKey ?? '(无)' }}
            </div>
            <div v-if="lastClicked" style="margin-top: 4px;">
              <span style="color: var(--cp-color-primary);">// node-click</span>
              {{ lastClicked }}
            </div>
          </div>
        </div>

        <!-- 复选 + disabled -->
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: var(--cp-color-success); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 8px; text-transform: uppercase;">
            showCheckbox · 默认勾选 + disabled 拦截
          </h3>
          <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 12px;">
            cascade 联动下勾选"系统核心"会自动勾上子节点，但"熵值监控器（只读）"
            被 disabled 保护、不会被级联勾中；整个"义体增强"分支都无法操作。
          </p>
          <CpTree
            :data="disabledTree"
            type="success"
            show-checkbox
            check-mode="cascade"
            default-expand-all
            v-model:checked-keys="checkedKeys"
          />
          <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
            font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-secondary);">
            <span style="color: var(--cp-color-success);">// checkedKeys ({{ checkedKeys.length }})</span>
            <div style="margin-top: 4px;">{{ checkedKeys.join(', ') || '(无)' }}</div>
          </div>
        </div>
      </div>
    `,
  }),
};

/** 单选模式（showRadio） */
export const 单选模式: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const selectedKey = ref<string | number | null>(null);
      return { data: basicTreeData, selectedKey };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          showRadio = true：节点左侧渲染单选指示器，点击节点即选中，反馈走 v-model:currentKey
        </p>
        <CpTree
          :data="data"
          show-radio
          default-expand-all
          v-model:current-key="selectedKey"
        />
        <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
          font-family: 'Rajdhani', monospace; font-size: 13px; color: var(--cp-text-secondary);">
          <span style="color: var(--cp-color-primary);">// 已选 key</span>
          {{ selectedKey ?? '(无)' }}
        </div>
      </div>
    `,
  }),
};

/** 复选框三种联动策略对比 */
export const 复选框联动策略: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const strictKeys = ref<(string | number)[]>([]);
      const cascadeKeys = ref<(string | number)[]>([]);
      const bubbleKeys = ref<(string | number)[]>([]);
      return { data: basicTreeData, strictKeys, cascadeKeys, bubbleKeys };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 260px;">
          <h3 style="color: var(--cp-text-muted); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            strict · 父子独立
          </h3>
          <CpTree
            :data="data"
            show-checkbox
            check-mode="strict"
            default-expand-all
            v-model:checked-keys="strictKeys"
          />
          <div style="margin-top: 8px; font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-muted);">
            已选: {{ strictKeys.join(', ') || '无' }}
          </div>
        </div>
        <div style="flex: 1; min-width: 260px;">
          <h3 style="color: var(--cp-color-primary); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            cascade · 完全双向联动
          </h3>
          <CpTree
            :data="data"
            show-checkbox
            check-mode="cascade"
            default-expand-all
            v-model:checked-keys="cascadeKeys"
          />
          <div style="margin-top: 8px; font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-muted);">
            已选: {{ cascadeKeys.join(', ') || '无' }}
          </div>
        </div>
        <div style="flex: 1; min-width: 260px;">
          <h3 style="color: var(--cp-color-warning); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            bubble · 冒泡但子取消不影响父
          </h3>
          <CpTree
            :data="data"
            show-checkbox
            check-mode="bubble"
            type="warning"
            default-expand-all
            v-model:checked-keys="bubbleKeys"
          />
          <div style="margin-top: 8px; font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-muted);">
            已选: {{ bubbleKeys.join(', ') || '无' }}
          </div>
        </div>
      </div>
    `,
  }),
};

/** 颜色类型 */
export const 颜色变体: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const smallData = [
        {
          label: "根节点",
          value: "root",
          children: [
            { label: "子节点 A", value: "a" },
            {
              label: "子节点 B",
              value: "b",
              children: [
                { label: "叶子 B-1", value: "b1" },
                { label: "叶子 B-2", value: "b2" },
              ],
            },
          ],
        },
      ];
      return { smallData };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <div v-for="t in ['primary', 'success', 'warning', 'error', 'info']" :key="t"
          style="min-width: 200px;">
          <div style="font-family: 'Rajdhani'; font-size: 12px; color: var(--cp-text-muted);
            text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            {{ t }}
          </div>
          <CpTree :data="smallData" :type="t" default-expand-all highlight-current show-checkbox />
        </div>
        <div style="min-width: 200px;">
          <div style="font-family: 'Rajdhani'; font-size: 12px; color: #ff6600;
            text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            CUSTOM #ff6600
          </div>
          <CpTree :data="smallData" color="#ff6600" default-expand-all highlight-current show-checkbox />
        </div>
        <div style="min-width: 200px;">
          <div style="font-family: 'Rajdhani'; font-size: 12px; color: #e91e9c;
            text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            CUSTOM #e91e9c
          </div>
          <CpTree :data="smallData" color="#e91e9c" default-expand-all highlight-current show-checkbox />
        </div>
      </div>
    `,
  }),
};

// ===== 图标别名（使用 markRaw 避免 Vue 响应式代理） =====

const PlusIcon = markRaw(MdiPlus);
const MinusIcon = markRaw(MdiMinus);
const DiamondDot = markRaw(MdiRhombus);
const FolderIcon = markRaw(MdiFolder);
const FolderOpenIcon = markRaw(MdiFolderOpen);
const FileIcon = markRaw(MdiFileDocument);

/** 自定义展开/收起/叶子图标 (Props方式) */
export const 自定义展开图标: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      return {
        data: basicTreeData,
        PlusIcon,
        MinusIcon,
        DiamondDot,
      };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          通过 expand-icon / collapse-icon / leaf-icon 道具替换默认图标
        </p>
        <CpTree
          :data="data"
          default-expand-all
          :expand-icon="PlusIcon"
          :collapse-icon="MinusIcon"
          :leaf-icon="DiamondDot"
        />
      </div>
    `,
  }),
};

/** 节点前缀图标 (Props方式) */
export const 节点前缀图标: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      // nodeIcon 函数形式：按节点类型返回不同图标
      const nodeIconFn = (node: any) => {
        return node.isLeaf ? FileIcon : FolderIcon;
      };
      return { data: basicTreeData, nodeIconFn };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          通过 node-icon 道具在展开箭头后添加前缀图标（函数形式，按叶子/非叶子区分）
        </p>
        <CpTree
          :data="data"
          default-expand-all
          :node-icon="nodeIconFn"
        />
      </div>
    `,
  }),
};

/** 图标插槽 (Slot方式) */
export const 图标插槽: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      return { data: basicTreeData };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          通过 #icon 插槽完全自定义展开区域的渲染
        </p>
        <CpTree :data="data" default-expand-all>
          <template #icon="{ node, expanded }">
            <span style="font-size: 12px; font-family: monospace; width: 16px; text-align: center;">
              <template v-if="node.isLeaf">·</template>
              <template v-else-if="expanded">▾</template>
              <template v-else>▸</template>
            </span>
          </template>
        </CpTree>
      </div>
    `,
  }),
};

/** 数据驱动图标：自动读取 TreeNodeData.icon 字段（Component 形式） */
export const 数据驱动图标: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      // icon 字段直接使用 markRaw 包裹的图标组件
      const iconTreeData = ref([
        {
          key: "src",
          label: "src",
          icon: markRaw(MdiFolder),
          children: [
            {
              key: "components",
              label: "components",
              icon: markRaw(MdiFolder),
              children: [
                { key: "App.vue", label: "App.vue", icon: markRaw(MdiLanguageVue) },
                { key: "Tree.vue", label: "Tree.vue", icon: markRaw(MdiLanguageVue) },
              ],
            },
            {
              key: "utils",
              label: "utils",
              icon: markRaw(MdiFolder),
              children: [
                { key: "helpers.ts", label: "helpers.ts", icon: markRaw(MdiLanguageTypescript) },
              ],
            },
            { key: "main.ts", label: "main.ts", icon: markRaw(MdiLanguageTypescript) },
          ],
        },
        { key: "package.json", label: "package.json", icon: markRaw(MdiNpm) },
        { key: "README.md", label: "README.md", icon: markRaw(MdiFileDocumentOutline) },
      ]);
      return { data: iconTreeData };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          在 TreeNodeData.icon 中直接设置图标组件，Tree 自动渲染。
          showNodeIcon 默认为 true，无需额外 prop。
        </p>
        <CpTree
          :data="data"
          default-expand-all
        />
      </div>
    `,
  }),
};

/** 按节点自定义图标：每个图标 prop 都支持函数形式 */
export const 按节点自定义图标: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      // 所有 icon prop 都支持 (node) => Component 形式
      const expandIconFn = (node: any) => {
        return node.level === 0 ? markRaw(MdiChevronRight) : PlusIcon;
      };
      const collapseIconFn = (node: any) => {
        return node.level === 0 ? markRaw(MdiChevronDown) : MinusIcon;
      };
      const leafIconFn = (node: any) => {
        return markRaw(MdiCircleSmall);
      };
      const nodeIconFn = (node: any) => {
        return node.isLeaf ? FileIcon : FolderIcon;
      };
      return {
        data: basicTreeData,
        expandIconFn,
        collapseIconFn,
        leafIconFn,
        nodeIconFn,
      };
    },
    template: `
      <div style="max-width: 500px;">
        <p style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">
          所有图标 prop 都支持 (node) =&gt; Component 函数形式。<br>
          顶层用 ▸/▾ 展开，深层用 +/- 展开 —— 同一棵树内不同级别不同图标。
        </p>
        <CpTree
          :data="data"
          default-expand-all
          :expand-icon="expandIconFn"
          :collapse-icon="collapseIconFn"
          :leaf-icon="leafIconFn"
          :node-icon="nodeIconFn"
        />
      </div>
    `,
  }),
};

/** 自定义图标对比 */
export const 自定义图标对比: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const nodeIconFn = (node: any) => {
        return node.isLeaf ? FileIcon : FolderIcon;
      };
      return { data: basicTreeData, PlusIcon, MinusIcon, DiamondDot, nodeIconFn };
    },
    template: `
      <div style="display: flex; gap: 32px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 260px;">
          <h3 style="color: var(--cp-text-muted); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            ▸ 默认图标
          </h3>
          <CpTree :data="data" default-expand-all />
        </div>
        <div style="flex: 1; min-width: 260px;">
          <h3 style="color: var(--cp-color-success); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            ▸ +/- 展开 + 文件图标
          </h3>
          <CpTree
            :data="data"
            default-expand-all
            type="success"
            :expand-icon="PlusIcon"
            :collapse-icon="MinusIcon"
            :leaf-icon="DiamondDot"
            :node-icon="nodeIconFn"
          />
        </div>
      </div>
    `,
  }),
};

/** 图标 + 选择：文件目录风格的单选/复选组合演示 */
export const 图标与选择组合: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      // 带 icon 字段的文件树数据
      const fileTree = ref([
        {
          key: "src",
          label: "src",
          icon: markRaw(MdiFolder),
          children: [
            {
              key: "components",
              label: "components",
              icon: markRaw(MdiFolder),
              children: [
                { key: "App.vue", label: "App.vue", icon: markRaw(MdiLanguageVue) },
                { key: "Tree.vue", label: "Tree.vue", icon: markRaw(MdiLanguageVue) },
                { key: "Button.vue", label: "Button.vue", icon: markRaw(MdiLanguageVue) },
              ],
            },
            {
              key: "utils",
              label: "utils",
              icon: markRaw(MdiFolder),
              children: [
                { key: "helpers.ts", label: "helpers.ts", icon: markRaw(MdiLanguageTypescript) },
                { key: "format.ts", label: "format.ts", icon: markRaw(MdiLanguageTypescript) },
              ],
            },
            { key: "main.ts", label: "main.ts", icon: markRaw(MdiLanguageTypescript) },
          ],
        },
        { key: "package.json", label: "package.json", icon: markRaw(MdiNpm) },
        { key: "README.md", label: "README.md", icon: markRaw(MdiFileDocumentOutline) },
      ]);

      // 左：单选 + 自定义展开/收起图标
      const radioKey = ref<string | number | null>("Tree.vue");

      // 右：复选 + bubble 联动 + 数据驱动图标
      const checkedKeys = ref<(string | number)[]>(["helpers.ts"]);

      // 自定义展开/收起/叶子图标（按节点类型）
      const expandIconFn = (node: any) => markRaw(MdiChevronRight);
      const collapseIconFn = (node: any) => markRaw(MdiChevronDown);
      const leafIconFn = (node: any) => markRaw(MdiCircleSmall);

      return {
        fileTree,
        radioKey,
        checkedKeys,
        expandIconFn,
        collapseIconFn,
        leafIconFn,
      };
    },
    template: `
      <div style="display: flex; gap: 32px; flex-wrap: wrap;">
        <!-- 单选 + 图标 -->
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: var(--cp-color-primary); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            showRadio · 数据驱动文件图标 + 自定义展开箭头
          </h3>
          <CpTree
            :data="fileTree"
            node-key="key"
            show-radio
            highlight-current
            default-expand-all
            v-model:current-key="radioKey"
            :expand-icon="expandIconFn"
            :collapse-icon="collapseIconFn"
            :leaf-icon="leafIconFn"
          />
          <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
            font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-secondary);">
            <span style="color: var(--cp-color-primary);">// 已选文件</span>
            {{ radioKey ?? '(无)' }}
          </div>
        </div>

        <!-- 复选 bubble + 图标 -->
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: var(--cp-color-warning); font-family: 'Rajdhani'; font-size: 13px;
            letter-spacing: 0.1em; margin-bottom: 12px; text-transform: uppercase;">
            showCheckbox · bubble 联动 + 数据驱动图标
          </h3>
          <CpTree
            :data="fileTree"
            node-key="key"
            type="warning"
            show-checkbox
            check-mode="bubble"
            default-expand-all
            v-model:checked-keys="checkedKeys"
          />
          <div style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
            font-family: 'Rajdhani', monospace; font-size: 12px; color: var(--cp-text-secondary);">
            <span style="color: var(--cp-color-warning);">// 已勾选 ({{ checkedKeys.length }})</span>
            <div style="margin-top: 4px;">{{ checkedKeys.join(', ') || '(无)' }}</div>
          </div>
        </div>
      </div>
    `,
  }),
};
