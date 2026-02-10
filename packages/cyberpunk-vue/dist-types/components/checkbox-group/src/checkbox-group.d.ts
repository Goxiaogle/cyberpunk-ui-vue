import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
import type { CheckboxValueType, CheckboxType, CheckboxShape } from '../../checkbox/src/checkbox';
/**
 * CpCheckboxGroup 组件 Props 定义
 *
 * @description 复选框组容器，管理多个 CpCheckbox 的选中状态。
 *
 * @example
 * ```vue
 * <CpCheckboxGroup v-model="selected">
 *   <CpCheckbox label="A">选项 A</CpCheckbox>
 *   <CpCheckbox label="B">选项 B</CpCheckbox>
 *   <CpCheckbox label="C">选项 C</CpCheckbox>
 * </CpCheckboxGroup>
 * ```
 */
export declare const checkboxGroupProps: {
    /**
     * 绑定值数组 (v-model)
     */
    readonly modelValue: {
        readonly type: PropType<CheckboxValueType[]>;
        readonly default: () => never[];
    };
    /**
     * 是否禁用所有子复选框
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 子复选框尺寸
     * @default 'md'
     */
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: "md";
    };
    /**
     * 子复选框类型（颜色预设）
     * @default 'primary'
     */
    readonly type: {
        readonly type: PropType<CheckboxType>;
        readonly default: "primary";
    };
    /**
     * 子复选框形状
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<CheckboxShape>;
        readonly default: "clip";
    };
    /**
     * 最少选中数量
     */
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    /**
     * 最多选中数量
     */
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
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
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
/**
 * CpCheckboxGroup 组件事件定义
 */
export declare const checkboxGroupEmits: {
    /**
     * 值变化时触发 (v-model 绑定)
     */
    'update:modelValue': (value: CheckboxValueType[]) => boolean;
    /**
     * 值变化时触发
     */
    change: (value: CheckboxValueType[]) => boolean;
};
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
