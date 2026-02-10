import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeNode } from './tree';
/**
 * CpTreeNode 子组件 Props 定义
 */
export declare const treeNodeProps: {
    /**
     * 内部树节点对象
     */
    readonly node: {
        readonly type: PropType<TreeNode>;
        readonly required: true;
    };
    /**
     * 是否为同级中的最后一个节点（连接线绘制用）
     */
    readonly isLast: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
