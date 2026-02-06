import type { CheckboxValueType } from '../../checkbox/src/checkbox';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<CheckboxValueType[]>;
        readonly default: () => never[];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").Size>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
        readonly default: "primary";
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
}>, {
    /** @description 当前选中的值 */
    modelValue: import("vue").Ref<CheckboxValueType[], CheckboxValueType[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: CheckboxValueType[]) => void;
    change: (value: CheckboxValueType[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<CheckboxValueType[]>;
        readonly default: () => never[];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").Size>;
        readonly default: "md";
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CheckboxType>;
        readonly default: "primary";
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: CheckboxValueType[]) => any) | undefined;
    onChange?: ((value: CheckboxValueType[]) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").CheckboxType;
    readonly disabled: boolean;
    readonly modelValue: CheckboxValueType[];
    readonly min: number;
    readonly max: number;
    readonly direction: "vertical" | "horizontal";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
