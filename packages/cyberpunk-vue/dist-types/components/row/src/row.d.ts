import type { ExtractPropTypes, InjectionKey, PropType } from 'vue';
/**
 * Row 水平对齐方式
 */
export type RowJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
/**
 * Row 垂直对齐方式
 */
export type RowAlign = 'top' | 'middle' | 'bottom';
/**
 * CpRow 组件 Props 定义
 *
 * @description Flex 行容器，配合 CpCol 实现 24 栅格布局系统。
 *
 * @example
 * ```vue
 * <CpRow :gutter="20">
 *   <CpCol :span="12">左半</CpCol>
 *   <CpCol :span="12">右半</CpCol>
 * </CpRow>
 * ```
 */
export declare const rowProps: {
    /**
     * 栅格间隔 (px)
     * @default 0
     */
    readonly gutter: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /**
     * 水平排列方式
     * @default 'start'
     */
    readonly justify: {
        readonly type: PropType<RowJustify>;
        readonly default: "start";
    };
    /**
     * 垂直对齐方式
     * @default 'top'
     */
    readonly align: {
        readonly type: PropType<RowAlign>;
        readonly default: "top";
    };
    /**
     * 自定义元素标签
     * @default 'div'
     */
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    /**
     * 是否自动换行
     * @default true
     */
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type RowProps = ExtractPropTypes<typeof rowProps>;
/**
 * Row 注入给 Col 的上下文
 */
export interface RowContext {
    gutter: number;
}
export declare const rowContextKey: InjectionKey<RowContext>;
