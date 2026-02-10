import type { ExtractPropTypes, PropType } from 'vue';
/**
 * 容器排列方向
 * - `horizontal` - 水平排列
 * - `vertical` - 垂直排列
 */
export type ContainerDirection = 'horizontal' | 'vertical';
/**
 * CpContainer 组件 Props 定义
 *
 * @description 赛博朋克风格页面布局容器。
 * 当子元素包含 CpHeader 或 CpFooter 时自动切换为垂直排列。
 *
 * @example
 * ```vue
 * <CpContainer>
 *   <CpHeader>头部</CpHeader>
 *   <CpMain>主内容</CpMain>
 *   <CpFooter>底部</CpFooter>
 * </CpContainer>
 * ```
 */
export declare const containerProps: {
    /**
     * 排列方向，可选值：horizontal / vertical
     * 不设置时根据子元素自动判断
     */
    readonly direction: {
        readonly type: PropType<ContainerDirection>;
        readonly default: "";
    };
};
export type ContainerProps = ExtractPropTypes<typeof containerProps>;
/**
 * CpHeader 组件 Props
 */
export declare const headerProps: {
    /**
     * 头部高度
     * @default '60px'
     */
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "60px";
    };
};
export type HeaderProps = ExtractPropTypes<typeof headerProps>;
/**
 * CpFooter 组件 Props
 */
export declare const footerProps: {
    /**
     * 底部高度
     * @default '60px'
     */
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "60px";
    };
};
export type FooterProps = ExtractPropTypes<typeof footerProps>;
/**
 * CpAside 组件 Props
 */
export declare const asideProps: {
    /**
     * 侧边栏宽度
     * @default '300px'
     */
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "300px";
    };
    /**
     * 侧边栏位置，可选值：left / right
     * @default 'left'
     */
    readonly position: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
};
export type AsideProps = ExtractPropTypes<typeof asideProps>;
