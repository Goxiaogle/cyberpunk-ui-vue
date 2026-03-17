import type { ExtractPropTypes, PropType } from 'vue'
import type {
  DescriptionsVerticalAlign,
  DescriptionsType,
} from '@cyberpunk-vue/components/descriptions/src/descriptions'

/**
 * CpDescriptionsItem 组件 Props 定义
 * @category 数据展示
 * @displayName CpDescriptionsItem 描述列表项
 * @description 描述列表条目，在 CpDescriptions 内部使用
 * @slots default - 内容
 * @slots label - 自定义 label
 */
export const descriptionsItemProps = {
  /**
   * 标签文字
   * @default ''
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * 占多少列
   * @default 1
   */
  span: {
    type: Number,
    default: 1,
  },
  /**
   * 覆盖父级 label 宽度
   * @default ''
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  /**
   * 覆盖父级 label 水平对齐
   * @default ''
   */
  labelAlign: {
    type: String as PropType<'left' | 'center' | 'right' | ''>,
    default: '',
  },
  /**
   * 覆盖父级 label 垂直对齐
   * @default ''
   */
  labelVerticalAlign: {
    type: String as PropType<DescriptionsVerticalAlign | ''>,
    default: '',
  },
  /**
   * 覆盖父级内容水平对齐
   * @default ''
   */
  contentAlign: {
    type: String as PropType<'left' | 'center' | 'right' | ''>,
    default: '',
  },
  /**
   * 覆盖父级内容垂直对齐
   * @default ''
   */
  contentVerticalAlign: {
    type: String as PropType<DescriptionsVerticalAlign | ''>,
    default: '',
  },
  /**
   * label 自定义类名
   * @default ''
   */
  labelClassName: {
    type: String,
    default: '',
  },
  /**
   * content 自定义类名
   * @default ''
   */
  contentClassName: {
    type: String,
    default: '',
  },
  /**
   * label 颜色（覆盖 CSS 变量）
   * @default ''
   */
  labelColor: {
    type: String,
    default: '',
  },
  /**
   * content 颜色（覆盖 CSS 变量）
   * @default ''
   */
  contentColor: {
    type: String,
    default: '',
  },
  /**
   * 单项颜色类型（覆盖父级）
   * @default ''
   */
  type: {
    type: String as PropType<DescriptionsType | ''>,
    default: '',
  },
  /**
   * 单项自定义色（覆盖父级）
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
} as const

export type DescriptionsItemProps = ExtractPropTypes<typeof descriptionsItemProps>
