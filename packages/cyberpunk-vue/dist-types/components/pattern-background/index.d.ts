/**
 * CpPatternBackground 图案背景组件
 *
 * 用于展示各种装饰性背景图案，如网格、棋盘格、点阵、条纹等。
 *
 * @example
 * ```vue
 * <!-- 网格背景 -->
 * <CpPatternBackground pattern="grid" color="#ee2b34" :opacity="0.1" />
 *
 * <!-- 装饰层覆盖 -->
 * <div style="position: relative">
 *   <CpPatternBackground pattern="dots" cover decorative />
 *   <div>内容</div>
 * </div>
 * ```
 */
export declare const CpPatternBackground: import("../utils").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly pattern: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PatternType>;
        readonly default: "grid";
    };
    readonly size: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 20;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "currentColor";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "transparent";
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PatternDirection>;
        readonly default: "diagonal";
    };
    readonly opacity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly lineWidth: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1;
    };
    readonly dotScale: {
        readonly type: NumberConstructor;
        readonly default: 0.1;
    };
    readonly cover: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly decorative: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly pattern: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PatternType>;
        readonly default: "grid";
    };
    readonly size: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 20;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "currentColor";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "transparent";
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("packages/cyberpunk-vue").PatternDirection>;
        readonly default: "diagonal";
    };
    readonly opacity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly lineWidth: {
        readonly type: import("vue").PropType<number | string>;
        readonly default: 1;
    };
    readonly dotScale: {
        readonly type: NumberConstructor;
        readonly default: 0.1;
    };
    readonly cover: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly decorative: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{}>, {
    readonly size: string | number;
    readonly color: string;
    readonly pattern: import("packages/cyberpunk-vue").PatternType;
    readonly opacity: number;
    readonly cover: boolean;
    readonly backgroundColor: string;
    readonly direction: import("packages/cyberpunk-vue").PatternDirection;
    readonly lineWidth: string | number;
    readonly dotScale: number;
    readonly decorative: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CpPatternBackground;
export * from './src/pattern-background';
export type { PatternBackgroundInstance } from './src/instance';
