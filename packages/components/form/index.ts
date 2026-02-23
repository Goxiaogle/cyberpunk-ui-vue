import { withInstall } from '../utils'
import Form from './src/form.vue'

/**
 * CpForm 赛博朋克风格表单容器
 *
 * 提供表单布局（label 位置、行内模式）、验证管理（validate / resetFields）
 * 和全局配置注入（size / disabled / reserveErrorSpace）。
 *
 * @example
 * ```vue
 * <CpForm :model="formData" :rules="rules" label-position="right">
 *   <CpFormItem label="用户名" prop="username">
 *     <CpInput v-model="formData.username" />
 *   </CpFormItem>
 * </CpForm>
 * ```
 */
export const CpForm = withInstall(Form)
export default CpForm

export * from './src/form'
export * from './src/constants'
export type { FormInstance } from './src/instance'
