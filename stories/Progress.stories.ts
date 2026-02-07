import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { CpProgress } from '../packages/components'

/**
 * # CpProgress 进度条
 * 
 * 赛博朋克风格进度条组件，支持线性、环形、仪表盘三种模式。
 * 
 * ## 特性
 * - 📊 三种类型：line、circle、dashboard
 * - 🎨 多种状态颜色：success、warning、error
 * - ⚡ 机甲风切角设计
 * - ✨ 霓虹发光效果
 * - 🦓 条纹流动动画
 * - 🔄 不确定进度模式
 */
const meta: Meta<typeof CpProgress> = {
    title: '数据展示 Data Display/Progress 进度条',
    component: CpProgress,
    tags: ['autodocs'],
    argTypes: {
        percentage: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: '当前进度值（取值范围 0 到 max）',
            table: {
                defaultValue: { summary: '0' },
            },
        },
        max: {
            control: { type: 'range', min: 1, max: 100, step: 1 },
            description: '进度最大值，Step 模式下同时决定分段数量',
            table: {
                defaultValue: { summary: '100' },
            },
        },
        type: {
            control: 'select',
            options: ['line', 'circle', 'dashboard'],
            description: '进度条类型',
            table: {
                defaultValue: { summary: 'line' },
            },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'xxl'],
            description: '进度条尺寸',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        status: {
            control: 'select',
            options: [undefined, 'success', 'warning', 'error'],
            description: '进度条状态',
        },
        color: {
            control: 'color',
            description: '自定义颜色',
        },
        strokeWidth: {
            control: { type: 'range', min: 2, max: 20, step: 1 },
            description: '进度条宽度',
        },
        showText: {
            control: 'boolean',
            description: '是否显示文字',
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        textInside: {
            control: 'boolean',
            description: '文字是否在内部 (仅 line)',
        },
        striped: {
            control: 'boolean',
            description: '条纹效果',
        },
        stripedFlow: {
            control: 'boolean',
            description: '条纹流动',
        },
        indeterminate: {
            control: 'boolean',
            description: '不确定进度模式',
        },
        strokeLinecap: {
            control: 'select',
            options: ['round', 'square', 'butt'],
            description: '线端样式',
            table: {
                defaultValue: { summary: 'round' },
            },
        },
        width: {
            control: { type: 'range', min: 60, max: 200, step: 10 },
            description: '环形进度条宽度',
            table: {
                defaultValue: { summary: '126' },
            },
        },
        loading: {
            control: 'boolean',
            description: '加载状态（光波扫过效果）',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        shape: {
            control: 'select',
            options: ['clip', 'no-clip', 'round'],
            description: '进度条形状',
            table: {
                defaultValue: { summary: 'clip' },
            },
        },
        steps: {
            control: 'boolean',
            description: '是否启用分段模式（分段数由 max 决定）',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        stepGap: {
            control: { type: 'range', min: 0, max: 10, step: 1 },
            description: '分段间距',
            table: {
                defaultValue: { summary: '2' },
            },
        },
        textColor: {
            control: 'color',
            description: '内部文字颜色（仅 textInside 时生效）',
        },
        showInnerStripe: {
            control: 'boolean',
            description: '是否显示内圈虚线装饰（用于 circle/dashboard）',
            table: {
                defaultValue: { summary: 'auto' },
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof CpProgress>

/** 基础用法 */
export const 基础用法: Story = {
    args: {
        percentage: 50,
        type: 'line',
        size: 'md',
    },
    render: (args: any) => ({
        components: { CpProgress },
        setup() {
            return { args }
        },
        template: `
      <div style="width: 400px;">
        <CpProgress v-bind="args" />
      </div>
    `,
    }),
}

/** 分段进度条 (Step 模式) */
export const 分段进度条: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">5 段中完成 3 段</div>
          <CpProgress :percentage="3" :max="5" steps />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">10 段中完成 4 段</div>
          <CpProgress :percentage="4" :max="10" steps />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">8 段全部完成</div>
          <CpProgress :percentage="8" :max="8" steps status="success" />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">12 段 + 自定义颜色</div>
          <CpProgress 
            :percentage="7" 
            :max="12" 
            steps
            :step-colors="[
              '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00',
              '#ffaa00'
            ]"
          />
        </div>
      </div>
    `,
    }),
}

/** Episode Status 综合示例 */
export const Episode状态: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="padding: 24px; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="color: var(--cp-text-secondary); font-size: 11px; font-family: 'Rajdhani', monospace; letter-spacing: 0.1em; text-transform: uppercase;">
            EPISODE STATUS
          </span>
          <div style="flex: 1;">
            <CpProgress 
              :percentage="7" 
              :max="12"
              steps
              :step-gap="3"
              :stroke-width="8"
              :step-colors="[
                '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00',
                '#ffaa00'
              ]"
              :show-text="false"
            />
          </div>
        </div>
      </div>
    `,
    }),
}

/** 进度百分比 */
export const 进度百分比: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress :percentage="0" />
        <CpProgress :percentage="25" />
        <CpProgress :percentage="50" />
        <CpProgress :percentage="75" />
        <CpProgress :percentage="100" />
      </div>
    `,
    }),
}

/** 尺寸 */
export const 尺寸: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress :percentage="60" size="sm" />
        <CpProgress :percentage="60" size="md" />
        <CpProgress :percentage="60" size="lg" />
        <CpProgress :percentage="60" size="xl" />
        <CpProgress :percentage="60" size="xxl" />
      </div>
    `,
    }),
}

/** 形状变体 */
export const 形状变体: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 400px;">
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">切角 (clip) - 默认</div>
          <CpProgress :percentage="60" shape="clip" />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">直角 (no-clip)</div>
          <CpProgress :percentage="60" shape="no-clip" />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">全圆角 (round)</div>
          <CpProgress :percentage="60" shape="round" />
        </div>
      </div>
    `,
    }),
}

/** 状态颜色 */
export const 状态颜色: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress :percentage="30" />
        <CpProgress :percentage="60" status="success" />
        <CpProgress :percentage="80" status="warning" />
        <CpProgress :percentage="50" status="error" />
      </div>
    `,
    }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress :percentage="40" color="#ff6b6b" />
        <CpProgress :percentage="60" color="#4ecdc4" />
        <CpProgress :percentage="80" color="#a29bfe" />
        <CpProgress :percentage="100" color="#fd79a8" />
      </div>
    `,
    }),
}

/** 文字在内部 */
export const 文字在内部: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress :percentage="25" :stroke-width="18" text-inside />
        <CpProgress :percentage="50" :stroke-width="18" text-inside status="success" />
        <CpProgress :percentage="75" :stroke-width="18" text-inside status="warning" />
        <CpProgress :percentage="100" :stroke-width="18" text-inside status="error" />
      </div>
    `,
    }),
}

/** 条纹效果 */
export const 条纹效果: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress :percentage="50" striped />
        <CpProgress :percentage="70" striped striped-flow />
        <CpProgress :percentage="60" striped striped-flow status="success" />
      </div>
    `,
    }),
}

/** 不确定进度 */
export const 不确定进度: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <CpProgress indeterminate />
        <CpProgress indeterminate status="success" />
        <CpProgress indeterminate color="#ff6b6b" />
      </div>
    `,
    }),
}

/** 加载状态 (光波效果) */
export const 加载状态: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">普通进度 + 光波</div>
          <CpProgress :percentage="60" loading />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">条纹 + 光波</div>
          <CpProgress :percentage="75" loading striped striped-flow />
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">自定义颜色 + 光波</div>
          <CpProgress :percentage="45" loading color="#4ecdc4" />
        </div>
      </div>
    `,
    }),
}

/** 环形进度条 */
export const 环形进度条: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpProgress type="circle" :percentage="0" />
        <CpProgress type="circle" :percentage="25" />
        <CpProgress type="circle" :percentage="50" />
        <CpProgress type="circle" :percentage="75" />
        <CpProgress type="circle" :percentage="100" status="success" />
      </div>
    `,
    }),
}

/** 环形尺寸 */
export const 环形尺寸: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpProgress type="circle" :percentage="60" :width="80" />
        <CpProgress type="circle" :percentage="60" :width="126" />
        <CpProgress type="circle" :percentage="60" :width="180" />
      </div>
    `,
    }),
}

/** 环形状态 */
export const 环形状态: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpProgress type="circle" :percentage="80" />
        <CpProgress type="circle" :percentage="100" status="success" />
        <CpProgress type="circle" :percentage="75" status="warning" />
        <CpProgress type="circle" :percentage="50" status="error" />
      </div>
    `,
    }),
}

/** 仪表盘 */
export const 仪表盘: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpProgress type="dashboard" :percentage="25" />
        <CpProgress type="dashboard" :percentage="50" status="warning" />
        <CpProgress type="dashboard" :percentage="80" status="success" />
      </div>
    `,
    }),
}

/** 环形形状 */
export const 环形形状: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">刀锋切角 (clip) - 默认</div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <CpProgress type="circle" :percentage="0" shape="clip" />
            <CpProgress type="circle" :percentage="25" shape="clip" />
            <CpProgress type="circle" :percentage="50" shape="clip" />
            <CpProgress type="circle" :percentage="75" shape="clip" />
            <CpProgress type="circle" :percentage="100" shape="clip" />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">平头 (no-clip)</div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <CpProgress type="circle" :percentage="0" shape="no-clip" />
            <CpProgress type="circle" :percentage="25" shape="no-clip" />
            <CpProgress type="circle" :percentage="50" shape="no-clip" />
            <CpProgress type="circle" :percentage="75" shape="no-clip" />
            <CpProgress type="circle" :percentage="100" shape="no-clip" />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: var(--cp-text-secondary); font-size: 12px;">圆角 (round)</div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <CpProgress type="circle" :percentage="0" shape="round" />
            <CpProgress type="circle" :percentage="25" shape="round" />
            <CpProgress type="circle" :percentage="50" shape="round" />
            <CpProgress type="circle" :percentage="75" shape="round" />
            <CpProgress type="circle" :percentage="100" shape="round" />
          </div>
        </div>
      </div>
    `,
    }),
}

/** 自定义格式 */
export const 自定义格式: Story = {
    render: () => ({
        components: { CpProgress },
        setup() {
            const format = (percentage: number) => {
                if (percentage === 100) return '满'
                return `${percentage}分`
            }
            return { format }
        },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpProgress type="circle" :percentage="80" :format="format" />
        <CpProgress type="dashboard" :percentage="100" :format="format" status="success" />
      </div>
    `,
    }),
}

/** 自定义插槽 */
export const 自定义插槽: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <CpProgress type="circle" :percentage="75" :width="150">
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: var(--cp-color-primary);">75%</div>
            <div style="font-size: 12px; color: var(--cp-text-secondary);">已完成</div>
          </div>
        </CpProgress>
        <CpProgress type="dashboard" :percentage="90" :width="150" status="success">
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: var(--cp-color-success);">A+</div>
            <div style="font-size: 12px; color: var(--cp-text-secondary);">优秀</div>
          </div>
        </CpProgress>
      </div>
    `,
    }),
}

/** 动态进度 */
export const 动态进度: Story = {
    render: () => ({
        components: { CpProgress },
        setup() {
            const percentage = ref(20)
            const increase = () => {
                percentage.value = Math.min(100, percentage.value + 10)
            }
            const decrease = () => {
                percentage.value = Math.max(0, percentage.value - 10)
            }
            return { percentage, increase, decrease }
        },
        template: `
      <div style="width: 400px;">
        <CpProgress :percentage="percentage" />
        <div style="display: flex; gap: 12px; margin-top: 16px;">
          <button 
            @click="decrease" 
            style="
              padding: 6px 16px; 
              background: var(--cp-bg-elevated); 
              border: 1px solid var(--cp-border); 
              color: var(--cp-text-primary);
              cursor: pointer;
            "
          >
            减少
          </button>
          <button 
            @click="increase" 
            style="
              padding: 6px 16px; 
              background: var(--cp-color-primary); 
              border: none; 
              color: var(--cp-text-inverse);
              cursor: pointer;
            "
          >
            增加
          </button>
        </div>
      </div>
    `,
    }),
}

/** 综合示例 */
export const 综合示例: Story = {
    render: () => ({
        components: { CpProgress },
        template: `
      <div style="padding: 24px; background: var(--cp-bg-base); border: 1px solid var(--cp-border);">
        <h3 style="color: var(--cp-color-primary); margin-bottom: 20px; font-family: 'Orbitron', sans-serif;">
          SYSTEM STATUS
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: var(--cp-text-secondary); font-size: 12px;">CPU Usage</span>
            </div>
            <CpProgress :percentage="75" status="warning" />
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: var(--cp-text-secondary); font-size: 12px;">Memory</span>
            </div>
            <CpProgress :percentage="45" />
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: var(--cp-text-secondary); font-size: 12px;">Storage</span>
            </div>
            <CpProgress :percentage="90" status="error" />
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: var(--cp-text-secondary); font-size: 12px;">Network</span>
            </div>
            <CpProgress indeterminate striped striped-flow color="#4ecdc4" />
          </div>
        </div>
        
        <div style="display: flex; gap: 24px; justify-content: center;">
          <CpProgress type="circle" :percentage="85" :width="100">
            <div style="text-align: center;">
              <div style="font-size: 18px; font-weight: bold;">85%</div>
              <div style="font-size: 10px; color: var(--cp-text-secondary);">健康度</div>
            </div>
          </CpProgress>
          <CpProgress type="dashboard" :percentage="92" :width="100" status="success">
            <div style="text-align: center;">
              <div style="font-size: 18px; font-weight: bold;">92%</div>
              <div style="font-size: 10px; color: var(--cp-text-secondary);">可用性</div>
            </div>
          </CpProgress>
        </div>
      </div>
    `,
    }),
}
