/**
 * CpImage 图片组件
 *
 * @description 赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。
 *
 * @example
 * ```vue
 * <CpImage src="/image.jpg" alt="示例图片" />
 * <CpImage src="/image.jpg" lazy shape="circle" />
 * <CpImage src="/image.jpg" fallback-src="/fallback.jpg" />
 * ```
 */
export declare const CpImage: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
            readonly type: import("vue").PropType<string | ((src: string, params?: unknown) => string)>;
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        error: (event: Event) => void;
        load: (event: Event) => void;
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
            readonly type: import("vue").PropType<string | ((src: string, params?: unknown) => string)>;
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
    }>, {}, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        readonly type: import("vue").PropType<string | ((src: string, params?: unknown) => string)>;
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (event: Event) => void;
    load: (event: Event) => void;
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        placeholder?: (props: {}) => any;
    } & {
        error?: (props: {}) => any;
    };
})>;
export default CpImage;
export * from './src/image';
export type { CpImageInstance } from './src/instance';
