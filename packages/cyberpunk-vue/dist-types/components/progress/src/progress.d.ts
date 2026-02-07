import type { ExtractPropTypes, PropType } from 'vue';
import type { DurationValue, Size } from '@cyberpunk-vue/hooks';
/**
 * 进度条类型
 * - `line` - 线性进度条（默认）
 * - `circle` - 环形进度条
 * - `dashboard` - 仪表盘式进度条
 */
export type ProgressType = 'line' | 'circle' | 'dashboard';
/**
 * 进度条尺寸
 * - `sm` - 小尺寸
 * - `md` - 中等尺寸（默认）
 * - `lg` - 大尺寸
 * - `xl` - 超大尺寸
 * - `xxl` - 特大尺寸
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type ProgressSize = Size | 'xl' | 'xxl';
/**
 * 进度条状态
 * - `success` - 成功状态（绿色）
 * - `warning` - 警告状态（黄色）
 * - `error` - 错误状态（红色）
 */
export type ProgressStatus = 'success' | 'warning' | 'error';
/**
 * 进度条线端样式
 * - `round` - 圆形端点（默认）
 * - `square` - 方形端点
 * - `butt` - 平头端点
 */
export type ProgressLinecap = 'round' | 'square' | 'butt';
/**
 * 进度条形状
 * - `clip` - 赛博朋克切角（默认）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形/圆形
 */
export type ProgressShape = 'clip' | 'no-clip' | 'round';
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
export declare const progressProps: {
    /**
     * 当前进度值
     * 取值范围 0 到 max（默认 100）
     * @default 0
     */
    readonly percentage: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /**
     * 进度最大值
     * 实际百分比 = percentage / max * 100
     * 在 Step 模式下，max 同时决定分段数量
     * @default 100
     * @example `<CpProgress :percentage="3" :max="10" steps />` 表示 10 段中完成了 3 段
     */
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (val: number) => boolean;
    };
    /**
     * 进度条类型
     * - `line` - 线性进度条
     * - `circle` - 环形进度条
     * - `dashboard` - 仪表盘式
     * @default 'line'
     */
    readonly type: {
        readonly type: PropType<ProgressType>;
        readonly default: "line";
    };
    /**
     * 进度条尺寸
     * @default 'md'
     * @example `<CpProgress size="lg" :percentage="50" />`
     */
    readonly size: {
        readonly type: PropType<ProgressSize>;
        readonly default: "md";
    };
    /**
     * 进度条状态
     * 设置后会覆盖默认的主题色
     * @default undefined
     * @example `<CpProgress :percentage="100" status="success" />`
     */
    readonly status: {
        readonly type: PropType<ProgressStatus>;
        readonly default: undefined;
    };
    /**
     * 自定义进度条颜色
     * 支持 CSS 颜色值，会覆盖 status 颜色
     * @default ''
     * @example `<CpProgress :percentage="50" color="#ff00ff" />`
     */
    readonly color: {
        readonly type: PropType<string | string[] | ((percentage: number) => string)>;
        readonly default: "";
    };
    /**
     * 进度条轨道宽度 (像素)
     * @default undefined (根据尺寸自动计算)
     */
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    /**
     * 是否显示进度文字
     * @default true
     */
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 进度文字是否在进度条内部显示
     * 仅在 type="line" 时有效
     * @default false
     * @example `<CpProgress :percentage="80" text-inside />`
     */
    readonly textInside: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 自定义进度文字格式化函数
     * @default undefined (显示百分比)
     * @example `<CpProgress :percentage="50" :format="(p) => \`${p}分\`" />`
     */
    readonly format: {
        readonly type: PropType<(percentage: number) => string>;
        readonly default: undefined;
    };
    /**
     * 环形进度条的线端样式
     * @default 'round'
     */
    readonly strokeLinecap: {
        readonly type: PropType<ProgressLinecap>;
        readonly default: "round";
    };
    /**
     * 环形进度条的宽度 (像素)
     * 仅在 type="circle" 或 type="dashboard" 时有效
     * @default 126
     */
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 126;
    };
    /**
     * 是否显示条纹效果
     * @default false
     * @example `<CpProgress :percentage="60" striped />`
     */
    readonly striped: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 条纹是否流动
     * 需配合 striped 使用
     * @default false
     * @example `<CpProgress :percentage="60" striped striped-flow />`
     */
    readonly stripedFlow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否为不确定进度模式
     * 开启后显示加载动画，忽略 percentage 值
     * @default false
     * @example `<CpProgress indeterminate />`
     */
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 不确定模式动画持续时间
     * 数字默认毫秒 (ms)，字符串可指定单位 (如 '3s' 或 '3000ms')
     * @default 3000
     */
    readonly duration: {
        readonly type: PropType<DurationValue>;
        readonly default: 3000;
    };
    /**
     * 是否显示加载状态（光波扫过效果）
     * @default false
     * @example `<CpProgress :percentage="60" loading />`
     */
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 进度条形状
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<ProgressShape>;
        readonly default: "clip";
    };
    /**
     * 是否启用分段模式
     * 启用后，进度条将显示为分段样式，分段数量由 max 决定
     * @default false
     * @example `<CpProgress :percentage="3" :max="10" steps />` 表示 10 段中完成了 3 段
     */
    readonly steps: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 分段间距（像素）
     * @default 2
     */
    readonly stepGap: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
    /**
     * 各分段自定义颜色数组
     * 可为每个分段指定独立颜色，未指定的分段使用默认颜色
     * @default []
     * @example `<CpProgress :steps="5" :step-colors="['#00ff00', '#00ff00', '#ffaa00']" />`
     */
    readonly stepColors: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
    };
    /**
     * 进度条内部文字颜色
     * 仅在 textInside 为 true 时生效
     * 如未设置则根据进度条背景色自动计算对比度选择黑白
     * @default undefined
     * @example `<CpProgress :percentage="50" text-inside text-color="#fff" />`
     */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    /**
     * 是否显示内圈虚线装饰
     * 仅在 type="circle" 或 type="dashboard" 时有效
     * 默认在 circle 时显示，dashboard 时关闭
     * @default undefined
     */
    readonly showInnerStripe: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
};
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
