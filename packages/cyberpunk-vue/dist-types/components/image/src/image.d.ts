import type { ExtractPropTypes, PropType } from 'vue';
import type { DurationValue } from '@cyberpunk-vue/hooks';
/**
 * 图片适应模式
 * - `contain` - 保持比例，完整显示
 * - `cover` - 保持比例，填满容器（默认）
 * - `fill` - 拉伸填满
 * - `none` - 原始尺寸
 * - `scale-down` - 保持比例，缩小到合适尺寸
 */
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
/**
 * 图片形状模式
 * - `clip` - 机甲切角（默认）
 * - `no-clip` - 标准直角
 * - `round` - 圆角
 * - `circle` - 圆形
 */
export type ImageShape = 'clip' | 'no-clip' | 'round' | 'circle';
/**
 * CpImage 组件 Props 定义
 *
 * @description 赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpImage src="/image.jpg" alt="示例图片" />
 *
 * <!-- 懒加载 -->
 * <CpImage src="/image.jpg" lazy />
 *
 * <!-- 带回退图片 -->
 * <CpImage src="/image.jpg" fallback-src="/fallback.jpg" />
 *
 * <!-- 圆形头像 -->
 * <CpImage src="/avatar.jpg" shape="circle" :width="64" :height="64" />
 * ```
 */
export declare const imageProps: {
    /**
     * 图片源地址
     * @default ''
     */
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 图片描述/替代文本
     * @default ''
     */
    readonly alt: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 图片适应模式
     * 设置图片如何适应容器，与 CSS object-fit 一致
     * @default 'cover'
     */
    readonly fit: {
        readonly type: PropType<ImageFit>;
        readonly default: "cover";
    };
    /**
     * 图片形状模式
     * - `clip`: 机甲切角效果（默认）
     * - `no-clip`: 标准直角
     * - `round`: 圆角效果
     * - `circle`: 圆形
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<ImageShape>;
        readonly default: "clip";
    };
    /**
     * 是否懒加载
     * 开启后图片进入可视区域时才加载
     * @default false
     */
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 预览大图地址
     * 为未来的图片预览功能预留
     * @default ''
     */
    readonly previewSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 加载失败时的回退图片地址
     * @default ''
     */
    readonly fallbackSrc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 图片宽度
     * 可传入数字（像素）或字符串（CSS 值）
     * @default ''
     */
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: "";
    };
    /**
     * 图片高度
     * 可传入数字（像素）或字符串（CSS 值）
     * @default ''
     */
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: "";
    };
    /**
     * 颜色类型（影响装饰块颜色）
     * @default 'primary'
     */
    readonly type: {
        readonly type: PropType<"default" | "primary" | "success" | "warning" | "error" | "info">;
        readonly default: "primary";
    };
    /**
     * 自定义装饰块颜色
     * 传入有效 CSS 颜色值，覆盖 type 的颜色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否显示装饰块（仅 clip 形状生效）
     * @default true
     */
    readonly showDecor: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 是否开启 hover 动画效果
     * 开启后鼠标悬停时有缩放和发光效果
     * @default false
     */
    readonly hoverable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * Hover 动画模式
     * - `scale` - 整体放大（默认）
     * - `zoom` - 容器不变，仅图片放大（溢出裁切）
     * @default 'scale'
     */
    readonly hoverMode: {
        readonly type: PropType<"scale" | "zoom">;
        readonly default: "scale";
    };
    /**
     * Hover 动画持续时间
     * 数字默认毫秒 (ms)，字符串可指定单位 (如 '0.3s' 或 '300ms')
     * @default 300
     */
    readonly hoverDuration: {
        readonly type: PropType<DurationValue>;
        readonly default: 300;
    };
    /**
     * URL 预处理器
     * 可传入预设处理器名称（append/replace/tos）或自定义函数
     * 函数签名: (src: string, params?: T) => string
     * @example
     * ```vue
     * <!-- 使用预设处理器 -->
     * <CpImage src="..." src-processor="append" :processor-params="{ a: 'xxx' }" />
     *
     * <!-- 使用自定义函数 -->
     * <CpImage src="..." :src-processor="(src) => `${src}?custom`" />
     * ```
     */
    readonly srcProcessor: {
        readonly type: PropType<string | ((src: string, params?: unknown) => string)>;
        readonly default: undefined;
    };
    /**
     * 处理器参数
     * 传递给 srcProcessor 的参数，类型由处理器决定
     * 若未指定 srcProcessor 但传入了此参数，默认使用 append 处理器
     */
    readonly processorParams: {
        readonly type: PropType<string | Record<string, unknown> | unknown[]>;
        readonly default: undefined;
    };
    /**
     * 是否允许拖拽图片
     * 默认禁止拖拽，设为 true 开启
     * @default false
     */
    readonly draggable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export type ImageProps = ExtractPropTypes<typeof imageProps>;
/**
 * CpImage 组件事件定义
 *
 * @event load - 图片加载成功时触发
 * @event error - 图片加载失败时触发
 */
export declare const imageEmits: {
    /**
     * 图片加载成功时触发
     * @param event - 原生加载事件
     */
    load: (event: Event) => boolean;
    /**
     * 图片加载失败时触发
     * @param event - 原生错误事件
     */
    error: (event: Event) => boolean;
};
export type ImageEmits = typeof imageEmits;
