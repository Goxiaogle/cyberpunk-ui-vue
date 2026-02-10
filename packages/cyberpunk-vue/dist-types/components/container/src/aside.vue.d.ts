declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "300px";
    };
    readonly position: {
        readonly type: import("vue").PropType<"left" | "right">;
        readonly default: "left";
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "300px";
    };
    readonly position: {
        readonly type: import("vue").PropType<"left" | "right">;
        readonly default: "left";
    };
}>> & Readonly<{}>, {
    readonly width: string;
    readonly position: "right" | "left";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
