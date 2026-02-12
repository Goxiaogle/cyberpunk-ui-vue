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

import { computed, type Ref, type ComputedRef } from 'vue'

/**
 * 尺寸值类型
 * - 数字：直接作为像素值
 * - 字符串：可以是预设值、带单位的值或纯数字
 */
export type SizeValue = string | number | undefined

/**
 * 通用尺寸预设类型
 * 所有组件基础尺寸，组件可扩展为专属 Size
 */
export type CommonSize = 'sm' | 'md' | 'lg'

/**
 * 通用 Size 类型 - 预设值 + 自定义值
 * 可直接用于大部分组件的 size prop
 */
export type Size = CommonSize | number | string

/**
 * 检测字符串是否为纯数字（不含单位）
 */
function isNumericString(value: string): boolean {
    return /^-?\d+(\.\d+)?$/.test(value.trim())
}

/**
 * 将尺寸值标准化为 CSS 可用的尺寸字符串
 *
 * @param value - 尺寸值（数字、字符串或预设）
 * @param sizeMap - 预设值映射表（如 { sm: 24, md: 32, lg: 40 }）
 * @returns CSS 尺寸字符串，如 '32px' 或 '2rem'
 */
export function normalizeSize(
    value: SizeValue,
    sizeMap?: Record<string, number>
): string {
    // 空值返回空字符串
    if (value === undefined || value === '') return ''

    // 数字直接转 px
    if (typeof value === 'number') {
        return `${value}px`
    }

    // 字符串处理
    const trimmed = value.trim()

    // 1. 检查是否为预设值
    if (sizeMap && trimmed in sizeMap) {
        return `${sizeMap[trimmed]}px`
    }

    // 2. 纯数字字符串，添加 px
    if (isNumericString(trimmed)) {
        return `${trimmed}px`
    }

    // 3. 已有单位或其他有效 CSS 值，保持原样
    return trimmed
}

/**
 * 将尺寸值解析为数字（px 值）
 *
 * 用于需要数字而非 CSS 字符串的场景（如 SVG viewBox、数学计算）
 *
 * @param value - 尺寸值
 * @param sizeMap - 预设值映射表
 * @param fallback - 解析失败时的默认值
 * @returns 数字 px 值
 *
 * @example
 * ```ts
 * parseSizeNumber(32)                    // => 32
 * parseSizeNumber('32')                  // => 32
 * parseSizeNumber('32px')                // => 32
 * parseSizeNumber('md', { md: 40 })      // => 40
 * parseSizeNumber('2rem')                // => 0 (无法解析为 px)
 * parseSizeNumber('2rem', undefined, 24) // => 24
 * ```
 */
export function parseSizeNumber(
    value: SizeValue,
    sizeMap?: Record<string, number>,
    fallback: number = 0
): number {
    // 空值返回 fallback
    if (value === undefined || value === '') return fallback

    // 数字直接返回
    if (typeof value === 'number') return value

    // 字符串处理
    const trimmed = value.trim()

    // 1. 检查是否为预设值
    if (sizeMap && trimmed in sizeMap) {
        return sizeMap[trimmed]
    }

    // 2. 纯数字字符串
    if (isNumericString(trimmed)) {
        return parseFloat(trimmed)
    }

    // 3. 尝试解析带 px 单位的值
    const pxMatch = trimmed.match(/^(-?\d+(\.\d+)?)px$/)
    if (pxMatch) {
        return parseFloat(pxMatch[1])
    }

    // 4. 无法解析，返回 fallback
    return fallback
}

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
export function isPresetSize(
    value: SizeValue,
    presets: readonly string[] = ['sm', 'md', 'lg']
): value is string {
    return typeof value === 'string' && presets.includes(value)
}

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
export function useSize(
    valueRef: Ref<SizeValue>,
    sizeMap?: Record<string, number>
): ComputedRef<string> {
    return computed(() => normalizeSize(valueRef.value, sizeMap))
}
