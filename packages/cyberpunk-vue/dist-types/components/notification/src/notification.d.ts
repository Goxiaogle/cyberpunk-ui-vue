import type { ExtractPropTypes, PropType } from 'vue';
/**
 * 通知位置
 * - `top-right`  — 右上角（默认）
 * - `top-left`   — 左上角
 * - `bottom-right` — 右下角
 * - `bottom-left`  — 左下角
 */
export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
/**
 * 通知变体
 * - `solid`   — 实心背景（默认）
 * - `semi`    — 半透明毛玻璃
 * - `outline` — 边框样式
 */
export type NotificationVariant = 'solid' | 'semi' | 'outline';
/**
 * 通知形状
 * - `clip`    — 切角样式（默认，赛博朋克特色）
 * - `no-clip` — 直角矩形
 * - `round`   — 圆角矩形
 */
export type NotificationShape = 'clip' | 'no-clip' | 'round';
/**
 * 通知主题色
 */
export type NotificationType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
/**
 * CpNotification Props 定义
 *
 * @description 赛博朋克风格通知提醒，从屏幕角落滑入显示
 *
 * @example
 * ```vue
 * <CpNotification
 *   v-model="visible"
 *   title="系统通知"
 *   message="操作成功完成"
 *   type="success"
 * />
 * ```
 *
 * @slots
 * - `default` — 自定义消息内容（覆盖 message）
 * - `title`   — 自定义标题内容
 * - `icon`    — 自定义图标
 */
export declare const notificationProps: {
    /**
     * 是否显示通知 (v-model)
     * @default false
     */
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 通知标题
     * @default ''
     */
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 通知消息文本
     * @default ''
     */
    readonly message: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 是否将 message 作为 HTML 渲染
     * @default false
     */
    readonly dangerouslyUseHTMLString: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 主题颜色类型
     * @default 'default'
     */
    readonly type: {
        readonly type: PropType<NotificationType>;
        readonly default: "default";
    };
    /**
     * 弹出位置
     * @default 'top-right'
     */
    readonly position: {
        readonly type: PropType<NotificationPosition>;
        readonly default: "top-right";
    };
    /**
     * 自动关闭延迟 (ms)，设为 0 则不自动关闭
     * @default 4500
     */
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 4500;
    };
    /**
     * 是否显示关闭按钮
     * @default true
     */
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 距离窗口边缘偏移量 (px)
     * @default 16
     */
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    /**
     * 通知变体
     * @default 'solid'
     */
    readonly variant: {
        readonly type: PropType<NotificationVariant>;
        readonly default: "solid";
    };
    /**
     * 通知形状
     * @default 'clip'
     */
    readonly shape: {
        readonly type: PropType<NotificationShape>;
        readonly default: "clip";
    };
    /**
     * 自定义主色调，优先于 type
     */
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 自定义背景颜色
     */
    readonly bgColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 自定义边框颜色
     */
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 自定义标题文字颜色
     */
    readonly titleColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * 自定义消息文字颜色
     */
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * z-index
     * @default 9999
     */
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 9999;
    };
    /**
     * 通知宽度
     * @default '330px'
     */
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: "330px";
    };
    /**
     * 动画时长 (ms)
     * @default 300
     */
    readonly animationDuration: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
};
export type NotificationProps = ExtractPropTypes<typeof notificationProps>;
/**
 * CpNotification 事件定义
 */
export declare const notificationEmits: {
    /** v-model 更新事件 */
    'update:modelValue': (value: boolean) => boolean;
    /** 关闭时触发 */
    close: () => boolean;
    /** 关闭动画结束后触发（DOM 即将销毁） */
    destroy: () => boolean;
};
export type NotificationEmits = typeof notificationEmits;
