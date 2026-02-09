import type { ExtractPropTypes } from 'vue'

/**
 * CpCol 组件 Props 定义
 *
 * @description 24 栅格列组件，配合 CpRow 使用。
 *
 * @example
 * ```vue
 * <CpRow :gutter="20">
 *   <CpCol :span="8">1/3</CpCol>
 *   <CpCol :span="8" :offset="8">1/3 偏移</CpCol>
 * </CpRow>
 * ```
 */
export const colProps = {
    /**
     * 栅格占据的列数 (0-24)
     * @default 24
     */
    span: {
        type: Number,
        default: 24,
    },
    /**
     * 栅格左侧偏移列数
     * @default 0
     */
    offset: {
        type: Number,
        default: 0,
    },
    /**
     * 栅格向右移动列数
     * @default 0
     */
    push: {
        type: Number,
        default: 0,
    },
    /**
     * 栅格向左移动列数
     * @default 0
     */
    pull: {
        type: Number,
        default: 0,
    },
    /**
     * 自定义元素标签
     * @default 'div'
     */
    tag: {
        type: String,
        default: 'div',
    },
} as const

export type ColProps = ExtractPropTypes<typeof colProps>
