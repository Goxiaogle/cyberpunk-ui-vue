---
name: theming
description: Cyberpunk Vue 主题定制指南。包含颜色系统、CSS 变量和暗色/亮色模式切换。
---

# 主题定制指南

## 颜色系统

Cyberpunk Vue 采用赛博朋克风格的霓虹配色系统。

### 核心色彩

| 名称    | CSS 变量             | 色值      | 用途               |
| ------- | -------------------- | --------- | ------------------ |
| Primary | `--cp-color-primary` | `#00f0ff` | 主色调（赛博青）   |
| Success | `--cp-color-success` | `#39ff14` | 成功状态（霓虹绿） |
| Warning | `--cp-color-warning` | `#ff9f1c` | 警告状态（橙黄）   |
| Error   | `--cp-color-error`   | `#ff0055` | 错误状态（洋红）   |
| Info    | `--cp-color-info`    | `#7b68ee` | 信息状态（紫罗兰） |

### 派生变量

每个核心色都有自动生成的派生变量：

```css
--cp-color-primary        /* 主色 #00f0ff */
--cp-color-primary-light  /* 浅色 rgba(0, 240, 255, 0.2) */
--cp-color-primary-dark   /* 深色 (降低15%亮度) */
```

### 中性色

| CSS 变量              | 默认值    | 用途     |
| --------------------- | --------- | -------- |
| `--cp-bg-deep`        | `#0a0a0e` | 最深背景 |
| `--cp-bg-base`        | `#101014` | 基础背景 |
| `--cp-bg-elevated`    | `#18181c` | 抬升背景 |
| `--cp-border`         | `#282830` | 边框颜色 |
| `--cp-text-primary`   | `#ffffff` | 主要文字 |
| `--cp-text-secondary` | `#a0a0b0` | 次要文字 |
| `--cp-text-muted`     | `#606070` | 辅助文字 |

---

## 自定义主题色

### 方式一：CSS 变量覆盖

在应用的全局 CSS 中覆盖变量：

```css
:root {
  /* 更换主色调为紫色 */
  --cp-color-primary: #9945ff;
  --cp-color-primary-light: rgba(153, 69, 255, 0.2);
  --cp-color-primary-dark: #7a36cc;

  /* 更换背景色 */
  --cp-bg-base: #0d0d1a;
}
```

### 方式二：组件级自定义

每个组件都支持 `color` prop 进行单独定制：

```vue
<!-- 使用组件 color prop -->
<CpButton color="#ff00ff">自定义按钮</CpButton>
<CpProgress :percentage="50" color="#9945ff" />
<CpSwitch v-model="enabled" color="#39ff14" />
<CpTree :data="treeData" color="#ff6600" />
```

### 方式三：渐变色

Card 等容器组件支持渐变背景：

```vue
<CpCard bg-color="linear-gradient(135deg, #1a1a2e, #2a2a4e)">
  渐变背景卡片
</CpCard>
```

---

## 暗色/亮色模式

### 切换主题

在 `<html>` 或根元素添加 `data-theme` 属性：

```html
<!-- 暗色模式 (默认) -->
<html data-theme="dark">
  <!-- 亮色模式 -->
  <html data-theme="light"></html>
</html>
```

### JavaScript 切换

```ts
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "light" ? "dark" : "light");
}
```

### 亮色模式变量

亮色模式下自动覆盖中性色：

| CSS 变量              | 暗色      | 亮色      |
| --------------------- | --------- | --------- |
| `--cp-bg-deep`        | `#0a0a0e` | `#f5f5f8` |
| `--cp-bg-base`        | `#101014` | `#ffffff` |
| `--cp-bg-elevated`    | `#18181c` | `#fafafa` |
| `--cp-border`         | `#282830` | `#e0e0e8` |
| `--cp-text-primary`   | `#ffffff` | `#1a1a24` |
| `--cp-text-secondary` | `#a0a0b0` | `#606070` |
| `--cp-text-muted`     | `#606070` | `#a0a0b0` |

---

## 特效变量

| CSS 变量                 | 值                                                                         | 用途         |
| ------------------------ | -------------------------------------------------------------------------- | ------------ |
| `--cp-glow-primary`      | `0 0 10px var(--cp-color-primary), 0 0 20px var(--cp-color-primary-light)` | 霓虹发光效果 |
| `--cp-transition-fast`   | `0.15s ease`                                                               | 快速过渡     |
| `--cp-transition-normal` | `0.25s ease`                                                               | 普通过渡     |

### 使用发光效果

```css
.my-element {
  box-shadow: var(--cp-glow-primary);
}
```

---

## 尺寸与间距变量

### 尺寸

| CSS 变量       | 值     |
| -------------- | ------ |
| `--cp-size-sm` | `28px` |
| `--cp-size-md` | `36px` |
| `--cp-size-lg` | `44px` |

### 字体尺寸

| CSS 变量            | 值     |
| ------------------- | ------ |
| `--cp-font-size-sm` | `12px` |
| `--cp-font-size-md` | `14px` |
| `--cp-font-size-lg` | `16px` |

### 字体族与可变字重

组件库统一通过字体 token 控制字体族和字重；默认仅使用回退栈，不强制注入本地字体资源。

如需启用内置本地可变字体（Inter + Noto Sans SC）：

```ts
import "cyberpunk-ui-vue/styles/index.css";
import "cyberpunk-ui-vue/styles/fonts.css"; // 可选
```

| CSS 变量                               | 默认值 |
| -------------------------------------- | ------ |
| `--cp-font-family-ui`                  | `Inter Variable, Inter, Noto Sans SC Variable, Source Han Sans VF, Source Han Sans SC, Alibaba PuHuiTi 3.0, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Segoe UI, Helvetica Neue, Arial, sans-serif` |
| `--cp-font-family-display`             | `Orbitron, Eurostile, BankGothic, Inter Variable, Inter, Noto Sans SC Variable, Source Han Sans VF, Source Han Sans SC, Alibaba PuHuiTi 3.0, sans-serif` |
| `--cp-font-family-mono`                | `JetBrains Mono, Cascadia Code, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace` |
| `--cp-font-weight-light`               | `350` |
| `--cp-font-weight-normal`              | `450` |
| `--cp-font-weight-medium`              | `520` |
| `--cp-font-weight-semibold`            | `620` |
| `--cp-font-weight-bold`                | `700` |
| `--cp-font-weight-transition-fast`     | `0.2s cubic-bezier(0.22, 1, 0.36, 1)` |
| `--cp-font-weight-transition-normal`   | `0.25s cubic-bezier(0.22, 1, 0.36, 1)` |

### 间距

| CSS 变量          | 值     |
| ----------------- | ------ |
| `--cp-spacing-xs` | `4px`  |
| `--cp-spacing-sm` | `8px`  |
| `--cp-spacing-md` | `12px` |
| `--cp-spacing-lg` | `16px` |
| `--cp-spacing-xl` | `24px` |

### 圆角

| CSS 变量         | 值    |
| ---------------- | ----- |
| `--cp-radius-sm` | `4px` |
| `--cp-radius-md` | `6px` |
| `--cp-radius-lg` | `8px` |

---

## 全局配置提供者

使用 `CpConfigProvider` 为子组件提供默认配置：

```vue
<template>
  <CpConfigProvider :defaults="{ size: 'lg', shape: 'round' }">
    <!-- 所有子组件默认使用 size="lg" shape="round" -->
    <CpButton>大按钮</CpButton>
    <CpInput placeholder="大输入框" />
  </CpConfigProvider>
</template>
```

### 可配置属性

- `size` - 默认尺寸
- `shape` - 默认形状
- `type` - 默认颜色类型
- `variant` - 默认变体

---

## 完整主题定制示例

```css
/* 自定义赛博朋克紫色主题 */
:root {
  /* 主色调改为紫色 */
  --cp-color-primary: #9945ff;
  --cp-color-primary-light: rgba(153, 69, 255, 0.2);
  --cp-color-primary-dark: #7a36cc;

  /* 保持其他颜色 */
  --cp-color-success: #39ff14;
  --cp-color-warning: #ff9f1c;
  --cp-color-error: #ff0055;
  --cp-color-info: #7b68ee;

  /* 调整背景色 */
  --cp-bg-deep: #050510;
  --cp-bg-base: #0a0a18;
  --cp-bg-elevated: #12122a;

  /* 自定义发光效果 */
  --cp-glow-primary:
    0 0 10px var(--cp-color-primary), 0 0 20px var(--cp-color-primary-light),
    0 0 30px var(--cp-color-primary-light);
}
```
