import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            entryRoot: 'src',
            outDir: 'dist',
            tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
            exclude: ['dist/**'],
            compilerOptions: {
                declarationMap: false
            }
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CyberpunkVueConstants',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
        },
        rollupOptions: {
            output: {
                exports: 'named'
            }
        },
        outDir: 'dist',
        emptyOutDir: true
    }
})
