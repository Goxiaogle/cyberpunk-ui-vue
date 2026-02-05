import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 标签尺寸
 * - `sm` - 小尺寸
 * - `md` - 中等尺寸，默认
 * - `lg` - 大尺寸
 */
export type TagSize = 'sm' | 'md' | 'lg'

/**
 * 标签类型（颜色预设）
 * - `default` - 默认 (继承父级颜色)
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 标签变体
 * - `solid` - 实心填充
 * - `outline` - 边框描边
 * - `semi` - 半透明填充
 * - `note` - 便利贴风格（左边框 + 半透明背景 + 前后缀布局）
 */
export type TagVariant = 'solid' | 'outline' | 'semi' | 'note'

/**
 * 标签形状模式
 * - `clip` - 机甲切角（默认）
 * - `no-clip` - 标准直角
 * - `round` - 圆角
 */
export type TagShape = 'clip' | 'no-clip' | 'round'

/**
 * CpTag 组件 Props 定义
 *
 * @description 赛博朋克风格标签组件，用于展示标签、分类或状态。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpTag>默认标签</CpTag>
 *
 * <!-- 颜色类型 -->
 * <CpTag type="primary">主要</CpTag>
 * <CpTag type="success">成功</CpTag>
 *
 * <!-- 可关闭 -->
 * <CpTag closable @close="handleClose">可关闭</CpTag>
 *
 * <!-- 自定义颜色 -->
 * <CpTag color="#ff00ff">自定义颜色</CpTag>
 * ```
 */
export const tagProps = {
    /**
     * 标签类型（颜色预设）
     * @default 'default'
     * @example `<CpTag type="success" />`
     */
    type: {
        type: String as PropType<TagType>,
        default: 'default',
    },
    /**
     * 标签尺寸
     * @default 'md'
     * @example `<CpTag size="lg" />`
     */
    size: {
        type: String as PropType<TagSize>,
        default: 'md',
    },
    /**
     * 标签变体样式
     * @default 'solid'
     * @example `<CpTag variant="outline" />`
     */
    variant: {
        type: String as PropType<TagVariant>,
        default: 'solid',
    },
    /**
     * 标签形状模式
     * - `clip`: 机甲切角效果（默认）
     * - `no-clip`: 标准直角
     * - `round`: 圆角效果
     * @default 'clip'
     */
    shape: {
        type: String as PropType<TagShape>,
        default: 'clip',
    },
    /**
     * 是否可关闭
     * 开启后显示关闭按钮，点击触发 close 事件
     * @default false
     */
    closable: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义主题色
     * 传入有效 CSS 颜色值，覆盖 type 的颜色
     * @default ''
     * @example `<CpTag color="#ff00ff" />`
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 虚线边框
     * 仅在 variant="outline" 时生效
     * @default false
     */
    dashed: {
        type: Boolean,
        default: false,
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
     * 是否可选中
     * 开启后点击标签可切换选中状态
     * @default false
     */
    selectable: {
        type: Boolean,
        default: false,
    },
    /**
     * 选中状态 (v-model:selected)
     * 仅在 selectable 为 true 时有效
     * @default false
     */
    selected: {
        type: Boolean,
        default: false,
    },
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>

/**
 * CpTag 组件事件定义
 *
 * @event close - 关闭按钮点击时触发
 * @event click - 标签点击时触发
 * @event update:selected - 选中状态变化时触发
 */
export const tagEmits = {
    /**
     * 关闭按钮点击时触发
     * @param event - 原生鼠标事件
     */
    close: (event: MouseEvent) => event instanceof MouseEvent,

    /**
     * 标签点击时触发
     * @param event - 原生鼠标事件
     */
    click: (event: MouseEvent) => event instanceof MouseEvent,

    /**
     * 选中状态变化时触发
     * @param selected - 新的选中状态
     */
    'update:selected': (selected: boolean) => typeof selected === 'boolean',
}

export type TagEmits = typeof tagEmits
