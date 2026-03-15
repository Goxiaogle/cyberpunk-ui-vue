import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 容器排列方向
 * - `horizontal` - 水平排列
 * - `vertical` - 垂直排列
 */
export type ContainerDirection = 'horizontal' | 'vertical'

/**
 * 布局分割线颜色类型
 */
export type LayoutDividerType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 布局分割线变体
 */
export type LayoutDividerVariant = 'solid' | 'gradient' | 'glow'

/**
 * 内容区滚动穿透 Header / Footer 的共用 props
 */
const layoutScrollOverlayProps = {
    /**
     * 允许内容滚动到 Header 背后
     * @default false
     */
    scrollUnderHeader: {
        type: Boolean,
        default: false,
    },
    /**
     * 允许内容滚动到 Footer 背后
     * @default false
     */
    scrollUnderFooter: {
        type: Boolean,
        default: false,
    },
} as const

/**
 * 布局组件共用的分割线 props
 */
const layoutDividerProps = {
    /**
     * 是否显示分割线
     * @default true
     */
    divider: {
        type: Boolean,
        default: true,
    },
    /**
     * 分割线颜色类型预设
     * @default 'default'
     */
    dividerType: {
        type: String as PropType<LayoutDividerType>,
        default: 'default',
    },
    /**
     * 自定义分割线颜色，覆盖 dividerType
     * @default ''
     */
    dividerColor: {
        type: String,
        default: '',
    },
    /**
     * 分割线变体
     * @default 'solid'
     */
    dividerVariant: {
        type: String as PropType<LayoutDividerVariant>,
        default: 'solid',
    },
} as const

/**
 * CpContainer 组件 Props 定义
 *
 * @description 赛博朋克风格页面布局容器。
 * 当子元素包含 CpHeader 或 CpFooter 时自动切换为垂直排列。
 *
 * @example
 * ```vue
 * <CpContainer>
 *   <CpHeader>头部</CpHeader>
 *   <CpMain>主内容</CpMain>
 *   <CpFooter>底部</CpFooter>
 * </CpContainer>
 * ```
  * @category 布局组件
 * @displayName CpContainer 容器
  * @slots default - 容器内容（CpHeader / CpFooter / CpMain / CpAside 等）
 */
export const containerProps = {
    /**
     * 排列方向，可选值：horizontal / vertical
     * 不设置时根据子元素自动判断
     */
    direction: {
        type: String as PropType<ContainerDirection>,
        default: '',
    },
} as const

export type ContainerProps = ExtractPropTypes<typeof containerProps>

/**
 * CpHeader 组件 Props
  * @category 布局组件
 * @displayName CpHeader 顶栏
  * @slots default - 顶栏内容
 * @example
 * ```vue
 * <CpHeader>Logo / 导航</CpHeader>
 * ```
 */
export const headerProps = {
    /**
     * 头部高度
     * @default '60px'
     */
    height: {
        type: String,
        default: '60px',
    },
    ...layoutDividerProps,
} as const

export type HeaderProps = ExtractPropTypes<typeof headerProps>

/**
 * CpFooter 组件 Props
  * @category 布局组件
 * @displayName CpFooter 底栏
  * @slots default - 底栏内容
 */
export const footerProps = {
    /**
     * 底部高度
     * @default '60px'
     */
    height: {
        type: String,
        default: '60px',
    },
    ...layoutDividerProps,
} as const

export type FooterProps = ExtractPropTypes<typeof footerProps>

/**
 * CpMain 组件 Props
  * @category 布局组件
 * @displayName CpMain 主区域
  * @slots default - 主要内容
 */
export const mainProps = {
    ...layoutScrollOverlayProps,
} as const

export type MainProps = ExtractPropTypes<typeof mainProps>

/**
 * CpAside 组件 Props
  * @category 布局组件
 * @displayName CpAside 侧边栏
  * @slots default - 侧边栏内容
 * @example
 * ```vue
 * <CpAside width="220px">导航菜单</CpAside>
 * ```
 */
export const asideProps = {
    /**
     * 侧边栏宽度
     * @default '300px'
     */
    width: {
        type: String,
        default: '300px',
    },
    /**
     * 侧边栏位置，可选值：left / right
     * @default 'left'
     */
    position: {
        type: String as PropType<'left' | 'right'>,
        default: 'left',
    },
    ...layoutScrollOverlayProps,
    ...layoutDividerProps,
} as const

export type AsideProps = ExtractPropTypes<typeof asideProps>
