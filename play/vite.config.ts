import { defineConfig } from 'vite'
import type { SassPreprocessorOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const scssPreprocessorOptions = {
    api: 'modern-compiler',
} as unknown as SassPreprocessorOptions

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: scssPreprocessorOptions,
        },
    },
    server: {
        port: 5173,
        open: true,
        watch: {
            ignored: [
                '**/storybook-static/**',
                '**/node_modules/**',
                '**/.git/**',
                '**/dist/**',
            ],
        },
    },
})
