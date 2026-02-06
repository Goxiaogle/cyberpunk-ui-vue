import type { ExtractPropTypes, PropType } from 'vue'
import type { ThemeType } from '@cyberpunk-vue/constants'
export type { ThemeType }

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
        type: String as PropType<ThemeType>,
        default: 'dark'
    }
} as const

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
