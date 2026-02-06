import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 图案类型
 * - `grid` - 网格线，适合科技感背景
 * - `checkerboard` - 棋盘格，经典透明背景指示
 * - `dots` - 点阵，适合柔和装饰
 * - `stripes` - 斜条纹/直条纹
 * - `cross` - 十字交叉线
 */
export type PatternType = 'grid' | 'checkerboard' | 'dots' | 'stripes' | 'cross'

/**
 * 图案方向（仅对 stripes 和 grid 有效）
 * - `horizontal` - 水平方向
 * - `vertical` - 垂直方向
 * - `diagonal` - 对角线（左上到右下）
 * - `diagonal-reverse` - 反向对角线（右上到左下）
 */
export type PatternDirection = 'horizontal' | 'vertical' | 'diagonal' | 'diagonal-reverse'

/**
 * CpPatternBackground 组件 Props 定义
 *
 * @description 图案背景组件，用于展示各种装饰性背景图案。
 *
 * @example
 * ```vue
 * <!-- 基础网格背景 -->
 * <CpPatternBackground pattern="grid" color="var(--cp-primary)" />
 *
 * <!-- 棋盘格背景 -->
 * <CpPatternBackground pattern="checkerboard" :size="20" />
 *
 * <!-- 装饰层覆盖 -->
 * <CpPatternBackground pattern="dots" cover decorative :opacity="0.1" />
 * ```
 */
export const patternBackgroundProps = {
  /**
   * 图案类型
   * @default 'grid'
   */
  pattern: {
    type: String as PropType<PatternType>,
    default: 'grid',
  },
  /**
   * 图案尺寸（格子大小/点间距）
   * 数字默认 px，字符串可指定单位
   * @default 20
   */
  size: {
    type: [Number, String] as PropType<number | string>,
    default: 20,
  },
  /**
   * 图案颜色，支持 CSS 颜色值和渐变
   * @default 'currentColor'
   */
  color: {
    type: String,
    default: 'currentColor',
  },
  /**
   * 背景颜色
   * @default 'transparent'
   */
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
  /**
   * 图案方向（仅对 stripes 有效）
   * @default 'diagonal'
   */
  direction: {
    type: String as PropType<PatternDirection>,
    default: 'diagonal',
  },
  /**
   * 图案透明度 0-1
   * @default 1
   */
  opacity: {
    type: Number,
    default: 1,
  },
  /**
   * 线条粗细（仅对 grid/stripes/cross 有效）
   * 数字默认 px，字符串可指定单位
   * @default 1
   */
  lineWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 1,
  },
  /**
   * 点大小比例（仅对 dots 有效）
   * 相对于 size 的比例，如 0.1 表示点直径为 size 的 10%
   * @default 0.1
   */
  dotScale: {
    type: Number,
    default: 0.1,
  },
  /**
   * 是否覆盖整个父容器（绝对定位）
   * @default false
   */
  cover: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否作为装饰层（禁用鼠标事件）
   * @default true
   */
  decorative: {
    type: Boolean,
    default: true,
  },
} as const

export type PatternBackgroundProps = ExtractPropTypes<typeof patternBackgroundProps>
