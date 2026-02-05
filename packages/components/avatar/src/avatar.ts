import type { ExtractPropTypes, PropType, Component } from 'vue'

/**
 * 头像预设尺寸
 * - `xs` - 24px
 * - `sm` - 32px
 * - `md` - 40px（默认）
 * - `lg` - 48px
 * - `xl` - 64px
 * 也可传入数字，直接作为像素值
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number

/**
 * 头像形状模式
 * - `circle` - 圆形（默认）
 * - `square` - 圆角方形
 * - `clip` - 机甲切角
 */
export type AvatarShape = 'circle' | 'square' | 'clip'

/**
 * CpAvatar 组件 Props 定义
 *
 * @description 赛博朋克风格头像组件，支持多种尺寸和形状。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpAvatar src="/avatar.jpg" />
 *
 * <!-- 预设尺寸 -->
 * <CpAvatar src="/avatar.jpg" size="lg" />
 *
 * <!-- 自定义尺寸 -->
 * <CpAvatar src="/avatar.jpg" :size="80" />
 *
 * <!-- 形状 -->
 * <CpAvatar src="/avatar.jpg" shape="square" />
 * ```
 */
export const avatarProps = {
    /**
     * 头像图片地址
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
     * 头像尺寸
     * 可传入预设值 'xs' | 'sm' | 'md' | 'lg' | 'xl'
     * 或数字（像素）
     * @default 'md'
     */
    size: {
        type: [String, Number] as PropType<AvatarSize>,
        default: 'md',
    },
    /**
     * 头像形状
     * - `circle`: 圆形（默认）
     * - `square`: 圆角方形
     * - `clip`: 机甲切角
     * @default 'circle'
     */
    shape: {
        type: String as PropType<AvatarShape>,
        default: 'circle',
    },
    /**
     * 默认图标（无图片时显示）
     * 传入图标组件
     */
    icon: {
        type: Object as PropType<Component>,
        default: undefined,
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
     * 图片适应模式
     * @default 'cover'
     */
    fit: {
        type: String as PropType<'cover' | 'contain' | 'fill'>,
        default: 'cover',
    },
    /**
     * URL 预处理器
     * 可传入预设处理器名称（append/replace/tos）或自定义函数
     * 函数签名: (src: string, params?: T) => string
     * @example
     * ```vue
     * <!-- 使用预设处理器 -->
     * <CpAvatar src="..." src-processor="append" :processor-params="{ a: 'xxx' }" />
     *
     * <!-- 使用自定义函数 -->
     * <CpAvatar src="..." :src-processor="(src) => `${src}?custom`" />
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

export type AvatarProps = ExtractPropTypes<typeof avatarProps>

/**
 * CpAvatar 组件事件定义
 */
export const avatarEmits = {
    /**
     * 图片加载成功时触发
     */
    load: (event: Event) => event instanceof Event,

    /**
     * 图片加载失败时触发
     */
    error: (event: Event) => event instanceof Event,
}

export type AvatarEmits = typeof avatarEmits

/**
 * 尺寸预设映射（px）
 */
export const avatarSizeMap: Record<string, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
}
