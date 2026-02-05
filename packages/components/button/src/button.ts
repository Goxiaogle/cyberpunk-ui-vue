import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 按钮颜色类型
 * - `primary` - 主要操作，强调色（赛博蓝）
 * - `success` - 成功/确认操作（霓虹绿）
 * - `warning` - 警告/需注意的操作（赛博黄）
 * - `error` - 危险/删除操作（霓虹红）
 * - `info` - 信息性操作（中性蓝）
 * - `default` - 默认样式，中性色
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'

/**
 * 按钮尺寸
 * - `sm` - 小尺寸 (24px 高)
 * - `md` - 中等尺寸 (32px 高)，默认
 * - `lg` - 大尺寸 (40px 高)
 */
export type ButtonSize = 'sm' | 'md' | 'lg'

/**
 * 按钮变体/形态
 * - `solid` - 实心填充，最强视觉权重
 * - `outline` - 边框样式，次级操作
 * - `ghost` - 透明背景，悬停显示
 * - `neon` - 霓虹发光效果，高亮操作
 * - `semi` - 半透明背景，柔和风格
 */
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'neon' | 'semi'

/**
 * CpButton 组件 Props 定义
 *
 * @description 赛博朋克风格按钮组件，支持多种颜色、尺寸、形态变体。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpButton type="primary">确认</CpButton>
 *
 * <!-- 带图标 -->
 * <CpButton type="success">
 *   <template #prefix><CpIcon icon="mdi:check" /></template>
 *   保存
 * </CpButton>
 *
 * <!-- 加载状态 -->
 * <CpButton :loading="isLoading" loading-placeholder>提交</CpButton>
 *
 * <!-- 自定义颜色 -->
 * <CpButton color="#ff00ff">自定义</CpButton>
 * ```
 *
 * @slots
 * - `default` - 按钮文本内容
 * - `prefix` - 前缀图标插槽，加载时自动隐藏
 * - `suffix` - 后缀图标插槽
 */
export const buttonProps = {
    /**
     * 按钮颜色类型
     * @default 'default'
     * @example `<CpButton type="primary">主要按钮</CpButton>`
     */
    type: {
        type: String as PropType<ButtonType>,
        default: 'default',
    },
    /**
     * 按钮尺寸
     * @default 'md'
     * @example `<CpButton size="lg">大按钮</CpButton>`
     */
    size: {
        type: String as PropType<ButtonSize>,
        default: 'md',
    },
    /**
     * 按钮变体/形态
     * @default 'solid'
     * @example `<CpButton variant="neon">霓虹按钮</CpButton>`
     */
    variant: {
        type: String as PropType<ButtonVariant>,
        default: 'solid',
    },
    /**
     * 是否禁用按钮
     * 禁用后按钮不可点击，样式变为灰色
     * @default false
     */
    disabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否显示加载状态
     * 加载时会显示 Loading 动画，按钮不可点击
     * @default false
     */
    loading: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否为块级按钮
     * 块级按钮会占满父容器宽度
     * @default false
     */
    block: {
        type: Boolean,
        default: false,
    },
    /**
     * 原生 button type 属性
     * - `button` - 普通按钮（默认）
     * - `submit` - 表单提交按钮
     * - `reset` - 表单重置按钮
     * @default 'button'
     */
    nativeType: {
        type: String as PropType<'button' | 'submit' | 'reset'>,
        default: 'button',
    },
    /**
     * 自定义按钮颜色
     * 传入有效 CSS 颜色值会覆盖 `type` 的预设颜色
     * @default ''
     * @example `<CpButton color="#ff00ff">紫色按钮</CpButton>`
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 按钮形状
     * - `clip` - 切角样式（默认，赛博朋克特色）
     * - `no-clip` - 直角矩形
     * - `round` - 圆角矩形
     * - `circle` - 胶囊形状（完全圆角）
     * @default 'clip'
     */
    shape: {
        type: String as PropType<'clip' | 'no-clip' | 'round' | 'circle'>,
        default: 'clip',
    },
    /**
     * 是否使用虚线边框
     * 仅在 `variant="outline"` 时生效
     * @default false
     */
    dashed: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否为 Loading 预留空间
     * 开启后按钮宽度固定，Loading 出现/消失时不会导致布局抖动
     * @default false
     * @example `<CpButton :loading="loading" loading-placeholder>提交</CpButton>`
     */
    loadingPlaceholder: {
        type: Boolean,
        default: false,
    },
    /**
     * 加载时是否同时禁用按钮
     * 设为 true 后，loading 状态下按钮会显示禁用样式
     * @default false
     */
    loadingDisabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义文字颜色
     * 传入有效 CSS 颜色值会覆盖默认的文字颜色
     * @default ''
     * @example `<CpButton type="success" text-color="#000">黑色文字</CpButton>`
     */
    textColor: {
        type: String,
        default: '',
    },
} as const


export type ButtonProps = ExtractPropTypes<typeof buttonProps>

/**
 * CpButton 组件事件定义
 *
 * @event click - 点击按钮时触发（disabled 或 loading 状态下不触发）
 */
export const buttonEmits = {
    /**
     * 点击按钮时触发
     * @param evt - 原生 MouseEvent 对象
     * @example `<CpButton @click="handleClick">点击</CpButton>`
     */
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonEmits = typeof buttonEmits
