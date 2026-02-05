import { computed, type Ref, type ComputedRef } from 'vue'

/**
 * 图片 URL 处理器函数签名
 * @param src - 原始图片 URL
 * @param params - 处理参数（可选）
 * @returns 处理后的 URL
 */
export type ImageSrcProcessor<T = unknown> = (src: string, params?: T) => string

/**
 * 处理器参数类型
 * 支持字符串、对象、数组等
 */
export type ImageProcessorParams = string | Record<string, unknown> | unknown[]

/**
 * TOS 图像处理参数
 */
export interface TosProcessorParams {
    /** 目标宽度 */
    width?: number
    /** 目标高度 */
    height?: number
    /** 图片质量 (1-100) */
    quality?: number
    /** 输出格式 */
    format?: 'jpg' | 'png' | 'webp' | 'avif' | 'gif'
    /** 缩放模式 */
    mode?: 'fit' | 'fill' | 'pad'
}

// ============================================
// 内置处理器
// ============================================

/**
 * 将查询参数序列化为字符串
 */
function serializeParams(params: unknown): string {
    if (typeof params === 'string') {
        // 移除开头的 ? 或 &
        return params.replace(/^[?&]/, '')
    }
    if (Array.isArray(params)) {
        return params.join('&')
    }
    if (typeof params === 'object' && params !== null) {
        return Object.entries(params as Record<string, unknown>)
            .filter(([, value]) => value !== undefined && value !== null)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
            .join('&')
    }
    return ''
}

/**
 * append 处理器 - 追加查询参数
 * 智能处理 URL 中的 ? 和 &
 */
export const appendProcessor: ImageSrcProcessor<ImageProcessorParams> = (src, params) => {
    if (!params) return src
    
    const serialized = serializeParams(params)
    if (!serialized) return src
    
    // 检查 URL 是否已有查询参数
    const separator = src.includes('?') ? '&' : '?'
    return `${src}${separator}${serialized}`
}

/**
 * replace 处理器 - 替换 URL
 * 支持字符串模板或函数
 */
export const replaceProcessor: ImageSrcProcessor<string | ((src: string) => string)> = (src, params) => {
    if (!params) return src
    
    if (typeof params === 'function') {
        return params(src)
    }
    
    // 字符串模板，支持 {src} 占位符
    return params.replace(/\{src\}/g, src)
}

/**
 * TOS 处理器 - 火山引擎图像处理
 * 格式: ~tplv-xxx~image/resize,w_100,h_100/quality,q_80/format,webp
 */
export const tosProcessor: ImageSrcProcessor<TosProcessorParams> = (src, params) => {
    if (!params) return src
    
    const operations: string[] = []
    
    // 缩放
    if (params.width || params.height) {
        const resizeParts = ['resize']
        if (params.mode) resizeParts.push(`m_${params.mode}`)
        if (params.width) resizeParts.push(`w_${params.width}`)
        if (params.height) resizeParts.push(`h_${params.height}`)
        operations.push(resizeParts.join(','))
    }
    
    // 质量
    if (params.quality) {
        operations.push(`quality,q_${params.quality}`)
    }
    
    // 格式
    if (params.format) {
        operations.push(`format,${params.format}`)
    }
    
    if (operations.length === 0) return src
    
    // TOS URL 格式
    const separator = src.includes('?') ? '&' : '?'
    return `${src}${separator}x-tos-process=image/${operations.join('/')}`
}

/**
 * 内置处理器映射
 */
export const builtinProcessors: Record<string, ImageSrcProcessor<unknown>> = {
    append: appendProcessor as ImageSrcProcessor<unknown>,
    replace: replaceProcessor as ImageSrcProcessor<unknown>,
    tos: tosProcessor as ImageSrcProcessor<unknown>,
}

/**
 * 预设处理器名称类型
 */
export type BuiltinProcessorName = keyof typeof builtinProcessors

// ============================================
// Hook
// ============================================

export interface UseImageSrcOptions {
    /** 原始 URL */
    src: Ref<string> | string
    /** 处理器：预设名称或自定义函数 */
    processor?: Ref<string | ImageSrcProcessor | undefined> | string | ImageSrcProcessor
    /** 处理器参数 */
    params?: Ref<ImageProcessorParams | undefined> | ImageProcessorParams
}

export interface UseImageSrcReturn {
    /** 处理后的 URL */
    processedSrc: ComputedRef<string>
}

/**
 * 图片 URL 处理 Hook
 * 
 * @example
 * ```ts
 * // 使用预设处理器
 * const { processedSrc } = useImageSrc({
 *   src: 'https://example.com/image.jpg',
 *   processor: 'append',
 *   params: { width: 100 }
 * })
 * 
 * // 使用自定义处理器
 * const { processedSrc } = useImageSrc({
 *   src: imageUrl,
 *   processor: (src, params) => `${src}?custom=${params.id}`
 * })
 * ```
 */
export function useImageSrc(options: UseImageSrcOptions): UseImageSrcReturn {
    const processedSrc = computed(() => {
        // 获取原始值
        const srcValue = typeof options.src === 'string' ? options.src : options.src.value
        const processorValue = typeof options.processor === 'function' || typeof options.processor === 'string'
            ? options.processor
            : options.processor?.value
        const paramsValue = typeof options.params === 'object' && 'value' in (options.params as object)
            ? (options.params as Ref<ImageProcessorParams | undefined>).value
            : options.params as ImageProcessorParams | undefined
        
        // 无处理器但有参数时，默认使用 append
        const effectiveProcessor = processorValue ?? (paramsValue ? 'append' : undefined)
        
        if (!effectiveProcessor) {
            return srcValue
        }
        
        // 获取处理器函数
        let processorFn: ImageSrcProcessor<unknown>
        
        if (typeof effectiveProcessor === 'string') {
            processorFn = builtinProcessors[effectiveProcessor]
            if (!processorFn) {
                console.warn(`[useImageSrc] Unknown processor: ${effectiveProcessor}`)
                return srcValue
            }
        } else {
            processorFn = effectiveProcessor
        }
        
        // 执行处理
        try {
            return processorFn(srcValue, paramsValue) || srcValue
        } catch (e) {
            console.error('[useImageSrc] Processor error:', e)
            return srcValue
        }
    })
    
    return { processedSrc }
}

export default useImageSrc
