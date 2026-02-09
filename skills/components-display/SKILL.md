---
name: components-display
description: 展示与反馈组件的详细属性参考：Card、Image、Avatar、Progress、Loading、StatusIndicator、Popover。
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
