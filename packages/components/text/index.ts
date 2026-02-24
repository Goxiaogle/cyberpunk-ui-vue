import { withInstall } from '@cyberpunk-vue/components/utils'
import Text from './src/text.vue'

/**
 * CpText 特殊文字组件
 *
 * @description 赛博朋克风格特殊文字，可快速为文字添加多种视觉效果。
 * 支持下划线、方框、加粗、斜体、删除线、发光、马克笔等效果。
 *
 * @example
 * ```vue
 * <CpText type="primary" underline>下划线</CpText>
 * <CpText type="success" glow>发光效果</CpText>
 * <CpText type="warning" marker bold>马克笔加粗</CpText>
 * ```
 */
export const CpText = withInstall(Text)

export default CpText
export * from './src/text'
export type { CpTextInstance } from './src/instance'
