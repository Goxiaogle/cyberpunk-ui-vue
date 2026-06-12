---
name: cyberpunk-vue
description: Cyberpunk Vue 组件库参考文档，赛博朋克风格 Vue 3 组件。在开发中如需使用 UI 组件，必须优先查阅本文档并使用已有的 Cyberpunk Vue 组件（如 CpButton、CpDialog、CpTable 等），而非自行实现或引入第三方组件。如果所需组件在本库中不存在，必须通知用户，由用户决定是否新建组件或采用其他方案。
---

# Cyberpunk Vue 组件库

> 赛博朋克风格的 Vue 3 组件库，提供丰富的 UI 组件。

## 使用流程（必读）

任何涉及 UI 组件的开发任务，都**必须**按以下流程执行：

1. **先查清单**：在下方"组件清单"中确认目标组件是否存在。
2. **再查 API**：通过 `find-component.py` 脚本查询组件的 props / 事件 / 插槽 / 用法。
3. **不存在则上报**：清单里没有的组件，立即告知用户由用户决定，不要自行实现或引入第三方组件。

> ⚠️ **禁止**直接 Read 或 Grep `skills/cyberpunk-vue/references/` 下的 md 文件。这些文件体积大、包含大量噪声，脚本会精准截取相关组件段落，是查询 API 的**唯一入口**。组件清单里的一句话描述也只用于"判断组件是否存在"，**不能**当作 API 依据。

### API 快查脚本

```shell
py -3 skills/cyberpunk-vue/scripts/find-component.py <组件名>
```

示例：

```shell
py -3 skills/cyberpunk-vue/scripts/find-component.py CpButton
py -3 skills/cyberpunk-vue/scripts/find-component.py dialog    # 支持模糊匹配，可省略 Cp 前缀
```

遇到任何具体使用问题（属性名、默认值、事件签名、插槽等），都先跑这个脚本，**不要凭记忆作答**。

### 源码快查脚本

当 API 文档不足以判断组件实现细节（例如内部 DOM 结构、CSS 变量、边缘行为）时，用此脚本通过 GitHub Contents API 查询并下载源码（仓库 [Goxiaogle/cyberpunk-ui-vue](https://github.com/Goxiaogle/cyberpunk-ui-vue)，开源 MIT）：

```shell
# 列出组件源码文件
py -3 skills/cyberpunk-vue/scripts/find-source.py CpButton

# 下载源码到本地目录（保留 src/ 子结构），随后用 Read 查阅
py -3 skills/cyberpunk-vue/scripts/find-source.py CpButton --download .tmp/cp-button

# 指定分支 / tag / commit
py -3 skills/cyberpunk-vue/scripts/find-source.py CpButton --ref v1.12.6
```

匿名调用受 GitHub 限制（60 次/小时）。如频繁触发限流，设置环境变量 `GITHUB_TOKEN` 即可放宽到 5000 次/小时。源码用于辅助理解，**不要**据此修改 `node_modules` 内的依赖代码。

## 组件清单

> 仅用于确认组件是否存在。具体用法一律走上面的快查脚本。

### 基础组件属性参考

| 组件 | 说明 |
|------|------|
| CpButton 按钮 | 赛博朋克风格按钮组件，支持多种颜色、尺寸、形态变体。 |
| CpConfigProvider 全局配置 | 全局配置提供者组件，用于设置组件库的全局默认值和主题。
通常放在应用根组件中，包裹所有子组件。 |
| CpDivider 分割线 | 赛博朋克风格分割线组件，用于分隔内容区块。 |
| CpIcon 图标 | 统一图标组件，支持多种图标来源：Vue 组件、原始 SVG、Iconify 图标名。
自动处理 SVG 尺寸归一化，保证图标在不同来源下表现一致。 |
| CpLoading 加载 | 赛博朋克风格加载器组件，环形 SVG 动画效果。
可用于按钮内置加载、页面加载、异步操作等场景。 |
| CpSpacer 间距 | 间距组件，用于快速在元素之间添加间距 |
| CpText 文字 | 赛博朋克风格文字组件，可快速切换文字层级并添加多种视觉效果。 |

### 表单组件属性参考

| 组件 | 说明 |
|------|------|
| CpForm / CpFormItem 表单 | 表单容器，提供表单布局（label 位置、行内模式）、验证管理和全局配置注入 |
| CpInput / CpInputNumber / CpTextarea 输入框 | 赛博朋克风格输入框组件，支持多种尺寸、形态变体、可清空功能。 |
| CpCheckbox / CpCheckboxGroup 复选框 | 赛博朋克风格复选框组件，支持半选状态、分组、自定义颜色。 |
| CpRadio / CpRadioGroup 单选框 | 赛博朋克风格单选框组件，支持分组、自定义颜色、多种尺寸。 |
| CpDatePicker 日期面板 | 赛博朋克风格日期面板。参考 Vuetify DatePicker 的 header / controls / month grid 分层，年份选择置于左侧，月份置于右侧，更符合中文日期选择习惯。 |
| CpDateTimePicker 日期时间选择器 | 赛博朋克风格日期时间选择器，支持日期与时间组合选择以及日期时间范围选择。 |
| CpSegmented 分段选择器 | 赛博朋克风格分段选择器，一组按钮式互斥选项，选中项带滑块高亮效果。 |
| CpSelect 下拉选择 | 赛博朋克风格下拉选择器，支持多种尺寸、形态变体、可搜索/可清空功能。 |
| CpSlider 滑块 | 赛博朋克风格滑块组件，用于在给定的数值范围内进行选择。 |
| CpSwitch 开关 | 赛博朋克风格开关组件，支持异步切换、文字位置、自定义颜色。 |
| CpTimePicker 时间选择器 | 赛博朋克风格时间选择器，支持单时间、时间范围、时分秒步长和禁用时间段。 |
| CpUpload 上传 | 赛博朋克风格文件上传组件，支持拖拽、图片预览、多种变体和形状。 |

### 展示组件属性参考

| 组件 | 说明 |
|------|------|
| CpImage / CpImagePreview 图片 | 赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。 |
| CpTimeline / CpTimelineItem 时间轴 | 赛博朋克风格时间轴容器组件，用于事件记录、进度流程、日志展示等场景。 |
| CpTable / CpTableColumn 表格 | 赛博朋克风格数据表格，支持排序、多选、条纹、边框、固定表头、树形展开、行展开。配合 CpTableColumn 声明式定义列 |
| CpNotification 通知 | 赛博朋克风格通知提醒，从屏幕角落滑入显示 |
| CpAvatar 头像 | 赛博朋克风格头像组件，支持多种尺寸和形状。 |
| CpBadge 徽章 | 赛博朋克风格徽章组件，用于在另一个元素上显示数字、小红点或状态标识。 |
| CpCard 卡片 | 赛博朋克风格卡片容器组件，用于展示内容分组。 |
| CpDialog 对话框 | 赛博朋克风格模态对话框，用于展示重要交互内容 |
| CpEmpty 空状态 | 赛博朋克风格空状态组件，用于无数据、无搜索结果等场景。
组件始终撑满父容器，水平+垂直居中展示。 |
| CpPopover 弹出层 | 赛博朋克风格弹出提示层，用于文字提示或简单选择操作 |
| CpProgress 进度条 | 赛博朋克风格进度条组件，支持线性、环形、仪表盘三种模式。 |
| CpStatusIndicator 状态指示器 | 赛博朋克风格状态指示器组件，用于独立显示状态。
可用于在线/离线状态、任务状态、系统状态等场景。 |
| CpTag 标签 | 赛博朋克风格标签组件，用于展示标签、分类或状态。 |
| CpTree 树形控件 | 赛博朋克风格树形控件，用于展示层级数据。 |

### 导航组件属性参考

| 组件 | 说明 |
|------|------|
| CpMenu / CpMenuItem / CpSubMenu / CpMenuItemGroup / CpMenuNav 菜单 | 赛博朋克风格导航菜单，支持水平/垂直模式、折叠、多色彩类型。
内置路由前缀匹配：当 `defaultActive` 为 `/model-specs/xxx` 时，
会自动匹配 `index="/model-specs"` 的菜单项并高亮其父级 SubMenu。
页面刷新或路由变化时，对应的子菜单会自动展开。 |
| CpBreadcrumb / CpBreadcrumbItem 面包屑 | 赛博朋克风格面包屑导航，展示当前页面在层级结构中的位置。 |
| CpPagination 分页 | 赛博朋克风格分页组件，用于长列表数据分页导航。 |

### 布局组件属性参考

| 组件 | 说明 |
|------|------|
| CpContainer 容器 | 赛博朋克风格页面布局容器。
当子元素包含 CpHeader 或 CpFooter 时自动切换为垂直排列。 |
| CpRow / CpCol 行容器 | Flex 行容器，配合 CpCol 实现 24 栅格布局系统。 |
| CpPatternBackground 图案背景 | 图案背景组件，用于展示各种装饰性背景图案。 |

### 未分类组件属性参考

| 组件 | 说明 |
|------|------|
| CpDescriptions 描述列表 | 赛博朋克风格描述列表，以键值对形式展示结构化数据。配合 CpDescriptionsItem 声明式定义条目 |
| CpDescriptionsItem 描述列表项 | 描述列表条目，在 CpDescriptions 内部使用 |
| CpDropdown |  |
