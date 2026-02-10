import type { ExtractPropTypes, PropType } from 'vue';
/**
 * 弹层变体
 * - `solid` - 实心背景（默认）
 * - `outline` - 透明背景 + 发光边框
 * - `neon` - 霓虹发光效果
 * - `ghost` - 极简风格，无装饰
 */
export type PopoverVariant = 'solid' | 'outline' | 'neon' | 'ghost';
/**
 * 弹层主题颜色类型
 */
export type PopoverType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
/**
 * 弹出位置
 * - 主轴：top | bottom | left | right
 * - 对齐：-start | 无 (居中) | -end
 */
export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
/**
 * 触发方式
 * - `hover` - 鼠标悬停
 * - `click` - 点击触发
 * - `focus` - 聚焦触发
 * - `manual` - 手动控制 (v-model)
 */
export type PopoverTrigger = 'hover' | 'click' | 'focus' | 'manual';
/**
 * CpPopover Props 定义
 *
 * @description 赛博朋克风格弹出提示层，用于文字提示或简单选择操作
 *
 * @example
 * ```vue
 * <!-- 基础 Tooltip -->
 * <CpPopover content="提示文字" tooltip>
 *   <CpButton>悬停查看</CpButton>
 * </CpPopover>
 *
 * <!-- Click Popover -->
 * <CpPopover title="系统通知" trigger="click">
 *   <template #content>
 *     <p>这是弹出层内容</p>
 *   </template>
 *   <CpButton>点击打开</CpButton>
 * </CpPopover>
 * ```
 *
 * @slots
 * - `default` - 触发器内容
 * - `content` - 弹层内容
 */
export declare const popoverProps: {
    /**
     * 是否显示弹层 (v-model)
     * @default false
     */
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    /**
     * 弹出位置
     * @default 'top'
     */
    readonly placement: {
        readonly type: PropType<PopoverPlacement>;
        readonly default: "top";
    };
    /**
     * 触发方式
     * @default 'hover'
     */
    readonly trigger: {
        readonly type: PropType<PopoverTrigger>;
        readonly default: "hover";
    };
    /**
     * 弹层内容 (快捷方式，优先级低于 #content 插槽)
     * @default ''
     */
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 弹层标题 (可选)
     * @default ''
     */
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否显示箭头
     * @default true
     */
    readonly showArrow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 弹层与触发器的偏移距离 (px)
     * @default 8
     */
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    /**
     * 是否禁用弹层
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 启用 Tooltip 模式 (简化样式、无标题)
     * @default false
     */
    readonly tooltip: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 打开延迟 (ms)，仅 hover 触发有效
     * @default 100
     */
    readonly openDelay: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    /**
     * 关闭延迟 (ms)，仅 hover 触发有效
     * @default 100
     */
    readonly closeDelay: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    /**
     * 弹层宽度
     * @default 'auto'
     */
    readonly width: {
        readonly type: PropType<number | string>;
        readonly default: "auto";
    };
    /**
     * 弹层最大宽度
     * @default 300
     */
    readonly maxWidth: {
        readonly type: PropType<number | string>;
        readonly default: 300;
    };
    /**
     * 点击弹层外部是否关闭
     * @default true
     */
    readonly closeOnClickOutside: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 按下 Escape 键是否关闭
     * @default true
     */
    readonly closeOnEscape: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * Teleport 目标
     * @default 'body'
     */
    readonly teleportTo: {
        readonly type: PropType<string | HTMLElement>;
        readonly default: "body";
    };
    /**
     * 弹层变体
     * @default 'solid'
     */
    readonly variant: {
        readonly type: PropType<PopoverVariant>;
        readonly default: "solid";
    };
    /**
     * 主题颜色类型
     * @default 'default'
     */
    readonly type: {
        readonly type: PropType<PopoverType>;
        readonly default: "default";
    };
    /**
     * 自定义主色调，优先于 type
     * 支持任意 CSS 颜色值
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
/**
 * CpPopover 事件定义
 */
export declare const popoverEmits: {
    /**
     * v-model 更新事件
     */
    'update:modelValue': (value: boolean) => boolean;
    /**
     * 弹层打开时触发
     */
    open: () => boolean;
    /**
     * 弹层关闭时触发
     */
    close: () => boolean;
};
export type PopoverEmits = typeof popoverEmits;
