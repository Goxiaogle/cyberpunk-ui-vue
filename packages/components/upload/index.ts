import { withInstall } from '@cyberpunk-vue/components/utils'
import Upload from './src/upload.vue'

/**
 * CpUpload 赛博朋克风格上传组件
 *
 * 支持拖拽上传、图片预览、多种变体和形状。
 * 复用 CpImage、CpProgress、CpButton 等组件。
 *
 * @example
 * ```vue
 * <CpUpload v-model="fileList" action="/api/upload" />
 * <CpUpload v-model="fileList" action="/api/upload" drag list-type="picture-card" />
 * ```
 */
export const CpUpload = withInstall(Upload)
export default CpUpload

export * from './src/upload'
export type { UploadInstance } from './src/instance'
