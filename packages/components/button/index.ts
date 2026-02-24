import { withInstall } from '@cyberpunk-vue/components/utils'
import Button from './src/button.vue'

/**
 * CpButton 赛博朋克风格按钮
 *
 * 支持多种颜色类型、尺寸、形态变体。具有特色的切角造型和霓虹发光效果。
 *
 * @example
 * ```vue
 * <CpButton type="primary">确认</CpButton>
 * <CpButton variant="neon" type="success">霓虹按钮</CpButton>
 * <CpButton :loading="isLoading" loading-placeholder>提交</CpButton>
 * ```
 *
 * @see {@link ButtonProps} 查看所有可用属性
 *
 * @slot default - 按钮文本内容
 * @slot prefix - 前缀插槽，通常用于图标，加载时自动隐藏
 * @slot suffix - 后缀插槽，通常用于图标
 */
export const CpButton = withInstall(Button)
export default CpButton

export * from './src/button'
export type { ButtonInstance } from './src/instance'
