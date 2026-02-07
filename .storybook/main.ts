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

        config.resolve = config.resolve || {}
        config.resolve.alias = {
            ...config.resolve.alias,
            '@cyberpunk-vue/components': path.resolve(rootDir, 'packages/components'),
            '@cyberpunk-vue/hooks': path.resolve(rootDir, 'packages/hooks/src'),
            '@cyberpunk-vue/constants': path.resolve(rootDir, 'packages/constants/src'),
            '@cyberpunk-vue/theme-chalk': path.resolve(rootDir, 'packages/theme-chalk/src'),
        }
        return config
    },
}

export default config

