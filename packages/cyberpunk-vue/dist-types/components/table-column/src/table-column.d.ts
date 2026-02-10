import type { ExtractPropTypes, PropType } from 'vue';
/**
 * 列特殊类型
 * - `default` — 普通数据列
 * - `selection` — 多选列
 * - `index` — 序号列
 */
export type ColumnType = 'default' | 'selection' | 'index';
/**
 * CpTableColumn 组件 Props 定义
 */
export declare const tableColumnProps: {
    /**
     * 列特殊类型
     * @default 'default'
     */
    readonly type: {
        readonly type: PropType<ColumnType>;
        readonly default: "default";
    };
    /**
     * 数据字段名
     * @default ''
     */
    readonly prop: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 列标题
     * @default ''
     */
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 列宽 (px 或百分比)
     */
    readonly width: {
        readonly type: PropType<string | number>;
    };
    /**
     * 最小列宽
     */
    readonly minWidth: {
        readonly type: PropType<string | number>;
    };
    /**
     * 是否可排序
     * @default false
     */
    readonly sortable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 内容对齐方式
     * @default 'left'
     */
    readonly align: {
        readonly type: PropType<"left" | "center" | "right">;
        readonly default: "left";
    };
    /**
     * 表头对齐方式 (默认跟随 align)
     */
    readonly headerAlign: {
        readonly type: PropType<"left" | "center" | "right" | "">;
        readonly default: "";
    };
};
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>;
