import { type Ref, type ComputedRef } from 'vue';
/**
 * usePagination 配置选项
 */
export interface UsePaginationOptions {
    /** 初始页码 @default 1 */
    defaultCurrentPage?: number;
    /** 初始每页条数 @default 10 */
    defaultPageSize?: number;
    /** 总条数（响应式或静态） */
    total?: Ref<number> | number;
    /** 可选的每页条数列表 @default [10, 20, 50, 100] */
    pageSizes?: number[];
}
/**
 * usePagination 返回值
 */
export interface UsePaginationReturn {
    /** 当前页码 */
    currentPage: Ref<number>;
    /** 每页条数 */
    pageSize: Ref<number>;
    /** 总条数 */
    total: Ref<number>;
    /** 总页数 */
    pageCount: ComputedRef<number>;
    /** 是否为第一页 */
    isFirstPage: ComputedRef<boolean>;
    /** 是否为最后一页 */
    isLastPage: ComputedRef<boolean>;
    /** 可选的每页条数列表 */
    pageSizes: number[];
    /** 跳转到上一页 */
    prev: () => void;
    /** 跳转到下一页 */
    next: () => void;
    /** 跳转到指定页 */
    goto: (page: number) => void;
    /** 设置每页条数 */
    setPageSize: (size: number) => void;
    /**
     * 根据当前分页参数切片数据
     * 传入完整数据列表，返回当前页的数据切片
     * 适合与 Table 配合使用
     */
    slicedData: <T>(data: Ref<T[]> | T[]) => ComputedRef<T[]>;
}
/**
 * usePagination - 分页逻辑 Hook
 *
 * 提供独立于 UI 的分页状态管理，可搭配 CpPagination 或自定义分页 UI 使用。
 * 内置 `slicedData` 方法，可直接对数据列表进行分页切片，适合与 Table 使用。
 *
 * @example
 * ```ts
 * const { currentPage, pageSize, pageCount, slicedData } = usePagination({
 *   defaultPageSize: 20,
 *   total: computed(() => allData.value.length),
 * })
 *
 * const tableData = slicedData(allData)
 * ```
 */
export declare function usePagination(options?: UsePaginationOptions): UsePaginationReturn;
