import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CpAvatar, CpAvatarGroup } from '@cyberpunk-vue/components'
import MdiAccount from '~icons/mdi/account'
import MdiAccountCircle from '~icons/mdi/account-circle'
import MdiRobot from '~icons/mdi/robot'

/**
 * CpAvatar 头像组件
 *
 * 赛博朋克风格头像组件，支持多种尺寸和形状。
 */
const meta: Meta<typeof CpAvatar> = {
    title: '数据展示 Data Display/Avatar 头像',
    component: CpAvatar,
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
            description: '头像图片地址',
        },
        alt: {
            control: 'text',
            description: '图片描述/替代文本',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: '尺寸：预设值或自定义数字',
        },
        shape: {
            control: 'select',
            options: ['circle', 'square', 'clip'],
            description: '形状模式',
        },
        fallbackSrc: {
            control: 'text',
            description: '加载失败时的回退图片地址',
        },
        fit: {
            control: 'select',
            options: ['cover', 'contain', 'fill'],
            description: '图片适应模式',
        },
        draggable: {
            control: 'boolean',
            description: '是否允许拖拽图片（默认禁止）',
        },
    },
    args: {
        src: 'https://picsum.photos/100/100?random=1',
        alt: '用户头像',
        size: 'md',
        shape: 'circle',
        fallbackSrc: '',
        fit: 'cover',
        draggable: false,
    },
}

export default meta
type Story = StoryObj<typeof CpAvatar>

/**
 * 基础用法 - 单个可控头像
 */
export const Basic: Story = {
    render: (args) => ({
        components: { CpAvatar },
        setup() {
            return { args }
        },
        template: `<CpAvatar v-bind="args" />`,
    }),
}

/**
 * 尺寸变体
 *
 * 支持预设尺寸 `xs` / `sm` / `md` / `lg` / `xl`，也可传入数字自定义尺寸。
 */
export const Sizes: Story = {
    render: () => ({
        components: { CpAvatar },
        template: `
            <div style="display: flex; gap: 16px; align-items: end;">
                <div v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" style="text-align: center;">
                    <CpAvatar
                        src="https://picsum.photos/100/100?random=sizes"
                        :size="size"
                    />
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        {{ size }}
                    </div>
                </div>
                <div style="text-align: center;">
                    <CpAvatar
                        src="https://picsum.photos/100/100?random=custom"
                        :size="80"
                    />
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        80px
                    </div>
                </div>
            </div>
        `,
    }),
}

/**
 * 形状变体
 *
 * - **Circle**: 圆形（默认）
 * - **Square**: 圆角方形
 * - **Clip**: 机甲切角
 */
export const Shapes: Story = {
    render: () => ({
        components: { CpAvatar },
        template: `
            <div style="display: flex; gap: 24px; align-items: center;">
                <div v-for="shape in ['circle', 'square', 'clip']" :key="shape" style="text-align: center;">
                    <CpAvatar
                        src="https://picsum.photos/100/100?random=shapes"
                        :shape="shape"
                        size="lg"
                    />
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        {{ shape }}
                    </div>
                </div>
            </div>
        `,
    }),
}

/**
 * 自定义内容
 *
 * 可以在头像中显示文字或图标。
 */
export const CustomContent: Story = {
    render: () => ({
        components: { CpAvatar },
        setup() {
            return { MdiAccount, MdiAccountCircle, MdiRobot }
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        文字头像
                    </div>
                    <div style="display: flex; gap: 16px; align-items: center;">
                        <CpAvatar size="lg" style="background-color: var(--cp-color-primary); color: #000;">
                            U
                        </CpAvatar>
                        <CpAvatar size="lg" style="background-color: var(--cp-color-success); color: #000;">
                            AI
                        </CpAvatar>
                        <CpAvatar size="lg" style="background-color: var(--cp-color-warning); color: #000;">
                            龙
                        </CpAvatar>
                        <CpAvatar size="lg" style="background-color: var(--cp-color-error); color: #fff;">
                            X
                        </CpAvatar>
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        图标头像
                    </div>
                    <div style="display: flex; gap: 16px; align-items: center;">
                        <CpAvatar :icon="MdiAccount" size="lg" />
                        <CpAvatar :icon="MdiAccountCircle" size="lg" style="background-color: var(--cp-color-info);" />
                        <CpAvatar :icon="MdiRobot" size="lg" style="background-color: var(--cp-color-primary); color: #000;" />
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        默认占位符
                    </div>
                    <div style="display: flex; gap: 16px; align-items: center;">
                        <CpAvatar size="sm" />
                        <CpAvatar size="md" />
                        <CpAvatar size="lg" />
                        <CpAvatar size="xl" />
                    </div>
                </div>
            </div>
        `,
    }),
}

/**
 * 错误处理与回退
 *
 * 使用 `fallbackSrc` 属性设置加载失败时的回退图片。
 */
export const Fallback: Story = {
    render: () => ({
        components: { CpAvatar },
        template: `
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <div style="text-align: center;">
                    <CpAvatar
                        src="https://invalid-url.com/image.jpg"
                        size="lg"
                    />
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        无回退（显示占位符）
                    </div>
                </div>
                <div style="text-align: center;">
                    <CpAvatar
                        src="https://invalid-url.com/image.jpg"
                        fallback-src="https://picsum.photos/100/100?random=fallback"
                        size="lg"
                    />
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        带回退图片
                    </div>
                </div>
            </div>
        `,
    }),
}

/**
 * 头像组 - 基础用法
 *
 * 使用 `CpAvatarGroup` 包裹多个头像。
 */
export const Group: Story = {
    render: () => ({
        components: { CpAvatar, CpAvatarGroup },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        默认（并排）
                    </div>
                    <CpAvatarGroup :spacing="4">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=group' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        堆叠模式 (collapse-avatars)
                    </div>
                    <CpAvatarGroup collapse-avatars>
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=stack' + i" />
                    </CpAvatarGroup>
                </div>
            </div>
        `,
    }),
}

/**
 * 头像组 - 折叠显示
 *
 * 使用 `max` 属性限制显示数量，超出的头像折叠为 `+N`。
 */
export const GroupCollapse: Story = {
    render: () => ({
        components: { CpAvatar, CpAvatarGroup },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        use collapse-avatars
                    </div>
                    <CpAvatarGroup collapse-avatars :max="1">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=c1' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        use collapse-class and collapse-style
                    </div>
                    <CpAvatarGroup
                        collapse-avatars
                        :max="1"
                        :collapse-style="{ backgroundColor: 'var(--cp-color-info)', color: '#fff' }"
                    >
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=c2' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        use max-collapse-avatars
                    </div>
                    <CpAvatarGroup collapse-avatars :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=c3' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        use collapse-avatars-tooltip
                    </div>
                    <CpAvatarGroup
                        collapse-avatars
                        :max="3"
                        collapse-avatars-tooltip="还有更多用户..."
                    >
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=c4' + i" />
                    </CpAvatarGroup>
                </div>
            </div>
        `,
    }),
}

/**
 * 头像组 - 统一尺寸和形状
 *
 * 通过 `size` 和 `shape` 属性统一控制组内所有头像的尺寸和形状。
 */
export const GroupSizeShape: Story = {
    render: () => ({
        components: { CpAvatar, CpAvatarGroup },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        size="lg" shape="square"
                    </div>
                    <CpAvatarGroup collapse-avatars size="lg" shape="square" :max="4">
                        <CpAvatar v-for="i in 6" :key="i" :src="'https://picsum.photos/100/100?random=ss' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        size="xl" shape="clip"
                    </div>
                    <CpAvatarGroup collapse-avatars size="xl" shape="clip" :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=xl' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        :size="80" (自定义尺寸)
                    </div>
                    <CpAvatarGroup collapse-avatars :size="80" :spacing="-16" :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/200/200?random=80' + i" />
                    </CpAvatarGroup>
                </div>
            </div>
        `,
    }),
}

/**
 * 头像组 - 自定义计数器形状
 *
 * 使用 `collapseShape` 属性单独设置 +N 计数器的形状，可以与头像形状不同。
 */
export const GroupCollapseShape: Story = {
    render: () => ({
        components: { CpAvatar, CpAvatarGroup },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        默认：计数器形状跟随 shape="circle"
                    </div>
                    <CpAvatarGroup collapse-avatars shape="circle" :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=cs1' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        自定义：头像圆形，计数器方形 (collapse-shape="square")
                    </div>
                    <CpAvatarGroup collapse-avatars shape="circle" collapse-shape="square" :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=cs2' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        自定义：头像圆形，计数器切角 (collapse-shape="clip")
                    </div>
                    <CpAvatarGroup collapse-avatars shape="circle" collapse-shape="clip" :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=cs3' + i" />
                    </CpAvatarGroup>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        自定义：头像切角，计数器圆形 (collapse-shape="circle")
                    </div>
                    <CpAvatarGroup collapse-avatars shape="clip" collapse-shape="circle" :max="3">
                        <CpAvatar v-for="i in 5" :key="i" :src="'https://picsum.photos/100/100?random=cs4' + i" />
                    </CpAvatarGroup>
                </div>
            </div>
        `,
    }),
}

/**
 * URL 预处理
 *
 * 使用 `srcProcessor` 和 `processorParams` 对头像 URL 进行预处理。
 * 支持预设处理器（append/replace/tos）或自定义函数。
 */
export const UrlProcessor: Story = {
    render: () => ({
        components: { CpAvatar },
        setup() {
            // 自定义处理器函数
            const customProcessor = (src: string) => {
                return `${src}&grayscale`
            }
            return { customProcessor }
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        原始图片
                    </div>
                    <CpAvatar
                        src="https://picsum.photos/100/100"
                        size="lg"
                    />
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        使用 append 处理器添加查询参数
                    </div>
                    <CpAvatar
                        src="https://picsum.photos/100/100"
                        src-processor="append"
                        :processor-params="{ blur: 2 }"
                        size="lg"
                    />
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        使用自定义处理器函数
                    </div>
                    <CpAvatar
                        src="https://picsum.photos/100/100"
                        :src-processor="customProcessor"
                        size="lg"
                    />
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        仅传 processorParams（默认使用 append）
                    </div>
                    <CpAvatar
                        src="https://picsum.photos/100/100"
                        :processor-params="{ random: 'unique-id' }"
                        size="lg"
                    />
                </div>
            </div>
        `,
    }),
}
