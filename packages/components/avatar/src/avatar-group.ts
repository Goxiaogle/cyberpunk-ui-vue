import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import type { AvatarSize, AvatarShape } from './avatar'

/**
 * CpAvatarGroup 组件 Props 定义
 *
 * @description 头像组组件，用于展示一组头像，支持堆叠和折叠模式。
 *
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <CpAvatarGroup>
 *   <CpAvatar src="/avatar1.jpg" />
 *   <CpAvatar src="/avatar2.jpg" />
 * </CpAvatarGroup>
 *
 * <!-- 堆叠模式 -->
 * <CpAvatarGroup collapse-avatars :max="3">
 *   <CpAvatar v-for="i in 5" :src="`/avatar${i}.jpg`" />
 * </CpAvatarGroup>
 * ```
 */
export const avatarGroupProps = {
    /**
     * 最多显示数量
     * 超出的头像将折叠为 +N 计数器
     * @default undefined (不限制)
     */
    max: {
        type: Number,
        default: undefined,
    },
    /**
     * 统一尺寸
     * 会通过 provide 注入到子 Avatar
     * @default 'md'
     */
    size: {
        type: [String, Number] as PropType<AvatarSize>,
        default: 'md',
    },
    /**
     * 统一形状
     * 会通过 provide 注入到子 Avatar
     * @default 'circle'
     */
    shape: {
        type: String as PropType<AvatarShape>,
        default: 'circle',
    },
    /**
     * 头像间距
     * 负值实现堆叠重叠效果，正值实现间距
     * @default -8
     */
    spacing: {
        type: [String, Number] as PropType<string | number>,
        default: -8,
    },
    /**
     * 是否开启折叠模式（堆叠显示）
     * 开启后头像会重叠显示，并带有边框
     * @default false
     */
    collapseAvatars: {
        type: Boolean,
        default: false,
    },
    /**
     * 折叠计数器自定义类名
     * @default ''
     */
    collapseClass: {
        type: String,
        default: '',
    },
    /**
     * 折叠计数器自定义样式
     */
    collapseStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
    /**
     * 折叠提示文本（鼠标悬停显示）
     * @default ''
     */
    collapseAvatarsTooltip: {
        type: String,
        default: '',
    },
    /**
     * 折叠计数器形状
     * 默认与 shape 保持一致，可单独设置
     * @default undefined (跟随 shape)
     */
    collapseShape: {
        type: String as PropType<AvatarShape>,
        default: undefined,
    },
} as const

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>

/**
 * AvatarGroup 注入的上下文
 */
export interface AvatarGroupContext {
    size: AvatarSize
    shape: AvatarShape
}

/**
 * AvatarGroup 注入 key
 */
export const AVATAR_GROUP_INJECTION_KEY = Symbol('avatarGroup')
