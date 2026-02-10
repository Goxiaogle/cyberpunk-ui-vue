declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {}, __VLS_9: {}, __VLS_11: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    cover?: (props: typeof __VLS_1) => any;
} & {
    header?: (props: typeof __VLS_3) => any;
} & {
    title?: (props: typeof __VLS_5) => any;
} & {
    extra?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
} & {
    footer?: (props: typeof __VLS_11) => any;
} & {
    overlay?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadow: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShadow>;
        readonly default: "hover";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShape>;
        readonly default: "clip";
    };
    readonly bodyPadding: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly headerBorder: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly footerBorder: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly overlayAnimation: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayAnimation>;
        readonly default: "slide-up";
    };
    readonly overlayPosition: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayPosition>;
        readonly default: "bottom";
    };
    readonly overlayDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly overlayEffect: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
        readonly default: "blur-color";
    };
    readonly overlayColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(26, 26, 36, 0.8)";
    };
    readonly overlayBlur: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 10;
    };
    readonly actionEffect: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
        readonly default: undefined;
    };
    readonly actionColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly actionBlur: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: undefined;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bgColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadowColor: StringConstructor;
    readonly dimmed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dimmedDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly triggerImageHover: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hoverScale: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly borderColor: StringConstructor;
    readonly dividerColor: StringConstructor;
    readonly headerDividerColor: StringConstructor;
    readonly footerDividerColor: StringConstructor;
    readonly backgroundClass: import("vue").PropType<import("packages/cyberpunk-vue").CardCustomClass>;
    readonly backgroundStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    readonly headerClass: import("vue").PropType<import("packages/cyberpunk-vue").CardCustomClass>;
    readonly headerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    readonly bodyClass: import("vue").PropType<import("packages/cyberpunk-vue").CardCustomClass>;
    readonly bodyStyle: import("vue").PropType<string | import("vue").CSSProperties>;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadow: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShadow>;
        readonly default: "hover";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardVariant>;
        readonly default: "solid";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardShape>;
        readonly default: "clip";
    };
    readonly bodyPadding: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly headerBorder: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly footerBorder: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly overlayAnimation: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayAnimation>;
        readonly default: "slide-up";
    };
    readonly overlayPosition: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayPosition>;
        readonly default: "bottom";
    };
    readonly overlayDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly overlayEffect: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
        readonly default: "blur-color";
    };
    readonly overlayColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(26, 26, 36, 0.8)";
    };
    readonly overlayBlur: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 10;
    };
    readonly actionEffect: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardOverlayEffect>;
        readonly default: undefined;
    };
    readonly actionColor: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly actionBlur: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: undefined;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").CardType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bgColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadowColor: StringConstructor;
    readonly dimmed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dimmedDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly triggerImageHover: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hoverScale: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly borderColor: StringConstructor;
    readonly dividerColor: StringConstructor;
    readonly headerDividerColor: StringConstructor;
    readonly footerDividerColor: StringConstructor;
    readonly backgroundClass: import("vue").PropType<import("packages/cyberpunk-vue").CardCustomClass>;
    readonly backgroundStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    readonly headerClass: import("vue").PropType<import("packages/cyberpunk-vue").CardCustomClass>;
    readonly headerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    readonly bodyClass: import("vue").PropType<import("packages/cyberpunk-vue").CardCustomClass>;
    readonly bodyStyle: import("vue").PropType<string | import("vue").CSSProperties>;
}>> & Readonly<{}>, {
    readonly type: import("packages/cyberpunk-vue").CardType;
    readonly variant: import("packages/cyberpunk-vue").CardVariant;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").CardShape;
    readonly title: string;
    readonly shadow: import("packages/cyberpunk-vue").CardShadow;
    readonly bodyPadding: string;
    readonly headerBorder: boolean;
    readonly footerBorder: boolean;
    readonly overlayAnimation: import("packages/cyberpunk-vue").CardOverlayAnimation;
    readonly overlayPosition: import("packages/cyberpunk-vue").CardOverlayPosition;
    readonly overlayDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly overlayEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
    readonly overlayColor: string;
    readonly overlayBlur: string | number;
    readonly actionEffect: import("packages/cyberpunk-vue").CardOverlayEffect;
    readonly actionColor: string;
    readonly actionBlur: string | number;
    readonly bgColor: string;
    readonly dimmed: boolean;
    readonly dimmedDuration: import("@cyberpunk-vue/hooks").DurationValue;
    readonly triggerImageHover: boolean;
    readonly hoverScale: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
