import type { ExtractPropTypes, PropType } from 'vue'

export interface ImagePreviewPayload {
    index: number
    url: string
    urlList: string[]
}

export type ImagePreviewClosePayload = ImagePreviewPayload
export type ImagePreviewSwitchPayload = ImagePreviewPayload

export interface ImagePreviewToolbarSlotProps {
    scale: number
    rotate: number
    currentIndex: number
    currentUrl: string
    urlList: string[]
    isSingle: boolean
    canPrev: boolean
    canNext: boolean
    zoomMin: number
    zoomMax: number
    zoomIn: () => void
    zoomOut: () => void
    rotateLeft: () => void
    rotateRight: () => void
    resetTransform: () => void
    prev: () => void
    next: () => void
    close: () => void
    download: () => void
}

/**
 * CpImagePreview 组件 Props 定义
 *
 * @description 赛博朋克风格全屏大图预览组件，支持缩放、旋转、多图切换，工具栏支持插槽自定义。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpImagePreview v-model="visible" :url-list="urls" />
 *
 * <!-- 禁止点击遮罩关闭，并在关闭时获取停留位置 -->
 * <CpImagePreview
 *   v-model="visible"
 *   :url-list="urls"
 *   :close-on-click-modal="false"
 *   @close="({ index, url }) => console.log(index, url)"
 * />
 *
 * <!-- 在内置工具栏末尾追加按钮 -->
 * <CpImagePreview v-model="visible" :url-list="urls">
 *   <template #toolbar-append="{ currentUrl, close }">
 *     <CpButton variant="ghost" dimmed square @click="share(currentUrl)">分享</CpButton>
 *   </template>
 * </CpImagePreview>
 *
 * <!-- 完全替换工具栏 -->
 * <CpImagePreview v-model="visible" :url-list="urls">
 *   <template #toolbar="{ zoomIn, zoomOut, resetTransform }">
 *     <CpButton @click="zoomOut">-</CpButton>
 *     <CpButton @click="zoomIn">+</CpButton>
 *     <CpButton @click="resetTransform">重置</CpButton>
 *   </template>
 * </CpImagePreview>
 * ```
 *
 * @slots
 * - `toolbar` - 完全替换底部工具栏（覆盖内置按钮）。作用域 props: `{ scale, rotate, currentIndex, currentUrl, urlList, isSingle, canPrev, canNext, zoomMin, zoomMax, zoomIn(), zoomOut(), rotateLeft(), rotateRight(), resetTransform(), prev(), next(), close(), download() }`
 * - `toolbar-append` - 在内置工具栏末尾追加自定义按钮。作用域 props 与 `toolbar` 一致
 *
 * @category 展示组件
 * @displayName CpImagePreview 图片预览
 * @exposes close() - 关闭预览
 * @exposes prev() - 上一张
 * @exposes next() - 下一张
 * @exposes zoomIn() - 放大
 * @exposes zoomOut() - 缩小
 * @exposes rotateLeft() - 左旋 90 度
 * @exposes rotateRight() - 右旋 90 度
 * @exposes resetTransform() - 还原缩放/旋转
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
    /**
     * 点击遮罩是否关闭预览
     * @default true
     */
    closeOnClickModal: {
        type: Boolean,
        default: true,
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
    close: (payload: ImagePreviewClosePayload) =>
        typeof payload?.index === 'number' && typeof payload.url === 'string' && Array.isArray(payload.urlList),
    /** 切换图片时触发 */
    switch: (index: number) => typeof index === 'number',
}

export type ImagePreviewEmits = typeof imagePreviewEmits
