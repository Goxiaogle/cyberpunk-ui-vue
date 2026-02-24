<script setup lang="ts">
/**
 * CpUpload - 赛博朋克风格文件上传组件
 * 支持拖拽上传、图片预览、多种变体和形状
 * 复用 CpImage、CpProgress、CpButton、CpText
 */
import { computed, ref, inject } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { uploadProps, uploadEmits } from './upload'
import type { UploadFile, UploadRequestOptions } from './upload'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'
import { CpImage } from '@cyberpunk-vue/components/image'
import { CpProgress } from '@cyberpunk-vue/components/progress'
import { CpButton } from '@cyberpunk-vue/components/button'
import { CpText } from '@cyberpunk-vue/components/text'

defineOptions({
    name: `${COMPONENT_PREFIX}Upload`,
})

const props = defineProps(uploadProps)
const emit = defineEmits(uploadEmits)

const ns = useNamespace('upload')

// 表单上下文
const formContext = inject(formContextKey, undefined)

// 内部状态
const inputRef = ref<HTMLInputElement>()
const isDragover = ref(false)
let fileUid = 0

// 是否禁用
const isDisabled = computed(() => props.disabled || formContext?.disabled.value || false)

// 颜色映射
const typeColorMap: Record<string, string> = {
    default: '',
    primary: 'var(--cp-color-primary)',
    success: 'var(--cp-color-success)',
    warning: 'var(--cp-color-warning)',
    error: 'var(--cp-color-error)',
    info: 'var(--cp-color-info)',
}

// 计算颜色
const themeColor = computed(() => {
    if (props.color) return props.color
    return typeColorMap[props.type] || ''
})

// 自定义样式（CSS 变量）
const customStyle = computed(() => {
    const style: Record<string, string> = {}
    if (themeColor.value) {
        style['--cp-upload-color'] = themeColor.value
        style['--cp-upload-border-color'] = themeColor.value
    }
    return style
})

// 根类名
const classes = computed(() => [
    ns.b(),
    ns.m(props.variant),
    ns.m(`shape-${props.shape}`),
    ns.m(`list-${props.listType}`),
    props.type !== 'default' && ns.m(props.type),
    ns.is('disabled', isDisabled.value),
    ns.is('drag', props.drag),
    ns.is('dragover', isDragover.value),
])

// 传递给 CpButton 的 variant 映射
const buttonVariant = computed(() => {
    const map: Record<string, string> = {
        outline: 'outline',
        dashed: 'outline',
        filled: 'solid',
        ghost: 'ghost',
    }
    return (map[props.variant] || 'outline') as 'solid' | 'outline' | 'ghost' | 'neon' | 'semi'
})

// dashed 变体时 CpButton 使用 dashed 边框
const isDashed = computed(() => props.variant === 'dashed')

// 单图内联模式：仅在 picture-card + limit=1 生效；limit=1 时默认开启，可显式关闭
const isInlinePreviewMode = computed(() => {
    if (props.listType !== 'picture-card' || props.limit !== 1) return false
    return props.inlinePreview ?? true
})

// 单图内联预览：picture-card 模式且已有文件
const inlinePreviewFile = computed(() => {
    if (!isInlinePreviewMode.value) return null
    return props.modelValue.length > 0 ? props.modelValue[0] : null
})

// ===== 内置 XHR 上传 =====
function defaultHttpRequest(options: UploadRequestOptions): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        const formData = new FormData()

        formData.append(options.filename, options.file)
        Object.entries(options.data).forEach(([key, val]) => {
            formData.append(key, val)
        })

        xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
                options.onProgress(Math.round((e.loaded / e.total) * 100))
            }
        })

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                let response: unknown
                try {
                    response = JSON.parse(xhr.responseText)
                } catch {
                    response = xhr.responseText
                }
                options.onSuccess(response)
                resolve(response)
            } else {
                const error = new Error(`Upload failed with status ${xhr.status}`)
                options.onError(error)
                reject(error)
            }
        })

        xhr.addEventListener('error', () => {
            const error = new Error('Upload request failed')
            options.onError(error)
            reject(error)
        })

        xhr.open('POST', options.action, true)
        Object.entries(options.headers).forEach(([key, val]) => {
            xhr.setRequestHeader(key, val)
        })
        xhr.send(formData)
    })
}

// ===== 文件操作 =====

function updateFileList(fileList: UploadFile[]) {
    emit('update:modelValue', fileList)
}

function generateUid(): number {
    return Date.now() + fileUid++
}

function isImageFile(file: UploadFile): boolean {
    if (file.url) return true
    if (file.raw) {
        return file.raw.type.startsWith('image/')
    }
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg|ico)$/i.test(file.name)
}

function getFileUrl(file: UploadFile): string {
    if (file.url) return file.url
    if (file.raw && file.raw.type.startsWith('image/')) {
        return URL.createObjectURL(file.raw)
    }
    return ''
}

async function uploadFile(uploadFile: UploadFile) {
    if (!props.action || !uploadFile.raw) return

    uploadFile.status = 'uploading'
    uploadFile.percentage = 0

    const requestFn = props.httpRequest || defaultHttpRequest

    const options: UploadRequestOptions = {
        action: props.action,
        file: uploadFile.raw,
        filename: props.name,
        headers: props.headers,
        data: props.data,
        onProgress: (percentage: number) => {
            uploadFile.percentage = percentage
            emit('progress', percentage, uploadFile)
            updateFileList([...props.modelValue])
        },
        onSuccess: (response: unknown) => {
            uploadFile.status = 'success'
            uploadFile.percentage = 100
            uploadFile.response = response
            const newList = [...props.modelValue]
            emit('success', response, uploadFile, newList)
            emit('change', uploadFile, newList)
            updateFileList(newList)
        },
        onError: (error: Error) => {
            uploadFile.status = 'error'
            const newList = [...props.modelValue]
            emit('error', error, uploadFile, newList)
            emit('change', uploadFile, newList)
            updateFileList(newList)
        },
    }

    try {
        await requestFn(options)
    } catch {
        // errors handled in onError callback
    }
}

async function handleFiles(files: FileList | File[]) {
    const fileArray = Array.from(files)
    const nextCandidates = isInlinePreviewMode.value ? fileArray.slice(0, 1) : fileArray

    // 检查数量限制
    if (!isInlinePreviewMode.value && props.limit && props.modelValue.length + nextCandidates.length > props.limit) {
        props.onExceed?.(nextCandidates, props.modelValue)
        return
    }

    // 单图内联模式下，只保留第一张，其余视为超出
    if (isInlinePreviewMode.value && fileArray.length > 1) {
        props.onExceed?.(fileArray.slice(1), props.modelValue)
    }

    const newFiles: UploadFile[] = []

    for (const file of nextCandidates) {
        // 检查大小限制
        if (props.maxSize && file.size > props.maxSize) {
            continue
        }

        // beforeUpload 钩子
        if (props.beforeUpload) {
            try {
                const result = await props.beforeUpload(file)
                if (result === false) continue
            } catch {
                continue
            }
        }

        const uploadFileObj: UploadFile = {
            uid: generateUid(),
            name: file.name,
            size: file.size,
            status: 'ready',
            percentage: 0,
            raw: file,
        }

        // 图片预览
        if (file.type.startsWith('image/')) {
            uploadFileObj.url = URL.createObjectURL(file)
        }

        newFiles.push(uploadFileObj)
    }

    if (newFiles.length === 0) return

    const updatedList = isInlinePreviewMode.value
        ? [newFiles[0]]
        : [...props.modelValue, ...newFiles]

    if (isInlinePreviewMode.value) {
        for (const oldFile of props.modelValue) {
            if (oldFile.url && oldFile.raw) {
                URL.revokeObjectURL(oldFile.url)
            }
        }
    }

    updateFileList(updatedList)

    // 自动上传
    if (props.autoUpload) {
        for (const file of newFiles) {
            uploadFile(file)
        }
    }
}

// ===== 事件处理 =====

function handleClick() {
    if (isDisabled.value) return
    inputRef.value?.click()
}

function handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files) {
        handleFiles(input.files)
    }
    // 重置以允许选择相同文件
    input.value = ''
}

function handleDragEnter(e: DragEvent) {
    e.preventDefault()
    if (isDisabled.value) return
    isDragover.value = true
}

function handleDragOver(e: DragEvent) {
    e.preventDefault()
}

function handleDragLeave(e: DragEvent) {
    e.preventDefault()
    isDragover.value = false
}

function handleDrop(e: DragEvent) {
    e.preventDefault()
    isDragover.value = false
    if (isDisabled.value) return
    if (e.dataTransfer?.files) {
        handleFiles(e.dataTransfer.files)
    }
}

function handleRemove(file: UploadFile) {
    const newList = props.modelValue.filter((f) => f.uid !== file.uid)
    if (file.url && file.raw) {
        URL.revokeObjectURL(file.url)
    }
    emit('remove', file, newList)
    emit('change', file, newList)
    updateFileList(newList)
}

// 手动上传（autoUpload = false 时使用）
function submit() {
    props.modelValue
        .filter((f) => f.status === 'ready')
        .forEach((f) => uploadFile(f))
}

// 暴露方法
defineExpose({
    /** 手动触发上传 */
    submit,
    /** 清空文件列表 */
    clearFiles: () => updateFileList([]),
})

// 格式化文件大小
function formatSize(bytes: number): string {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`
}
</script>

<template>
  <div :class="classes" :style="customStyle">
    <!-- 隐藏文件 input -->
    <input
      ref="inputRef"
      type="file"
      :class="ns.e('input')"
      :accept="accept"
      :multiple="multiple"
      :disabled="isDisabled"
      @change="handleInputChange"
    />

    <!-- 触发区域 -->
    <div
      :class="[ns.e('trigger'), drag && ns.e('dragger')]"
      @click="handleClick"
      @dragenter="handleDragEnter"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <slot>
        <!-- 拖拽模式 -->
        <template v-if="drag">
          <div :class="ns.e('drag-content')">
            <slot name="placeholder" :mode="'drag'">
              <component :is="placeholderIcon" v-if="placeholderIcon" :class="ns.e('drag-icon')" />
              <svg v-else :class="ns.e('drag-icon')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
              </svg>
              <span v-if="placeholder" :class="ns.e('drag-text')">{{ placeholder }}</span>
              <span v-else :class="ns.e('drag-text')">拖拽文件到此处，或 <CpText underline type="primary">点击上传</CpText></span>
            </slot>
          </div>
        </template>
        <!-- picture-card 模式触发卡片 -->
        <template v-else-if="listType === 'picture-card'">
          <!-- 单图内联预览模式 -->
          <div v-if="inlinePreviewFile" :class="[ns.e('card'), ns.e('card--inline'), ns.is(inlinePreviewFile.status, true)]">
            <CpImage
              v-if="isImageFile(inlinePreviewFile)"
              :src="getFileUrl(inlinePreviewFile)"
              fit="cover"
              :shape="shape"
              :show-decor="false"
              width="100%"
              height="100%"
            />
            <!-- 上传进度 -->
            <div v-if="inlinePreviewFile.status === 'uploading'" :class="ns.e('card-progress')">
              <CpProgress
                type="circle"
                :percentage="inlinePreviewFile.percentage"
                :width="60"
                :stroke-width="4"
                shape="round"
                :show-inner-stripe="props.showInnerStripe === true"
              />
            </div>
            <!-- 悬浮操作层：替换 + 删除 -->
            <div :class="ns.e('card-actions')">
              <span @click.stop="handleClick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </span>
              <span @click.stop="handleRemove(inlinePreviewFile)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </span>
            </div>
          </div>
          <!-- 默认：+ 号触发器 -->
          <div v-else :class="ns.e('card-trigger')">
            <slot name="placeholder" :mode="'picture-card'">
              <component :is="placeholderIcon" v-if="placeholderIcon" style="width: 28px; height: 28px;" />
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span v-if="placeholder" :class="ns.e('card-trigger-text')">{{ placeholder }}</span>
            </slot>
          </div>
        </template>
        <!-- 默认按钮模式：传递 variant/shape/type/color/size -->
        <template v-else>
          <CpButton
            :disabled="isDisabled"
            :variant="buttonVariant"
            :shape="shape"
            :type="type"
            :color="color"
            :size="size"
            :dashed="isDashed"
          >
            <slot name="placeholder" :mode="'button'">
              <component :is="placeholderIcon" v-if="placeholderIcon" style="width: 14px; height: 14px; margin-right: 4px;" />
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; margin-right: 4px;">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
              </svg>
              {{ placeholder ?? '选择文件' }}
            </slot>
          </CpButton>
        </template>
      </slot>
    </div>

    <!-- 文件列表（内联预览模式下隐藏） -->
    <div v-if="showFileList && modelValue.length > 0 && !inlinePreviewFile" :class="ns.e('list')">
      <!-- Text 模式 -->
      <template v-if="listType === 'text'">
        <div
          v-for="file in modelValue"
          :key="file.uid"
          :class="[ns.e('item'), ns.is(file.status, true)]"
        >
          <div :class="ns.e('item-info')">
            <svg :class="ns.e('file-icon')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span :class="ns.e('file-name')">{{ file.name }}</span>
            <span :class="ns.e('file-size')">{{ formatSize(file.size) }}</span>
            <!-- 状态图标 -->
            <svg v-if="file.status === 'success'" :class="[ns.e('status-icon'), ns.e('status-icon--success')]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <svg v-else-if="file.status === 'error'" :class="[ns.e('status-icon'), ns.e('status-icon--error')]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <!-- 删除按钮 -->
            <span :class="ns.e('remove')" @click.stop="handleRemove(file)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </div>
          <!-- 进度条 -->
          <CpProgress
            v-if="file.status === 'uploading'"
            :percentage="file.percentage"
            :stroke-width="3"
            :show-text="false"
            shape="round"
            :show-inner-stripe="props.showInnerStripe === true"
            :class="ns.e('progress')"
          />
        </div>
      </template>

      <!-- Picture 模式 -->
      <template v-else-if="listType === 'picture'">
        <div
          v-for="file in modelValue"
          :key="file.uid"
          :class="[ns.e('item'), ns.e('item--picture'), ns.is(file.status, true)]"
        >
          <div :class="ns.e('thumbnail')">
            <CpImage
              v-if="isImageFile(file)"
              :src="getFileUrl(file)"
              fit="cover"
              :shape="shape"
              :show-decor="false"
              :width="48"
              :height="48"
            />
            <div v-else :class="ns.e('file-placeholder')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
          </div>
          <div :class="ns.e('item-info')">
            <span :class="ns.e('file-name')">{{ file.name }}</span>
            <span :class="ns.e('file-size')">{{ formatSize(file.size) }}</span>
          </div>
          <!-- 进度条 -->
          <CpProgress
            v-if="file.status === 'uploading'"
            :percentage="file.percentage"
            :stroke-width="3"
            :show-text="false"
            shape="round"
            :show-inner-stripe="props.showInnerStripe === true"
            :class="ns.e('progress')"
          />
          <!-- 状态 + 删除 -->
          <div :class="ns.e('actions')">
            <svg v-if="file.status === 'success'" :class="[ns.e('status-icon'), ns.e('status-icon--success')]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <svg v-else-if="file.status === 'error'" :class="[ns.e('status-icon'), ns.e('status-icon--error')]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span :class="ns.e('remove')" @click.stop="handleRemove(file)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </div>
        </div>
      </template>

      <!-- Picture-Card 模式 -->
      <template v-else-if="listType === 'picture-card'">
        <div
          v-for="file in modelValue"
          :key="file.uid"
          :class="[ns.e('card'), ns.is(file.status, true)]"
        >
          <CpImage
            v-if="isImageFile(file)"
            :src="getFileUrl(file)"
            fit="cover"
            :shape="shape"
            :show-decor="false"
            width="100%"
            height="100%"
          />
          <div v-else :class="ns.e('card-file')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span>{{ file.name }}</span>
          </div>
          <!-- 上传进度覆盖层 -->
          <div v-if="file.status === 'uploading'" :class="ns.e('card-progress')">
            <CpProgress
              type="circle"
              :percentage="file.percentage"
              :width="60"
              :stroke-width="4"
              shape="round"
              :show-inner-stripe="props.showInnerStripe === true"
            />
          </div>
          <!-- 悬浮操作层 -->
          <div :class="ns.e('card-actions')">
            <span @click.stop="handleRemove(file)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
