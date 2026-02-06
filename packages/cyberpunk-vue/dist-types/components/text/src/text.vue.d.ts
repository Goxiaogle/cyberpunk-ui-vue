declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    suffix?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextSize>;
        readonly default: "md";
    };
    readonly align: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextAlign>;
        readonly default: "middle";
    };
    readonly underline: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly boxed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly italic: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly strikethrough: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly glowIntensity: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly glowPulse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lightWave: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lightWaveDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 2000;
    };
    readonly marker: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly markerColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly glowPulseDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 1500;
    };
    readonly unselectable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextSize>;
        readonly default: "md";
    };
    readonly align: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TextAlign>;
        readonly default: "middle";
    };
    readonly underline: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly boxed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly italic: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly strikethrough: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly glowIntensity: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly glowPulse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lightWave: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lightWaveDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 2000;
    };
    readonly marker: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly markerColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly glowPulseDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 1500;
    };
    readonly unselectable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{}>, {
    readonly size: import("packages/cyberpunk-vue").TextSize;
    readonly bold: boolean;
    readonly type: import("packages/cyberpunk-vue").TextType;
    readonly color: string;
    readonly dashed: boolean;
    readonly marker: boolean;
    readonly italic: boolean;
    readonly underline: boolean;
    readonly align: import("packages/cyberpunk-vue").TextAlign;
    readonly boxed: boolean;
    readonly strikethrough: boolean;
    readonly glow: boolean;
    readonly glowIntensity: number;
    readonly glowPulse: boolean;
    readonly lightWave: boolean;
    readonly lightWaveDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly markerColor: string;
    readonly glowPulseDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly unselectable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
