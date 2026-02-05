import { withInstall } from '../utils'
import Card from './src/card.vue'

/**
 * CpCard 赛博朋克风格卡片容器
 *
 * 用于展示内容分组，支持多种变体、形状模式和灵活的头部/底部布局。
 *
 * @example
 * ```vue
 * <CpCard title="系统信息">内容</CpCard>
 * <CpCard variant="semi" shape="round">毛玻璃卡片</CpCard>
 * ```
 *
 * @see {@link CardProps} 查看所有可用属性
 *
 * @slot default - 卡片主体内容
 * @slot header - 自定义整个头部区域
 * @slot title - 仅标题区域
 * @slot extra - 头部右侧额外操作区
 * @slot footer - 卡片底部区域
 */
export const CpCard = withInstall(Card)
export default CpCard

export * from './src/card'
export type { CardInstance } from './src/instance'
