import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const cyberpunkTheme = create({
    base: 'dark',

    // 品牌
    brandTitle: 'Cyberpunk Vue 组件库',
    brandUrl: 'https://github.com/cyberpunk-vue',
    brandTarget: '_self',

    // 颜色
    colorPrimary: '#00f0ff',
    colorSecondary: '#ff0080',

    // UI
    appBg: '#0a0a0f',
    appContentBg: '#12121a',
    appBorderColor: '#2a2a3a',
    appBorderRadius: 6,

    // 文字
    textColor: '#ffffff',
    textInverseColor: '#0a0a0f',
    textMutedColor: '#a0a0b0',

    // 工具栏
    barTextColor: '#a0a0b0',
    barSelectedColor: '#00f0ff',
    barBg: '#12121a',

    // 表单
    inputBg: '#1a1a24',
    inputBorder: '#2a2a3a',
    inputTextColor: '#ffffff',
    inputBorderRadius: 4,
})

addons.setConfig({
    theme: cyberpunkTheme,
    sidebar: {
        showRoots: true,
    },
})
