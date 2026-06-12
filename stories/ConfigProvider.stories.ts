import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref } from 'vue'
import {
    CpConfigProvider,
    CpAside,
    CpAvatar,
    CpBadge,
    CpButton,
    CpCard,
    CpCheckbox,
    CpCheckboxGroup,
    CpCol,
    CpContainer,
    CpDialog,
    CpDivider,
    CpDescriptions,
    CpDescriptionsItem,
    CpEmpty,
    CpImage,
    CpInputNumber,
    CpFooter,
    CpHeader,
    CpMain,
    CpMenu,
    CpMenuItem,
    CpNotification,
    CpPagination,
    CpPopover,
    CpRadio,
    CpRadioGroup,
    CpSegmented,
    CpSelect,
    CpStatusIndicator,
    CpTag,
    CpTable,
    CpTableColumn,
    CpText,
    CpTextarea,
    CpTimeline,
    CpTimelineItem,
    CpProgress,
    CpRow,
    CpSwitch,
    CpSlider,
    CpSubMenu,
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
            CpAside,
            CpAvatar,
            CpBadge,
            CpButton,
            CpCard,
            CpCheckbox,
            CpCheckboxGroup,
            CpCol,
            CpContainer,
            CpDialog,
            CpDescriptions,
            CpDescriptionsItem,
            CpDivider,
            CpEmpty,
            CpImage,
            CpInput,
            CpInputNumber,
            CpFooter,
            CpHeader,
            CpMain,
            CpMenu,
            CpMenuItem,
            CpNotification,
            CpPagination,
            CpPopover,
            CpProgress,
            CpRadio,
            CpRadioGroup,
            CpRow,
            CpSegmented,
            CpSelect,
            CpSlider,
            CpSubMenu,
            CpStatusIndicator,
            CpSwitch,
            CpTag,
            CpTable,
            CpTableColumn,
            CpText,
            CpTextarea,
            CpTimeline,
            CpTimelineItem
        },
        setup() {
            const theme = ref<'dark' | 'light' | 'system'>('dark')
            const type = ref('default')
            const size = ref('md')
            const shape = ref('clip')
            const componentVariant = ref('solid')
            const fieldVariant = ref('filled')
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
            const currentPage = ref(4)
            const pageSize = ref(20)
            const notificationVisible = ref(false)
            const primaryNotificationVisible = ref(false)
            const dialogVisible = ref(false)
            const primaryDialogVisible = ref(false)
            const loadingDialogVisible = ref(false)
            const selectValue = ref('ops')
            const checkboxValue = ref(['monitor', 'deploy'])
            const radioValue = ref('auto')
            const switchValue = ref(true)
            const sliderValue = ref(68)
            const segmentedValue = ref('overview')
            const menuActive = ref('overview')

            const typeOptions = ['default', 'primary', 'success', 'warning', 'error', 'info'] as const
            const sizeOptions = ['sm', 'md', 'lg'] as const
            const shapeOptions = ['clip', 'round', 'no-clip'] as const
            const componentVariants = ['solid', 'outline', 'ghost', 'neon', 'semi'] as const
            const fieldVariants = ['outline', 'filled', 'ghost'] as const
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

            const backgroundPreviewStyle = computed(() => ({
                backgroundImage: `linear-gradient(135deg, color-mix(in srgb, var(--cp-bg-deep) 72%, transparent), color-mix(in srgb, var(--cp-surface-variant) 70%, transparent)), url("${imageSrc.value}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: 'var(--cp-border-default)'
            }))

            const tokenSwatches = computed(() => [
                { name: 'bgDeep', css: '--cp-bg-deep', value: canvasTokens.value.bgDeep },
                { name: 'bgBase', css: '--cp-bg-base', value: canvasTokens.value.bgBase },
                { name: 'bgElevated', css: '--cp-bg-elevated', value: canvasTokens.value.bgElevated },
                { name: 'surface', css: '--cp-surface', value: canvasTokens.value.surface },
                { name: 'surfaceVariant', css: '--cp-surface-variant', value: canvasTokens.value.surfaceVariant },
                { name: 'surfaceBright', css: '--cp-surface-bright', value: canvasTokens.value.surfaceBright },
                { name: 'borderDefault', css: '--cp-border-default', value: canvasTokens.value.borderDefault },
                { name: 'borderActive', css: '--cp-border-active', value: activeAccent.value },
                { name: 'borderFocus', css: '--cp-border-focus', value: activeAccent.value }
            ])

            const menuVariant = computed(() =>
                componentVariant.value === 'solid'
                    ? 'solid'
                    : componentVariant.value === 'outline'
                        ? 'outline'
                        : 'note'
            )

            const defaults = computed(() => ({
                button: {
                    size: size.value,
                    type: type.value,
                    variant: componentVariant.value,
                    shape: shape.value,
                    dashed: componentVariant.value === 'outline' && animated.value
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
                    status: type.value === 'default' ? undefined : type.value,
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
                    variant: componentVariant.value,
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
                    type: type.value
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
                menu: {
                    type: type.value,
                    size: size.value,
                    shape: shape.value,
                    variant: menuVariant.value,
                    defaultOpeneds: ['system']
                },
                container: {
                    direction: 'vertical'
                },
                header: {
                    height: density.value === 'compact' ? '48px' : '56px',
                    divider: bordered.value,
                    dividerType: type.value,
                    dividerVariant: animated.value ? 'glow' : 'solid'
                },
                aside: {
                    width: density.value === 'compact' ? '180px' : '220px',
                    divider: bordered.value,
                    dividerType: type.value,
                    dividerVariant: animated.value ? 'glow' : 'solid'
                },
                footer: {
                    height: density.value === 'compact' ? '38px' : '44px',
                    divider: bordered.value,
                    dividerType: type.value,
                    dividerVariant: animated.value ? 'gradient' : 'solid'
                },
                row: {
                    gutter: density.value === 'compact' ? 8 : 14,
                    justify: 'space-between',
                    align: 'top'
                },
                card: {
                    type: type.value,
                    variant: componentVariant.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    shadow: animated.value ? 'hover' : 'always',
                    hoverScale: false,
                    bodyPadding: density.value === 'compact' ? '14px' : '20px'
                },
                popover: {
                    type: type.value,
                    variant: componentVariant.value === 'semi' ? 'solid' : componentVariant.value,
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    transition: animated.value ? 'fade' : 'none'
                },
                pagination: {
                    type: type.value,
                    size: size.value,
                    shape: shape.value,
                    buttonVariant: componentVariant.value
                },
                dialog: {
                    type: type.value,
                    variant: componentVariant.value === 'semi'
                        ? 'semi'
                        : componentVariant.value === 'outline' || componentVariant.value === 'ghost'
                            ? 'outline'
                            : 'solid',
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    width: density.value === 'compact' ? '420px' : '520px',
                    draggable: animated.value,
                    alignCenter: density.value === 'comfortable'
                },
                notification: {
                    type: type.value,
                    variant: componentVariant.value === 'semi'
                        ? 'semi'
                        : componentVariant.value === 'outline' || componentVariant.value === 'ghost'
                            ? 'outline'
                            : 'solid',
                    shape: shape.value === 'circle' ? 'round' : shape.value,
                    duration: animated.value ? 4500 : 0,
                    offset: density.value === 'compact' ? 12 : 16
                },
                statusIndicator: {
                    type: type.value,
                    size: size.value,
                    animation: animated.value ? 'glow' : 'none'
                },
                empty: {
                    type: type.value,
                    imageSize: density.value === 'compact' ? 48 : 64
                },
                descriptions: {
                    type: type.value,
                    size: size.value,
                    variant: fieldVariant.value === 'ghost' ? 'ghost' : 'solid'
                },
                timeline: {
                    type: type.value,
                    lineStyle: bordered.value ? 'solid' : 'dashed'
                }
            }))

            const setPalette = (item: typeof palette[number]) => {
                accent.value = item.value
                lightAccent.value = item.lightValue
                surface.value = item.surface
            }

            const resetLab = () => {
                theme.value = 'dark'
                type.value = 'default'
                size.value = 'md'
                shape.value = 'clip'
                componentVariant.value = 'solid'
                fieldVariant.value = 'filled'
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
                componentVariant,
                fieldVariant,
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
                currentPage,
                pageSize,
                notificationVisible,
                primaryNotificationVisible,
                dialogVisible,
                primaryDialogVisible,
                loadingDialogVisible,
                selectValue,
                checkboxValue,
                radioValue,
                switchValue,
                sliderValue,
                segmentedValue,
                menuActive,
                tableData,
                imageSrc,
                backgroundPreviewStyle,
                tokenSwatches,
                menuVariant,
                rowClassName,
                typeOptions,
                sizeOptions,
                shapeOptions,
                componentVariants,
                fieldVariants,
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
	                                <div style="color: var(--cp-text-secondary); font-size: 12px;">组件变体</div>
	                                <CpSelect v-model="componentVariant" :options="componentVariants.map(item => ({ label: item, value: item }))" />
	                            </div>

	                            <div style="display: grid; gap: 8px;">
	                                <div style="color: var(--cp-text-secondary); font-size: 12px;">Field 变体</div>
	                                <CpSelect v-model="fieldVariant" :options="fieldVariants.map(item => ({ label: item, value: item }))" />
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

	                        <CpCard title="导航与布局">
	                            <div style="display: grid; grid-template-columns: minmax(220px, 0.85fr) minmax(360px, 1.15fr); gap: 16px; align-items: stretch;">
	                                <CpMenu :default-active="menuActive" @select="(idx) => menuActive = idx">
	                                    <CpMenuItem index="overview">总览</CpMenuItem>
	                                    <CpMenuItem index="deploy">部署</CpMenuItem>
	                                    <CpSubMenu index="system">
	                                        <template #title>系统设置</template>
	                                        <CpMenuItem index="system-theme">主题</CpMenuItem>
	                                        <CpMenuItem index="system-access">访问控制</CpMenuItem>
	                                    </CpSubMenu>
	                                </CpMenu>

	                                <CpContainer style="min-height: 260px; border: 1px solid var(--cp-border-default); background: var(--cp-bg-base); overflow: hidden;">
	                                    <CpHeader style="display: flex; align-items: center; justify-content: space-between; padding: 0 14px;">
	                                        <strong style="color: var(--cp-text-primary); font-size: 13px;">Layout Header</strong>
	                                        <CpTag size="sm">Menu {{ menuVariant }}</CpTag>
	                                    </CpHeader>
	                                    <CpContainer direction="horizontal">
	                                        <CpAside>
	                                            <div style="display: grid; gap: 8px; padding: 12px;">
	                                                <CpTag>Aside</CpTag>
	                                                <CpText size="sm">divider / width 继承 defaults</CpText>
	                                            </div>
	                                        </CpAside>
	                                        <CpMain style="--cp-main-padding: 14px;">
	                                            <CpRow>
	                                                <CpCol :span="8">
	                                                    <div style="padding: 12px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-default); color: var(--cp-text-secondary);">span 8</div>
	                                                </CpCol>
	                                                <CpCol :span="8">
	                                                    <div style="padding: 12px; background: var(--cp-surface-variant); border: 1px solid var(--cp-border-active); color: var(--cp-text-secondary);">span 8</div>
	                                                </CpCol>
	                                                <CpCol :span="8">
	                                                    <div style="padding: 12px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-default); color: var(--cp-text-secondary);">span 8</div>
	                                                </CpCol>
	                                            </CpRow>
	                                            <div style="margin-top: 12px; color: var(--cp-text-secondary); font-size: 13px;">
	                                                Container / Header / Aside / Main / Footer / Row / Col 使用同一组 ConfigProvider defaults。
	                                            </div>
	                                        </CpMain>
	                                    </CpContainer>
	                                    <CpFooter style="display: flex; align-items: center; padding: 0 14px; color: var(--cp-text-muted); font-size: 12px;">
	                                        Layout Footer
	                                    </CpFooter>
	                                </CpContainer>
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

                                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; align-items: stretch;">
                                        <CpCard
                                            title="隐藏式覆层 Card"
                                            overlay-effect="blur-color"
                                            action-effect="blur-color"
                                            :hover-scale="false"
                                            style="min-height: 190px;"
                                        >
                                            <div style="display: grid; gap: 12px;">
                                                <CpText level="secondary" type="default">悬停时显示 overlay slot，背景和操作条默认跟随当前主题。</CpText>
                                                <div style="height: 54px; border: 1px dashed var(--cp-border-default); border-radius: var(--cp-radius-md); background: var(--cp-surface-variant); display: flex; align-items: center; justify-content: center;">
                                                    <CpText level="caption" type="default">hover preview</CpText>
                                                </div>
                                            </div>
                                            <template #overlay>
                                                <div style="display: flex; justify-content: flex-end; gap: 10px; flex-wrap: wrap;">
                                                    <CpButton :type="type" variant="outline" size="sm">归档</CpButton>
                                                    <CpButton type="error" variant="outline" size="sm">删除</CpButton>
                                                </div>
                                            </template>
                                        </CpCard>

                                        <div style="min-height: 190px;">
                                            <CpTable :data="tableData.slice(0, 3)" row-key="id" loading loading-text="主题 Loading 遮罩" max-height="190">
                                                <CpTableColumn type="index" label="#" width="52" align="center" />
                                                <CpTableColumn prop="service" label="服务" />
                                                <CpTableColumn prop="status" label="状态">
                                                    <template #default="{ row }">
                                                        <CpTag :type="row.status" size="sm">{{ row.status }}</CpTag>
                                                    </template>
                                                </CpTableColumn>
                                            </CpTable>
                                        </div>

                                        <CpCard title="Dialog Loading 遮罩" :hover-scale="false" style="min-height: 190px;">
                                            <div style="display: grid; gap: 12px;">
                                                <CpText level="secondary" type="default">Dialog 的 loading overlay 也使用同一套主题背景。</CpText>
                                                <CpButton @click="loadingDialogVisible = true">打开 Loading Dialog</CpButton>
                                            </div>
                                        </CpCard>
                                    </div>

		                                <div style="display: grid; gap: 14px;">
		                                    <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
	                                        <CpPopover
	                                            title="继承 Popover"
	                                            content="点击按钮查看；再次点击或点击外部关闭。type、variant、shape 和 transition 由 ConfigProvider defaults 控制。"
	                                            placement="right"
	                                            trigger="click"
                                        >
                                            <CpButton>Popover 触发器</CpButton>
                                        </CpPopover>
                                        <CpPopover
                                            title="Primary Popover"
                                            content="点击按钮查看；显式 type=primary 用于和继承态做对照。"
                                            type="primary"
	                                            variant="outline"
	                                            placement="bottom"
	                                            trigger="click"
	                                        >
	                                            <CpButton type="primary" variant="outline">Primary Popover</CpButton>
	                                        </CpPopover>
	                                        <CpButton @click="dialogVisible = true">Dialog 继承</CpButton>
	                                        <CpButton type="primary" variant="outline" @click="primaryDialogVisible = true">Primary Dialog</CpButton>
	                                        <CpButton @click="notificationVisible = true">Notification 继承</CpButton>
	                                        <CpButton type="primary" variant="outline" @click="primaryNotificationVisible = true">Primary Notification</CpButton>
	                                    </div>

	                                    <CpDialog
	                                        v-model="dialogVisible"
	                                        title="继承 Dialog"
	                                    >
	                                        <p style="margin: 0; color: var(--cp-text-secondary);">type、variant、shape、width、draggable 和 alignCenter 由 ConfigProvider defaults 控制。</p>
	                                        <template #footer="{ close }">
	                                            <CpButton @click="close">关闭</CpButton>
	                                            <CpButton @click="close">确认</CpButton>
	                                        </template>
	                                    </CpDialog>
		                                    <CpDialog
		                                        v-model="primaryDialogVisible"
		                                        title="Primary Dialog"
		                                        type="primary"
	                                        variant="outline"
	                                    >
	                                        <p style="margin: 0; color: var(--cp-text-secondary);">显式 type=primary / variant=outline 用于和继承态做对照。</p>
	                                        <template #footer="{ close }">
	                                            <CpButton variant="outline" @click="close">取消</CpButton>
		                                            <CpButton type="primary" @click="close">确认</CpButton>
		                                        </template>
		                                    </CpDialog>
                                            <CpDialog
                                                v-model="loadingDialogVisible"
                                                title="Loading Dialog"
                                                loading
                                                loading-text="主题遮罩加载中..."
                                            >
                                                <p style="margin: 0; color: var(--cp-text-secondary);">内容区域保持可见，但 loading overlay 会阻止交互并跟随当前主题。</p>
                                                <template #footer="{ close }">
                                                    <CpButton @click="close">关闭</CpButton>
                                                </template>
                                            </CpDialog>
		                                    <CpNotification
		                                        v-model="notificationVisible"
		                                        title="继承 Notification"
	                                        message="type、variant、shape、duration 和 offset 由 ConfigProvider defaults 控制。"
	                                    />
	                                    <CpNotification
	                                        v-model="primaryNotificationVisible"
	                                        title="Primary Notification"
	                                        message="显式 type=primary / variant=outline 用于和继承态做对照。"
	                                        type="primary"
	                                        variant="outline"
	                                    />

	                                    <CpPagination
	                                        v-model:current-page="currentPage"
	                                        v-model:page-size="pageSize"
	                                        :total="186"
	                                        layout="total, sizes, prev, pager, next, jumper"
                                    />
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

                        <CpCard title="主题变量可视化">
                            <div style="display: grid; gap: 18px;">
                                <div style="display: grid; grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr); gap: 16px; align-items: stretch;">
                                    <section style="display: grid; gap: 14px; padding: 18px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-default); border-radius: var(--cp-radius-lg);">
                                        <div>
                                            <CpText level="caption" type="default" style="display: block; margin-bottom: 6px;">CpText 层级 / 主题文字</CpText>
                                            <CpText level="heading" tag="h2" :type="type" style="display: block; margin: 0 0 8px;">主题标题文字 Primary Heading</CpText>
                                            <CpText level="subheading" tag="h3" type="default" style="display: block; margin: 0 0 10px;">副标题文字 Secondary Heading</CpText>
                                            <CpText level="body" tag="p" type="default" style="display: block; margin: 0;">
                                                普通正文使用 <code style="color: var(--cp-color-primary);">--cp-text-primary</code>，需要在浅色、暗色和自定义主题色下保持足够可读性。
                                            </CpText>
                                            <CpText level="secondary" tag="p" type="default" style="display: block; margin: 8px 0 0;">
                                                次级正文使用 <code>--cp-text-secondary</code>，用于说明、描述、表格辅助信息和卡片正文。
                                            </CpText>
                                            <CpText level="muted" tag="p" type="default" style="display: block; margin: 8px 0 0;">
                                                弱化文字使用 <code>--cp-text-muted</code>，用于标签、空状态说明和低优先级元信息。
                                            </CpText>
                                        </div>
                                        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                            <CpText>Default Text</CpText>
                                            <CpText :type="type" boxed>Boxed</CpText>
                                            <CpText :type="type" underline dashed>Underline</CpText>
                                            <CpText :type="type" marker>Marker</CpText>
                                        </div>
                                        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;">
                                            <div style="padding: 12px; background: var(--cp-bg-deep); border: 1px solid var(--cp-border-default); color: var(--cp-text-secondary); border-radius: var(--cp-radius-md);">bgDeep</div>
                                            <div style="padding: 12px; background: var(--cp-bg-base); border: 1px solid var(--cp-border-default); color: var(--cp-text-secondary); border-radius: var(--cp-radius-md);">bgBase</div>
                                            <div style="padding: 12px; background: var(--cp-surface-variant); border: 1px solid var(--cp-border-default); color: var(--cp-text-secondary); border-radius: var(--cp-radius-md);">surface</div>
                                        </div>
                                    </section>

                                    <section :style="backgroundPreviewStyle" style="min-height: 280px; display: flex; align-items: end; padding: 18px; border: 1px solid; border-radius: var(--cp-radius-lg); overflow: hidden;">
                                        <div style="width: 100%; padding: 14px; background: color-mix(in srgb, var(--cp-bg-elevated) 78%, transparent); border: 1px solid var(--cp-border-default); border-radius: var(--cp-radius-md); backdrop-filter: blur(10px);">
                                            <CpText level="caption" type="default" style="display: block; margin-bottom: 6px;">背景图 / 背景渐变</CpText>
                                            <CpText level="subheading" type="default" style="display: block; margin-bottom: 6px;">THEME BACKGROUND ASSET</CpText>
                                            <CpText level="secondary" type="default" style="display: block;">
                                                背景图会叠加当前主题背景、surface、border 与 primary 色，便于检查图片上文字和边界是否可读。
                                            </CpText>
                                        </div>
                                    </section>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
                                    <div
                                        v-for="item in tokenSwatches"
                                        :key="item.css"
                                        style="display: grid; gap: 8px; padding: 12px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-default); border-radius: var(--cp-radius-md);"
                                    >
                                        <div :style="{ background: item.value }" style="height: 34px; border: 1px solid var(--cp-border-default); border-radius: 4px;"></div>
                                        <div style="display: grid; gap: 2px;">
                                            <strong style="color: var(--cp-text-primary); font-size: 13px;">{{ item.name }}</strong>
                                            <code style="color: var(--cp-text-muted); font-size: 11px;">{{ item.css }}</code>
                                        </div>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
                                    <div style="padding: 14px; border: 1px solid var(--cp-border-default); border-radius: var(--cp-radius-md); background: var(--cp-bg-elevated);">
                                        <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">Default Border</div>
                                        <div style="height: 52px; border: 1px solid var(--cp-border-default); border-radius: var(--cp-radius-md); background: var(--cp-surface);"></div>
                                    </div>
                                    <div style="padding: 14px; border: 1px solid var(--cp-border-active); border-radius: var(--cp-radius-md); background: var(--cp-state-selected);">
                                        <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">Active Border</div>
                                        <div style="height: 52px; border: 1px solid var(--cp-border-active); border-radius: var(--cp-radius-md); background: var(--cp-surface);"></div>
                                    </div>
                                    <div style="padding: 14px; border: 1px solid var(--cp-border-focus); box-shadow: 0 0 0 4px var(--cp-state-focus-ring); border-radius: var(--cp-radius-md); background: var(--cp-bg-elevated);">
                                        <div style="color: var(--cp-text-muted); font-size: 12px; margin-bottom: 8px;">Focus Ring</div>
                                        <CpInput v-model="inputValue" placeholder="聚焦边框变量" />
                                    </div>
                                </div>
                            </div>
                        </CpCard>

                        <CpCard title="Default 实际效果矩阵">
                            <div style="display: grid; gap: 18px;">
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; align-items: start;">
                                    <div style="display: grid; gap: 12px;">
                                        <div style="color: var(--cp-text-muted); font-size: 12px;">基础操作</div>
                                        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                                            <CpButton type="default" variant="solid">Solid</CpButton>
                                            <CpButton type="default" variant="outline">Outline</CpButton>
                                            <CpButton type="default" variant="ghost">Ghost</CpButton>
                                            <CpButton type="default" variant="semi">Semi</CpButton>
                                            <CpButton type="default" variant="neon">Neon</CpButton>
                                        </div>
                                        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                                            <CpTag type="default" variant="solid">默认标签</CpTag>
                                            <CpTag type="default" variant="outline">描边标签</CpTag>
                                            <CpTag type="default" variant="semi" closable>半透明</CpTag>
                                            <CpBadge type="default" :value="8"><CpButton type="default" size="sm">消息</CpButton></CpBadge>
                                        </div>
                                        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                            <CpStatusIndicator type="default" label="默认在线" />
                                            <CpStatusIndicator type="default" animation="pulse" label="脉冲" />
                                            <CpStatusIndicator type="default" shape="diamond" label="菱形" />
                                        </div>
                                    </div>

                                    <div style="display: grid; gap: 12px;">
                                        <div style="color: var(--cp-text-muted); font-size: 12px;">默认文本与输入</div>
                                        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                            <CpText type="default">Default Text</CpText>
                                            <CpText type="default" boxed>Boxed</CpText>
                                            <CpText type="default" underline>Underline</CpText>
                                            <CpText type="default" marker>Marker</CpText>
                                        </div>
                                        <CpInput v-model="inputValue" type="text" variant="outline" shape="clip" />
                                        <CpSelect v-model="selectValue" :options="selectOptions" variant="outline" shape="clip" />
                                        <CpTextarea v-model="textareaValue" variant="outline" shape="clip" :rows="3" />
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; align-items: stretch;">
                                    <CpCard title="Default Card" type="default" variant="solid" :hover-scale="false">
                                        <div style="display: grid; gap: 12px;">
                                            <CpProgress :percentage="sliderValue" />
                                            <CpProgress :percentage="72" striped />
                                            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                                                <CpProgress type="circle" :percentage="sliderValue" :width="76" />
                                                <CpProgress type="dashboard" :percentage="sliderValue" :width="76" />
                                                <CpSwitch v-model="switchValue" type="default" />
                                            </div>
                                        </div>
                                    </CpCard>

                                    <CpCard title="Default Choice" type="default" variant="outline" :hover-scale="false">
                                        <div style="display: grid; gap: 14px;">
                                            <CpSegmented v-model="segmentedValue" type="default" variant="solid" :options="segmentedOptions" />
                                            <CpCheckboxGroup v-model="checkboxValue" type="default">
                                                <CpCheckbox label="monitor" type="default">监控</CpCheckbox>
                                                <CpCheckbox label="deploy" type="default">部署</CpCheckbox>
                                                <CpCheckbox label="audit" type="default">审计</CpCheckbox>
                                            </CpCheckboxGroup>
                                            <CpRadioGroup v-model="radioValue" type="default">
                                                <CpRadio value="manual" label="手动" type="default" />
                                                <CpRadio value="auto" label="自动" type="default" />
                                                <CpRadio value="safe" label="安全" type="default" />
                                            </CpRadioGroup>
                                            <CpSlider v-model="sliderValue" type="default" />
                                        </div>
                                    </CpCard>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; align-items: start;">
                                    <CpDescriptions title="Default Descriptions" :column="2" type="default" variant="solid">
                                        <CpDescriptionsItem label="环境">Production</CpDescriptionsItem>
                                        <CpDescriptionsItem label="状态">Idle</CpDescriptionsItem>
                                        <CpDescriptionsItem label="版本">v0.1.0</CpDescriptionsItem>
                                        <CpDescriptionsItem label="策略">Default</CpDescriptionsItem>
                                    </CpDescriptions>

                                    <div style="height: 220px; border: 1px dashed var(--cp-border-default); border-radius: var(--cp-radius-md);">
                                        <CpEmpty title="Default Empty" description="默认空状态保持中性视觉，不抢占主操作层级。" type="default">
                                            <CpButton type="default" size="sm" variant="outline">查看详情</CpButton>
                                        </CpEmpty>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: minmax(280px, 0.8fr) minmax(320px, 1.2fr); gap: 16px; align-items: start;">
                                    <CpTimeline type="default">
                                        <CpTimelineItem type="default" timestamp="09:00">默认节点创建</CpTimelineItem>
                                        <CpTimelineItem type="default" timestamp="09:15" hollow>等待人工确认</CpTimelineItem>
                                        <CpTimelineItem type="default" timestamp="09:30" active animation="glow">默认激活态</CpTimelineItem>
                                    </CpTimeline>

                                    <CpTable :data="tableData" row-key="id" type="default" size="sm" border stripe max-height="220">
                                        <CpTableColumn type="index" label="#" width="52" align="center" />
                                        <CpTableColumn prop="service" label="服务" />
                                        <CpTableColumn prop="owner" label="团队" />
                                        <CpTableColumn prop="status" label="状态">
                                            <template #default="{ row }">
                                                <CpTag type="default" size="sm">{{ row.status }}</CpTag>
                                            </template>
                                        </CpTableColumn>
                                        <CpTableColumn prop="latency" label="延迟" align="right" />
                                    </CpTable>
                                </div>
                            </div>
                        </CpCard>

                        <CpCard title="Primary 实际效果矩阵">
                            <div style="display: grid; gap: 18px;">
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; align-items: start;">
                                    <div style="display: grid; gap: 12px;">
                                        <div style="color: var(--cp-text-muted); font-size: 12px;">Primary 基础操作</div>
                                        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                                            <CpButton type="primary" variant="solid">Solid</CpButton>
                                            <CpButton type="primary" variant="outline">Outline</CpButton>
                                            <CpButton type="primary" variant="ghost">Ghost</CpButton>
                                            <CpButton type="primary" variant="semi">Semi</CpButton>
                                            <CpButton type="primary" variant="neon">Neon</CpButton>
                                        </div>
                                        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                                            <CpTag type="primary" variant="solid">Primary 标签</CpTag>
                                            <CpTag type="primary" variant="outline">描边标签</CpTag>
                                            <CpTag type="primary" variant="semi" closable>半透明</CpTag>
                                            <CpBadge type="primary" :value="18"><CpButton type="primary" size="sm">消息</CpButton></CpBadge>
                                        </div>
                                        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                            <CpStatusIndicator type="primary" label="Primary 在线" />
                                            <CpStatusIndicator type="primary" animation="pulse" label="脉冲" />
                                            <CpStatusIndicator type="primary" shape="diamond" label="菱形" />
                                        </div>
                                    </div>

                                    <div style="display: grid; gap: 12px;">
                                        <div style="color: var(--cp-text-muted); font-size: 12px;">Primary 文本与输入</div>
                                        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                                            <CpText type="primary">Primary Text</CpText>
                                            <CpText type="primary" boxed>Boxed</CpText>
                                            <CpText type="primary" underline>Underline</CpText>
                                            <CpText type="primary" marker>Marker</CpText>
                                        </div>
                                        <CpInput v-model="inputValue" color="var(--cp-color-primary)" variant="outline" shape="clip" />
                                        <CpSelect v-model="selectValue" :options="selectOptions" color="var(--cp-color-primary)" variant="outline" shape="clip" />
                                        <CpTextarea v-model="textareaValue" color="var(--cp-color-primary)" variant="outline" shape="clip" :rows="3" />
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; align-items: stretch;">
                                    <div style="display: grid; gap: 12px; padding: 16px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-active); border-radius: var(--cp-radius-lg);">
                                        <div style="color: var(--cp-text-muted); font-size: 12px;">Primary 反馈</div>
                                        <CpProgress status="primary" :percentage="sliderValue" />
                                        <CpProgress status="primary" :percentage="72" striped />
                                        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                                            <CpProgress type="circle" status="primary" :percentage="sliderValue" :width="76" />
                                            <CpProgress type="dashboard" status="primary" :percentage="sliderValue" :width="76" />
                                            <CpSwitch v-model="switchValue" type="primary" />
                                        </div>
                                    </div>

                                    <div style="display: grid; gap: 14px; padding: 16px; background: var(--cp-bg-elevated); border: 1px solid var(--cp-border-active); border-radius: var(--cp-radius-lg);">
                                        <div style="color: var(--cp-text-muted); font-size: 12px;">Primary 选择</div>
                                        <CpSegmented v-model="segmentedValue" type="primary" variant="solid" :options="segmentedOptions" />
                                        <CpCheckboxGroup v-model="checkboxValue" type="primary">
                                            <CpCheckbox label="monitor" type="primary">监控</CpCheckbox>
                                            <CpCheckbox label="deploy" type="primary">部署</CpCheckbox>
                                            <CpCheckbox label="audit" type="primary">审计</CpCheckbox>
                                        </CpCheckboxGroup>
                                        <CpRadioGroup v-model="radioValue" type="primary">
                                            <CpRadio value="manual" label="手动" type="primary" />
                                            <CpRadio value="auto" label="自动" type="primary" />
                                            <CpRadio value="safe" label="安全" type="primary" />
                                        </CpRadioGroup>
                                        <CpSlider v-model="sliderValue" type="primary" />
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: minmax(280px, 0.8fr) minmax(320px, 1.2fr); gap: 16px; align-items: start;">
                                    <CpTimeline type="primary">
                                        <CpTimelineItem type="primary" timestamp="10:00">Primary 节点创建</CpTimelineItem>
                                        <CpTimelineItem type="primary" timestamp="10:15" hollow>等待确认</CpTimelineItem>
                                        <CpTimelineItem type="primary" timestamp="10:30" active animation="glow">Primary 激活态</CpTimelineItem>
                                    </CpTimeline>

                                    <CpTable :data="tableData" row-key="id" type="primary" size="sm" border stripe max-height="220">
                                        <CpTableColumn type="index" label="#" width="52" align="center" />
                                        <CpTableColumn prop="service" label="服务" />
                                        <CpTableColumn prop="owner" label="团队" />
                                        <CpTableColumn prop="status" label="状态">
                                            <template #default="{ row }">
                                                <CpTag type="primary" size="sm">{{ row.status }}</CpTag>
                                            </template>
                                        </CpTableColumn>
                                        <CpTableColumn prop="traffic" label="流量" align="right" />
                                    </CpTable>
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
