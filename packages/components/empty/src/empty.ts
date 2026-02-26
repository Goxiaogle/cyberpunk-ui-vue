import type { Component, ExtractPropTypes, PropType } from 'vue'

/**
 * 空状态颜色类型
 */
export type EmptyType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'

/**
 * CpEmpty 组件 Props 定义
 *
 * @description 赛博朋克风格空状态组件，用于无数据、无搜索结果等场景。
 * 组件始终撑满父容器，水平+垂直居中展示。
 */
export const emptyProps = {
    /**
     * 标题文本（粗体大字）
     * @default '暂无数据'
     */
    title: {
        type: String,
        default: '暂无数据',
    },

    /**
     * 描述/副标题文本（次要灰色小字）
     * @default ''
     */
    description: {
        type: String,
        default: '',
    },

    /**
     * 自定义图标名称（使用 CpIcon）
     * @default ''
     */
    icon: {
        type: [String, Object] as PropType<string | Component>,
        default: '',
    },

    /**
     * 图标尺寸 (px)
     * @default 64
     */
    imageSize: {
        type: Number,
        default: 64,
    },

    /**
     * 颜色类型
     * @default 'default'
     */
    type: {
        type: String as PropType<EmptyType>,
        default: 'default',
    },

    /**
     * 自定义颜色（覆盖 type）
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
} as const

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
