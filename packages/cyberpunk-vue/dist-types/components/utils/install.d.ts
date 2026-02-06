import type { Plugin, Component } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
/**
 * 为组件添加 install 方法，使其可以通过 app.use() 注册
 */
export declare function withInstall<T extends Component>(component: T): SFCWithInstall<T>;
