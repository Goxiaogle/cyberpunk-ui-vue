import type { ExtractPropTypes, PropType } from 'vue'

/**
 * CpImagePreview 组件 Props 定义
 *
 * @description 赛博朋克风格全屏大图预览组件，支持缩放、旋转、多图切换。
 *
 * @example
 * ```vue
 * <CpImagePreview v-model="visible" :url-list="urls" />
 * ```
 */
export const imagePreviewProps = {
    /**
     * 是否显示预览 (v-model)
     * @default false
     */
    modelValue: {
        type: Boolean,
        default: false,
    },
    /**
     * 预览图片列表
     * @default []
     */
    urlList: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    /**
     * 初始显示的图片索引
     * @default 0
     */
    initialIndex: {
        type: Number,
        default: 0,
    },
    /**
     * z-index 层级
     * @default 2000
     */
    zIndex: {
        type: Number,
        default: 2000,
    },
    /**
     * 是否支持循环切换（到最后一张后跳回第一张）
     * @default true
     */
    infinite: {
        type: Boolean,
        default: true,
    },
    /**
     * Teleport 目标
     * @default 'body'
     */
    teleportTo: {
        type: [String, Object] as PropType<string | HTMLElement>,
        default: 'body',
    },
    /**
     * 主题颜色类型
     * @default 'primary'
     */
    type: {
        type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'>,
        default: 'primary',
    },
    /**
     * 自定义外发光及部分元素的颜色
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 是否允许下载图片，开启后工具栏会显示下载按钮
     * @default false
     */
    download: {
        type: Boolean,
        default: false,
    },
} as const

export type ImagePreviewProps = ExtractPropTypes<typeof imagePreviewProps>

/**
 * CpImagePreview 组件事件定义
 */
export const imagePreviewEmits = {
    /** v-model 绑定 */
    'update:modelValue': (value: boolean) => typeof value === 'boolean',
    /** 关闭时触发 */
    close: () => true,
    /** 切换图片时触发 */
    switch: (index: number) => typeof index === 'number',
}

export type ImagePreviewEmits = typeof imagePreviewEmits
