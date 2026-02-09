import type { ExtractPropTypes, PropType } from 'vue'
import type { TreeNode } from './tree'

/**
 * CpTreeNode 子组件 Props 定义
 */
export const treeNodeProps = {
  /**
   * 内部树节点对象
   */
  node: {
    type: Object as PropType<TreeNode>,
    required: true as const,
  },
  /**
   * 是否为同级中的最后一个节点（连接线绘制用）
   */
  isLast: {
    type: Boolean,
    default: false,
  },
} as const

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>
