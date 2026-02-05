import { withInstall } from '../utils'
import Progress from './src/progress.vue'

/**
 * CpProgress 赛博朋克风格进度条
 *
 * 支持线性、环形、仪表盘三种模式。具有条纹流动效果和不确定状态动画。
 *
 * @example
 * ```vue
 * <CpProgress :percentage="50" />
 * <CpProgress type="circle" :percentage="75" />
 * <CpProgress :percentage="60" striped striped-flow />
 * <CpProgress indeterminate />
 * ```
 *
 * @see {@link ProgressProps} 查看所有可用属性
 *
 * @slot default - 自定义进度文字内容
 */
export const CpProgress = withInstall(Progress)
export default CpProgress

export * from './src/progress'
export type { ProgressInstance } from './src/instance'
