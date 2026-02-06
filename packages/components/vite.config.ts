import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'CyberpunkVueComponents',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
        },
        rollupOptions: {
            external: [
                'vue',
                '@cyberpunk-vue/hooks',
                '@cyberpunk-vue/constants',
                '@cyberpunk-vue/theme-chalk'
            ],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'named'
            }
        },
        outDir: 'dist',
        emptyOutDir: true
    }
})
