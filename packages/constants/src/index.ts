import type { InjectionKey, Ref } from 'vue'

/** 主题类型 */
export type ThemeType = 'dark' | 'light'

/** 全局默认配置注入 Key */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 动态组件配置需要 any 类型
export const DEFAULTS_KEY: InjectionKey<Record<string, any>> = Symbol('cp-defaults')

/** 主题注入 Key */
export const THEME_KEY: InjectionKey<Ref<ThemeType>> = Symbol('cp-theme')

/** Dialog 上下文注入 Key — 子组件可继承 Dialog 的 type / color */
export const DIALOG_CONTEXT_KEY: InjectionKey<{
  type: Ref<string>
  color: Ref<string>
}> = Symbol('cp-dialog-context')

/** Table 上下文注入 Key — CpTableColumn 注册到父 CpTable */
export const TABLE_CONTEXT_KEY: InjectionKey<{
  registerColumn: (config: any) => void
  unregisterColumn: (id: string) => void
}> = Symbol('cp-table-context')

/** 组件前缀 */
export const COMPONENT_PREFIX = 'Cp'

/** CSS 命名空间 */
export const CSS_NAMESPACE = 'cp'

