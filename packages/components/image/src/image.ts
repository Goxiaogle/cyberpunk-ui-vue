import type { ExtractPropTypes, PropType } from 'vue'
import type { DurationValue } from '@cyberpunk-vue/hooks'

/**
 * 图片适应模式
 * - `contain` - 保持比例，完整显示
 * - `cover` - 保持比例，填满容器（默认）
 * - `fill` - 拉伸填满
 * - `none` - 原始尺寸
 * - `scale-down` - 保持比例，缩小到合适尺寸
 */
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'

/**
 * 图片形状模式
 * - `clip` - 机甲切角（默认）
 * - `no-clip` - 标准直角
 * - `round` - 圆角
 * - `circle` - 圆形
 */
export type ImageShape = 'clip' | 'no-clip' | 'round' | 'circle'

/**
 * 装饰块位置
 * - `bottom-left` - 左下角（默认）
 * - `bottom-right` - 右下角
 * - `top-left` - 左上角
 * - `top-right` - 右上角
 */
export type ImageDecorPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

/**
 * CpImage 组件 Props 定义
 *
 * @description 赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpImage src="/image.jpg" alt="示例图片" />
 *
 * <!-- 懒加载 -->
 * <CpImage src="/image.jpg" lazy />
 *
 * <!-- 带回退图片 -->
 * <CpImage src="/image.jpg" fallback-src="/fallback.jpg" />
 *
 * <!-- 圆形头像 -->
 * <CpImage src="/avatar.jpg" shape="circle" :width="64" :height="64" />
 * ```
 */
export const imageProps = {
    /**
     * 图片源地址
     * @default ''
     */
    src: {
        type: String,
        default: '',
    },
    /**
     * 图片描述/替代文本
     * @default ''
     */
    alt: {
        type: String,
        default: '',
    },
    /**
     * 图片适应模式
     * 设置图片如何适应容器，与 CSS object-fit 一致
     * @default 'cover'
     */
    fit: {
        type: String as PropType<ImageFit>,
        default: 'cover',
    },
    /**
     * 图片形状模式
     * - `clip`: 机甲切角效果（默认）
     * - `no-clip`: 标准直角
     * - `round`: 圆角效果
     * - `circle`: 圆形
     * @default 'clip'
     */
    shape: {
        type: String as PropType<ImageShape>,
        default: 'clip',
    },
    /**
     * 是否懒加载
     * 开启后图片进入可视区域时才加载
     * @default false
     */
    lazy: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否开启点击预览
     * 开启后点击图片会弹出全屏大图预览
     * @default false
     */
    preview: {
        type: Boolean,
        default: false,
    },
    /**
     * 预览大图地址
     * 在预览中使用的高清图片地址，不指定则使用 src
     * @default ''
     */
    previewSrc: {
        type: String,
        default: '',
    },
    /**
     * 多图预览列表
     * 传入后自动启用预览，点击图片可查看整个图片列表
     * @default []
     */
    previewSrcList: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    /**
     * 初始预览索引，在 previewSrcList 模式下有效
     * @default 0
     * @example `<CpImage :preview-src-list="[...]" :initial-index="1" />`
     */
    initialIndex: {
        type: Number,
        default: 0,
    },
    /**
     * 是否允许在预览时下载图片
     * @default false
     */
    download: {
        type: Boolean,
        default: false,
    },
    /**
     * 加载失败时的回退图片地址
     * @default ''
     */
    fallbackSrc: {
        type: String,
        default: '',
    },
    /**
     * 图片宽度
     * 可传入数字（像素）或字符串（CSS 值）
     * @default ''
     */
    width: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    /**
     * 图片高度
     * 可传入数字（像素）或字符串（CSS 值）
     * @default ''
     */
    height: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    /**
     * 颜色类型（影响装饰块颜色）
     * @default 'primary'
     */
    type: {
        type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'>,
        default: 'primary',
    },
    /**
     * 自定义装饰块颜色
     * 传入有效 CSS 颜色值，覆盖 type 的颜色
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 是否显示装饰块（仅 clip 形状生效）
     * @default true
     */
    showDecor: {
        type: Boolean,
        default: true,
    },
    /**
     * 装饰块位置（仅 clip 形状生效）
     * - `bottom-left`: 左下角（默认）
     * - `bottom-right`: 右下角
     * - `top-left`: 左上角
     * - `top-right`: 右上角
     * @default 'bottom-left'
     */
    decorPosition: {
        type: String as PropType<ImageDecorPosition>,
        default: 'bottom-left',
    },
    /**
     * 是否开启 hover 动画效果
     * 开启后鼠标悬停时有缩放和发光效果
     * @default false
     */
    hoverable: {
        type: Boolean,
        default: false,
    },
    /**
     * Hover 动画模式
     * - `scale` - 整体放大（默认）
     * - `zoom` - 容器不变，仅图片放大（溢出裁切）
     * @default 'scale'
     */
    hoverMode: {
        type: String as PropType<'scale' | 'zoom'>,
        default: 'scale',
    },
    /**
     * Hover 动画持续时间
     * 数字默认毫秒 (ms)，字符串可指定单位 (如 '0.3s' 或 '300ms')
     * @default 300
     */
    hoverDuration: {
        type: [Number, String] as PropType<DurationValue>,
        default: 300,
    },
    /**
     * URL 预处理器
     * 可传入预设处理器名称（append/replace/tos）或自定义函数
     * 函数签名: (src: string, params?: T) => string
     * @example
     * ```vue
     * <!-- 使用预设处理器 -->
     * <CpImage src="..." src-processor="append" :processor-params="{ a: 'xxx' }" />
     * 
     * <!-- 使用自定义函数 -->
     * <CpImage src="..." :src-processor="(src) => `${src}?custom`" />
     * ```
     */
    srcProcessor: {
        type: [String, Function] as PropType<string | ((src: string, params?: unknown) => string)>,
        default: undefined,
    },
    /**
     * 处理器参数
     * 传递给 srcProcessor 的参数，类型由处理器决定
     * 若未指定 srcProcessor 但传入了此参数，默认使用 append 处理器
     */
    processorParams: {
        type: [String, Object, Array] as PropType<string | Record<string, unknown> | unknown[]>,
        default: undefined,
    },
    /**
     * 是否允许拖拽图片
     * 默认禁止拖拽，设为 true 开启
     * @default false
     */
    draggable: {
        type: Boolean,
        default: false,
    },
} as const

export type ImageProps = ExtractPropTypes<typeof imageProps>

/**
 * CpImage 组件事件定义
 *
 * @event load - 图片加载成功时触发
 * @event error - 图片加载失败时触发
 */
export const imageEmits = {
    /**
     * 图片加载成功时触发
     * @param event - 原生加载事件
     */
    load: (event: Event) => event instanceof Event,

    /**
     * 图片加载失败时触发
     * @param event - 原生错误事件
     */
    error: (event: Event) => event instanceof Event,
}

export type ImageEmits = typeof imageEmits
