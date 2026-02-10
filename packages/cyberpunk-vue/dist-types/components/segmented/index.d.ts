/**
 * CpSegmented 分段选择器
 *
 * 一组按钮式互斥选项，选中项带滑块高亮效果。
 *
 * @example
 * ```vue
 * <CpSegmented v-model="active" :options="['日', '周', '月']" />
 * ```
 *
 * @see {@link SegmentedProps} 查看所有可用属性
 */
export declare const CpSegmented: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedValueType>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<(string | number | import("packages/cyberpunk-vue").SegmentedOption)[]>;
        readonly default: () => never[];
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedType>;
        readonly default: "default";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedVariant>;
        readonly default: "solid";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedShape>;
        readonly default: "clip";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {
    updateIndicator: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("packages/cyberpunk-vue").SegmentedValueType) => void;
    change: (value: import("packages/cyberpunk-vue").SegmentedValueType) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedValueType>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<(string | number | import("packages/cyberpunk-vue").SegmentedOption)[]>;
        readonly default: () => never[];
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedType>;
        readonly default: "default";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedVariant>;
        readonly default: "solid";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SegmentedShape>;
        readonly default: "clip";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("packages/cyberpunk-vue").SegmentedValueType) => any) | undefined;
    onChange?: ((value: import("packages/cyberpunk-vue").SegmentedValueType) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").SegmentedType;
    readonly variant: import("packages/cyberpunk-vue").SegmentedVariant;
    readonly disabled: boolean;
    readonly block: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").SegmentedShape;
    readonly modelValue: import("packages/cyberpunk-vue").SegmentedValueType;
    readonly options: (string | number | import("packages/cyberpunk-vue").SegmentedOption)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpSegmented;
export * from './src/segmented';
export type { SegmentedInstance } from './src/instance';
