import { withInstall } from '../utils'
import Notification from './src/notification.vue'

/**
 * CpNotification 赛博朋克风格通知提醒
 *
 * 用于在页面角落显示全局通知消息，支持多种类型、位置和变体。
 *
 * @example
 * ```vue
 * <CpNotification
 *   v-model="visible"
 *   title="系统通知"
 *   message="数据同步完成"
 *   type="success"
 * />
 * ```
 *
 * @see {@link NotificationProps} 查看所有可用属性
 *
 * @slot default - 自定义消息内容
 * @slot title - 自定义标题
 * @slot icon - 自定义图标
 */
export const CpNotification = withInstall(Notification)
export default CpNotification

export * from './src/notification'
export type { NotificationInstance } from './src/instance'
