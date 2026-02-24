import type {Preview} from '@storybook/vue3-vite'
import '@cyberpunk-vue/theme-chalk/src/index.scss'

// 动态注入 CSS 的函数
function injectThemeCss(theme: 'dark' | 'light') {
    const styleId = 'cyberpunk-storybook-theme-overrides'
    let styleEl = document.getElementById(styleId) as HTMLStyleElement

    if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = styleId
        document.head.appendChild(styleEl)
    }

    // 定义样式变量
    const vars = theme === 'dark' ? {
        bg: '#0a0a0f',
        docBg: '#12121a', // 文档区域稍亮一点
        text: '#ffffff',
        muted: '#a0a0b0',
        border: '#2a2a3a',
        inputBg: '#1a1a24',
        accent: '#00f0ff', // 赛博朋克青
        accentText: '#00f0ff',
        codeBg: '#1a1a24',
        toggleTrack: '#2a2a3a',
        toggleThumb: '#ffffff',
        barBg: '#12121a',
        primary: '#00f0ff',
        success: '#39ff14',
        warning: '#ff9f1c',
        error: '#ff0055',
        info: '#7b68ee',
    } : {
        bg: '#f5f5f8',
        docBg: '#ffffff',
        text: '#1a1a2e',
        muted: '#666680',
        border: '#e0e0e8',
        inputBg: '#ffffff',
        accent: '#0066cc',
        accentText: '#0066cc',
        codeBg: '#f0f0f4',
        toggleTrack: '#e0e0e8',
        toggleThumb: '#ffffff',
        barBg: '#ffffff',
        primary: '#00f0ff',
        success: '#39ff14',
        warning: '#ff9f1c',
        error: '#ffb0c5',
        info: '#7b68ee',
    }

    // 生成 CSS
    styleEl.innerHTML = `
        :root {
            --cp-color-primary: ${vars.primary};
            --cp-color-success: ${vars.success};
            --cp-color-warning: ${vars.warning};
            --cp-color-error: ${vars.error};
            --cp-color-info: ${vars.info};
        }

        /* 全局背景和文字 */
        .sb-show-main, .docs-story {
            background-color: ${vars.bg} !important;
            color: ${vars.text} !important;
            transition: background-color 0.3s, color 0.3s;
        }

        /* 强制覆盖预览区白色背景 */
        .docs-story > div:not(.sb-bar):not(.jupyter-cell) {
            background-color: ${vars.docBg} !important; 
        }
        
        /* 文档容器 */
        .sb-main-padded, .sbdocs, .sbdocs-wrapper, .sbdocs-content {
            background-color: ${vars.docBg} !important;
            color: ${vars.text} !important;
        }

        /* 标题 */
        .sbdocs h1, .sbdocs h2, .sbdocs h3, .sbdocs h4, .sbdocs h5, .sbdocs h6 {
            color: ${vars.text} !important;
        }

        /* 文本 - 排除组件预览区域内的元素 */
        .sbdocs p:not(.docs-story *), 
        .sbdocs li:not(.docs-story *), 
        .sbdocs span:not([class*="badge"]):not([class*="tag"]):not(.docs-story *) {
            color: ${vars.text} !important;
        }
        
        /* 链接 */
        .sbdocs a {
            color: ${vars.accent} !important;
        }

        /* Controls 表格 */
        .docblock-argstable {
            background-color: ${vars.docBg} !important;
            color: ${vars.text} !important;
            border-color: ${vars.border} !important;
            box-shadow: none !important;
        }
        
        .docblock-argstable thead th, .docblock-argstable tbody td {
            color: ${vars.text} !important;
            border-color: ${vars.border} !important;
            background-color: transparent !important;
        }

        /* Controls 输入控件 */
        .docblock-argstable select, 
        .docblock-argstable input[type="text"], 
        .docblock-argstable textarea {
            background-color: ${vars.inputBg} !important;
            color: ${vars.text} !important;
            border: 1px solid ${vars.border} !important;
            box-shadow: none !important;
        }

        /* Controls 按钮 */
        .docblock-argstable button {
            background-color: ${vars.inputBg} !important;
            color: ${vars.text} !important;
            border: 1px solid ${vars.border} !important;
            box-shadow: none !important;
        }

        /* 颜色选择器控件 (Choose color...) */
        #control-color,
        [id*="control-color"],
        .docblock-argstable input[type="color"],
        .docblock-argstable [class*="color"],
        .docblock-argstable [class*="Color"] {
            background-color: ${vars.inputBg} !important;
            color: ${vars.text} !important;
            border: 1px solid ${vars.border} !important;
        }
        
        /* Storybook 颜色选择器的文本输入框 */
        #control-color input,
        [id*="control-color"] input,
        .docblock-argstable [class*="ColorControl"],
        .docblock-argstable [data-testid*="color"] {
            background-color: ${vars.inputBg} !important;
            color: ${vars.text} !important;
            border: 1px solid ${vars.border} !important;
        }
        
        /* 颜色选择器的包裹容器 */
        .docblock-argstable div[class*="color"] input,
        .docblock-argstable div[class*="Color"] input {
            background-color: ${vars.inputBg} !important;
            color: ${vars.text} !important;
            border: 1px solid ${vars.border} !important;
        }
        
        /* 颜色选择器占位文本 */
        .docblock-argstable input::placeholder {
            color: ${vars.muted} !important;
        }

        .control-dashed {
            color: black !important;
        }
        
        input[role='switch'][type='checkbox']:not(:checked) ~ span:first-of-type {
            color: black !important;
        }
        
        input[role='switch'][type='checkbox']:checked ~ span:last-of-type {
            color: black !important;
        }


        .docblock-argstable label {
            background-color: ${vars.inputBg} !important;
        }

        /* 针对 Storybook 复杂的 Toggle Switch 组件 */
        /* 强制所有 label 的文本颜色 */
        .docblock-argstable label {
            color: ${vars.text} !important;
        }
        
        /* Toggle Switch 轨道和滑块 - 使用更强的选择器 */
        .docblock-argstable span[class*="css-"] {
            color: ${vars.text} !important;
        }
        
        /* 类型说明标签 (如 string, ButtonType 等) */
        .docblock-argstable [class*="TypeName"],
        .docblock-argstable [class*="type"],
        .docblock-argstable span[title],
        .docblock-argstable td:nth-child(2) span {
            color: ${theme === 'dark' ? vars.accentText : vars.accent} !important;
            background-color: ${theme === 'dark' ? '#1a1a24' : ''} !important;
            padding: 2px 6px !important;
            border-radius: 3px !important;
        }
        
        /* 默认值标签 */
        .docblock-argstable td:nth-child(3) span,
        .docblock-argstable [class*="default"],
        .docblock-argstable [class*="Default"] {
            color: ${theme === 'dark' ? '#ff6b9d' : '#d63384'} !important;
            background-color: ${theme === 'dark' ? '#1a1a24' : '#f0f0f4'} !important;
            padding: 2px 6px !important;
            border-radius: 3px !important;
        }

        /* 代码块 */
        .sbdocs pre, .sbdocs code, .docblock-source {
            background-color: ${vars.codeBg} !important;
            color: ${vars.text} !important;
            border-radius: 4px;
        }
        
        /* Default 列的代码块 */
        .docblock-argstable code {
            background-color: ${vars.inputBg} !important;
            color: ${vars.accentText} !important;
            border: 1px solid ${vars.border} !important;
        }

        /* 工具栏 (Zoom, Copy, Eject, etc) */
        .sb-bar, 
        .docs-story .sb-bar,
        .docs-story > div:first-child {
            background-color: ${vars.barBg} !important;
            border-bottom: 1px solid ${vars.border} !important;
            box-shadow: none !important;
        }

        .sb-bar button {
            background-color: transparent !important;
            color: ${vars.text} !important;
        }
        
        .sb-bar svg {
            fill: ${vars.text} !important;
        }

        /* 滚动条 */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: ${vars.docBg};
        }
        ::-webkit-scrollbar-thumb {
            background: ${vars.border};
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: ${vars.muted};
        }
    `
}

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // 禁用默认的 backgrounds 工具栏，由 theme 统一控制
        backgrounds: {
            disabled: true,
        },
        docs: {
            toc: true,
        },
    },
    globalTypes: {
        theme: {
            name: '主题',
            description: '切换明暗主题',
            defaultValue: 'dark',
            toolbar: {
                icon: 'circlehollow',
                items: [
                    {value: 'dark', title: '暗色主题'},
                    {value: 'light', title: '亮色主题'},
                ],
                showName: true,
            },
        },
    },
    decorators: [
        (story, context) => {
            const theme = (context.globals.theme || 'dark') as 'dark' | 'light'

            // 设置组件主题
            document.documentElement.setAttribute('data-theme', theme)

            // 注入主题 CSS
            injectThemeCss(theme)

            return {
                template: '<story />',
            }
        },
    ],
}

export default preview
