/**
 * useDefaults - 全局默认值合并
 * 合并优先级: 显式 Props > 全局配置 > 组件默认值
 */
import { inject, computed, type ComputedRef } from 'vue'
import { DEFAULTS_KEY } from '@cyberpunk-vue/constants'

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 泛型约束需要 any
export function useDefaults<T extends Record<string, any>>(
    props: T,
    name: string
): ComputedRef<T> {
    const globalDefaults = inject(DEFAULTS_KEY, {}) as Record<string, Partial<T>>
    const componentDefaults = globalDefaults[name] ?? {}

    return computed(() => {
        const result = { ...props }

        // 只覆盖未显式传递的 props
        for (const key in componentDefaults) {
            if (props[key] === undefined) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 动态属性赋值需要类型断言
                ; (result as any)[key] = componentDefaults[key]
            }
        }

        return result
    })
}
