import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
    CpConfigProvider,
    CpButton,
    CpTag,
    CpProgress,
    CpSwitch,
    CpSlider,
    CpInput
} from '@cyberpunk-vue/components'

const meta: Meta<typeof CpConfigProvider> = {
    title: '配置 Config/ConfigProvider 全局配置',
    component: CpConfigProvider,
    parameters: {
        docs: {
            description: {
                component: '全局配置提供者，用于设置组件默认值和主题。'
            }
        }
    },
    argTypes: {
        theme: {
            control: 'select',
            options: ['dark', 'light'],
            description: '主题模式'
        }
    }
}

export default meta
type Story = StoryObj<typeof CpConfigProvider>

/**
 * 使用 ConfigProvider 设置全局默认的按钮尺寸为 lg
 */
export const DefaultSize: Story = {
    name: '全局默认尺寸',
    render: () => ({
        components: { CpConfigProvider, CpButton },
        setup() {
            const defaults = {
                button: { size: 'lg' }
            }
            return { defaults }
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <p style="color: #a0a0b0; margin-bottom: 12px;">无 ConfigProvider（默认 md）:</p>
                    <CpButton>默认按钮</CpButton>
                </div>
                
                <div>
                    <p style="color: #a0a0b0; margin-bottom: 12px;">有 ConfigProvider（默认 lg）:</p>
                    <CpConfigProvider :defaults="defaults">
                        <CpButton>变大的按钮</CpButton>
                    </CpConfigProvider>
                </div>
            </div>
        `
    })
}

/**
 * 使用 ConfigProvider 切换主题
 */
export const ThemeSwitch: Story = {
    name: '主题切换',
    render: () => ({
        components: { CpConfigProvider, CpButton },
        setup() {
            const theme = ref<'dark' | 'light'>('dark')
            const toggleTheme = () => {
                theme.value = theme.value === 'dark' ? 'light' : 'dark'
            }
            return { theme, toggleTheme }
        },
        template: `
            <CpConfigProvider :theme="theme">
                <div style="display: flex; gap: 16px; align-items: center;">
                    <CpButton @click="toggleTheme">
                        切换主题: {{ theme }}
                    </CpButton>
                    <CpButton type="success">成功按钮</CpButton>
                    <CpButton type="error">错误按钮</CpButton>
                </div>
            </CpConfigProvider>
        `
    })
}

/**
 * 多组件默认值配置
 */
export const MultipleDefaults: Story = {
    name: '多组件配置',
    render: () => ({
        components: { CpConfigProvider, CpButton },
        setup() {
            const defaults = {
                button: {
                    size: 'sm',
                    type: 'success',
                    variant: 'semi'
                }
            }
            return { defaults }
        },
        template: `
            <CpConfigProvider :defaults="defaults">
                <div style="display: flex; gap: 16px;">
                    <CpButton>继承全部默认</CpButton>
                    <CpButton type="primary">覆盖 type</CpButton>
                    <CpButton size="lg">覆盖 size</CpButton>
                </div>
            </CpConfigProvider>
        `
    })
}

/**
 * 使用 ConfigProvider 自定义全局主题色
 *
 * 通过修改 CSS 变量 `--cp-color-primary` 可以统一更改所有使用主色调的组件外观
 */
export const GlobalThemeColor: Story = {
    name: '🎨 全局主题色',
    render: () => ({
        components: { CpConfigProvider, CpButton, CpTag, CpProgress, CpSwitch, CpSlider, CpInput },
        setup() {
            const switchValue = ref(true)
            const sliderValue = ref(50)
            const inputValue = ref('')
            const currentColor = ref('#00f0ff')

            const themeColors = [
                { name: '赛博青', color: '#00f0ff' },
                { name: '珊瑚红', color: '#ff6b6b' },
                { name: '薄荷绿', color: '#4ecdc4' },
                { name: '霓虹紫', color: '#a29bfe' },
                { name: '樱花粉', color: '#fd79a8' },
                { name: '柠檬黄', color: '#ffe66d' },
                { name: '电光橙', color: '#ff9f43' }
            ]

            const setThemeColor = (color: string) => {
                currentColor.value = color
                document.documentElement.style.setProperty('--cp-color-primary', color)
                document.documentElement.style.setProperty('--cp-color-primary-light', color + '33')
            }

            const resetTheme = () => {
                currentColor.value = '#00f0ff'
                document.documentElement.style.removeProperty('--cp-color-primary')
                document.documentElement.style.removeProperty('--cp-color-primary-light')
            }

            return {
                switchValue,
                sliderValue,
                inputValue,
                currentColor,
                themeColors,
                setThemeColor,
                resetTheme
            }
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <!-- 主题色选择器 -->
                <div>
                    <p style="color: var(--cp-text-secondary); margin-bottom: 12px; font-size: 14px;">
                        🎨 选择全局主题色：
                    </p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                        <CpButton
                            v-for="theme in themeColors"
                            :key="theme.color"
                            :color="theme.color"
                            size="sm"
                            @click="setThemeColor(theme.color)"
                        >
                            {{ theme.name }}
                        </CpButton>
                        <CpButton variant="outline" size="sm" @click="resetTheme">
                            🔄 重置
                        </CpButton>
                    </div>
                </div>

                <!-- 自定义颜色选择器 -->
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="color: var(--cp-text-secondary); font-size: 14px;">自定义颜色：</span>
                    <input
                        type="color"
                        :value="currentColor"
                        @input="setThemeColor($event.target.value)"
                        style="width: 40px; height: 32px; border: none; cursor: pointer; background: transparent;"
                    />
                    <code style="color: var(--cp-color-primary); font-family: monospace;">{{ currentColor }}</code>
                </div>

                <!-- 组件展示区 -->
                <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; background: var(--cp-bg-elevated); border-radius: 8px;">
                    
                    <!-- 按钮组 -->
                    <div>
                        <p style="color: var(--cp-text-tertiary); margin-bottom: 8px; font-size: 12px;">Button 按钮</p>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                            <CpButton type="primary">Primary 主要</CpButton>
                            <CpButton type="primary" variant="outline">Outline</CpButton>
                            <CpButton type="primary" variant="semi">Semi</CpButton>
                            <CpButton type="primary" variant="neon">Neon</CpButton>
                            <CpButton type="primary" variant="ghost">Ghost</CpButton>
                        </div>
                    </div>

                    <!-- 标签组 -->
                    <div>
                        <p style="color: var(--cp-text-tertiary); margin-bottom: 8px; font-size: 12px;">Tag 标签</p>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <CpTag type="primary">Primary 标签</CpTag>
                            <CpTag type="primary" variant="solid">Solid</CpTag>
                            <CpTag type="primary" variant="outline">Outline</CpTag>
                            <CpTag type="primary" closable>可关闭</CpTag>
                        </div>
                    </div>

                    <!-- 进度条 -->
                    <div>
                        <p style="color: var(--cp-text-tertiary); margin-bottom: 8px; font-size: 12px;">Progress 进度条</p>
                        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
                            <CpProgress :percentage="75" />
                            <div style="display: flex; gap: 16px;">
                                <CpProgress type="circle" :percentage="75" :width="60" />
                                <CpProgress type="dashboard" :percentage="75" :width="60" />
                            </div>
                        </div>
                    </div>

                    <!-- 开关和滑块 -->
                    <div>
                        <p style="color: var(--cp-text-tertiary); margin-bottom: 8px; font-size: 12px;">Switch 开关 & Slider 滑块</p>
                        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
                            <CpSwitch v-model="switchValue" />
                            <div style="width: 200px;">
                                <CpSlider v-model="sliderValue" />
                            </div>
                        </div>
                    </div>

                    <!-- 输入框 -->
                    <div>
                        <p style="color: var(--cp-text-tertiary); margin-bottom: 8px; font-size: 12px;">Input 输入框</p>
                        <div style="max-width: 300px;">
                            <CpInput v-model="inputValue" placeholder="聚焦时可见主题色" />
                        </div>
                    </div>
                </div>

                <!-- 提示信息 -->
                <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0;">
                    💡 通过修改 CSS 变量 <code style="color: var(--cp-color-primary);">--cp-color-primary</code>
                    可以统一更改所有使用主色调的组件外观。支持任意 HEX/RGB 颜色值。
                </p>
            </div>
        `
    })
}
