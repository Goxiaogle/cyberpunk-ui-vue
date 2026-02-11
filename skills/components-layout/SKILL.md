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

顶部容器，带赛博朋克底边发光线装饰。

#### Props

| 属性     | 类型     | 默认值   | 说明     |
| -------- | -------- | -------- | -------- |
| `height` | `string` | `'60px'` | 顶栏高度 |

#### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 顶栏内容 |

---

### CpFooter 底栏容器

底部容器，带赛博朋克顶边发光线装饰。

#### Props

| 属性     | 类型     | 默认值   | 说明     |
| -------- | -------- | -------- | -------- |
| `height` | `string` | `'60px'` | 底栏高度 |

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

侧边栏容器，带赛博朋克边缘发光线装饰。支持左右位置切换。

#### Props

| 属性       | 类型                | 默认值    | 说明                               |
| ---------- | ------------------- | --------- | ---------------------------------- |
| `width`    | `string`            | `'300px'` | 侧边栏宽度                         |
| `position` | `'left' \| 'right'` | `'left'`  | 侧边栏位置，控制分割线和发光线方向 |

#### 行为说明

- `position="left"`（默认）：分割线和发光装饰在右侧
- `position="right"`：分割线和发光装饰在左侧
- 右侧边栏需将 `CpAside` 放在 `CpMain` 之后

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

<!-- 右侧边栏 -->
<CpContainer>
  <CpMain>主内容</CpMain>
  <CpAside width="240px" position="right">信息面板</CpAside>
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
