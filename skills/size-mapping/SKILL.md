---
name: size-mapping
description: Cyberpunk Vue 尺寸系统详解。包含 Size 预设映射值和自定义尺寸用法。
---

# 尺寸系统指南

## 通用尺寸类型

大多数组件的 `size` 属性接受以下类型：

```typescript
type Size = "sm" | "md" | "lg" | number | string;
```

- **预设值**: `'sm'`、`'md'`、`'lg'`
- **数值**: 直接传入数字，单位为像素 (px)
- **字符串**: 带单位的 CSS 值，如 `'2rem'`、`'50px'`

---

## 预设尺寸映射表

### 通用组件 (Button, Input, Dropdown, Tag 等)

| 预设 | 高度 | 字体 | 适用场景             |
| ---- | ---- | ---- | -------------------- |
| `sm` | 28px | 12px | 紧凑界面、表格内按钮 |
| `md` | 36px | 14px | 默认尺寸，常规界面   |
| `lg` | 44px | 16px | 强调元素、标题级按钮 |

### Avatar 头像

| 预设 | 尺寸        |
| ---- | ----------- |
| `xs` | 24px        |
| `sm` | 32px        |
| `md` | 40px (默认) |
| `lg` | 48px        |
| `xl` | 64px        |

### Progress 进度条

| 预设  | 轨道高度   |
| ----- | ---------- |
| `sm`  | 6px        |
| `md`  | 8px (默认) |
| `lg`  | 10px       |
| `xl`  | 14px       |
| `xxl` | 18px       |

### Switch 开关

| 预设 | 高度        |
| ---- | ----------- |
| `sm` | 16px        |
| `md` | 20px (默认) |
| `lg` | 24px        |

### Slider 滑块

| 预设 | 轨道高度   |
| ---- | ---------- |
| `sm` | 4px        |
| `md` | 6px (默认) |
| `lg` | 8px        |

### Checkbox 复选框

| 预设 | 指示器 | 字体        |
| ---- | ------ | ----------- |
| `sm` | 14px   | 12px        |
| `md` | 18px   | 14px (默认) |
| `lg` | 22px   | 16px        |

### Radio 单选框

| 预设 | 指示器 | 菱形内点 | 字体        |
| ---- | ------ | -------- | ----------- |
| `sm` | 14px   | 6px      | 12px        |
| `md` | 18px   | 8px      | 14px (默认) |
| `lg` | 22px   | 10px     | 16px        |

---

## 使用示例

### 使用预设值

```vue
<CpButton size="sm">小按钮</CpButton>
<CpButton size="md">中按钮</CpButton>
<CpButton size="lg">大按钮</CpButton>
```

### 使用数值 (像素)

```vue
<!-- 自定义高度 48px 的按钮 -->
<CpButton :size="48">自定义大小</CpButton>

<!-- 自定义 80px 头像 -->
<CpAvatar :size="80" src="/avatar.jpg" />

<!-- 自定义进度条轨道宽度 -->
<CpProgress :percentage="50" :size="12" />
```

### 使用 CSS 字符串

```vue
<!-- 使用 rem 单位 -->
<CpButton size="3rem">相对大小</CpButton>

<!-- 使用 em 单位 -->
<CpAvatar size="4em" src="/avatar.jpg" />
```

---

## 形状系统 (Shape)

大多数组件支持 `shape` 属性控制外形：

| 值        | 说明            | 视觉效果                    |
| --------- | --------------- | --------------------------- |
| `clip`    | 机甲切角 (默认) | 赛博朋克特色斜切边角        |
| `no-clip` | 直角矩形        | 标准方正外形                |
| `round`   | 圆角矩形        | 柔和圆角                    |
| `circle`  | 圆形/胶囊       | 完全圆角 (适用于按钮和图片) |

### 示例

```vue
<!-- 切角按钮 (默认) -->
<CpButton shape="clip">机甲风格</CpButton>

<!-- 直角按钮 -->
<CpButton shape="no-clip">标准按钮</CpButton>

<!-- 圆角按钮 -->
<CpButton shape="round">柔和按钮</CpButton>

<!-- 胶囊/圆形按钮 -->
<CpButton shape="circle">胶囊按钮</CpButton>
<CpButton shape="circle" :icon="IconSettings" />
```

---

## 变体系统 (Variant)

多数组件支持 `variant` 属性控制视觉风格：

### Button 变体

| 值        | 说明                          |
| --------- | ----------------------------- |
| `solid`   | 实心填充 (默认)，最强视觉权重 |
| `outline` | 边框样式，次级操作            |
| `ghost`   | 透明背景，悬停显示            |
| `neon`    | 霓虹发光，高亮操作            |
| `semi`    | 半透明背景，柔和风格          |

### Card 变体

| 值        | 说明             |
| --------- | ---------------- |
| `solid`   | 实心背景 (默认)  |
| `outline` | 边框样式         |
| `semi`    | 半透明毛玻璃效果 |
| `ghost`   | 透明背景         |

### Tag 变体

| 值        | 说明            |
| --------- | --------------- |
| `solid`   | 实心填充 (默认) |
| `outline` | 边框描边        |
| `semi`    | 半透明填充      |
| `note`    | 便利贴风格      |

### Input 变体

| 值        | 说明            |
| --------- | --------------- |
| `outline` | 边框样式 (默认) |
| `filled`  | 带背景填充      |
| `ghost`   | 无边框无背景    |

---

## 颜色类型 (Type)

统一的颜色类型系统：

| 值        | 色值      | 含义      |
| --------- | --------- | --------- |
| `default` | 中性色    | 默认状态  |
| `primary` | `#00f0ff` | 主要操作  |
| `success` | `#39ff14` | 成功/确认 |
| `warning` | `#ff9f1c` | 警告/注意 |
| `error`   | `#ff0055` | 错误/危险 |
| `info`    | `#7b68ee` | 信息提示  |

### 颜色优先级

当同时使用 `type` 和 `color` 属性时：

**`color` > `type` > 默认值**

```vue
<!-- 使用 type 预设色 -->
<CpButton type="primary">主要按钮</CpButton>

<!-- color 覆盖 type -->
<CpButton type="primary" color="#ff00ff">紫色按钮</CpButton>
```

---

## 时长/动画参数

部分组件支持动画时长配置：

### 时长类型

```typescript
type DurationValue = number | string;
```

- **数值**: 毫秒 (ms)，如 `300` = 300ms
- **字符串**: 带单位，如 `'0.3s'` 或 `'300ms'`

### 支持时长的属性

| 组件     | 属性                    | 默认值 |
| -------- | ----------------------- | ------ |
| Card     | `overlayDuration`       | 300    |
| Card     | `dimmedDuration`        | 300    |
| Image    | `hoverDuration`         | 300    |
| Progress | `duration` (不确定模式) | 3000   |

### 示例

```vue
<!-- 毫秒数值 -->
<CpCard :overlay-duration="500">...</CpCard>

<!-- 带单位字符串 -->
<CpCard overlay-duration="0.5s">...</CpCard>
<CpImage :hover-duration="200" hoverable />
```

---

## 全局默认配置

使用 `CpConfigProvider` 批量设置默认值：

```vue
<template>
  <CpConfigProvider :defaults="globalDefaults">
    <CpButton>使用全局配置</CpButton>
    <CpInput placeholder="使用全局配置" />
  </CpConfigProvider>
</template>

<script setup>
const globalDefaults = {
  size: "lg", // 所有组件默认大尺寸
  shape: "round", // 所有组件默认圆角
  type: "primary", // 所有组件默认主色
};
</script>
```
