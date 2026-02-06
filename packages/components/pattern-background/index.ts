import { withInstall } from '../utils'
import PatternBackground from './src/pattern-background.vue'

/**
 * CpPatternBackground 图案背景组件
 *
 * 用于展示各种装饰性背景图案，如网格、棋盘格、点阵、条纹等。
 *
 * @example
 * ```vue
 * <!-- 网格背景 -->
 * <CpPatternBackground pattern="grid" color="#ee2b34" :opacity="0.1" />
 *
 * <!-- 装饰层覆盖 -->
 * <div style="position: relative">
 *   <CpPatternBackground pattern="dots" cover decorative />
 *   <div>内容</div>
 * </div>
 * ```
 */
export const CpPatternBackground = withInstall(PatternBackground)
export default CpPatternBackground

export * from './src/pattern-background'
export type { PatternBackgroundInstance } from './src/instance'
