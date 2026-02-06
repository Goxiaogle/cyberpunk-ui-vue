import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * 状态指示器颜色类型
 * - `primary` - 主要色（赛博蓝）
 * - `success` - 成功色（霓虹绿）
 * - `warning` - 警告色（赛博黄）
 * - `error` - 错误色（霓虹红）
 * - `info` - 信息色（中性蓝）
 * - `default` - 默认色，继承文本颜色
 */
export type StatusIndicatorType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default';
/**
 * 状态指示器尺寸
 * - `sm` - 小尺寸 (8px)
 * - `md` - 中等尺寸 (12px)，默认
 * - `lg` - 大尺寸 (16px)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type StatusIndicatorSize = Size;
/**
 * 状态指示器形状
 * - `dot` - 圆点（默认）
 * - `square` - 方块
 * - `diamond` - 菱形
 */
export type StatusIndicatorShape = 'dot' | 'square' | 'diamond';
/**
 * 状态指示器动画
 * - `none` - 无动画（默认）
 * - `pulse` - 脉冲扩散效果
 * - `glow` - 发光呼吸效果
 * - `blink` - 闪烁效果
 */
export type StatusIndicatorAnimation = 'none' | 'pulse' | 'glow' | 'blink';
/**
 * CpStatusIndicator 组件 Props 定义
 *
 * @description 赛博朋克风格状态指示器组件，用于独立显示状态。
 * 可用于在线/离线状态、任务状态、系统状态等场景。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpStatusIndicator type="success" />
 *
 * <!-- 带动画 -->
 * <CpStatusIndicator type="primary" animation="pulse" />
 *
 * <!-- 带标签 -->
 * <CpStatusIndicator type="success" label="在线" />
 *
 * <!-- 自定义颜色 -->
 * <CpStatusIndicator color="#ff00ff" shape="diamond" />
 * ```
 */
export declare const statusIndicatorProps: {
    /**
     * 状态指示器颜色类型
     * @default 'default'
     * @example `<CpStatusIndicator type="success" />`
     */
    readonly type: {
        readonly type: PropType<StatusIndicatorType>;
        readonly default: "default";
    };
    /**
     * 状态指示器尺寸
     * @default 'md'
     * @example `<CpStatusIndicator size="lg" />`
     */
    readonly size: {
        readonly type: PropType<StatusIndicatorSize>;
        readonly default: "md";
    };
    /**
     * 状态指示器形状
     * @default 'dot'
     * @example `<CpStatusIndicator shape="diamond" />`
     */
    readonly shape: {
        readonly type: PropType<StatusIndicatorShape>;
        readonly default: "dot";
    };
    /**
     * 自定义颜色
     * 传入有效 CSS 颜色值，覆盖 `type` 的预设颜色
     * @default ''
     * @example `<CpStatusIndicator color="#00ffff" />`
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 动画效果
     * @default 'none'
     * @example `<CpStatusIndicator animation="pulse" />`
     */
    readonly animation: {
        readonly type: PropType<StatusIndicatorAnimation>;
        readonly default: "none";
    };
    /**
     * 动画持续时间
     * 数字默认毫秒 (ms)，字符串可指定单位 (如 '1.5s' 或 '1500ms')
     * @default 1500
     * @example `<CpStatusIndicator animation="pulse" :duration="2000" />`
     */
    readonly duration: {
        readonly type: PropType<number | string>;
        readonly default: 1500;
    };
    /**
     * 动画激烈程度
     * 控制波纹大小、发光强度或闪烁幅度
     * @default 1
     * @example `<CpStatusIndicator animation="pulse" :intensity="2" />`
     */
    readonly intensity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    /**
     * 指示点与文字间的间隙
     * 支持数字 (单位px) 或带单位的字符串 (如 '12px', '1rem')
     * @default ''
     * @example `<CpStatusIndicator :gap="12" />`
     */
    readonly gap: {
        readonly type: PropType<number | string>;
        readonly default: "";
    };
    /**
     * 文字标签
     * 显示在指示器右侧的文字描述，也可通过默认插槽设置
     * @default ''
     * @example `<CpStatusIndicator label="在线" />`
     */
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type StatusIndicatorProps = ExtractPropTypes<typeof statusIndicatorProps>;
