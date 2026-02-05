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
