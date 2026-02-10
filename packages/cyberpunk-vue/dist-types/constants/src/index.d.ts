import type { InjectionKey, Ref } from 'vue';
/** 主题类型 */
export type ThemeType = 'dark' | 'light';
/** 全局默认配置注入 Key */
export declare const DEFAULTS_KEY: InjectionKey<Record<string, any>>;
/** 主题注入 Key */
export declare const THEME_KEY: InjectionKey<Ref<ThemeType>>;
/** Dialog 上下文注入 Key — 子组件可继承 Dialog 的 type / color */
export declare const DIALOG_CONTEXT_KEY: InjectionKey<{
    type: Ref<string>;
    color: Ref<string>;
}>;
/** Table 上下文注入 Key — CpTableColumn 注册到父 CpTable */
export declare const TABLE_CONTEXT_KEY: InjectionKey<{
    registerColumn: (config: any) => void;
    unregisterColumn: (id: string) => void;
}>;
/** 组件前缀 */
export declare const COMPONENT_PREFIX = "Cp";
/** CSS 命名空间 */
export declare const CSS_NAMESPACE = "cp";
