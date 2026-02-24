import { withInstall } from '@cyberpunk-vue/components/utils'
import Loading from './src/loading.vue'

/**
 * CpLoading 赛博朋克风格加载器
 *
 * 环形 SVG 动画效果，可用于按钮内置加载、页面加载、异步操作等场景。
 *
 * @example
 * ```vue
 * <CpLoading />
 * <CpLoading type="primary" size="lg" />
 * <CpLoading color="#ff00ff" :stroke-width="2" />
 * ```
 *
 * @see {@link LoadingProps} 查看所有可用属性
 */
export const CpLoading = withInstall(Loading)
export default CpLoading

export * from './src/loading'
export type { CpLoadingInstance } from './src/instance'
