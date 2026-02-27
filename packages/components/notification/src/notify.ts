/**
 * CpNotification 函数式调用 API
 *
 * 参考 Element Plus 实现，管理 VNode 队列、DOM 挂载和偏移堆叠
 *
 * @example
 * ```ts
 * import { CpNotify } from '@cyberpunk-vue/components'
 *
 * CpNotify({ title: 'Hello', message: 'World' })
 * CpNotify.success({ title: 'Done', message: 'Saved!' })
 * CpNotify.closeAll()
 * ```
 */
import { createVNode, isVNode, render } from 'vue'
import NotificationConstructor from './notification.vue'
import { notificationTypes } from './notification'

import type { Ref, VNode } from 'vue'
import type {
  NotificationPosition,
  NotificationQueue,
  Notify,
  NotifyFn,
  NotificationOptions,
} from './notification'

// 四个角落的通知队列
const notifications: Record<NotificationPosition, NotificationQueue> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

// 通知间距
const GAP_SIZE = 16
// 重叠堆叠时每个通知露出的高度
const OVERLAP_PEEK = 32
let seed = 1

const isString = (val: unknown): val is string => typeof val === 'string'
const isElement = (val: unknown): val is HTMLElement =>
  typeof HTMLElement !== 'undefined' && val instanceof HTMLElement

/**
 * 函数式调用主入口
 */
const notify: NotifyFn & Partial<Notify> = function (options = {}, context) {
  if (typeof window === 'undefined') return { close: () => undefined }

  if (isString(options) || isVNode(options)) {
    options = { message: options }
  }

  const opts = options as NotificationOptions
  const position: NotificationPosition = opts.position || 'top-right'
  // 标准化 stacking: true => 'vertical', false => false
  const stacking: false | 'vertical' | 'overlap' =
    opts.stacking === true ? 'vertical'
    : opts.stacking === 'overlap' ? 'overlap'
    : opts.stacking === 'vertical' ? 'vertical'
    : false

  // 计算垂直偏移
  let verticalOffset: number
  if (stacking === 'vertical') {
    verticalOffset = opts.offset || 0
    notifications[position].forEach(({ el }) => {
      verticalOffset += (el?.offsetHeight || 0) + GAP_SIZE
    })
    verticalOffset += GAP_SIZE
  } else if (stacking === 'overlap') {
    // 重叠模式：每个通知仅偏移 OVERLAP_PEEK
    const stackedCount = notifications[position].filter(item => item.stacking === 'overlap').length
    verticalOffset = (opts.offset || GAP_SIZE) + stackedCount * OVERLAP_PEEK
  } else {
    verticalOffset = opts.offset || GAP_SIZE
  }

  const id = `cp_notification_${seed++}`
  const userOnClose = opts.onClose
  const props: Record<string, unknown> = {
    ...opts,
    // offset 仅用于水平定位
    offset: opts.offset || 16,
    // _verticalOffset 用于垂直定位
    _verticalOffset: verticalOffset,
    id,
    onClose: () => {
      close(id, position, userOnClose)
    },
  }

  // 移除非组件 prop 的选项
  delete props.appendTo
  delete props.stacking

  // 确定挂载目标
  let appendTo: HTMLElement | null = document.body
  const appendToOption = opts.appendTo
  if (isElement(appendToOption)) {
    appendTo = appendToOption
  } else if (isString(appendToOption)) {
    appendTo = document.querySelector(appendToOption)
  }
  if (!isElement(appendTo)) {
    appendTo = document.body
  }

  const container = document.createElement('div')

  // 创建 VNode
  const message = props.message
  const vm = createVNode(
    NotificationConstructor,
    props,
    typeof message === 'function'
      ? message as () => VNode
      : isVNode(message)
        ? () => message as VNode
        : null,
  )

  // 注入 appContext
  vm.appContext = context === undefined ? notify._context : context

  // 销毁时清理容器
  vm.props!.onDestroy = () => {
    render(null, container)
  }

  // 渲染并挂载
  render(vm, container)

  // 获取实际 DOM 元素（v-show 确保元素始终存在）
  const el = container.firstElementChild as HTMLElement
  if (!el) {
    console.warn('[CpNotification] Failed to render notification element.')
    return { close: () => undefined }
  }

  notifications[position].push({ vm, el, stacking })
  appendTo.appendChild(el)

  return {
    close: () => {
      const exposed = vm.component?.exposed as { visible: Ref<boolean> } | undefined
      if (exposed) {
        exposed.visible.value = false
      }
    },
  }
}

/**
 * 添加快捷方法：notify.success / notify.warning / notify.error / notify.info / notify.primary
 */
notificationTypes.forEach((type) => {
  notify[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
      options = { message: options }
    }
    return notify({ ...(options as NotificationOptions), type }, appContext)
  }
})

/**
 * 关闭指定通知并调整后续通知的偏移
 */
export function close(
  id: string,
  position: NotificationPosition,
  userOnClose?: (vm: VNode) => void,
): void {
  const orientedNotifications = notifications[position]
  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id,
  )
  if (idx === -1) return

  const item = orientedNotifications[idx]
  if (!item) return

  // 在 DOM 移除前调用用户回调
  userOnClose?.(item.vm)

  const removedHeight = item.el?.offsetHeight || 0
  const verticalPos = position.split('-')[0] as 'top' | 'bottom'
  orientedNotifications.splice(idx, 1)

  // 仅在启用堆叠时调整后续通知的偏移
  if (!item.stacking) return

  const len = orientedNotifications.length
  if (len < 1) return

  // 计算移除该通知后应减少的偏移量
  const delta = item.stacking === 'overlap' ? OVERLAP_PEEK : removedHeight + GAP_SIZE

  for (let i = idx; i < len; i++) {
    const nextItem = orientedNotifications[i]
    if (!nextItem?.el || !nextItem.vm.component) continue
    if (!nextItem.stacking) continue

    const currentOffset = Number.parseInt(nextItem.el.style[verticalPos] || '0', 10)
    const newOffset = currentOffset - delta
    nextItem.vm.component.props._verticalOffset = Math.max(newOffset, GAP_SIZE)
  }
}

/**
 * 关闭所有通知
 */
export function closeAll(): void {
  for (const orientedNotifications of Object.values(notifications)) {
    // 复制数组后遍历，避免 splice 导致跳过元素
    const copy = [...orientedNotifications]
    copy.forEach(({ vm }) => {
      const exposed = vm.component?.exposed as { visible: Ref<boolean> } | undefined
      if (exposed) {
        exposed.visible.value = false
      }
    })
  }
}

notify.closeAll = closeAll
notify._context = null

export default notify as Notify
