import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

/**
 * 关闭前回调函数类型
 * 调用 done() 才会真正关闭对话框
 * 调用 done(true) 可显式取消关闭
 */
export type DialogBeforeCloseDoneFn = (cancel?: boolean) => void
export type DialogBeforeCloseFn = (done: DialogBeforeCloseDoneFn) => void

/**
 * 对话框变体
 * - `solid` - 实心背景（默认）
 * - `semi` - 半透明毛玻璃
 * - `outline` - 边框样式
 */
export type DialogVariant = 'solid' | 'semi' | 'outline'

/**
 * 对话框形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type DialogShape = 'clip' | 'no-clip' | 'round'

/**
 * 对话框主题颜色类型
 */
export type DialogType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
export type DialogCustomClass =
  | string
  | Record<string, boolean>
  | Array<string | Record<string, boolean>>

/**
 * CpDialog Props 定义
 *
 * @description 赛博朋克风格模态对话框，用于展示重要交互内容
 *
 * @example
 * ```vue
 * <CpDialog v-model="visible" title="系统通知">
 *   <p>对话框内容</p>
 *   <template #footer>
 *     <CpButton @click="visible = false">取消</CpButton>
 *     <CpButton type="primary" @click="visible = false">确认</CpButton>
 *   </template>
 * </CpDialog>
 * ```
 *
 * @slots
 * - `default` - 对话框主体内容
 * - `header` - 自定义整个头部区域（覆盖 title + 关闭按钮）
 * - `title` - 仅标题区域
 * - `footer` - 底部操作区域
 */
export const dialogProps = {
  /**
   * 是否显示对话框 (v-model)
   * @default false
   */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * 对话框标题
   * @default ''
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * 对话框宽度
   * 数字则为 px，字符串可以是任意 CSS 值
   * @default '520px'
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '520px',
  },
  /**
   * 距离顶部的距离
   * @default '15vh'
   */
  top: {
    type: String,
    default: '15vh',
  },
  /**
   * 是否全屏显示
   * @default false
   */
  fullscreen: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否显示遮罩
   * @default true
   */
  modal: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否将对话框挂载到 body
   * 嵌套 Dialog 时建议设为 true
   * @default true
   */
  appendToBody: {
    type: Boolean,
    default: true,
  },
  /**
   * 点击遮罩是否关闭
   * @default true
   */
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  /**
   * 按下 ESC 是否关闭
   * @default true
   */
  closeOnEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否显示关闭按钮
   * @default true
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * 关闭前回调，调用 done() 才真正关闭
   * done(true) 表示取消关闭
   * 可用于关闭前二次确认
   */
  beforeClose: {
    type: Function as PropType<DialogBeforeCloseFn>,
    default: undefined,
  },
  /**
   * 是否可拖拽移动
   * @default false
   */
  draggable: {
    type: Boolean,
    default: false,
  },
  /**
   * 拖拽时是否允许超出视口边界
   * @default false
   */
  overflow: {
    type: Boolean,
    default: false,
  },
  /**
   * 打开时是否锁定页面滚动
   * @default true
   */
  lockScroll: {
    type: Boolean,
    default: true,
  },
  /**
   * 对话框变体
   * @default 'solid'
   */
  variant: {
    type: String as PropType<DialogVariant>,
    default: 'solid',
  },
  /**
   * 对话框形状
   * @default 'clip'
   */
  shape: {
    type: String as PropType<DialogShape>,
    default: 'clip',
  },
  /**
   * 主题颜色类型
   * @default 'default'
   */
  type: {
    type: String as PropType<DialogType>,
    default: 'default',
  },
  /**
   * 关闭时销毁内容
   * @default false
   */
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  /**
   * 居中布局（标题和 footer 对齐方式居中）
   * @default false
   */
  center: {
    type: Boolean,
    default: false,
  },
  /**
   * 垂直居中布局（容器在屏幕中垂直居中）
   * @default true
   */
  alignCenter: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否显示头部分隔线
   * @default true
   */
  headerBorder: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否显示底部分隔线
   * @default true
   */
  footerBorder: {
    type: Boolean,
    default: true,
  },

  // ===== 自定义颜色 =====

  /**
   * 自定义主色调，优先于 type
   * 支持任意 CSS 颜色值
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 自定义背景颜色
   */
  bgColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义边框颜色
   */
  borderColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义标题文字颜色
   */
  titleColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义内容区文字颜色
   */
  textColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义遮罩颜色
   */
  overlayColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义关闭按钮颜色
   */
  closeColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义头部分隔线颜色
   */
  headerDividerColor: {
    type: String,
    default: '',
  },
  /**
   * 自定义底部分隔线颜色
   */
  footerDividerColor: {
    type: String,
    default: '',
  },

  // ===== 自定义 Class =====

  /**
   * 对话框根容器自定义 class
   */
  dialogClass: {
    type: [String, Object, Array] as PropType<DialogCustomClass>,
    default: undefined,
  },
  /**
   * 头部区域自定义 class
   */
  headerClass: {
    type: [String, Object, Array] as PropType<DialogCustomClass>,
    default: undefined,
  },
  /**
   * 主体内容区域自定义 class
   */
  bodyClass: {
    type: [String, Object, Array] as PropType<DialogCustomClass>,
    default: undefined,
  },
  /**
   * 底部区域自定义 class
   */
  footerClass: {
    type: [String, Object, Array] as PropType<DialogCustomClass>,
    default: undefined,
  },
  /**
   * 遮罩层自定义 class
   */
  overlayClass: {
    type: [String, Object, Array] as PropType<DialogCustomClass>,
    default: undefined,
  },
  /**
   * 遮罩层追加 class（与 overlayClass 合并使用）
   */
  modalClass: {
    type: String,
    default: '',
  },

  // ===== 自定义 Style =====

  /**
   * 对话框面板自定义 style
   */
  dialogStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: undefined,
  },
  /**
   * 头部区域自定义 style
   */
  headerStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: undefined,
  },
  /**
   * 主体内容区域自定义 style
   */
  bodyStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: undefined,
  },
  /**
   * 底部区域自定义 style
   */
  footerStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: undefined,
  },
  /**
   * 遮罩层自定义 style
   */
  overlayStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: undefined,
  },

  /**
   * z-index
   * @default 2000
   */
  zIndex: {
    type: Number,
    default: 2000,
  },

  // ===== 内置确认 / 取消按钮 =====

  /**
   * 是否显示确认按钮（当无 #footer 插槽时生效）
   * @default true
   */
  showConfirmButton: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否显示取消按钮（当无 #footer 插槽时生效）
   * @default true
   */
  showCancelButton: {
    type: Boolean,
    default: true,
  },
  /**
   * 确认按钮文本
   * @default '确认'
   */
  confirmText: {
    type: String,
    default: '确认',
  },
  /**
   * 取消按钮文本
   * @default '取消'
   */
  cancelText: {
    type: String,
    default: '取消',
  },
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>

/**
 * CpDialog 事件定义
 */
export const dialogEmits = {
  /** v-model 更新事件 */
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
  /** 对话框打开时触发（动画开始前） */
  open: () => true,
  /** 对话框打开动画结束后触发 */
  opened: () => true,
  /** 对话框关闭时触发（动画开始前） */
  close: () => true,
  /** 对话框关闭动画结束后触发 */
  closed: () => true,
  /** 点击确认按钮时触发 */
  confirm: () => true,
  /** 点击取消按钮时触发 */
  cancel: () => true,
}

export type DialogEmits = typeof dialogEmits
