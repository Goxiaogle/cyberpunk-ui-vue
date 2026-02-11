import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 弹层变体
 * - `solid` - 实心背景（默认）
 * - `outline` - 透明背景 + 发光边框
 * - `neon` - 霓虹发光效果
 * - `ghost` - 极简风格，无装饰
 */
export type PopoverVariant = 'solid' | 'outline' | 'neon' | 'ghost'

/**
 * 弹层主题颜色类型
 */
export type PopoverType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 弹出位置
 * - 主轴：top | bottom | left | right
 * - 对齐：-start | 无 (居中) | -end
 */
export type PopoverPlacement =
  | 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end'

/**
 * 弹层形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type PopoverShape = 'clip' | 'no-clip' | 'round'

/**
 * 触发方式
 * - `hover` - 鼠标悬停
 * - `click` - 点击触发
 * - `focus` - 聚焦触发
 * - `manual` - 手动控制 (v-model)
 */
export type PopoverTrigger = 'hover' | 'click' | 'focus' | 'manual'

/**
 * CpPopover Props 定义
 *
 * @description 赛博朋克风格弹出提示层，用于文字提示或简单选择操作
 *
 * @example
 * ```vue
 * <!-- 基础 Tooltip -->
 * <CpPopover content="提示文字" tooltip>
 *   <CpButton>悬停查看</CpButton>
 * </CpPopover>
 *
 * <!-- Click Popover -->
 * <CpPopover title="系统通知" trigger="click">
 *   <template #content>
 *     <p>这是弹出层内容</p>
 *   </template>
 *   <CpButton>点击打开</CpButton>
 * </CpPopover>
 * ```
 *
 * @slots
 * - `default` - 触发器内容
 * - `content` - 弹层内容
 */
export const popoverProps = {
  /**
   * 是否显示弹层 (v-model)
   * @default false
   */
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  /**
   * 弹出位置
   * @default 'top'
   */
  placement: {
    type: String as PropType<PopoverPlacement>,
    default: 'top',
  },
  /**
   * 触发方式
   * @default 'hover'
   */
  trigger: {
    type: String as PropType<PopoverTrigger>,
    default: 'hover',
  },
  /**
   * 弹层内容 (快捷方式，优先级低于 #content 插槽)
   * @default ''
   */
  content: {
    type: String,
    default: '',
  },
  /**
   * 弹层标题 (可选)
   * @default ''
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * 是否显示箭头
   * @default true
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否翻转箭头方向
   * - false: 箭头指向触发器 (外凸)
   * - true: 箭头内嵌进弹层本体 (缺角感)
   * @default false
   */
  flipArrow: {
    type: Boolean,
    default: false,
  },
  /**
   * 弹层与触发器的偏移距离 (px)
   * @default 12
   */
  offset: {
    type: Number,
    default: 8,
  },
  /**
   * 是否禁用弹层
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 启用 Tooltip 模式 (简化样式、无标题)
   * @default false
   */
  tooltip: {
    type: Boolean,
    default: false,
  },
  /**
   * 打开延迟 (ms)，仅 hover 触发有效
   * @default 100
   */
  openDelay: {
    type: Number,
    default: 100,
  },
  /**
   * 关闭延迟 (ms)，仅 hover 触发有效
   * @default 100
   */
  closeDelay: {
    type: Number,
    default: 100,
  },
  /**
   * 弹层宽度
   * @default 'auto'
   */
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 'auto',
  },
  /**
   * 弹层最大宽度
   * @default 300
   */
  maxWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 300,
  },
  /**
   * 点击弹层外部是否关闭
   * @default true
   */
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
  /**
   * 按下 Escape 键是否关闭
   * @default true
   */
  closeOnEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * Teleport 目标
   * @default 'body'
   */
  teleportTo: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },
  /**
   * 弹层变体
   * @default 'solid'
   */
  variant: {
    type: String as PropType<PopoverVariant>,
    default: 'solid',
  },
  /**
   * 主题颜色类型
   * @default 'default'
   */
  type: {
    type: String as PropType<PopoverType>,
    default: 'default',
  },
  /**
   * 弹层形状
   * - clip: 切角 (默认，赛博朋克风)
   * - no-clip: 直角矩形
   * - round: 圆角矩形
   * @default 'clip'
   */
  shape: {
    type: String as PropType<PopoverShape>,
    default: 'clip',
  },
  /**
   * 自定义主色调，优先于 type
   * 支持任意 CSS 颜色值
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
} as const

export type PopoverProps = ExtractPropTypes<typeof popoverProps>

/**
 * CpPopover 事件定义
 */
export const popoverEmits = {
  /**
   * v-model 更新事件
   */
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
  /**
   * 弹层打开时触发
   */
  open: () => true,
  /**
   * 弹层关闭时触发
   */
  close: () => true,
}

export type PopoverEmits = typeof popoverEmits
