import { type SegmentedOption, type SegmentedValueType } from './segmented';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<SegmentedValueType>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<(string | number | SegmentedOption)[]>;
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
    /** @description 更新滑块位置 */
    updateIndicator: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: SegmentedValueType) => void;
    change: (value: SegmentedValueType) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<SegmentedValueType>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<(string | number | SegmentedOption)[]>;
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
    "onUpdate:modelValue"?: ((value: SegmentedValueType) => any) | undefined;
    onChange?: ((value: SegmentedValueType) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").SegmentedType;
    readonly variant: import("packages/cyberpunk-vue").SegmentedVariant;
    readonly disabled: boolean;
    readonly block: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").SegmentedShape;
    readonly modelValue: SegmentedValueType;
    readonly options: (string | number | SegmentedOption)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
