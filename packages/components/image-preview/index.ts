import { withInstall } from '@cyberpunk-vue/components/utils'
import ImagePreview from './src/image-preview.vue'

/**
 * CpImagePreview 大图预览组件
 *
 * @description 赛博朋克风格全屏大图预览组件，支持缩放、旋转、多图切换。
 *
 * @example
 * ```vue
 * <CpImagePreview v-model="visible" :url-list="['/a.jpg', '/b.jpg']" />
 * ```
 */
export const CpImagePreview = withInstall(ImagePreview)

export default CpImagePreview
export * from './src/image-preview'
export type { CpImagePreviewInstance } from './src/instance'
