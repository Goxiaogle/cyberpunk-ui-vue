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

| 组件        | 说明                       |
| ----------- | -------------------------- |
| `CpButton`  | 按钮，支持多种变体和图标   |
| `CpIcon`    | 图标显示                   |
| `CpText`    | 文本排版                   |
| `CpTag`     | 标签/徽章                  |
| `CpBadge`   | 徽章/角标，数字或小红点    |
| `CpSpacer`  | 弹性间距占位               |
| `CpDivider` | 分割线，支持文字嵌入和发光 |

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

### 数据展示

| 组件     | 说明                               |
| -------- | ---------------------------------- |
| `CpTree` | 树形控件，支持勾选/过滤/自定义图标 |

### 反馈与状态

| 组件                | 说明                       |
| ------------------- | -------------------------- |
| `CpDialog`          | 模态对话框，支持拖拽/嵌套  |
| `CpNotification`    | 通知提醒，四角定位自动关闭 |
| `CpLoading`         | 加载指示器                 |
| `CpProgress`        | 进度条（线性/环形/仪表盘） |
| `CpStatusIndicator` | 状态点                     |
| `CpPopover`         | 气泡弹出层                 |

### 导航

| 组件              | 说明                         |
| ----------------- | ---------------------------- |
| `CpMenu`          | 导航菜单，水平/垂直/折叠     |
| `CpMenuItem`      | 菜单项，支持 icon/route      |
| `CpSubMenu`       | 子菜单，hover/click 展开     |
| `CpMenuItemGroup` | 菜单分组                     |
| `CpMenuNav`       | 数据驱动菜单 (MenuNavItem[]) |

### 容器

| 组件                  | 说明           |
| --------------------- | -------------- |
| `CpCard`              | 卡片容器       |
| `CpPatternBackground` | 动画图案背景   |
| `CpConfigProvider`    | 全局配置提供者 |

### 布局

| 组件          | 说明                       |
| ------------- | -------------------------- |
| `CpContainer` | 布局容器，自动检测子组件   |
| `CpHeader`    | 顶栏容器                   |
| `CpFooter`    | 底栏容器                   |
| `CpMain`      | 主要区域                   |
| `CpAside`     | 侧边栏，支持 position 属性 |
| `CpRow`       | Flex 行容器                |
| `CpCol`       | Flex 列容器                |

---

## 相关技能文档

请根据需要查阅以下专项文档：

- [基础组件参数](./components-basic/SKILL.md) - Button、Tag、Badge 的完整 Props
- [表单组件参数](./components-form/SKILL.md) - Input、Switch、Slider、Dropdown、Checkbox、Radio 的完整 Props
- [展示与反馈组件参数](./components-display/SKILL.md) - Card、Image、Avatar、Progress、Popover、Tree、Dialog、Notification 等的完整 Props
- [导航组件参数](./components-navigation/SKILL.md) - Menu、MenuItem、SubMenu、MenuItemGroup、MenuNav 的完整 Props
- [主题定制](./theming/SKILL.md) - CSS 变量和主题配置
- [尺寸映射](./size-mapping/SKILL.md) - Size 预设值和自定义尺寸
