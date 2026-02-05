/**
 * useNamespace - BEM 命名空间生成器
 * 用于生成符合 BEM 规范的 CSS 类名
 */

import { CSS_NAMESPACE } from '@cyberpunk-vue/constants'

const defaultNamespace = CSS_NAMESPACE

export type UseNamespaceReturn = {

    /** 命名空间 */
    namespace: string
    /** 块类名 cp-{block} */
    b: () => string
    /** 元素类名 cp-{block}__{element} */
    e: (element: string) => string
    /** 修饰符类名 cp-{block}--{modifier} */
    m: (modifier: string) => string
    /** 块+元素+修饰符 */
    bem: (block?: string, element?: string, modifier?: string) => string
    /** 状态类名 is-{state} */
    is: (state: string, value?: boolean) => string
}

export function useNamespace(block: string): UseNamespaceReturn {
    const namespace = defaultNamespace

    const b = () => `${namespace}-${block}`

    const e = (element: string) =>
        element ? `${namespace}-${block}__${element}` : ''

    const m = (modifier: string) =>
        modifier ? `${namespace}-${block}--${modifier}` : ''

    const bem = (
        blockSuffix?: string,
        element?: string,
        modifier?: string
    ) => {
        let cls = `${namespace}-${block}`
        if (blockSuffix) cls += `-${blockSuffix}`
        if (element) cls += `__${element}`
        if (modifier) cls += `--${modifier}`
        return cls
    }

    const is = (state: string, value = true) =>
        value ? `is-${state}` : ''

    return {
        namespace,
        b,
        e,
        m,
        bem,
        is,
    }
}
