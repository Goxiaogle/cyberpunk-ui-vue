import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * Textarea 尺寸
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type TextareaSize = Size;
/**
 * Textarea 变体
 */
export type TextareaVariant = 'outline' | 'filled';
/**
 * CpTextarea 组件 Props 定义
 */
export declare const textareaProps: {
    /** 绑定值 (v-model) */
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /** 占位文本 */
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /** 尺寸 */
    readonly size: {
        readonly type: PropType<TextareaSize>;
        readonly default: "md";
    };
    /** 形态变体 */
    readonly variant: {
        readonly type: PropType<TextareaVariant>;
        readonly default: "outline";
    };
    /** 是否禁用 */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /** 是否只读 */
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /** 最大输入长度 */
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    /** 显示字数统计 */
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /** 行数 */
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    /** 自适应高度 */
    readonly autosize: {
        readonly type: PropType<boolean | {
            minRows?: number;
            maxRows?: number;
        }>;
        readonly default: false;
    };
    /** 自定义颜色 */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /** 文字颜色 */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
export declare const textareaEmits: {
    'update:modelValue': (value: string) => boolean;
    input: (value: string, event: Event) => boolean;
    change: (value: string) => boolean;
    focus: (event: FocusEvent) => boolean;
    blur: (event: FocusEvent) => boolean;
};
export type TextareaEmits = typeof textareaEmits;
