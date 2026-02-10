import type { ExtractPropTypes, PropType } from 'vue';
import type { Size } from '@cyberpunk-vue/hooks';
/**
 * 输入框类型
 * - `text` - 普通文本输入（默认）
 * - `password` - 密码输入，内容会被遮蔽
 * - `number` - 数字输入，返回值为 number 类型
 * - `email` - 邮箱输入，带格式验证
 * - `tel` - 电话号码输入
 * - `url` - URL 地址输入，带格式验证
 */
export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
/**
 * 输入框尺寸
 * - `sm` - 小尺寸 (28px 高)
 * - `md` - 中等尺寸 (36px 高)，默认
 * - `lg` - 大尺寸 (44px 高)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type InputSize = Size;
/**
 * 输入框形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type InputShape = 'clip' | 'no-clip' | 'round';
/**
 * 输入框变体
 * - `outline` - 边框样式（默认），透明背景
 * - `filled` - 填充样式，带背景色
 * - `ghost` - 幽灵样式，无边框无背景，聚焦时显示
 */
export type InputVariant = 'outline' | 'filled' | 'ghost';
/**
 * CpInput 组件 Props 定义
 *
 * @description 赛博朋克风格输入框组件，支持多种尺寸、形态变体、可清空功能。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpInput v-model="value" placeholder="请输入" />
 *
 * <!-- 带图标 -->
 * <CpInput v-model="search">
 *   <template #prefix><CpIcon icon="mdi:magnify" /></template>
 * </CpInput>
 *
 * <!-- 可清空 -->
 * <CpInput v-model="value" clearable @clear="onClear" />
 *
 * <!-- 密码输入 -->
 * <CpInput v-model="password" type="password" />
 * ```
 *
 * @slots
 * - `prefix` - 输入框前缀，常用于放置图标
 * - `suffix` - 输入框后缀，常用于放置图标或按钮
 *
 * @exposes
 * - `focus()` - 使输入框获取焦点
 * - `blur()` - 使输入框失去焦点
 * - `inputRef` - 原生 input 元素引用
 */
export declare const inputProps: {
    /**
     * 绑定值 (v-model)
     * 支持字符串或数字，type="number" 时返回 number 类型
     * @default ''
     */
    readonly modelValue: {
        readonly type: PropType<string | number>;
        readonly default: "";
    };
    /**
     * 输入类型
     * @default 'text'
     * @example `<CpInput type="password" />`
     */
    readonly type: {
        readonly type: PropType<InputType>;
        readonly default: "text";
    };
    /**
     * 输入框尺寸
     * @default 'md'
     * @example `<CpInput size="lg" />`
     */
    readonly size: {
        readonly type: PropType<InputSize>;
        readonly default: "md";
    };
    /**
     * 输入框形状
     * - `clip` - 切角样式（赛博朋克特色）
     * - `no-clip` - 直角矩形
     * - `round` - 圆角矩形
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<InputShape>;
        readonly default: "clip";
    };
    /**
     * 输入框变体
     * - `outline` - 边框样式
     * - `filled` - 填充背景
     * - `ghost` - 无边框无背景
     * @default 'outline'
     */
    readonly variant: {
        readonly type: PropType<InputVariant>;
        readonly default: "outline";
    };
    /**
     * 占位文本
     * 输入框为空时显示的提示文本
     * @default ''
     */
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否禁用输入框
     * 禁用后不可编辑，样式变为灰色
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否只读
     * 只读状态下内容可选中复制但不可编辑
     * @default false
     */
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否可清空
     * 开启后，有内容时输入框右侧显示清空按钮
     * @default false
     * @example `<CpInput v-model="value" clearable />`
     */
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 自定义聚焦颜色
     * 传入有效 CSS 颜色值，覆盖默认的聚焦边框颜色
     * @default ''
     * @example `<CpInput color="#ff00ff" />`
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 最大输入长度限制
     * @default undefined (无限制)
     * @example `<CpInput :maxlength="50" />`
     */
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    /**
     * 是否自动获取焦点
     * 组件挂载后自动调用 focus()
     * @default false
     */
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否显示密码切换按钮
     * 仅在 type="password" 时有效
     * @default false
     * @example `<CpInput type="password" show-password />`
     */
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 是否显示字数统计
     * 需配合 maxlength 使用，显示 "当前/最大" 格式
     * @default false
     * @example `<CpInput :maxlength="100" show-word-limit />`
     */
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 未聚焦状态边框颜色
     * 传入有效 CSS 颜色值，覆盖默认的 inactive 边框颜色
     * @default ''
     * @example `<CpInput inactive-border-color="#666" />`
     */
    readonly inactiveBorderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * Placeholder 文字颜色
     * 传入有效 CSS 颜色值，覆盖默认的 placeholder 颜色
     * @default ''
     * @example `<CpInput placeholder-color="#888" />`
     */
    readonly placeholderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 文字颜色
     * 传入有效 CSS 颜色值，覆盖默认的文字颜色
     * @default ''
     * @example `<CpInput text-color="#00ff00" />`
     */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 清除动画持续时间 (ms)
     * 控制点击清空按钮时文字消失动画的速度
     * @default 150
     * @example `<CpInput :clear-duration="300" />`
     */
    readonly clearDuration: {
        readonly type: NumberConstructor;
        readonly default: 150;
    };
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
/**
 * CpInput 组件事件定义
 *
 * @event update:modelValue - 值变化时触发 (用于 v-model)
 * @event input - 输入时触发，提供值和原生事件
 * @event change - 值确认变化时触发（失焦或回车）
 * @event focus - 获取焦点时触发
 * @event blur - 失去焦点时触发
 * @event clear - 点击清空按钮时触发
 */
export declare const inputEmits: {
    /**
     * 值变化时触发 (v-model 绑定)
     * @param value - 新的输入值
     */
    'update:modelValue': (value: string | number) => boolean;
    /**
     * 输入时触发
     * @param value - 新的输入值
     * @param event - 原生 input 事件对象
     * @example `<CpInput @input="(val, e) => console.log(val)" />`
     */
    input: (value: string | number, event: Event) => boolean;
    /**
     * 值确认变化时触发
     * 仅在失去焦点且值有变化时触发
     * @param value - 确认的输入值
     */
    change: (value: string | number) => boolean;
    /**
     * 获取焦点时触发
     * @param event - 原生 FocusEvent 对象
     */
    focus: (event: FocusEvent) => boolean;
    /**
     * 失去焦点时触发
     * @param event - 原生 FocusEvent 对象
     */
    blur: (event: FocusEvent) => boolean;
    /**
     * 点击清空按钮时触发
     * 触发后 modelValue 会被设为空字符串
     * @example `<CpInput clearable @clear="onClear" />`
     */
    clear: () => boolean;
};
export type InputEmits = typeof inputEmits;
