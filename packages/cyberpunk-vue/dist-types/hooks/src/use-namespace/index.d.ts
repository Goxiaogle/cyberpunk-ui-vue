/**
 * useNamespace - BEM 命名空间生成器
 * 用于生成符合 BEM 规范的 CSS 类名
 */
export type UseNamespaceReturn = {
    /** 命名空间 */
    namespace: string;
    /** 块类名 cp-{block} */
    b: () => string;
    /** 元素类名 cp-{block}__{element} */
    e: (element: string) => string;
    /** 修饰符类名 cp-{block}--{modifier} */
    m: (modifier: string) => string;
    /** 块+元素+修饰符 */
    bem: (block?: string, element?: string, modifier?: string) => string;
    /** 状态类名 is-{state} */
    is: (state: string, value?: boolean) => string;
};
export declare function useNamespace(block: string): UseNamespaceReturn;
