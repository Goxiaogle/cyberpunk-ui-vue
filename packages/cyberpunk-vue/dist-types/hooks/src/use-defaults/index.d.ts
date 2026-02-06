/**
 * useDefaults - 全局默认值合并
 * 合并优先级: 显式 Props > 全局配置 > 组件默认值
 */
import { type ComputedRef } from 'vue';
export declare function useDefaults<T extends Record<string, any>>(props: T, name: string): ComputedRef<T>;
