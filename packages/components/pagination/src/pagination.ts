import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'
import type { ButtonVariant } from '@cyberpunk-vue/components/button/src/button'

/**
 * 分页颜色类型
 */
export type PaginationType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 分页形状
 */
export type PaginationShape = 'clip' | 'no-clip' | 'round' | 'circle'

/**
 * 分页尺寸
 */
export type PaginationSize = Size

/**
 * 布局模块名称
 * - `total` — 总条数文字
 * - `sizes` — 每页条数选择器
 * - `prev` — 上一页按钮
 * - `pager` — 页码按钮组
 * - `next` — 下一页按钮
 * - `jumper` — 页码跳转输入框
 */
export type PaginationLayout = 'total' | 'sizes' | 'prev' | 'pager' | 'next' | 'jumper'

/**
 * CpPagination 组件 Props 定义
 *
 * @description 赛博朋克风格分页组件，用于长列表数据分页导航。
 *
 * @example
 * ```vue
 * <CpPagination
 *   v-model:currentPage="page"
 *   v-model:pageSize="size"
 *   :total="100"
 *   layout="total, sizes, prev, pager, next, jumper"
 * />
 * ```
 */
export const paginationProps = {
    /**
     * 当前页码 (v-model:currentPage)
     * @default 1
     */
    currentPage: {
        type: Number,
        default: 1,
    },
    /**
     * 每页显示条数 (v-model:pageSize)
     * @default 10
     */
    pageSize: {
        type: Number,
        default: 10,
    },
    /**
     * 总条数
     * @default 0
     */
    total: {
        type: Number,
        default: 0,
    },
    /**
     * 可选的每页条数列表
     * @default [10, 20, 50, 100]
     */
    pageSizes: {
        type: Array as PropType<number[]>,
        default: () => [10, 20, 50, 100],
    },
    /**
     * 最大可见页码按钮数（应为奇数 >= 5）
     * @default 7
     */
    pagerCount: {
        type: Number,
        default: 7,
        validator: (val: number) => val >= 5 && val <= 21 && val % 2 === 1,
    },
    /**
     * 布局配置，逗号分隔
     * 可选模块: total, sizes, prev, pager, next, jumper
     * @default 'prev, pager, next'
     */
    layout: {
        type: String,
        default: 'prev, pager, next',
    },
    /**
     * 是否禁用
     * @default false
     */
    disabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 只有一页时隐藏
     * @default false
     */
    hideOnSinglePage: {
        type: Boolean,
        default: false,
    },
    /**
     * 颜色类型
     * @default 'default'
     */
    type: {
        type: String as PropType<PaginationType>,
        default: 'default',
    },
    /**
     * 形状
     * @default 'clip'
     */
    shape: {
        type: String as PropType<PaginationShape>,
        default: 'clip',
    },
    /**
     * 尺寸
     * @default 'md'
     */
    size: {
        type: [String, Number] as PropType<PaginationSize>,
        default: 'md',
    },
    /**
     * 自定义颜色（CSS 颜色值）
     * 优先级高于 type，覆盖主题色
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 分页按钮变体
     * 控制 CpButton 的显示风格
     * @default 'ghost'
     */
    buttonVariant: {
        type: String as PropType<ButtonVariant>,
        default: 'solid',
    },
    /**
     * 总条数文案模板
     * 使用 `{total}` 作为占位符
     * @default '共 {total} 条'
     */
    totalTemplate: {
        type: String,
        default: '共 {total} 条',
    },
    /**
     * 每页条数选项文案模板
     * 使用 `{size}` 作为占位符
     * @default '{size} 条/页'
     */
    sizeTemplate: {
        type: String,
        default: '{size} 条/页',
    },
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>

/**
 * CpPagination 事件定义
 */
export const paginationEmits = {
    /** 当前页码变化 */
    'update:currentPage': (page: number) => typeof page === 'number',
    /** 每页条数变化 */
    'update:pageSize': (size: number) => typeof size === 'number',
    /** 页码变化事件（同 update:currentPage，便于监听） */
    change: (page: number) => typeof page === 'number',
    /** 每页条数变化事件 */
    sizeChange: (size: number) => typeof size === 'number',
}

export type PaginationEmits = typeof paginationEmits
