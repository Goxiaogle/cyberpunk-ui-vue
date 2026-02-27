import type { App, Plugin, Component } from 'vue'

export type SFCWithInstall<T> = T & Plugin

/**
 * 为组件添加 install 方法，使其可以通过 app.use() 注册
 */
export function withInstall<T extends Component>(component: T): SFCWithInstall<T> {
    ; (component as SFCWithInstall<T>).install = (app: App) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Vue Component 类型未暴露 name 属性
        const name = (component as any).name
        if (name) {
            app.component(name, component)
        }
    }
    return component as SFCWithInstall<T>
}

/**
 * 为函数式组件添加 install 方法，挂载至 app.config.globalProperties
 * @param fn 函数式调用入口
 * @param name globalProperties 上的属性名，如 '$notify'
 */
export function withInstallFunction<T>(fn: T, name: string): SFCWithInstall<T> {
    ; (fn as SFCWithInstall<T>).install = (app: App) => {
        app.config.globalProperties[name] = fn
    }
    return fn as SFCWithInstall<T>
}
