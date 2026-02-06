/**
 * CpTag 标签组件
 *
 * @description 赛博朋克风格标签，用于展示标签、分类或状态。
 * 支持多种颜色类型、变体样式、尺寸与可关闭功能。
 *
 * @example
 * ```vue
 * <CpTag type="primary">主要标签</CpTag>
 * <CpTag type="success" closable @close="onClose">成功</CpTag>
 * <CpTag variant="outline" color="#ff00ff">自定义</CpTag>
 * ```
 */
export declare const CpTag: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => void;
        close: (event: MouseEvent) => void;
        "update:selected": (selected: boolean) => void;
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
    close: (event: MouseEvent) => void;
    "update:selected": (selected: boolean) => void;
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
})>;
export default CpTag;
export * from './src/tag';
export type { CpTagInstance } from './src/instance';
