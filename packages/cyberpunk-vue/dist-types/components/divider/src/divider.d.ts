import type { ExtractPropTypes, PropType } from 'vue';
/**
 * 分割线方向
 * - `horizontal` - 水平方向（默认）
 * - `vertical` - 垂直方向
 */
export type DividerDirection = 'horizontal' | 'vertical';
/**
 * 分割线类型（颜色预设）
 * - `default` - 默认边框色
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type DividerType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
/**
 * 文字位置
 * - `left` - 左侧
 * - `center` - 居中（默认）
 * - `right` - 右侧
 */
export type DividerContentPosition = 'left' | 'center' | 'right';
/**
 * 分割线变体
 * - `solid` - 实线（默认）
 * - `gradient` - 渐变线条（从透明到主色再到透明）
 * - `glow` - 发光效果
 */
export type DividerVariant = 'solid' | 'gradient' | 'glow';
/**
 * 线条样式
 * - `solid` - 实线
 * - `dashed` - 虚线
 * - `dotted` - 点线
 * - `double` - 双线
 */
export type DividerBorderStyle = 'solid' | 'dashed' | 'dotted' | 'double';
/**
 * CpDivider 组件 Props 定义
 *
 * @description 赛博朋克风格分割线组件，用于分隔内容区块。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpDivider />
 *
 * <!-- 带文字 -->
 * <CpDivider>SECTION</CpDivider>
 *
 * <!-- 垂直方向 -->
 * <CpDivider direction="vertical" />
 *
 * <!-- 发光效果 -->
 * <CpDivider type="primary" variant="glow" />
 * ```
 */
export declare const dividerProps: {
    /**
     * 分割线方向
     * @default 'horizontal'
     */
    readonly direction: {
        readonly type: PropType<DividerDirection>;
        readonly default: "horizontal";
    };
    /**
     * 分割线类型（颜色预设）
     * @default 'default'
     */
    readonly type: {
        readonly type: PropType<DividerType>;
        readonly default: "default";
    };
    /**
     * 自定义颜色
     * 传入有效 CSS 颜色值，覆盖 type 的颜色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 文字内容位置（仅水平方向有效）
     * @default 'center'
     */
    readonly contentPosition: {
        readonly type: PropType<DividerContentPosition>;
        readonly default: "center";
    };
    /**
     * 分割线变体
     * @default 'solid'
     */
    readonly variant: {
        readonly type: PropType<DividerVariant>;
        readonly default: "solid";
    };
    /**
     * 线条样式
     * @default 'solid'
     */
    readonly borderStyle: {
        readonly type: PropType<DividerBorderStyle>;
        readonly default: "solid";
    };
    /**
     * 虚线（快捷方式，等同于 borderStyle="dashed"）
     * @default false
     */
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 线条粗细 (px)
     * @default 1
     */
    readonly thickness: {
        readonly type: PropType<number | string>;
        readonly default: 1;
    };
    /**
     * 发光效果（快捷方式，等同于 variant="glow"）
     * @default false
     */
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 上下间距（水平方向）或左右间距（垂直方向）
     * 数字默认 px，支持带单位字符串
     * @default ''
     */
    readonly margin: {
        readonly type: PropType<number | string>;
        readonly default: "";
    };
};
export type DividerProps = ExtractPropTypes<typeof dividerProps>;
