# Cyberpunk Vue

<p align="center">
  <strong>🎮 A futuristic Vue 3 component library with cyberpunk/mecha aesthetics</strong>
</p>

<p align="center">
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-components">Components</a> •
  <a href="#-theming">Theming</a> •
  <a href="#-ai-skill-docs">AI SKILL</a> •
  <a href="./README.md">中文</a>
</p>

---

> [!IMPORTANT]
> 🤖 **This component library is predominantly developed by AI**, and is also designed as a **component library for AI-driven development**. The project includes comprehensive [SKILL.md](./skills/overview/SKILL.md) documentation, enabling AI Agents to quickly understand and use this library for UI development.

---

## ✨ Features

- 🚀 **Vue 3.5+ Vapor Mode Ready** — Built for maximum performance
- 🎨 **Cyberpunk Aesthetics** — Stunning neon colors, glitch effects, and futuristic design
- 📦 **Tree-shakable** — Import only what you need
- 🔧 **TypeScript First** — Full type definitions included
- 🎭 **Customizable Themes** — Easy theming with CSS variables
- 📱 **Responsive** — Mobile-friendly components
- 🤖 **AI-Friendly** — Built-in SKILL.md docs for AI Agents

## 📦 Installation

```bash
# npm
npm install cyberpunk-ui-vue

# pnpm
pnpm add cyberpunk-ui-vue

# yarn
yarn add cyberpunk-ui-vue
```

## 🚀 Usage

### Global Registration

```ts
import { createApp } from "vue";
import CyberpunkVue from "cyberpunk-ui-vue";
import "cyberpunk-ui-vue/styles/index.css";
import "cyberpunk-ui-vue/styles/fonts.css"; // Optional: enable built-in local variable fonts

const app = createApp(App);
app.use(CyberpunkVue);
app.mount("#app");
```

### Template IntelliSense (Recommended)

Import global component types in `src/env.d.ts` (or any `*.d.ts`):

```ts
import "cyberpunk-ui-vue/global";
```

### On-demand Import

```vue
<script setup lang="ts">
import { CpButton, CpCard, CpInput } from "cyberpunk-ui-vue";
import "cyberpunk-ui-vue/styles/index.css";
import "cyberpunk-ui-vue/styles/fonts.css"; // Optional: enable built-in local variable fonts
</script>

<template>
  <CpCard title="Welcome">
    <CpInput v-model="username" placeholder="Username" />
    <CpButton type="primary">Login</CpButton>
  </CpCard>
</template>
```

### Variable Fonts (Optional)

By default, the library does not auto-inject local font files, so font assets are not forced on every consumer.
If you want variable-weight transitions for components like Menu / Segmented / Pagination / Breadcrumb / Tree, additionally import:

```ts
import "cyberpunk-ui-vue/styles/fonts.css";
```

Without this file, components still work with the global fallback font stack.

### Auto On-demand Import (unplugin-vue-components)

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

## 🧩 Components

### General

| Component  | Description                                               |
| ---------- | --------------------------------------------------------- |
| `CpButton` | Buttons with multiple variants, icons, and loading states |
| `CpIcon`   | Icon display                                              |
| `CpText`   | Typography with glitch effects                            |
| `CpTag`    | Labels/badges with neon styling                           |
| `CpSpacer` | Flexible spacing utility                                  |

### Form Inputs

| Component                        | Description                   |
| -------------------------------- | ----------------------------- |
| `CpInput`                        | Single-line text input        |
| `CpInputNumber`                  | Numeric input                 |
| `CpTextarea`                     | Multi-line text input         |
| `CpSwitch`                       | Toggle switch                 |
| `CpSlider`                       | Range slider                  |
| `CpSelect`                       | Dropdown selector with search (legacy `CpDropdown` kept as a deprecated alias) |
| `CpCheckbox` / `CpCheckboxGroup` | Checkbox                      |
| `CpRadio` / `CpRadioGroup`       | Radio button                  |

### Media & Identity

| Component  | Description                                        |
| ---------- | -------------------------------------------------- |
| `CpImage`  | Enhanced image with lazy loading and hover effects |
| `CpAvatar` | User avatar                                        |

### Feedback & Overlays

| Component           | Description                                   |
| ------------------- | --------------------------------------------- |
| `CpLoading`         | Loading indicator                             |
| `CpProgress`        | Progress bars (linear / circular / dashboard) |
| `CpStatusIndicator` | Status dots and indicators                    |
| `CpPopover`         | Tooltip and popover                           |
| `CpBadge`           | Badge / number indicator                      |

### Containers

| Component             | Description                          |
| --------------------- | ------------------------------------ |
| `CpCard`              | Content cards with clip-path effects |
| `CpPatternBackground` | Animated pattern backgrounds         |
| `CpConfigProvider`    | Global configuration provider        |

## 🎭 Theming

Customize themes easily via CSS variables:

```css
:root {
  --cp-color-primary: #00f0ff;
  --cp-color-success: #00ff88;
  --cp-color-warning: #ffaa00;
  --cp-color-error: #ff2d6a;
}
```

Supports light/dark theme switching. See the [Theming SKILL doc](./skills/theming/SKILL.md) for details.

## 🤖 AI SKILL Docs

This project includes multiple SKILL.md documents designed for AI Agents:

| Document                                              | Purpose                                     |
| ----------------------------------------------------- | ------------------------------------------- |
| [Overview](./skills/overview/SKILL.md)                | Quick start and usage guide                 |
| [Component Props](./skills/components-props/SKILL.md) | Complete Props reference for each component |
| [Theming](./skills/theming/SKILL.md)                  | CSS variables and theme configuration       |
| [Size Mapping](./skills/size-mapping/SKILL.md)        | Size presets and custom sizing              |

AI Agents can read these documents to quickly understand the library's capabilities and parameters for direct UI development.

## 📖 Documentation

Visit our [Storybook documentation](https://699e69a6f35a16cae86bbed2-hzgefthnhq.chromatic.com/) for live examples and API references.

### Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Run Storybook
pnpm storybook

# Build packages
pnpm build
```

## 📁 Project Structure

```
cyberpunk-vue/
├── packages/
│   ├── components/       # Vue components
│   ├── hooks/            # Composable functions
│   ├── constants/        # Shared constants
│   ├── theme-chalk/      # SCSS styles
│   └── cyberpunk-vue/    # Unified publish package
├── skills/               # AI SKILL documents
├── stories/              # Storybook stories
└── play/                 # Development playground
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## 📄 License

[MIT](./LICENSE) © 2026 Cyberpunk Vue Contributors

---

<p align="center">
  <a href="https://github.com/Goxiaogle/cyberpunk-ui-vue">GitHub</a> •
  <a href="https://www.npmjs.com/package/cyberpunk-ui-vue">NPM</a>
</p>
