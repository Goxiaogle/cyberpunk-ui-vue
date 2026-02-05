import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 进度条类型
 * - `line` - 线性进度条（默认）
 * - `circle` - 环形进度条
 * - `dashboard` - 仪表盘式进度条
 */
export type ProgressType = 'line' | 'circle' | 'dashboard'

/**
 * 进度条尺寸
 * - `sm` - 小尺寸
 * - `md` - 中等尺寸（默认）
 * - `lg` - 大尺寸
 * - `xl` - 超大尺寸
 * - `xxl` - 特大尺寸
 */
export type ProgressSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/**
 * 进度条状态
 * - `success` - 成功状态（绿色）
 * - `warning` - 警告状态（黄色）
 * - `error` - 错误状态（红色）
 */
export type ProgressStatus = 'success' | 'warning' | 'error'

/**
 * 进度条线端样式
 * - `round` - 圆形端点（默认）
 * - `square` - 方形端点
 * - `butt` - 平头端点
 */
export type ProgressLinecap = 'round' | 'square' | 'butt'

/**
 * 进度条形状
 * - `clip` - 赛博朋克切角（默认）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形/圆形
 */
export type ProgressShape = 'clip' | 'no-clip' | 'round'

/**
 * CpProgress 组件 Props 定义
 *
 * @description 赛博朋克风格进度条组件，支持线性、环形、仪表盘三种模式。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpProgress :percentage="50" />
 *
 * <!-- 环形进度条 -->
 * <CpProgress type="circle" :percentage="75" />
 *
 * <!-- 条纹流动效果 -->
 * <CpProgress :percentage="60" striped striped-flow />
 *
 * <!-- 不确定进度 -->
 * <CpProgress indeterminate />
 *
 * <!-- 自定义颜色 -->
 * <CpProgress :percentage="80" color="#ff00ff" />
 * ```
 *
 * @slots
 * - `default` - 自定义进度文字内容（覆盖默认百分比显示）
 */
export const progressProps = {
    /**
     * 当前进度值
     * 取值范围 0 到 max（默认 100）
     * @default 0
     */
    percentage: {
        type: Number,
        default: 0,
    },
    /**
     * 进度最大值
     * 实际百分比 = percentage / max * 100
     * 在 Step 模式下，max 同时决定分段数量
     * @default 100
     * @example `<CpProgress :percentage="3" :max="10" steps />` 表示 10 段中完成了 3 段
     */
    max: {
        type: Number,
        default: 100,
        validator: (val: number) => val > 0,
    },
    /**
     * 进度条类型
     * - `line` - 线性进度条
     * - `circle` - 环形进度条
     * - `dashboard` - 仪表盘式
     * @default 'line'
     */
    type: {
        type: String as PropType<ProgressType>,
        default: 'line',
    },
    /**
     * 进度条尺寸
     * @default 'md'
     * @example `<CpProgress size="lg" :percentage="50" />`
     */
    size: {
        type: String as PropType<ProgressSize>,
        default: 'md',
    },
    /**
     * 进度条状态
     * 设置后会覆盖默认的主题色
     * @default undefined
     * @example `<CpProgress :percentage="100" status="success" />`
     */
    status: {
        type: String as PropType<ProgressStatus>,
        default: undefined,
    },
    /**
     * 自定义进度条颜色
     * 支持 CSS 颜色值，会覆盖 status 颜色
     * @default ''
     * @example `<CpProgress :percentage="50" color="#ff00ff" />`
     */
    color: {
        type: [String, Array, Function] as PropType<
            string | string[] | ((percentage: number) => string)
        >,
        default: '',
    },
    /**
     * 进度条轨道宽度 (像素)
     * @default undefined (根据尺寸自动计算)
     */
    strokeWidth: {
        type: Number,
        default: undefined,
    },
    /**
     * 是否显示进度文字
     * @default true
     */
    showText: {
        type: Boolean,
        default: true,
    },
    /**
     * 进度文字是否在进度条内部显示
     * 仅在 type="line" 时有效
     * @default false
     * @example `<CpProgress :percentage="80" text-inside />`
     */
    textInside: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义进度文字格式化函数
     * @default undefined (显示百分比)
     * @example `<CpProgress :percentage="50" :format="(p) => \`${p}分\`" />`
     */
    format: {
        type: Function as PropType<(percentage: number) => string>,
        default: undefined,
    },
    /**
     * 环形进度条的线端样式
     * @default 'round'
     */
    strokeLinecap: {
        type: String as PropType<ProgressLinecap>,
        default: 'round',
    },
    /**
     * 环形进度条的宽度 (像素)
     * 仅在 type="circle" 或 type="dashboard" 时有效
     * @default 126
     */
    width: {
        type: Number,
        default: 126,
    },
    /**
     * 是否显示条纹效果
     * @default false
     * @example `<CpProgress :percentage="60" striped />`
     */
    striped: {
        type: Boolean,
        default: false,
    },
    /**
     * 条纹是否流动
     * 需配合 striped 使用
     * @default false
     * @example `<CpProgress :percentage="60" striped striped-flow />`
     */
    stripedFlow: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否为不确定进度模式
     * 开启后显示加载动画，忽略 percentage 值
     * @default false
     * @example `<CpProgress indeterminate />`
     */
    indeterminate: {
        type: Boolean,
        default: false,
    },
    /**
     * 不确定模式动画持续时间 (秒)
     * @default 3
     */
    duration: {
        type: Number,
        default: 3,
    },
    /**
     * 是否显示加载状态（光波扫过效果）
     * @default false
     * @example `<CpProgress :percentage="60" loading />`
     */
    loading: {
        type: Boolean,
        default: false,
    },
    /**
     * 进度条形状
     * @default 'clip'
     */
    shape: {
        type: String as PropType<ProgressShape>,
        default: 'clip',
    },
    /**
     * 是否启用分段模式
     * 启用后，进度条将显示为分段样式，分段数量由 max 决定
     * @default false
     * @example `<CpProgress :percentage="3" :max="10" steps />` 表示 10 段中完成了 3 段
     */
    steps: {
        type: Boolean,
        default: false,
    },
    /**
     * 分段间距（像素）
     * @default 2
     */
    stepGap: {
        type: Number,
        default: 2,
    },
    /**
     * 各分段自定义颜色数组
     * 可为每个分段指定独立颜色，未指定的分段使用默认颜色
     * @default []
     * @example `<CpProgress :steps="5" :step-colors="['#00ff00', '#00ff00', '#ffaa00']" />`
     */
    stepColors: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    /**
     * 进度条内部文字颜色
     * 仅在 textInside 为 true 时生效
     * 如未设置则根据进度条背景色自动计算对比度选择黑白
     * @default undefined
     * @example `<CpProgress :percentage="50" text-inside text-color="#fff" />`
     */
    textColor: {
        type: String,
        default: undefined,
    },
} as const

export type ProgressProps = ExtractPropTypes<typeof progressProps>
