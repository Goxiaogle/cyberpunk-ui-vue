import type { InjectionKey, Ref } from 'vue';
/** 主题类型 */
export type ThemeType = 'dark' | 'light';
/** 全局默认配置注入 Key */
export declare const DEFAULTS_KEY: InjectionKey<Record<string, any>>;
/** 主题注入 Key */
export declare const THEME_KEY: InjectionKey<Ref<ThemeType>>;
/** 组件前缀 */
export declare const COMPONENT_PREFIX = "Cp";
/** CSS 命名空间 */
export declare const CSS_NAMESPACE = "cp";
