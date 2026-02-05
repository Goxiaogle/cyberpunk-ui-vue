import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 卡片阴影显示时机
 * - `always` - 始终显示阴影（默认）
 * - `hover` - 仅悬停时显示
 * - `never` - 不显示阴影
 */
export type CardShadow = 'always' | 'hover' | 'never'

/**
 * 卡片变体/形态
 * - `solid` - 实心背景（默认）
 * - `outline` - 边框样式
 * - `semi` - 半透明背景，支持毛玻璃效果
 * - `ghost` - 透明背景
 */
export type CardVariant = 'solid' | 'outline' | 'semi' | 'ghost'

/**
 * 卡片形状模式
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type CardShape = 'clip' | 'no-clip' | 'round'

/**
 * 覆层动画类型
 * - `slide-up` - 从底部滑入（默认）
 * - `slide-down` - 从顶部滑入
 * - `slide-left` - 从右侧滑入
 * - `slide-right` - 从左侧滑入
 * - `fade` - 渐显
 * - `scale` - 缩放
 */
export type CardOverlayAnimation = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade' | 'scale'

/**
 * 覆层位置
 * - `bottom` - 底部（默认）
 * - `top` - 顶部
 * - `center` - 居中覆盖
 */
export type CardOverlayPosition = 'bottom' | 'top' | 'center'

/**
 * 卡片的主题颜色类型
 */
export type CardType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 减淡模式类型
 * - `saturation` - 降低饱和度
 * - `gray` - 变为灰色
 */
export type CardDimmedType = 'saturation' | 'gray'

/**
 * CpCard 组件 Props 定义
 *
 * @description 赛博朋克风格卡片容器组件，用于展示内容分组。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpCard title="系统信息">
 *   <p>卡片内容</p>
 * </CpCard>
 *
 * <!-- 带额外操作 -->
 * <CpCard title="数据面板">
 *   <template #extra>
 *     <CpButton size="sm">更多</CpButton>
 *   </template>
 *   <p>面板内容</p>
 * </CpCard>
 *
 * <!-- 自定义头部和底部 -->
 * <CpCard>
 *   <template #header>
 *     <h3>自定义标题</h3>
 *   </template>
 *   <p>内容区域</p>
 *   <template #footer>
 *     <CpButton>确认</CpButton>
 *   </template>
 * </CpCard>
 * ```
 *
 * @slots
 * - `default` - 卡片主体内容
 * - `header` - 自定义头部（覆盖 title）
 * - `title` - 仅标题区域
 * - `extra` - 头部右侧额外操作区
 * - `footer` - 卡片底部区域
 */
export const cardProps = {
  /**
   * 卡片标题
   * @default ''
   * @example `<CpCard title="系统监控">...</CpCard>`
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * 阴影显示时机
   * - `always` - 始终显示
   * - `hover` - 悬停时显示
   * - `never` - 不显示
   * @default 'always'
   */
  shadow: {
    type: String as PropType<CardShadow>,
    default: 'always',
  },
  /**
   * 卡片变体/形态
   * @default 'solid'
   * @example `<CpCard variant="semi">毛玻璃卡片</CpCard>`
   */
  variant: {
    type: String as PropType<CardVariant>,
    default: 'solid',
  },
  /**
   * 卡片形状
   * - `clip` - 切角样式（默认）
   * - `no-clip` - 直角矩形
   * - `round` - 圆角矩形
   * @default 'clip'
   */
  shape: {
    type: String as PropType<CardShape>,
    default: 'clip',
  },
  /**
   * 自定义内容区内边距
   * 传入有效 CSS 值，如 '20px' 或 '1rem 2rem'
   * @default undefined (使用默认 padding)
   */
  bodyPadding: {
    type: String,
    default: undefined,
  },
  /**
   * 是否显示头部分隔线
   * @default true
   */
  headerBorder: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否显示底部分隔线
   * @default true
   */
  footerBorder: {
    type: Boolean,
    default: true,
  },
  /**
   * 覆层出场动画类型
   * @default 'slide-up'
   */
  overlayAnimation: {
    type: String as PropType<CardOverlayAnimation>,
    default: 'slide-up',
  },
  /**
   * 覆层位置
   * @default 'bottom'
   */
  overlayPosition: {
    type: String as PropType<CardOverlayPosition>,
    default: 'bottom',
  },
  /**
   * 覆层动画持续时间 (ms)
   * @default 300
   */
  overlayDuration: {
    type: Number,
    default: 300,
  },
  /**
   * 卡片的主题颜色类型
   * @default 'default'
   */
  type: {
    type: String as PropType<CardType>,
    default: 'default',
  },
  /**
   * 自定义颜色，优先于 type
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否开启平常减淡显示
   * @default false
   */
  dimmed: {
    type: Boolean,
    default: false,
  },
  /**
   * 减淡模式类型
   * @default 'saturation'
   */
  dimmedType: {
    type: String as PropType<CardDimmedType>,
    default: 'saturation',
  },
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
