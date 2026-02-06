import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * Textarea 尺寸
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type TextareaSize = Size

/**
 * Textarea 变体
 */
export type TextareaVariant = 'outline' | 'filled'

/**
 * CpTextarea 组件 Props 定义
 */
export const textareaProps = {
    /** 绑定值 (v-model) */
    modelValue: {
        type: String,
        default: '',
    },
    /** 占位文本 */
    placeholder: {
        type: String,
        default: '',
    },
    /** 尺寸 */
    size: {
        type: String as PropType<TextareaSize>,
        default: 'md',
    },
    /** 形态变体 */
    variant: {
        type: String as PropType<TextareaVariant>,
        default: 'outline',
    },
    /** 是否禁用 */
    disabled: {
        type: Boolean,
        default: false,
    },
    /** 是否只读 */
    readonly: {
        type: Boolean,
        default: false,
    },
    /** 最大输入长度 */
    maxlength: {
        type: Number,
        default: undefined,
    },
    /** 显示字数统计 */
    showWordLimit: {
        type: Boolean,
        default: false,
    },
    /** 行数 */
    rows: {
        type: Number,
        default: 3,
    },
    /** 自适应高度 */
    autosize: {
        type: [Boolean, Object] as PropType<boolean | { minRows?: number; maxRows?: number }>,
        default: false,
    },
    /** 自定义颜色 */
    color: {
        type: String,
        default: '',
    },
    /** 文字颜色 */
    textColor: {
        type: String,
        default: '',
    },
} as const

export type TextareaProps = ExtractPropTypes<typeof textareaProps>

export const textareaEmits = {
    'update:modelValue': (value: string) => typeof value === 'string',
    input: (value: string, event: Event) => typeof value === 'string' && event instanceof Event,
    change: (value: string) => typeof value === 'string',
    focus: (event: FocusEvent) => event instanceof FocusEvent,
    blur: (event: FocusEvent) => event instanceof FocusEvent,
}

export type TextareaEmits = typeof textareaEmits
