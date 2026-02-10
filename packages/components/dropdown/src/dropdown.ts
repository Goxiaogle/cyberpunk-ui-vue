import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 下拉选项类型
 */
export interface DropdownOption {
  /**
   * 显示文本
   */
  label: string
  /**
   * 选项值
   */
  value: string | number
  /**
   * 是否禁用该选项
   */
  disabled?: boolean
}

/**
 * 下拉框尺寸
 * - `sm` - 小尺寸 (28px 高)
 * - `md` - 中等尺寸 (36px 高)，默认
 * - `lg` - 大尺寸 (44px 高)
 * - 也支持数字 (px) 或带单位字符串 (如 '2rem')
 */
export type DropdownSize = Size

/**
 * 下拉框形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type DropdownShape = 'clip' | 'no-clip' | 'round'

/**
 * 下拉框变体
 * - `outline` - 边框样式（默认），透明背景
 * - `filled` - 填充样式，带背景色
 * - `ghost` - 幽灵样式，无边框无背景
 */
export type DropdownVariant = 'outline' | 'filled' | 'ghost'

/**
 * 弹出位置
 */
export type DropdownPlacement = 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end'

/**
 * CpDropdown 组件 Props 定义
 *
 * @description 赛博朋克风格下拉选择器，支持多种尺寸、形态变体、可搜索/可清空功能。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpDropdown v-model="value" :options="options" placeholder="请选择" />
 *
 * <!-- 可搜索 -->
 * <CpDropdown v-model="value" :options="options" filterable />
 *
 * <!-- 可清空 -->
 * <CpDropdown v-model="value" :options="options" clearable />
 * ```
 *
 * @slots
 * - `default` - 自定义选项内容
 * - `prefix` - 触发器前缀
 * - `empty` - 无选项时的空状态
 *
 * @exposes
 * - `focus()` - 使下拉框获取焦点
 * - `blur()` - 使下拉框失去焦点
 * - `open()` - 打开下拉面板
 * - `close()` - 关闭下拉面板
 */
export const dropdownProps = {
  /**
   * 绑定值 (v-model)
   * @default ''
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  /**
   * 选项列表
   * @default []
   */
  options: {
    type: Array as PropType<DropdownOption[]>,
    default: () => [],
  },
  /**
   * 占位文本
   * @default '请选择'
   */
  placeholder: {
    type: String,
    default: '请选择',
  },
  /**
   * 搜索框占位文本 (仅在面板开启搜索时有效)
   * @default '搜索...'
   */
  filterPlaceholder: {
    type: String,
    default: '搜索...',
  },
  /**
   * 是否禁用
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否可清空
   * @default false
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否可搜索过滤
   * @default false
   */
  filterable: {
    type: Boolean,
    default: false,
  },
  /**
   * 下拉框尺寸
   * @default 'md'
   */
  size: {
    type: [String, Number] as PropType<DropdownSize>,
    default: 'md',
  },
  /**
   * 下拉框形状
   * @default 'clip'
   */
  shape: {
    type: String as PropType<DropdownShape>,
    default: 'clip',
  },
  /**
   * 下拉框变体
   * @default 'outline'
   */
  variant: {
    type: String as PropType<DropdownVariant>,
    default: 'outline',
  },
  /**
   * 自定义聚焦颜色
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 未激活状态边框颜色
   * @default ''
   */
  inactiveColor: {
    type: String,
    default: '',
  },
  /**
   * Placeholder 文字颜色
   * @default ''
   */
  placeholderColor: {
    type: String,
    default: '',
  },
  /**
   * 是否启用行内搜索 (直接在触发器输入)
   * @default false
   */
  inline: {
    type: Boolean,
    default: false,
  },
  /**
   * 弹出位置
   * @default 'bottom-start'
   */
  placement: {
    type: String as PropType<DropdownPlacement>,
    default: 'bottom-start',
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
   * 下拉面板最大高度 (px)
   * @default 256
   */
  maxHeight: {
    type: Number,
    default: 256,
  },
  /**
   * 无匹配时的文本
   * @default '无匹配数据'
   */
  noMatchText: {
    type: String,
    default: '无匹配数据',
  },
  /**
   * 无数据时的文本
   * @default '无数据'
   */
  noDataText: {
    type: String,
    default: '无数据',
  },
  /**
   * 清除动画持续时间 (ms)
   * 控制点击清空按钮时文字消失动画的速度
   * @default 150
   * @example `<CpDropdown :clear-duration="300" />`
   */
  clearDuration: {
    type: Number,
    default: 150,
  },
} as const

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>

/**
 * CpDropdown 组件事件定义
 */
export const dropdownEmits = {
  /**
   * 值变化时触发 (v-model 绑定)
   */
  'update:modelValue': (value: string | number) => typeof value === 'string' || typeof value === 'number',
  /**
   * 选中值变化时触发
   */
  change: (value: string | number) => typeof value === 'string' || typeof value === 'number',
  /**
   * 清空时触发
   */
  clear: () => true,
  /**
   * 获取焦点时触发
   */
  focus: () => true,
  /**
   * 失去焦点时触发
   */
  blur: () => true,
  /**
   * 下拉面板显示时触发
   */
  visibleChange: (visible: boolean) => typeof visible === 'boolean',
}

export type DropdownEmits = typeof dropdownEmits
