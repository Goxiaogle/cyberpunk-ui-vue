import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
/**
 * 关闭前回调函数类型
 * 调用 done() 才会真正关闭对话框
 * 调用 done(true) 可显式取消关闭
 */
export type DialogBeforeCloseDoneFn = (cancel?: boolean) => void;
export type DialogBeforeCloseFn = (done: DialogBeforeCloseDoneFn) => void;
/**
 * 对话框变体
 * - `solid` - 实心背景（默认）
 * - `semi` - 半透明毛玻璃
 * - `outline` - 边框样式
 */
export type DialogVariant = 'solid' | 'semi' | 'outline';
/**
 * 对话框形状
 * - `clip` - 切角样式（默认，赛博朋克特色）
 * - `no-clip` - 直角矩形
 * - `round` - 圆角矩形
 */
export type DialogShape = 'clip' | 'no-clip' | 'round';
/**
 * 对话框主题颜色类型
 */
export type DialogType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type DialogCustomClass = string | Record<string, boolean> | Array<string | Record<string, boolean>>;
/**
 * CpDialog Props 定义
 *
 * @description 赛博朋克风格模态对话框，用于展示重要交互内容
 *
 * @example
 * ```vue
 * <CpDialog v-model="visible" title="系统通知">
 *   <p>对话框内容</p>
 *   <template #footer>
 *     <CpButton @click="visible = false">取消</CpButton>
 *     <CpButton type="primary" @click="visible = false">确认</CpButton>
 *   </template>
 * </CpDialog>
 * ```
 *
 * @slots
 * - `default` - 对话框主体内容
 * - `header` - 自定义整个头部区域（覆盖 title + 关闭按钮）
 * - `title` - 仅标题区域
 * - `footer` - 底部操作区域
 */
export declare const dialogProps: {
    /**
     * 是否显示对话框 (v-model)
     * @default false
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 对话框标题
     * @default ''
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 对话框宽度
     * 数字则为 px，字符串可以是任意 CSS 值
     * @default '520px'
     */
    width: {
        type: PropType<string | number>;
        default: string;
    };
    /**
     * 距离顶部的距离
     * @default '15vh'
     */
    top: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 是否全屏显示
     * @default false
     */
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示遮罩
     * @default true
     */
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否将对话框挂载到 body
     * 嵌套 Dialog 时建议设为 true
     * @default true
     */
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 点击遮罩是否关闭
     * @default true
     */
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 按下 ESC 是否关闭
     * @default true
     */
    closeOnEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示关闭按钮
     * @default true
     */
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 关闭前回调，调用 done() 才真正关闭
     * done(true) 表示取消关闭
     * 可用于关闭前二次确认
     */
    beforeClose: {
        type: PropType<DialogBeforeCloseFn>;
        default: undefined;
    };
    /**
     * 是否可拖拽移动
     * @default false
     */
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 拖拽时是否允许超出视口边界
     * @default false
     */
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 打开时是否锁定页面滚动
     * @default true
     */
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 对话框变体
     * @default 'solid'
     */
    variant: {
        type: PropType<DialogVariant>;
        default: string;
    };
    /**
     * 对话框形状
     * @default 'clip'
     */
    shape: {
        type: PropType<DialogShape>;
        default: string;
    };
    /**
     * 主题颜色类型
     * @default 'default'
     */
    type: {
        type: PropType<DialogType>;
        default: string;
    };
    /**
     * 关闭时销毁内容
     * @default false
     */
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 居中布局（标题和 footer 对齐方式居中）
     * @default false
     */
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 垂直居中布局（容器在屏幕中垂直居中）
     * @default true
     */
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示头部分隔线
     * @default true
     */
    headerBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示底部分隔线
     * @default true
     */
    footerBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 自定义主色调，优先于 type
     * 支持任意 CSS 颜色值
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义背景颜色
     */
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义边框颜色
     */
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义标题文字颜色
     */
    titleColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义内容区文字颜色
     */
    textColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义遮罩颜色
     */
    overlayColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义关闭按钮颜色
     */
    closeColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义头部分隔线颜色
     */
    headerDividerColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义底部分隔线颜色
     */
    footerDividerColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 对话框根容器自定义 class
     */
    dialogClass: {
        type: PropType<DialogCustomClass>;
        default: undefined;
    };
    /**
     * 头部区域自定义 class
     */
    headerClass: {
        type: PropType<DialogCustomClass>;
        default: undefined;
    };
    /**
     * 主体内容区域自定义 class
     */
    bodyClass: {
        type: PropType<DialogCustomClass>;
        default: undefined;
    };
    /**
     * 底部区域自定义 class
     */
    footerClass: {
        type: PropType<DialogCustomClass>;
        default: undefined;
    };
    /**
     * 遮罩层自定义 class
     */
    overlayClass: {
        type: PropType<DialogCustomClass>;
        default: undefined;
    };
    /**
     * 遮罩层追加 class（与 overlayClass 合并使用）
     */
    modalClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 对话框面板自定义 style
     */
    dialogStyle: {
        type: PropType<string | CSSProperties>;
        default: undefined;
    };
    /**
     * 头部区域自定义 style
     */
    headerStyle: {
        type: PropType<string | CSSProperties>;
        default: undefined;
    };
    /**
     * 主体内容区域自定义 style
     */
    bodyStyle: {
        type: PropType<string | CSSProperties>;
        default: undefined;
    };
    /**
     * 底部区域自定义 style
     */
    footerStyle: {
        type: PropType<string | CSSProperties>;
        default: undefined;
    };
    /**
     * 遮罩层自定义 style
     */
    overlayStyle: {
        type: PropType<string | CSSProperties>;
        default: undefined;
    };
    /**
     * z-index
     * @default 2000
     */
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 是否显示确认按钮（当无 #footer 插槽时生效）
     * @default true
     */
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示取消按钮（当无 #footer 插槽时生效）
     * @default true
     */
    showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 确认按钮文本
     * @default '确认'
     */
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 取消按钮文本
     * @default '取消'
     */
    cancelText: {
        type: StringConstructor;
        default: string;
    };
};
export type DialogProps = ExtractPropTypes<typeof dialogProps>;
/**
 * CpDialog 事件定义
 */
export declare const dialogEmits: {
    /** v-model 更新事件 */
    'update:modelValue': (value: boolean) => boolean;
    /** 对话框打开时触发（动画开始前） */
    open: () => boolean;
    /** 对话框打开动画结束后触发 */
    opened: () => boolean;
    /** 对话框关闭时触发（动画开始前） */
    close: () => boolean;
    /** 对话框关闭动画结束后触发 */
    closed: () => boolean;
    /** 点击确认按钮时触发 */
    confirm: () => boolean;
    /** 点击取消按钮时触发 */
    cancel: () => boolean;
};
export type DialogEmits = typeof dialogEmits;
