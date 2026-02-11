import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: '.', // components has flat structure with index.ts at root
            outDir: 'dist',
            tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
            exclude: ['**/*.stories.ts', '**/*.test.ts', 'dist/**'],
            pathsToAliases: false
        })
    ],
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
