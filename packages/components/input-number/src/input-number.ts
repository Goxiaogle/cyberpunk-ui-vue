import type { ExtractPropTypes, PropType } from 'vue'

/**
 * InputNumber 尺寸
 */
export type InputNumberSize = 'sm' | 'md' | 'lg'

/**
 * CpInputNumber 组件 Props 定义
 */
export const inputNumberProps = {
    /** 绑定值 (v-model) */
    modelValue: {
        type: Number,
        default: 0,
    },
    /** 最小值 */
    min: {
        type: Number,
        default: -Infinity,
    },
    /** 最大值 */
    max: {
        type: Number,
        default: Infinity,
    },
    /** 步长 */
    step: {
        type: Number,
        default: 1,
    },
    /** 精度 (小数位数) */
    precision: {
        type: Number,
        default: undefined,
    },
    /** 尺寸 */
    size: {
        type: String as PropType<InputNumberSize>,
        default: 'md',
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
    /** 占位文本 */
    placeholder: {
        type: String,
        default: '',
    },
    /** 自定义颜色 */
    color: {
        type: String,
        default: '',
    },
    /** 是否使用控制按钮 */
    controls: {
        type: Boolean,
        default: true,
    },
    /** 控制按钮位置 */
    controlsPosition: {
        type: String as PropType<'right' | 'both'>,
        default: 'both',
    },
} as const

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>

export const inputNumberEmits = {
    'update:modelValue': (value: number) => typeof value === 'number',
    change: (value: number, oldValue: number) => typeof value === 'number' && typeof oldValue === 'number',
    focus: (event: FocusEvent) => event instanceof FocusEvent,
    blur: (event: FocusEvent) => event instanceof FocusEvent,
}

export type InputNumberEmits = typeof inputNumberEmits
