import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref } from 'vue'
import {
    CpConfigProvider,
    CpAvatar,
    CpBadge,
    CpButton,
    CpCard,
    CpCheckbox,
    CpCheckboxGroup,
    CpDivider,
    CpImage,
    CpInputNumber,
    CpRadio,
    CpRadioGroup,
    CpSegmented,
    CpSelect,
    CpTag,
    CpTable,
    CpTableColumn,
    CpText,
    CpTextarea,
    CpProgress,
    CpSwitch,
    CpSlider,
    CpInput
} from '@cyberpunk-vue/components'

const meta: Meta<typeof CpConfigProvider> = {
    title: '配置 Config/ConfigProvider 全局配置',
    component: CpConfigProvider,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: '全局配置提供者，用于设置组件默认值、深浅色主题和作用域主题变量。'
            }
        }
    },
    argTypes: {
        theme: {
            control: 'select',
            options: ['dark', 'light', 'system'],
            description: '主题模式',
            table: { defaultValue: { summary: 'dark' } }
        },
        defaults: {
            control: 'object',
            description: '组件默认 props 配置，支持按组件名覆盖'
        },
        themeOverrides: {
            control: 'object',
            description: '主题 CSS 变量覆盖，支持 colorPrimary / color-primary / --cp-color-primary'
        },
        syncDocument: {
            control: 'boolean',
            description: '是否同步主题和主题变量到 document.documentElement',
            table: { defaultValue: { summary: 'true' } }
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
 * 使用 ConfigProvider 设置 Button 的默认外观
 */
export const ButtonAppearanceDefaults: Story = {
    name: '按钮默认外观',
    render: () => ({
        components: { CpConfigProvider, CpButton },
        setup() {
            const defaults = {
                button: {
                    variant: 'ghost',
                    type: 'primary',
                    shape: 'round'
                }
            }

            return { defaults }
        },
        template: `
            <CpConfigProvider :defaults="defaults">
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <CpButton>继承 ghost / primary / round</CpButton>
                        <CpButton variant="solid">显式覆盖 variant</CpButton>
                        <CpButton type="success">显式覆盖 type</CpButton>
                        <CpButton shape="clip">显式覆盖 shape</CpButton>
                    </div>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <CpConfigProvider :defaults="{ Button: { size: 'lg', variant: 'semi' } }">
                            <CpButton>嵌套覆盖 size / variant</CpButton>
                            <CpButton size="sm">显式覆盖 size</CpButton>
                        </CpConfigProvider>
                    </div>
                </div>
            </CpConfigProvider>
        `
    })
}

/**
 * 一个完整的主题与默认值实验台，集中展示 ConfigProvider 对多数常用组件的影响。
 */
export const AdvancedThemeLab: Story = {
    name: '高级主题实验室',
    render: () => ({
        components: {
            CpConfigProvider,
            CpAvatar,
            CpBadge,
            CpButton,
            CpCard,
            CpCheckbox,
            CpCheckboxGroup,
            CpDivider,
            CpImage,
            CpInput,
            CpInputNumber,
            CpProgress,
            CpRadio,
            CpRadioGroup,
            CpSegmented,
            CpSelect,
            CpSlider,
            CpSwitch,
            CpTag,
            CpTable,
            CpTableColumn,
            CpText,
            CpTextarea
        },
        setup() {
            const theme = ref<'dark' | 'light' | 'system'>('dark')
            const type = ref('primary')
            const size = ref('md')
            const shape = ref('clip')
            const buttonVariant = ref('ghost')
            const fieldVariant = ref('filled')
            const cardVariant = ref('solid')
            const tagVariant = ref('outline')
            const badgeVariant = ref('glow')
            const density = ref<'compact' | 'comfortable'>('comfortable')
            const accent = ref('#00f0ff')
            const lightAccent = ref('#0077ff')
            const surface = ref('#18181c')
            const animated = ref(true)
            const bordered = ref(true)

            const inputValue = ref('默认值由 ConfigProvider 注入')
            const textareaValue = ref('同一组 defaults 会同时影响表单、展示和反馈组件。')
            const inputNumberValue = ref(42)
            const selectValue = ref('ops')
            const checkboxValue = ref(['monitor', 'deploy'])
            const radioValue = ref('auto')
            const switchValue = ref(true)
            const sliderValue = ref(68)
            const segmentedValue = ref('overview')

            const typeOptions = ['primary', 'success', 'warning', 'error', 'info'] as const
            const sizeOptions = ['sm', 'md', 'lg'] as const
            const shapeOptions = ['clip', 'round', 'no-clip'] as const
            const buttonVariants = ['solid', 'outline', 'ghost', 'neon', 'semi'] as const
            const fieldVariants = ['outline', 'filled', 'ghost'] as const
            const cardVariants = ['solid', 'outline', 'semi', 'ghost', 'neon', 'cyber'] as const
            const palette = [
                { name: '赛博青', value: '#00f0ff', lightValue: '#0077ff', surface: '#18181c' },
                { name: '霓虹绿', value: '#39ff14', lightValue: '#00a66a', surface: '#111c16' },
                { name: '警戒黄', value: '#ffe66d', lightValue: '#f5a524', surface: '#201b10' },
                { name: '电光橙', value: '#ff9f43', lightValue: '#f97316', surface: '#201713' },
                { name: '樱花粉', value: '#fd79a8', lightValue: '#e83e8c', surface: '#231720' },
                { name: '脉冲紫', value: '#a29bfe', lightValue: '#7c3aed', surface: '#18172a' }
            ]
            const selectOptions = [
                { label: '运维控制台', value: 'ops' },
                { label: '告警中心', value: 'alerts' },
                { label: '资产视图', value: 'assets' },
                { label: '审计日志', value: 'audit' }
            ]
            const segmentedOptions = [
                { label: '总览', value: 'overview' },
                { label: '指标', value: 'metrics' },
                { label: '事件', value: 'events' },
                { label: '配置', value: 'settings' }
            ]
            const tableData = [
                { id: 1, service: 'Gateway', owner: 'Core', status: 'success', latency: '18ms', traffic: '84%' },
                { id: 2, service: 'Billing', owner: 'Finance', status: 'warning', latency: '42ms', traffic: '61%' },
                { id: 3, service: 'Vision', owner: 'AI', status: 'info', latency: '27ms', traffic: '73%' },
                { id: 4, service: 'Audit', owner: 'Risk', status: 'error', latency: '96ms', traffic: '38%' }
            ]
            const activeAccent = computed(() => theme.value === 'light' ? lightAccent.value : accent.value)
            const imageSrc = computed(() => {
                const color = activeAccent.value
                const isLight = theme.value === 'light'
                const textColor = isLight ? '#111827' : '#ffffff'
                const endColor = isLight ? '#eef3f8' : surface.value
                const accentOpacity = isLight ? '0.48' : '0.78'
                const endOpacity = isLight ? '1' : '0.95'
                return `data:image/svg+xml,${encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
                        <defs>
                            <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                                <stop stop-color="${color}" stop-opacity="${accentOpacity}"/>
                                <stop offset="1" stop-color="${endColor}" stop-opacity="${endOpacity}"/>
                            </linearGradient>
                            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                                <path d="M32 0H0V32" fill="none" stroke="${textColor}" stroke-opacity="0.16"/>
                            </pattern>
                        </defs>
                        <rect width="640" height="360" fill="url(#bg)"/>
                        <rect width="640" height="360" fill="url(#grid)"/>
                        <path d="M70 254 188 118h124l76 84 82-118h94" fill="none" stroke="${textColor}" stroke-width="16" stroke-linecap="square" stroke-linejoin="round" opacity="0.82"/>
                        <circle cx="188" cy="118" r="28" fill="${textColor}" opacity="0.85"/>
                        <circle cx="388" cy="202" r="22" fill="${color}" stroke="${textColor}" stroke-width="8"/>
                        <text x="64" y="72" fill="${textColor}" font-family="Inter, Arial" font-size="34" font-weight="700">THEME ASSET</text>
                    </svg>
                `)}`
            })
            const rowClassName = ({ row }: { row: { status: string } }) => `is-${row.status}-row`

            const setAccent = (value: string) => {
                if (theme.value === 'light') {
                    lightAccent.value = value
                    return
                }
                accent.value = value
            }
            const semanticTokens = computed(() => {
                if (theme.value === 'light') {
                    return {
                        colorSuccess: '#00a66a',
                        colorWarning: '#f5a524',
                        colorError: '#e11d48',
                        colorInfo: '#7c3aed',
                        semanticLightAlpha: 10,
                        semanticDarkMix: 82
                    }
                }

                return {
                    colorSuccess: '#39ff14',
                    colorWarning: '#ff9f1c',
                    colorError: '#ff0055',
                    colorInfo: '#7b68ee',
                    semanticLightAlpha: 20,
                    semanticDarkMix: 85
                }
            })

            const canvasTokens = computed(() => {
                if (theme.value === 'light') {
                    return {
                        bgDeep: '#f2f5fa',
                        bgBase: '#ffffff',
                        bgElevated: '#ffffff',
                        surface: '#ffffff',
                        surfaceVariant: '#f7f9fc',
                        surfaceBright: '#eef3f8',
                        borderDefault: '#d7deea',
                        textPrimary: '#111827',
                        textSecondary: '#4b5563',
                        textMuted: '#8a94a6'
                    }
                }

                return {
                    bgDeep: '#05060b',
                    bgBase: '#0d0e14',
                    bgElevated: surface.value,
                    surface: '#101014',
                    surfaceVariant: surface.value,
                    surfaceBright: `color-mix(in srgb, ${surface.value} 80%, ${activeAccent.value})`,
                    borderDefault: `color-mix(in srgb, ${activeAccent.value} 20%, #282830)`,
                    textPrimary: '#ffffff',
                    textSecondary: '#a0a0b0',
                    textMuted: '#606070'
                }
            })

            const themeOverrides = computed(() => ({
                ...canvasTokens.value,
                colorPrimary: activeAccent.value,
                colorPrimaryLight: `color-mix(in srgb, ${activeAccent.value} ${theme.value === 'light' ? 10 : 22}%, transparent)`,
                colorPrimaryDark: `color-mix(in srgb, ${activeAccent.value} ${theme.value === 'light' ? 82 : 82}%, black)`,
                colorSuccess: semanticTokens.value.colorSuccess,
                colorSuccessLight: `color-mix(in srgb, ${semanticTokens.value.colorSuccess} ${semanticTokens.value.semanticLightAlpha}%, transparent)`,
                colorSuccessDark: `color-mix(in srgb, ${semanticTokens.value.colorSuccess} ${semanticTokens.value.semanticDarkMix}%, black)`,
                colorWarning: semanticTokens.value.colorWarning,
                colorWarningLight: `color-mix(in srgb, ${semanticTokens.value.colorWarning} ${semanticTokens.value.semanticLightAlpha}%, transparent)`,
                colorWarningDark: `color-mix(in srgb, ${semanticTokens.value.colorWarning} ${semanticTokens.value.semanticDarkMix}%, black)`,
                colorError: semanticTokens.value.colorError,
                colorErrorLight: `color-mix(in srgb, ${semanticTokens.value.colorError} ${semanticTokens.value.semanticLightAlpha}%, transparent)`,
                colorErrorDark: `color-mix(in srgb, ${semanticTokens.value.colorError} ${semanticTokens.value.semanticDarkMix}%, black)`,
                colorInfo: semanticTokens.value.colorInfo,
                colorInfoLight: `color-mix(in srgb, ${semanticTokens.value.colorInfo} ${semanticTokens.value.semanticLightAlpha}%, transparent)`,
                colorInfoDark: `color-mix(in srgb, ${semanticTokens.value.colorInfo} ${semanticTokens.value.semanticDarkMix}%, black)`,
                borderActive: activeAccent.value,
                borderFocus: activeAccent.value,
                stateSelected: `color-mix(in srgb, ${activeAccent.value} ${theme.value === 'light' ? 8 : 16}%, transparent)`,
                stateFocusRing: `color-mix(in srgb, ${activeAccent.value} ${theme.value === 'light' ? 20 : 42}%, transparent)`,
                radiusMd: shape.value === 'round' ? '12px' : '6px',
                radiusLg: shape.value === 'round' ? '16px' : '8px'
            }))

            const defaults = computed(() => ({
                button: {
                    size: size.value,
                    type: type.value,
                    variant: buttonVariant.value,
                    shape: shape.value,
                    dashed: buttonVariant.value === 'outline' && animated.value
                },
                tag: {
                    size: size.value,
                    type: type.value,
                    variant: tagVariant.value,
                    shape: shape.value,
                    closable: density.value === 'comfortable'
                },
                input: {
                    size: size.value,
                    variant: fieldVariant.value,
                    shape: shape.value === 'no-clip' ? 'no-clip' : shape.value,
                    clearable: true
                },
                textarea: {
                    size: size.value,
                    shape: shape.value === 'no-clip' ? 'no-clip' : shape.value,
                    variant: fieldVariant.value === 'ghost' ? 'outline' : fieldVariant.value,
                    rows: density.value === 'compact' ? 2 : 4,
                    showWordLimit: true,
                    maxlength: 120
                },
                inputNumber: {
                    size: size.value,
                    shape: shape.value === 'no-clip' ? 'no-clip' : shape.value,
                    controlsPosition: density.value === 'compact' ? 'right' : 'both',
                    step: density.value === 'compact' ? 5 : 1
                },
                select: {
                    size: size.value,
                    variant: fieldVariant.value,
                    shape: shape.value === 'no-clip' ? 'no-clip' : shape.value,
                    clearable: true,
                    filterable: true
                },
                switch: {
                    size: size.value,
                    type: type.value,
                    shape: shape.value === 'no-clip' ? 'no-clip' : shape.value,
                    fitText: density.value === 'comfortable',
                    activeText: 'ON',
                    inactiveText: 'OFF'
                },
                slider: {
                    size: size.value,
                    type: type.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    showStops: animated.value,
                    step: 10
                },
                progress: {
                    size: size.value === 'lg' ? 'xl' : size.value,
                    status: type.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    striped: animated.value,
                    stripedFlow: animated.value,
                    textInside: density.value === 'compact'
                },
                checkbox: {
                    size: size.value,
                    type: type.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    border: bordered.value
                },
                checkboxGroup: {
                    size: size.value,
                    type: type.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    direction: density.value === 'compact' ? 'vertical' : 'horizontal'
                },
                radio: {
                    size: size.value,
                    type: type.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    border: bordered.value,
                    glow: animated.value
                },
                radioGroup: {
                    size: size.value,
                    type: type.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    direction: density.value === 'compact' ? 'vertical' : 'horizontal'
                },
                segmented: {
                    size: size.value,
                    type: type.value,
                    variant: buttonVariant.value,
                    shape: shape.value,
                    clearable: true
                },
                badge: {
                    type: type.value,
                    variant: badgeVariant.value,
                    size: size.value === 'sm' ? 'small' : size.value === 'lg' ? 'large' : 'default',
                    showZero: true
                },
                avatar: {
                    size: size.value === 'sm' ? 'sm' : size.value === 'lg' ? 'xl' : 'lg',
                    shape: shape.value === 'clip' ? 'clip' : shape.value === 'round' ? 'square' : 'circle'
                },
                text: {
                    size: size.value,
                    type: type.value,
                    glow: animated.value,
                    glowPulse: animated.value && density.value === 'comfortable',
                    marker: buttonVariant.value === 'semi'
                },
                image: {
                    type: type.value,
                    shape: shape.value === 'no-clip' ? 'no-clip' : shape.value,
                    hoverable: animated.value,
                    hoverMode: density.value === 'compact' ? 'zoom' : 'scale',
                    decorPosition: 'top-right'
                },
                table: {
                    size: size.value,
                    type: type.value,
                    stripe: true,
                    border: bordered.value,
                    highlightCurrentRow: true,
                    resizable: density.value === 'comfortable'
                },
                card: {
                    type: type.value,
                    variant: cardVariant.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    shadow: animated.value ? 'hover' : 'always',
                    hoverScale: animated.value,
                    bodyPadding: density.value === 'compact' ? '14px' : '20px'
                }
            }))

            const setPalette = (item: typeof palette[number]) => {
                accent.value = item.value
                lightAccent.value = item.lightValue
                surface.value = item.surface
            }

            const resetLab = () => {
                theme.value = 'dark'
                type.value = 'primary'
                size.value = 'md'
                shape.value = 'clip'
                buttonVariant.value = 'ghost'
                fieldVariant.value = 'filled'
                cardVariant.value = 'solid'
                tagVariant.value = 'outline'
                badgeVariant.value = 'glow'
                density.value = 'comfortable'
                accent.value = '#00f0ff'
                lightAccent.value = '#0077ff'
                surface.value = '#18181c'
                animated.value = true
                bordered.value = true
            }

            return {
                theme,
                type,
                size,
                shape,
                buttonVariant,
                fieldVariant,
                cardVariant,
                tagVariant,
                badgeVariant,
                density,
                accent,
                lightAccent,
                activeAccent,
                surface,
                animated,
                bordered,
                inputValue,
                textareaValue,
                inputNumberValue,
                selectValue,
                checkboxValue,
                radioValue,
                switchValue,
                sliderValue,
                segmentedValue,
                tableData,
                imageSrc,
                rowClassName,
                typeOptions,
                sizeOptions,
                shapeOptions,
                buttonVariants,
                fieldVariants,
                cardVariants,
                palette,
                selectOptions,
                segmentedOptions,
                themeOverrides,
                defaults,
                setPalette,
                setAccent,
                resetLab
            }
        },
        template: `
            <CpConfigProvider :theme="theme" :theme-overrides="themeOverrides" :defaults="defaults">
                <div
                    data-theme-lab-shell
                    style="
                        min-height: 100vh;
                        margin: -16px;
                        padding: 24px;
                        color: var(--cp-text-primary);
                        background:
                            linear-gradient(135deg, var(--cp-bg-deep) 0%, var(--cp-bg-base) 46%, var(--cp-surface-variant) 100%);
                        transition:
                            background var(--cp-transition-normal),
                            color var(--cp-transition-normal);
                    "
                >
                <div style="display: grid; grid-template-columns: minmax(260px, 320px) minmax(0, 1fr); gap: 20px; align-items: start;">
                    <CpCard title="主题与默认值" variant="outline" :hover-scale="false" body-padding="16px" style="position: sticky; top: 16px;">
                        <div style="display: grid; gap: 18px;">
                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">主题模式</div>
                                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                    <CpButton v-for="item in ['dark', 'light', 'system']" :key="item" size="sm" :variant="theme === item ? 'solid' : 'ghost'" @click="theme = item">
                                        {{ item }}
                                    </CpButton>
                                </div>
                            </div>

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">主题色</div>
                                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                    <CpButton v-for="item in palette" :key="item.name" size="sm" :color="theme === 'light' ? item.lightValue : item.value" @click="setPalette(item)">
                                        {{ item.name }}
                                    </CpButton>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <input type="color" :value="activeAccent" @input="setAccent($event.target.value)" style="width: 36px; height: 30px; border: 0; background: transparent;" />
                                    <code style="color: var(--cp-color-primary); font-size: 12px;">{{ activeAccent }}</code>
                                </div>
                            </div>

                            <CpDivider />

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">语义类型</div>
                                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                    <CpButton v-for="item in typeOptions" :key="item" size="sm" :type="item" :variant="type === item ? 'solid' : 'outline'" @click="type = item">
                                        {{ item }}
                                    </CpButton>
                                </div>
                            </div>

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">尺寸</div>
                                <CpSegmented v-model="size" :options="sizeOptions.map(item => ({ label: item, value: item }))" />
                            </div>

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">形状</div>
                                <CpSegmented v-model="shape" :options="shapeOptions.map(item => ({ label: item, value: item }))" />
                            </div>

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">Button / Segmented 变体</div>
                                <CpSelect v-model="buttonVariant" :options="buttonVariants.map(item => ({ label: item, value: item }))" />
                            </div>

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">Field 变体</div>
                                <CpSelect v-model="fieldVariant" :options="fieldVariants.map(item => ({ label: item, value: item }))" />
                            </div>

                            <div style="display: grid; gap: 8px;">
                                <div style="color: var(--cp-text-secondary); font-size: 12px;">Card 变体</div>
                                <CpSelect v-model="cardVariant" :options="cardVariants.map(item => ({ label: item, value: item }))" />
                            </div>

                            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                <CpSwitch v-model="animated" active-text="动态" inactive-text="静态" />
                                <CpSwitch v-model="bordered" active-text="边框" inactive-text="无框" />
                                <CpButton size="sm" variant="outline" @click="density = density === 'compact' ? 'comfortable' : 'compact'">
                                    {{ density }}
                                </CpButton>
                                <CpButton size="sm" variant="outline" @click="resetLab">重置</CpButton>
                            </div>
                        </div>
                    </CpCard>

                    <div style="display: grid; gap: 20px;">
                        <CpCard title="无 prop 继承 defaults" style="min-width: 0;">
                            <div style="display: grid; gap: 18px;">
                                <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                    <CpButton>继承 Button</CpButton>
                                    <CpButton>默认操作</CpButton>
                                    <CpButton variant="solid">显式 solid</CpButton>
                                    <CpButton type="success">显式 success</CpButton>
                                    <CpBadge :value="12"><CpButton>带 Badge</CpButton></CpBadge>
                                </div>

                                <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                                    <CpTag>继承 Tag</CpTag>
                                    <CpTag>可关闭标签</CpTag>
                                    <CpTag variant="solid">显式 solid</CpTag>
                                    <CpBadge :value="0"><CpAvatar>AI</CpAvatar></CpBadge>
                                    <CpAvatar>CP</CpAvatar>
                                    <CpAvatar>UX</CpAvatar>
                                </div>

                                <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                    <CpText>继承 Text</CpText>
                                    <CpText boxed>Boxed</CpText>
                                    <CpText underline dashed>Underline</CpText>
                                    <CpText marker bold>Marker</CpText>
                                </div>

                                <CpSegmented v-model="segmentedValue" :options="segmentedOptions" />
                            </div>
                        </CpCard>

                        <CpCard title="表单组件矩阵">
                            <div style="display: grid; grid-template-columns: repeat(2, minmax(240px, 1fr)); gap: 18px;">
                                <div style="display: grid; gap: 12px;">
                                    <CpInput v-model="inputValue" />
                                    <CpSelect v-model="selectValue" :options="selectOptions" />
                                    <CpInputNumber v-model="inputNumberValue" :min="0" :max="100" />
                                    <CpTextarea v-model="textareaValue" />
                                </div>

                                <div style="display: grid; gap: 18px;">
                                    <CpCheckboxGroup v-model="checkboxValue">
                                        <CpCheckbox label="monitor">监控</CpCheckbox>
                                        <CpCheckbox label="deploy">部署</CpCheckbox>
                                        <CpCheckbox label="audit">审计</CpCheckbox>
                                    </CpCheckboxGroup>

                                    <CpRadioGroup v-model="radioValue">
                                        <CpRadio value="manual" label="手动" />
                                        <CpRadio value="auto" label="自动" />
                                        <CpRadio value="safe" label="安全" />
                                    </CpRadioGroup>

                                    <div style="display: grid; gap: 12px;">
                                        <CpSwitch v-model="switchValue" />
                                        <CpSlider v-model="sliderValue" :marks="{ 0: '0', 50: '50', 100: '100' }" />
                                    </div>
                                </div>
                            </div>
                        </CpCard>

                        <CpCard title="反馈与数据展示">
                            <div style="display: grid; gap: 18px;">
                                <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                                    <CpProgress :percentage="sliderValue" style="width: min(520px, 100%);" />
                                    <CpProgress type="circle" :percentage="sliderValue" :width="96" />
                                    <CpProgress type="dashboard" :percentage="sliderValue" :width="96" />
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; align-items: stretch;">
                                    <CpImage :src="imageSrc" alt="主题资产" height="220" preview />

                                    <CpTable :data="tableData" :row-class-name="rowClassName" row-key="id" max-height="220">
                                        <CpTableColumn type="index" label="#" width="52" align="center" />
                                        <CpTableColumn prop="service" label="服务" sortable />
                                        <CpTableColumn prop="owner" label="团队" />
                                        <CpTableColumn prop="status" label="状态" width="110">
                                            <template #default="{ row }">
                                                <CpTag :type="row.status" size="sm">{{ row.status }}</CpTag>
                                            </template>
                                        </CpTableColumn>
                                        <CpTableColumn prop="latency" label="延迟" sortable align="right" />
                                        <CpTableColumn prop="traffic" label="流量" align="right" />
                                    </CpTable>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(3, minmax(180px, 1fr)); gap: 14px;">
                                    <CpCard title="继承 Card">
                                        <p style="margin: 0; color: var(--cp-text-secondary);">Card 默认 type、variant、shape、shadow 都来自 Provider；outline 时 hover shadow 无效。</p>
                                    </CpCard>
                                    <CpCard title="显式覆盖" variant="outline" type="warning">
                                        <p style="margin: 0; color: var(--cp-text-secondary);">显式 props 保持最高优先级。</p>
                                    </CpCard>
                                    <CpCard title="局部层级" variant="neon" type="info">
                                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                            <CpTag>内部标签</CpTag>
                                            <CpButton>内部按钮</CpButton>
                                        </div>
                                    </CpCard>
                                </div>
                            </div>
                        </CpCard>

                        <CpConfigProvider
                            theme="light"
                            :sync-document="false"
                            :theme-overrides="{ colorPrimary: '#e83e8c', colorPrimaryLight: 'color-mix(in srgb, #e83e8c 10%, transparent)', bgElevated: '#ffffff', surfaceVariant: '#fff7fb', borderDefault: '#f4c7dd' }"
                            :defaults="{ button: { variant: 'solid', shape: 'round', type: 'primary' }, tag: { variant: 'solid', shape: 'round', type: 'primary' }, text: { type: 'primary', marker: true }, image: { shape: 'round', type: 'primary', hoverable: true }, table: { size: 'sm', type: 'primary', stripe: true, border: true }, card: { variant: 'outline', shape: 'round' } }"
                        >
                            <CpCard title="局部 Provider 覆盖">
                                <div style="display: grid; gap: 14px;">
                                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                        <CpButton>局部按钮</CpButton>
                                        <CpTag>局部标签</CpTag>
                                        <CpText>局部文字</CpText>
                                        <CpInput v-model="inputValue" style="max-width: 260px;" />
                                        <CpProgress :percentage="72" style="width: 220px;" />
                                    </div>
                                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
                                        <CpImage :src="imageSrc" alt="局部图片" height="120" />
                                        <CpTable :data="tableData.slice(0, 2)" row-key="id">
                                            <CpTableColumn prop="service" label="服务" />
                                            <CpTableColumn prop="status" label="状态">
                                                <template #default="{ row }">
                                                    <CpTag :type="row.status" size="sm">{{ row.status }}</CpTag>
                                                </template>
                                            </CpTableColumn>
                                            <CpTableColumn prop="latency" label="延迟" align="right" />
                                        </CpTable>
                                    </div>
                                </div>
                            </CpCard>
                        </CpConfigProvider>
                    </div>
                </div>
                </div>
            </CpConfigProvider>
        `
    })
}

/**
 * 使用 ConfigProvider 自定义全局主题色
 *
 * 通过 themeOverrides 覆盖 CSS 变量，可以统一更改所有使用主色调的组件外观
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
            const themeOverrides = computed(() => ({
                colorPrimary: currentColor.value,
                colorPrimaryLight: `color-mix(in srgb, ${currentColor.value} 20%, transparent)`,
                borderActive: currentColor.value,
                borderFocus: currentColor.value,
                stateSelected: `color-mix(in srgb, ${currentColor.value} 15%, transparent)`,
                stateFocusRing: `color-mix(in srgb, ${currentColor.value} 40%, transparent)`
            }))

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
            }

            const resetTheme = () => {
                currentColor.value = '#00f0ff'
            }

            return {
                switchValue,
                sliderValue,
                inputValue,
                currentColor,
                themeOverrides,
                themeColors,
                setThemeColor,
                resetTheme
            }
        },
        template: `
            <CpConfigProvider :theme-overrides="themeOverrides">
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
            </CpConfigProvider>
        `
    })
}

/**
 * 局部主题覆盖不会影响 Provider 外部组件
 */
export const ScopedTheme: Story = {
    name: '局部主题覆盖',
    render: () => ({
        components: { CpConfigProvider, CpButton, CpTag, CpInput, CpSwitch },
        setup() {
            const checked = ref(true)
            const value = ref('局部主题')
            const localTheme = {
                colorPrimary: '#e83e8c',
                colorPrimaryLight: 'color-mix(in srgb, #e83e8c 10%, transparent)',
                bgElevated: '#ffffff',
                surfaceVariant: '#fff7fb',
                borderDefault: '#f4c7dd',
                radiusMd: '10px'
            }

            return { checked, value, localTheme }
        },
        template: `
            <div style="display: grid; gap: 20px;">
                <section style="display: grid; gap: 12px; padding: 18px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-default); border-radius: 8px;">
                    <p style="margin: 0; color: var(--cp-text-secondary); font-size: 13px;">外部默认主题</p>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <CpButton type="primary">Primary Button</CpButton>
                        <CpTag type="primary">Primary Tag</CpTag>
                        <CpSwitch v-model="checked" />
                    </div>
                </section>

                <CpConfigProvider theme="light" :theme-overrides="localTheme" :sync-document="false">
                    <section style="display: grid; gap: 12px; padding: 18px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-default); border-radius: var(--cp-radius-md);">
                        <p style="margin: 0; color: var(--cp-text-secondary); font-size: 13px;">内部局部 light 主题 + 变量覆盖</p>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                            <CpButton type="primary">Primary Button</CpButton>
                            <CpButton type="primary" variant="ghost">Ghost Button</CpButton>
                            <CpTag type="primary">Primary Tag</CpTag>
                            <div style="width: 220px;">
                                <CpInput v-model="value" />
                            </div>
                        </div>
                    </section>
                </CpConfigProvider>
            </div>
        `
    })
}
