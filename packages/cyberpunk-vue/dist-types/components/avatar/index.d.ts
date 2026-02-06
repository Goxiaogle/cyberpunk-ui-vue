/**
 * CpAvatar 头像组件
 *
 * @description 赛博朋克风格头像组件，支持多种尺寸和形状。
 *
 * @example
 * ```vue
 * <CpAvatar src="/avatar.jpg" />
 * <CpAvatar src="/avatar.jpg" size="lg" shape="square" />
 * <CpAvatar :size="80">U</CpAvatar>
 * ```
 */
export declare const CpAvatar: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
/**
 * CpAvatarGroup 头像组组件
 *
 * @description 用于展示一组头像，支持堆叠和折叠模式。
 *
 * @example
 * ```vue
 * <CpAvatarGroup collapse-avatars :max="3">
 *   <CpAvatar v-for="i in 5" :src="`/avatar${i}.jpg`" />
 * </CpAvatarGroup>
 * ```
 */
export declare const CpAvatarGroup: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarShape>;
        readonly default: "circle";
    };
    readonly spacing: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: -8;
    };
    readonly collapseAvatars: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapseClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapseStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly default: () => {};
    };
    readonly collapseAvatarsTooltip: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapseShape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarShape>;
        readonly default: undefined;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarSize>;
        readonly default: "md";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarShape>;
        readonly default: "circle";
    };
    readonly spacing: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: -8;
    };
    readonly collapseAvatars: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapseClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapseStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly default: () => {};
    };
    readonly collapseAvatarsTooltip: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapseShape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").AvatarShape>;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {
    readonly size: import("packages/cyberpunk-vue").AvatarSize;
    readonly shape: import("packages/cyberpunk-vue").AvatarShape;
    readonly max: number;
    readonly spacing: string | number;
    readonly collapseAvatars: boolean;
    readonly collapseClass: string;
    readonly collapseStyle: import("vue").CSSProperties;
    readonly collapseAvatarsTooltip: string;
    readonly collapseShape: import("packages/cyberpunk-vue").AvatarShape;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpAvatar;
export * from './src/avatar';
export * from './src/avatar-group';
export type { CpAvatarInstance, CpAvatarGroupInstance } from './src/instance';
