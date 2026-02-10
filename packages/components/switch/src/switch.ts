import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 开关尺寸
 * - `sm` - 小尺寸 (16px 高)
 * - `md` - 中等尺寸 (20px 高)，默认
 * - `lg` - 大尺寸 (24px 高)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type SwitchSize = Size

/**
 * 开关类型（颜色预设）
 * - `primary` - 主色调 (赛博青)
 * - `success` - 成功 (霓虹绿)
 * - `warning` - 警告 (橙黄)
 * - `error` - 错误/危险 (洋红)
 * - `info` - 信息 (紫罗兰)
 */
export type SwitchType = 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * CpSwitch 组件 Props 定义
 *
 * @description 赛博朋克风格开关组件，支持异步切换、内嵌文字、自定义颜色。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpSwitch v-model="enabled" />
 *
 * <!-- 内嵌文字 -->
 * <CpSwitch v-model="enabled" active-text="ON" inactive-text="OFF" />
 *
 * <!-- 异步切换 -->
 * <CpSwitch v-model="enabled" :before-change="handleConfirm" />
 * ```
 *
 * @exposes
 * - `inputRef` - 原生 input 元素引用
 */
export const switchProps = {
    /**
     * 绑定值 (v-model)
     * @default false
     */
    modelValue: {
        type: Boolean,
        default: false,
    },
    /**
     * 开关尺寸
     * @default 'md'
     * @example `<CpSwitch size="lg" />`
     */
    size: {
        type: [String, Number] as PropType<SwitchSize>,
        default: 'md',
    },
    /**
     * 开关类型（颜色预设）
     * 设置后会使用主题颜色，优先级低于 color 属性
     * @default 'primary'
     * @example `<CpSwitch type="success" />`
     */
    type: {
        type: String as PropType<SwitchType>,
        default: 'primary',
    },
    /**
     * 是否禁用开关
     * 禁用后不可切换，样式变为灰色
     * @default false
     */
    disabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否加载中
     * 加载中状态时显示 loading 动画，且不可切换
     * @default false
     */
    loading: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义选中状态颜色
     * 传入有效 CSS 颜色值，覆盖默认的选中态颜色
     * @default ''
     * @example `<CpSwitch color="#ff00ff" />`
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 自定义未选中状态颜色
     * 传入有效 CSS 颜色值，覆盖默认的未选中态颜色
     * @default ''
     * @example `<CpSwitch inactive-color="#666" />`
     */
    inactiveColor: {
        type: String,
        default: '',
    },
    /**
     * 强制指定宽度
     * @default ''
     */
    width: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    /**
     * 是否适应文字宽度
     * 开启后，Switch 宽度将随内部文字内容自适应撑开（支持长文本）
     * @default false
     */
    fitText: {
        type: Boolean,
        default: false,
    },
    /**
     * 选中时内嵌显示的文字
     * @default ''
     * @example `<CpSwitch active-text="ON" />`
     */
    activeText: {
        type: String,
        default: '',
    },
    /**
     * 未选中时内嵌显示的文字
     * @default ''
     * @example `<CpSwitch inactive-text="OFF" />`
     */
    inactiveText: {
        type: String,
        default: '',
    },
    /**
     * 切换前钩子，返回 false 或 Promise reject 时阻止切换
     * @example
     * ```ts
     * const beforeChange = () => {
     *   return confirm('确认切换？')
     * }
     * ```
     */
    beforeChange: {
        type: Function as PropType<() => Promise<boolean> | boolean>,
        default: undefined,
    },
    /**
     * 原生 name 属性
     * 用于表单提交
     * @default ''
     */
    name: {
        type: String,
        default: '',
    },
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>

/**
 * CpSwitch 组件事件定义
 *
 * @event update:modelValue - 值变化时触发 (用于 v-model)
 * @event change - 值变化时触发
 */
export const switchEmits = {
    /**
     * 值变化时触发 (v-model 绑定)
     * @param value - 新的开关状态
     */
    'update:modelValue': (value: boolean) => typeof value === 'boolean',

    /**
     * 值变化时触发
     * @param value - 新的开关状态
     */
    change: (value: boolean) => typeof value === 'boolean',
}

export type SwitchEmits = typeof switchEmits
