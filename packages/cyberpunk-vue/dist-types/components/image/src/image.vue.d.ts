declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    placeholder?: (props: typeof __VLS_1) => any;
} & {
    error?: (props: typeof __VLS_3) => any;
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
    readonly fit: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ImageFit>;
        readonly default: "cover";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ImageShape>;
        readonly default: "clip";
    };
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly previewSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fallbackSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly height: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import("vue").PropType<"default" | "primary" | "success" | "warning" | "error" | "info">;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showDecor: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly hoverable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hoverMode: {
        readonly type: import("vue").PropType<"scale" | "zoom">;
        readonly default: "scale";
    };
    readonly hoverDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly srcProcessor: {
        readonly type: import("vue").PropType<string | ((src: string, params
        /**
         * CpImage - 赛博朋克风格图片组件
         * 支持懒加载、加载占位、错误处理等功能
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
    readonly fit: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ImageFit>;
        readonly default: "cover";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ImageShape>;
        readonly default: "clip";
    };
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly previewSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fallbackSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly width: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly height: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import("vue").PropType<"default" | "primary" | "success" | "warning" | "error" | "info">;
        readonly default: "primary";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showDecor: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly hoverable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hoverMode: {
        readonly type: import("vue").PropType<"scale" | "zoom">;
        readonly default: "scale";
    };
    readonly hoverDuration: {
        readonly type: import("vue").PropType<import("@cyberpunk-vue/hooks").DurationValue>;
        readonly default: 300;
    };
    readonly srcProcessor: {
        readonly type: import("vue").PropType<string | ((src: string, params
        /**
         * CpImage - 赛博朋克风格图片组件
         * 支持懒加载、加载占位、错误处理等功能
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
    readonly fit: import("packages/cyberpunk-vue").ImageFit;
    readonly width: string | number;
    readonly height: string | number;
    readonly type: "primary" | "success" | "warning" | "error" | "info" | "default";
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").ImageShape;
    readonly src: string;
    readonly alt: string;
    readonly lazy: boolean;
    readonly previewSrc: string;
    readonly fallbackSrc: string;
    readonly showDecor: boolean;
    readonly hoverable: boolean;
    readonly hoverMode: "zoom" | "scale";
    readonly hoverDuration: import("@cyberpunk-vue/hooks").DurationValue;
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
