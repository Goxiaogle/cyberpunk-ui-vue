import { withInstall } from '../utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group.vue'

/**
 * CpAvatar 头像组件
 *
 * @description 赛博朋克风格头像组件，支持多种尺寸和形状。
 *
 * @example
 * ```vue
 * <CpAvatar src="/avatar.jpg" />
 * <CpAvatar src="/avatar.jpg" size="lg" shape="square" />
 * <CpAvatar :size="80">U</CpAvatar>
 * ```
 */
export const CpAvatar = withInstall(Avatar)

/**
 * CpAvatarGroup 头像组组件
 *
 * @description 用于展示一组头像，支持堆叠和折叠模式。
 *
 * @example
 * ```vue
 * <CpAvatarGroup collapse-avatars :max="3">
 *   <CpAvatar v-for="i in 5" :src="`/avatar${i}.jpg`" />
 * </CpAvatarGroup>
 * ```
 */
export const CpAvatarGroup = withInstall(AvatarGroup)

export default CpAvatar
export * from './src/avatar'
export * from './src/avatar-group'
export type { CpAvatarInstance, CpAvatarGroupInstance } from './src/instance'
