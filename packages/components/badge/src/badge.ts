import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 徽章颜色类型
 * - `primary` - 主要色（赛博蓝）
 * - `success` - 成功色（霓虹绿）
 * - `warning` - 警告色（赛博黄）
 * - `error` - 错误色（霓虹红）
 * - `info` - 信息色（中性蓝）
 * - `default` - 默认中性色
 */
export type BadgeType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'

/**
 * 徽章变体样式
 * - `solid` - 实心填充（默认）
 * - `outline` - 边框描边
 * - `glow` - 发光效果
 */
export type BadgeVariant = 'solid' | 'outline' | 'glow'

/**
 * 徽章尺寸
 * - `small` - 小尺寸
 * - `default` - 默认尺寸
 * - `large` - 大尺寸
 */
export type BadgeSize = 'small' | 'default' | 'large'

/**
 * CpBadge 组件 Props 定义
 *
 * @description 赛博朋克风格徽章组件，用于在另一个元素上显示数字、小红点或状态标识。
 *
 * @example
 * ```vue
 * <CpBadge :value="5">
 *   <CpButton>消息</CpButton>
 * </CpBadge>
 * ```
 */
export const badgeProps = {
    /**
     * 徽章显示内容（数字或字符串）
     * @default ''
     */
    value: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    /**
     * 最大显示数值，超出显示 `{max}+`
     * @default 99
     */
    max: {
        type: Number,
        default: 99,
    },
    /**
     * 最小显示数值，低于时显示 `{min}-`
     * @default undefined
     */
    min: {
        type: Number,
        default: undefined,
    },
    /**
     * 小红点模式
     * @default false
     */
    dot: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否隐藏徽章
     * @default false
     */
    hidden: {
        type: Boolean,
        default: false,
    },
    /**
     * 值为 0 时是否显示
     * @default false
     */
    showZero: {
        type: Boolean,
        default: false,
    },
    /**
     * 徽章颜色类型
     * @default 'error'
     */
    type: {
        type: String as PropType<BadgeType>,
        default: 'error',
    },
    /**
     * 自定义背景颜色
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 自定义文本颜色
     * @default ''
     */
    textColor: {
        type: String,
        default: '',
    },
    /**
     * 变体样式
     * @default 'solid'
     */
    variant: {
        type: String as PropType<BadgeVariant>,
        default: 'solid',
    },
    /**
     * 自定义偏移量 [x, y]
     * @default undefined
     */
    offset: {
        type: Array as unknown as PropType<[number, number]>,
        default: undefined,
    },
    /**
     * 徽章尺寸
     * @default 'default'
     */
    size: {
        type: [String, Number] as PropType<BadgeSize>,
        default: 'default',
    },
} as const

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
