import type { ExtractPropTypes, PropType } from 'vue'
import type { IconValue } from '@cyberpunk-vue/components/icon/src/icon'

/**
 * 空状态颜色类型
 */
export type EmptyType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'

/**
 * CpEmpty 组件 Props 定义
 *
 * @description 赛博朋克风格空状态组件，用于无数据、无搜索结果等场景。
 * 组件始终撑满父容器，水平+垂直居中展示。
  * @category 展示组件
 * @displayName CpEmpty 空状态
  * @slots default - 底部操作区域（按钮等）
 * @slots image - 自定义图标/图片（替代内置 SVG）
 * @slots title - 自定义标题内容
 * @slots description - 自定义描述内容
 * @example
 * ```vue
 * <CpEmpty />
 * <CpEmpty title="暂无数据" description="点击刷新加载数据">
 *   <CpButton type="primary" size="sm">刷新</CpButton>
 * </CpEmpty>
 * ```
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
        type: [Object, Function, String] as PropType<IconValue>,
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
