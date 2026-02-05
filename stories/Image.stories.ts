import type { Meta, StoryObj } from '@storybook/vue3'
import { CpImage, CpIcon } from '@cyberpunk-vue/components'
import MdiAlertCircle from '~icons/mdi/alert-circle'

/**
 * CpImage 图片组件
 *
 * 赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。
 */
const meta: Meta<typeof CpImage> = {
    title: '数据展示 Data Display/Image 图片',
    component: CpImage,
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
            description: '图片源地址',
        },
        alt: {
            control: 'text',
            description: '图片描述/替代文本',
        },
        fit: {
            control: 'select',
            options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
            description: '图片适应模式',
        },
        shape: {
            control: 'select',
            options: ['clip', 'no-clip', 'round', 'circle'],
            description: '形状模式',
        },
        lazy: {
            control: 'boolean',
            description: '是否懒加载',
        },
        fallbackSrc: {
            control: 'text',
            description: '加载失败时的回退图片地址',
        },
        width: {
            control: 'text',
            description: '图片宽度',
        },
        height: {
            control: 'text',
            description: '图片高度',
        },
        type: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
            description: '颜色类型（影响装饰块颜色）',
        },
        color: {
            control: 'color',
            description: '自定义装饰块颜色',
        },
        showDecor: {
            control: 'boolean',
            description: '是否显示装饰块（仅 clip 形状生效）',
        },
        hoverable: {
            control: 'boolean',
            description: '是否开启 hover 动画效果',
        },
        hoverMode: {
            control: 'select',
            options: ['scale', 'zoom'],
            description: 'Hover 动画模式：scale-整体放大 / zoom-仅图片放大',
        },
        hoverDuration: {
            control: { type: 'number', min: 0.1, max: 2, step: 0.1 },
            description: 'Hover 动画持续时间（秒）',
        },
        srcProcessor: {
            control: 'text',
            description: 'URL 预处理器（append/replace/tos 或自定义函数）',
        },
        processorParams: {
            control: 'object',
            description: '处理器参数',
        },
        draggable: {
            control: 'boolean',
            description: '是否允许拖拽图片（默认禁止）',
        },
    },
    args: {
        src: 'https://picsum.photos/400/300',
        alt: '示例图片',
        fit: 'cover',
        shape: 'clip',
        lazy: false,
        fallbackSrc: '',
        width: '300px',
        height: '200px',
        type: 'primary',
        color: '',
        showDecor: true,
        hoverable: false,
        hoverMode: 'scale',
        hoverDuration: 0.3,
        srcProcessor: undefined,
        processorParams: undefined,
        draggable: false,
    },
}

export default meta
type Story = StoryObj<typeof CpImage>

/**
 * 基础用法 - 单个可控图片
 */
export const Basic: Story = {
    render: (args) => ({
        components: { CpImage },
        setup() {
            return { args }
        },
        template: `<CpImage v-bind="args" />`,
    }),
}

/**
 * 适应模式
 *
 * 展示不同的图片适应模式效果。
 */
export const FitModes: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div v-for="fit in ['contain', 'cover', 'fill', 'none', 'scale-down']" :key="fit">
                    <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 14px;">
                        fit: {{ fit }}
                    </div>
                    <CpImage
                        src="https://picsum.photos/600/400"
                        :fit="fit"
                        width="300px"
                        height="150px"
                        shape="no-clip"
                    />
                </div>
            </div>
        `,
    }),
}

/**
 * 形状变体
 *
 * - **Clip**: 机甲切角效果（默认）
 * - **No-clip**: 标准直角
 * - **Round**: 圆角效果
 * - **Circle**: 圆形
 */
export const Shapes: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: start;">
                <div v-for="shape in ['clip', 'no-clip', 'round', 'circle']" :key="shape" style="text-align: center;">
                    <CpImage
                        src="https://picsum.photos/200/200"
                        :shape="shape"
                        :width="shape === 'circle' ? '150px' : '200px'"
                        :height="shape === 'circle' ? '150px' : '150px'"
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
 * 懒加载
 *
 * 开启 `lazy` 属性后，图片进入可视区域时才会加载。
 * 向下滚动查看懒加载效果。
 */
export const LazyLoad: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="color: var(--cp-text-secondary); padding: 16px; background: var(--cp-bg-elevated); border-radius: 4px;">
                    提示：向下滚动查看懒加载效果，图片进入视口时才会加载
                </div>
                <div style="height: 300px; overflow-y: auto; border: 1px solid var(--cp-border-color); padding: 16px;">
                    <div style="height: 400px; display: flex; align-items: center; justify-content: center; color: var(--cp-text-muted);">
                        ↓ 向下滚动 ↓
                    </div>
                    <CpImage
                        src="https://picsum.photos/400/250?random=1"
                        lazy
                        width="100%"
                        height="200px"
                    />
                    <div style="height: 100px;"></div>
                    <CpImage
                        src="https://picsum.photos/400/250?random=2"
                        lazy
                        width="100%"
                        height="200px"
                    />
                    <div style="height: 100px;"></div>
                    <CpImage
                        src="https://picsum.photos/400/250?random=3"
                        lazy
                        width="100%"
                        height="200px"
                    />
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
        components: { CpImage },
        template: `
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <div style="text-align: center;">
                    <CpImage
                        src="https://invalid-url-that-will-fail.com/image.jpg"
                        width="200px"
                        height="150px"
                    />
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        无回退图片
                    </div>
                </div>
                <div style="text-align: center;">
                    <CpImage
                        src="https://invalid-url-that-will-fail.com/image.jpg"
                        fallback-src="https://picsum.photos/200/150"
                        width="200px"
                        height="150px"
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
 * 自定义插槽
 *
 * 使用 `placeholder` 和 `error` 插槽自定义加载和错误状态的显示内容。
 */
export const CustomSlots: Story = {
    render: () => ({
        components: { CpImage, CpIcon },
        setup() {
            return { MdiAlertCircle }
        },
        template: `
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <div style="text-align: center;">
                    <CpImage
                        src="https://invalid-url-that-will-fail.com/image.jpg"
                        width="200px"
                        height="150px"
                    >
                        <template #error>
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--cp-color-error);">
                                <CpIcon :icon="MdiAlertCircle" :size="32" />
                                <span style="font-size: 12px;">图片加载失败</span>
                            </div>
                        </template>
                    </CpImage>
                    <div style="color: var(--cp-text-muted); margin-top: 8px; font-size: 12px;">
                        自定义错误插槽
                    </div>
                </div>
            </div>
        `,
    }),
}

/**
 * 头像展示
 *
 * 使用圆形形状展示用户头像。
 */
export const Avatar: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: flex; gap: 16px; align-items: end;">
                <CpImage
                    src="https://picsum.photos/64/64?random=a"
                    shape="circle"
                    :width="32"
                    :height="32"
                />
                <CpImage
                    src="https://picsum.photos/64/64?random=b"
                    shape="circle"
                    :width="48"
                    :height="48"
                />
                <CpImage
                    src="https://picsum.photos/128/128?random=c"
                    shape="circle"
                    :width="64"
                    :height="64"
                />
                <CpImage
                    src="https://picsum.photos/200/200?random=d"
                    shape="circle"
                    :width="96"
                    :height="96"
                />
            </div>
        `,
    }),
}

/**
 * 图片画廊
 *
 * 多图片网格展示。
 */
export const Gallery: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 600px;">
                <CpImage
                    v-for="i in 6"
                    :key="i"
                    :src="'https://picsum.photos/300/200?random=' + i"
                    height="120px"
                />
            </div>
        `,
    }),
}

/**
 * 颜色类型与自定义颜色
 *
 * 使用 `type` 属性设置装饰块颜色预设，或使用 `color` 自定义颜色。
 */
export const DecorColors: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 14px;">
                        颜色类型 (type)
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <div v-for="t in ['primary', 'success', 'warning', 'error', 'info']" :key="t" style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100"
                                :type="t"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">{{ t }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 14px;">
                        自定义颜色 (color)
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <CpImage src="https://picsum.photos/150/100?a" color="#ff00ff" width="150px" height="100px" />
                        <CpImage src="https://picsum.photos/150/100?b" color="#00ffff" width="150px" height="100px" />
                        <CpImage src="https://picsum.photos/150/100?c" color="#ffff00" width="150px" height="100px" />
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 8px; font-size: 14px;">
                        隐藏装饰块 (showDecor=false)
                    </div>
                    <CpImage src="https://picsum.photos/200/120" :show-decor="false" width="200px" height="120px" />
                </div>
            </div>
        `,
    }),
}

/**
 * Hover 动画效果
 *
 * - **Scale 模式**: 整体放大
 * - **Zoom 模式**: 容器不变，仅图片放大
 * - 可通过 `hoverDuration` 控制动画时间
 */
export const Hoverable: Story = {
    render: () => ({
        components: { CpImage },
        template: `
            <div style="display: flex; flex-direction: column; gap: 32px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        Scale 模式 - 整体放大
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <div v-for="t in ['default', 'primary', 'success', 'warning', 'error', 'info']" :key="t" style="text-align: center;">
                            <CpImage
                                :src="'https://picsum.photos/150/100?scale=' + t"
                                :type="t"
                                hoverable
                                hover-mode="scale"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">{{ t }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        Zoom 模式 - 容器不变，仅图片放大
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <div v-for="t in ['default', 'primary', 'success', 'warning', 'error', 'info']" :key="t" style="text-align: center;">
                            <CpImage
                                :src="'https://picsum.photos/150/100?zoom=' + t"
                                :type="t"
                                hoverable
                                hover-mode="zoom"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">{{ t }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        自定义动画时间
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: end;">
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100?fast"
                                hoverable
                                :hover-duration="0.15"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">0.15s (快)</div>
                        </div>
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100?normal"
                                hoverable
                                :hover-duration="0.3"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">0.3s (默认)</div>
                        </div>
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100?slow"
                                hoverable
                                :hover-duration="0.6"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">0.6s (慢)</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
    }),
}

/**
 * URL 预处理器
 *
 * 使用 `srcProcessor` 和 `processorParams` 对图片 URL 进行预处理。
 * 
 * - **append**: 追加查询参数
 * - **replace**: 替换 URL
 * - **tos**: 火山引擎图像处理
 * - 也可传入自定义函数
 */
export const SrcProcessor: Story = {
    render: () => ({
        components: { CpImage },
        setup() {
            // 自定义处理器函数
            const customProcessor = (src: string, params: { suffix: string }) => {
                return `${src}${params.suffix}`
            }
            return { customProcessor }
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 32px;">
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        append 处理器 - 追加查询参数
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: start;">
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100"
                                src-processor="append"
                                :processor-params="{ blur: 2 }"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">
                                params: { blur: 2 }
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100?random=1"
                                src-processor="append"
                                processor-params="grayscale"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">
                                params: "grayscale"
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        自定义处理器函数
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100"
                                :src-processor="customProcessor"
                                :processor-params="{ suffix: '?custom=true' }"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">
                                自定义函数
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="color: var(--cp-text-muted); margin-bottom: 12px; font-size: 14px;">
                        默认行为 - 仅传 processorParams 时自动使用 append
                    </div>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <CpImage
                                src="https://picsum.photos/150/100"
                                :processor-params="{ auto: 'format' }"
                                width="150px"
                                height="100px"
                            />
                            <div style="color: var(--cp-text-muted); margin-top: 4px; font-size: 12px;">
                                自动 append
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
    }),
}
