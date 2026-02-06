import { type Ref, type ComputedRef } from 'vue';
/**
 * 图片 URL 处理器函数签名
 * @param src - 原始图片 URL
 * @param params - 处理参数（可选）
 * @returns 处理后的 URL
 */
export type ImageSrcProcessor<T = unknown> = (src: string, params?: T) => string;
/**
 * 处理器参数类型
 * 支持字符串、对象、数组等
 */
export type ImageProcessorParams = string | Record<string, unknown> | unknown[];
/**
 * TOS 图像处理参数
 */
export interface TosProcessorParams {
    /** 目标宽度 */
    width?: number;
    /** 目标高度 */
    height?: number;
    /** 图片质量 (1-100) */
    quality?: number;
    /** 输出格式 */
    format?: 'jpg' | 'png' | 'webp' | 'avif' | 'gif';
    /** 缩放模式 */
    mode?: 'fit' | 'fill' | 'pad';
}
/**
 * append 处理器 - 追加查询参数
 * 智能处理 URL 中的 ? 和 &
 */
export declare const appendProcessor: ImageSrcProcessor<ImageProcessorParams>;
/**
 * replace 处理器 - 替换 URL
 * 支持字符串模板或函数
 */
export declare const replaceProcessor: ImageSrcProcessor<string | ((src: string) => string)>;
/**
 * TOS 处理器 - 火山引擎图像处理
 * 格式: ~tplv-xxx~image/resize,w_100,h_100/quality,q_80/format,webp
 */
export declare const tosProcessor: ImageSrcProcessor<TosProcessorParams>;
/**
 * 内置处理器映射
 */
export declare const builtinProcessors: Record<string, ImageSrcProcessor<unknown>>;
/**
 * 预设处理器名称类型
 */
export type BuiltinProcessorName = keyof typeof builtinProcessors;
export interface UseImageSrcOptions {
    /** 原始 URL */
    src: Ref<string> | string;
    /** 处理器：预设名称或自定义函数 */
    processor?: Ref<string | ImageSrcProcessor | undefined> | string | ImageSrcProcessor;
    /** 处理器参数 */
    params?: Ref<ImageProcessorParams | undefined> | ImageProcessorParams;
}
export interface UseImageSrcReturn {
    /** 处理后的 URL */
    processedSrc: ComputedRef<string>;
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
export declare function useImageSrc(options: UseImageSrcOptions): UseImageSrcReturn;
export default useImageSrc;
