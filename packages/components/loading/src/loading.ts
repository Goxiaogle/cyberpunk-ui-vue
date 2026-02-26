import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 加载器颜色类型
 * - `primary` - 主要色（赛博蓝）
 * - `success` - 成功色（霓虹绿）
 * - `warning` - 警告色（赛博黄）
 * - `error` - 错误色（霓虹红）
 * - `info` - 信息色（中性蓝）
 * - `default` - 默认色，继承文本颜色
 */
export type LoadingType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'

/**
 * 加载器变体
 * - `circular` - 默认，Google Material 风格圆形动画
 * - `spinner` - 传统菊花图转圈加载（颜色渐变，逐帧旋转）
 * - `spinner-solid` - 实体菊花图加载（颜色统一，整体线性旋转）
 */
export type LoadingVariant = 'circular' | 'spinner' | 'spinner-solid'


/**
 * 加载器尺寸
 * - `sm` - 小尺寸 (16px)
 * - `md` - 中等尺寸 (24px)，默认
 * - `lg` - 大尺寸 (32px)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type LoadingSize = Size

/**
 * CpLoading 组件 Props 定义
 *
 * @description 赛博朋克风格加载器组件，环形 SVG 动画效果。
 * 可用于按钮内置加载、页面加载、异步操作等场景。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpLoading />
 *
 * <!-- 带颜色 -->
 * <CpLoading type="primary" size="lg" />
 *
 * <!-- 自定义颜色和描边 -->
 * <CpLoading color="#ff00ff" :stroke-width="2" />
 * ```
 */
export const loadingProps = {
    /**
     * 加载器颜色类型
     * @default 'default'
     * @example `<CpLoading type="primary" />`
     */
    type: {
        type: String as PropType<LoadingType>,
        default: 'default',
    },

    /**
     * 加载器尺寸
     * @default 'md'
     * @example `<CpLoading size="lg" />`
     */
    size: {
        type: [String, Number] as PropType<LoadingSize>,
        default: 'md',
    },
    /**
     * 自定义颜色
     * 传入有效 CSS 颜色值，覆盖 `type` 的预设颜色
     * @default ''
     * @example `<CpLoading color="#00ffff" />`
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * SVG 描边宽度
     * 数值越大，圆环越粗
     * @default 4
     * @example `<CpLoading :stroke-width="2" />`
     */
    strokeWidth: {
        type: Number,
        default: 4,
    },
    /**
     * 加载器变体
     * - `circular` - 默认，Google Material 风格圆形动画
     * - `spinner` - 传统菊花图转圈加载
     * @default 'circular'
     */
    variant: {
        type: String as PropType<LoadingVariant>,
        default: 'circular',
    },
} as const

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
