declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly alt: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarShape>;
        readonly default: "circle";
    };
    readonly icon: {
        readonly type: import("vue").PropType<import("vue").Component>;
        readonly default: undefined;
    };
    readonly fallbackSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fit: {
        readonly type: import("vue").PropType<"cover" | "contain" | "fill">;
        readonly default: "cover";
    };
    readonly srcProcessor: {
        readonly type: import("vue").PropType<string | ((src: string, params
        /**
         * CpAvatar - 赛博朋克风格头像组件
         * 支持多种尺寸、形状，可显示图片、图标或文字
         */
        ?: unknown) => string)>;
        readonly default: undefined;
    };
    readonly processorParams: {
        readonly type: import("vue").PropType<string | Record<string, unknown> | unknown[]>;
        readonly default: undefined;
    };
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (event: Event) => void;
    load: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly alt: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarShape>;
        readonly default: "circle";
    };
    readonly icon: {
        readonly type: import("vue").PropType<import("vue").Component>;
        readonly default: undefined;
    };
    readonly fallbackSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fit: {
        readonly type: import("vue").PropType<"cover" | "contain" | "fill">;
        readonly default: "cover";
    };
    readonly srcProcessor: {
        readonly type: import("vue").PropType<string | ((src: string, params
        /**
         * CpAvatar - 赛博朋克风格头像组件
         * 支持多种尺寸、形状，可显示图片、图标或文字
         */
        ?: unknown) => string)>;
        readonly default: undefined;
    };
    readonly processorParams: {
        readonly type: import("vue").PropType<string | Record<string, unknown> | unknown[]>;
        readonly default: undefined;
    };
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{
    onError?: ((event: Event) => any) | undefined;
    onLoad?: ((event: Event) => any) | undefined;
}>, {
    readonly size: import("packages/cyberpunk-vue").AvatarSize;
    readonly fit: "fill" | "contain" | "cover";
    readonly shape: import("packages/cyberpunk-vue").AvatarShape;
    readonly icon: import("vue").Component;
    readonly src: string;
    readonly alt: string;
    readonly fallbackSrc: string;
    readonly srcProcessor: string | ((src: string, params?: unknown) => string);
    readonly processorParams: string | unknown[] | Record<string, unknown>;
    readonly draggable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
