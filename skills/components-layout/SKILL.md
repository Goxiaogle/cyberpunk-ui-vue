---
name: components-layout
description: 布局组件的详细属性参考：Container、Header、Footer、Main、Aside、Row、Col。
---

# 布局组件属性参考

## 页面容器组件

### CpContainer 布局容器

赛博朋克风格页面布局容器。当子元素包含 CpHeader 或 CpFooter 时自动切换为垂直排列。

#### Props

| 属性        | 类型                         | 默认值 | 说明                                 |
| ----------- | ---------------------------- | ------ | ------------------------------------ |
| `direction` | `'horizontal' \| 'vertical'` | `''`   | 排列方向，不设置时根据子元素自动判断 |

#### CSS 变量

| 变量                       | 默认值                         | 说明                   |
| -------------------------- | ------------------------------ | ---------------------- |
| `--cp-layout-border-color` | `var(--cp-border, #282830)`    | 全局分割线边框颜色     |
| `--cp-layout-glow-color`   | `var(--cp-color-primary, ...)` | 全局发光线颜色（保留） |

> [!TIP]
> 在 `CpContainer` 层设置这些变量，会影响所有子级 Header/Footer/Aside 的分割线样式。

#### 行为说明

- 默认水平排列（`flex-direction: row`）
- 当子元素包含 `CpHeader` 或 `CpFooter` 时，自动切换为垂直排列
- 支持嵌套使用：外层垂直（含 Header/Footer），内层水平（含 Aside + Main）

#### 插槽

| 名称      | 说明                                                  |
| --------- | ----------------------------------------------------- |
| `default` | 容器内容（CpHeader / CpFooter / CpMain / CpAside 等） |

#### 示例

```vue
<!-- 基础垂直布局 -->
<CpContainer>
  <CpHeader>头部</CpHeader>
  <CpMain>主内容</CpMain>
  <CpFooter>底部</CpFooter>
</CpContainer>

<!-- 侧边栏布局（嵌套） -->
<CpContainer>
  <CpHeader>头部</CpHeader>
  <CpContainer>
    <CpAside width="220px">侧边栏</CpAside>
    <CpMain>主内容</CpMain>
  </CpContainer>
  <CpFooter>底部</CpFooter>
</CpContainer>
```

---

### CpHeader 顶栏容器

顶部容器，底部嵌入 CpDivider 作为分割线装饰。支持通过 divider props 控制分割线样式。

#### Props

| 属性             | 类型                                                                    | 默认值      | 说明               |
| ---------------- | ----------------------------------------------------------------------- | ----------- | ------------------ |
| `height`         | `string`                                                                | `'60px'`    | 顶栏高度           |
| `divider`        | `boolean`                                                               | `true`      | 是否显示分割线     |
| `dividerType`    | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 分割线颜色类型预设 |
| `dividerColor`   | `string`                                                                | `''`        | 自定义分割线颜色   |
| `dividerVariant` | `'solid' \| 'gradient' \| 'glow'`                                       | `'solid'`   | 分割线变体         |

#### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 顶栏内容 |

#### 示例

```vue
<!-- 默认分割线 -->
<CpHeader>Logo / 导航</CpHeader>

<!-- 主色发光分割线 -->
<CpHeader divider-type="primary" divider-variant="glow">
  <span>◆ CONTROL PANEL</span>
</CpHeader>

<!-- 自定义颜色渐变分割线 -->
<CpHeader divider-color="#ff0055" divider-variant="gradient">
  <span>⚠ ALERT MODE</span>
</CpHeader>

<!-- 隐藏分割线 -->
<CpHeader :divider="false">
  <span>◆ NO DIVIDER</span>
</CpHeader>
```

---

### CpFooter 底栏容器

底部容器，顶部嵌入 CpDivider 作为分割线装饰。支持通过 divider props 控制分割线样式。

#### Props

| 属性             | 类型                                                                    | 默认值      | 说明               |
| ---------------- | ----------------------------------------------------------------------- | ----------- | ------------------ |
| `height`         | `string`                                                                | `'60px'`    | 底栏高度           |
| `divider`        | `boolean`                                                               | `true`      | 是否显示分割线     |
| `dividerType`    | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 分割线颜色类型预设 |
| `dividerColor`   | `string`                                                                | `''`        | 自定义分割线颜色   |
| `dividerVariant` | `'solid' \| 'gradient' \| 'glow'`                                       | `'solid'`   | 分割线变体         |

#### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 底栏内容 |

---

### CpMain 主要区域

主内容区域，自动填充剩余空间，支持滚动。

#### Props

无。

#### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 主要内容 |

---

### CpAside 侧边栏

侧边栏容器，边缘嵌入垂直 CpDivider 作为分割线装饰。支持左右位置切换和分割线样式定制。

#### Props

| 属性             | 类型                                                                    | 默认值      | 说明                       |
| ---------------- | ----------------------------------------------------------------------- | ----------- | -------------------------- |
| `width`          | `string`                                                                | `'300px'`   | 侧边栏宽度                 |
| `position`       | `'left' \| 'right'`                                                     | `'left'`    | 侧边栏位置，控制分割线方向 |
| `divider`        | `boolean`                                                               | `true`      | 是否显示分割线             |
| `dividerType`    | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 分割线颜色类型预设         |
| `dividerColor`   | `string`                                                                | `''`        | 自定义分割线颜色           |
| `dividerVariant` | `'solid' \| 'gradient' \| 'glow'`                                       | `'solid'`   | 分割线变体                 |

#### CSS 变量

| 变量                 | 默认值 | 说明               |
| -------------------- | ------ | ------------------ |
| `--cp-aside-padding` | `0`    | 侧边栏内容区内边距 |

#### 行为说明

- `position="left"`（默认）：CpDivider 渲染在右侧
- `position="right"`：CpDivider 渲染在左侧
- 右侧边栏需将 `CpAside` 放在 `CpMain` 之后
- 内部 `__inner` 包裹层默认启用 `justify-content: center`（垂直居中）

#### 插槽

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 侧边栏内容 |

#### 示例

```vue
<!-- 左侧边栏（默认） -->
<CpContainer>
  <CpAside width="220px">导航菜单</CpAside>
  <CpMain>主内容</CpMain>
</CpContainer>

<!-- 右侧边栏 + 发光分割线 -->
<CpContainer>
  <CpMain>主内容</CpMain>
  <CpAside width="240px" position="right" divider-variant="glow" divider-type="primary">
    信息面板
  </CpAside>
</CpContainer>
```

---

## 栅格系统

### CpRow 行容器

Flex 行容器，配合 CpCol 实现 24 栅格布局系统。

#### Props

| 属性      | 类型                                                                                  | 默认值    | 说明           |
| --------- | ------------------------------------------------------------------------------------- | --------- | -------------- |
| `gutter`  | `number`                                                                              | `0`       | 栅格间隔 (px)  |
| `justify` | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` | 水平排列方式   |
| `align`   | `'top' \| 'middle' \| 'bottom'`                                                       | `'top'`   | 垂直对齐方式   |
| `tag`     | `string`                                                                              | `'div'`   | 自定义元素标签 |
| `wrap`    | `boolean`                                                                             | `true`    | 是否自动换行   |

#### 插槽

| 名称      | 说明                 |
| --------- | -------------------- |
| `default` | 行内容（CpCol 组合） |

---

### CpCol 列容器

24 栅格列组件，配合 CpRow 使用。

#### Props

| 属性     | 类型     | 默认值  | 说明                  |
| -------- | -------- | ------- | --------------------- |
| `span`   | `number` | `24`    | 栅格占据的列数 (0-24) |
| `offset` | `number` | `0`     | 栅格左侧偏移列数      |
| `push`   | `number` | `0`     | 栅格向右移动列数      |
| `pull`   | `number` | `0`     | 栅格向左移动列数      |
| `tag`    | `string` | `'div'` | 自定义元素标签        |

#### 插槽

| 名称      | 说明   |
| --------- | ------ |
| `default` | 列内容 |

#### 示例

```vue
<CpRow :gutter="16">
  <CpCol :span="8">1/3</CpCol>
  <CpCol :span="8">1/3</CpCol>
  <CpCol :span="8">1/3</CpCol>
</CpRow>

<!-- 偏移 -->
<CpRow>
  <CpCol :span="6">span-6</CpCol>
  <CpCol :span="6" :offset="6">span-6, offset-6</CpCol>
</CpRow>

<!-- 对齐 -->
<CpRow justify="center" align="middle">
  <CpCol :span="4">居中</CpCol>
  <CpCol :span="4">居中</CpCol>
</CpRow>
```

---

## CpPatternBackground 图案背景

装饰性背景组件，用于渲染网格、棋盘格、点阵、条纹、十字线等图案。

### Props

| 属性              | 类型                                                                    | 默认值          | 说明                           |
| ----------------- | ----------------------------------------------------------------------- | --------------- | ------------------------------ |
| `pattern`         | `'grid' \| 'checkerboard' \| 'dots' \| 'stripes' \| 'cross'`            | `'grid'`        | 图案类型                       |
| `size`            | `number \| string`                                                      | `20`            | 图案尺寸                       |
| `color`           | `string`                                                                | `'currentColor'` | 图案颜色                      |
| `backgroundColor` | `string`                                                                | `'transparent'` | 背景色                         |
| `direction`       | `'horizontal' \| 'vertical' \| 'diagonal' \| 'diagonal-reverse'`        | `'diagonal'`    | 图案方向                       |
| `opacity`         | `number`                                                                | `1`             | 图案透明度                     |
| `lineWidth`       | `number \| string`                                                      | `1`             | 线条粗细                       |
| `dotScale`        | `number`                                                                | `0.1`           | 点阵大小比例                   |
| `cover`           | `boolean`                                                               | `false`         | 是否绝对定位覆盖整个父容器     |
| `decorative`      | `boolean`                                                               | `true`          | 是否禁用鼠标事件，作为纯装饰层 |

### 示例

```vue
<CpPatternBackground pattern="grid" color="var(--cp-color-primary)" />
<CpPatternBackground pattern="checkerboard" :size="20" />
<CpPatternBackground pattern="dots" cover decorative :opacity="0.1" />
```
