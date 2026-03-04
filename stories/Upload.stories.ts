import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { CpUpload, CpForm, CpFormItem, CpButton } from '@cyberpunk-vue/components'
import type { UploadFile } from '@cyberpunk-vue/components'

const meta: Meta<typeof CpUpload> = {
    title: '表单 Form/Upload 上传',
    component: CpUpload,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outline', 'dashed', 'filled', 'ghost'],
        },
        shape: {
            control: 'select',
            options: ['clip', 'no-clip', 'round'],
        },
        listType: {
            control: 'select',
            options: ['text', 'picture', 'picture-card'],
        },
        type: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
        },
        color: { control: 'color' },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        drag: { control: 'boolean' },
        multiple: { control: 'boolean' },
        disabled: { control: 'boolean' },
        autoUpload: { control: 'boolean' },
        showFileList: { control: 'boolean' },
        limit: { control: 'number' },
        accept: { control: 'text' },
        placeholder: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component: '赛博朋克风格文件上传组件。支持 `placeholder` 文案、`placeholderIcon` 图标、`#placeholder` 插槽自定义触发区内容。',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof CpUpload>

// 公共测试上传接口
const UPLOAD_URL = 'https://httpbin.org/post'

// ===== 基础用法 =====
export const 基础用法: Story = {
    args: {
        action: UPLOAD_URL,
    },
    render: (args: any) => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            return { args, fileList }
        },
        template: `
      <div style="width: 400px;">
        <CpUpload v-model="fileList" v-bind="args" />
        <p style="margin-top: 12px; color: var(--cp-text-muted); font-size: 12px;">
          已选择 {{ fileList.length }} 个文件
        </p>
      </div>
    `,
    }),
}

// ===== 拖拽上传 =====
export const 拖拽上传: Story = {
    args: {
        action: UPLOAD_URL,
        drag: true,
    },
    render: (args: any) => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            return { args, fileList }
        },
        template: `
      <div style="width: 500px;">
        <CpUpload v-model="fileList" v-bind="args" />
      </div>
    `,
    }),
}

// ===== 颜色类型 =====
export const 颜色类型: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const types = ['default', 'primary', 'success', 'warning', 'error', 'info'] as const
            const fileLists = ref<Record<string, UploadFile[]>>({
                default: [],
                primary: [],
                success: [],
                warning: [],
                error: [],
                info: [],
            })
            return { types, fileLists, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div v-for="t in types" :key="t">
          <CpUpload v-model="fileLists[t]" :action="UPLOAD_URL" :type="t" />
        </div>
      </div>
    `,
    }),
}

// ===== 拖拽颜色类型 =====
export const 拖拽颜色类型: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const types = ['primary', 'success', 'warning', 'error'] as const
            const fileLists = ref<Record<string, UploadFile[]>>({
                primary: [],
                success: [],
                warning: [],
                error: [],
            })
            return { types, fileLists, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div v-for="t in types" :key="t">
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif; text-transform: uppercase;">{{ t }}</h4>
          <CpUpload v-model="fileLists[t]" :action="UPLOAD_URL" :type="t" drag />
        </div>
      </div>
    `,
    }),
}

// ===== 自定义颜色 =====
export const 自定义颜色: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const fileList1 = ref<UploadFile[]>([])
            const fileList2 = ref<UploadFile[]>([])
            return { fileList1, fileList2, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">#ff00ff</h4>
          <CpUpload v-model="fileList1" :action="UPLOAD_URL" color="#ff00ff" drag />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">#ff6600</h4>
          <CpUpload v-model="fileList2" :action="UPLOAD_URL" color="#ff6600" />
        </div>
      </div>
    `,
    }),
}

// ===== 变体样式 =====
export const 变体样式: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const variants = ['dashed', 'outline', 'filled', 'ghost'] as const
            const fileLists = ref<Record<string, UploadFile[]>>({
                dashed: [],
                outline: [],
                filled: [],
                ghost: [],
            })
            return { variants, fileLists, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div v-for="v in variants" :key="v">
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif; text-transform: uppercase;">{{ v }}</h4>
          <CpUpload v-model="fileLists[v]" :action="UPLOAD_URL" drag :variant="v" type="primary" />
        </div>
      </div>
    `,
    }),
}

// ===== 形状模式 =====
export const 形状模式: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const shapes = ['clip', 'no-clip', 'round'] as const
            const fileLists = ref<Record<string, UploadFile[]>>({
                clip: [],
                'no-clip': [],
                round: [],
            })
            return { shapes, fileLists, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div v-for="s in shapes" :key="s">
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif; text-transform: uppercase;">{{ s }}</h4>
          <CpUpload v-model="fileLists[s]" :action="UPLOAD_URL" drag :shape="s" type="primary" />
        </div>
      </div>
    `,
    }),
}

// ===== 图片上传 =====
export const 图片上传: Story = {
    args: {
        action: UPLOAD_URL,
        listType: 'picture',
        accept: 'image/*',
    },
    render: (args: any) => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            return { args, fileList }
        },
        template: `
      <div style="width: 450px;">
        <CpUpload v-model="fileList" v-bind="args" />
      </div>
    `,
    }),
}

// ===== 图片卡片 =====
export const 图片卡片: Story = {
    args: {
        action: UPLOAD_URL,
        listType: 'picture-card',
        accept: 'image/*',
        multiple: true,
        preview: true,
        download: true,
    },
    render: (args: any) => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            return { args, fileList }
        },
        template: `
      <div>
        <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">支持点击图片卡片上方放大镜（预览 / 下载）</h4>
        <CpUpload v-model="fileList" v-bind="args" />
      </div>
    `,
    }),
}

// ===== 文件限制 =====
export const 文件限制: Story = {
    args: {
        action: UPLOAD_URL,
        limit: 3,
        accept: 'image/*',
        multiple: true,
    },
    render: (args: any) => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            const handleExceed = (files: File[], _fileList: UploadFile[]) => {
                console.warn(`最多上传 3 个文件，本次选择了 ${files.length} 个`)
            }
            return { args, fileList, handleExceed }
        },
        template: `
      <div style="width: 400px;">
        <CpUpload v-model="fileList" v-bind="args" :on-exceed="handleExceed" />
        <p style="margin-top: 8px; color: var(--cp-text-muted); font-size: 12px;">
          最多上传 3 个图片文件
        </p>
      </div>
    `,
    }),
}

// ===== 手动上传 =====
export const 手动上传: Story = {
    args: {
        action: UPLOAD_URL,
        autoUpload: false,
    },
    render: (args: any) => ({
        components: { CpUpload, CpButton },
        setup() {
            const fileList = ref<UploadFile[]>([])
            const uploadRef = ref()
            const handleSubmit = () => {
                uploadRef.value?.submit()
            }
            return { args, fileList, uploadRef, handleSubmit }
        },
        template: `
      <div style="width: 400px;">
        <CpUpload ref="uploadRef" v-model="fileList" v-bind="args" />
        <CpButton
          style="margin-top: 12px;"
          :disabled="fileList.length === 0"
          @click="handleSubmit"
        >
          开始上传
        </CpButton>
      </div>
    `,
    }),
}

// ===== 表单集成 =====
export const 表单集成: Story = {
    render: () => ({
        components: { CpUpload, CpForm, CpFormItem, CpButton },
        setup() {
            const formRef = ref()
            const form = ref({
                files: [] as UploadFile[],
            })
            const rules = {
                files: [
                    {
                        required: true,
                        validator: (_rule: unknown, value: UploadFile[]) => {
                            if (!value || value.length === 0) {
                                return Promise.reject(new Error('请上传至少一个文件'))
                            }
                            return Promise.resolve()
                        },
                        trigger: 'change',
                    },
                ],
            }
            const handleSubmit = async () => {
                try {
                    await formRef.value?.validate()
                    console.log('表单验证通过', form.value)
                } catch {
                    console.log('表单验证失败')
                }
            }
            return { formRef, form, rules, handleSubmit, UPLOAD_URL }
        },
        template: `
      <div style="width: 500px;">
        <CpForm ref="formRef" :model="form" :rules="rules">
          <CpFormItem label="附件" prop="files">
            <CpUpload
              v-model="form.files"
              :action="UPLOAD_URL"
              type="primary"
              drag
              multiple
            />
            <div v-if="form.files.length > 0" style="margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
              <div
                v-for="file in form.files"
                :key="file.uid"
                style="font-size: 12px; color: var(--cp-text-muted); font-family: var(--cp-font-family-mono); word-break: break-all;"
              >
                <span style="color: var(--cp-text-secondary);">{{ file.name }}:</span>
                {{ file.url || '未生成 URL' }}
              </div>
            </div>
          </CpFormItem>
          <CpFormItem>
            <CpButton @click="handleSubmit">提交</CpButton>
          </CpFormItem>
        </CpForm>
      </div>
    `,
    }),
}

// ===== 单图内联预览 =====
export const 单图内联预览: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const avatar = ref<UploadFile[]>([])
            const cover = ref<UploadFile[]>([])
            return { avatar, cover, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; gap: 32px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">头像上传</h4>
          <CpUpload
            v-model="avatar"
            :action="UPLOAD_URL"
            list-type="picture-card"
            accept="image/*"
            :limit="1"
          />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">封面上传 (round)</h4>
          <CpUpload
            v-model="cover"
            :action="UPLOAD_URL"
            list-type="picture-card"
            accept="image/*"
            :limit="1"
            shape="round"
            style="--cp-upload-card-size: 160px;"
          />
        </div>
      </div>
    `,
    }),
}

// ===== 图片卡片自定义尺寸 =====
export const 图片卡片自定义尺寸: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const f1 = ref<UploadFile[]>([])
            const f2 = ref<UploadFile[]>([])
            const f3 = ref<UploadFile[]>([])
            return { f1, f2, f3, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">横向 16:9 (240×135)</h4>
          <CpUpload
            v-model="f1"
            :action="UPLOAD_URL"
            list-type="picture-card"
            accept="image/*"
            multiple
            style="--cp-upload-card-width: 240px; --cp-upload-card-height: 135px;"
          />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">纵向 3:4 (120×160)</h4>
          <CpUpload
            v-model="f2"
            :action="UPLOAD_URL"
            list-type="picture-card"
            accept="image/*"
            multiple
            style="--cp-upload-card-width: 120px; --cp-upload-card-height: 160px;"
          />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">宽幅 Banner (320×100, round) - 单图模式</h4>
          <CpUpload
            v-model="f3"
            :action="UPLOAD_URL"
            list-type="picture-card"
            accept="image/*"
            :limit="1"
            shape="round"
            style="--cp-upload-card-width: 320px; --cp-upload-card-height: 100px;"
          />
        </div>
      </div>
    `,
    }),
}

// ===== 图片卡片拖拽上传 =====
export const 图片卡片拖拽上传: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            return { fileList, UPLOAD_URL }
        },
        template: `
      <div>
        <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">拖拽文件到 "+" 卡片上查看高亮效果</h4>
        <CpUpload
          v-model="fileList"
          :action="UPLOAD_URL"
          list-type="picture-card"
          accept="image/*"
          multiple
        />
      </div>
    `,
    }),
}

// ===== 自定义 Placeholder 文案 =====
export const 自定义Placeholder文案: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const f1 = ref<UploadFile[]>([])
            const f2 = ref<UploadFile[]>([])
            const f3 = ref<UploadFile[]>([])
            return { f1, f2, f3, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">BUTTON — placeholder prop</h4>
          <CpUpload v-model="f1" :action="UPLOAD_URL" placeholder="上传附件" />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">DRAG — placeholder prop</h4>
          <CpUpload v-model="f2" :action="UPLOAD_URL" drag placeholder="将文件拖到这里即可上传" />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">PICTURE-CARD — placeholder prop</h4>
          <CpUpload v-model="f3" :action="UPLOAD_URL" list-type="picture-card" accept="image/*" placeholder="添加图片" />
        </div>
      </div>
    `,
    }),
}

// ===== Placeholder 插槽 =====
export const Placeholder插槽: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const f1 = ref<UploadFile[]>([])
            const f2 = ref<UploadFile[]>([])
            const f3 = ref<UploadFile[]>([])
            return { f1, f2, f3, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">BUTTON — #placeholder slot</h4>
          <CpUpload v-model="f1" :action="UPLOAD_URL">
            <template #placeholder="{ mode }">
              📎 上传文件（{{ mode }}）
            </template>
          </CpUpload>
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">DRAG — #placeholder slot</h4>
          <CpUpload v-model="f2" :action="UPLOAD_URL" drag>
            <template #placeholder>
              <svg style="width: 48px; height: 48px; color: var(--cp-color-primary);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span style="font-size: 14px; color: var(--cp-text-secondary);">拖拽或点击上传图片</span>
              <span style="font-size: 12px; color: var(--cp-text-muted);">支持 JPG / PNG / WebP，最大 5MB</span>
            </template>
          </CpUpload>
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">PICTURE-CARD — #placeholder slot</h4>
          <CpUpload v-model="f3" :action="UPLOAD_URL" list-type="picture-card" accept="image/*">
            <template #placeholder>
              <svg style="width: 24px; height: 24px; color: var(--cp-color-primary);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span style="font-size: 12px; color: var(--cp-text-muted);">添加图片</span>
            </template>
          </CpUpload>
        </div>
      </div>
    `,
    }),
}

// ===== 减淡模式 =====
export const 减淡模式: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const f1 = ref<UploadFile[]>([])
            const f2 = ref<UploadFile[]>([])
            const f3 = ref<UploadFile[]>([])
            return { f1, f2, f3, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">BUTTON — dimmed + type="primary"</h4>
          <CpUpload v-model="f1" :action="UPLOAD_URL" type="primary" dimmed />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">DRAG — dimmed + type="warning"</h4>
          <CpUpload v-model="f2" :action="UPLOAD_URL" type="warning" drag dimmed />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">PICTURE-CARD — dimmed + type="success"</h4>
          <CpUpload v-model="f3" :action="UPLOAD_URL" list-type="picture-card" accept="image/*" type="success" dimmed multiple />
        </div>
      </div>
    `,
    }),
}

// ===== 成功边框颜色 =====
export const 成功边框颜色: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const f1 = ref<UploadFile[]>([])
            const f2 = ref<UploadFile[]>([])
            const f3 = ref<UploadFile[]>([])
            return { f1, f2, f3, UPLOAD_URL }
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 500px;">
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">successType="primary" — 上传成功后边框显示 primary 色</h4>
          <CpUpload v-model="f1" :action="UPLOAD_URL" type="primary" success-type="primary" />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">successType="#ff00ff" — 自定义颜色</h4>
          <CpUpload v-model="f2" :action="UPLOAD_URL" success-type="#ff00ff" />
        </div>
        <div>
          <h4 style="color: var(--cp-text-secondary); margin-bottom: 8px; font-family: Rajdhani, sans-serif;">默认（跟随 type="warning"）</h4>
          <CpUpload v-model="f3" :action="UPLOAD_URL" type="warning" />
        </div>
      </div>
    `,
    }),
}

// ===== TXT 文件读取（纯本地，无需 action） =====
export const TXT文件读取: Story = {
    render: () => ({
        components: { CpUpload, CpButton },
        setup() {
            const fileList = ref<UploadFile[]>([])
            const textContent = ref('')
            const fileName = ref('')
            const lineCount = ref(0)
            const charCount = ref(0)
            const isReading = ref(false)

            const handleChange = (file: UploadFile) => {
                if (!file.raw) return
                isReading.value = true
                const reader = new FileReader()
                reader.onload = (e) => {
                    const result = e.target?.result as string
                    textContent.value = result
                    fileName.value = file.name
                    lineCount.value = result.split('\n').length
                    charCount.value = result.length
                    isReading.value = false
                }
                reader.onerror = () => {
                    textContent.value = '❌ 读取文件失败'
                    isReading.value = false
                }
                reader.readAsText(file.raw)
            }

            const handleClear = () => {
                fileList.value = []
                textContent.value = ''
                fileName.value = ''
                lineCount.value = 0
                charCount.value = 0
            }

            return { fileList, textContent, fileName, lineCount, charCount, isReading, handleChange, handleClear }
        },
        template: `
      <div style="width: 560px;">
        <CpUpload
          v-model="fileList"
          accept=".txt,text/plain"
          drag
          type="primary"
          placeholder="拖拽或点击上传 .txt 文本文件"
          @change="handleChange"
        />

        <!-- 文件信息 + 清除按钮 -->
        <div v-if="fileName" style="margin-top: 16px; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-family: Rajdhani, sans-serif; font-size: 14px; color: var(--cp-color-primary); text-transform: uppercase; letter-spacing: 1px;">
              📄 {{ fileName }}
            </span>
            <span style="font-size: 12px; color: var(--cp-text-muted); font-family: var(--cp-font-family-mono);">
              {{ lineCount }} 行 · {{ charCount }} 字符
            </span>
          </div>
          <CpButton size="sm" type="error" variant="ghost" @click="handleClear">清除</CpButton>
        </div>

        <!-- 文本内容预览 -->
        <div v-if="isReading" style="margin-top: 12px; padding: 16px; color: var(--cp-text-muted); font-size: 13px; text-align: center;">
          读取中...
        </div>
        <pre
          v-else-if="textContent"
          style="
            margin-top: 12px;
            padding: 16px;
            background: var(--cp-bg-elevated, rgba(0,0,0,0.3));
            border: 1px solid var(--cp-border-color, rgba(255,255,255,0.08));
            border-radius: 4px;
            color: var(--cp-text-primary, #e0e0e0);
            font-family: var(--cp-font-family-mono, 'Fira Code', monospace);
            font-size: 13px;
            line-height: 1.6;
            max-height: 400px;
            overflow: auto;
            white-space: pre-wrap;
            word-break: break-all;
          "
        >{{ textContent }}</pre>

        <p v-else style="margin-top: 12px; color: var(--cp-text-muted); font-size: 12px;">
          上传 .txt 文件后，内容将在此处展示。
        </p>
      </div>
    `,
    }),
}

// ===== 文件夹上传 =====
export const 文件夹上传: Story = {
    render: () => ({
        components: { CpUpload },
        setup() {
            const fileList = ref<UploadFile[]>([])
            return { fileList }
        },
        template: `
      <div style="width: 560px;">
        <CpUpload
          v-model="fileList"
          directory
          drag
          type="primary"
          placeholder="拖拽或点击选择文件夹"
        />
        <div v-if="fileList.length > 0" style="margin-top: 16px;">
          <p style="color: var(--cp-text-secondary); font-size: 13px; margin-bottom: 8px; font-family: Rajdhani, sans-serif;">
            共 {{ fileList.length }} 个文件
          </p>
          <div
            v-for="file in fileList.slice(0, 20)"
            :key="file.uid"
            style="font-size: 12px; color: var(--cp-text-muted); font-family: var(--cp-font-family-mono); padding: 2px 0;"
          >
            {{ file.relativePath || file.name }}
          </div>
          <p v-if="fileList.length > 20" style="font-size: 12px; color: var(--cp-text-muted); margin-top: 4px;">
            ... 还有 {{ fileList.length - 20 }} 个文件
          </p>
        </div>
      </div>
    `,
    }),
}
