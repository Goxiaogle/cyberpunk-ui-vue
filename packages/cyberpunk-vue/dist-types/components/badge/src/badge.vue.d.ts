declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly dot: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hidden: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showZero: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeType>;
        readonly default: "error";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeVariant>;
        readonly default: "solid";
    };
    readonly offset: {
        readonly type: import("vue").PropType<[number, number]>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeSize>;
        readonly default: "default";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly dot: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hidden: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showZero: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeType>;
        readonly default: "error";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeVariant>;
        readonly default: "solid";
    };
    readonly offset: {
        readonly type: import("vue").PropType<[number, number]>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").BadgeSize>;
        readonly default: "default";
    };
}>> & Readonly<{}>, {
    readonly size: import("packages/cyberpunk-vue").BadgeSize;
    readonly value: string | number;
    readonly type: import("packages/cyberpunk-vue").BadgeType;
    readonly variant: import("packages/cyberpunk-vue").BadgeVariant;
    readonly color: string;
    readonly textColor: string;
    readonly hidden: boolean;
    readonly min: number;
    readonly max: number;
    readonly dot: boolean;
    readonly offset: [number, number];
    readonly showZero: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
