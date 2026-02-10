---
name: components-display
description: 展示与反馈组件的详细属性参考：Card、Image、Avatar、Progress、Loading、StatusIndicator、Dialog、Notification、Popover、Tree。
---

# 展示与反馈组件属性参考

## CpCard 卡片

赛博朋克风格卡片容器。

### Props

| 属性                | 类型                                                                    | 默认值      | 说明                   |
| ------------------- | ----------------------------------------------------------------------- | ----------- | ---------------------- |
| `title`             | `string`                                                                | `''`        | 卡片标题               |
| `type`              | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型               |
| `variant`           | `'solid' \| 'outline' \| 'semi' \| 'ghost'`                             | `'solid'`   | 变体                   |
| `shape`             | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`    | 形状                   |
| `shadow`            | `'always' \| 'hover' \| 'never'`                                        | `'hover'`   | 阴影时机               |
| `color`             | `string`                                                                | `''`        | 自定义主题色           |
| `bgColor`           | `string`                                                                | `''`        | 自定义背景（支持渐变） |
| `borderColor`       | `string`                                                                | -           | 边框颜色               |
| `bodyPadding`       | `string`                                                                | -           | 内容区内边距           |
| `headerBorder`      | `boolean`                                                               | `true`      | 头部分隔线             |
| `footerBorder`      | `boolean`                                                               | `true`      | 底部分隔线             |
| `dimmed`            | `boolean`                                                               | `false`     | 减淡模式               |
| `hoverScale`        | `boolean`                                                               | `false`     | 悬停放大效果           |
| `triggerImageHover` | `boolean`                                                               | `false`     | 触发内部图片 hover     |

### 覆层 Props

| 属性               | 类型                                              | 默认值                 | 说明          |
| ------------------ | ------------------------------------------------- | ---------------------- | ------------- |
| `overlayAnimation` | `'slide-up' \| 'slide-down' \| 'fade' \| 'scale'` | `'slide-up'`           | 覆层动画      |
| `overlayPosition`  | `'bottom' \| 'top' \| 'center'`                   | `'bottom'`             | 覆层位置      |
| `overlayEffect`    | `'none' \| 'blur' \| 'color' \| 'blur-color'`     | `'blur-color'`         | 覆层效果      |
| `overlayColor`     | `string`                                          | `'rgba(26,26,36,0.8)'` | 覆层颜色      |
| `overlayBlur`      | `number \| string`                                | `10`                   | 模糊程度      |
| `overlayDuration`  | `number \| string`                                | `300`                  | 动画时长 (ms) |

### 插槽

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 卡片主体内容 |
| `header`  | 自定义头部   |
| `title`   | 仅标题区域   |
| `extra`   | 头部右侧操作 |
| `footer`  | 卡片底部     |
| `overlay` | 悬停覆层内容 |

### 示例

```vue
<CpCard title="系统信息"><p>内容</p></CpCard>
<CpCard variant="semi" shape="round">半透明卡片</CpCard>
<CpCard bg-color="linear-gradient(135deg, #1a1a2e, #2a2a4e)">渐变卡片</CpCard>
```

---

## CpImage 图片

赛博朋克风格图片展示组件。

### Props

| 属性            | 类型                                                       | 默认值    | 说明           |
| --------------- | ---------------------------------------------------------- | --------- | -------------- |
| `src`           | `string`                                                   | `''`      | 图片地址       |
| `alt`           | `string`                                                   | `''`      | 替代文本       |
| `fit`           | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` | 适应模式       |
| `shape`         | `'clip' \| 'no-clip' \| 'round' \| 'circle'`               | `'clip'`  | 形状           |
| `width`         | `string \| number`                                         | `''`      | 宽度           |
| `height`        | `string \| number`                                         | `''`      | 高度           |
| `lazy`          | `boolean`                                                  | `false`   | 懒加载         |
| `fallbackSrc`   | `string`                                                   | `''`      | 加载失败回退图 |
| `hoverable`     | `boolean`                                                  | `false`   | 悬停效果       |
| `hoverMode`     | `'scale' \| 'zoom'`                                        | `'scale'` | 悬停模式       |
| `hoverDuration` | `number \| string`                                         | `300`     | 悬停动画时长   |

### 示例

```vue
<CpImage src="/image.jpg" lazy />
<CpImage src="/image.jpg" hoverable hover-mode="zoom" />
<CpImage src="/avatar.jpg" shape="circle" :width="64" :height="64" />
```

---

## CpAvatar 头像

### Props

| 属性          | 类型                                             | 默认值     | 说明     |
| ------------- | ------------------------------------------------ | ---------- | -------- |
| `src`         | `string`                                         | `''`       | 图片地址 |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`     | 尺寸     |
| `shape`       | `'circle' \| 'square' \| 'clip'`                 | `'circle'` | 形状     |
| `fallbackSrc` | `string`                                         | `''`       | 回退图片 |

### 示例

```vue
<CpAvatar src="/avatar.jpg" />
<CpAvatar src="/avatar.jpg" size="xl" shape="clip" />
```

---

## CpProgress 进度条

赛博朋克风格进度展示。

### Props

| 属性            | 类型                                              | 默认值   | 说明       |
| --------------- | ------------------------------------------------- | -------- | ---------- |
| `percentage`    | `number`                                          | `0`      | 当前进度值 |
| `max`           | `number`                                          | `100`    | 最大值     |
| `type`          | `'line' \| 'circle' \| 'dashboard'`               | `'line'` | 进度条类型 |
| `size`          | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| number` | `'md'`   | 尺寸       |
| `shape`         | `'clip' \| 'no-clip' \| 'round'`                  | `'clip'` | 形状       |
| `status`        | `'success' \| 'warning' \| 'error'`               | -        | 状态       |
| `color`         | `string \| string[] \| ((percentage) => string)`  | `''`     | 自定义颜色 |
| `showText`      | `boolean`                                         | `true`   | 显示文字   |
| `textInside`    | `boolean`                                         | `false`  | 文字在内部 |
| `striped`       | `boolean`                                         | `false`  | 条纹效果   |
| `stripedFlow`   | `boolean`                                         | `false`  | 条纹流动   |
| `indeterminate` | `boolean`                                         | `false`  | 不确定进度 |
| `steps`         | `boolean`                                         | `false`  | 分段模式   |

### 示例

```vue
<CpProgress :percentage="60" />
<CpProgress type="circle" :percentage="75" />
<CpProgress :percentage="50" striped striped-flow />
<CpProgress indeterminate />
```

---

## CpPopover 气泡弹层

### Props

| 属性        | 类型                                            | 默认值    | 说明     |
| ----------- | ----------------------------------------------- | --------- | -------- |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| ...` | `'top'`   | 弹出位置 |
| `trigger`   | `'hover' \| 'click' \| 'focus' \| 'manual'`     | `'hover'` | 触发方式 |
| `content`   | `string`                                        | `''`      | 内容文本 |
| `title`     | `string`                                        | `''`      | 标题     |
| `disabled`  | `boolean`                                       | `false`   | 禁用     |
| `offset`    | `number`                                        | `8`       | 偏移距离 |
| `showArrow` | `boolean`                                       | `true`    | 显示箭头 |

### 示例

```vue
<CpPopover content="提示文本">
  <CpButton>悬停提示</CpButton>
</CpPopover>
```

---

## CpLoading 加载指示器

### Props

| 属性    | 类型                                       | 默认值      | 说明     |
| ------- | ------------------------------------------ | ----------- | -------- |
| `size`  | `'sm' \| 'md' \| 'lg' \| number \| string` | `'md'`      | 尺寸     |
| `type`  | `'spinner' \| 'dots' \| 'pulse'`           | `'spinner'` | 动画类型 |
| `color` | `string`                                   | `''`        | 颜色     |

### 示例

```vue
<CpLoading />
<CpLoading size="lg" type="dots" />
```

---

## CpStatusIndicator 状态指示器

### Props

| 属性    | 类型                                                       | 默认值      | 说明       |
| ------- | ---------------------------------------------------------- | ----------- | ---------- |
| `type`  | `'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 状态类型   |
| `size`  | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`      | 尺寸       |
| `pulse` | `boolean`                                                  | `false`     | 脉冲动画   |
| `color` | `string`                                                   | `''`        | 自定义颜色 |

### 示例

```vue
<CpStatusIndicator type="success" />
<CpStatusIndicator type="error" pulse />
```

---

## CpDialog 对话框

赛博朋克风格模态对话框，支持多种变体、形状、拖拽、嵌套和关闭前确认。

### 基础 Props

| 属性             | 类型                                                                    | 默认值      | 说明                      |
| ---------------- | ----------------------------------------------------------------------- | ----------- | ------------------------- |
| `v-model`        | `boolean`                                                               | `false`     | 是否显示                  |
| `title`          | `string`                                                                | `''`        | 标题                      |
| `width`          | `string \| number`                                                      | `'520px'`   | 宽度                      |
| `top`            | `string`                                                                | `'15vh'`    | 距顶部距离（非居中模式）  |
| `type`           | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 主题色                    |
| `variant`        | `'solid' \| 'semi' \| 'outline'`                                        | `'solid'`   | 变体                      |
| `shape`          | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`    | 形状                      |
| `color`          | `string`                                                                | `''`        | 自定义主色调（覆盖 type） |
| `fullscreen`     | `boolean`                                                               | `false`     | 全屏模式                  |
| `center`         | `boolean`                                                               | `false`     | 标题和 footer 居中        |
| `alignCenter`    | `boolean`                                                               | `true`      | 垂直居中                  |
| `zIndex`         | `number`                                                                | `2000`      | z-index                   |
| `destroyOnClose` | `boolean`                                                               | `false`     | 关闭时销毁 DOM            |

### 行为 Props

| 属性                | 类型                                | 默认值  | 说明                  |
| ------------------- | ----------------------------------- | ------- | --------------------- |
| `modal`             | `boolean`                           | `true`  | 是否显示遮罩          |
| `appendToBody`      | `boolean`                           | `true`  | 是否 Teleport 到 body |
| `closeOnClickModal` | `boolean`                           | `true`  | 点击遮罩关闭          |
| `closeOnEscape`     | `boolean`                           | `true`  | ESC 关闭              |
| `showClose`         | `boolean`                           | `true`  | 显示关闭按钮          |
| `beforeClose`       | `(done: (cancel?) => void) => void` | -       | 关闭前回调            |
| `draggable`         | `boolean`                           | `false` | 可拖拽移动            |
| `overflow`          | `boolean`                           | `false` | 拖拽允许超出视口      |
| `lockScroll`        | `boolean`                           | `true`  | 锁定页面滚动          |

### 内置按钮 Props

| 属性                | 类型      | 默认值   | 说明                              |
| ------------------- | --------- | -------- | --------------------------------- |
| `showConfirmButton` | `boolean` | `true`   | 显示确认按钮（无 #footer 时生效） |
| `showCancelButton`  | `boolean` | `true`   | 显示取消按钮（无 #footer 时生效） |
| `confirmText`       | `string`  | `'确认'` | 确认按钮文本                      |
| `cancelText`        | `string`  | `'取消'` | 取消按钮文本                      |

### 自定义颜色 Props

| 属性                 | 类型     | 说明           |
| -------------------- | -------- | -------------- |
| `bgColor`            | `string` | 背景颜色       |
| `borderColor`        | `string` | 边框颜色       |
| `titleColor`         | `string` | 标题文字颜色   |
| `textColor`          | `string` | 内容区文字颜色 |
| `overlayColor`       | `string` | 遮罩颜色       |
| `closeColor`         | `string` | 关闭按钮颜色   |
| `headerDividerColor` | `string` | 头部分隔线颜色 |
| `footerDividerColor` | `string` | 底部分隔线颜色 |

### 自定义 Class / Style Props

| 属性           | 类型              | 说明              |
| -------------- | ----------------- | ----------------- |
| `dialogClass`  | `string / object` | 面板自定义 class  |
| `headerClass`  | `string / object` | 头部自定义 class  |
| `bodyClass`    | `string / object` | 主体自定义 class  |
| `footerClass`  | `string / object` | 底部自定义 class  |
| `overlayClass` | `string / object` | 遮罩自定义 class  |
| `modalClass`   | `string`          | 遮罩追加 class    |
| `dialogStyle`  | `string / object` | 面板自定义 style  |
| `headerStyle`  | `string / object` | 头部自定义 style  |
| `bodyStyle`    | `string / object` | 主体自定义 style  |
| `footerStyle`  | `string / object` | 底部自定义 style  |
| `overlayStyle` | `string / object` | 遮罩自定义 style  |
| `headerBorder` | `boolean`         | 头部分隔线 (true) |
| `footerBorder` | `boolean`         | 底部分隔线 (true) |

### 事件

| 事件名              | 参数               | 说明         |
| ------------------- | ------------------ | ------------ |
| `update:modelValue` | `(value: boolean)` | v-model 绑定 |
| `open`              | -                  | 打开时       |
| `opened`            | -                  | 打开动画结束 |
| `close`             | -                  | 关闭时       |
| `closed`            | -                  | 关闭动画结束 |
| `confirm`           | -                  | 点击确认按钮 |
| `cancel`            | -                  | 点击取消按钮 |

### 插槽

| 名称      | 说明                                    |
| --------- | --------------------------------------- |
| `default` | 对话框主体内容                          |
| `header`  | 自定义整个头部（覆盖 title + 关闭按钮） |
| `title`   | 仅标题区域                              |
| `footer`  | 底部操作区域                            |

### 示例

```vue
<!-- 基础用法 -->
<CpDialog v-model="visible" title="系统通知">
  <p>内容</p>
</CpDialog>

<!-- 关闭前确认 -->
<CpDialog v-model="visible" :before-close="handleBeforeClose">
  <p>关闭前会触发确认</p>
</CpDialog>

<!-- 自定义颜色 -->
<CpDialog
  v-model="visible"
  title="自定义"
  color="#ff6ec7"
  bg-color="rgba(20,10,25,0.95)"
/>
```

---

## CpTree 树形控件

赛博朋克风格树组件，支持复选框、手风琴、过滤、连接线、自定义图标。

### 基础 Props

| 属性               | 类型                                                       | 默认值      | 说明                       |
| ------------------ | ---------------------------------------------------------- | ----------- | -------------------------- |
| `data`             | `TreeNodeData[]`                                           | `[]`        | 树数据源                   |
| `type`             | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 颜色变体                   |
| `color`            | `string`                                                   | `''`        | 自定义主题色（覆盖 type）  |
| `indent`           | `number`                                                   | `16`        | 缩进像素                   |
| `connectorLine`    | `boolean`                                                  | `true`      | 是否显示连接线             |
| `highlightCurrent` | `boolean`                                                  | `false`     | 高亮当前选中节点           |
| `accordion`        | `boolean`                                                  | `false`     | 手风琴模式（同级互斥展开） |

### 展开相关 Props

| 属性                  | 类型                   | 默认值  | 说明                    |
| --------------------- | ---------------------- | ------- | ----------------------- |
| `defaultExpandAll`    | `boolean`              | `false` | 默认展开所有节点        |
| `defaultExpandedKeys` | `(string \| number)[]` | `[]`    | 默认展开的节点 key 数组 |
| `expandedKeys`        | `(string \| number)[]` | -       | v-model 展开的节点 key  |

### 勾选相关 Props

| 属性                 | 类型                   | 默认值  | 说明                    |
| -------------------- | ---------------------- | ------- | ----------------------- |
| `showCheckbox`       | `boolean`              | `false` | 显示复选框              |
| `checkStrictly`      | `boolean`              | `false` | 严格模式（父子不级联）  |
| `defaultCheckedKeys` | `(string \| number)[]` | `[]`    | 默认勾选的节点 key 数组 |
| `checkedKeys`        | `(string \| number)[]` | -       | v-model 勾选的节点 key  |

### 自定义图标 Props

所有图标 prop 均支持两种形式：

- **`Component`**：统一图标
- **`(node: TreeNode) => Component`**：按节点返回不同图标

| 属性           | 类型                                         | 默认值 | 说明                                |
| -------------- | -------------------------------------------- | ------ | ----------------------------------- |
| `expandIcon`   | `Component \| (node) => Component`           | -      | 展开态图标（替代默认箭头）          |
| `collapseIcon` | `Component \| (node) => Component`           | -      | 收起态图标（不设则旋转 expandIcon） |
| `leafIcon`     | `Component \| (node) => Component`           | -      | 叶子节点图标                        |
| `nodeIcon`     | `Component \| (node) => Component \| string` | -      | 节点前缀图标（箭头后复选框前）      |
| `showNodeIcon` | `boolean`                                    | `true` | 自动读取 `data.icon` 字段           |

### TreeNodeData 数据结构

| 字段       | 类型                  | 说明                 |
| ---------- | --------------------- | -------------------- |
| `label`    | `string`              | 节点显示文本         |
| `value`    | `string \| number`    | 节点值（可选的 key） |
| `children` | `TreeNodeData[]`      | 子节点数组           |
| `disabled` | `boolean`             | 是否禁用             |
| `isLeaf`   | `boolean`             | 强制标记为叶子节点   |
| `icon`     | `Component \| string` | 节点图标（自动渲染） |

### 事件

| 事件名                | 参数                           | 说明       |
| --------------------- | ------------------------------ | ---------- |
| `node-click`          | `(data, node)`                 | 节点被点击 |
| `node-expand`         | `(data, node)`                 | 节点展开   |
| `node-collapse`       | `(data, node)`                 | 节点收起   |
| `check-change`        | `(data, checked)`              | 勾选变化   |
| `update:checkedKeys`  | `(keys: (string \| number)[])` | 勾选 keys  |
| `update:expandedKeys` | `(keys: (string \| number)[])` | 展开 keys  |

### 插槽

| 名称      | 作用域参数                 | 说明                |
| --------- | -------------------------- | ------------------- |
| `default` | `{ node, data }`           | 自定义节点内容      |
| `icon`    | `{ node, data, expanded }` | 自定义展开/叶子图标 |
| `empty`   | -                          | 空数据时的展示内容  |

### 示例

```vue
<!-- 基础用法 -->
<CpTree :data="treeData" default-expand-all />

<!-- 复选框 + 严格模式 -->
<CpTree :data="treeData" show-checkbox check-strictly />

<!-- 自定义图标（unplugin-icons） -->
<script setup>
import MdiFolder from "~icons/mdi/folder";
import MdiFile from "~icons/mdi/file-document";
const nodeIconFn = (node) => (node.isLeaf ? MdiFile : MdiFolder);
</script>
<CpTree :data="treeData" :node-icon="nodeIconFn" />

<!-- 数据驱动图标 -->
const data = [ { label: 'src', icon: markRaw(MdiFolder), children: [...] }, {
label: 'README.md', icon: markRaw(MdiFile) }, ]
<CpTree :data="data" />

<!-- 自定义颜色 -->
<CpTree :data="treeData" color="#ff6600" />
```

---

## CpNotification 通知提醒

赛博朋克风格通知提醒，从屏幕角落滑入显示，支持自动关闭。

### Props

| 属性                       | 类型                                                                    | 默认值        | 说明                      |
| -------------------------- | ----------------------------------------------------------------------- | ------------- | ------------------------- |
| `v-model`                  | `boolean`                                                               | `false`       | 是否显示                  |
| `title`                    | `string`                                                                | `''`          | 通知标题                  |
| `message`                  | `string`                                                                | `''`          | 消息文本                  |
| `type`                     | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'`   | 主题色                    |
| `variant`                  | `'solid' \| 'semi' \| 'outline'`                                        | `'solid'`     | 变体                      |
| `shape`                    | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`      | 形状                      |
| `position`                 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'`          | `'top-right'` | 弹出位置                  |
| `duration`                 | `number`                                                                | `4500`        | 自动关闭延迟 (ms)，0=不关 |
| `showClose`                | `boolean`                                                               | `true`        | 显示关闭按钮              |
| `offset`                   | `number`                                                                | `16`          | 距窗口边缘偏移 (px)       |
| `color`                    | `string`                                                                | `''`          | 自定义主色调（覆盖 type） |
| `bgColor`                  | `string`                                                                | `''`          | 自定义背景颜色            |
| `borderColor`              | `string`                                                                | `''`          | 自定义边框颜色            |
| `titleColor`               | `string`                                                                | `''`          | 标题文字颜色              |
| `textColor`                | `string`                                                                | `''`          | 消息文字颜色              |
| `zIndex`                   | `number`                                                                | `9999`        | z-index                   |
| `width`                    | `string \| number`                                                      | `'330px'`     | 通知宽度                  |
| `animationDuration`        | `number`                                                                | `300`         | 动画时长 (ms)             |
| `dangerouslyUseHTMLString` | `boolean`                                                               | `false`       | 将 message 作为 HTML 渲染 |

### 事件

| 事件名              | 参数               | 说明               |
| ------------------- | ------------------ | ------------------ |
| `update:modelValue` | `(value: boolean)` | v-model 绑定       |
| `close`             | -                  | 关闭时触发         |
| `destroy`           | -                  | 关闭动画结束时触发 |

### 插槽

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 自定义消息内容 |
| `title`   | 自定义标题     |
| `icon`    | 自定义图标     |

### 示例

```vue
<!-- 基础用法 -->
<CpNotification
  v-model="visible"
  title="系统通知"
  message="操作成功"
  type="success"
/>

<!-- 自定义位置与持续时间 -->
<CpNotification
  v-model="visible"
  title="警告"
  message="磁盘空间不足"
  type="warning"
  position="bottom-left"
  :duration="0"
/>

<!-- 自定义颜色 -->
<CpNotification
  v-model="visible"
  title="自定义"
  message="消息内容"
  color="#ff6ec7"
/>
```
