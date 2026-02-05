declare module 'vue' {
    export interface GlobalComponents {
        CpButton: typeof import('@cyberpunk-vue/components')['CpButton']
        CpLoading: typeof import('@cyberpunk-vue/components')['CpLoading']
        CpIcon: typeof import('@cyberpunk-vue/components')['CpIcon']
        CpConfigProvider: typeof import('@cyberpunk-vue/components')['CpConfigProvider']
    }
}

export { }
