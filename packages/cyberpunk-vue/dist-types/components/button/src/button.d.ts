import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * 按钮颜色类型
 * - `primary` - 主要操作，强调色（赛博蓝）
 * - `success` - 成功/确认操作（霓虹绿）
 * - `warning` - 警告/需注意的操作（赛博黄）
 * - `error` - 危险/删除操作（霓虹红）
 * - `info` - 信息性操作（中性蓝）
 * - `default` - 默认样式，中性色
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default';
/**
 * 按钮尺寸
 * - `sm` - 小尺寸 (24px 高)
 * - `md` - 中等尺寸 (32px 高)，默认
 * - `lg` - 大尺寸 (40px 高)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type ButtonSize = Size;
/**
 * 按钮变体/形态
 * - `solid` - 实心填充，最强视觉权重
 * - `outline` - 边框样式，次级操作
 * - `ghost` - 透明背景，悬停显示
 * - `neon` - 霓虹发光效果，高亮操作
 * - `semi` - 半透明背景，柔和风格
 */
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'neon' | 'semi';
/**
 * CpButton 组件 Props 定义
 *
 * @description 赛博朋克风格按钮组件，支持多种颜色、尺寸、形态变体。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpButton type="primary">确认</CpButton>
 *
 * <!-- 带图标 -->
 * <CpButton type="success">
 *   <template #prefix><CpIcon icon="mdi:check" /></template>
 *   保存
 * </CpButton>
 *
 * <!-- 加载状态 -->
 * <CpButton :loading="isLoading" loading-placeholder>提交</CpButton>
 *
 * <!-- 自定义颜色 -->
 * <CpButton color="#ff00ff">自定义</CpButton>
 * ```
 *
 * @slots
 * - `default` - 按钮文本内容
 * - `prefix` - 前缀图标插槽，加载时自动隐藏
 * - `suffix` - 后缀图标插槽
 */
export declare const buttonProps: {
    /**
     * 按钮颜色类型
     * @default 'default'
     * @example `<CpButton type="primary">主要按钮</CpButton>`
     */
    readonly type: {
        readonly type: PropType<ButtonType>;
        readonly default: "default";
    };
    /**
     * 按钮尺寸
     * @default 'md'
     * @example `<CpButton size="lg">大按钮</CpButton>`
     */
    readonly size: {
        readonly type: PropType<ButtonSize>;
        readonly default: "md";
    };
    /**
     * 按钮变体/形态
     * @default 'solid'
     * @example `<CpButton variant="neon">霓虹按钮</CpButton>`
     */
    readonly variant: {
        readonly type: PropType<ButtonVariant>;
        readonly default: "solid";
    };
    /**
     * 是否禁用按钮
     * 禁用后按钮不可点击，样式变为灰色
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否显示加载状态
     * 加载时会显示 Loading 动画，按钮不可点击
     * @default false
     */
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否为块级按钮
     * 块级按钮会占满父容器宽度
     * @default false
     */
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 原生 button type 属性
     * - `button` - 普通按钮（默认）
     * - `submit` - 表单提交按钮
     * - `reset` - 表单重置按钮
     * @default 'button'
     */
    readonly nativeType: {
        readonly type: PropType<"button" | "submit" | "reset">;
        readonly default: "button";
    };
    /**
     * 自定义按钮颜色
     * 传入有效 CSS 颜色值会覆盖 `type` 的预设颜色
     * @default ''
     * @example `<CpButton color="#ff00ff">紫色按钮</CpButton>`
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 按钮形状
     * - `clip` - 切角样式（默认，赛博朋克特色）
     * - `no-clip` - 直角矩形
     * - `round` - 圆角矩形
     * - `circle` - 胶囊形状（完全圆角）
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<"clip" | "no-clip" | "round" | "circle">;
        readonly default: "clip";
    };
    /**
     * 是否使用虚线边框
     * 仅在 `variant="outline"` 时生效
     * @default false
     */
    readonly dashed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否为 Loading 预留空间
     * 开启后按钮宽度固定，Loading 出现/消失时不会导致布局抖动
     * @default false
     * @example `<CpButton :loading="loading" loading-placeholder>提交</CpButton>`
     */
    readonly loadingPlaceholder: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 加载时是否同时禁用按钮
     * 设为 true 后，loading 状态下按钮会显示禁用样式
     * @default false
     */
    readonly loadingDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 自定义文字颜色
     * 传入有效 CSS 颜色值会覆盖默认的文字颜色
     * @default ''
     * @example `<CpButton type="success" text-color="#000">黑色文字</CpButton>`
     */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 图标组件 (用于纯图标按钮)
     * 传入图标组件后按钮将变为正方形图标按钮
     * @default undefined
     * @example `<CpButton :icon="MdiHome" />`
     */
    readonly icon: {
        readonly type: PropType<object>;
        readonly default: undefined;
    };
    /**
     * 图标颜色
     * 用于控制所有图标（icon、prefixIcon、suffixIcon）的默认颜色
     * 优先级：prefixIconColor/suffixIconColor > iconColor > textColor
     * @default ''
     * @example `<CpButton :icon="MdiHome" icon-color="#ff0000" />`
     */
    readonly iconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 前缀图标组件
     * 快捷传入前缀图标，不使用 #prefix slot
     * @default undefined
     * @example `<CpButton :prefix-icon="MdiHome">首页</CpButton>`
     */
    readonly prefixIcon: {
        readonly type: PropType<object>;
        readonly default: undefined;
    };
    /**
     * 后缀图标组件
     * 快捷传入后缀图标，不使用 #suffix slot
     * @default undefined
     * @example `<CpButton :suffix-icon="MdiArrowRight">下一步</CpButton>`
     */
    readonly suffixIcon: {
        readonly type: PropType<object>;
        readonly default: undefined;
    };
    /**
     * 前缀图标颜色
     * 优先级：prefixIconColor > iconColor > textColor
     * @default ''
     * @example `<CpButton :prefix-icon="MdiHome" prefix-icon-color="#00f0ff">首页</CpButton>`
     */
    readonly prefixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 后缀图标颜色
     * 优先级：suffixIconColor > iconColor > textColor
     * @default ''
     * @example `<CpButton :suffix-icon="MdiArrowRight" suffix-icon-color="#00ff00">下一步</CpButton>`
     */
    readonly suffixIconColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 图标尺寸
     * 优先级：prefixIconSize/suffixIconSize > iconSize > (与按钮尺寸同步)
     * @default ''
     * @example `<CpButton :icon="MdiHome" icon-size="24px" />`
     */
    readonly iconSize: {
        readonly type: PropType<ButtonSize>;
        readonly default: "";
    };
    /**
     * 前缀图标尺寸
     * 优先级：prefixIconSize > iconSize > (与按钮尺寸同步)
     * @default ''
     */
    readonly prefixIconSize: {
        readonly type: PropType<ButtonSize>;
        readonly default: "";
    };
    /**
     * 后缀图标尺寸
     * 优先级：suffixIconSize > iconSize > (与按钮尺寸同步)
     * @default ''
     */
    readonly suffixIconSize: {
        readonly type: PropType<ButtonSize>;
        readonly default: "";
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
/**
 * CpButton 组件事件定义
 *
 * @event click - 点击按钮时触发（disabled 或 loading 状态下不触发）
 */
export declare const buttonEmits: {
    /**
     * 点击按钮时触发
     * @param evt - 原生 MouseEvent 对象
     * @example `<CpButton @click="handleClick">点击</CpButton>`
     */
    click: (evt: MouseEvent) => boolean;
};
export type ButtonEmits = typeof buttonEmits;
