/**
 * CpPagination 分页组件
 *
 * @description 赛博朋克风格分页导航组件。
 * 支持布局配置、多种颜色类型、形状、尺寸，以及 v-model 双向绑定。
 *
 * @example
 * ```vue
 * <CpPagination
 *   v-model:currentPage="page"
 *   v-model:pageSize="size"
 *   :total="100"
 *   layout="total, sizes, prev, pager, next, jumper"
 * />
 * ```
 */
export declare const CpPagination: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly currentPage: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly pageSize: {
            readonly type: NumberConstructor;
            readonly default: 10;
        };
        readonly total: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly pageSizes: {
            readonly type: import("vue").PropType<number[]>;
            readonly default: () => number[];
        };
        readonly pagerCount: {
            readonly type: NumberConstructor;
            readonly default: 7;
            readonly validator: (val: number) => boolean;
        };
        readonly layout: {
            readonly type: StringConstructor;
            readonly default: "prev, pager, next";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly hideOnSinglePage: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationType>;
            readonly default: "default";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationShape>;
            readonly default: "clip";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationSize>;
            readonly default: "md";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly buttonVariant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
            readonly default: "solid";
        };
        readonly totalTemplate: {
            readonly type: StringConstructor;
            readonly default: "共 {total} 条";
        };
        readonly sizeTemplate: {
            readonly type: StringConstructor;
            readonly default: "{size} 条/页";
        };
    }>> & Readonly<{
        onChange?: ((page: number) => any) | undefined;
        "onUpdate:currentPage"?: ((page: number) => any) | undefined;
        "onUpdate:pageSize"?: ((size: number) => any) | undefined;
        onSizeChange?: ((size: number) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (page: number) => void;
        "update:currentPage": (page: number) => void;
        "update:pageSize": (size: number) => void;
        sizeChange: (size: number) => void;
    }, import("vue").PublicProps, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly total: number;
        readonly pageSizes: number[];
        readonly type: import("packages/cyberpunk-vue").PaginationType;
        readonly disabled: boolean;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").PaginationShape;
        readonly layout: string;
        readonly currentPage: number;
        readonly pageSize: number;
        readonly pagerCount: number;
        readonly hideOnSinglePage: boolean;
        readonly buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        readonly totalTemplate: string;
        readonly sizeTemplate: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly currentPage: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly pageSize: {
            readonly type: NumberConstructor;
            readonly default: 10;
        };
        readonly total: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly pageSizes: {
            readonly type: import("vue").PropType<number[]>;
            readonly default: () => number[];
        };
        readonly pagerCount: {
            readonly type: NumberConstructor;
            readonly default: 7;
            readonly validator: (val: number) => boolean;
        };
        readonly layout: {
            readonly type: StringConstructor;
            readonly default: "prev, pager, next";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly hideOnSinglePage: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly type: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationType>;
            readonly default: "default";
        };
        readonly shape: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationShape>;
            readonly default: "clip";
        };
        readonly size: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationSize>;
            readonly default: "md";
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly buttonVariant: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
            readonly default: "solid";
        };
        readonly totalTemplate: {
            readonly type: StringConstructor;
            readonly default: "共 {total} 条";
        };
        readonly sizeTemplate: {
            readonly type: StringConstructor;
            readonly default: "{size} 条/页";
        };
    }>> & Readonly<{
        onChange?: ((page: number) => any) | undefined;
        "onUpdate:currentPage"?: ((page: number) => any) | undefined;
        "onUpdate:pageSize"?: ((size: number) => any) | undefined;
        onSizeChange?: ((size: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly size: import("@cyberpunk-vue/hooks").Size;
        readonly total: number;
        readonly pageSizes: number[];
        readonly type: import("packages/cyberpunk-vue").PaginationType;
        readonly disabled: boolean;
        readonly color: string;
        readonly shape: import("packages/cyberpunk-vue").PaginationShape;
        readonly layout: string;
        readonly currentPage: number;
        readonly pageSize: number;
        readonly pagerCount: number;
        readonly hideOnSinglePage: boolean;
        readonly buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        readonly totalTemplate: string;
        readonly sizeTemplate: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly currentPage: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pageSizes: {
        readonly type: import("vue").PropType<number[]>;
        readonly default: () => number[];
    };
    readonly pagerCount: {
        readonly type: NumberConstructor;
        readonly default: 7;
        readonly validator: (val: number) => boolean;
    };
    readonly layout: {
        readonly type: StringConstructor;
        readonly default: "prev, pager, next";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly hideOnSinglePage: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationType>;
        readonly default: "default";
    };
    readonly shape: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationShape>;
        readonly default: "clip";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PaginationSize>;
        readonly default: "md";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly buttonVariant: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").ButtonVariant>;
        readonly default: "solid";
    };
    readonly totalTemplate: {
        readonly type: StringConstructor;
        readonly default: "共 {total} 条";
    };
    readonly sizeTemplate: {
        readonly type: StringConstructor;
        readonly default: "{size} 条/页";
    };
}>> & Readonly<{
    onChange?: ((page: number) => any) | undefined;
    "onUpdate:currentPage"?: ((page: number) => any) | undefined;
    "onUpdate:pageSize"?: ((size: number) => any) | undefined;
    onSizeChange?: ((size: number) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (page: number) => void;
    "update:currentPage": (page: number) => void;
    "update:pageSize": (size: number) => void;
    sizeChange: (size: number) => void;
}, string, {
    readonly size: import("@cyberpunk-vue/hooks").Size;
    readonly total: number;
    readonly pageSizes: number[];
    readonly type: import("packages/cyberpunk-vue").PaginationType;
    readonly disabled: boolean;
    readonly color: string;
    readonly shape: import("packages/cyberpunk-vue").PaginationShape;
    readonly layout: string;
    readonly currentPage: number;
    readonly pageSize: number;
    readonly pagerCount: number;
    readonly hideOnSinglePage: boolean;
    readonly buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
    readonly totalTemplate: string;
    readonly sizeTemplate: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        sizes?: (props: {
            pageSize: number;
            pageSizes: number[];
            options: import("packages/cyberpunk-vue").DropdownOption[];
            onChange: (val: string | number) => void;
            disabled: boolean;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            shape: import("packages/cyberpunk-vue").PaginationShape;
            size: import("@cyberpunk-vue/hooks").Size;
        }) => any;
    } & {
        prev?: (props: {
            disabled: boolean;
            onClick: () => void;
            currentPage: number;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            shape: import("packages/cyberpunk-vue").PaginationShape;
            size: import("@cyberpunk-vue/hooks").Size;
            buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        }) => any;
    } & {
        pager?: (props: {
            pages: (string | number)[];
            currentPage: number;
            pageCount: number;
            onPageClick: (page: number) => void;
            onEllipsisClick: (type: string) => void;
            disabled: boolean;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            shape: import("packages/cyberpunk-vue").PaginationShape;
            size: import("@cyberpunk-vue/hooks").Size;
            buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        }) => any;
    } & {
        ellipsis?: (props: {
            disabled: boolean;
            onClick: () => void;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        }) => any;
    } & {
        'pager-item'?: (props: {
            page: number;
            active: boolean;
            disabled: boolean;
            onClick: () => void;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        }) => any;
    } & {
        next?: (props: {
            disabled: boolean;
            onClick: () => void;
            currentPage: number;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            shape: import("packages/cyberpunk-vue").PaginationShape;
            size: import("@cyberpunk-vue/hooks").Size;
            buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
        }) => any;
    } & {
        jumper?: (props: {
            pageCount: number;
            disabled: boolean;
            onJump: (page: number) => void;
            type: import("packages/cyberpunk-vue").PaginationType;
            color: string;
            shape: import("packages/cyberpunk-vue").PaginationShape;
            size: import("@cyberpunk-vue/hooks").Size;
        }) => any;
    };
})>;
export default CpPagination;
export * from './src/pagination';
export type { CpPaginationInstance } from './src/instance';
