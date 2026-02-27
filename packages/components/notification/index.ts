import { withInstall, withInstallFunction } from '@cyberpunk-vue/components/utils'
import Notification from './src/notification.vue'
import notify from './src/notify'

/**
 * CpNotification 组件式用法
 *
 * 用于在模板中使用 v-model 控制通知显隐。
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
 * @slot default - 自定义消息内容
 * @slot title - 自定义标题
 * @slot icon - 自定义图标
 * @slot actions - 操作区按钮
 */
export const CpNotification = withInstall(Notification)

/**
 * CpNotify 函数式调用
 *
 * @example
 * ```ts
 * import { CpNotify } from '@cyberpunk-vue/components'
 *
 * CpNotify({ title: '系统通知', message: '数据同步完成', type: 'success' })
 * CpNotify.success({ title: 'Done', message: '保存成功！' })
 * CpNotify.closeAll()
 * ```
 */
export const CpNotify = withInstallFunction(notify, '$notify')

export default CpNotification

export * from './src/notification'
export type { NotificationInstance } from './src/instance'
