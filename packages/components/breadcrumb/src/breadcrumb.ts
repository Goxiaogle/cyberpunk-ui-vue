import type { ExtractPropTypes, PropType, Component } from 'vue'

/**
 * 面包屑颜色类型
 */
export type BreadcrumbType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 面包屑变体
 * - `default` - 纯文本 + 下划线动画（默认）
 * - `plain` - 仅文字颜色变化，无装饰
 * - `outline` - 边框描边
 * - `background` - 背景填充
 */
export type BreadcrumbVariant = 'default' | 'plain' | 'outline' | 'background'

/**
 * CpBreadcrumb 组件 Props 定义
 *
 * @description 赛博朋克风格面包屑导航，展示当前页面在层级结构中的位置。
 *
 * @example
 * ```vue
 * <CpBreadcrumb>
 *   <CpBreadcrumbItem>首页</CpBreadcrumbItem>
 *   <CpBreadcrumbItem>系统管理</CpBreadcrumbItem>
 *   <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
 * </CpBreadcrumb>
 * ```
 */
export const breadcrumbProps = {
    /**
     * 分隔符文本
     * @default '/'
     */
    separator: {
        type: String,
        default: '/',
    },
    /**
     * 分隔符图标（优先级高于 separator 文本）
     * 支持 Vue 组件（如 unplugin-icons）
     */
    separatorIcon: {
        type: [Object, Function] as PropType<Component>,
        default: undefined,
    },
    /**
     * 变体样式
     * @default 'default'
     */
    variant: {
        type: String as PropType<BreadcrumbVariant>,
        default: 'default',
    },
    /**
     * 颜色预设类型
     * @default 'default'
     */
    type: {
        type: String as PropType<BreadcrumbType>,
        default: 'default',
    },
    /**
     * 自定义主题色（覆盖 type 预设）
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

/**
 * Breadcrumb provide/inject key
 */
export const BREADCRUMB_INJECTION_KEY = Symbol('breadcrumb')

export interface BreadcrumbContext {
    separator: string
    separatorIcon?: Component
}
