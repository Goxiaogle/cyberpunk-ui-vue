import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
import type { RadioValueType, RadioType } from '../../radio/src/radio';
/**
 * CpRadioGroup 组件 Props 定义
 *
 * @description 单选框组容器，管理多个 CpRadio 的选中状态。
 *
 * @example
 * ```vue
 * <CpRadioGroup v-model="picked">
 *   <CpRadio value="A">选项 A</CpRadio>
 *   <CpRadio value="B">选项 B</CpRadio>
 *   <CpRadio value="C">选项 C</CpRadio>
 * </CpRadioGroup>
 * ```
 */
export declare const radioGroupProps: {
    /**
     * 绑定值 (v-model)
     */
    readonly modelValue: {
        readonly type: PropType<RadioValueType>;
        readonly default: undefined;
    };
    /**
     * 是否禁用所有子单选框
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 子单选框尺寸
     * @default 'md'
     */
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: "md";
    };
    /**
     * 子单选框类型（颜色预设）
     * @default 'primary'
     */
    readonly type: {
        readonly type: PropType<RadioType>;
        readonly default: "primary";
    };
    /**
     * 布局方向
     * @default 'horizontal'
     */
    readonly direction: {
        readonly type: PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
};
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
/**
 * CpRadioGroup 组件事件定义
 */
export declare const radioGroupEmits: {
    /**
     * 值变化时触发 (v-model 绑定)
     */
    'update:modelValue': (value: RadioValueType) => value is string | number | boolean;
    /**
     * 值变化时触发
     */
    change: (value: RadioValueType) => value is string | number | boolean;
};
export type RadioGroupEmits = typeof radioGroupEmits;
