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
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagShape>;
        readonly default: "clip";
    };
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
    close: (event: MouseEvent) => void;
    "update:selected": (selected: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").TagShape>;
        readonly default: "clip";
    };
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onClose?: ((event: MouseEvent) => any) | undefined;
    "onUpdate:selected"?: ((selected: boolean) => any) | undefined;
}>, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").TagType;
    readonly variant: import("packages/cyberpunk-vue").TagVariant;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").TagShape;
    readonly dashed: boolean;
    readonly closable: boolean;
    readonly selectable: boolean;
    readonly selected: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
