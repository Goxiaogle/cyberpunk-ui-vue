/**
 * CpButton 赛博朋克风格按钮
 *
 * 支持多种颜色类型、尺寸、形态变体。具有特色的切角造型和霓虹发光效果。
 *
 * @example
 * ```vue
 * <CpButton type="primary">确认</CpButton>
 * <CpButton variant="neon" type="success">霓虹按钮</CpButton>
 * <CpButton :loading="isLoading" loading-placeholder>提交</CpButton>
 * ```
 *
 * @see {@link ButtonProps} 查看所有可用属性
 *
 * @slot default - 按钮文本内容
 * @slot prefix - 前缀插槽，通常用于图标，加载时自动隐藏
 * @slot suffix - 后缀插槽，通常用于图标
 */
export declare const CpButton: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonType>;
            readonly default: "default";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "md";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
            readonly default: "solid";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly nativeType: {
            readonly type: import("vue").PropType<"button" | "submit" | "reset">;
            readonly default: "button";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly shape: {
            readonly type: import("vue").PropType<"clip" | "no-clip" | "round" | "circle">;
            readonly default: "clip";
        };
        readonly dashed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingPlaceholder: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingDisabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly icon: {
            readonly type: import("vue").PropType<object>;
            readonly default: undefined;
        };
        readonly square: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly iconColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly prefixIcon: {
            readonly type: import("vue").PropType<object>;
            readonly default: undefined;
        };
        readonly suffixIcon: {
            readonly type: import("vue").PropType<object>;
            readonly default: undefined;
        };
        readonly prefixIconColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly suffixIconColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly iconSize: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "";
        };
        readonly prefixIconSize: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "";
        };
        readonly suffixIconSize: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "";
        };
    }>> & Readonly<{
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").ButtonType;
        readonly variant: import("packages/cyberpunk-vue").ButtonVariant;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly block: boolean;
        readonly nativeType: "button" | "submit" | "reset";
        readonly color: string;
        readonly shape: "clip" | "no-clip" | "round" | "circle";
        readonly dashed: boolean;
        readonly loadingPlaceholder: boolean;
        readonly loadingDisabled: boolean;
        readonly textColor: string;
        readonly icon: object;
        readonly square: boolean;
        readonly iconColor: string;
        readonly prefixIcon: object;
        readonly suffixIcon: object;
        readonly prefixIconColor: string;
        readonly suffixIconColor: string;
        readonly iconSize: import("@cyberpunk-vue/hooks").Size;
        readonly prefixIconSize: import("@cyberpunk-vue/hooks").Size;
        readonly suffixIconSize: import("@cyberpunk-vue/hooks").Size;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonType>;
            readonly default: "default";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "md";
        };
        readonly variant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
            readonly default: "solid";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly nativeType: {
            readonly type: import("vue").PropType<"button" | "submit" | "reset">;
            readonly default: "button";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly shape: {
            readonly type: import("vue").PropType<"clip" | "no-clip" | "round" | "circle">;
            readonly default: "clip";
        };
        readonly dashed: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingPlaceholder: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingDisabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly icon: {
            readonly type: import("vue").PropType<object>;
            readonly default: undefined;
        };
        readonly square: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly iconColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly prefixIcon: {
            readonly type: import("vue").PropType<object>;
            readonly default: undefined;
        };
        readonly suffixIcon: {
            readonly type: import("vue").PropType<object>;
            readonly default: undefined;
        };
        readonly prefixIconColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly suffixIconColor: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly iconSize: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "";
        };
        readonly prefixIconSize: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "";
        };
        readonly suffixIconSize: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
            readonly default: "";
        };
    }>> & Readonly<{
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly type: import("packages/cyberpunk-vue").ButtonType;
        readonly variant: import("packages/cyberpunk-vue").ButtonVariant;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly block: boolean;
        readonly nativeType: "button" | "submit" | "reset";
        readonly color: string;
        readonly shape: "clip" | "no-clip" | "round" | "circle";
        readonly dashed: boolean;
        readonly loadingPlaceholder: boolean;
        readonly loadingDisabled: boolean;
        readonly textColor: string;
        readonly icon: object;
        readonly square: boolean;
        readonly iconColor: string;
        readonly prefixIcon: object;
        readonly suffixIcon: object;
        readonly prefixIconColor: string;
        readonly suffixIconColor: string;
        readonly iconSize: import("@cyberpunk-vue/hooks").Size;
        readonly prefixIconSize: import("@cyberpunk-vue/hooks").Size;
        readonly suffixIconSize: import("@cyberpunk-vue/hooks").Size;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonType>;
        readonly default: "default";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "md";
    };
    readonly variant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
        readonly default: "solid";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly nativeType: {
        readonly type: import("vue").PropType<"button" | "submit" | "reset">;
        readonly default: "button";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shape: {
        readonly type: import("vue").PropType<"clip" | "no-clip" | "round" | "circle">;
        readonly default: "clip";
    };
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingPlaceholder: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly icon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly iconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly prefixIcon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly suffixIcon: {
        readonly type: import("vue").PropType<object>;
        readonly default: undefined;
    };
    readonly prefixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly iconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
    readonly prefixIconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
    readonly suffixIconSize: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonSize>;
        readonly default: "";
    };
}>> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly type: import("packages/cyberpunk-vue").ButtonType;
    readonly variant: import("packages/cyberpunk-vue").ButtonVariant;
    readonly disabled: boolean;
    readonly loading: boolean;
    readonly block: boolean;
    readonly nativeType: "button" | "submit" | "reset";
    readonly color: string;
    readonly shape: "clip" | "no-clip" | "round" | "circle";
    readonly dashed: boolean;
    readonly loadingPlaceholder: boolean;
    readonly loadingDisabled: boolean;
    readonly textColor: string;
    readonly icon: object;
    readonly square: boolean;
    readonly iconColor: string;
    readonly prefixIcon: object;
    readonly suffixIcon: object;
    readonly prefixIconColor: string;
    readonly suffixIconColor: string;
    readonly iconSize: import("@cyberpunk-vue/hooks").Size;
    readonly prefixIconSize: import("@cyberpunk-vue/hooks").Size;
    readonly suffixIconSize: import("@cyberpunk-vue/hooks").Size;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
})>;
export default CpButton;
export * from './src/button';
export type { ButtonInstance } from './src/instance';
