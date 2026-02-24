import type { ExtractPropTypes, PropType } from 'vue'
import type { Size } from '@cyberpunk-vue/hooks'

/**
 * 上传文件状态
 */
export type UploadStatus = 'ready' | 'uploading' | 'success' | 'error'

/**
 * 上传文件对象
 */
export interface UploadFile {
    /** 唯一标识 */
    uid: number
    /** 文件名 */
    name: string
    /** 文件大小 (bytes) */
    size: number
    /** 上传状态 */
    status: UploadStatus
    /** 上传进度 (0-100) */
    percentage: number
    /** 文件预览地址（图片可读取为 data URL） */
    url?: string
    /** 服务端返回 */
    response?: unknown
    /** 原始 File 对象 */
    raw?: File
}

/**
 * 自定义上传请求参数
 */
export interface UploadRequestOptions {
    action: string
    file: File
    filename: string
    headers: Record<string, string>
    data: Record<string, string>
    onProgress: (percentage: number) => void
    onSuccess: (response: unknown) => void
    onError: (error: Error) => void
}

/**
 * 文件列表展示类型
 * - `text` — 文件名列表
 * - `picture` — 缩略图 + 文件名列表
 * - `picture-card` — 卡片网格
 */
export type UploadListType = 'text' | 'picture' | 'picture-card'

/**
 * 上传组件变体
 * - `outline` — 实线边框
 * - `dashed` — 虚线边框（默认）
 * - `filled` — 填充暗色背景
 * - `ghost` — 无边框无背景
 */
export type UploadVariant = 'outline' | 'dashed' | 'filled' | 'ghost'

/**
 * 上传组件形状
 * - `clip` — 机甲切角（默认）
 * - `no-clip` — 直角矩形
 * - `round` — 圆角矩形
 */
export type UploadShape = 'clip' | 'no-clip' | 'round'

/**
 * 上传组件颜色类型
 */
export type UploadType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

/**
 * CpUpload 组件 Props 定义
 *
 * @description 赛博朋克风格文件上传组件，支持拖拽、图片预览、多种变体和形状。
 */
export const uploadProps = {
    /**
     * 文件列表 (v-model)
     * @default []
     */
    modelValue: {
        type: Array as PropType<UploadFile[]>,
        default: () => [],
    },
    /**
     * 上传地址
     * @default ''
     */
    action: {
        type: String,
        default: '',
    },
    /**
     * 请求头
     * @default {}
     */
    headers: {
        type: Object as PropType<Record<string, string>>,
        default: () => ({}),
    },
    /**
     * 上传附加数据
     * @default {}
     */
    data: {
        type: Object as PropType<Record<string, string>>,
        default: () => ({}),
    },
    /**
     * 上传文件字段名
     * @default 'file'
     */
    name: {
        type: String,
        default: 'file',
    },
    /**
     * 接受的文件类型 (原生 accept)
     * @default ''
     */
    accept: {
        type: String,
        default: '',
    },
    /**
     * 是否支持多文件
     * @default false
     */
    multiple: {
        type: Boolean,
        default: false,
    },
    /**
     * 最大文件数 (0 = 无限制)
     * @default 0
     */
    limit: {
        type: Number,
        default: 0,
    },
    /**
     * 最大文件大小 bytes (0 = 无限制)
     * @default 0
     */
    maxSize: {
        type: Number,
        default: 0,
    },
    /**
     * 是否禁用
     * @default false
     */
    disabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 拖拽上传模式
     * @default false
     */
    drag: {
        type: Boolean,
        default: false,
    },
    /**
     * 选择后自动上传
     * @default true
     */
    autoUpload: {
        type: Boolean,
        default: true,
    },
    /**
     * 文件列表展示类型
     * @default 'text'
     */
    listType: {
        type: String as PropType<UploadListType>,
        default: 'text',
    },
    /**
     * 是否显示文件列表
     * @default true
     */
    showFileList: {
        type: Boolean,
        default: true,
    },
    /**
     * 变体样式
     * @default 'dashed'
     */
    variant: {
        type: String as PropType<UploadVariant>,
        default: 'dashed',
    },
    /**
     * 形状
     * @default 'clip'
     */
    shape: {
        type: String as PropType<UploadShape>,
        default: 'clip',
    },
    /**
     * 颜色类型
     * @default 'default'
     */
    type: {
        type: String as PropType<UploadType>,
        default: 'default',
    },
    /**
     * 自定义颜色（覆盖 type）
     * @default ''
     */
    color: {
        type: String,
        default: '',
    },
    /**
     * 按钮/触发器尺寸
     * @default 'md'
     */
    size: {
        type: [String, Number] as PropType<Size>,
        default: 'md',
    },
    /**
     * 自定义上传函数
     * 若提供，则完全替代内置 XHR 上传逻辑
     */
    httpRequest: {
        type: Function as PropType<(options: UploadRequestOptions) => Promise<unknown> | void>,
        default: undefined,
    },
    /**
     * 上传前钩子，返回 false 或 reject 可阻止上传
     */
    beforeUpload: {
        type: Function as PropType<(file: File) => boolean | Promise<boolean>>,
        default: undefined,
    },
    /**
     * 超出文件数限制时的回调
     */
    onExceed: {
        type: Function as PropType<(files: File[], fileList: UploadFile[]) => void>,
        default: undefined,
    },
    /**
     * 单图内联预览（picture-card 模式下）
     * 仅在 limit = 1 且 listType = 'picture-card' 时生效。
     * 未显式传值时，在 limit = 1 场景下默认开启；
     * 可显式设为 false 关闭。
     */
    inlinePreview: {
        type: Boolean,
        default: undefined,
    },
    /**
     * 是否显示 CpProgress 内圈虚线装饰
     * @default false
     */
    showInnerStripe: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义触发器文案
     * - drag 模式默认: '拖拽文件到此处，或 点击上传'
     * - 默认(按钮)模式默认: '选择文件'
     * @default undefined
     */
    placeholder: {
        type: String,
        default: undefined,
    },
    /**
     * 自定义触发器图标组件
     * 传入 Vue 组件，替换默认 SVG 图标
     * @default undefined
     */
    placeholderIcon: {
        type: Object as PropType<object>,
        default: undefined,
    },
} as const

export type UploadProps = ExtractPropTypes<typeof uploadProps>

/**
 * CpUpload 组件事件定义
 */
export const uploadEmits = {
    /** v-model 绑定 */
    'update:modelValue': (fileList: UploadFile[]) => Array.isArray(fileList),
    /** 文件列表变化 */
    change: (file: UploadFile, _fileList: UploadFile[]) => file && Array.isArray(_fileList),
    /** 上传成功 */
    success: (_response: unknown, file: UploadFile, _fileList: UploadFile[]) => file && Array.isArray(_fileList),
    /** 上传失败 */
    error: (_error: Error, file: UploadFile, _fileList: UploadFile[]) => _error instanceof Error && !!file,
    /** 上传进度 */
    progress: (_percentage: number, file: UploadFile) => typeof _percentage === 'number' && !!file,
    /** 文件移除 */
    remove: (file: UploadFile, _fileList: UploadFile[]) => file && Array.isArray(_fileList),
}

export type UploadEmits = typeof uploadEmits
