declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    default?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly percentage: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressType>;
        readonly default: "line";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressSize>;
        readonly default: "md";
    };
    readonly status: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressStatus>;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: import("vue").PropType<string | string[] | ((percentage: number) => string)>;
        readonly default: "";
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly textInside: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: import("vue").PropType<(percentage: number) => string>;
        readonly default: undefined;
    };
    readonly strokeLinecap: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressLinecap>;
        readonly default: "round";
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 126;
    };
    readonly striped: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly stripedFlow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly duration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 3000;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressShape>;
        readonly default: "clip";
    };
    readonly steps: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly stepGap: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
    readonly stepColors: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly percentage: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressType>;
        readonly default: "line";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressSize>;
        readonly default: "md";
    };
    readonly status: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressStatus>;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: import("vue").PropType<string | string[] | ((percentage: number) => string)>;
        readonly default: "";
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly textInside: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: import("vue").PropType<(percentage: number) => string>;
        readonly default: undefined;
    };
    readonly strokeLinecap: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressLinecap>;
        readonly default: "round";
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 126;
    };
    readonly striped: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly stripedFlow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly duration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 3000;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ProgressShape>;
        readonly default: "clip";
    };
    readonly steps: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly stepGap: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
    readonly stepColors: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {
    readonly size: import("packages/cyberpunk-vue").ProgressSize;
    readonly width: number;
    readonly format: (percentage: number) => string;
    readonly type: import("packages/cyberpunk-vue").ProgressType;
    readonly loading: boolean;
    readonly color: string | string[] | ((percentage: number) => string);
    readonly shape: import("packages/cyberpunk-vue").ProgressShape;
    readonly textColor: string;
    readonly strokeWidth: number;
    readonly duration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly max: number;
    readonly percentage: number;
    readonly status: import("packages/cyberpunk-vue").ProgressStatus;
    readonly showText: boolean;
    readonly textInside: boolean;
    readonly strokeLinecap: import("packages/cyberpunk-vue").ProgressLinecap;
    readonly striped: boolean;
    readonly stripedFlow: boolean;
    readonly indeterminate: boolean;
    readonly steps: boolean;
    readonly stepGap: number;
    readonly stepColors: string[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
