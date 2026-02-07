import type { ExtractPropTypes, PropType } from 'vue';
/**
 * 徽章颜色类型
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红) - 默认
 * - `info` - 信息 (紫罗兰)
 * - `default` - 默认 (深灰/中性)
 */
export type BadgeType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default';
/**
 * 徽章变体
 * - `solid` - 实心填充（默认）
 * - `outline` - 边框描边
 * - `glow` - 发光效果（赛博朋克风格）
 */
export type BadgeVariant = 'solid' | 'outline' | 'glow';
/**
 * 徽章尺寸
 * - `small` - 小尺寸
 * - `default` - 默认尺寸
 * - `large` - 大尺寸
 */
export type BadgeSize = 'small' | 'default' | 'large';
/**
 * CpBadge 组件 Props 定义
 *
 * @description 赛博朋克风格徽章组件，用于在另一个元素上显示数字、小红点或状态标识。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpBadge :value="5">
 *   <CpButton>消息</CpButton>
 * </CpBadge>
 *
 * <!-- 最小值限制 -->
 * <CpBadge :value="2" :min="10">
 *   <CpButton>库存</CpButton>
 * </CpBadge>
 * ```
 */
export declare const badgeProps: {
    /**
     * 徽章显示内容
     * 可以是数字或字符串
     * @default ''
     */
    readonly value: {
        readonly type: PropType<number | string>;
        readonly default: "";
    };
    /**
     * 最大显示数值
     * 超出时显示 `{max}+`
     * @default 99
     */
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    /**
     * 最小显示数值
     * 低于时显示 `{min}-`
     * @default -Infinity
     */
    readonly min: {
        readonly type: NumberConstructor;
    };
    /**
     * 小红点模式
     * 开启后仅显示一个小圆点，忽略 value
     * @default false
     */
    readonly dot: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否隐藏徽章
     * @default false
     */
    readonly hidden: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 值为 0 时是否显示
     * @default false
     */
    readonly showZero: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 徽章颜色类型
     * @default 'error'
     */
    readonly type: {
        readonly type: PropType<BadgeType>;
        readonly default: "error";
    };
    /**
     * 自定义背景颜色
     * 传入有效 CSS 颜色值，覆盖 type 的颜色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 自定义文本颜色
     * @default ''
     */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 自定义偏移量 [x, y]
     * 正值向右/下偏移，负值向左/上偏移
     */
    readonly offset: {
        readonly type: PropType<[number, number]>;
    };
    /**
     * 徽章变体样式
     * @default 'solid'
     */
    readonly variant: {
        readonly type: PropType<BadgeVariant>;
        readonly default: "solid";
    };
    /**
     * 徽章尺寸
     * @default 'default'
     */
    readonly size: {
        readonly type: PropType<BadgeSize>;
        readonly default: "default";
    };
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
