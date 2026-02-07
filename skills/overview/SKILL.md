---
name: overview
description: Cyberpunk Vue 组件库快速入门和使用指南。
---

# Cyberpunk Vue 组件库使用指南

## 引入样式

```ts
// main.ts
import "@cyberpunk-vue/theme-chalk/src/index.scss";
```

## 全局注册

```ts
import { createApp } from "vue";
import CyberpunkVue from "@cyberpunk-vue/components";
import "@cyberpunk-vue/theme-chalk/src/index.scss";

const app = createApp(App);
app.use(CyberpunkVue);
app.mount("#app");
```

## 按需导入

```vue
<script setup lang="ts">
import { CpButton, CpCard, CpInput } from "@cyberpunk-vue/components";
</script>

<template>
  <CpCard title="登录">
    <CpInput v-model="username" placeholder="用户名" />
    <CpButton type="primary">登录</CpButton>
  </CpCard>
</template>
```

---

## 组件分类

### 基础组件

| 组件       | 说明                     |
| ---------- | ------------------------ |
| `CpButton` | 按钮，支持多种变体和图标 |
| `CpIcon`   | 图标显示                 |
| `CpText`   | 文本排版                 |
| `CpTag`    | 标签/徽章                |
| `CpBadge`  | 徽章/角标，数字或小红点  |
| `CpSpacer` | 弹性间距占位             |

### 表单输入

| 组件                             | 说明         |
| -------------------------------- | ------------ |
| `CpInput`                        | 单行文本输入 |
| `CpInputNumber`                  | 数值输入     |
| `CpTextarea`                     | 多行文本输入 |
| `CpSwitch`                       | 开关切换     |
| `CpSlider`                       | 滑块选择器   |
| `CpDropdown`                     | 下拉选择器   |
| `CpCheckbox` / `CpCheckboxGroup` | 复选框       |
| `CpRadio` / `CpRadioGroup`       | 单选框       |

### 媒体展示

| 组件       | 说明                            |
| ---------- | ------------------------------- |
| `CpImage`  | 图片展示，支持懒加载和hover效果 |
| `CpAvatar` | 用户头像                        |

### 反馈与状态

| 组件                | 说明                       |
| ------------------- | -------------------------- |
| `CpLoading`         | 加载指示器                 |
| `CpProgress`        | 进度条（线性/环形/仪表盘） |
| `CpStatusIndicator` | 状态点                     |
| `CpPopover`         | 气泡弹出层                 |

### 容器

| 组件                  | 说明           |
| --------------------- | -------------- |
| `CpCard`              | 卡片容器       |
| `CpPatternBackground` | 动画图案背景   |
| `CpConfigProvider`    | 全局配置提供者 |

---

## 相关技能文档

请根据需要查阅以下专项文档：

- [组件详细参数](./components-props/SKILL.md) - 每个组件的完整 Props 列表
- [主题定制](./theming/SKILL.md) - CSS 变量和主题配置
- [尺寸映射](./size-mapping/SKILL.md) - Size 预设值和自定义尺寸
