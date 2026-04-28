import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import { CpSegmented, CpForm, CpFormItem, CpButton } from '@cyberpunk-vue/components'
import MdiViewList from '~icons/mdi/view-list'
import MdiViewGrid from '~icons/mdi/view-grid'
import MdiViewModule from '~icons/mdi/view-module'
import MdiPlay from '~icons/mdi/play'
import MdiPause from '~icons/mdi/pause'
import MdiStop from '~icons/mdi/stop'
import MdiHome from '~icons/mdi/home'
import MdiAccount from '~icons/mdi/account'
import MdiCog from '~icons/mdi/cog'
import MdiBell from '~icons/mdi/bell'

const meta: Meta<typeof CpSegmented> = {
  title: '表单 Form/Segmented 分段选择器',
  component: CpSegmented,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色预设类型',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'semi', 'ghost', 'neon'],
      description: '变体样式',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    shape: {
      control: 'select',
      options: ['clip', 'no-clip', 'round', 'circle'],
      description: '形状模式',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    block: {
      control: 'boolean',
      description: '是否撑满宽度',
    },
    vertical: {
      control: 'boolean',
      description: '是否纵向排列',
    },
    wrap: {
      control: 'boolean',
      description: '是否允许换行（仅横向）',
    },
    clearable: {
      control: 'boolean',
      description: '是否允许清空（再次点击已选项或按 Esc 清空）',
    },
    color: {
      control: 'color',
      description: '自定义主题色',
    },
  },
  args: {
    type: 'primary',
    variant: 'solid',
    size: 'md',
    shape: 'clip',
    disabled: false,
    block: false,
    vertical: false,
    wrap: false,
    clearable: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础用法 — 字符串选项
 *
 * 键盘可用：
 * - **←/→**：在选项间移焦（垂直模式为 ↑/↓）
 * - **Home / End**：跳到首/末项
 * - **Space / Enter**：选中当前聚焦项
 * - **Esc**：启用 `clearable` 时清空
 */
export const Default: Story = {
  render: (args) => ({
    components: { CpSegmented },
    setup() {
      const value = ref('日')
      return { args, value }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpSegmented v-model="value" :options="['日', '周', '月', '年']" v-bind="args" />
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          当前: <span style="color: var(--cp-color-primary);">{{ value }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * 颜色类型 — default / primary / success / warning / error / info
 */
export const Types: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        default: 'A',
        primary: 'A',
        success: 'A',
        warning: 'A',
        error: 'A',
        info: 'A',
      })
      const options = ['A', 'B', 'C']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="t in ['default', 'primary', 'success', 'warning', 'error', 'info']" :key="t"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            {{ t }}
          </span>
          <CpSegmented v-model="values[t]" :options="options" :type="t" />
        </div>
      </div>
    `,
  }),
}

/**
 * 变体样式 — solid / outline / semi / ghost / neon
 */
export const Variants: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        solid: '列表',
        outline: '列表',
        semi: '列表',
        ghost: '列表',
        neon: '列表',
      })
      const options = ['列表', '网格', '画廊']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div v-for="v in ['solid', 'outline', 'semi', 'ghost', 'neon']" :key="v"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px; text-transform: uppercase;">
            {{ v }}
          </span>
          <CpSegmented v-model="values[v]" :options="options" :variant="v" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 尺寸 — sm / md / lg
 */
export const Sizes: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const sm = ref('A')
      const md = ref('A')
      const lg = ref('A')
      const options = ['A', 'B', 'C']
      return { sm, md, lg, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">SM</span>
          <CpSegmented v-model="sm" :options="options" size="sm" type="primary" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">MD</span>
          <CpSegmented v-model="md" :options="options" size="md" type="primary" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 40px; color: var(--cp-text-muted); font-family: monospace;">LG</span>
          <CpSegmented v-model="lg" :options="options" size="lg" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义尺寸 — `size` 传入数字（px）或 CSS 长度字符串
 *
 * 数字会被解析为 `px`，字符串原样作为 `--cp-segmented-height` 写入。
 */
export const CustomSize: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const v1 = ref('A')
      const v2 = ref('A')
      const v3 = ref('A')
      const options = ['A', 'B', 'C']
      return { v1, v2, v3, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace;">size=20</span>
          <CpSegmented v-model="v1" :options="options" :size="20" type="primary" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace;">size=52</span>
          <CpSegmented v-model="v2" :options="options" :size="52" type="primary" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace;">size='3.5rem'</span>
          <CpSegmented v-model="v3" :options="options" size="3.5rem" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 形状模式 — clip / no-clip / round / circle
 */
export const Shapes: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        clip: 'A',
        'no-clip': 'A',
        round: 'A',
        circle: 'A',
      })
      const options = ['A', 'B', 'C']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="s in ['clip', 'no-clip', 'round', 'circle']" :key="s"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">
            {{ s }}
          </span>
          <CpSegmented v-model="values[s]" :options="options" :shape="s" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 自定义颜色 — 搭配不同变体
 */
export const CustomColor: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({
        solid: 'A',
        outline: 'A',
        semi: 'A',
        neon: 'A',
      })
      const options = ['A', 'B', 'C']
      return { values, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="v in ['solid', 'outline', 'semi', 'neon']" :key="v"
             style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 70px; color: var(--cp-text-muted); font-family: monospace; font-size: 12px;">
            {{ v }}
          </span>
          <CpSegmented v-model="values[v]" :options="options" :variant="v" color="#ff00ff" />
        </div>
      </div>
    `,
  }),
}

/**
 * Block 模式 — 撑满宽度
 */
export const Block: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const value = ref('标准')
      const options = ['标准', '性能', '省电', '自定义']
      return { value, options }
    },
    template: `
      <div style="max-width: 600px;">
        <CpSegmented v-model="value" :options="options" type="primary" block />
      </div>
    `,
  }),
}

/**
 * 图标选项 — 通过 `option.icon` 传入图标组件
 *
 * 同时演示「仅图标」「图标 + 文本」两种排版。
 */
export const WithIcons: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const view = ref('list')
      const playState = ref('play')

      const viewOptions = [
        { label: '列表', value: 'list', icon: MdiViewList },
        { label: '网格', value: 'grid', icon: MdiViewGrid },
        { label: '画廊', value: 'gallery', icon: MdiViewModule },
      ]
      // 仅图标（label 为空字符串）
      const playOptions = [
        { label: '', value: 'play', icon: MdiPlay },
        { label: '', value: 'pause', icon: MdiPause },
        { label: '', value: 'stop', icon: MdiStop },
      ]
      return { view, playState, viewOptions, playOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">图标 + 文本</p>
          <CpSegmented v-model="view" :options="viewOptions" type="primary" variant="neon" />
        </div>
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">仅图标</p>
          <CpSegmented v-model="playState" :options="playOptions" type="success" variant="solid" />
        </div>
      </div>
    `,
  }),
}

/**
 * 多行换行 — `wrap` 启用后空间不足时自动换行
 *
 * 指示器会跟随激活项所在的行，不会跨行拉伸高度。
 */
export const Wrap: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const view = ref('正面')
      const options = ['正面', '侧面', '背面', '俯视', '仰视', '特写', '远景', '中景']
      return { view, options }
    },
    template: `
      <div style="max-width: 280px; padding: 12px; border: 1px dashed var(--cp-border); border-radius: 8px;">
        <p style="margin-bottom: 12px; color: var(--cp-text-muted); font-size: 12px; font-family: monospace;">
          容器宽度受限，启用 wrap 自动换行 ↓
        </p>
        <CpSegmented v-model="view" :options="options" type="warning" variant="outline" wrap />
        <p style="margin-top: 12px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          视角: <span style="color: var(--cp-color-warning);">{{ view }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * 垂直布局 — `vertical` 选项纵向堆叠
 *
 * 键盘导航自动切换为 ↑/↓，常用于侧栏导航。
 */
export const Vertical: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const tab = ref('home')
      const options = [
        { label: '首页', value: 'home', icon: MdiHome },
        { label: '账户', value: 'account', icon: MdiAccount },
        { label: '通知', value: 'bell', icon: MdiBell },
        { label: '设置', value: 'settings', icon: MdiCog },
      ]
      return { tab, options }
    },
    template: `
      <div style="display: flex; gap: 24px;">
        <CpSegmented
          v-model="tab"
          :options="options"
          type="primary"
          variant="ghost"
          vertical
          style="min-width: 160px;"
        />
        <div style="flex: 1; padding: 16px; border: 1px solid var(--cp-border);">
          <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
            当前页签: <span style="color: var(--cp-color-primary); text-transform: uppercase;">{{ tab }}</span>
          </p>
        </div>
      </div>
    `,
  }),
}

/**
 * 禁用状态 — 整体禁用 & 单项禁用
 */
export const Disabled: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const v1 = ref('A')
      const v2 = ref('A')
      const optionsAll = ['A', 'B', 'C']
      const optionsMixed = [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B', disabled: true },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D', disabled: true },
      ]
      return { v1, v2, optionsAll, optionsMixed }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">整体禁用</p>
          <CpSegmented v-model="v1" :options="optionsAll" type="primary" disabled />
        </div>
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">单项禁用 (B, D) — 键盘导航会自动跳过</p>
          <CpSegmented v-model="v2" :options="optionsMixed" type="primary" />
        </div>
      </div>
    `,
  }),
}

/**
 * 可清空 — 再次点击已选项或按 Esc 清空
 *
 * 启用 `clearable` 后：
 * - **再次点击**当前已选项：清空为 `undefined`
 * - **按 Esc 键**（组件内聚焦时）：清空为 `undefined`
 * - 清空时触发 `clear` 事件以及 `update:modelValue(undefined)` / `change(undefined)`
 */
export const Clearable: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const mode = ref<string | undefined>('scan')
      const view = ref<string | undefined>(undefined)
      const clearLog = ref<string[]>([])
      const options = [
        { label: 'SCAN', value: 'scan' },
        { label: 'BREACH', value: 'breach' },
        { label: 'DECODE', value: 'decode' },
      ]
      const viewOptions = ['列表', '网格', '画廊']
      const onClear = () => {
        clearLog.value.unshift(new Date().toLocaleTimeString())
        if (clearLog.value.length > 5) clearLog.value.pop()
      }
      return { mode, view, options, viewOptions, clearLog, onClear }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">
            可清空 (再次点击已选项 / 聚焦后按 Esc)
          </p>
          <CpSegmented
            v-model="mode"
            :options="options"
            type="warning"
            variant="neon"
            clearable
            @clear="onClear"
          />
          <p style="margin-top: 8px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
            MODE:
            <span v-if="mode" style="color: var(--cp-color-warning); text-transform: uppercase;">{{ mode }}</span>
            <span v-else style="color: var(--cp-text-muted); font-style: italic;">(未选)</span>
          </p>
          <p v-if="clearLog.length" style="margin-top: 4px; color: var(--cp-text-muted); font-size: 12px; font-family: monospace;">
            clear 事件: {{ clearLog.join(' · ') }}
          </p>
        </div>

        <div>
          <p style="margin-bottom: 8px; color: var(--cp-text-muted); font-size: 12px;">
            初始空值 + clearable
          </p>
          <CpSegmented v-model="view" :options="viewOptions" type="primary" clearable />
          <p style="margin-top: 8px; color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
            当前:
            <span v-if="view" style="color: var(--cp-color-primary);">{{ view }}</span>
            <span v-else style="color: var(--cp-text-muted); font-style: italic;">(未选)</span>
          </p>
        </div>
      </div>
    `,
  }),
}

/**
 * 对象选项 — label / value / disabled
 */
export const ObjectOptions: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const mode = ref('scan')
      const options = [
        { label: 'SCAN', value: 'scan' },
        { label: 'BREACH', value: 'breach' },
        { label: 'DECODE', value: 'decode' },
        { label: 'LOCKED', value: 'locked', disabled: true },
      ]
      return { mode, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpSegmented v-model="mode" :options="options" type="warning" variant="neon" />
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          MODE: <span style="color: var(--cp-color-warning); text-transform: uppercase;">{{ mode }}</span>
        </p>
      </div>
    `,
  }),
}

/**
 * 动态 options — 增删项时指示器自动重算位置
 */
export const DynamicOptions: Story = {
  render: () => ({
    components: { CpSegmented, CpButton },
    setup() {
      const value = ref('A')
      const items = ref(['A', 'B', 'C'])
      let nextChar = 'D'.charCodeAt(0)

      const addItem = () => {
        items.value.push(String.fromCharCode(nextChar++))
      }
      const removeItem = () => {
        if (items.value.length <= 1) return
        const removed = items.value.pop()
        if (removed === value.value) {
          value.value = items.value[0]
        }
      }
      const reset = () => {
        items.value = ['A', 'B', 'C']
        nextChar = 'D'.charCodeAt(0)
        value.value = 'A'
      }
      return { value, items, addItem, removeItem, reset }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <CpSegmented v-model="value" :options="items" type="primary" variant="outline" />
        <div style="display: flex; gap: 8px;">
          <CpButton size="sm" @click="addItem">+ 新增</CpButton>
          <CpButton size="sm" type="error" :disabled="items.length <= 1" @click="removeItem">- 删除末项</CpButton>
          <CpButton size="sm" variant="outline" @click="reset">重置</CpButton>
        </div>
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          选中: <span style="color: var(--cp-color-primary);">{{ value }}</span> / 共 {{ items.length }} 项
        </p>
      </div>
    `,
  }),
}

/**
 * 切换前钩子 `beforeChange` — 异步拦截切换
 *
 * 钩子返回 `false` 或 reject 的 Promise 会取消切换。
 * 适合做权限校验、未保存提示、远程检查等。
 */
export const BeforeChange: Story = {
  render: () => ({
    components: { CpSegmented, CpButton },
    setup() {
      const env = ref('dev')
      const dirty = ref(false)
      const log = ref<string[]>([])
      const options = [
        { label: '开发', value: 'dev' },
        { label: '预发', value: 'staging' },
        { label: '生产', value: 'prod' },
      ]

      const pushLog = (msg: string) => {
        log.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`)
        if (log.value.length > 6) log.value.pop()
      }

      const beforeChange = async (next: string, current: string) => {
        if (dirty.value) {
          // eslint-disable-next-line no-alert
          const ok = window.confirm(`存在未保存的修改，确认从 ${current} 切到 ${next}？`)
          if (!ok) {
            pushLog(`取消切换：${current} → ${next}`)
            return false
          }
          dirty.value = false
        }
        if (next === 'prod') {
          pushLog(`正在校验生产权限...`)
          await new Promise((r) => setTimeout(r, 600))
        }
        pushLog(`允许切换：${current} → ${next}`)
        return true
      }

      return { env, dirty, log, options, beforeChange }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CpSegmented
          v-model="env"
          :options="options"
          type="error"
          variant="neon"
          :before-change="beforeChange"
        />
        <label style="display: flex; gap: 8px; align-items: center; color: var(--cp-text-secondary);">
          <input type="checkbox" v-model="dirty" />
          模拟「存在未保存修改」（切换时弹出确认）
        </label>
        <p style="color: var(--cp-text-secondary); font-family: 'Rajdhani', sans-serif;">
          环境: <span style="color: var(--cp-color-error); text-transform: uppercase;">{{ env }}</span>
        </p>
        <pre v-if="log.length" style="margin: 0; padding: 12px; background: var(--cp-bg-elevated); color: var(--cp-text-muted); font-size: 12px; max-height: 160px; overflow: auto;">{{ log.join('\\n') }}</pre>
      </div>
    `,
  }),
}

/**
 * 自定义内容 — `option` 作用域插槽
 *
 * 插槽参数：`{ option, index, active }`，可用于渲染头像、徽标、副标题等。
 */
export const CustomSlot: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const role = ref('admin')
      const options = [
        { label: 'ADMIN', value: 'admin', count: 12 },
        { label: 'EDITOR', value: 'editor', count: 48 },
        { label: 'VIEWER', value: 'viewer', count: 230 },
      ]
      return { role, options }
    },
    template: `
      <CpSegmented v-model="role" :options="options" type="primary" variant="outline" size="lg">
        <template #option="{ option, active }">
          <span style="display: inline-flex; align-items: center; gap: 8px;">
            <span>{{ option.label }}</span>
            <span :style="{
              padding: '2px 8px',
              borderRadius: '999px',
              fontSize: '10px',
              background: active ? 'var(--cp-color-primary)' : 'var(--cp-bg-elevated)',
              color: active ? 'var(--cp-color-primary-text)' : 'var(--cp-text-muted)',
              transition: 'all 0.2s',
            }">{{ option.count }}</span>
          </span>
        </template>
      </CpSegmented>
    `,
  }),
}

/**
 * 表单集成 — 在 `CpForm` / `CpFormItem` 中使用
 *
 * 自动接管 `disabled`，并参与表单的 `model` / `rules` 校验。
 */
export const InForm: Story = {
  render: () => ({
    components: { CpSegmented, CpForm, CpFormItem, CpButton },
    setup() {
      const form = ref({
        priority: 'normal',
        channel: '',
      })
      const rules = {
        priority: [{ required: true, message: '请选择优先级' }],
        channel: [{ required: true, message: '请选择推送渠道' }],
      }
      const formRef = ref()

      const submit = async () => {
        try {
          const valid = await formRef.value?.validate()
          if (valid) {
            // eslint-disable-next-line no-alert
            window.alert(`提交：${JSON.stringify(form.value)}`)
          }
        } catch {
          // 校验失败
        }
      }
      const reset = () => formRef.value?.resetFields()

      return { form, rules, formRef, submit, reset }
    },
    template: `
      <CpForm ref="formRef" :model="form" :rules="rules" label-width="100px" style="max-width: 520px;">
        <CpFormItem label="优先级" prop="priority">
          <CpSegmented
            v-model="form.priority"
            :options="[
              { label: '低', value: 'low' },
              { label: '中', value: 'normal' },
              { label: '高', value: 'high' },
              { label: '紧急', value: 'urgent' },
            ]"
            type="warning"
          />
        </CpFormItem>
        <CpFormItem label="推送渠道" prop="channel">
          <CpSegmented
            v-model="form.channel"
            :options="['邮件', '短信', '站内信']"
            type="primary"
            clearable
          />
        </CpFormItem>
        <CpFormItem>
          <div style="display: flex; gap: 8px;">
            <CpButton type="primary" @click="submit">提交</CpButton>
            <CpButton variant="outline" @click="reset">重置</CpButton>
          </div>
        </CpFormItem>
      </CpForm>
    `,
  }),
}

/**
 * 变体 × 类型 组合展示
 */
export const VariantTypeCombinations: Story = {
  render: () => ({
    components: { CpSegmented },
    setup() {
      const values = ref<Record<string, string>>({})
      const variants = ['solid', 'outline', 'semi', 'ghost', 'neon']
      const types = ['primary', 'success', 'warning', 'error', 'info']
      const options = ['ON', 'OFF', 'AUTO']

      variants.forEach((v) => {
        types.forEach((t) => {
          values.value[`${v}-${t}`] = 'ON'
        })
      })

      return { values, variants, types, options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div v-for="v in variants" :key="v">
          <p style="margin-bottom: 12px; color: var(--cp-text-muted); font-family: monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">
            {{ v }}
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px;">
            <CpSegmented
              v-for="t in types" :key="t"
              v-model="values[v + '-' + t]"
              :options="options"
              :variant="v"
              :type="t"
            />
          </div>
        </div>
      </div>
    `,
  }),
}
