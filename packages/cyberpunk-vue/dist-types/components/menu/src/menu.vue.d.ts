declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly mode: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuMode>;
        readonly default: "vertical";
    };
    readonly defaultActive: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly defaultOpeneds: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly uniqueOpened: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly activeTextColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (index: string, indexPath: string[]) => void;
    close: (index: string, indexPath: string[]) => void;
    open: (index: string, indexPath: string[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mode: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuMode>;
        readonly default: "vertical";
    };
    readonly defaultActive: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly defaultOpeneds: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly uniqueOpened: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapse: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").MenuType>;
        readonly default: "default";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly activeTextColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{
    onSelect?: ((index: string, indexPath: string[]) => any) | undefined;
    onClose?: ((index: string, indexPath: string[]) => any) | undefined;
    onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
}>, {
    readonly mode: import("packages/cyberpunk-vue").MenuMode;
    readonly type: import("packages/cyberpunk-vue").MenuType;
    readonly color: string;
    readonly textColor: string;
    readonly collapse: boolean;
    readonly backgroundColor: string;
    readonly defaultActive: string;
    readonly defaultOpeneds: string[];
    readonly uniqueOpened: boolean;
    readonly activeTextColor: string;
    readonly router: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
