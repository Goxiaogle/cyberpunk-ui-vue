import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
import type { ButtonVariant } from '../../button/src/button';
/**
 * 分页颜色类型
 */
export type PaginationType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
/**
 * 分页形状
 */
export type PaginationShape = 'clip' | 'no-clip' | 'round' | 'circle';
/**
 * 分页尺寸
 */
export type PaginationSize = Size;
/**
 * 布局模块名称
 * - `total` — 总条数文字
 * - `sizes` — 每页条数选择器
 * - `prev` — 上一页按钮
 * - `pager` — 页码按钮组
 * - `next` — 下一页按钮
 * - `jumper` — 页码跳转输入框
 */
export type PaginationLayout = 'total' | 'sizes' | 'prev' | 'pager' | 'next' | 'jumper';
/**
 * CpPagination 组件 Props 定义
 *
 * @description 赛博朋克风格分页组件，用于长列表数据分页导航。
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
export declare const paginationProps: {
    /**
     * 当前页码 (v-model:currentPage)
     * @default 1
     */
    readonly currentPage: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    /**
     * 每页显示条数 (v-model:pageSize)
     * @default 10
     */
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    /**
     * 总条数
     * @default 0
     */
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /**
     * 可选的每页条数列表
     * @default [10, 20, 50, 100]
     */
    readonly pageSizes: {
        readonly type: PropType<number[]>;
        readonly default: () => number[];
    };
    /**
     * 最大可见页码按钮数（应为奇数 >= 5）
     * @default 7
     */
    readonly pagerCount: {
        readonly type: NumberConstructor;
        readonly default: 7;
        readonly validator: (val: number) => boolean;
    };
    /**
     * 布局配置，逗号分隔
     * 可选模块: total, sizes, prev, pager, next, jumper
     * @default 'prev, pager, next'
     */
    readonly layout: {
        readonly type: StringConstructor;
        readonly default: "prev, pager, next";
    };
    /**
     * 是否禁用
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 只有一页时隐藏
     * @default false
     */
    readonly hideOnSinglePage: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 颜色类型
     * @default 'default'
     */
    readonly type: {
        readonly type: PropType<PaginationType>;
        readonly default: "default";
    };
    /**
     * 形状
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<PaginationShape>;
        readonly default: "clip";
    };
    /**
     * 尺寸
     * @default 'md'
     */
    readonly size: {
        readonly type: PropType<PaginationSize>;
        readonly default: "md";
    };
    /**
     * 自定义颜色（CSS 颜色值）
     * 优先级高于 type，覆盖主题色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 分页按钮变体
     * 控制 CpButton 的显示风格
     * @default 'ghost'
     */
    readonly buttonVariant: {
        readonly type: PropType<ButtonVariant>;
        readonly default: "solid";
    };
    /**
     * 总条数文案模板
     * 使用 `{total}` 作为占位符
     * @default '共 {total} 条'
     */
    readonly totalTemplate: {
        readonly type: StringConstructor;
        readonly default: "共 {total} 条";
    };
    /**
     * 每页条数选项文案模板
     * 使用 `{size}` 作为占位符
     * @default '{size} 条/页'
     */
    readonly sizeTemplate: {
        readonly type: StringConstructor;
        readonly default: "{size} 条/页";
    };
};
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
/**
 * CpPagination 事件定义
 */
export declare const paginationEmits: {
    /** 当前页码变化 */
    'update:currentPage': (page: number) => boolean;
    /** 每页条数变化 */
    'update:pageSize': (size: number) => boolean;
    /** 页码变化事件（同 update:currentPage，便于监听） */
    change: (page: number) => boolean;
    /** 每页条数变化事件 */
    sizeChange: (size: number) => boolean;
};
export type PaginationEmits = typeof paginationEmits;
