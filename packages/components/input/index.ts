import { withInstall } from '@cyberpunk-vue/components/utils'
import Input from './src/input.vue'

/**
 * CpInput 赛博朋克风格输入框
 *
 * 支持多种尺寸、形态变体、可清空功能。具有特色的切角造型。
 *
 * @example
 * ```vue
 * <CpInput v-model="value" placeholder="请输入" />
 * <CpInput v-model="search" clearable>
 *   <template #prefix><CpIcon icon="mdi:magnify" /></template>
 * </CpInput>
 * ```
 *
 * @see {@link InputProps} 查看所有可用属性
 *
 * @slot prefix - 输入框前缀，常用于放置图标
 * @slot suffix - 输入框后缀，常用于放置图标或按钮
 */
export const CpInput = withInstall(Input)
export default CpInput

export * from './src/input'
export type { InputInstance } from './src/instance'
