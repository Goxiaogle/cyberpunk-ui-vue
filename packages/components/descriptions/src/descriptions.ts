import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 描述列表颜色类型
 */
export type DescriptionsType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 描述列表排列方向
 * - `horizontal` — label 与内容同行
 * - `vertical` — label 在上、内容在下
 */
export type DescriptionsDirection = 'horizontal' | 'vertical'

/**
 * 描述列表变体
 * - `solid` — 带边框 + label 背景（默认）
 * - `outline` — 带边框、无 label 背景
 * - `ghost` — 无边框、无背景
 */
export type DescriptionsVariant = 'solid' | 'outline' | 'ghost'

/**
 * 垂直对齐方式（仅在 direction 为 horizontal 时生效）
 */
export type DescriptionsVerticalAlign = 'center' | 'top' | 'bottom' | 'auto'

/**
 * 描述列表条目配置（内部使用，由 CpDescriptionsItem 注册）
 */
export interface DescriptionsItemConfig {
  /** 唯一标识（内部生成） */
  id: string
  /** 标签文字 */
  label: string
  /** 占列数 */
  span: number
  /** 覆盖父级 label 宽度 */
  labelWidth: string | number
  /** 覆盖父级 label 水平对齐 */
  labelAlign: 'left' | 'center' | 'right' | ''
  /** 覆盖父级 label 垂直对齐 */
  labelVerticalAlign: DescriptionsVerticalAlign | ''
  /** 覆盖父级内容水平对齐 */
  contentAlign: 'left' | 'center' | 'right' | ''
  /** 覆盖父级内容垂直对齐 */
  contentVerticalAlign: DescriptionsVerticalAlign | ''
  /** label 自定义类名 */
  labelClassName: string
  /** content 自定义类名 */
  contentClassName: string
  /** label 颜色（覆盖 CSS 变量） */
  labelColor: string
  /** content 颜色（覆盖 CSS 变量） */
  contentColor: string
  /** 单项类型（覆盖父级） */
  type: DescriptionsType | ''
  /** 单项自定义色（覆盖父级） */
  color: string
  /** 插槽 */
  slots: {
    default?: (...args: unknown[]) => unknown
    label?: (...args: unknown[]) => unknown
  }
}

/**
 * CpDescriptions 组件 Props 定义
 * @category 数据展示
 * @displayName CpDescriptions 描述列表
 * @description 赛博朋克风格描述列表，以键值对形式展示结构化数据。配合 CpDescriptionsItem 声明式定义条目
 * @slots default - CpDescriptionsItem 条目定义
 * @slots title - 自定义标题
 * @slots extra - 右侧额外操作区
 * @example
 * ```vue
 * <CpDescriptions title="设备信息" :column="3">
 *   <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
 *   <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
 * </CpDescriptions>
 * ```
 */
export const descriptionsProps = {
  /**
   * 标题
   * @default ''
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * 额外说明文字（右侧）
   * @default ''
   */
  extra: {
    type: String,
    default: '',
  },
  /**
   * 一行几列
   * @default 3
   */
  column: {
    type: Number,
    default: 3,
  },
  /**
   * 排列方向
   * @default 'horizontal'
   */
  direction: {
    type: String as PropType<DescriptionsDirection>,
    default: 'horizontal',
  },
  /**
   * 变体样式
   * - `solid` — 带边框 + label 背景（默认）
   * - `outline` — 仅边框
   * - `ghost` — 无边框
   * @default 'solid'
   */
  variant: {
    type: String as PropType<DescriptionsVariant>,
    default: 'solid',
  },
  /**
   * 尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'md',
  },
  /**
   * 颜色类型
   * @default 'default'
   */
  type: {
    type: String as PropType<DescriptionsType>,
    default: 'default',
  },
  /**
   * 自定义主题色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 全局 label 宽度
   * @default ''
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  /**
   * label 水平对齐
   * @default 'left'
   */
  labelAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  /**
   * label 垂直对齐（仅 direction 为 horizontal 时生效）
   * @default 'center'
   */
  labelVerticalAlign: {
    type: String as PropType<DescriptionsVerticalAlign>,
    default: 'center',
  },
  /**
   * 内容水平对齐
   * @default 'left'
   */
  contentAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  /**
   * 内容垂直对齐（仅 direction 为 horizontal 时生效）
   * @default 'center'
   */
  contentVerticalAlign: {
    type: String as PropType<DescriptionsVerticalAlign>,
    default: 'center',
  },
} as const

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>
