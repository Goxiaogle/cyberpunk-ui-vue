/**
 * useSize - 尺寸值标准化工具
 *
 * 统一处理组件尺寸值，支持预设值、数字和带单位字符串：
 * - 数字：默认视为像素 (px)
 * - 纯数字字符串：默认视为像素 (px)
 * - 带单位字符串：保持原样 (如 '2rem', '100%')
 * - 预设字符串：通过 sizeMap 查表转换
 *
 * @example
 * ```ts
 * normalizeSize(32)              // => '32px'
 * normalizeSize('32')            // => '32px'
 * normalizeSize('2rem')          // => '2rem'
 * normalizeSize('md', { md: 40 }) // => '40px'
 * normalizeSize('100%')          // => '100%'
 * ```
 */
import { type Ref, type ComputedRef } from 'vue';
/**
 * 尺寸值类型
 * - 数字：直接作为像素值
 * - 字符串：可以是预设值、带单位的值或纯数字
 */
export type SizeValue = string | number | undefined;
/**
 * 通用尺寸预设类型
 * 所有组件基础尺寸，组件可扩展为专属 Size
 */
export type CommonSize = 'sm' | 'md' | 'lg';
/**
 * 通用 Size 类型 - 预设值 + 自定义值
 * 可直接用于大部分组件的 size prop
 */
export type Size = CommonSize | number | string;
/**
 * 将尺寸值标准化为 CSS 可用的尺寸字符串
 *
 * @param value - 尺寸值（数字、字符串或预设）
 * @param sizeMap - 预设值映射表（如 { sm: 24, md: 32, lg: 40 }）
 * @returns CSS 尺寸字符串，如 '32px' 或 '2rem'
 */
export declare function normalizeSize(value: SizeValue, sizeMap?: Record<string, number>): string;
/**
 * 检测 size 值是否为 CommonSize 预设值
 * 用于组件判断是否应用 CSS 类名还是内联样式
 *
 * @param value - size 值
 * @param presets - 预设值列表，默认 ['sm', 'md', 'lg']
 * @returns 是否为预设值
 *
 * @example
 * isPresetSize('md')      // true
 * isPresetSize('xl', ['sm','md','lg','xl']) // true
 * isPresetSize(32)        // false
 * isPresetSize('2rem')    // false
 */
export declare function isPresetSize(value: SizeValue, presets?: readonly string[]): value is string;
/**
 * 响应式版本的尺寸标准化
 *
 * @param valueRef - 响应式尺寸值引用
 * @param sizeMap - 预设值映射表
 * @returns 响应式 CSS 尺寸字符串
 *
 * @example
 * ```ts
 * const size = ref<SizeValue>('md')
 * const normalizedSize = useSize(size, { sm: 24, md: 32, lg: 40 })
 * // normalizedSize.value === '32px'
 * ```
 */
export declare function useSize(valueRef: Ref<SizeValue>, sizeMap?: Record<string, number>): ComputedRef<string>;
