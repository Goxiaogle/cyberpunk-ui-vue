import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * 滑块尺寸
 * - `sm` - 小尺寸 (轨道高度 4px)
 * - `md` - 中等尺寸 (轨道高度 6px)，默认
 * - `lg` - 大尺寸 (轨道高度 8px)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type SliderSize = Size;
/**
 * 滑块形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type SliderShape = 'clip' | 'no-clip' | 'round';
/**
 * 刻度标记配置
 */
export interface SliderMarkConfig {
    /** 标签样式 */
    style?: Record<string, string>;
    /** 标签文本 */
    label?: string;
}
/**
 * 刻度标记映射
 */
export type SliderMarks = Record<number, string | SliderMarkConfig>;
/**
 * CpSlider 组件 Props 定义
 *
 * @description 赛博朋克风格滑块组件，用于在给定的数值范围内进行选择。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpSlider v-model="value" />
 *
 * <!-- 范围选择 -->
 * <CpSlider v-model="range" range />
 *
 * <!-- 带刻度标记 -->
 * <CpSlider v-model="value" :marks="{ 0: '0°C', 100: '100°C' }" />
 * ```
 */
export declare const sliderProps: {
    /**
     * 绑定值 (v-model)
     * 普通模式为 number，范围模式为 [number, number]
     * @default 0
     */
    readonly modelValue: {
        readonly type: PropType<number | [number, number]>;
        readonly default: 0;
    };
    /**
     * 最小值
     * @default 0
     */
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /**
     * 最大值
     * @default 100
     */
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    /**
     * 步长
     * @default 1
     */
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    /**
     * 滑块尺寸
     * @default 'md'
     */
    readonly size: {
        readonly type: PropType<SliderSize>;
        readonly default: "md";
    };
    /**
     * 滑块形状
     * - `clip` - 切角样式（赛博朋克特色）
     * - `no-clip` - 直角矩形
     * - `round` - 圆角矩形
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<SliderShape>;
        readonly default: "clip";
    };
    /**
     * 是否禁用
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否为范围选择模式
     * 开启后 modelValue 类型变为 [number, number]
     * @default false
     */
    readonly range: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否显示数值提示
     * @default true
     */
    readonly showTooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 是否显示刻度点
     * 仅在 step 大于 1 时有效
     * @default false
     */
    readonly showStops: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 标记刻度
     * key 为数值，value 为标签文本或配置对象
     * @example `{ 0: '低', 50: '中', 100: '高' }`
     */
    readonly marks: {
        readonly type: PropType<SliderMarks>;
        readonly default: undefined;
    };
    /**
     * 自定义颜色
     * 传入有效 CSS 颜色值，覆盖默认的主题色
     * @default ''
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否垂直模式
     * @default false
     */
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 滑块高度（垂直模式必需）
     * @default undefined
     */
    readonly height: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    /**
     * 格式化 tooltip 显示内容
     * @param value - 当前值
     * @returns 格式化后的字符串
     */
    readonly formatTooltip: {
        readonly type: PropType<(value: number) => string>;
        readonly default: undefined;
    };
};
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
/**
 * CpSlider 组件事件定义
 *
 * @event update:modelValue - 值变化时触发 (用于 v-model)
 * @event change - 值改变且释放滑块时触发
 * @event input - 拖动过程中实时触发
 */
export declare const sliderEmits: {
    /**
     * 值变化时触发 (v-model 绑定)
     * @param value - 新的值
     */
    'update:modelValue': (value: number | [number, number]) => boolean;
    /**
     * 值改变且释放滑块时触发
     * @param value - 确认的值
     */
    change: (value: number | [number, number]) => boolean;
    /**
     * 拖动过程中实时触发
     * @param value - 当前值
     */
    input: (value: number | [number, number]) => boolean;
};
export type SliderEmits = typeof sliderEmits;
