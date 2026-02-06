import type { InjectionKey, Ref } from 'vue'

/** 主题类型 */
export type ThemeType = 'dark' | 'light'

/** 全局默认配置注入 Key */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 动态组件配置需要 any 类型
export const DEFAULTS_KEY: InjectionKey<Record<string, any>> = Symbol('cp-defaults')

/** 主题注入 Key */
export const THEME_KEY: InjectionKey<Ref<ThemeType>> = Symbol('cp-theme')

/** 组件前缀 */
export const COMPONENT_PREFIX = 'Cp'

/** CSS 命名空间 */
export const CSS_NAMESPACE = 'cp'
