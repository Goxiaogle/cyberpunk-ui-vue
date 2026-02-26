// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/vue3-vite'
import path, { dirname } from 'node:path';
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-docs'],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    viteFinal: async (config) => {
        const rootDir = path.resolve(__dirname, '..')

        // 排除 storybook-static 目录，避免 build 时影响 dev 服务器
        config.server = config.server || {}
        config.server.watch = config.server.watch || {}
        config.server.watch.ignored = [
            ...(Array.isArray(config.server.watch.ignored) ? config.server.watch.ignored : []),
            path.resolve(rootDir, 'storybook-static/**'),
            '**/node_modules/**',
            '**/.git/**',
            '**/dist/**',
        ]

        // 添加 Vue 插件
        config.plugins = config.plugins || []
        config.plugins.push(vue())

        // 添加 unplugin-icons 插件
        config.plugins.push(Icons({
            compiler: 'vue3',
            autoInstall: true,
        }))

        const workspacePackages = [
            '@cyberpunk-vue/components',
            '@cyberpunk-vue/hooks',
            '@cyberpunk-vue/constants',
            '@cyberpunk-vue/theme-chalk',
            'cyberpunk-ui-vue',
        ]

        config.resolve = config.resolve || {}
        const existingAliases = Array.isArray(config.resolve.alias)
            ? config.resolve.alias
            : Object.entries(config.resolve.alias || {}).map(([find, replacement]) => ({ find, replacement }))

        const sourceAliases = [
            // 根导入走源码入口，避免落到 package.json 的 dist 入口
            { find: /^@cyberpunk-vue\/components$/, replacement: path.resolve(rootDir, 'packages/components/index.ts') },
            // 子路径导入保持走源码目录
            { find: /^@cyberpunk-vue\/components\/(.*)$/, replacement: `${path.resolve(rootDir, 'packages/components')}/$1` },
            { find: /^@cyberpunk-vue\/hooks$/, replacement: path.resolve(rootDir, 'packages/hooks/src/index.ts') },
            { find: /^@cyberpunk-vue\/hooks\/(.*)$/, replacement: `${path.resolve(rootDir, 'packages/hooks/src')}/$1` },
            { find: /^@cyberpunk-vue\/constants$/, replacement: path.resolve(rootDir, 'packages/constants/src/index.ts') },
            { find: /^@cyberpunk-vue\/constants\/(.*)$/, replacement: `${path.resolve(rootDir, 'packages/constants/src')}/$1` },
            { find: /^@cyberpunk-vue\/theme-chalk$/, replacement: path.resolve(rootDir, 'packages/theme-chalk/src/index.scss') },
            { find: /^@cyberpunk-vue\/theme-chalk\/(.*)$/, replacement: `${path.resolve(rootDir, 'packages/theme-chalk')}/$1` },
            { find: /^cyberpunk-ui-vue$/, replacement: path.resolve(rootDir, 'packages/cyberpunk-vue/index.ts') },
            { find: /^cyberpunk-ui-vue\/(.*)$/, replacement: `${path.resolve(rootDir, 'packages/cyberpunk-vue')}/$1` },
        ]

        const filteredExistingAliases = existingAliases.filter((aliasEntry) => {
            if (!aliasEntry || typeof aliasEntry !== 'object' || !('find' in aliasEntry)) return true

            const aliasFind = aliasEntry.find
            if (typeof aliasFind !== 'string') return true

            return !workspacePackages.some((pkgName) => aliasFind === pkgName || aliasFind.startsWith(`${pkgName}/`))
        })

        config.resolve.alias = [...sourceAliases, ...filteredExistingAliases]

        config.optimizeDeps = config.optimizeDeps || {}
        const optimizeDepsExclude = Array.isArray(config.optimizeDeps.exclude) ? config.optimizeDeps.exclude : []
        config.optimizeDeps.exclude = Array.from(new Set([...optimizeDepsExclude, ...workspacePackages]))
        return config
    },
}

export default config

