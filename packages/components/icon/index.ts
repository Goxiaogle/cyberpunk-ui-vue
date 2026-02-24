import { withInstall } from '@cyberpunk-vue/components/utils'
import Icon from './src/icon.vue'

/**
 * CpIcon 统一图标组件
 *
 * 支持多种图标来源：Vue 组件、原始 SVG、Iconify 图标名。
 * 自动处理 SVG 尺寸归一化，保证图标在不同来源下表现一致。
 *
 * @example
 * ```vue
 * <CpIcon icon="mdi:home" />
 * <CpIcon :icon="MyIconComponent" />
 * <CpIcon icon="mdi:check" type="success" size="lg" />
 * <CpIcon icon="mdi:loading" spin />
 * ```
 *
 * @see {@link IconProps} 查看所有可用属性
 */
export const CpIcon = withInstall(Icon)
export default CpIcon

export * from './src/icon'
