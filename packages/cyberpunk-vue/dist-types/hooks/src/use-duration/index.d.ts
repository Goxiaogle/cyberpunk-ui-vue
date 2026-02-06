/**
 * useDuration - 动画时间单位标准化工具
 *
 * 统一处理动画时间值，支持数字和字符串两种格式：
 * - 数字：默认视为毫秒 (ms)，转为 CSS 时间字符串
 * - 字符串：保持原样，用户可自行指定单位 (如 '1.5s' 或 '500ms')
 *
 * @example
 * ```ts
 * normalizeDuration(300)     // => '300ms'
 * normalizeDuration('1.5s')  // => '1.5s'
 * normalizeDuration('500ms') // => '500ms'
 * normalizeDuration('')      // => ''
 * ```
 */
import { type Ref, type ComputedRef } from 'vue';
export type DurationValue = number | string | undefined;
/**
 * 将时间值标准化为 CSS 可用的时间字符串
 * @param value - 时间值（数字默认 ms，字符串保持原样）
 * @returns CSS 时间字符串，如 '300ms' 或 '1.5s'
 */
export declare function normalizeDuration(value: DurationValue): string;
/**
 * 响应式版本的时间标准化
 * @param valueRef - 响应式时间值引用
 * @returns 响应式 CSS 时间字符串
 */
export declare function useDuration(valueRef: Ref<DurationValue>): ComputedRef<string>;
