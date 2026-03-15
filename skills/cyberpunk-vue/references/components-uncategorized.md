# 未分类组件属性参考

## CpForm / CpFormItem


### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `model` | `Record<string, unknown` | — | 表单数据对象 |
| `rules` | `Record<string, FormRule \| FormRule[]>` | — | 验证规则 |
| `labelWidth` | `string \| number` | `'auto'` | 标签宽度 |
| `labelPosition` | `'left' \| 'right' \| 'top'` | `'right'` | 标签位置 |
| `labelSuffix` | `string` | `''` | 标签后缀（如 ':'） |
| `size` | `Size` | `'md'` | 控件尺寸 |
| `disabled` | `boolean` | `false` | 全局禁用 |
| `showMessage` | `boolean` | `true` | 全局：是否显示验证错误信息 |
| `reserveErrorSpace` | `boolean` | `false` | 全局：是否预留错误信息占位高度 |
| `inline` | `boolean` | `false` | 行内表单模式 |
| `requireAsteriskPosition` | `'left' \| 'right'` | `'left'` | 必填星号位置 |
| `label` | `string` | `''` | 标签文本 |
| `prop` | `string` | `''` | 对应 Form model 中的字段名 |
| `required` | `boolean` | `false` | 是否必填（显示星号标记） |
| `rules` | `FormRule \| FormRule[]` | — | 单项验证规则（覆盖 Form 级规则） |
| `labelWidth` | `string \| number` | — | 覆盖 Form 的 labelWidth |
| `showMessage` | `boolean` | — | 独立控制是否显示错误信息 |
| `reserveErrorSpace` | `boolean` | — | 独立控制是否预留错误信息占位高度 |
| `error` | `string` | `''` | 手动设置错误信息 |
| `size` | `Size` | — | 覆盖 Form 的 size |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-form-label-font-size` | `var(--cp-font-size-lg)` |  |

---
## CpInput / CpInputNumber / CpTextarea

赛博朋克风格输入框组件，支持多种尺寸、形态变体、可清空功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | `''` | 绑定值 (v-model) |
| `type` | `'text' \| 'password' \| 'number' \| 'email' \| 'tel' \| 'url'` | `'text'` | 输入类型 |
| `size` | `Size` | `'md'` | 输入框尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 输入框形状 |
| `variant` | `'outline' \| 'filled' \| 'ghost'` | `'outline'` | 输入框变体 |
| `placeholder` | `string` | `''` | 占位文本 |
| `disabled` | `boolean` | `false` | 是否禁用输入框 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `clearable` | `boolean` | `false` | 是否可清空 |
| `color` | `string` | `''` | 自定义聚焦颜色 |
| `maxlength` | `number` | `undefined (无限制)` | 最大输入长度限制 |
| `autofocus` | `boolean` | `false` | 是否自动获取焦点 |
| `showPassword` | `boolean` | `false` | 是否显示密码切换按钮 |
| `showWordLimit` | `boolean` | `false` | 是否显示字数统计 |
| `inactiveBorderColor` | `string` | `''` | 未聚焦状态边框颜色 |
| `placeholderColor` | `string` | `''` | Placeholder 文字颜色 |
| `textColor` | `string` | `''` | 文字颜色 |
| `clearDuration` | `number` | `150` | 清除动画持续时间 (ms) |
| `modelValue` | `number` | `0` | 绑定值 (v-model) |
| `min` | `number` | `-Infinity` | 最小值 |
| `max` | `number` | `Infinity` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `precision` | `number` | — | 精度 (小数位数) |
| `size` | `Size` | `'md'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `placeholder` | `string` | `''` | 占位文本 |
| `color` | `string` | `''` | 自定义颜色 |
| `controls` | `boolean` | `true` | 是否使用控制按钮 |
| `controlsPosition` | `'right' \| 'both'` | `'both'` | 控制按钮位置 |
| `modelValue` | `string` | `''` | 绑定值 (v-model) |
| `placeholder` | `string` | `''` | 占位文本 |
| `size` | `Size` | `'md'` | 尺寸 |
| `variant` | `'outline' \| 'filled'` | `'outline'` | 形态变体 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `maxlength` | `number` | — | 最大输入长度 |
| `showWordLimit` | `boolean` | `false` | 显示字数统计 |
| `rows` | `number` | `3` | 行数 |
| `autosize` | `boolean \| { minRows?: number; maxRows?: number }` | `false` | 自适应高度 |
| `color` | `string` | `''` | 自定义颜色 |
| `textColor` | `string` | `''` | 文字颜色 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `input` | `(value: string \| number, event: Event)` | 输入时触发 |
| `change` | `(value: string \| number)` | 值确认变化时触发 仅在失去焦点且值有变化时触发 |
| `focus` | `(event: FocusEvent)` | 获取焦点时触发 |
| `blur` | `(event: FocusEvent)` | 失去焦点时触发 |
| `clear` | `—` | 点击清空按钮时触发 触发后 modelValue 会被设为空字符串 |

### 插槽

| 名称 | 说明 |
|------|------|
| `prefix` | 输入框前缀，常用于放置图标 |
| `suffix` | 输入框后缀，常用于放置图标或按钮 |

### 暴露方法

| 方法 | 说明 |
|------|------|
| `focus()` | 使输入框获取焦点 |
| `blur()` | 使输入框失去焦点 |
| `inputRef` | 原生 input 元素引用 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-icon-size` | `1em` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpInput v-model="value" placeholder="请输入" />

<!-- 带图标 -->
<CpInput v-model="search">
  <template #prefix><CpIcon icon="mdi:magnify" /></template>
</CpInput>

<!-- 可清空 -->
<CpInput v-model="value" clearable @clear="onClear" />

<!-- 密码输入 -->
<CpInput v-model="password" type="password" />
```

---
## CpCheckbox / CpCheckboxGroup

赛博朋克风格复选框组件，支持半选状态、分组、自定义颜色。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `CheckboxValueType \| CheckboxValueType[]` | — | 绑定值 (v-model) |
| `label` | `string \| number \| boolean` | — | 选项值，在 CheckboxGroup 中使用 |
| `trueValue` | `string \| number \| boolean` | `true` | 选中时的值（仅单独使用时有效） |
| `falseValue` | `string \| number \| boolean` | `false` | 未选中时的值（仅单独使用时有效） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `indeterminate` | `boolean` | `false` | 是否半选（indeterminate）状态 |
| `size` | `Size` | `'md'` | 复选框尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 复选框类型（颜色预设） |
| `color` | `string` | `''` | 自定义选中颜色 |
| `checkColor` | `string` | `''` | 自定义勾选标记（√）颜色 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 复选框形状 |
| `border` | `boolean` | `false` | 是否使用边框样式 |
| `name` | `string` | `''` | 原生 name 属性 |
| `modelValue` | `CheckboxValueType[]` | — | 绑定值数组 (v-model) |
| `disabled` | `boolean` | `false` | 是否禁用所有子复选框 |
| `size` | `Size` | `'md'` | 子复选框尺寸 |
| `type` | `CheckboxType` | `'primary'` | 子复选框类型（颜色预设） |
| `shape` | `CheckboxShape` | `'clip'` | 子复选框形状 |
| `min` | `number` | — | 最少选中数量 |
| `max` | `number` | — | 最多选中数量 |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: CheckboxValueType \| CheckboxValueType[])` | 值变化时触发 |
| `change` | `(value: CheckboxValueType[])` | 值变化时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-checkbox-active-color` | `var(--cp-color-primary)` | CSS 变量 |
| `--cp-checkbox-active-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-checkbox-check-color` | `var(--cp-color-primary-text)` |  |
| `--cp-checkbox-size` | `#{$size}` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpCheckbox v-model="checked">选项</CpCheckbox>

<!-- 半选状态 -->
<CpCheckbox v-model="checked" indeterminate>全选</CpCheckbox>

<!-- 分组使用 -->
<CpCheckboxGroup v-model="selected">
  <CpCheckbox label="A">选项 A</CpCheckbox>
  <CpCheckbox label="B">选项 B</CpCheckbox>
</CpCheckboxGroup>
```

---
## CpRadio / CpRadioGroup

赛博朋克风格单选框组件，支持分组、自定义颜色、多种尺寸。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number \| boolean` | — | 绑定值 (v-model) |
| `value` | `string \| number \| boolean` | — | 此单选框对应的值 |
| `label` | `string \| number` | `''` | 显示标签（也作为默认 slot fallback） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `size` | `Size` | `'md'` | 单选框尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 单选框类型（颜色预设） |
| `color` | `string` | `''` | 自定义选中颜色 |
| `glow` | `boolean` | `true` | 是否启用霓虹辉光效果 |
| `dotColor` | `string` | `''` | 自定义中间装饰块（菱形点）颜色 |
| `border` | `boolean` | `false` | 是否使用边框样式 |
| `name` | `string` | `''` | 原生 name 属性 |
| `modelValue` | `RadioValueType` | — | 绑定值 (v-model) |
| `disabled` | `boolean` | `false` | 是否禁用所有子单选框 |
| `size` | `Size` | `'md'` | 子单选框尺寸 |
| `type` | `RadioType` | `'primary'` | 子单选框类型（颜色预设） |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: RadioValueType)` | 值变化时触发 |
| `change` | `(value: RadioValueType)` | 值变化时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-radio-active-color` | `var(--cp-color-primary)` | CSS 变量默认值 |
| `--cp-radio-active-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-radio-dot-color` | `var(--cp-color-primary-text)` |  |
| `--cp-radio-size` | `#{map.get($size-config, size)}` |  |
| `--cp-radio-dot-size` | `#{map.get($size-config, dot-size)}` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpRadio v-model="picked" value="A">选项 A</CpRadio>

<!-- 分组使用 -->
<CpRadioGroup v-model="picked">
  <CpRadio value="A">选项 A</CpRadio>
  <CpRadio value="B">选项 B</CpRadio>
</CpRadioGroup>
```

---
## CpImage / CpImagePreview

赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 图片源地址 |
| `alt` | `string` | `''` | 图片描述/替代文本 |
| `fit` | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` | 图片适应模式 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 图片形状模式 |
| `lazy` | `boolean` | `false` | 是否懒加载 |
| `preview` | `boolean` | `false` | 是否开启点击预览 |
| `previewSrc` | `string` | `''` | 预览大图地址 |
| `previewSrcList` | `string[]` | `[]` | 多图预览列表 |
| `initialIndex` | `number` | `0` | 初始预览索引，在 previewSrcList 模式下有效 |
| `download` | `boolean` | `false` | 是否允许在预览时下载图片 |
| `fallbackSrc` | `string` | `''` | 加载失败时的回退图片地址 |
| `width` | `string \| number` | `''` | 图片宽度 |
| `height` | `string \| number` | `''` | 图片高度 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 颜色类型（影响装饰块颜色） |
| `color` | `string` | `''` | 自定义装饰块颜色 |
| `showDecor` | `boolean` | `true` | 是否显示装饰块（仅 clip 形状生效） |
| `decorPosition` | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | `'bottom-left'` | 装饰块位置（仅 clip 形状生效） |
| `hoverable` | `boolean` | `false` | 是否开启 hover 动画效果 |
| `hoverMode` | `'scale' \| 'zoom'` | `'scale'` | Hover 动画模式 |
| `hoverDuration` | `DurationValue` | `300` | Hover 动画持续时间 |
| `srcProcessor` | `string \| ((src: string, params?: unknown) =` | — | URL 预处理器 |
| `processorParams` | `string \| Record<string, unknown` | — | 处理器参数 |
| `draggable` | `boolean` | `false` | 是否允许拖拽图片 |
| `modelValue` | `boolean` | `false` | 是否显示预览 (v-model) |
| `urlList` | `string[]` | `[]` | 预览图片列表 |
| `initialIndex` | `number` | `0` | 初始显示的图片索引 |
| `zIndex` | `number` | `2000` | z-index 层级 |
| `infinite` | `boolean` | `true` | 是否支持循环切换（到最后一张后跳回第一张） |
| `teleportTo` | `string \| HTMLElement` | `'body'` | Teleport 目标 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 主题颜色类型 |
| `color` | `string` | `''` | 自定义外发光及部分元素的颜色 |
| `download` | `boolean` | `false` | 是否允许下载图片，开启后工具栏会显示下载按钮 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `load` | `(event: Event)` | 图片加载成功时触发 |
| `error` | `(event: Event)` | 图片加载失败时触发 |
| `close` | `—` | 关闭时触发 |
| `switch` | `(index: number)` | 切换图片时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-image-hover-duration` | `#{$image-transition-duration}` | 动画时间变量 |

### 示例

```vue
<!-- 基础用法 -->
<CpImage src="/image.jpg" alt="示例图片" />

<!-- 懒加载 -->
<CpImage src="/image.jpg" lazy />

<!-- 带回退图片 -->
<CpImage src="/image.jpg" fallback-src="/fallback.jpg" />

<!-- 圆形头像 -->
<CpImage src="/avatar.jpg" shape="circle" :width="64" :height="64" />
```

---
## CpTimeline / CpTimelineItem

赛博朋克风格时间轴容器组件，用于事件记录、进度流程、日志展示等场景。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mode` | `'left' \| 'right' \| 'alternate'` | `'left'` | 内容排列模式 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 全局颜色预设（子项可覆盖） |
| `reverse` | `boolean` | `false` | 是否倒序排列 |
| `color` | `string` | `''` | 自定义全局颜色 |
| `lineStyle` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | 全局连线样式 |
| `lineColor` | `string` | `''` | 全局连线颜色（默认跟随 type/color） |
| `timestamp` | `string` | `''` | 时间戳文本 |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | 时间戳位置 |
| `type` | `TimelineItemType \| ''` | `''` | 颜色类型（空字符串时继承父级） |
| `color` | `string` | `''` | 自定义节点颜色 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 节点尺寸 |
| `hollow` | `boolean` | `false` | 空心节点（仅显示边框） |
| `hideTimestamp` | `boolean` | `false` | 隐藏时间戳 |
| `icon` | `IconValue` | — | 自定义节点图标 |
| `active` | `boolean` | `false` | 激活态（高亮发光） |
| `animation` | `'none' \| 'pulse' \| 'glow' \| 'blink'` | `'none'` | 节点动画效果 |
| `duration` | `DurationValue` | `1500` | 动画持续时间 |
| `intensity` | `number` | `1` | 动画激烈程度 |
| `lineStyle` | `TimelineItemLineStyle \| ''` | `''` | 该项连线样式（覆盖全局） |
| `lineColor` | `string` | `''` | 该项连线颜色（覆盖全局） |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | CpTimelineItem 列表 |
| `default` | 主内容区域 |
| `dot` | 自定义节点（完全替换默认圆点） |
| `timestamp` | 自定义时间戳内容 |
| `extra` | 内容下方附加区域 |
| `connector` | 自定义连线 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-timeline-color` | `var(--cp-text-secondary)` | CSS 变量默认值 |
| `--cp-timeline-line-color` | `var(--cp-border)` |  |
| `--cp-timeline-line-style` | `solid` |  |
| `--cp-timeline-line-width` | `2px` |  |
| `--cp-timeline-axis-size` | `#{map.get($timeline-icon-sizes, lg)}` | 轴线定位基准尺寸（容器级常量，不随子项变化） |
| `--cp-timeline-dot-size` | `#{$size}` |  |
| `--cp-timeline-gap` | `24px` |  |
| `--cp-timeline-content-gap` | `16px` |  |
| `--cp-timeline-animation-duration` | `1.5s` |  |
| `--cp-timeline-animation-intensity` | `1` |  |
| `--cp-timeline-item-color` | `var(--cp-text-secondary)` |  |

### 示例

```vue
<CpTimeline>
  <CpTimelineItem timestamp="2024-01-01">事件一</CpTimelineItem>
  <CpTimelineItem timestamp="2024-02-01">事件二</CpTimelineItem>
</CpTimeline>
```

---
## CpTable / CpTableColumn


### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `data` | `any[]` | — | 表格数据 |
| `size` | `Size` | `'md'` | 尺寸 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型 |
| `stripe` | `boolean` | `false` | 是否显示条纹行 |
| `border` | `boolean` | `false` | 是否显示边框 |
| `highlightCurrentRow` | `boolean` | `false` | 是否高亮当前行 |
| `height` | `string \| number` | — | 固定高度 (启用固定表头) |
| `maxHeight` | `string \| number` | — | 最大高度 |
| `emptyText` | `string` | `'暂无数据'` | 空数据文案 |
| `rowKey` | `string \| ((row: any) =` | `'id'` | 行唯一标识字段名 |
| `defaultSort` | `SortState` | — | 默认排序 |
| `color` | `string` | `''` | 自定义主题色（CSS 颜色值） |
| `showHeader` | `boolean` | `true` | 是否显示表头 |
| `loading` | `boolean` | `false` | 是否处于加载状态 |
| `loadingText` | `string` | `'加载中...'` | 加载中显示的文字 |
| `disabled` | `boolean` | `false` | 是否处于禁用状态 |
| `treeProps` | `TableTreeProps` | — | 树形数据配置 |
| `defaultExpandAll` | `boolean` | `false` | 是否默认展开所有树形行 |
| `indent` | `number` | `16` | 每级层级缩进像素 |
| `type` | `'default' \| 'selection' \| 'index'` | `'default'` | 列特殊类型 |
| `prop` | `string` | `''` | 数据字段名 |
| `label` | `string` | `''` | 列标题 |
| `width` | `string \| number` | — | 列宽 (px 或百分比) |
| `minWidth` | `string \| number` | — | 最小列宽 |
| `sortable` | `boolean` | `false` | 是否可排序 |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | 内容对齐方式 |
| `headerAlign` | `'left' \| 'center' \| 'right' \| ''` | `''` | 表头对齐方式 (默认跟随 align) |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `sort-change` | `(sortState: SortState)` | 排序变化 |
| `row-click` | `(row: any, index: number, event: MouseEvent)` | 行点击 |
| `selection-change` | `(selection: any[])` | 选中行变化 |
| `select-all` | `(selection: any[])` | 全选 |
| `select` | `(selection: any[], row: any)` | 单行选中 |
| `current-change` | `(currentRow: any \| null, oldRow: any \| null)` | 当前行变化 |
| `expand-change` | `(row: any, expanded: boolean)` | 树形行展开/折叠 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-table-color` | `#{$type-color}` |  |
| `--cp-table-border` | `var(--cp-border)` |  |
| `--cp-table-header-bg` | `linear-gradient(` |  |
| `--cp-table-header-border-color` | `color-mix(in srgb, #{$type-color} 40%, transparent)` |  |
| `--cp-table-row-bg` | `transparent` |  |
| `--cp-table-row-stripe-bg` | `var(--cp-surface-variant)` |  |
| `--cp-table-row-hover-bg` | `color-mix(in srgb, #{$type-color} 6%, transparent)` |  |
| `--cp-table-row-current-bg` | `color-mix(in srgb, #{$type-color} 10%, transparent)` |  |
| `--cp-table-row-selected-bg` | `color-mix(in srgb, #{$type-color} 8%, transparent)` |  |
| `--cp-table-cell-padding` | `#{map.get($size-config, cell-padding)}` |  |
| `--cp-table-font-size` | `#{map.get($size-config, font-size)}` |  |
| `--cp-table-header-height` | `#{map.get($size-config, header-height)}` |  |

---
## CpMenu / CpMenuItem / CpSubMenu / CpMenuItemGroup / CpMenuNav

赛博朋克风格导航菜单，支持水平/垂直模式、折叠、多色彩类型。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mode` | `'horizontal' \| 'vertical'` | `'vertical'` | 菜单布局方向 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 菜单形状 |
| `variant` | `'solid' \| 'outline' \| 'note'` | `'solid'` | 菜单变体 |
| `defaultActive` | `string` | `''` | 默认激活的菜单项 index |
| `defaultOpeneds` | `string[]` | `[]` | 默认展开的子菜单 index 数组 |
| `uniqueOpened` | `boolean` | `false` | 是否只保持一个子菜单展开（手风琴模式） |
| `collapse` | `boolean` | `false` | 是否折叠菜单（仅 vertical 模式有效） |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设类型 |
| `color` | `string` | `''` | 自定义高亮颜色（覆盖 type 预设） |
| `router` | `boolean` | `false` | 是否启用 vue-router 模式 |
| `index` | `string` | — | 菜单项唯一标识（可选，不传时自动生成） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `icon` | `IconValue` | — | 图标（CpIcon 兼容值：Vue 组件、Iconify 名称、SVG 字符串等） |
| `route` | `string \| Record<string, unknown` | — | vue-router 路由对象或路径 |
| `index` | `string` | — | 子菜单唯一标识 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `icon` | `IconValue` | — | 图标（CpIcon 兼容值：Vue 组件、Iconify 名称、SVG 字符串等） |
| `title` | `string` | — | 子菜单标题文本 |
| `title` | `string` | `''` | 分组标题 |
| `data` | `MenuNavItem[]` | — | 菜单数据 |
| `mode` | `MenuMode` | `'vertical'` | 菜单模式 |
| `defaultActive` | `string` | `''` | 默认激活项 index |
| `defaultOpeneds` | `string[]` | `[]` | 默认展开的 sub-menu index 列表 |
| `uniqueOpened` | `boolean` | `false` | 是否只展开一个 sub-menu |
| `collapse` | `boolean` | `false` | 是否折叠（仅 vertical 有效） |
| `type` | `MenuType` | `'default'` | 颜色类型 |
| `shape` | `MenuShape` | `'clip'` | 菜单形状 |
| `variant` | `MenuVariant` | `'solid'` | 菜单变体 |
| `color` | `string` | `''` | 自定义高亮颜色 |
| `router` | `boolean` | `false` | 是否启用 vue-router 模式 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `select` | `(index: string, indexPath: string[])` | 菜单项被选中 |
| `open` | `(index: string, indexPath: string[])` | 子菜单展开 |
| `close` | `(index: string, indexPath: string[])` | 子菜单收起 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-menu-bg` | `transparent` |  |
| `--cp-menu-text` | `var(--cp-text-secondary)` |  |
| `--cp-menu-hover-text` | `var(--cp-text-primary)` |  |
| `--cp-menu-active-text` | `#{$color}` |  |
| `--cp-menu-icon` | `var(--cp-menu-text)` |  |
| `--cp-menu-active-icon` | `var(--cp-menu-active-text)` |  |
| `--cp-menu-active-bg` | `var(--cp-menu-active-color-light)` |  |
| `--cp-menu-font-family` | `var(--cp-font-family-ui)` |  |
| `--cp-menu-font-weight` | `var(--cp-font-weight-normal, 450)` |  |
| `--cp-menu-active-font-weight` | `var(--cp-font-weight-semibold, 620)` |  |
| `--cp-menu-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-menu-active-color` | `#{$color}` |  |
| `--cp-menu-active-color-light` | `var(--cp-color-#{$type}-light)` |  |
| `--cp-menu-hover-bg` | `var(--cp-state-hover)` |  |
| `--cp-menu-border` | `var(--cp-border)` |  |
| `--cp-menu-item-height` | `46px` |  |
| `--cp-menu-item-font-weight` | `var(--cp-menu-active-font-weight)` |  |

### 示例

```vue
<CpMenu default-active="1">
  <CpMenuItem index="1">菜单项一</CpMenuItem>
  <CpSubMenu index="2">
    <template #title>子菜单</template>
    <CpMenuItem index="2-1">子菜单项</CpMenuItem>
  </CpSubMenu>
</CpMenu>
```

---
## CpBreadcrumb / CpBreadcrumbItem

赛博朋克风格面包屑导航，展示当前页面在层级结构中的位置。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `separator` | `string` | `'/'` | 分隔符文本 |
| `separatorIcon` | `Component` | — | 分隔符图标（优先级高于 separator 文本） |
| `variant` | `'default' \| 'plain' \| 'outline' \| 'background'` | `'default'` | 变体样式 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设类型 |
| `color` | `string` | `''` | 自定义主题色（覆盖 type 预设） |
| `to` | `string \| Record<string, unknown` | `''` | 路由跳转目标（vue-router 的 `to`） |
| `replace` | `boolean` | `false` | 使用 router.replace 替代 router.push |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-breadcrumb-color` | `var(--cp-color-info)` |  |
| `--cp-breadcrumb-text` | `var(--cp-text-secondary)` |  |
| `--cp-breadcrumb-separator-color` | `var(--cp-text-muted)` |  |
| `--cp-breadcrumb-separator-gap` | `8px` |  |
| `--cp-breadcrumb-hover-color` | `var(--cp-breadcrumb-color)` |  |
| `--cp-breadcrumb-active-color` | `var(--cp-text-primary)` |  |
| `--cp-breadcrumb-font-weight` | `var(--cp-font-weight-normal)` |  |
| `--cp-breadcrumb-active-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-breadcrumb-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-breadcrumb-inner-font-weight` | `var(--cp-breadcrumb-font-weight)` |  |

### 示例

```vue
<CpBreadcrumb>
  <CpBreadcrumbItem>首页</CpBreadcrumbItem>
  <CpBreadcrumbItem>系统管理</CpBreadcrumbItem>
  <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
</CpBreadcrumb>
```

---
## CpContainer

赛博朋克风格页面布局容器。
当子元素包含 CpHeader 或 CpFooter 时自动切换为垂直排列。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `'horizontal' \| 'vertical'` | `''` | 排列方向，可选值：horizontal / vertical |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-layout-border-color` | `var(--cp-border, #282830)` | 可控的分割线颜色和发光线颜色 |
| `--cp-layout-glow-color` | `var(--cp-color-primary, #00f0ff)` |  |
| `--cp-header-height` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-divider-margin` | `0` |  |
| `--cp-footer-height` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-main-under-header-offset` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-main-under-footer-offset` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-main-scrollbar-safe-top` | `var(--cp-main-under-header-offset)` |  |
| `--cp-main-scrollbar-safe-bottom` | `var(--cp-main-under-footer-offset)` |  |
| `--cp-main-body-header-placeholder-height` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-main-body-footer-placeholder-height` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-aside-width` | `300px` |  |
| `--cp-aside-under-header-offset` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-aside-under-footer-offset` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-aside-scrollbar-safe-top` | `var(--cp-aside-under-header-offset)` |  |
| `--cp-aside-scrollbar-safe-bottom` | `var(--cp-aside-under-footer-offset)` |  |
| `--cp-aside-sidebar-header-placeholder-height` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-aside-sidebar-footer-placeholder-height` | `var(--cp-layout-footer-height, 60px)` |  |

### 示例

```vue
<CpContainer>
  <CpHeader>头部</CpHeader>
  <CpMain>主内容</CpMain>
  <CpFooter>底部</CpFooter>
</CpContainer>
```

---
## CpRow / CpCol

Flex 行容器，配合 CpCol 实现 24 栅格布局系统。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `gutter` | `number` | `0` | 栅格间隔 (px) |
| `justify` | `\| 'start'` | `'start'` | 水平排列方式 |
| `align` | `'top' \| 'middle' \| 'bottom'` | `'top'` | 垂直对齐方式 |
| `tag` | `string` | `'div'` | 自定义元素标签 |
| `wrap` | `boolean` | `true` | 是否自动换行 |
| `span` | `number` | `24` | 栅格占据的列数 (0-24) |
| `offset` | `number` | `0` | 栅格左侧偏移列数 |
| `push` | `number` | `0` | 栅格向右移动列数 |
| `pull` | `number` | `0` | 栅格向左移动列数 |
| `tag` | `string` | `'div'` | 自定义元素标签 |

### 示例

```vue
<CpRow :gutter="20">
  <CpCol :span="12">左半</CpCol>
  <CpCol :span="12">右半</CpCol>
</CpRow>
```

---
## CpNotification

赛博朋克风格通知提醒，从屏幕角落滑入显示

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 是否显示通知 (v-model) |
| `title` | `string` | `''` | 通知标题 |
| `message` | `string \| VNode \| (() =` | `''` | 通知消息文本，支持字符串、VNode 或返回 VNode 的函数 |
| `dangerouslyUseHTMLString` | `boolean` | `false` | 是否将 message 作为 HTML 渲染 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 主题颜色类型 |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | 弹出位置 |
| `duration` | `number` | `4500` | 自动关闭延迟 (ms)，设为 0 则不自动关闭 |
| `showClose` | `boolean` | `true` | 是否显示关闭按钮 |
| `offset` | `number` | `16` | 距离窗口边缘偏移量 (px) |
| `variant` | `'solid' \| 'semi' \| 'outline'` | `'solid'` | 通知变体 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 通知形状 |
| `color` | `string` | `''` | 自定义主色调，优先于 type |
| `bgColor` | `string` | `''` | 自定义背景颜色 |
| `borderColor` | `string` | `''` | 自定义边框颜色 |
| `titleColor` | `string` | `''` | 自定义标题文字颜色 |
| `textColor` | `string` | `''` | 自定义消息文字颜色 |
| `zIndex` | `number` | `9999` | z-index |
| `width` | `string \| number` | `'330px'` | 通知宽度 |
| `animationDuration` | `number` | `300` | 动画时长 (ms) |
| `selectable` | `boolean` | `false` | 是否允许选中消息文本 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `close` | `—` | 关闭时触发 |
| `destroy` | `—` | 关闭动画结束后触发（DOM 即将销毁） |
| `click` | `—` | 点击通知区域时触发（不包括关闭按钮和操作区） |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 自定义消息内容（覆盖 message） |
| `title` | 自定义标题内容 |
| `icon` | 自定义图标 |
| `actions` | 操作区按钮 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-notification-color` | `var(--cp-color-#{$type})` |  |
| `--cp-notification-color-light` | `var(--cp-color-#{$type}-light)` |  |
| `--cp-notification-bg` | `color-mix(in srgb, var(--cp-bg-elevated) 80%, var(--cp-notification-color))` |  |
| `--cp-notification-clip-path` | `polygon(` |  |

### 示例

```vue
<CpNotification
  v-model="visible"
  title="系统通知"
  message="操作成功完成"
  type="success"
/>
```

---
## CpAvatar

赛博朋克风格头像组件，支持多种尺寸和形状。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 头像图片地址 |
| `alt` | `string` | `''` | 图片描述/替代文本 |
| `size` | `Size \| 'xs' \| 'xl'` | `'md'` | 头像尺寸 |
| `shape` | `'circle' \| 'square' \| 'clip'` | `'circle'` | 头像形状 |
| `icon` | `IconValue` | — | 默认图标（无图片时显示） |
| `fallbackSrc` | `string` | `''` | 加载失败时的回退图片地址 |
| `fit` | `'cover' \| 'contain' \| 'fill'` | `'cover'` | 图片适应模式 |
| `srcProcessor` | `string \| ((src: string, params?: unknown) =` | — | URL 预处理器 |
| `processorParams` | `string \| Record<string, unknown` | — | 处理器参数 |
| `draggable` | `boolean` | `false` | 是否允许拖拽图片 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `load` | `(event: Event)` | 图片加载成功时触发 |
| `error` | `(event: Event)` | 图片加载失败时触发 |

### 示例

```vue
<!-- 基础用法 -->
<CpAvatar src="/avatar.jpg" />

<!-- 预设尺寸 -->
<CpAvatar src="/avatar.jpg" size="lg" />

<!-- 自定义尺寸 -->
<CpAvatar src="/avatar.jpg" :size="80" />

<!-- 形状 -->
<CpAvatar src="/avatar.jpg" shape="square" />
```

---
## CpBadge

赛博朋克风格徽章组件，用于在另一个元素上显示数字、小红点或状态标识。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string \| number` | `''` | 徽章显示内容（数字或字符串） |
| `max` | `number` | `99` | 最大显示数值，超出显示 `{max}+` |
| `min` | `number` | `undefined` | 最小显示数值，低于时显示 `{min}-` |
| `dot` | `boolean` | `false` | 小红点模式 |
| `hidden` | `boolean` | `false` | 是否隐藏徽章 |
| `showZero` | `boolean` | `false` | 值为 0 时是否显示 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'error'` | 徽章颜色类型 |
| `color` | `string` | `''` | 自定义背景颜色 |
| `textColor` | `string` | `''` | 自定义文本颜色 |
| `variant` | `'solid' \| 'outline' \| 'glow'` | `'solid'` | 变体样式 |
| `offset` | `[number, number]` | `undefined` | 自定义偏移量 [x, y] |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | 徽章尺寸 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-badge-color` | `var(--cp-color-error)` | CSS 变量默认值 |
| `--cp-badge-text-color` | `#fff` |  |
| `--cp-badge-offset-x` | `0px` |  |
| `--cp-badge-offset-y` | `0px` |  |

### 示例

```vue
<CpBadge :value="5">
  <CpButton>消息</CpButton>
</CpBadge>
```

---
## CpCard

赛博朋克风格卡片容器组件，用于展示内容分组。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `title` | `string` | `''` | 卡片标题 |
| `shadow` | `'always' \| 'hover' \| 'never'` | `'always'` | 阴影显示时机 |
| `variant` | `'solid' \| 'outline' \| 'semi' \| 'ghost' \| 'neon' \| 'cyber'` | `'solid'` | 卡片变体/形态 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 卡片形状 |
| `bodyPadding` | `string` | `undefined (使用默认 padding)` | 自定义内容区内边距 |
| `headerBorder` | `boolean` | `true` | 是否显示头部分隔线 |
| `footerBorder` | `boolean` | `true` | 是否显示底部分隔线 |
| `overlayAnimation` | `'slide-up' \| 'slide-down' \| 'slide-left' \| 'slide-right' \| 'fade' \| 'scale'` | `'slide-up'` | 覆层出场动画类型 |
| `overlayPosition` | `'bottom' \| 'top' \| 'center'` | `'bottom'` | 覆层位置 |
| `overlayDuration` | `DurationValue` | `300` | 覆层动画持续时间 |
| `overlayEffect` | `'none' \| 'blur' \| 'color' \| 'blur-color'` | `'blur-color'` | 覆层效果类型 |
| `overlayColor` | `string` | `'rgba(26, 26, 36, 0.8)'` | 覆层颜色 |
| `overlayBlur` | `number \| string` | `10` | 覆层毛玻璃模糊程度 |
| `actionEffect` | `'none' \| 'blur' \| 'color' \| 'blur-color'` | `undefined` | 操作区域效果类型 |
| `actionColor` | `string` | `undefined` | 操作区域颜色 |
| `actionBlur` | `number \| string` | `undefined` | 操作区域模糊程度 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 卡片的主题颜色类型 |
| `color` | `string` | `''` | 自定义颜色，优先于 type |
| `bgColor` | `string` | `''` | 自定义背景颜色 |
| `dimmed` | `boolean` | `false` | 是否开启平常减淡显示 |
| `dimmedDuration` | `DurationValue` | `300` | 减淡模式动画持续时间 |
| `triggerImageHover` | `boolean` | `false` | Card hover 时是否触发内部 CpImage 的 hover 效果 |
| `hoverScale` | `boolean` | `false` | Card hover 时放大效果 |
| `collapse` | `boolean` | `false` | 是否折叠卡片（仅显示头部） |
| `loading` | `boolean` | `false` | 是否处于加载状态 |
| `loadingText` | `string` | `'加载中...'` | 加载中显示的文字 |
| `disabled` | `boolean` | `false` | 是否处于禁用状态 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 卡片主体内容 |
| `header` | 自定义头部（覆盖 title） |
| `title` | 仅标题区域 |
| `extra` | 头部右侧额外操作区 |
| `footer` | 卡片底部区域 |
| `cover` | 卡片封面区域（位于头部前） |
| `overlay` | 卡片悬停操作层 |
| `loading` | 自定义加载中内容 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-card-color` | `var(--cp-border)` |  |
| `--cp-card-color-light` | `rgba(255, 255, 255, 0.1)` |  |
| `--cp-card-bg` | `color-mix(in srgb, var(--cp-border) 50%, transparent)` |  |
| `--cp-card-shadow-color` | `rgba(0, 0, 0, 0.4)` |  |
| `--cp-card-clip-path` | `polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)` |  |
| `--cp-card-bg-hover` | `color-mix(in srgb, var(--cp-bg-elevated) 75%, var(--cp-card-color))` |  |
| `--cp-card-border` | `var(--cp-border)` |  |
| `--cp-card-divider-color` | `var(--cp-border)` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpCard title="系统信息">
  <p>卡片内容</p>
</CpCard>

<!-- 带额外操作 -->
<CpCard title="数据面板">
  <template #extra>
    <CpButton size="sm">更多</CpButton>
  </template>
  <p>面板内容</p>
</CpCard>

<!-- 自定义头部和底部 -->
<CpCard>
  <template #header>
    <h3>自定义标题</h3>
  </template>
  <p>内容区域</p>
  <template #footer>
    <CpButton>确认</CpButton>
  </template>
</CpCard>
```

---
## CpConfigProvider

全局配置提供者组件，用于设置组件库的全局默认值和主题。
通常放在应用根组件中，包裹所有子组件。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `defaults` | `Record<string, Record<string, any>>` | `{}` | 组件默认值配置 |
| `theme` | `ThemeType` | `'dark'` | 主题设置 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 被配置包裹的子组件 |

### 示例

```vue
<template>
  <CpConfigProvider
    :defaults="{
      button: { size: 'lg', variant: 'neon' },
      input: { variant: 'filled' }
    }"
    theme="dark"
  >
    <App />
  </CpConfigProvider>
</template>
```

---
## CpDialog

赛博朋克风格模态对话框，用于展示重要交互内容

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 是否显示对话框 (v-model) |
| `title` | `string` | `''` | 对话框标题 |
| `width` | `string \| number` | `'520px'` | 对话框宽度 |
| `top` | `string` | `'15vh'` | 距离顶部的距离 |
| `fullscreen` | `boolean` | `false` | 是否全屏显示 |
| `modal` | `boolean` | `true` | 是否显示遮罩 |
| `appendToBody` | `boolean` | `true` | 是否将对话框挂载到 body |
| `closeOnClickModal` | `boolean` | `true` | 点击遮罩是否关闭 |
| `closeOnEscape` | `boolean` | `true` | 按下 ESC 是否关闭 |
| `showClose` | `boolean` | `true` | 是否显示关闭按钮 |
| `beforeClose` | `(done: DialogBeforeCloseDoneFn) => void` | — | 关闭前回调，调用 done() 才真正关闭 |
| `draggable` | `boolean` | `false` | 是否可拖拽移动 |
| `overflow` | `boolean` | `false` | 拖拽时是否允许超出视口边界 |
| `lockScroll` | `boolean` | `true` | 打开时是否锁定页面滚动 |
| `variant` | `'solid' \| 'semi' \| 'outline'` | `'solid'` | 对话框变体 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 对话框形状 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 主题颜色类型 |
| `destroyOnClose` | `boolean` | `false` | 关闭时销毁内容 |
| `center` | `boolean` | `false` | 居中布局（标题和 footer 对齐方式居中） |
| `alignCenter` | `boolean` | `true` | 垂直居中布局（容器在屏幕中垂直居中） |
| `headerBorder` | `boolean` | `true` | 是否显示头部分隔线 |
| `footerBorder` | `boolean` | `true` | 是否显示底部分隔线 |
| `color` | `string` | `''` | 自定义主色调，优先于 type |
| `bgColor` | `string` | `''` | 自定义背景颜色 |
| `borderColor` | `string` | `''` | 自定义边框颜色 |
| `titleColor` | `string` | `''` | 自定义标题文字颜色 |
| `textColor` | `string` | `''` | 自定义内容区文字颜色 |
| `overlayColor` | `string` | `''` | 自定义遮罩颜色 |
| `closeColor` | `string` | `''` | 自定义关闭按钮颜色 |
| `headerDividerColor` | `string` | `''` | 自定义头部分隔线颜色 |
| `footerDividerColor` | `string` | `''` | 自定义底部分隔线颜色 |
| `dialogClass` | `\| string` | — | 对话框根容器自定义 class |
| `headerClass` | `\| string` | — | 头部区域自定义 class |
| `bodyClass` | `\| string` | — | 主体内容区域自定义 class |
| `footerClass` | `\| string` | — | 底部区域自定义 class |
| `overlayClass` | `\| string` | — | 遮罩层自定义 class |
| `modalClass` | `string` | `''` | 遮罩层追加 class（与 overlayClass 合并使用） |
| `dialogStyle` | `string \| CSSProperties` | — | 对话框面板自定义 style |
| `headerStyle` | `string \| CSSProperties` | — | 头部区域自定义 style |
| `bodyStyle` | `string \| CSSProperties` | — | 主体内容区域自定义 style |
| `footerStyle` | `string \| CSSProperties` | — | 底部区域自定义 style |
| `overlayStyle` | `string \| CSSProperties` | — | 遮罩层自定义 style |
| `zIndex` | `number` | `2000` | z-index |
| `showConfirmButton` | `boolean` | `true` | 是否显示确认按钮（当无 #footer 插槽时生效） |
| `showCancelButton` | `boolean` | `true` | 是否显示取消按钮（当无 #footer 插槽时生效） |
| `confirmText` | `string` | `'确认'` | 确认按钮文本 |
| `cancelText` | `string` | `'取消'` | 取消按钮文本 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `open` | `—` | 对话框打开时触发（动画开始前） |
| `opened` | `—` | 对话框打开动画结束后触发 |
| `close` | `—` | 对话框关闭时触发（动画开始前） |
| `closed` | `—` | 对话框关闭动画结束后触发 |
| `confirm` | `—` | 点击确认按钮时触发 |
| `cancel` | `—` | 点击取消按钮时触发 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 对话框主体内容 |
| `cover` | 封面区域（位于头部上方，与 Card 的 cover 插槽一致） |
| `header` | 自定义整个头部区域（覆盖 title + 关闭按钮） |
| `title` | 仅标题区域 |
| `footer` | 底部操作区域，作用域 props: `{ close: () => void, confirm: () => void }` |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-dialog-color` | `var(--cp-color-#{$type})` |  |
| `--cp-dialog-color-light` | `var(--cp-color-#{$type}-light)` |  |
| `--cp-dialog-bg` | `color-mix(in srgb, var(--cp-bg-elevated) 80%, var(--cp-dialog-color))` |  |
| `--cp-dialog-clip-path` | `polygon(` |  |

### 示例

```vue
<CpDialog v-model="visible" title="系统通知">
  <p>对话框内容</p>
  <template #footer>
    <CpButton @click="visible = false">取消</CpButton>
    <CpButton type="primary" @click="visible = false">确认</CpButton>
  </template>
</CpDialog>
```

---
## CpDivider

赛博朋克风格分割线组件，用于分隔内容区块。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 分割线方向 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 分割线类型（颜色预设） |
| `color` | `string` | `''` | 自定义颜色 |
| `contentPosition` | `'left' \| 'center' \| 'right'` | `'center'` | 文字内容位置（仅水平方向有效） |
| `variant` | `'solid' \| 'gradient' \| 'glow'` | `'solid'` | 分割线变体 |
| `borderStyle` | `'solid' \| 'dashed' \| 'dotted' \| 'double'` | `'solid'` | 线条样式 |
| `dashed` | `boolean` | `false` | 虚线（快捷方式，等同于 borderStyle="dashed"） |
| `thickness` | `number \| string` | `1` | 线条粗细 (px) |
| `glow` | `boolean` | `false` | 发光效果（快捷方式，等同于 variant="glow"） |
| `margin` | `number \| string` | `''` | 上下间距（水平方向）或左右间距（垂直方向） |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-divider-color` | `var(--cp-color-info)` |  |
| `--cp-divider-thickness` | `3px` |  |
| `--cp-divider-margin` | `16px` |  |
| `--cp-divider-text-padding` | `16px` |  |
| `--cp-divider-text-color` | `var(--cp-color-info)` |  |
| `--cp-divider-text-bg` | `var(--cp-bg-base)` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpDivider />

<!-- 带文字 -->
<CpDivider>SECTION</CpDivider>

<!-- 垂直方向 -->
<CpDivider direction="vertical" />

<!-- 发光效果 -->
<CpDivider type="primary" variant="glow" />
```

---
## CpDropdown

赛博朋克风格下拉选择器，支持多种尺寸、形态变体、可搜索/可清空功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | `''` | 绑定值 (v-model) |
| `options` | `DropdownOption[]` | `[]` | 选项列表 |
| `placeholder` | `string` | `'请选择'` | 占位文本 |
| `filterPlaceholder` | `string` | `'搜索...'` | 搜索框占位文本 (仅在面板开启搜索时有效) |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `clearable` | `boolean` | `false` | 是否可清空 |
| `filterable` | `boolean` | `false` | 是否可搜索过滤 |
| `size` | `Size` | `'md'` | 下拉框尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 下拉框形状 |
| `variant` | `'outline' \| 'filled' \| 'ghost'` | `'outline'` | 下拉框变体 |
| `color` | `string` | `''` | 自定义聚焦颜色 |
| `inactiveColor` | `string` | `''` | 未激活状态边框颜色 |
| `placeholderColor` | `string` | `''` | Placeholder 文字颜色 |
| `inline` | `boolean` | `false` | 是否启用行内搜索 (直接在触发器输入) |
| `placement` | `'bottom' \| 'bottom-start' \| 'bottom-end' \| 'top' \| 'top-start' \| 'top-end'` | `'bottom-start'` | 弹出位置 |
| `teleportTo` | `string \| HTMLElement` | `'body'` | Teleport 目标 |
| `maxHeight` | `number` | `256` | 下拉面板最大高度 (px) |
| `noMatchText` | `string` | `'无匹配数据'` | 无匹配时的文本 |
| `noDataText` | `string` | `'无数据'` | 无数据时的文本 |
| `clearDuration` | `number` | `150` | 清除动画持续时间 (ms) |
| `width` | `string \| number` | `''` | 下拉框宽度 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: string \| number)` | 选中值变化时触发 |
| `clear` | `—` | 清空时触发 |
| `focus` | `—` | 获取焦点时触发 |
| `blur` | `—` | 失去焦点时触发 |
| `visibleChange` | `(visible: boolean)` | 下拉面板显示时触发 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 自定义选项内容 |
| `prefix` | 触发器前缀 |
| `empty` | 无选项时的空状态 |

### 暴露方法

| 方法 | 说明 |
|------|------|
| `focus()` | 使下拉框获取焦点 |
| `blur()` | 使下拉框失去焦点 |
| `open()` | 打开下拉面板 |
| `close()` | 关闭下拉面板 |

### 示例

```vue
<!-- 基础用法 -->
<CpDropdown v-model="value" :options="options" placeholder="请选择" />

<!-- 可搜索 -->
<CpDropdown v-model="value" :options="options" filterable />

<!-- 可清空 -->
<CpDropdown v-model="value" :options="options" clearable />
```

---
## CpEmpty

赛博朋克风格空状态组件，用于无数据、无搜索结果等场景。
组件始终撑满父容器，水平+垂直居中展示。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `title` | `string` | `'暂无数据'` | 标题文本（粗体大字） |
| `description` | `string` | `''` | 描述/副标题文本（次要灰色小字） |
| `icon` | `IconValue` | `''` | 自定义图标名称（使用 CpIcon） |
| `imageSize` | `number` | `64` | 图标尺寸 (px) |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 颜色类型 |
| `color` | `string` | `''` | 自定义颜色（覆盖 type） |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-empty-color` | `var(--cp-color-info)` |  |

---
## CpIcon

统一图标组件，支持多种图标来源：Vue 组件、原始 SVG、Iconify 图标名。
自动处理 SVG 尺寸归一化，保证图标在不同来源下表现一致。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `icon` | `Component \| ((...args: unknown[]) => unknown) \| string` | — | 图标来源 |
| `size` | `IconSize \| string \| number` | `'md'` | 图标尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 图标颜色类型 |
| `color` | `string` | `''` | 自定义图标颜色 |
| `tag` | `'i' \| 'span' \| 'div'` | `'i'` | 渲染的 HTML 标签 |
| `spin` | `boolean` | `false` | 是否启用旋转动画 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 可用于传入自定义 SVG 内容 |

### 示例

```vue
<!-- 使用 Iconify 图标名 (需配合 unplugin-icons) -->
<CpIcon icon="mdi:home" />

<!-- 使用 Vue 组件 -->
<CpIcon :icon="MyIconComponent" />

<!-- 使用原始 SVG -->
<CpIcon icon="<svg>...</svg>" />

<!-- 带颜色和尺寸 -->
<CpIcon icon="mdi:check" type="success" size="lg" />

<!-- 旋转动画 (适合加载图标) -->
<CpIcon icon="mdi:loading" spin />
```

---
## CpLoading

赛博朋克风格加载器组件，环形 SVG 动画效果。
可用于按钮内置加载、页面加载、异步操作等场景。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 加载器颜色类型 |
| `size` | `Size` | `'md'` | 加载器尺寸 |
| `color` | `string` | `''` | 自定义颜色 |
| `strokeWidth` | `number` | `4` | SVG 描边宽度 |
| `variant` | `'circular' \| 'spinner' \| 'spinner-solid'` | `'circular'` | 加载器变体 |

### 示例

```vue
<!-- 基础用法 -->
<CpLoading />

<!-- 带颜色 -->
<CpLoading type="primary" size="lg" />

<!-- 自定义颜色和描边 -->
<CpLoading color="#ff00ff" :stroke-width="2" />
```

---
## CpPagination

赛博朋克风格分页组件，用于长列表数据分页导航。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `currentPage` | `number` | `1` | 当前页码 (v-model:currentPage) |
| `pageSize` | `number` | `10` | 每页显示条数 (v-model:pageSize) |
| `total` | `number` | `0` | 总条数 |
| `pageSizes` | `number[]` | `[10, 20, 50, 100]` | 可选的每页条数列表 |
| `pagerCount` | `number` | `7` | 最大可见页码按钮数（应为奇数 >= 5） |
| `layout` | `string` | `'prev, pager, next'` | 布局配置，逗号分隔 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `hideOnSinglePage` | `boolean` | `false` | 只有一页时隐藏 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 形状 |
| `size` | `Size` | `'md'` | 尺寸 |
| `color` | `string` | `''` | 自定义颜色（CSS 颜色值） |
| `buttonVariant` | `ButtonVariant` | `'ghost'` | 分页按钮变体 |
| `totalTemplate` | `string` | `'共 {total} 条'` | 总条数文案模板 |
| `sizeTemplate` | `string` | `'{size} 条/页'` | 每页条数选项文案模板 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(page: number)` | 页码变化事件（同 update:currentPage，便于监听） |
| `sizeChange` | `(size: number)` | 每页条数变化事件 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-pagination-color` | `var(--cp-color-primary)` |  |
| `--cp-pagination-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-pagination-font-weight` | `var(--cp-font-weight-medium)` |  |
| `--cp-pagination-active-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-pagination-strong-font-weight` | `var(--cp-font-weight-bold)` |  |
| `--cp-pagination-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-pagination-height` | `#{map.get($size-config, height)}` |  |
| `--cp-pagination-btn-size` | `#{map.get($size-config, btn-size)}` |  |
| `--cp-pagination-font-size` | `#{map.get($size-config, font-size)}` |  |
| `--cp-pagination-clip` | `#{map.get($size-config, clip)}` |  |
| `--cp-pagination-section-gap` | `#{map.get($size-config, section-gap)}` |  |
| `--cp-pagination-pager-gap` | `#{map.get($size-config, pager-gap)}` |  |
| `--cp-pagination-sizes-width` | `115px` |  |

### 示例

```vue
<CpPagination
  v-model:currentPage="page"
  v-model:pageSize="size"
  :total="100"
  layout="total, sizes, prev, pager, next, jumper"
/>
```

---
## CpPatternBackground

图案背景组件，用于展示各种装饰性背景图案。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `pattern` | `'grid' \| 'checkerboard' \| 'dots' \| 'stripes' \| 'cross'` | `'grid'` | 图案类型 |
| `size` | `number \| string` | `20` | 图案尺寸（格子大小/点间距） |
| `color` | `string` | `'currentColor'` | 图案颜色，支持 CSS 颜色值和渐变 |
| `backgroundColor` | `string` | `'transparent'` | 背景颜色 |
| `direction` | `'horizontal' \| 'vertical' \| 'diagonal' \| 'diagonal-reverse'` | `'diagonal'` | 图案方向（仅对 stripes 有效） |
| `opacity` | `number` | `1` | 图案透明度 0-1 |
| `lineWidth` | `number \| string` | `1` | 线条粗细（仅对 grid/stripes/cross 有效） |
| `dotScale` | `number` | `0.1` | 点大小比例（仅对 dots 有效） |
| `cover` | `boolean` | `false` | 是否覆盖整个父容器（绝对定位） |
| `decorative` | `boolean` | `true` | 是否作为装饰层（禁用鼠标事件） |

### 示例

```vue
<!-- 基础网格背景 -->
<CpPatternBackground pattern="grid" color="var(--cp-primary)" />

<!-- 棋盘格背景 -->
<CpPatternBackground pattern="checkerboard" :size="20" />

<!-- 装饰层覆盖 -->
<CpPatternBackground pattern="dots" cover decorative :opacity="0.1" />
```

---
## CpPopover

赛博朋克风格弹出提示层，用于文字提示或简单选择操作

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 是否显示弹层 (v-model) |
| `placement` | `\| 'top' \| 'top-start' \| 'top-end'` | `'top'` | 弹出位置 |
| `trigger` | `PopoverTrigger \| PopoverTrigger[]` | `'hover'` | 触发方式，支持单个或多个同时启用 |
| `content` | `string` | `''` | 弹层内容 (快捷方式，优先级低于 #content 插槽) |
| `title` | `string` | `''` | 弹层标题 (可选) |
| `showArrow` | `boolean` | `true` | 是否显示箭头 |
| `flipArrow` | `boolean` | `false` | 是否翻转箭头方向 |
| `offset` | `number` | `12` | 弹层与触发器的偏移距离 (px) |
| `disabled` | `boolean` | `false` | 是否禁用弹层 |
| `tooltip` | `boolean` | `false` | 启用 Tooltip 模式 (简化样式、无标题) |
| `openDelay` | `number` | `100` | 打开延迟 (ms)，仅 hover 触发有效 |
| `closeDelay` | `number` | `100` | 关闭延迟 (ms)，仅 hover 触发有效 |
| `width` | `number \| string` | `'auto'` | 弹层宽度 |
| `maxWidth` | `number \| string` | `300` | 弹层最大宽度 |
| `closeOnClickOutside` | `boolean` | `true` | 点击弹层外部是否关闭 |
| `closeOnEscape` | `boolean` | `true` | 按下 Escape 键是否关闭 |
| `teleportTo` | `string \| HTMLElement` | `'body'` | Teleport 目标 |
| `variant` | `'solid' \| 'outline' \| 'neon' \| 'ghost'` | `'solid'` | 弹层变体 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 主题颜色类型 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 弹层形状 |
| `color` | `string` | `''` | 自定义主色调，优先于 type |
| `transition` | `'fade' \| 'slide' \| 'slide-reverse' \| 'none'` | `'fade'` | 过渡动画类型 |
| `fallback` | `'flip' \| 'shift' \| 'none'` | `'flip'` | 视口边界退避策略 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `open` | `—` | 弹层打开时触发 |
| `close` | `—` | 弹层关闭时触发 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 触发器内容 |
| `content` | 弹层内容 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-popover-base-color` | `var(--cp-popover-color, var(--cp-color-primary))` |  |
| `--cp-popover-base-color-light` | `var(--cp-popover-color-light, var(--cp-color-primary-light))` |  |
| `--cp-popover-glow-spread` | `15px` |  |
| `--cp-popover-glow-color` | `var(--cp-popover-base-color-light)` |  |

### 示例

```vue
<!-- 基础 Tooltip -->
<CpPopover content="提示文字" tooltip>
  <CpButton>悬停查看</CpButton>
</CpPopover>

<!-- Click Popover -->
<CpPopover title="系统通知" trigger="click">
  <template #content>
    <p>这是弹出层内容</p>
  </template>
  <CpButton>点击打开</CpButton>
</CpPopover>
```

---
## CpProgress

赛博朋克风格进度条组件，支持线性、环形、仪表盘三种模式。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `percentage` | `number` | `0` | 当前进度值 |
| `max` | `number` | `100` | 进度最大值 |
| `type` | `'line' \| 'circle' \| 'dashboard'` | `'line'` | 进度条类型 |
| `size` | `Size \| 'xl' \| 'xxl'` | `'md'` | 进度条尺寸 |
| `status` | `'success' \| 'warning' \| 'error'` | `undefined` | 进度条状态 |
| `color` | `string \| array \| function` | `''` | 自定义进度条颜色 |
| `strokeWidth` | `number` | `undefined (根据尺寸自动计算)` | 进度条轨道宽度 (像素) |
| `showText` | `boolean` | `true` | 是否显示进度文字 |
| `textInside` | `boolean` | `false` | 进度文字是否在进度条内部显示 |
| `format` | `(percentage: number) =` | `undefined (显示百分比)` | 自定义进度文字格式化函数 |
| `strokeLinecap` | `'round' \| 'square' \| 'butt'` | `'round'` | 环形进度条的线端样式 |
| `width` | `number` | `126` | 环形进度条的宽度 (像素) |
| `striped` | `boolean` | `false` | 是否显示条纹效果 |
| `stripedFlow` | `boolean` | `false` | 条纹是否流动 |
| `indeterminate` | `boolean` | `false` | 是否为不确定进度模式 |
| `duration` | `DurationValue` | `3000` | 不确定模式动画持续时间 |
| `loading` | `boolean` | `false` | 是否显示加载状态（光波扫过效果） |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 进度条形状 |
| `steps` | `boolean` | `false` | 是否启用分段模式 |
| `stepGap` | `number` | `2` | 分段间距（像素） |
| `stepColors` | `string[]` | `[]` | 各分段自定义颜色数组 |
| `textColor` | `string` | `undefined` | 进度条内部文字颜色 |
| `showInnerStripe` | `boolean` | `undefined` | 是否显示内圈虚线装饰 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 自定义进度文字内容（覆盖默认百分比显示） |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-progress-color` | `var(--cp-color-error)` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpProgress :percentage="50" />

<!-- 环形进度条 -->
<CpProgress type="circle" :percentage="75" />

<!-- 条纹流动效果 -->
<CpProgress :percentage="60" striped striped-flow />

<!-- 不确定进度 -->
<CpProgress indeterminate />

<!-- 自定义颜色 -->
<CpProgress :percentage="80" color="#ff00ff" />
```

---
## CpSegmented

赛博朋克风格分段选择器，一组按钮式互斥选项，选中项带滑块高亮效果。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | — | 绑定值 (v-model) |
| `options` | `(string \| number \| SegmentedOption)[]` | — | 选项数组 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设类型 |
| `variant` | `'solid' \| 'outline' \| 'semi' \| 'ghost' \| 'neon'` | `'solid'` | 变体样式 |
| `size` | `Size` | `'md'` | 尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 形状模式 |
| `color` | `string` | `''` | 自定义主题色 |
| `disabled` | `boolean` | `false` | 是否禁用所有选项 |
| `block` | `boolean` | `false` | 是否撑满父容器宽度（选项等宽） |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: SegmentedValueType)` | 值变化时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-segmented-bg` | `var(--cp-bg-elevated)` |  |
| `--cp-segmented-border-color` | `var(--cp-border)` |  |
| `--cp-segmented-padding` | `2px` |  |
| `--cp-segmented-padding-x` | `3px` |  |
| `--cp-segmented-gap` | `2px` |  |
| `--cp-segmented-item-color` | `var(--cp-text-secondary)` |  |
| `--cp-segmented-item-hover-bg` | `var(--cp-state-hover)` |  |
| `--cp-segmented-item-padding` | `0 20px` |  |
| `--cp-segmented-indicator-bg` | `var(--cp-surface-bright)` |  |
| `--cp-segmented-indicator-border` | `transparent` |  |
| `--cp-segmented-indicator-shadow` | `none` |  |
| `--cp-segmented-active-color` | `var(--cp-text-primary)` |  |
| `--cp-segmented-transition` | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` |  |
| `--cp-segmented-height` | `40px` |  |
| `--cp-segmented-font-size` | `var(--cp-font-size-lg)` |  |
| `--cp-segmented-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-segmented-active-font-weight` | `var(--cp-font-weight-bold)` |  |
| `--cp-segmented-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-segmented-indicator-offset` | `-2px` |  |
| `--cp-segmented-item-font-weight` | `var(--cp-segmented-active-font-weight)` |  |

### 示例

```vue
<CpSegmented v-model="active" :options="['日', '周', '月']" />

<CpSegmented
  v-model="mode"
  type="primary"
  variant="neon"
  :options="[
    { label: '列表', value: 'list' },
    { label: '网格', value: 'grid' },
  ]"
/>
```

---
## CpSlider

赛博朋克风格滑块组件，用于在给定的数值范围内进行选择。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number \| [number, number]` | `0` | 绑定值 (v-model) |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `size` | `Size` | `'md'` | 滑块尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 滑块形状 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `range` | `boolean` | `false` | 是否为范围选择模式 |
| `showTooltip` | `boolean` | `true` | 是否显示数值提示 |
| `showStops` | `boolean` | `false` | 是否显示刻度点 |
| `marks` | `Record<number, string \| SliderMarkConfig>` | — | 标记刻度 |
| `color` | `string` | `''` | 自定义颜色 |
| `vertical` | `boolean` | `false` | 是否垂直模式 |
| `height` | `string` | `undefined` | 滑块高度（垂直模式必需） |
| `formatTooltip` | `(value: number) =` | — | 格式化 tooltip 显示内容 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: number \| [number, number])` | 值改变且释放滑块时触发 |
| `input` | `(value: number \| [number, number])` | 拖动过程中实时触发 |

### 示例

```vue
<!-- 基础用法 -->
<CpSlider v-model="value" />

<!-- 范围选择 -->
<CpSlider v-model="range" range />

<!-- 带刻度标记 -->
<CpSlider v-model="value" :marks="{ 0: '0°C', 100: '100°C' }" />
```

---
## CpSpacer


### Props

无 Props。

---
## CpStatusIndicator

赛博朋克风格状态指示器组件，用于独立显示状态。
可用于在线/离线状态、任务状态、系统状态等场景。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 状态指示器颜色类型 |
| `size` | `Size` | `'md'` | 状态指示器尺寸 |
| `shape` | `'dot' \| 'square' \| 'diamond'` | `'dot'` | 状态指示器形状 |
| `color` | `string` | `''` | 自定义颜色 |
| `animation` | `'none' \| 'pulse' \| 'glow' \| 'blink'` | `'none'` | 动画效果 |
| `duration` | `number \| string` | `1500` | 动画持续时间 |
| `intensity` | `number` | `1` | 动画激烈程度 |
| `gap` | `number \| string` | `''` | 指示点与文字间的间隙 |
| `label` | `string` | `''` | 文字标签 |

### 示例

```vue
<!-- 基础用法 -->
<CpStatusIndicator type="success" />

<!-- 带动画 -->
<CpStatusIndicator type="primary" animation="pulse" />

<!-- 带标签 -->
<CpStatusIndicator type="success" label="在线" />

<!-- 自定义颜色 -->
<CpStatusIndicator color="#ff00ff" shape="diamond" />
```

---
## CpSwitch

赛博朋克风格开关组件，支持异步切换、内嵌文字、自定义颜色。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 绑定值 (v-model) |
| `size` | `Size` | `'md'` | 开关尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 开关类型（颜色预设） |
| `disabled` | `boolean` | `false` | 是否禁用开关 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `color` | `string` | `''` | 自定义选中状态颜色 |
| `inactiveColor` | `string` | `''` | 自定义未选中状态颜色 |
| `width` | `string \| number` | `''` | 强制指定宽度 |
| `fitText` | `boolean` | `false` | 是否适应文字宽度 |
| `activeText` | `string` | `''` | 选中时内嵌显示的文字 |
| `inactiveText` | `string` | `''` | 未选中时内嵌显示的文字 |
| `beforeChange` | `() =` | — | 切换前钩子，返回 false 或 Promise reject 时阻止切换 |
| `name` | `string` | `''` | 原生 name 属性 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: boolean)` | 值变化时触发 |

### 暴露方法

| 方法 | 说明 |
|------|------|
| `inputRef` | 原生 input 元素引用 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-switch-active-color` | `var(--cp-color-primary)` | CSS 变量 |
| `--cp-switch-active-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-switch-inactive-color` | `var(--cp-border)` |  |
| `--cp-switch-bg-color` | `color-mix(in srgb, var(--cp-bg-deep) 80%, transparent)` |  |
| `--cp-switch-text-color` | `var(--cp-text-inverse)` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpSwitch v-model="enabled" />

<!-- 内嵌文字 -->
<CpSwitch v-model="enabled" active-text="ON" inactive-text="OFF" />

<!-- 异步切换 -->
<CpSwitch v-model="enabled" :before-change="handleConfirm" />
```

---
## CpTag

赛博朋克风格标签组件，用于展示标签、分类或状态。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 标签类型（颜色预设） |
| `size` | `Size` | `'md'` | 标签尺寸 |
| `variant` | `'solid' \| 'outline' \| 'semi' \| 'note'` | `'solid'` | 标签变体样式 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 标签形状模式 |
| `closable` | `boolean` | `false` | 是否可关闭 |
| `color` | `string` | `''` | 自定义主题色 |
| `dashed` | `boolean` | `false` | 虚线边框 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `selectable` | `boolean` | `false` | 是否可选中 |
| `selected` | `boolean` | `false` | 选中状态 (v-model:selected) |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `close` | `(event: MouseEvent)` | 关闭按钮点击时触发 |
| `click` | `(event: MouseEvent)` | 标签点击时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-tag-color` | `var(--cp-text-secondary)` |  |
| `--cp-tag-color-light` | `color-mix(in srgb, var(--cp-text-secondary) 10%, transparent)` |  |
| `--cp-tag-bg` | `var(--cp-tag-color)` |  |
| `--cp-tag-border` | `var(--cp-tag-color)` |  |
| `--cp-tag-clip` | `#{map.get($size-config, clip)}` |  |
| `--cp-tag-text` | `color-contrast(var(--cp-tag-color) vs #000, #fff)` | 使用 color-contrast 自动选择最佳对比色 (黑或白) |

### 示例

```vue
<!-- 基础用法 -->
<CpTag>默认标签</CpTag>

<!-- 颜色类型 -->
<CpTag type="primary">主要</CpTag>
<CpTag type="success">成功</CpTag>

<!-- 可关闭 -->
<CpTag closable @close="handleClose">可关闭</CpTag>

<!-- 自定义颜色 -->
<CpTag color="#ff00ff">自定义颜色</CpTag>
```

---
## CpText

赛博朋克风格特殊文字组件，可快速为文字添加多种视觉效果。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 文字类型（颜色预设） |
| `color` | `string` | `''` | 自定义颜色 |
| `size` | `'sm' \| 'md' \| 'lg' \| number` | `'md'` | 文字尺寸 |
| `align` | `'top' \| 'middle' \| 'bottom'` | `'middle'` | 垂直对齐方式 |
| `underline` | `boolean` | `false` | 下划线效果 |
| `boxed` | `boolean` | `false` | 方框边框效果 |
| `dashed` | `boolean` | `false` | 虚线样式 |
| `bold` | `boolean` | `false` | 加粗效果 |
| `italic` | `boolean` | `false` | 斜体效果 |
| `strikethrough` | `boolean` | `false` | 删除线效果 |
| `glow` | `boolean` | `false` | 发光效果 |
| `glowIntensity` | `number` | `3` | 发光强度 |
| `glowPulse` | `boolean` | `false` | 发光心跳动画 |
| `lightWave` | `boolean` | `false` | 光波扫射动画 |
| `lightWaveDuration` | `DurationValue` | `2000` | 光波动画时长 |
| `marker` | `boolean` | `false` | 马克笔背景效果 |
| `markerColor` | `string` | `''` | 马克笔自定义颜色 |
| `glowPulseDuration` | `DurationValue` | `1500` | 发光心跳动画时长 |
| `overlap` | `boolean` | `false` | 重叠文字效果 |
| `overlapOffsetX` | `number` | `2` | 重叠文字 X 轴偏移量 (px) |
| `overlapOffsetY` | `number` | `2` | 重叠文字 Y 轴偏移量 (px) |
| `overlapColor` | `string` | `''` | 重叠文字颜色 |
| `unselectable` | `boolean` | `false` | 禁止选中/复制 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-text-color` | `inherit` | CSS 变量默认值 |
| `--cp-text-glow-intensity` | `3px` | 默认强度 |
| `--cp-text-pulse-duration` | `1.5s` |  |
| `--cp-text-wave-duration` | `2s` | 默认时长 |
| `--cp-text-marker-color` | `var(--cp-text-color)` | 默认使用文字颜色 |
| `--cp-text-overlap-offset-x` | `2px` |  |
| `--cp-text-overlap-offset-y` | `2px` |  |
| `--cp-text-overlap-color` | `color-mix(` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpText>普通文字</CpText>

<!-- 带效果 -->
<CpText underline type="primary">下划线</CpText>
<CpText boxed glow type="error">方框发光</CpText>
<CpText marker type="warning">马克笔效果</CpText>

<!-- 组合效果 -->
<CpText bold italic underline>加粗斜体下划线</CpText>
```

---
## CpTree

赛博朋克风格树形控件，用于展示层级数据。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `data` | `TreeNodeData[]` | — | 树节点数据 |
| `showCheckbox` | `boolean` | `false` | 是否显示复选框 |
| `checkStrictly` | `boolean` | `false` | 严格模式：父子节点互不关联 |
| `defaultExpandAll` | `boolean` | `false` | 默认展开所有节点 |
| `defaultExpandedKeys` | `(string \| number)[]` | — | 默认展开的节点 key |
| `expandedKeys` | `(string \| number)[]` | — | 受控展开的节点 key (v-model:expandedKeys) |
| `checkedKeys` | `(string \| number)[]` | — | 受控勾选的节点 key (v-model:checkedKeys) |
| `accordion` | `boolean` | `false` | 手风琴模式：同级只展开一个节点 |
| `indent` | `number` | `16` | 每级缩进像素 |
| `nodeKey` | `string` | `'value'` | 节点唯一标识字段名 |
| `props` | `TreeFieldProps` | — | 字段映射 { label, children, disabled, isLeaf } |
| `highlightCurrent` | `boolean` | `false` | 是否高亮当前点击节点 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 颜色类型 |
| `color` | `string` | `''` | 自定义主题颜色 |
| `connectorLine` | `boolean` | `true` | 是否显示连接线 |
| `lazy` | `boolean` | `false` | 是否懒加载 |
| `load` | `(node: TreeNode, resolve: (data: TreeNodeData[]) =` | — | 懒加载回调 |
| `filterMethod` | `(value: string, data: TreeNodeData, node: TreeNode) =` | — | 过滤方法 |
| `expandIcon` | `Component \| ((node: TreeNode) =` | — | 自定义展开图标（节点未展开时显示） |
| `collapseIcon` | `Component \| ((node: TreeNode) =` | — | 自定义收起图标（节点已展开时显示） |
| `leafIcon` | `Component \| ((node: TreeNode) =` | — | 自定义叶子节点图标 |
| `nodeIcon` | `Component \| ((node: TreeNode) =` | — | 自定义节点前缀图标 |
| `showNodeIcon` | `boolean` | `true` | 是否自动显示节点数据中的 icon 字段 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `node-click` | `(data: TreeNodeData, node: TreeNode)` | 节点被点击 |
| `node-expand` | `(data: TreeNodeData, node: TreeNode)` | 节点展开 |
| `node-collapse` | `(data: TreeNodeData, node: TreeNode)` | 节点收起 |
| `check-change` | `(data: TreeNodeData, checked: boolean)` | 勾选变化 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-tree-active-color` | `#{$color}` |  |
| `--cp-tree-active-color-light` | `var(--cp-color-#{$type}-light)` |  |
| `--cp-tree-connector-color` | `var(--cp-border)` |  |
| `--cp-tree-connector-active-color` | `var(--cp-color-primary)` |  |
| `--cp-tree-node-height` | `32px` |  |
| `--cp-tree-indent` | `16px` |  |
| `--cp-tree-font-weight` | `var(--cp-font-weight-medium)` |  |
| `--cp-tree-active-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-tree-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-tree-item-font-weight` | `var(--cp-tree-active-font-weight)` |  |

### 示例

```vue
<CpTree :data="treeData" show-checkbox />
```

---
## CpUpload

赛博朋克风格文件上传组件，支持拖拽、图片预览、多种变体和形状。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `UploadFile[]` | `[]` | 文件列表 (v-model) |
| `action` | `string` | `''` | 上传地址 |
| `headers` | `Record<string, string` | `{}` | 请求头 |
| `data` | `Record<string, string` | `{}` | 上传附加数据 |
| `name` | `string` | `'file'` | 上传文件字段名 |
| `accept` | `string` | `''` | 接受的文件类型 (原生 accept) |
| `multiple` | `boolean` | `false` | 是否支持多文件 |
| `directory` | `boolean` | `false` | 是否支持选择文件夹（webkitdirectory） |
| `limit` | `number` | `0` | 最大文件数 (0 = 无限制) |
| `maxSize` | `number` | `0` | 最大文件大小 bytes (0 = 无限制) |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `drag` | `boolean` | `false` | 拖拽上传模式 |
| `autoUpload` | `boolean` | `true` | 选择后自动上传 |
| `listType` | `'text' \| 'picture' \| 'picture-card'` | `'text'` | 文件列表展示类型 |
| `showFileList` | `boolean` | `true` | 是否显示文件列表 |
| `variant` | `'outline' \| 'dashed' \| 'filled' \| 'ghost'` | `'dashed'` | 变体样式 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 形状 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型 |
| `color` | `string` | `''` | 自定义颜色（覆盖 type） |
| `size` | `Size` | `'md'` | 按钮/触发器尺寸 |
| `httpRequest` | `(options: UploadRequestOptions) =` | — | 自定义上传函数 |
| `beforeUpload` | `(file: File) =` | — | 上传前钩子，返回 false 或 reject 可阻止上传 |
| `onExceed` | `(files: File[], fileList: UploadFile[]) =` | — | 超出文件数限制时的回调 |
| `inlinePreview` | `boolean` | — | 单图内联预览（picture-card 模式下） |
| `preview` | `boolean` | `false` | 是否开启图片卡片点击预览功能 |
| `download` | `boolean` | `false` | 在预览大图时，是否允许下载图片 |
| `showInnerStripe` | `boolean` | `false` | 是否显示 CpProgress 内圈虚线装饰 |
| `placeholder` | `string` | `undefined` | 自定义触发器文案 |
| `placeholderIcon` | `IconValue` | `undefined` | 自定义触发器图标组件 |
| `dimmed` | `boolean` | `false` | 是否为减淡模式 |
| `successType` | `string` | `undefined` | 上传成功时的边框颜色 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(file: UploadFile, _fileList: UploadFile[])` | 文件列表变化 |
| `success` | `(_response: unknown, file: UploadFile, _fileList: UploadFile[])` | 上传成功 |
| `error` | `(_error: Error, file: UploadFile, _fileList: UploadFile[])` | 上传失败 |
| `progress` | `(_percentage: number, file: UploadFile)` | 上传进度 |
| `remove` | `(file: UploadFile, _fileList: UploadFile[])` | 文件移除 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-upload-color` | `var(--cp-color-primary)` |  |
| `--cp-upload-border-color` | `var(--cp-border)` |  |
| `--cp-upload-bg` | `transparent` |  |
| `--cp-upload-card-size` | `120px` |  |
| `--cp-upload-success-color` | `var(--cp-color-success)` |  |

---
