import type { ExtractPropTypes, PropType } from 'vue'

/**
 * CpBreadcrumbItem 组件 Props 定义
 *
 * @description 面包屑子项，表示路径中的一个层级。
 *
 * @example
 * ```vue
 * <CpBreadcrumbItem to="/home">首页</CpBreadcrumbItem>
 * <CpBreadcrumbItem>当前页</CpBreadcrumbItem>
 * ```
 */
export const breadcrumbItemProps = {
    /**
     * 路由跳转目标（vue-router 的 `to`）
     * 不设置则渲染为纯文本
     */
    to: {
        type: [String, Object] as PropType<string | Record<string, unknown>>,
        default: '',
    },
    /**
     * 使用 router.replace 替代 router.push
     * @default false
     */
    replace: {
        type: Boolean,
        default: false,
    },
} as const

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
