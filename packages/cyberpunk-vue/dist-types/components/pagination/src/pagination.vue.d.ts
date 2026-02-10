import type { DropdownOption } from '../../dropdown/src/dropdown';
declare var __VLS_1: {
    pageSize: number;
    pageSizes: number[];
    options: DropdownOption[];
    onChange: (val: string | number) => void;
    disabled: boolean;
    type: import("packages/cyberpunk-vue").PaginationType;
    color: string;
    shape: import("packages/cyberpunk-vue").PaginationShape;
    size: import("@cyberpunk-vue/hooks").Size;
}, __VLS_10: {
    disabled: boolean;
    onClick: () => void;
    currentPage: number;
    type: import("packages/cyberpunk-vue").PaginationType;
    color: string;
    shape: import("packages/cyberpunk-vue").PaginationShape;
    size: import("@cyberpunk-vue/hooks").Size;
    buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
}, __VLS_19: {
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
}, __VLS_21: {
    disabled: boolean;
    onClick: () => void;
    type: import("packages/cyberpunk-vue").PaginationType;
    color: string;
    buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
}, __VLS_30: {
    page: number;
    active: boolean;
    disabled: boolean;
    onClick: () => void;
    type: import("packages/cyberpunk-vue").PaginationType;
    color: string;
    buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
}, __VLS_39: {
    disabled: boolean;
    onClick: () => void;
    currentPage: number;
    type: import("packages/cyberpunk-vue").PaginationType;
    color: string;
    shape: import("packages/cyberpunk-vue").PaginationShape;
    size: import("@cyberpunk-vue/hooks").Size;
    buttonVariant: import("packages/cyberpunk-vue").ButtonVariant;
}, __VLS_48: {
    pageCount: number;
    disabled: boolean;
    onJump: (page: number) => void;
    type: import("packages/cyberpunk-vue").PaginationType;
    color: string;
    shape: import("packages/cyberpunk-vue").PaginationShape;
    size: import("@cyberpunk-vue/hooks").Size;
};
type __VLS_Slots = {} & {
    sizes?: (props: typeof __VLS_1) => any;
} & {
    prev?: (props: typeof __VLS_10) => any;
} & {
    pager?: (props: typeof __VLS_19) => any;
} & {
    ellipsis?: (props: typeof __VLS_21) => any;
} & {
    'pager-item'?: (props: typeof __VLS_30) => any;
} & {
    next?: (props: typeof __VLS_39) => any;
} & {
    jumper?: (props: typeof __VLS_48) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (page: number) => void;
    "update:currentPage": (page: number) => void;
    "update:pageSize": (size: number) => void;
    sizeChange: (size: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
