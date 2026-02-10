/**
 * CpSubMenu 赛博朋克风格子菜单
 *
 * @example
 * ```vue
 * <CpSubMenu index="1">
 *   <template #title>子菜单标题</template>
 *   <CpMenuItem index="1-1">子项一</CpMenuItem>
 * </CpSubMenu>
 * ```
 */
export declare const CpSubMenu: import("../utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly index: {
            readonly type: StringConstructor;
            readonly required: true;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
            readonly default: undefined;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly disabled: boolean;
        readonly icon: import("packages/cyberpunk-vue").IconValue;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly index: {
            readonly type: StringConstructor;
            readonly required: true;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
            readonly default: undefined;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly icon: import("packages/cyberpunk-vue").IconValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly index: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").IconValue>;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly disabled: boolean;
    readonly icon: import("packages/cyberpunk-vue").IconValue;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export default CpSubMenu;
export * from './src/sub-menu';
export type { SubMenuInstance } from './src/instance';
