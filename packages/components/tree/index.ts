import { withInstall } from '@cyberpunk-vue/components/utils'
import Tree from './src/tree.vue'

/**
 * CpTree 赛博朋克风格树形控件
 *
 * 用于展示层级数据，支持展开/收起、复选框级联、手风琴模式。
 *
 * @example
 * ```vue
 * <CpTree :data="treeData" show-checkbox />
 * ```
 *
 * @see {@link TreeProps} 查看所有可用属性
 */
export const CpTree = withInstall(Tree)
export default CpTree

export * from './src/tree'
export type { TreeInstance } from './src/instance'
