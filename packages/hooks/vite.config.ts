import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            entryRoot: 'src',
            outDir: 'dist',
            tsconfigPath: '../../tsconfig.json'
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CyberpunkVueHooks',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
        },
        rollupOptions: {
            external: [
                'vue',
                '@cyberpunk-vue/constants'
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
