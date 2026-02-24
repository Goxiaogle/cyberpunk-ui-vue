import { withInstall } from '@cyberpunk-vue/components/utils'
import ConfigProvider from './src/config-provider.vue'

/**
 * CpConfigProvider 全局配置提供者
 *
 * 用于设置组件库的全局默认值和主题，通常放在应用根组件中包裹所有子组件。
 *
 * @example
 * ```vue
 * <CpConfigProvider
 *   :defaults="{ button: { size: 'lg' }, input: { clearable: true } }"
 *   theme="dark"
 * >
 *   <App />
 * </CpConfigProvider>
 * ```
 *
 * @see {@link ConfigProviderProps} 查看所有可用属性
 *
 * @slot default - 被配置包裹的子组件
 */
export const CpConfigProvider = withInstall(ConfigProvider)
export default CpConfigProvider

export * from './src/config-provider'
export type { ConfigProviderInstance } from './src/instance'
