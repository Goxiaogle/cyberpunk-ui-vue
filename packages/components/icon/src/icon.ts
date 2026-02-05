import type { Component, ExtractPropTypes, PropType } from 'vue'

/**
 * 图标颜色类型
 * - `primary` - 主要色（赛博蓝）
 * - `success` - 成功色（霓虹绿）
 * - `warning` - 警告色（赛博黄）
 * - `error` - 错误色（霓虹红）
 * - `info` - 信息色（中性蓝）
 * - `default` - 默认色，继承父级文本颜色
 */
export type IconType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'

/**
 * 图标尺寸
 * - `sm` - 小尺寸 (16px)
 * - `md` - 中等尺寸 (20px)，默认
 * - `lg` - 大尺寸 (24px)
 *
 * 也可传入自定义数值或 CSS 尺寸值
 */
export type IconSize = 'sm' | 'md' | 'lg'

/**
 * 图标来源值类型
 * - `Component` - Vue 组件（如 unplugin-icons 导入的图标）
 * - `string` - 原始 SVG 字符串、Iconify 图标名或 CSS 类名
 */
export type IconValue = Component | string

/**
 * CpIcon 组件 Props 定义
 *
 * @description 统一图标组件，支持多种图标来源：Vue 组件、原始 SVG、Iconify 图标名。
 * 自动处理 SVG 尺寸归一化，保证图标在不同来源下表现一致。
 *
 * @example
 * ```vue
 * <!-- 使用 Iconify 图标名 (需配合 unplugin-icons) -->
 * <CpIcon icon="mdi:home" />
 *
 * <!-- 使用 Vue 组件 -->
 * <CpIcon :icon="MyIconComponent" />
 *
 * <!-- 使用原始 SVG -->
 * <CpIcon icon="<svg>...</svg>" />
 *
 * <!-- 带颜色和尺寸 -->
 * <CpIcon icon="mdi:check" type="success" size="lg" />
 *
 * <!-- 旋转动画 (适合加载图标) -->
 * <CpIcon icon="mdi:loading" spin />
 * ```
 *
 * @slots
 * - `default` - 可用于传入自定义 SVG 内容
 */
export const iconProps = {
    /**
     * 图标来源
     *
     * 支持以下格式：
     * - **Vue Component**: 通过 unplugin-icons 导入的图标组件
     * - **Iconify 名称**: `'mdi:home'`、`'ph:user-bold'` 等
     * - **原始 SVG 字符串**: `'<svg>...</svg>'`
     * - **CSS 类名**: `'iconfont icon-home'` (字体图标)
     *
     * @example
     * ```vue
     * <CpIcon icon="mdi:home" />
     * <CpIcon :icon="HomeIcon" />
     * ```
     */
    icon: {
        type: [Object, String] as PropType<IconValue>,
        default: undefined,
    },
    /**
     * 图标尺寸
     *
     * 预设值: `'sm'` | `'md'` | `'lg'`
     * 也可传入数值 (px) 或 CSS 尺寸字符串 (如 `'2rem'`)
     *
     * @default 'md'
     * @example
     * ```vue
     * <CpIcon icon="mdi:home" size="lg" />
     * <CpIcon icon="mdi:home" :size="32" />
     * <CpIcon icon="mdi:home" size="2rem" />
     * ```
     */
    size: {
        type: [String, Number] as PropType<IconSize | string | number>,
        default: 'md',
    },
    /**
     * 图标颜色类型
     * @default 'default'
     * @example `<CpIcon icon="mdi:check" type="success" />`
     */
    type: {
        type: String as PropType<IconType>,
        default: 'default',
    },
    /**
     * 自定义图标颜色
     * 传入有效 CSS 颜色值，覆盖 `type` 的预设颜色
     * @default ''
     * @example `<CpIcon icon="mdi:star" color="#ffd700" />`
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 渲染的 HTML 标签
     * @default 'i'
     */
    tag: {
        type: String as PropType<'i' | 'span' | 'div'>,
        default: 'i',
    },
    /**
     * 是否启用旋转动画
     * 适用于加载图标，如 `mdi:loading`
     * @default false
     * @example `<CpIcon icon="mdi:loading" spin />`
     */
    spin: {
        type: Boolean,
        default: false,
    },
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
