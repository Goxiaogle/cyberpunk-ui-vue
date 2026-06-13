# 展示组件属性参考

## CpImage / CpImagePreview 图片

赛博朋克风格图片组件，支持懒加载、加载占位、错误处理等功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 图片源地址 |
| `alt` | `string` | `''` | 图片描述/替代文本 |
| `fit` | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` | 图片适应模式 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 图片形状模式 |
| `lazy` | `boolean` | `false` | 是否懒加载 |
| `preview` | `boolean \| ImagePreviewOptions` | `false` | 预览配置 |
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
| `zIndex` | `number` | `2000` | 基础 z-index。多个前台弹层同时打开时会以该值为基础自动递增层级 |
| `stackPriority` | `number` | `100` | 前台弹层栈优先级。默认高于 Dialog，确保图片预览打开后位于 Dialog 上方 |
| `infinite` | `boolean` | `true` | 是否支持循环切换（到最后一张后跳回第一张） |
| `teleportTo` | `string \| HTMLElement` | `'body'` | Teleport 目标 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 主题颜色类型 |
| `color` | `string` | `''` | 自定义外发光及部分元素的颜色 |
| `download` | `boolean` | `false` | 是否允许下载图片，开启后工具栏会显示下载按钮 |
| `closeOnClickModal` | `boolean` | `true` | 点击遮罩是否关闭预览 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `load` | `(event: Event)` | 图片加载成功时触发 |
| `error` | `(event: Event)` | 图片加载失败时触发 |
| `close` | `(payload: ImagePreviewClosePayload)` | 关闭时触发 |
| `switch` | `(index: number)` | 切换图片时触发 |

### 插槽

| 名称 | 说明 |
|------|------|
| `toolbar` | 完全替换底部工具栏（覆盖内置按钮）。作用域 props: `{ scale, rotate, currentIndex, currentUrl, urlList, isSingle, canPrev, canNext, zoomMin, zoomMax, zoomIn(), zoomOut(), rotateLeft(), rotateRight(), resetTransform(), prev(), next(), close(), download() }` |
| `toolbar-append` | 在内置工具栏末尾追加自定义按钮。作用域 props 与 `toolbar` 一致 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-image-hover-duration` | `#{$image-transition-duration}` | 动画时间变量 |

### 示例

#### CpImage

```vue
<!-- 基础用法 -->
<CpImage src="/image.jpg" alt="示例图片" />

<!-- 懒加载 -->
<CpImage src="/image.jpg" lazy />

<!-- 带回退图片 -->
<CpImage src="/image.jpg" fallback-src="/fallback.jpg" />

<!-- 圆形头像 -->
<CpImage src="/avatar.jpg" shape="circle" :width="64" :height="64" />

<!-- 聚合式预览配置 -->
<CpImage
  src="/thumb.jpg"
  :preview="{
    urlList: ['/a.jpg', '/b.jpg'],
    initialIndex: 0,
    closeOnClickModal: false,
    onClose: ({ index }) => console.log(index)
  }"
/>
```

#### CpImagePreview

```vue
<!-- 基础用法 -->
<CpImagePreview v-model="visible" :url-list="urls" />

<!-- 禁止点击遮罩关闭，并在关闭时获取停留位置 -->
<CpImagePreview
  v-model="visible"
  :url-list="urls"
  :close-on-click-modal="false"
  @close="({ index, url }) => console.log(index, url)"
/>

<!-- 在内置工具栏末尾追加按钮 -->
<CpImagePreview v-model="visible" :url-list="urls">
  <template #toolbar-append="{ currentUrl, close }">
    <CpButton variant="ghost" dimmed square @click="share(currentUrl)">分享</CpButton>
  </template>
</CpImagePreview>

<!-- 完全替换工具栏 -->
<CpImagePreview v-model="visible" :url-list="urls">
  <template #toolbar="{ zoomIn, zoomOut, resetTransform }">
    <CpButton @click="zoomOut">-</CpButton>
    <CpButton @click="zoomIn">+</CpButton>
    <CpButton @click="resetTransform">重置</CpButton>
  </template>
</CpImagePreview>
```

---

## CpTimeline / CpTimelineItem 时间轴

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

#### CpTimeline

```vue
<CpTimeline>
  <CpTimelineItem timestamp="2024-01-01">事件一</CpTimelineItem>
  <CpTimelineItem timestamp="2024-02-01">事件二</CpTimelineItem>
</CpTimeline>
```

#### CpTimelineItem

```vue
<CpTimelineItem timestamp="2024-01-01" type="primary" active animation="pulse">
  系统初始化完成
</CpTimelineItem>
```

---

## CpTable / CpTableColumn 表格

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
| `rowClassName` | `TableRowClassValue \| ((params: TableRowClassNameParams) => TableRowClassValue)` | `''` | 行 class 名 |
| `height` | `string \| number` | — | 固定高度 (启用固定表头) |
| `maxHeight` | `string \| number` | — | 最大高度 |
| `resizable` | `boolean` | `false` | 是否允许拖动表头分割线调整列宽 |
| `emptyText` | `string` | `'暂无数据'` | 空数据文案 |
| `rowKey` | `string \| ((row: any) =` | `'id'` | 行唯一标识字段名 |
| `defaultSort` | `SortState` | — | 默认排序 |
| `sortState` | `SortState` | — | 受控排序状态（配合 `v-model:sort-state`） |
| `manualSort` | `boolean` | `false` | 手动排序模式 |
| `sortOrders` | `SortOrder[]` | `['ascending', 'descending', null]` | 排序切换顺序 |
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
| `treeCheckMode` | `'strict' \| 'cascade' \| 'bubble'` | `'strict'` | 树形 + 多选场景下，父子节点的联动策略 |
| `selectionPayload` | `'rows' \| 'keys' \| 'detail'` | `'rows'` | selection-change / select / select-all 事件 payload 的输出形态 |
| `includeHalfChecked` | `boolean` | `false` | `selectionPayload` 为 `'rows'` 或 `'keys'` 时，是否将半选节点也混入数组 |
| `checkedKeys` | `(string \| number)[]` | — | 受控选中 rowKey 数组（配合 `v-model:checked-keys`） |
| `type` | `'default' \| 'selection' \| 'index' \| 'expand'` | `'default'` | 列特殊类型 |
| `prop` | `string` | `''` | 数据字段名 |
| `label` | `string` | `''` | 列标题 |
| `width` | `string \| number` | — | 列宽 (px 或百分比) |
| `minWidth` | `string \| number` | — | 最小列宽 |
| `maxWidth` | `string \| number` | — | 最大列宽 |
| `resizable` | `boolean` | `true` | 是否允许拖动表头分割线调整当前列宽度 |
| `sortable` | `ColumnSortable` | `false` | 是否可排序 |
| `sortMethod` | `SortMethod` | — | 自定义本地排序函数 |
| `sortBy` | `SortBy` | — | 自定义排序取值 |
| `sortOrders` | `SortOrder[]` | `undefined` | 当前列的排序切换顺序 |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | 内容对齐方式 |
| `headerAlign` | `'left' \| 'center' \| 'right' \| ''` | `''` | 表头对齐方式 (默认跟随 align) |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `sort-change` | `(_sortState: SortChangePayload)` | 排序变化 |
| `column-resize` | `(_column: TableColumnConfig, _width: number, _oldWidth: number)` | 列宽拖动变化 |
| `row-click` | `(row: any, index: number, event: MouseEvent)` | 行点击 |
| `selection-change` | `(selection: SelectionPayload)` | 选中行变化 |
| `select-all` | `(selection: SelectionPayload)` | 全选 |
| `select` | `(selection: SelectionPayload, row: any)` | 单行选中 |
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

#### CpTable

```vue
<!-- 远程排序：只维护排序状态，不做本地排序 -->
<CpTable
  v-model:sort-state="sortState"
  :data="tableData"
  manual-sort
  @sort-change="fetchTableData"
>
  <CpTableColumn prop="createdAt" label="创建时间" sortable />
</CpTable>

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
  @expand-change="handleExpandChange"
>
  <CpTableColumn type="expand">
    <template #default="{ row }">{{ row.details }}</template>
  </CpTableColumn>
  <CpTableColumn prop="name" label="姓名" />
</CpTable>

<!-- 行状态高亮：按业务条件返回 class -->
<CpTable
  :data="tableData"
  :row-class-name="({ row }) => row.status === 'error' ? 'is-error-row' : ''"
>
  <CpTableColumn prop="name" label="姓名" />
  <CpTableColumn prop="status" label="状态" />
</CpTable>
```

#### CpTableColumn

```vue
<!-- 普通数据列 -->
<CpTableColumn prop="name" label="姓名" sortable />
<CpTableColumn prop="email" label="邮箱" :width="220" :min-width="160" :max-width="360" />
<CpTableColumn prop="createdAt" label="创建时间" sortable="custom" />

<!-- 自定义单元格渲染 -->
<CpTableColumn prop="status" label="状态">
  <template #default="{ row }">
    <CpTag :type="row.active ? 'success' : 'error'">
      {{ row.active ? '在线' : '离线' }}
    </CpTag>
  </template>
</CpTableColumn>

<!-- 展开列：点击箭头展开行详情 -->
<CpTableColumn type="expand">
  <template #default="{ row }">
    <p>邮箱: {{ row.email }}</p>
    <p>备注: {{ row.remark }}</p>
  </template>
</CpTableColumn>

<!-- 多选列 -->
<CpTableColumn type="selection" />

<!-- 序号列 -->
<CpTableColumn type="index" label="#" :width="50" />
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
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 头像颜色类型 |
| `src` | `string` | `''` | 头像图片地址 |
| `alt` | `string` | `''` | 图片描述/替代文本 |
| `size` | `Size \| 'xs' \| 'xl'` | `'md'` | 头像尺寸 |
| `shape` | `'circle' \| 'square' \| 'clip' \| 'round' \| 'no-clip'` | `'circle'` | 头像形状 |
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

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-avatar-bg` | `var(--cp-surface-bright)` |  |
| `--cp-avatar-text-color` | `var(--cp-text-secondary)` |  |
| `--cp-avatar-border-color` | `var(--cp-border-default)` |  |

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
| `variant` | `'solid' \| 'outline' \| 'semi' \| 'ghost' \| 'neon'` | `'solid'` | 卡片变体/形态 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 卡片形状 |
| `bodyPadding` | `string` | `undefined (使用默认 padding)` | 自定义内容区内边距 |
| `headerBorder` | `boolean` | `true` | 是否显示头部分隔线 |
| `footerBorder` | `boolean` | `true` | 是否显示底部分隔线 |
| `overlayAnimation` | `'slide-up' \| 'slide-down' \| 'slide-left' \| 'slide-right' \| 'fade' \| 'scale'` | `'slide-up'` | 覆层出场动画类型 |
| `overlayPosition` | `'bottom' \| 'top' \| 'center'` | `'bottom'` | 覆层位置 |
| `overlayDuration` | `DurationValue` | `300` | 覆层动画持续时间 |
| `overlayEffect` | `'none' \| 'blur' \| 'color' \| 'blur-color'` | `'blur-color'` | 覆层效果类型 |
| `overlayColor` | `string` | `undefined` | 覆层颜色 |
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
| `collapse` | `boolean` | `undefined` | 是否折叠卡片（仅显示头部） |
| `halfCollapse` | `boolean` | `false` | 半折叠模式 — 仅在 collapse=true 时生效 |
| `peekHeight` | `number \| string` | `80` | 半折叠时 body 区域的可见高度 |
| `showCollapseAction` | `boolean` | `false` | 是否显示内置折叠控制器（"查看更多" / "收起"） |
| `collapseActionExpandText` | `string` | `'查看更多'` | 内置控制器展开文案 |
| `collapseActionCollapseText` | `string` | `'收起'` | 内置控制器收起文案 |
| `loading` | `boolean` | `false` | 是否处于加载状态 |
| `loadingText` | `string` | `'加载中...'` | 加载中显示的文字 |
| `disabled` | `boolean` | `false` | 是否处于禁用状态 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `collapse-change` | `(payload: { needed: boolean })` | 半折叠模式下，内容高度变化时触发 |

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
| `collapse-action` | 自定义折叠控制器内容，作用域：`{ collapsed: boolean, needed: boolean, toggle: () => void }` |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-card-color` | `var(--cp-border)` |  |
| `--cp-card-color-light` | `rgba(255, 255, 255, 0.1)` |  |
| `--cp-card-bg` | `color-mix(in srgb, var(--cp-border) 50%, transparent)` |  |
| `--cp-card-shadow-color` | `color-mix(in srgb, var(--cp-card-color) 44%, transparent)` |  |
| `--cp-card-overlay-color-default` | `color-mix(in srgb, var(--cp-bg-elevated) 72%, transparent)` |  |
| `--cp-card-action-color-default` | `color-mix(in srgb, var(--cp-bg-elevated) 90%, transparent)` |  |
| `--cp-card-loading-bg-default` | `color-mix(in srgb, var(--cp-bg-elevated) 86%, transparent)` |  |
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
| `fullscreenInset` | `DialogFullscreenInsetValue \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', DialogFullscreenInsetValue>>` | `undefined` | 全屏模式下对话框相对视口的安全边距 |
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
| `loading` | `boolean` | `false` | 是否处于加载状态 |
| `loadingText` | `string` | `'加载中...'` | 加载中显示的文字 |
| `loadingClass` | `\| string` | — | 加载遮罩自定义类名 |
| `loadingStyle` | `string \| CSSProperties` | — | 加载遮罩自定义样式 |
| `zIndex` | `number` | `2000` | 基础 z-index。多个 Dialog 同时打开时会以该值为基础自动递增层级 |
| `stackPriority` | `number` | `0` | Dialog 栈优先级。值越大层级越高，同优先级内后打开的 Dialog 位于更上层 |
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
| `loading` | 自定义加载中内容 |
| `footer` | 底部操作区域，作用域 props: `{ close: () => void, confirm: () => void }` |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-dialog-fullscreen-inset-top` | `env(safe-area-inset-top, 0px)` |  |
| `--cp-dialog-fullscreen-inset-right` | `env(safe-area-inset-right, 0px)` |  |
| `--cp-dialog-fullscreen-inset-bottom` | `env(safe-area-inset-bottom, 0px)` |  |
| `--cp-dialog-fullscreen-inset-left` | `env(safe-area-inset-left, 0px)` |  |
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

<CpDialog
  v-model="visible"
  title="全屏安全边距"
  fullscreen
  :fullscreen-inset="{ top: '64px', right: '24px', bottom: '32px', left: '24px' }"
  :body-style="{ padding: '24px 32px' }"
>
  <p>为固定顶栏、底栏或设备安全区预留空间。</p>
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
| `status` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `undefined` | 进度条状态 |
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
| `--cp-progress-color` | `var(--cp-color-info)` |  |

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
| `showCheckbox` | `boolean` | `false` | 是否显示复选框（多选模式） |
| `showRadio` | `boolean` | `false` | 是否显示单选框（单选模式） |
| `checkMode` | `'strict' \| 'cascade' \| 'bubble'` | — | 复选框父子联动策略（参考 CpTable `treeCheckMode`） |
| `defaultExpandAll` | `boolean` | `false` | 默认展开所有节点 |
| `defaultExpandedKeys` | `(string \| number)[]` | — | 默认展开的节点 key |
| `expandedKeys` | `(string \| number)[]` | — | 受控展开的节点 key (v-model:expandedKeys) |
| `checkedKeys` | `(string \| number)[]` | — | 受控勾选的节点 key (v-model:checkedKeys) |
| `accordion` | `boolean` | `false` | 手风琴模式：同级只展开一个节点 |
| `indent` | `number` | `16` | 每级缩进像素 |
| `nodeKey` | `string` | `'value'` | 节点唯一标识字段名 |
| `props` | `TreeFieldProps` | — | 字段映射 { label, children, disabled, isLeaf } |
| `highlightCurrent` | `boolean` | `false` | 是否高亮当前点击节点 |
| `defaultCurrentKey` | `string \| number \| null` | `null` | 默认当前选中节点 key（非受控） |
| `currentKey` | `string \| number \| null` | — | 受控当前选中节点 key（v-model:currentKey） |
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

