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
      description: "是否显示复选框",
    },
    checkStrictly: {
      control: "boolean",
      description: "严格模式（父子不关联）",
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

/** 基础用法 */
export const 基础用法: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      return { data: basicTreeData };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree :data="data" default-expand-all highlight-current />
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

/** 高亮当前节点 */
export const 高亮当前节点: Story = {
  render: () => ({
    components: { CpTree },
    setup() {
      const currentNode = ref("");
      const handleClick = (data: any) => {
        currentNode.value = data.label;
      };
      return { data: basicTreeData, currentNode, handleClick };
    },
    template: `
      <div style="max-width: 500px;">
        <CpTree
          :data="data"
          default-expand-all
          highlight-current
          @node-click="handleClick"
        />
        <div v-if="currentNode"
          style="margin-top: 12px; padding: 8px 12px; border: 1px solid var(--cp-border);
            font-family: 'Rajdhani', monospace; font-size: 13px; color: var(--cp-text-secondary);">
          当前节点: <span style="color: var(--cp-color-primary);">{{ currentNode }}</span>
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

