# Cyberpunk Vue

<p align="center">
  <strong>🎮 A futuristic Vue 3 component library with cyberpunk/mecha aesthetics</strong>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#components">Components</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#license">License</a>
</p>

---

## ✨ Features

- 🚀 **Vue 3.5+ Vapor Mode Ready** - Built for maximum performance
- 🎨 **Cyberpunk Aesthetics** - Stunning neon colors, glitch effects, and futuristic design
- 📦 **Tree-shakable** - Import only what you need
- 🔧 **TypeScript First** - Full type definitions included
- 🎭 **Customizable Themes** - Easy theming with CSS variables
- 📱 **Responsive** - Mobile-friendly components

## 📦 Installation

```bash
# npm
npm install @cyberpunk-vue/components

# pnpm
pnpm add @cyberpunk-vue/components

# yarn
yarn add @cyberpunk-vue/components
```

## 🚀 Usage

### Global Registration

```ts
import { createApp } from "vue";
import CyberpunkVue from "@cyberpunk-vue/components";
import "@cyberpunk-vue/theme-chalk/src/index.scss";

const app = createApp(App);
app.use(CyberpunkVue);
app.mount("#app");
```

### On-demand Import

```vue
<script setup lang="ts">
import { CpButton, CpCard } from "@cyberpunk-vue/components";
</script>

<template>
  <CpCard title="Welcome">
    <CpButton type="primary">Click Me</CpButton>
  </CpCard>
</template>
```

## 🧩 Components

### General

- **Button** - Cyberpunk styled buttons with multiple variants
- **Icon** - Icon component with built-in icon sets
- **Text** - Typography component with glitch effects
- **Tag** - Label tags with neon styling
- **Spacer** - Flexible spacing utility

### Media & Identity

- **Image** - Enhanced image with hover effects and processors
- **Avatar** - User avatar with status indicators

### Interactive Inputs

- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Slider** - Range slider with cyberpunk styling
- **Switch** - Toggle switches
- **Dropdown** - Dropdown selector

### Feedback & Overlays

- **Loading** - Loading spinners and skeletons
- **Progress** - Progress bars and circles
- **StatusIndicator** - Status dots and indicators
- **Popover** - Tooltip and popover component

### Containers

- **Card** - Content cards with clip-path effects
- **PatternBackground** - Animated pattern backgrounds
- **ConfigProvider** - Global configuration provider

## 📖 Documentation

Visit our [Storybook documentation](https://your-storybook-url.com) for live examples and API references.

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
│   ├── components/     # Vue components
│   ├── hooks/          # Composable functions
│   ├── constants/      # Shared constants
│   └── theme-chalk/    # SCSS styles
├── stories/            # Storybook stories
└── play/               # Development playground
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## 📄 License

[MIT](./LICENSE) © 2026 Cyberpunk Vue Contributors
