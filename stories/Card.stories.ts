import type {Meta, StoryObj} from '@storybook/vue3-vite'
import { ref } from 'vue'
import {CpCard, CpButton, CpImage, CpTag, CpTextarea, CpText, CpIcon, CpLoading, CpSwitch} from '@cyberpunk-vue/components'

// 资产管理卡片示例所需图标 (使用 MDI 填充图标)
import MdiCog from '~icons/mdi/cog'
import MdiRefresh from '~icons/mdi/refresh'
import MdiPencil from '~icons/mdi/pencil'
import MdiMovieOpen from '~icons/mdi/movie-open'
import MdiAutoFix from '~icons/mdi/auto-fix'

/**
 * # CpCard 卡片
 *
 * 赛博朋克风格卡片容器组件，用于展示内容分组。
 *
 * ## 特性
 * - 🎨 4 种变体：solid、outline、semi、ghost
 * - 📐 3 种形状：clip、no-clip、round
 * - 🌟 3 种阴影模式：always、hover、never
 * - ⚡ 机甲风切角设计
 * - 📦 灵活的头部/底部插槽
 */
const meta: Meta<typeof CpCard> = {
    title: '布局 Layout/Card 卡片',
    component: CpCard,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '卡片标题',
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'semi', 'ghost'],
            description: '卡片变体',
            table: {
                defaultValue: {summary: 'solid'},
            },
        },
        shape: {
            control: 'select',
            options: ['clip', 'no-clip', 'round'],
            description: '卡片形状',
            table: {
                defaultValue: {summary: 'clip'},
            },
        },
        shadow: {
            control: 'select',
            options: ['hover', 'always', 'never'],
            description: '阴影显示时机',
            table: {
                defaultValue: {summary: 'hover'},
            },
        },
        headerBorder: {
            control: 'boolean',
            description: '是否显示头部分隔线',
        },
        footerBorder: {
            control: 'boolean',
            description: '是否显示底部分隔线',
        },
        overlayAnimation: {
            control: 'select',
            options: ['slide-up', 'slide-down', 'slide-left', 'slide-right', 'fade', 'scale'],
            description: '覆层出场动画',
            table: {
                defaultValue: {summary: 'slide-up'},
            },
        },
        overlayPosition: {
            control: 'select',
            options: ['bottom', 'top', 'center'],
            description: '覆层位置',
            table: {
                defaultValue: {summary: 'bottom'},
            },
        },
        overlayDuration: {
            control: {type: 'number', min: 100, max: 1000, step: 50},
            description: '覆层 animation 持续时间 (ms)',
            table: {
                defaultValue: {summary: '300'},
            },
        },
        overlayEffect: {
            control: 'select',
            options: ['none', 'blur', 'color', 'blur-color'],
            description: '覆层效果类型 (无效果/仅模糊/仅颜色/模糊+颜色)',
            table: {
                defaultValue: {summary: 'blur-color'},
            },
        },
        overlayColor: {
            control: 'color',
            description: '覆层颜色 (支持任意 CSS 颜色)',
            table: {
                defaultValue: {summary: 'rgba(26, 26, 36, 0.8)'},
            },
        },
        overlayBlur: {
            control: {type: 'number', min: 0, max: 30, step: 1},
            description: '覆层毛玻璃模糊程度 (px)',
            table: {
                defaultValue: {summary: '10'},
            },
        },
        actionEffect: {
            control: 'select',
            options: ['none', 'blur', 'color', 'blur-color', undefined],
            description: '操作区效果类型 (默认继承 overlayEffect)',
            table: {
                defaultValue: {summary: 'undefined'},
            },
        },
        actionColor: {
            control: 'color',
            description: '操作区颜色 (默认继承 overlayColor)',
            table: {
                defaultValue: {summary: 'undefined'},
            },
        },
        actionBlur: {
            control: {type: 'number', min: 0, max: 30, step: 1},
            description: '操作区模糊程度 (默认继承 overlayBlur)',
            table: {
                defaultValue: {summary: 'undefined'},
            },
        },
        type: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
            description: '主题颜色类型',
            table: {
                defaultValue: {summary: 'default'},
            },
        },
        color: {
            control: 'color',
            description: '自定义主题色 (覆盖 type)',
        },
        bgColor: {
            control: 'text',
            description: '自定义背景色 (支持渐变)',
            table: {
                defaultValue: {summary: ''},
            },
        },
        borderColor: {
            control: 'color',
            description: '自定义边框颜色',
        },
        dividerColor: {
            control: 'color',
            description: '全局设置头尾分隔线颜色',
        },
        headerDividerColor: {
            control: 'color',
            description: '单独设置头部分隔线颜色',
        },
        footerDividerColor: {
            control: 'color',
            description: '单独设置底部分隔线颜色',
        },
        backgroundClass: {
            control: 'object',
            description: '容器/背景自定义类名',
        },
        backgroundStyle: {
            control: 'object',
            description: '容器/背景自定义样式',
        },
        headerClass: {
            control: 'object',
            description: '头部自定义类名',
        },
        headerStyle: {
            control: 'object',
            description: '头部自定义样式',
        },
        bodyClass: {
            control: 'object',
            description: '主体自定义类名',
        },
        bodyStyle: {
            control: 'object',
            description: '主体自定义样式',
        },
        dimmed: {
            control: 'boolean',
            description: '平常无色，悬停时显现主题颜色',
        },
        dimmedDuration: {
            control: {type: 'number', min: 0, max: 2000, step: 100},
            description: '减淡模式切换动画时长 (ms)',
            table: {
                defaultValue: {summary: '300'},
            },
        },
        triggerImageHover: {
            control: 'boolean',
            description: 'Card hover 时触发内部 CpImage 的 hover 效果',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        hoverScale: {
            control: 'boolean',
            description: 'Card hover 时放大效果',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        collapse: {
            control: 'boolean',
            description: '是否折叠卡片（仅显示头部）',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        halfCollapse: {
            control: 'boolean',
            description: '半折叠模式 — 仅在 collapse=true 时生效，保留部分 body 内容并底部渐隐',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        peekHeight: {
            control: {type: 'number', min: 20, max: 300, step: 10},
            description: '半折叠时 body 区域的可见高度 (px)',
            table: {
                defaultValue: {summary: '80'},
            },
        },
        shadowColor: {
            control: 'color',
            description: '自定义阴影颜色 (默认与主题色一致)',
        },
        loading: {
            control: 'boolean',
            description: '是否处于加载状态 (显示遮罩，阻止用户交互)',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        loadingText: {
            control: 'text',
            description: '加载中显示的文字',
            table: {
                defaultValue: {summary: '加载中...'},
            },
        },
        loadingClass: {
            control: 'object',
            description: '加载遮罩自定义类名',
        },
        loadingStyle: {
            control: 'object',
            description: '加载遮罩自定义样式',
        },
        disabled: {
            control: 'boolean',
            description: '是否处于禁用状态 (整体变灰且不可交互)',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof CpCard>

/** 基础用法 */
export const 基础用法: Story = {
    args: {
        title: '系统监控',
        variant: 'solid',
        shape: 'clip',
        shadow: 'hover',
    },
    render: (args: any) => ({
        components: {CpCard},
        setup() {
            return {args}
        },
        template: `
          <CpCard v-bind="args" style="width: 320px;">
            <p>CPU 使用率: 45%</p>
            <p>内存占用: 68%</p>
            <p>网络延迟: 12ms</p>
          </CpCard>
        `,
    }),
}

/** 变体展示 */
export const 变体展示: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 700px;">
            <CpCard title="Solid 实心" variant="solid">
              <p>默认的实心背景卡片，适合主要内容展示。</p>
            </CpCard>
            <CpCard title="Outline 描边" variant="outline">
              <p>透明背景配合边框，适合次要信息区块。</p>
            </CpCard>
            <CpCard title="Semi 半透明" variant="semi">
              <p>毛玻璃效果背景，适合叠加在图片上使用。</p>
            </CpCard>
            <CpCard title="Ghost 幽灵" variant="ghost">
              <p>完全透明的背景，悬停才显示边界。</p>
            </CpCard>
          </div>
        `,
    }),
}

/** 形状模式 */
export const 形状模式: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <CpCard title="Clip 切角" shape="clip" style="width: 200px;">
              <p>机甲风格切角造型</p>
            </CpCard>
            <CpCard title="No-Clip 直角" shape="no-clip" style="width: 200px;">
              <p>标准直角矩形</p>
            </CpCard>
            <CpCard title="Round 圆角" shape="round" style="width: 200px;">
              <p>柔和的圆角设计</p>
            </CpCard>
          </div>
        `,
    }),
}

/** 阴影控制 */
export const 阴影控制: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <CpCard title="Always" shadow="always" style="width: 200px;">
              <p>始终显示阴影</p>
            </CpCard>
            <CpCard title="Hover" shadow="hover" style="width: 200px;">
              <p>悬停时显示阴影</p>
            </CpCard>
            <CpCard title="Never" shadow="never" style="width: 200px;">
              <p>不显示阴影</p>
            </CpCard>
          </div>
        `,
    }),
}

/** 带额外操作 */
export const 带额外操作: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <CpCard title="数据面板" style="width: 400px;">
            <template #extra>
              <CpButton size="sm" variant="ghost">刷新</CpButton>
              <CpButton size="sm" variant="outline" type="primary">导出</CpButton>
            </template>
            <p>这是一个带有头部操作按钮的卡片示例。</p>
            <p>通过 #extra 插槽可以在标题右侧放置任意内容。</p>
          </CpCard>
        `,
    }),
}

/** 自定义头部和底部 */
export const 自定义头部底部: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <CpCard style="width: 400px;">
            <template #header>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 24px;">🚀</span>
                <div>
                  <div style="font-weight: 600; color: var(--cp-text-primary);">任务中心</div>
                  <div style="font-size: 12px; color: var(--cp-text-tertiary);">管理你的任务</div>
                </div>
              </div>
            </template>
            <p>自定义头部区域，可以放置任意内容。</p>
            <p>包括图标、副标题、状态指示器等。</p>
            <template #footer>
              <CpButton variant="ghost">取消</CpButton>
              <CpButton type="primary">确认</CpButton>
            </template>
          </CpCard>
        `,
    }),
}

/** 无头部卡片 */
export const 无头部卡片: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <CpCard style="width: 320px;">
            <p>这是一个没有头部的简洁卡片。</p>
            <p>适合纯内容展示场景。</p>
          </CpCard>
        `,
    }),
}

/** 封面图 (Cover) 演示 */
export const 封面图演示: Story = {
    render: () => ({
        components: {CpCard, CpButton, CpImage, CpTag},
        template: `
          <div>
            <h4 style="color: #fff; margin-bottom: 16px;">基础封面图</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px;">
              <CpCard title="默认封面">
                <template #cover>
                  <CpImage 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400" 
                    :height="160"
                    fit="cover"
                  />
                </template>
                <p style="font-size: 12px;">使用 #cover 插槽添加封面图</p>
              </CpCard>
              
              <CpCard title="Hover 缩放封面" trigger-image-hover>
                <template #cover>
                  <CpImage 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" 
                    :height="160"
                    fit="cover"
                    hoverable
                    hover-mode="zoom"
                  />
                </template>
                <p style="font-size: 12px;">triggerImageHover 触发图片 hover 效果</p>
              </CpCard>
              
              <CpCard title="带装饰块" trigger-image-hover type="warning">
                <template #cover>
                  <CpImage 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400" 
                    :height="160"
                    fit="cover"
                    hoverable
                    hover-mode="scale"
                    type="warning"
                    show-decor
                  />
                </template>
                <p style="font-size: 12px;">显示装饰块和主题色</p>
              </CpCard>
            </div>
            
            <h4 style="color: #fff; margin: 32px 0 16px;">带覆层的封面卡片</h4>
            <div style="display: flex; gap: 20px;">
              <CpCard 
                style="width: 280px;" 
                trigger-image-hover
                overlay-effect="blur-color"
              >
                <template #cover>
                  <div style="position: relative;">
                    <CpImage 
                      src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400" 
                      :height="200"
                      fit="cover"
                      hoverable
                      hover-mode="zoom"
                    />
                    <div style="position: absolute; top: 12px; right: 12px;">
                      <CpTag type="primary" size="sm" effect="dark">NEW</CpTag>
                    </div>
                  </div>
                </template>
                <template #title>游戏封面</template>
                <p style="font-size: 12px;">封面带标签和覆层</p>
                <template #overlay>
                  <CpButton size="sm" type="primary" style="width: 100%;">查看详情</CpButton>
                </template>
              </CpCard>
              
              <CpCard 
                style="width: 280px;" 
                trigger-image-hover
                overlay-effect="none"
                action-effect="blur-color"
              >
                <template #cover>
                  <CpImage 
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400" 
                    :height="200"
                    fit="cover"
                    hoverable
                    hover-mode="zoom"
                  />
                </template>
                <template #title>整卡透明 + 操作区毛玻璃</template>
                <p style="font-size: 12px;">overlayEffect=none, actionEffect=blur-color</p>
                <template #overlay>
                  <CpButton size="sm" type="info" style="width: 100%;">进入游戏</CpButton>
                </template>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 组合示例 */
export const 组合示例: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 900px;">
            <CpCard title="Primary" variant="semi" style="border-color: var(--cp-color-primary);">
              <p style="color: var(--cp-color-primary);">主要信息卡片</p>
            </CpCard>
            <CpCard title="Success" variant="semi" style="border-color: var(--cp-color-success);">
              <p style="color: var(--cp-color-success);">成功状态卡片</p>
            </CpCard>
            <CpCard title="Warning" variant="semi" style="border-color: var(--cp-color-warning);">
              <p style="color: var(--cp-color-warning);">警告信息卡片</p>
            </CpCard>
          </div>
        `,
    }),
}

/** 隐藏式覆层 */
export const 隐藏式覆层: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <CpCard title="资产卡片" style="width: 300px; height: 200px;">
              <p>鼠标悬停查看操作按钮</p>
              <p style="color: var(--cp-text-tertiary); font-size: 12px;">覆层将从底部滑入</p>
              <template #overlay>
                <div style="display: flex; gap: 8px; justify-content: flex-end;">
                  <CpButton size="sm" variant="ghost">取消</CpButton>
                  <CpButton size="sm" type="primary">编辑资产</CpButton>
                </div>
              </template>
            </CpCard>
            <CpCard title="确认匹配" variant="outline"
                    style="width: 300px; height: 200px; border-color: var(--cp-color-info);">
              <p>AI 智能匹配结果</p>
              <p style="color: var(--cp-text-tertiary); font-size: 12px;">悬停确认或拒绝</p>
              <template #overlay>
                <div style="display: flex; gap: 8px; justify-content: space-between;">
                  <CpButton size="sm" variant="ghost" type="danger">拒绝</CpButton>
                  <CpButton size="sm" type="info">确认匹配</CpButton>
                </div>
              </template>
            </CpCard>
          </div>
        `,
    }),
}

/** 覆层动画类型 */
export const 覆层动画类型: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 900px;">
            <CpCard title="Slide Up" overlay-animation="slide-up" style="height: 150px;">
              <p style="font-size: 12px;">从底部滑入 (默认)</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Slide Down" overlay-animation="slide-down" overlay-position="top" style="height: 150px;">
              <p style="font-size: 12px;">从顶部滑入</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Slide Left" overlay-animation="slide-left" style="height: 150px;">
              <p style="font-size: 12px;">从右侧滑入</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Slide Right" overlay-animation="slide-right" style="height: 150px;">
              <p style="font-size: 12px;">从左侧滑入</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Fade" overlay-animation="fade" style="height: 150px;">
              <p style="font-size: 12px;">渐显效果</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Scale" overlay-animation="scale" overlay-position="center" style="height: 150px;">
              <p style="font-size: 12px;">缩放效果</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
              </template>
            </CpCard>
          </div>
        `,
    }),
}

/** 覆层位置 */
export const 覆层位置: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <CpCard title="Bottom" overlay-position="bottom" style="width: 250px; height: 180px;">
              <p style="font-size: 12px;">覆层位于底部</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">底部操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Top" overlay-position="top" overlay-animation="slide-down"
                    style="width: 250px; height: 180px;">
              <p style="font-size: 12px;">覆层位于顶部</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">顶部操作</CpButton>
              </template>
            </CpCard>
            <CpCard title="Center" overlay-position="center" overlay-animation="scale"
                    style="width: 250px; height: 180px;">
              <p style="font-size: 12px;">覆层居中</p>
              <template #overlay>
                <CpButton size="sm" type="primary" style="width: 100%;">居中操作</CpButton>
              </template>
            </CpCard>
          </div>
        `,
    }),
}

/** 覆层效果类型 */
export const 覆层效果类型: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div>
            <h4 style="color: #fff; margin-bottom: 16px;">覆层背景效果对比（悬停查看）</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 1100px;">
              <CpCard title="无效果" overlay-effect="none" style="height: 180px;">
                <p style="font-size: 12px;">overlayEffect="none"</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">透明背景，无模糊</p>
                <template #overlay>
                  <CpButton size="sm" type="primary" style="width: 100%;">操作</CpButton>
                </template>
              </CpCard>
              <CpCard title="仅模糊" overlay-effect="blur" style="height: 180px;">
                <p style="font-size: 12px;">overlayEffect="blur"</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">毛玻璃效果</p>
                <template #overlay>
                  <CpButton size="sm" type="info" style="width: 100%;">操作</CpButton>
                </template>
              </CpCard>
              <CpCard title="仅颜色" overlay-effect="color" style="height: 180px;">
                <p style="font-size: 12px;">overlayEffect="color"</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">纯色遮罩</p>
                <template #overlay>
                  <CpButton size="sm" type="success" style="width: 100%;">操作</CpButton>
                </template>
              </CpCard>
              <CpCard title="模糊+颜色" overlay-effect="blur-color" style="height: 180px;">
                <p style="font-size: 12px;">overlayEffect="blur-color"</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">默认效果</p>
                <template #overlay>
                  <CpButton size="sm" type="warning" style="width: 100%;">操作</CpButton>
                </template>
              </CpCard>
            </div>
            <h4 style="color: #fff; margin: 24px 0 16px;">自定义颜色和模糊度</h4>
            <div style="display: flex; gap: 20px;">
              <CpCard title="红色遮罩" overlay-color="rgba(255, 0, 0, 0.6)" overlay-effect="color" style="width: 250px; height: 180px;">
                <p style="font-size: 12px;">自定义颜色</p>
                <template #overlay>
                  <CpButton size="sm" type="error" style="width: 100%;">危险操作</CpButton>
                </template>
              </CpCard>
              <CpCard title="强模糊" :overlay-blur="25" overlay-effect="blur" style="width: 250px; height: 180px;">
                <p style="font-size: 12px;">overlayBlur=25</p>
                <template #overlay>
                  <CpButton size="sm" type="primary" style="width: 100%;">毛玻璃</CpButton>
                </template>
              </CpCard>
              <CpCard title="紫色毛玻璃" overlay-color="rgba(188, 19, 254, 0.5)" :overlay-blur="15" style="width: 250px; height: 180px;">
                <p style="font-size: 12px;">颜色 + 模糊</p>
                <template #overlay>
                  <CpButton size="sm" variant="neon" style="width: 100%;">霓虹操作</CpButton>
                </template>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 折叠模式 */
export const 折叠模式: Story = {
    render: () => ({
        components: {CpCard, CpButton, CpImage},
        setup() {
            const collapsed1 = ref(true)
            const collapsed2 = ref(true)
            const collapsed3 = ref(true)

            const allCollapsed = () => collapsed1.value && collapsed2.value && collapsed3.value
            const toggleAll = () => {
                const next = !allCollapsed()
                collapsed1.value = next
                collapsed2.value = next
                collapsed3.value = next
            }
            return { collapsed1, collapsed2, collapsed3, allCollapsed, toggleAll }
        },
        template: `
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 16px;">
              <CpButton @click="toggleAll" type="primary">
                {{ allCollapsed() ? '展开全部' : '折叠全部' }}
              </CpButton>
            </div>
            
            <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-start;">
              <CpCard title="受控制的卡片" :collapse="collapsed1" style="width: 300px;">
                <template #extra>
                  <CpButton size="sm" variant="ghost" @click="collapsed1 = !collapsed1">
                    {{ collapsed1 ? '展开' : '折叠' }}
                  </CpButton>
                </template>
                <p>点击上方按钮体验平滑的折叠动画。</p>
                <p>内容高度由 CSS Grid 自动处理。</p>
                <template #footer>
                  <CpButton size="sm">底部动作区</CpButton>
                </template>
              </CpCard>

              <CpCard title="带封面的卡片" :collapse="collapsed2" style="width: 300px;" type="success">
                <template #extra>
                  <CpButton size="sm" variant="ghost" type="success" @click="collapsed2 = !collapsed2">
                    {{ collapsed2 ? '展开' : '折叠' }}
                  </CpButton>
                </template>
                <template #cover>
                  <CpImage src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400" :height="120" fit="cover" />
                </template>
                <p>封面图也会平滑折叠。</p>
                <template #footer>
                  <CpButton size="sm" type="success">进入</CpButton>
                </template>
              </CpCard>
              
              <CpCard title="只有 Header" :collapse="collapsed3" style="width: 300px;" type="warning">
                <template #extra>
                  <CpButton size="sm" variant="ghost" type="warning" @click="collapsed3 = !collapsed3">
                    {{ collapsed3 ? '展开' : '折叠' }}
                  </CpButton>
                  <CpButton size="sm" variant="ghost" type="warning">操作</CpButton>
                </template>
                <p>只有头部时，折叠也不会影响整体渲染，依然稳定。</p>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 半折叠预览 */
export const 半折叠预览: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        setup() {
            const collapsed1 = ref(true)
            const half1 = ref(true)
            const mode2 = ref<'expanded' | 'half' | 'collapsed'>('half')
            const mode3 = ref<'expanded' | 'half' | 'collapsed'>('half')

            // 第一个卡片：半折叠 ↔ 展开 直接切换
            const toggle1 = () => {
                if (collapsed1.value && half1.value) {
                    // 半折叠 → 展开
                    collapsed1.value = false
                    half1.value = false
                } else {
                    // 展开 → 半折叠
                    collapsed1.value = true
                    half1.value = true
                }
            }

            const isCollapsed = (m: string) => m === 'half' || m === 'collapsed'
            const isHalf = (m: string) => m === 'half'
            const cycleMode = (current: string) => {
                if (current === 'expanded') return 'half'
                if (current === 'half') return 'collapsed'
                return 'expanded'
            }
            const modeLabel = (m: string) => {
                if (m === 'expanded') return '展开'
                if (m === 'half') return '半折叠'
                return '折叠'
            }
            return { collapsed1, half1, toggle1, mode2, mode3, isCollapsed, isHalf, cycleMode, modeLabel }
        },
        template: `
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <h4 style="color: #fff; margin-bottom: 0;">半折叠 — 使用 mask-image 渐隐底部内容（任何背景下均工作）</h4>
            <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0;">
              collapse + halfCollapse 同时为 true 时，body 区域保留 peekHeight 高度，底部通过 CSS mask 渐变淡出。
            </p>

            <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-start;">
              <CpCard
                title="查看更多示例"
                :collapse="collapsed1"
                :half-collapse="half1"
                style="width: 320px;"
              >
                <template #extra>
                  <CpButton size="sm" variant="ghost" @click="toggle1">
                    {{ collapsed1 ? '查看更多' : '收起' }}
                  </CpButton>
                </template>
                <p>《重生七零咸鱼翻身》--- 第0集 --- 【内容简介】二十一世纪孤女——顾之夏，意外激活祖传手链空间，囤货期间意外穿越至1971年东北山村，恰好砸进执行任务的军官陆景逸怀中。携空间、医术与内功的她，为自保装失忆暂居陆家。</p>
                <p>凭借空间物资和现代知识，她渐渐融入乡村生活，与陆景逸从误解到并肩，共同面对时代的风浪。</p>
              </CpCard>

              <CpCard
                title="三态循环 (120px)"
                :collapse="isCollapsed(mode2)"
                :half-collapse="isHalf(mode2)"
                :peek-height="120"
                type="primary"
                style="width: 320px;"
              >
                <template #extra>
                  <CpButton size="sm" variant="ghost" type="primary" @click="mode2 = cycleMode(mode2)">
                    {{ modeLabel(mode2) }}
                  </CpButton>
                </template>
                <p>更高的预览区域，适合需要展示更多内容摘要的场景。</p>
                <p>通过 peekHeight 控制半折叠时 body 区域的可见高度，支持数字 (px) 和字符串 (如 '6rem')。</p>
                <p>mask-image 渐变操作的是 alpha 通道，因此在任何背景色（纯色、渐变、半透明）下都完美工作。</p>
              </CpCard>

              <CpCard
                title="Semi 变体 (60px)"
                :collapse="isCollapsed(mode3)"
                :half-collapse="isHalf(mode3)"
                :peek-height="60"
                variant="semi"
                type="success"
                style="width: 320px;"
              >
                <template #extra>
                  <CpButton size="sm" variant="ghost" type="success" @click="mode3 = cycleMode(mode3)">
                    {{ modeLabel(mode3) }}
                  </CpButton>
                </template>
                <p>半透明背景下的半折叠效果。peekHeight = 60px。</p>
                <p>毛玻璃效果与 mask-image 渐变完美配合。内容淡出到透明后自然融入任何底层背景。</p>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 覆层层级控制 */
export const 覆层层级控制: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div>
            <h4 style="color: #fff; margin-bottom: 16px;">整卡与操作区独立控制（悬停查看）</h4>
            <p style="color: var(--cp-text-secondary); font-size: 12px; margin-bottom: 20px;">
              backdrop (整卡) 与 overlay (操作区) 可分别设置效果类型、颜色和模糊度。
            </p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px;">
              <CpCard
                title="同步效果"
                overlay-effect="blur-color"
                style="height: 200px;"
              >
                <p style="font-size: 11px; color: var(--cp-text-secondary);">整卡和操作区使用相同效果</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">overlayEffect="blur-color"</p>
                <template #overlay>
                  <CpButton size="sm" type="primary" style="width: 100%;">操作按钮</CpButton>
                </template>
              </CpCard>
              
              <CpCard
                title="整卡模糊 + 操作区无效果"
                overlay-effect="blur-color"
                action-effect="none"
                style="height: 200px;"
              >
                <p style="font-size: 11px; color: var(--cp-text-secondary);">整卡毛玻璃，操作区透明</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">overlayEffect="blur-color"<br/>actionEffect="none"</p>
                <template #overlay>
                  <CpButton size="sm" type="success" style="width: 100%;">透明操作区</CpButton>
                </template>
              </CpCard>
              
              <CpCard
                title="整卡无效果 + 操作区颜色"
                overlay-effect="none"
                action-effect="color"
                action-color="rgba(188, 19, 254, 0.7)"
                style="height: 200px;"
              >
                <p style="font-size: 11px; color: var(--cp-text-secondary);">整卡透明，操作区紫色</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">overlayEffect="none"<br/>actionEffect="color"</p>
                <template #overlay>
                  <CpButton size="sm" variant="neon" style="width: 100%;">紫色操作区</CpButton>
                </template>
              </CpCard>
            </div>
            
            <h4 style="color: #fff; margin: 32px 0 16px;">独立颜色和模糊度</h4>
            <div style="display: flex; gap: 20px;">
              <CpCard
                title="整卡蓝色 + 操作区红色"
                overlay-effect="color"
                overlay-color="rgba(0, 120, 255, 0.5)"
                action-color="rgba(255, 50, 50, 0.7)"
                style="width: 280px; height: 200px;"
              >
                <p style="font-size: 11px; color: var(--cp-text-secondary);">不同颜色的遮罩层</p>
                <template #overlay>
                  <CpButton size="sm" type="error" style="width: 100%;">红色操作区</CpButton>
                </template>
              </CpCard>
              
              <CpCard
                title="整卡强模糊 + 操作区弱模糊"
                overlay-effect="blur"
                :overlay-blur="20"
                :action-blur="5"
                style="width: 280px; height: 200px;"
              >
                <p style="font-size: 11px; color: var(--cp-text-secondary);">不同模糊程度</p>
                <p style="font-size: 10px; color: var(--cp-text-tertiary);">overlayBlur=20, actionBlur=5</p>
                <template #overlay>
                  <CpButton size="sm" type="info" style="width: 100%;">弱模糊操作区</CpButton>
                </template>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 主题颜色展示 */
export const 主题颜色展示: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <div style="display: flex; flex-direction: column; gap: 30px;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
              <CpCard title="Primary Solid" type="primary" variant="solid">主要实心色</CpCard>
              <CpCard title="Success Solid" type="success" variant="solid">成功实心色</CpCard>
              <CpCard title="Warning Solid" type="warning" variant="solid">警告实心色</CpCard>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
              <CpCard title="Error Outline" type="error" variant="outline">错误描边色</CpCard>
              <CpCard title="Info Outline" type="info" variant="outline">信息描边色</CpCard>
              <CpCard title="Primary Outline" type="primary" variant="outline">主要描边色</CpCard>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
              <CpCard title="Success Semi" type="success" variant="semi">成功半透明</CpCard>
              <CpCard title="Warning Semi" type="warning" variant="semi">警告半透明</CpCard>
              <CpCard title="Error Semi" type="error" variant="semi">错误半透明</CpCard>
            </div>
          </div>
        `,
    }),
}

/** 自定义颜色 */
export const 自定义颜色: Story = {
    args: {
        title: '自定义霓虹紫',
        color: '#bc13fe',
        variant: 'outline',
    },
    render: (args: any) => ({
        components: {CpCard},
        setup() {
            return {args}
        },
        template: `
          <div style="display: flex; gap: 20px;">
            <CpCard v-bind="args" style="width: 280px;">
              使用线性注入的 CSS 变量控制颜色
            </CpCard>
            <CpCard title="极客金" color="#ffb000" variant="semi" style="width: 280px;">
              自定义颜色的半透明变体
            </CpCard>
          </div>
        `,
    }),
}

/** 减淡模式演示 */
export const 减淡模式演示: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div>
            <h4 style="color: #fff; margin-bottom: 16px;">减淡模式：平常无颜色，悬停时显现主题色（支持动画时长控制）</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
              <CpCard title="正常状态" type="primary" style="height: 120px;">无 dimmed</CpCard>
              <CpCard title="减淡状态 (300ms)" type="primary" dimmed style="height: 120px;">正常过渡</CpCard>
              <CpCard title="慢速模式 (1000ms)" type="success" dimmed :dimmed-duration="1000" style="height: 120px;">
                丝滑过渡
              </CpCard>
              <CpCard title="Ghost 模式" variant="ghost" type="warning" dimmed style="height: 120px;">分割线也有过渡
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 自定义背景色 */
export const 自定义背景色: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <div>
            <h4 style="color: #fff; margin-bottom: 16px;">自定义背景色 (bgColor) - 支持纯色和渐变</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 24px;">
              <CpCard title="紫色背景" bgColor="#2a1a3e">
                <p>纯色自定义背景</p>
              </CpCard>
              <CpCard title="深蓝背景" bgColor="#0a1628">
                <p>深色系背景</p>
              </CpCard>
              <CpCard title="暗红背景" bgColor="rgba(60, 20, 20, 0.9)">
                <p>带透明度的颜色</p>
              </CpCard>
            </div>
            <h4 style="color: #fff; margin-bottom: 16px;">渐变背景</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 24px;">
              <CpCard title="紫色渐变" bgColor="linear-gradient(135deg, #1a1a2e, #4a2a6e)">
                <p>斜向渐变效果</p>
              </CpCard>
              <CpCard title="赛博霓虹" bgColor="linear-gradient(180deg, #0f0c29, #302b63, #24243e)">
                <p>多色渐变</p>
              </CpCard>
              <CpCard title="科技蓝" bgColor="linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)">
                <p>对角线渐变</p>
              </CpCard>
            </div>
            <h4 style="color: #fff; margin-bottom: 16px;">bgColor + type 组合</h4>
            <div style="display: flex; gap: 20px;">
              <CpCard title="渐变 + Primary" type="primary" bgColor="linear-gradient(135deg, #1a1a2e, #2a2a4e)" style="width: 280px;">
                <p>bgColor 控制背景，type 控制主题色</p>
              </CpCard>
              <CpCard title="渐变 + Warning" type="warning" bgColor="linear-gradient(135deg, #1a1a1a, #2a2a2a)" style="width: 280px;">
                <p>暗色背景 + 警告主题</p>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 高级样式定制 */
export const 高级样式定制: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div style="display: flex; flex-direction: column; gap: 30px;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
              <!-- 边框与分隔线控制 -->
              <CpCard 
                title="高级边框控制" 
                borderColor="#00f0ff"
                headerDividerColor="rgba(0, 240, 255, 0.3)"
                footerDividerColor="#bc13fe"
              >
                <p>borderColor: #00f0ff</p>
                <p>headerDividerColor: cyan (low opacity)</p>
                <p>footerDividerColor: purple</p>
                <template #footer>
                  <CpButton size="sm" type="primary">确认</CpButton>
                </template>
              </CpCard>

              <!-- Class 与 Style 控制 -->
              <CpCard 
                title="Class/Style 深度定制"
                :backgroundStyle="{ 
                  background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                  padding: '10px',
                  borderRadius: '20px'
                }"
                :headerStyle="{ borderBottomWidth: '2px', paddingBottom: '20px' }"
                :bodyStyle="{ color: '#00f0ff', fontSize: '18px', fontStyle: 'italic' }"
                shape="round"
              >
                <p>backgroundStyle 定制容器</p>
                <p>headerStyle 定制头部</p>
                <p>bodyStyle 定制主体文字</p>
              </CpCard>
            </div>

            <!-- 分隔线全局控制 -->
            <CpCard 
              title="全局分隔线控制" 
              dividerColor="#ff0055"
              style="width: 400px;"
            >
              <p>dividerColor: #ff0055 (统一设置头尾)</p>
              <template #footer>
                <div style="font-size: 10px; opacity: 0.5;">FOOTER CONTENT</div>
              </template>
            </CpCard>
          </div>
        `,
    }),
}

/** 组合示例：资产管理卡片 */
export const 资产管理卡片: Story = {
    render: () => ({
        components: {CpCard, CpButton, CpImage, CpTag, CpTextarea, CpText, CpIcon, MdiPencil, MdiMovieOpen, MdiAutoFix},
        setup() {
            return { MdiCog, MdiRefresh, MdiPencil, MdiMovieOpen, MdiAutoFix }
        },
        template: `
          <div style="display: flex; gap: 24px; padding: 20px; background: linear-gradient(135deg, #080c14 0%, #0a1018 50%, #0c1420 100%); min-height: 500px;">
            <!-- 已确认资产 -->
            <CpCard
                style="width: 320px;"
                variant="solid"
                type="primary"
                shadow="hover"
                overlayEffect="none"
                actionEffect="blur-color"
                trigger-image-hover
                bgColor="linear-gradient(135deg, #0a1120 0%, #1a2a44 60%, #243a5a 100%)"
                borderColor="rgba(0, 240, 255, 0.4)"
                dividerColor="rgba(0, 240, 255, 0.15)"
                :headerStyle="{ background: 'rgba(0, 240, 255, 0.03)' }"
                :bodyStyle="{ background: 'rgba(0, 20, 40, 0.1)' }"
            >
              <!-- 封面图插槽 -->
              <template #cover>
                <div style="position: relative; height: 180px; overflow: hidden;">
                  <CpImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4jC0ceMC1oDZlJzJYZcnIpk3gZzkcRtEX6W_QdU3ZmRyeDzkDYi6cOPM7mO95nZ00RuaZFwK9JzMzSrvz0D9D0vV55m505UwBMVaf9BENEHXWpAnv5E79zN9ol0exbM6cYO6VGLsN1Ca2YbXumreuuQwIfrAbzW6qTNcl-sX-hVAhrTY06HqaRtpLPEWag4H3xxcnHMh0PwPinGW5H4ANU5PlM3f51AS4RTx155tl4v8NqvSmdSb_OMt5HLaVnV9m7QRaeM_kgQI"
                      fit="cover"
                      style="width: 100%; height: 100%; opacity: 0.8;"
                      hoverable
                      hover-mode="zoom"
                  />
                  <div style="position: absolute; top: 12px; right: 12px; z-index: 1;">
                    <CpTag type="primary" size="sm" effect="dark"
                           style="font-weight: bold; box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);">CONFIRMED
                    </CpTag>
                  </div>
                  <!-- 底部渐变罩 -->
                  <div
                      style="position: absolute; inset: 0; background: linear-gradient(to top, #0a0f18, transparent); opacity: 0.7;"></div>
                </div>
              </template>

              <!-- 标题插槽自定义 -->
              <template #title>
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                  <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <CpText type="primary" size="lg" bold style="letter-spacing: 1px;">凯 (KAI)</CpText>
                    </div>
                    <div
                        style="font-size: 10px; color: var(--cp-color-primary); opacity: 0.8; font-family: monospace; margin-top: 2px;">
                      ID: CHR-001
                    </div>
                  </div>
                </div>
              </template>

              <template #extra>
                <CpTag size="sm" type="primary" plain>角色</CpTag>
              </template>

              <!-- 主体内容 -->
              <div style="display: flex; flex-direction: column; gap: 12px; height: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <CpText size="xs" bold type="primary" style="text-transform: uppercase; opacity: 0.5;">
                    <template #prefix>
                      <MdiPencil/>
                    </template>
                    提示词 (PROMPT)
                  </CpText>
                </div>

                <CpTextarea
                    model-value="Cyberpunk protagonist, male, tactical black techwear jacket, rain-slicked neon street background, cinematic lighting, 8k render."
                    readonly
                    :rows="4"
                    style="--cp-textarea-bg: rgba(0, 15, 30, 0.4); border: 1px solid rgba(0, 240, 255, 0.1); color: rgba(255, 255, 255, 0.7); font-size: 10px;"
                />

                <div
                    style="margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(0, 240, 255, 0.1); display: flex; justify-content: space-between; align-items: center; font-size: 10px; font-family: monospace; color: rgba(0, 240, 255, 0.4);">
                  <span style="display: flex; align-items: center; gap: 4px;"><MdiMovieOpen style="font-size: 14px; opacity: 0.8;"/> 42 Scenes</span>
                  <span style="opacity: 0.8;">EP.01 START</span>
                </div>
              </div>

              <!-- 悬停操作覆层 -->
              <template #overlay>
                <div style="display: flex; gap: 8px; width: 100%;">
                  <CpButton type="primary" size="sm" block bold style="flex: 1;">编辑资产</CpButton>
                  <CpButton :icon="MdiCog" type="primary" size="sm" variant="outline"/>
                </div>
              </template>
            </CpCard>

            <!-- 智能匹配资产 -->
            <CpCard
                style="width: 320px;"
                variant="semi"
                type="primary"
                shadow="always"
                hoverScale
                actionEffect="blur-color"
                trigger
                trigger-image-hover
                bgColor="rgba(10, 25, 45, 0.4)"
                borderColor="rgba(0, 240, 255, 0.6)"
                dividerColor="rgba(0, 240, 255, 0.15)"
                :headerStyle="{ borderLeft: '3px solid var(--cp-color-primary)', paddingLeft: '14px', background: 'rgba(0, 240, 255, 0.05)' }"
                :backgroundStyle="{ backdropFilter: 'blur(16px)', boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)' }"
            >
              <template #cover>
                <div style="position: relative; height: 180px; overflow: hidden; background: #000;">
                  <CpImage
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600"
                      fit="cover"
                      style="width: 100%; height: 100%; opacity: 0.6; filter: hue-rotate(180deg);"
                      hoverable
                      hover-mode="zoom"
                  />
                  <div style="position: absolute; top: 12px; right: 12px; z-index: 1;">
                    <CpTag type="primary" size="sm" effect="dark" variant="semi"
                           style="font-weight: bold; box-shadow: 0 0 10px rgba(0, 240, 255, 0.4); display: flex; align-items: center; gap: 4px;">
                      <MdiAutoFix style="font-size: 12px;margin-right: 5px;"/>
                      智能匹配
                    </CpTag>
                  </div>
                  <!-- 全息装饰图层 -->
                  <div
                      style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,240,255,0.1) 0%, transparent 100%); pointer-events: none;"></div>
                </div>
              </template>

              <template #title>
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                  <div style="display: flex; flex-direction: column;width: 100%;">
                    <div style="display: flex; align-items: center; gap: 8px;width: 100%;">
                      <CpText type="primary" size="lg" bold style="letter-spacing: 1px;">奥拉 (AURA)</CpText>
                    </div>
                    <div
                        style="font-size: 10px; color: var(--cp-color-primary); opacity: 0.8; font-family: monospace; margin-top: 2px;">
                      ID: CHR-002
                    </div>
                  </div>
                </div>
              </template>
              
              <template #extra>
                <CpTag size="sm" type="primary" variant="outline" plain>角色</CpTag>
              </template>

              <div style="display: flex; flex-direction: column; gap: 12px; height: 100%;">
                <CpText size="xs" type="primary" bold style="text-transform: uppercase; opacity: 0.5;">
                  <template #prefix>
                    <MdiPencil/>
                  </template>
                  提示词 (PROMPT)
                </CpText>

                <CpTextarea
                    model-value="Holographic AI avatar, female, translucent blue skin, glowing data streams, cybernetic neural interface."
                    readonly
                    :rows="4"
                    style="--cp-textarea-bg: rgba(0, 15, 30, 0.4); border: 1px solid rgba(0, 240, 255, 0.1); color: rgba(255, 255, 255, 0.7); font-size: 10px;"
                />

                <div
                    style="margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(0, 240, 255, 0.1); display: flex; justify-content: space-between; align-items: center; font-size: 10px; font-family: monospace; color: rgba(0, 240, 255, 0.4);">
                  <span style="display: flex; align-items: center; gap: 4px;"><MdiMovieOpen style="font-size: 14px; opacity: 0.8;"/> 18 Scenes</span>
                  <span style="opacity: 0.8;">EP.01 START</span>
                </div>
              </div>

              <template #overlay>
                <div style="display: flex; gap: 8px; width: 100%;">
                  <CpButton type="primary" size="sm" block bold style="flex: 1;">确认匹配</CpButton>
                  <CpButton :icon="MdiRefresh" type="primary" size="sm" variant="outline"/>
                </div>
              </template>
            </CpCard>
          </div>
        `,
    }),
}
/** 阴影颜色定制 */
export const 阴影颜色定制: Story = {
    render: () => ({
        components: {CpCard},
        template: `
          <div style="display: flex; flex-direction: column; gap: 30px;">
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <CpCard title="默认阴影 (Default)" shadow="always" style="width: 200px;">
                <p>无主题色时的默认黑色阴影</p>
              </CpCard>
              <CpCard title="主题色阴影 (Primary)" type="primary" shadow="always" style="width: 200px;">
                <p>阴影自动跟随 Primary 主题色</p>
              </CpCard>
              <CpCard title="主题色阴影 (Success)" type="success" shadow="always" style="width: 200px;">
                <p>阴影自动跟随 Success 主题色</p>
              </CpCard>
            </div>
            
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <CpCard title="自定义阴影 (霓虹粉)" shadowColor="#ff00ff" shadow="always" style="width: 200px;">
                <p>shadowColor="#ff00ff"</p>
              </CpCard>
              <CpCard title="自定义阴影 (青色)" shadowColor="cyan" shadow="always" style="width: 200px;">
                <p>shadowColor="cyan"</p>
              </CpCard>
              <CpCard title="非切角阴影 (Round)" shadowColor="#00ff00" shape="round" shadow="always" style="width: 200px;">
                <p>非切角模式使用 box-shadow</p>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 内容 Flex 撑满高度 */
export const 内容Flex撑满高度: Story = {
    render: () => ({
        components: {CpCard, CpButton},
        template: `
          <div>
            <h4 style="color: #fff; margin-bottom: 16px;">Card 内部使用 flex: 1 撑满剩余高度</h4>
            <p style="color: var(--cp-text-tertiary); font-size: 12px; margin-bottom: 20px;">
              卡片 body 本身是一个 flex column 容器，子元素可以使用 flex: 1 自动填满可用高度。
            </p>
            <div style="display: flex; gap: 20px; align-items: stretch;">
              <CpCard title="固定高度 + flex:1" style="width: 280px; height: 360px;">
                <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
                  <p style="color: var(--cp-text-secondary); font-size: 12px;">上方内容</p>
                  <div style="flex: 1; border: 1px dashed rgba(0, 240, 255, 0.3); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: var(--cp-color-primary); font-size: 12px;">
                    flex: 1 区域（自动撑满）
                  </div>
                  <p style="color: var(--cp-text-tertiary); font-size: 10px; text-align: right;">下方内容</p>
                </div>
              </CpCard>

              <CpCard title="带 Footer + flex:1" style="width: 280px; height: 360px;" type="success">
                <div style="flex: 1; border: 1px dashed rgba(0, 255, 136, 0.3); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: var(--cp-color-success); font-size: 12px;">
                  整个 body 内容区撑满
                </div>
                <template #footer>
                  <CpButton size="sm" type="success">操作</CpButton>
                </template>
              </CpCard>

              <CpCard title="Grid 父容器中" variant="outline" type="primary" style="width: 280px; height: 360px;">
                <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                  <div style="flex: 1; border: 1px dashed rgba(0, 240, 255, 0.2); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: var(--cp-text-secondary);">
                    区域 A (flex: 1)
                  </div>
                  <div style="flex: 1; border: 1px dashed rgba(0, 240, 255, 0.2); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: var(--cp-text-secondary);">
                    区域 B (flex: 1)
                  </div>
                </div>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 加载状态 */
export const 加载状态: Story = {
    render: () => ({
        components: {CpCard, CpButton, CpLoading, CpSwitch},
        setup() {
            const loading1 = ref(true)
            const loading2 = ref(true)
            const loading3 = ref(true)
            return { loading1, loading2, loading3 }
        },
        template: `
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <h4 style="color: #fff; margin-bottom: 0;">加载状态 — 遮罩阻止用户交互</h4>
            <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0;">
              loading 为 true 时在卡片内容上方显示半透明遮罩 + 加载指示器。可自定义加载文字、遮罩样式，也可通过 #loading 插槽完全自定义。
            </p>

            <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-start;">
              <!-- 基础加载 -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <CpSwitch v-model="loading1" />
                <CpCard title="默认加载" :loading="loading1" style="width: 280px; height: 200px;">
                  <p>CPU 使用率: 45%</p>
                  <p>内存占用: 68%</p>
                  <p>网络延迟: 12ms</p>
                </CpCard>
              </div>

              <!-- 自定义加载文字 -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <CpSwitch v-model="loading2" />
                <CpCard title="自定义文字" :loading="loading2" loading-text="数据同步中..." type="primary" style="width: 280px; height: 200px;">
                  <p>正在从远程服务器同步数据</p>
                  <p>请保持网络连接</p>
                </CpCard>
              </div>

              <!-- 无文字 -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <CpSwitch v-model="loading3" />
                <CpCard title="无文字" :loading="loading3" loading-text="" type="success" variant="outline" style="width: 280px; height: 200px;">
                  <p>loading-text 设为空字符串时不显示文字</p>
                </CpCard>
              </div>
            </div>
          </div>
        `,
    }),
}

/** 加载遮罩样式定制 */
export const 加载遮罩样式定制: Story = {
    render: () => ({
        components: {CpCard, CpButton, CpLoading},
        template: `
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <h4 style="color: #fff; margin-bottom: 0;">遮罩样式定制 — 通过 CSS 变量和 loadingClass / loadingStyle 调节</h4>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
              <!-- 默认效果 -->
              <CpCard title="默认遮罩" loading style="height: 200px;">
                <p>默认半透明深色背景 + 轻微模糊</p>
              </CpCard>

              <!-- 深色高对比 -->
              <CpCard
                title="深色高对比"
                loading
                type="error"
                :loadingStyle="{ '--cp-card-loading-bg': 'rgba(0, 0, 0, 0.9)', '--cp-card-loading-backdrop': 'blur(8px)' }"
                style="height: 200px;"
              >
                <p>高对比度深色遮罩</p>
              </CpCard>

              <!-- 主题色遮罩 -->
              <CpCard
                title="主题色遮罩"
                loading
                loading-text="处理中..."
                type="primary"
                :loadingStyle="{ '--cp-card-loading-bg': 'rgba(0, 100, 200, 0.6)', '--cp-card-loading-text-color': '#fff' }"
                style="height: 200px;"
              >
                <p>主题色半透明遮罩</p>
              </CpCard>

              <!-- 无模糊 -->
              <CpCard
                title="无模糊遮罩"
                loading
                loading-text="请稍候"
                type="warning"
                :loadingStyle="{ '--cp-card-loading-backdrop': 'none', '--cp-card-loading-bg': 'rgba(30, 30, 10, 0.7)' }"
                style="height: 200px;"
              >
                <p>关闭 backdrop-filter 的遮罩</p>
              </CpCard>
            </div>

            <h4 style="color: #fff; margin: 8px 0 0;">自定义加载插槽</h4>
            <div style="display: flex; gap: 20px;">
              <CpCard title="#loading 插槽" loading type="info" style="width: 300px; height: 200px;">
                <p>通过 #loading 插槽完全自定义加载中的内容</p>
                <template #loading>
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <CpLoading variant="spinner" type="info" size="lg" />
                    <span style="color: var(--cp-color-info); font-size: 14px; font-weight: 600;">⚡ 正在解析数据...</span>
                    <span style="color: var(--cp-text-tertiary); font-size: 11px;">预计还需 5 秒</span>
                  </div>
                </template>
              </CpCard>

              <CpCard title="Spinner Solid" loading type="warning" style="width: 300px; height: 200px;">
                <p>使用 spinner-solid 变体</p>
                <template #loading>
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <CpLoading variant="spinner-solid" type="warning" size="lg" />
                    <span style="color: var(--cp-color-warning); font-size: 13px;">AI 生成中...</span>
                  </div>
                </template>
              </CpCard>
            </div>
          </div>
        `,
    }),
}

/** 禁用状态 */
export const 禁用状态: Story = {
    render: () => ({
        components: {CpCard, CpButton, CpSwitch},
        setup() {
            const disabled = ref(true)
            return { disabled }
        },
        template: `
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <h4 style="color: #fff; margin-bottom: 0;">禁用状态 — 整体变灰 + 不可交互</h4>
            <CpSwitch v-model="disabled" />

            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <CpCard title="禁用 Solid" :disabled="disabled" style="width: 250px;">
                <p>内容不可交互</p>
                <template #footer>
                  <CpButton size="sm" type="primary">不可点击</CpButton>
                </template>
              </CpCard>
              <CpCard title="禁用 Outline" :disabled="disabled" variant="outline" type="primary" style="width: 250px;">
                <p>Outline 变体禁用</p>
              </CpCard>
              <CpCard title="禁用 Semi" :disabled="disabled" variant="semi" type="success" style="width: 250px;">
                <p>Semi 变体禁用</p>
              </CpCard>
              <CpCard title="正常状态" style="width: 250px;" type="warning">
                <p>此卡片始终正常</p>
                <template #footer>
                  <CpButton size="sm" type="warning">可点击</CpButton>
                </template>
              </CpCard>
            </div>

            <h4 style="color: #fff; margin: 8px 0 0;">加载 + 禁用 同时启用</h4>
            <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0;">
              loading 和 disabled 可同时生效：遮罩阻止交互，同时卡片整体变灰，适用于后台任务锁定场景。
            </p>
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <CpCard title="加载 + 禁用" :loading="disabled" :disabled="disabled" type="error" style="width: 280px; height: 180px;">
                <p>后台执行中，不可操作</p>
                <template #footer>
                  <CpButton size="sm" type="error">不可点击</CpButton>
                </template>
              </CpCard>
              <CpCard title="加载 + 禁用 (Semi)" :loading="disabled" :disabled="disabled" loading-text="锁定中..." variant="semi" type="primary" style="width: 280px; height: 180px;">
                <p>半透明变体下的双重状态</p>
              </CpCard>
            </div>

            <h4 style="color: #fff; margin: 8px 0 0;">覆层操作 + 禁用对比</h4>
            <p style="color: var(--cp-text-tertiary); font-size: 12px; margin: 0;">
              禁用时彻底禁止 hover 效果：覆层不会弹出、阴影不响应、装饰块不变亮。右侧为正常对照。
            </p>
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <CpCard
                title="禁用 + 覆层"
                :disabled="disabled"
                type="primary"
                shadow="hover"
                hover-scale
                style="width: 300px; height: 200px;"
              >
                <p>悬停无任何反馈</p>
                <p style="font-size: 11px; color: var(--cp-text-tertiary);">覆层不弹出、阴影不出现、不放大</p>
                <template #overlay>
                  <CpButton size="sm" type="primary" style="width: 100%;">不可见的操作</CpButton>
                </template>
              </CpCard>
              <CpCard
                title="正常 + 覆层"
                type="primary"
                shadow="hover"
                hover-scale
                style="width: 300px; height: 200px;"
              >
                <p>悬停查看完整效果</p>
                <p style="font-size: 11px; color: var(--cp-text-tertiary);">覆层弹出、阴影显现、卡片放大</p>
                <template #overlay>
                  <CpButton size="sm" type="primary" style="width: 100%;">操作按钮</CpButton>
                </template>
              </CpCard>
            </div>
          </div>
        `,
    }),
}
