# Cyberpunk Vue

<p align="center">
  <strong>🎮 赛博朋克风格 Vue 3 组件库 — 未来感 UI 框架</strong>
</p>

<p align="center">
  <a href="#-安装">安装</a> •
  <a href="#-使用">使用</a> •
  <a href="#-组件列表">组件</a> •
  <a href="#-主题定制">主题</a> •
  <a href="#-ai-skill-文档">AI SKILL</a> •
  <a href="./README.en.md">English</a>
</p>

---

> [!IMPORTANT]
> 🤖 **本组件库绝大部分由 AI 完成开发**，同时也是一个**面向 AI 开发使用**的组件库。项目内置了完善的 [SKILL.md](./skills/overview/SKILL.md) 文档体系，方便 AI Agent 快速理解和使用本库进行开发。

---

## ✨ 特性

- 🚀 **Vue 3.5+ Vapor Mode Ready** — 面向最高性能构建
- 🎨 **赛博朋克美学** — 霓虹色彩、故障效果、未来感设计
- 📦 **Tree-shakable** — 按需引入，只打包你使用的组件
- 🔧 **TypeScript First** — 完整类型定义
- 🎭 **可定制主题** — 通过 CSS 变量轻松切换主题
- 📱 **响应式** — 移动端友好
- 🤖 **AI 友好** — 内置 SKILL.md，AI Agent 可直接阅读并使用

## 📦 安装

```bash
# npm
npm install cyberpunk-ui-vue

# pnpm
pnpm add cyberpunk-ui-vue

# yarn
yarn add cyberpunk-ui-vue
```

## 🚀 使用

### 全局注册

```ts
import { createApp } from "vue";
import CyberpunkVue from "cyberpunk-ui-vue";
import "cyberpunk-ui-vue/styles/index.css";

const app = createApp(App);
app.use(CyberpunkVue);
app.mount("#app");
```

### 模板智能提示（推荐）

在项目的 `src/env.d.ts`（或任意 `*.d.ts`）中引入全局组件类型：

```ts
import "cyberpunk-ui-vue/global";
```

### 按需导入

```vue
<script setup lang="ts">
import { CpButton, CpCard, CpInput } from "cyberpunk-ui-vue";
import "cyberpunk-ui-vue/styles/index.css";
</script>

<template>
  <CpCard title="登录">
    <CpInput v-model="username" placeholder="用户名" />
    <CpButton type="primary">登录</CpButton>
  </CpCard>
</template>
```

### 自动按需导入（unplugin-vue-components）

```ts
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import { CyberpunkVueResolver } from "cyberpunk-ui-vue/resolver";

export default defineConfig({
  plugins: [
    Components({
      resolvers: [CyberpunkVueResolver()],
    }),
  ],
});
```

## 🧩 组件列表

### 基础组件

| 组件       | 说明                               |
| ---------- | ---------------------------------- |
| `CpButton` | 按钮，支持多种变体、图标和加载状态 |
| `CpIcon`   | 图标显示                           |
| `CpText`   | 文本排版，支持故障效果             |
| `CpTag`    | 标签/徽章，霓虹风格                |
| `CpSpacer` | 弹性间距占位                       |

### 表单输入

| 组件                             | 说明                 |
| -------------------------------- | -------------------- |
| `CpInput`                        | 单行文本输入         |
| `CpInputNumber`                  | 数值输入             |
| `CpTextarea`                     | 多行文本输入         |
| `CpSwitch`                       | 开关切换             |
| `CpSlider`                       | 滑块选择器           |
| `CpDropdown`                     | 下拉选择器，支持搜索 |
| `CpCheckbox` / `CpCheckboxGroup` | 复选框               |
| `CpRadio` / `CpRadioGroup`       | 单选框               |

### 媒体展示

| 组件       | 说明                              |
| ---------- | --------------------------------- |
| `CpImage`  | 图片展示，支持懒加载和 hover 效果 |
| `CpAvatar` | 用户头像                          |

### 反馈与状态

| 组件                | 说明                           |
| ------------------- | ------------------------------ |
| `CpLoading`         | 加载指示器                     |
| `CpProgress`        | 进度条（线性 / 环形 / 仪表盘） |
| `CpStatusIndicator` | 状态指示点                     |
| `CpPopover`         | 气泡弹出层                     |
| `CpBadge`           | 徽标数                         |

### 容器

| 组件                  | 说明                          |
| --------------------- | ----------------------------- |
| `CpCard`              | 卡片容器，支持 clip-path 造型 |
| `CpPatternBackground` | 动画图案背景                  |
| `CpConfigProvider`    | 全局配置提供者                |

## 🎭 主题定制

通过 CSS 变量即可切换主题色和整体风格：

```css
:root {
  --cp-color-primary: #00f0ff;
  --cp-color-success: #00ff88;
  --cp-color-warning: #ffaa00;
  --cp-color-error: #ff2d6a;
}
```

支持明暗主题切换，详见 [主题定制 SKILL 文档](./skills/theming/SKILL.md)。

## 🤖 AI SKILL 文档

本项目内置了多份 SKILL.md 文档，专为 AI Agent 设计：

| 文档                                           | 用途                      |
| ---------------------------------------------- | ------------------------- |
| [总览](./skills/overview/SKILL.md)             | 快速入门和使用指南        |
| [组件参数](./skills/components-props/SKILL.md) | 每个组件的完整 Props 列表 |
| [主题定制](./skills/theming/SKILL.md)          | CSS 变量和主题配置        |
| [尺寸映射](./skills/size-mapping/SKILL.md)     | Size 预设值和自定义尺寸   |

AI Agent 可以通过阅读这些文档，快速理解组件库的能力和参数，直接进行界面开发。

## 📖 文档

访问 [Storybook 文档](https://your-storybook-url.com) 查看在线示例和 API 参考。

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行 Storybook
pnpm storybook

# 构建
pnpm build
```

## 📁 项目结构

```
cyberpunk-vue/
├── packages/
│   ├── components/       # Vue 组件源码
│   ├── hooks/            # 组合式函数
│   ├── constants/        # 共享常量
│   ├── theme-chalk/      # SCSS 样式
│   └── cyberpunk-vue/    # 统一发布包
├── skills/               # AI SKILL 文档
├── stories/              # Storybook 故事
└── play/                 # 开发调试游乐场
```

## 🤝 贡献

欢迎贡献！请在提交 Pull Request 前阅读贡献指南。

## 📄 许可

[MIT](./LICENSE) © 2026 Cyberpunk Vue Contributors

---

<p align="center">
  <a href="https://github.com/Goxiaogle/cyberpunk-ui-vue">GitHub</a> •
  <a href="https://www.npmjs.com/package/cyberpunk-ui-vue">NPM</a>
</p>
