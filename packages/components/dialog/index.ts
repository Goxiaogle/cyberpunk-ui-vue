import { withInstall } from '@cyberpunk-vue/components/utils'
import Dialog from './src/dialog.vue'

/**
 * CpDialog 赛博朋克风格模态对话框
 *
 * 用于在保留页面上下文的情况下展示重要交互内容，支持多种变体、形状和主题色。
 *
 * @example
 * ```vue
 * <CpDialog v-model="visible" title="系统通知">
 *   <p>对话框内容</p>
 *   <template #footer>
 *     <CpButton @click="visible = false">取消</CpButton>
 *     <CpButton type="primary" @click="visible = false">确认</CpButton>
 *   </template>
 * </CpDialog>
 * ```
 *
 * @see {@link DialogProps} 查看所有可用属性
 *
 * @slot default - 对话框主体内容
 * @slot header - 自定义整个头部区域
 * @slot title - 仅标题区域
 * @slot footer - 底部操作区域
 */
export const CpDialog = withInstall(Dialog)
export default CpDialog

export * from './src/dialog'
export type { DialogInstance } from './src/instance'
