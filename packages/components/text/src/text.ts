import type { ExtractPropTypes, PropType } from 'vue'
import type { DurationValue } from '@cyberpunk-vue/hooks'

/**
 * 文字尺寸
 * - `sm` - 小尺寸 (12px)
 * - `md` - 中等尺寸 (14px)，默认
 * - `lg` - 大尺寸 (16px)
 * - `number` - 自定义像素值
 */
export type TextSize = 'sm' | 'md' | 'lg' | number

/**
 * 文字类型（颜色预设）
 * - `default` - 默认 (继承父级颜色)
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type TextType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 垂直对齐方式
 * - `top` - 顶部对齐
 * - `middle` - 垂直居中（默认）
 * - `bottom` - 底部对齐
 */
export type TextAlign = 'top' | 'middle' | 'bottom'

/**
 * CpText 组件 Props 定义
 *
 * @description 赛博朋克风格特殊文字组件，可快速为文字添加多种视觉效果。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpText>普通文字</CpText>
 *
 * <!-- 带效果 -->
 * <CpText underline type="primary">下划线</CpText>
 * <CpText boxed glow type="error">方框发光</CpText>
 * <CpText marker type="warning">马克笔效果</CpText>
 *
 * <!-- 组合效果 -->
 * <CpText bold italic underline>加粗斜体下划线</CpText>
 * ```
 */
export const textProps = {
    /**
     * 文字类型（颜色预设）
     * @default 'default'
     * @example `<CpText type="primary">主色调</CpText>`
     */
    type: {
        type: String as PropType<TextType>,
        default: 'default',
    },
    /**
     * 自定义颜色
     * 传入有效 CSS 颜色值，覆盖 type 的颜色
     * @default ''
     * @example `<CpText color="#ff00ff">自定义</CpText>`
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 文字尺寸
     * 可以是预设值 (sm/md/lg) 或数字 (像素)
     * @default 'md'
     * @example `<CpText size="lg">大号</CpText>`
     * @example `<CpText :size="20">20像素</CpText>`
     */
    size: {
        type: [String, Number] as PropType<TextSize>,
        default: 'md',
    },
    /**
     * 垂直对齐方式
     * @default 'middle'
     */
    align: {
        type: String as PropType<TextAlign>,
        default: 'middle',
    },
    /**
     * 下划线效果
     * @default false
     */
    underline: {
        type: Boolean,
        default: false,
    },
    /**
     * 方框边框效果
     * @default false
     */
    boxed: {
        type: Boolean,
        default: false,
    },
    /**
     * 虚线样式
     * 应用于下划线或方框边框
     * @default false
     */
    dashed: {
        type: Boolean,
        default: false,
    },
    /**
     * 加粗效果
     * @default false
     */
    bold: {
        type: Boolean,
        default: false,
    },
    /**
     * 斜体效果
     * @default false
     */
    italic: {
        type: Boolean,
        default: false,
    },
    /**
     * 删除线效果
     * @default false
     */
    strikethrough: {
        type: Boolean,
        default: false,
    },
    /**
     * 发光效果
     * 赛博朋克霓虹发光效果
     * @default false
     */
    glow: {
        type: Boolean,
        default: false,
    },
    /**
     * 发光强度
     * 1-10 的数值，控制发光的扩散范围
     * @default 3
     */
    glowIntensity: {
        type: Number,
        default: 3,
    },
    /**
     * 发光心跳动画
     * 开启后发光效果会有呼吸脉冲动画
     * @default false
     */
    glowPulse: {
        type: Boolean,
        default: false,
    },
    /**
     * 光波扫射动画
     * 斜向高光扫过文字的动态效果
     * @default false
     */
    lightWave: {
        type: Boolean,
        default: false,
    },
    /**
     * 光波动画时长
     * 数字默认毫秒 (ms)，字符串可指定单位 (如 '2s' 或 '2000ms')
     * @default 2000
     */
    lightWaveDuration: {
        type: [Number, String] as PropType<DurationValue>,
        default: 2000,
    },
    /**
     * 马克笔背景效果
     * 荧光笔高亮效果
     * @default false
     */
    marker: {
        type: Boolean,
        default: false,
    },
    /**
     * 马克笔自定义颜色
     * 不设置则使用文字颜色
     * @default ''
     */
    markerColor: {
        type: String,
        default: '',
    },
    /**
     * 发光心跳动画时长
     * 数字默认毫秒 (ms)，字符串可指定单位 (如 '1.5s' 或 '1500ms')
     * @default 1500
     */
    glowPulseDuration: {
        type: [Number, String] as PropType<DurationValue>,
        default: 1500,
    },
    /**
     * 重叠文字效果
     * 通过 text-shadow 实现错位重影的赛博朋克视觉效果
     * @default false
     */
    overlap: {
        type: Boolean,
        default: false,
    },
    /**
     * 重叠文字 X 轴偏移量 (px)
     * 正值向右偏移，负值向左偏移
     * @default 2
     */
    overlapOffsetX: {
        type: Number,
        default: 2,
    },
    /**
     * 重叠文字 Y 轴偏移量 (px)
     * 正值向下偏移，负值向上偏移
     * @default 2
     */
    overlapOffsetY: {
        type: Number,
        default: 2,
    },
    /**
     * 重叠文字颜色
     * 不设置则使用文字颜色的明暗调整版本
     * @default ''
     */
    overlapColor: {
        type: String,
        default: '',
    },
    /**
     * 禁止选中/复制
     * 开启后文字无法被鼠标选中或通过键盘复制
     * @default false
     */
    unselectable: {
        type: Boolean,
        default: false,
    },
} as const

export type TextProps = ExtractPropTypes<typeof textProps>
