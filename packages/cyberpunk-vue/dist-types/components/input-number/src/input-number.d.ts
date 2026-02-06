import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * InputNumber 尺寸
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type InputNumberSize = Size;
/**
 * CpInputNumber 组件 Props 定义
 */
export declare const inputNumberProps: {
    /** 绑定值 (v-model) */
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /** 最小值 */
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    /** 最大值 */
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    /** 步长 */
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    /** 精度 (小数位数) */
    readonly precision: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    /** 尺寸 */
    readonly size: {
        readonly type: PropType<InputNumberSize>;
        readonly default: "md";
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
    /** 占位文本 */
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /** 自定义颜色 */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /** 是否使用控制按钮 */
    readonly controls: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /** 控制按钮位置 */
    readonly controlsPosition: {
        readonly type: PropType<"right" | "both">;
        readonly default: "both";
    };
};
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;
export declare const inputNumberEmits: {
    'update:modelValue': (value: number) => boolean;
    change: (value: number, oldValue: number) => boolean;
    focus: (event: FocusEvent) => boolean;
    blur: (event: FocusEvent) => boolean;
};
export type InputNumberEmits = typeof inputNumberEmits;
