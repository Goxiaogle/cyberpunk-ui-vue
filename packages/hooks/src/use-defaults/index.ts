/**
 * useDefaults - 全局默认值合并
 * 合并优先级: 显式 Props > 全局配置 > 组件默认值
 */
import { inject, computed, getCurrentInstance, unref, type ComputedRef } from 'vue'
import { DEFAULTS_KEY } from '@cyberpunk-vue/constants'

type DefaultsSource<T extends Record<string, any>> =
    | Record<string, Partial<T>>
    | ComputedRef<Record<string, Partial<T>>>

const hasOwn = (target: object, key: string) => Object.prototype.hasOwnProperty.call(target, key)

const hyphenate = (value: string) => value.replace(/\B([A-Z])/g, '-$1').toLowerCase()

const capitalize = (value: string) => value ? value.charAt(0).toUpperCase() + value.slice(1) : value

function getComponentDefaults<T extends Record<string, any>>(
    defaults: Record<string, Partial<T>>,
    name: string
): Partial<T> {
    const normalizedName = name.replace(/^Cp/, '')
    const pascalName = capitalize(normalizedName)
    const lowerName = normalizedName.charAt(0).toLowerCase() + normalizedName.slice(1)
    const kebabName = hyphenate(lowerName)

    return (
        defaults[lowerName] ??
        defaults[pascalName] ??
        defaults[`Cp${pascalName}`] ??
        defaults[kebabName] ??
        {}
    )
}

function isExplicitProp(key: string, rawProps?: Record<string, unknown> | null): boolean {
    if (!rawProps) return false
    return hasOwn(rawProps, key) || hasOwn(rawProps, hyphenate(key))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 泛型约束需要 any
export function useDefaults<T extends Record<string, any>>(
    props: T,
    name: string
): T {
    const globalDefaults = inject(DEFAULTS_KEY, {}) as DefaultsSource<T>
    const instance = getCurrentInstance()

    const mergedProps = computed(() => {
        const defaults = unref(globalDefaults)
        const componentDefaults = getComponentDefaults(defaults, name)
        const rawProps = instance?.vnode.props
        const result = { ...props }

        // 只覆盖未显式传递的 props。Vue 会先写入 props 默认值，不能用 undefined 判断。
        for (const key in componentDefaults) {
            if (!isExplicitProp(key, rawProps)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 动态属性赋值需要类型断言
                ; (result as any)[key] = componentDefaults[key]
            }
        }

        return result
    })

    return new Proxy(props, {
        get(target, key, receiver) {
            if (typeof key === 'string' && key in mergedProps.value) {
                return mergedProps.value[key]
            }
            return Reflect.get(target, key, receiver)
        },
        has(target, key) {
            return key in mergedProps.value || key in target
        },
        ownKeys(target) {
            return Array.from(new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(mergedProps.value)]))
        },
        getOwnPropertyDescriptor(target, key) {
            return Reflect.getOwnPropertyDescriptor(mergedProps.value, key) ?? Reflect.getOwnPropertyDescriptor(target, key)
        },
    }) as T
}
