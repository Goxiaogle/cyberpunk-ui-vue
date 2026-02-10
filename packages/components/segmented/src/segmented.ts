import type { Component, ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 分段选择器选项接口
 */
export interface SegmentedOption {
  /** 选项显示文本 */
  label: string
  /** 选项值 */
  value: string | number
  /** 是否禁用此选项 */
  disabled?: boolean
  /** 选项图标组件 */
  icon?: Component
}

/**
 * 分段选择器值类型
 */
export type SegmentedValueType = string | number

/**
 * 分段选择器颜色类型
 * - `default` - 默认中性色
 * - `primary` - 赛博青
 * - `success` - 霓虹绿
 * - `warning` - 橙黄
 * - `error` - 洋红
 * - `info` - 紫罗兰
 */
export type SegmentedType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * 分段选择器变体
 * - `solid` - 实心填充
 * - `outline` - 边框描边
 * - `semi` - 半透明填充
 * - `ghost` - 透明背景
 * - `neon` - 霓虹辉光
 */
export type SegmentedVariant = 'solid' | 'outline' | 'semi' | 'ghost' | 'neon'

/**
 * 分段选择器形状
 * - `clip` - 机甲切角（默认）
 * - `no-clip` - 标准直角
 * - `round` - 圆角
 * - `circle` - 胶囊/全圆
 */
export type SegmentedShape = 'clip' | 'no-clip' | 'round' | 'circle'

/**
 * 分段选择器尺寸
 */
export type SegmentedSize = Size

/**
 * CpSegmented 组件 Props 定义
 *
 * @description 赛博朋克风格分段选择器，一组按钮式互斥选项，选中项带滑块高亮效果。
 *
 * @example
 * ```vue
 * <CpSegmented v-model="active" :options="['日', '周', '月']" />
 *
 * <CpSegmented
 *   v-model="mode"
 *   type="primary"
 *   variant="neon"
 *   :options="[
 *     { label: '列表', value: 'list' },
 *     { label: '网格', value: 'grid' },
 *   ]"
 * />
 * ```
 */
export const segmentedProps = {
  /**
   * 绑定值 (v-model)
   */
  modelValue: {
    type: [String, Number] as PropType<SegmentedValueType>,
    default: undefined,
  },
  /**
   * 选项数组
   * 支持 string/number 简写或 SegmentedOption 对象
   */
  options: {
    type: Array as PropType<(string | number | SegmentedOption)[]>,
    default: () => [],
  },
  /**
   * 颜色预设类型
   * @default 'default'
   */
  type: {
    type: String as PropType<SegmentedType>,
    default: 'default',
  },
  /**
   * 变体样式
   * @default 'solid'
   */
  variant: {
    type: String as PropType<SegmentedVariant>,
    default: 'solid',
  },
  /**
   * 尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<SegmentedSize>,
    default: 'md',
  },
  /**
   * 形状模式
   * @default 'clip'
   */
  shape: {
    type: String as PropType<SegmentedShape>,
    default: 'clip',
  },
  /**
   * 自定义主题色
   * 传入有效 CSS 颜色值会覆盖 type 的预设颜色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否禁用所有选项
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否撑满父容器宽度（选项等宽）
   * @default false
   */
  block: {
    type: Boolean,
    default: false,
  },
} as const

export type SegmentedProps = ExtractPropTypes<typeof segmentedProps>

/**
 * CpSegmented 组件事件定义
 */
export const segmentedEmits = {
  /**
   * 值变化时触发 (v-model 绑定)
   */
  'update:modelValue': (value: SegmentedValueType) =>
    typeof value === 'string' || typeof value === 'number',
  /**
   * 值变化时触发
   */
  change: (value: SegmentedValueType) =>
    typeof value === 'string' || typeof value === 'number',
}

export type SegmentedEmits = typeof segmentedEmits
