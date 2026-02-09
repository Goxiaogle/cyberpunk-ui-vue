import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 容器排列方向
 * - `horizontal` - 水平排列
 * - `vertical` - 垂直排列
 */
export type ContainerDirection = 'horizontal' | 'vertical'

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
} as const

export type HeaderProps = ExtractPropTypes<typeof headerProps>

/**
 * CpFooter 组件 Props
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
} as const

export type FooterProps = ExtractPropTypes<typeof footerProps>

/**
 * CpAside 组件 Props
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
} as const

export type AsideProps = ExtractPropTypes<typeof asideProps>
