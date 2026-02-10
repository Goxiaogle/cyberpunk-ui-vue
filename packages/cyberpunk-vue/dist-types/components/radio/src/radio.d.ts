import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * 单选框尺寸
 * - `sm` - 小尺寸 (14px)
 * - `md` - 中等尺寸 (18px)，默认
 * - `lg` - 大尺寸 (22px)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type RadioSize = Size;
/**
 * 单选框类型（颜色预设）
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type RadioType = 'primary' | 'success' | 'warning' | 'error' | 'info';
/**
 * 单选框值类型
 */
export type RadioValueType = string | number | boolean;
/**
 * CpRadio 组件 Props 定义
 *
 * @description 赛博朋克风格单选框组件，支持分组、自定义颜色、多种尺寸。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpRadio v-model="picked" value="A">选项 A</CpRadio>
 *
 * <!-- 分组使用 -->
 * <CpRadioGroup v-model="picked">
 *   <CpRadio value="A">选项 A</CpRadio>
 *   <CpRadio value="B">选项 B</CpRadio>
 * </CpRadioGroup>
 * ```
 */
export declare const radioProps: {
    /**
     * 绑定值 (v-model)
     */
    readonly modelValue: {
        readonly type: PropType<RadioValueType>;
        readonly default: undefined;
    };
    /**
     * 此单选框对应的值
     * 在 RadioGroup 中用于标识选中项
     * @example `<CpRadio value="option1">选项1</CpRadio>`
     */
    readonly value: {
        readonly type: PropType<RadioValueType>;
        readonly default: undefined;
    };
    /**
     * 显示标签（也作为默认 slot fallback）
     */
    readonly label: {
        readonly type: PropType<string | number>;
        readonly default: "";
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
     * 单选框尺寸
     * @default 'md'
     */
    readonly size: {
        readonly type: PropType<RadioSize>;
        readonly default: "md";
    };
    /**
     * 单选框类型（颜色预设）
     * @default 'primary'
     */
    readonly type: {
        readonly type: PropType<RadioType>;
        readonly default: "primary";
    };
    /**
     * 自定义选中颜色
     * 优先级高于 type
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否启用霓虹辉光效果
     * @default true
     */
    readonly glow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 自定义中间装饰块（菱形点）颜色
     * 用于在暗色背景下提高可见度
     * 不传时默认跟随当前 type 的文字颜色（参考 Button 文字颜色）
     */
    readonly dotColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否使用边框样式
     * 开启后整个标签区域带有边框
     * @default false
     */
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 原生 name 属性
     */
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type RadioProps = ExtractPropTypes<typeof radioProps>;
/**
 * CpRadio 组件事件定义
 */
export declare const radioEmits: {
    /**
     * 值变化时触发 (v-model 绑定)
     */
    'update:modelValue': (value: RadioValueType) => value is string | number | boolean;
    /**
     * 值变化时触发
     */
    change: (value: RadioValueType) => value is string | number | boolean;
};
export type RadioEmits = typeof radioEmits;
