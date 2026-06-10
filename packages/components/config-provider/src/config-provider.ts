import type { ExtractPropTypes, PropType } from 'vue'
import type { ThemeMode, ThemeType } from '@cyberpunk-vue/constants'
export type { ThemeMode, ThemeType }

/**
 * 组件默认值配置类型
 *
 * 键为组件名（不带前缀，如 `button`、`input`），
 * 值为该组件的 props 默认值对象
 *
 * @example
 * ```ts
 * const defaults: ComponentDefaults = {
 *   button: { size: 'lg', type: 'primary' },
 *   input: { size: 'lg', variant: 'filled' }
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 组件默认值可以是任意类型
export type ComponentDefaults = Record<string, Record<string, any>>

/**
 * 主题变量覆盖配置
 *
 * 键名支持 CSS 变量名或简写 token 名：
 * - `--cp-color-primary`
 * - `color-primary`
 * - `colorPrimary`
 */
export type ThemeOverrides = Record<string, string | number>

/**
 * CpConfigProvider 组件 Props 定义
 *
 * @description 全局配置提供者组件，用于设置组件库的全局默认值和主题。
 * 通常放在应用根组件中，包裹所有子组件。
 *
 * @example
 * ```vue
 * <template>
 *   <CpConfigProvider
 *     :defaults="{
 *       button: { size: 'lg', variant: 'neon' },
 *       input: { variant: 'filled' }
 *     }"
 *     theme="dark"
 *   >
 *     <App />
 *   </CpConfigProvider>
 * </template>
 * ```
 *
 * @slots
 * - `default` - 被配置包裹的子组件
  * @category 基础组件
 * @displayName CpConfigProvider 全局配置
 */
export const configProviderProps = {
    /**
     * 组件默认值配置
     *
     * 统一设置组件的 props 默认值，避免在每个组件上重复配置。
     * 格式: `{ componentName: { propName: value } }`
     *
     * 组件名使用小写驼峰命名（不带 `Cp` 前缀）
     *
     * @default {}
     * @example
     * ```vue
     * <CpConfigProvider :defaults="{
     *   button: { size: 'lg', type: 'primary' },
     *   input: { size: 'lg', clearable: true }
     * }">
     *   <!-- 内部所有按钮默认 size='lg' type='primary' -->
     *   <CpButton>确认</CpButton>
     * </CpConfigProvider>
     * ```
     */
    defaults: {
        type: Object as PropType<ComponentDefaults>,
        default: () => ({})
    },
    /**
     * 主题设置
     *
     * - `dark` - 深色主题，赛博朋克风格（默认）
     * - `light` - 浅色主题
     *
     * @default 'dark'
     * @example `<CpConfigProvider theme="light" />`
     */
    theme: {
        type: String as PropType<ThemeMode>,
        default: 'dark'
    },
    /**
     * 主题 CSS 变量覆盖
     *
     * 用于按作用域覆盖组件库设计 token。传入简写 token 名时会自动转换为
     * `--cp-*` CSS 变量。
     *
     * @default {}
     * @example
     * ```vue
     * <CpConfigProvider :theme-overrides="{ colorPrimary: '#ff6bcb', radiusMd: '10px' }">
     *   <App />
     * </CpConfigProvider>
     * ```
     */
    themeOverrides: {
        type: Object as PropType<ThemeOverrides>,
        default: () => ({})
    },
    /**
     * 是否同步主题和变量到 document.documentElement
     *
     * 根级 Provider 建议开启，以影响 body 背景等全局样式；局部嵌套 Provider
     * 可以关闭，仅让配置作用于当前插槽子树。
     *
     * @default true
     */
    syncDocument: {
        type: Boolean,
        default: true
    },
    /**
     * Provider 渲染标签
     *
     * 默认使用 `div` 并设置 `display: contents`，不会产生额外布局盒。
     *
     * @default 'div'
     */
    tag: {
        type: String,
        default: 'div'
    }
} as const

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
