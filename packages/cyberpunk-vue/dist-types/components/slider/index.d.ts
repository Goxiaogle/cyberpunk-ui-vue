/**
 * CpSlider 赛博朋克风格滑块
 *
 * 用于在给定的数值范围内进行选择，支持单值和范围模式。
 *
 * @example
 * ```vue
 * <CpSlider v-model="value" />
 * <CpSlider v-model="range" range :min="0" :max="100" />
 * <CpSlider v-model="value" :marks="{ 0: '低', 50: '中', 100: '高' }" />
 * ```
 *
 * @see {@link SliderProps} 查看所有可用属性
 */
export declare const CpSlider: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<number | [number, number]>;
        readonly default: 0;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SliderSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SliderShape>;
        readonly default: "clip";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly range: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showStops: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly marks: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SliderMarks>;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly height: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly formatTooltip: {
        readonly type: import("vue").PropType<(value: number) => string>;
        readonly default: undefined;
    };
}>, {
    sliderRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: number | [number, number]) => void;
    "update:modelValue": (value: number | [number, number]) => void;
    change: (value: number | [number, number]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<number | [number, number]>;
        readonly default: 0;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SliderSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SliderShape>;
        readonly default: "clip";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly range: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showStops: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly marks: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").SliderMarks>;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly height: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly formatTooltip: {
        readonly type: import("vue").PropType<(value: number) => string>;
        readonly default: undefined;
    };
}>> & Readonly<{
    onInput?: ((value: number | [number, number]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
    onChange?: ((value: number | [number, number]) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly height: string;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").SliderShape;
    readonly modelValue: number | [number, number];
    readonly range: boolean;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly showTooltip: boolean;
    readonly showStops: boolean;
    readonly marks: import("packages/cyberpunk-vue").SliderMarks;
    readonly vertical: boolean;
    readonly formatTooltip: (value: number) => string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpSlider;
export * from './src/slider';
export type { SliderInstance } from './src/instance';
