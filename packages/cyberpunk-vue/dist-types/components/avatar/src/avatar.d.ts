import type { ExtractPropTypes, PropType, Component } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * 头像预设尺寸
 * - `xs` - 24px
 * - `sm` - 32px
 * - `md` - 40px（默认）
 * - `lg` - 48px
 * - `xl` - 64px
 * - 也可传入数字 (px) 或带单位字符串 (如 '5rem')
 */
export type AvatarSize = Size | 'xs' | 'xl';
/**
 * 头像形状模式
 * - `circle` - 圆形（默认）
 * - `square` - 圆角方形
 * - `clip` - 机甲切角
 */
export type AvatarShape = 'circle' | 'square' | 'clip';
/**
 * CpAvatar 组件 Props 定义
 *
 * @description 赛博朋克风格头像组件，支持多种尺寸和形状。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpAvatar src="/avatar.jpg" />
 *
 * <!-- 预设尺寸 -->
 * <CpAvatar src="/avatar.jpg" size="lg" />
 *
 * <!-- 自定义尺寸 -->
 * <CpAvatar src="/avatar.jpg" :size="80" />
 *
 * <!-- 形状 -->
 * <CpAvatar src="/avatar.jpg" shape="square" />
 * ```
 */
export declare const avatarProps: {
    /**
     * 头像图片地址
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
     * 头像尺寸
     * 可传入预设值 'xs' | 'sm' | 'md' | 'lg' | 'xl'
     * 或数字（像素）
     * @default 'md'
     */
    readonly size: {
        readonly type: PropType<AvatarSize>;
        readonly default: "md";
    };
    /**
     * 头像形状
     * - `circle`: 圆形（默认）
     * - `square`: 圆角方形
     * - `clip`: 机甲切角
     * @default 'circle'
     */
    readonly shape: {
        readonly type: PropType<AvatarShape>;
        readonly default: "circle";
    };
    /**
     * 默认图标（无图片时显示）
     * 传入图标组件
     */
    readonly icon: {
        readonly type: PropType<Component>;
        readonly default: undefined;
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
     * 图片适应模式
     * @default 'cover'
     */
    readonly fit: {
        readonly type: PropType<"cover" | "contain" | "fill">;
        readonly default: "cover";
    };
    /**
     * URL 预处理器
     * 可传入预设处理器名称（append/replace/tos）或自定义函数
     * 函数签名: (src: string, params?: T) => string
     * @example
     * ```vue
     * <!-- 使用预设处理器 -->
     * <CpAvatar src="..." src-processor="append" :processor-params="{ a: 'xxx' }" />
     *
     * <!-- 使用自定义函数 -->
     * <CpAvatar src="..." :src-processor="(src) => `${src}?custom`" />
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
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
/**
 * CpAvatar 组件事件定义
 */
export declare const avatarEmits: {
    /**
     * 图片加载成功时触发
     */
    load: (event: Event) => boolean;
    /**
     * 图片加载失败时触发
     */
    error: (event: Event) => boolean;
};
export type AvatarEmits = typeof avatarEmits;
/**
 * 尺寸预设映射（px）
 */
export declare const avatarSizeMap: Record<string, number>;
