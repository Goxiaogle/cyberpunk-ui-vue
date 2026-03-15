# 展示组件属性参考

## CpImage 图片

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

## CpTimeline 时间轴

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

## CpTable 表格

赛博朋克风格数据表格，支持排序、多选、条纹、边框、固定表头、树形展开、行展开。配合 CpTableColumn 声明式定义列

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
| `expandRowKeys` | `(string \| number)[]` | — | 受控展开行 key 数组（展开列模式） |
| `rowExpandable` | `(row: any) =` | — | 控制每行是否可展开 |
| `type` | `'default' \| 'selection' \| 'index' \| 'expand'` | `'default'` | 列特殊类型 |
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
| `expand-change` | `(row: any, expanded: boolean)` | 树形行展开/折叠 或 行展开列展开/折叠 |

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

### 示例

```vue
<!-- 基础用法 -->
<CpTable :data="tableData" stripe border>
  <CpTableColumn prop="name" label="姓名" sortable />
  <CpTableColumn prop="age" label="年龄" sortable />
</CpTable>

<!-- 行展开：使用 type="expand" 列 -->
<CpTable :data="tableData" row-key="id">
  <CpTableColumn type="expand">
    <template #default="{ row }">
      <p>邮箱: {{ row.email }}</p>
      <p>备注: {{ row.remark }}</p>
    </template>
  </CpTableColumn>
  <CpTableColumn prop="name" label="姓名" />
</CpTable>

<!-- 行展开：控制哪些行可展开 -->
<CpTable
  :data="tableData"
  row-key="id"
  :row-expandable="(row) => !!row.details"
  :expand-row-keys="[1, 3]"
```

---

## CpNotification 通知

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

## CpAvatar 头像

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

## CpBadge 徽章

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

## CpCard 卡片

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

## CpDialog 对话框

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

## CpEmpty 空状态

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

### 示例

```vue
<CpEmpty />
<CpEmpty title="暂无数据" description="点击刷新加载数据">
  <CpButton type="primary" size="sm">刷新</CpButton>
</CpEmpty>
```

---

## CpPopover 弹出层

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

## CpProgress 进度条

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

## CpStatusIndicator 状态指示器

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

## CpTag 标签

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

## CpTree 树形控件

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

