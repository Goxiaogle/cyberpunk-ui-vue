import { withInstall } from '@cyberpunk-vue/components/utils'
import Image from './src/image.vue'

/**
 * CpImage 图片组件
 *
 * @description 赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。
 *
 * @example
 * ```vue
 * <CpImage src="/image.jpg" alt="示例图片" />
 * <CpImage src="/image.jpg" lazy shape="circle" />
 * <CpImage src="/image.jpg" fallback-src="/fallback.jpg" />
 * ```
 */
export const CpImage = withInstall(Image)

export default CpImage
export * from './src/image'
export type { CpImageInstance } from './src/instance'
