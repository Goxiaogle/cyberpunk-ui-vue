import { withInstall } from '@cyberpunk-vue/components/utils'
import FormItem from './src/form-item.vue'

/**
 * CpFormItem 表单项
 *
 * 包含标签、内容区和错误信息区域。支持验证规则和 Form 上下文继承。
 *
 * @example
 * ```vue
 * <CpFormItem label="用户名" prop="username" required>
 *   <CpInput v-model="formData.username" />
 * </CpFormItem>
 * ```
 *
 * @slot label - 自定义标签内容
 * @slot default - 表单控件
 * @slot error - 自定义错误信息展示
 */
export const CpFormItem = withInstall(FormItem)
export default CpFormItem

export * from './src/form-item'
export type { FormItemInstance } from './src/instance'
