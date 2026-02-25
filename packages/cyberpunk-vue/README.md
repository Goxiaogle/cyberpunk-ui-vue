# cyberpunk-ui-vue

A futuristic Vue 3 component library with cyberpunk aesthetics.

- GitHub: https://github.com/Goxiaogle/cyberpunk-ui-vue
- Docs (Storybook): https://699e69a6f35a16cae86bbed2-hzgefthnhq.chromatic.com/

## Installation

```bash
pnpm add cyberpunk-ui-vue
```

## Usage

### Full import

```ts
import { createApp } from 'vue'
import App from './App.vue'
import CyberpunkVue from 'cyberpunk-ui-vue'
import 'cyberpunk-ui-vue/styles/index.css'
import 'cyberpunk-ui-vue/styles/fonts.css' // Optional: enable built-in local variable fonts

const app = createApp(App)
app.use(CyberpunkVue)
app.mount('#app')
```

### Variable fonts (optional)

The library does not auto-load local font assets by default.
To enable built-in variable-font weight transitions in components such as Menu / Segmented / Pagination / Breadcrumb / Tree, additionally import:

```ts
import 'cyberpunk-ui-vue/styles/fonts.css'
```

### Template IntelliSense (recommended)

```ts
// src/env.d.ts
import 'cyberpunk-ui-vue/global'
```

### Auto import (unplugin-vue-components)

```ts
import Components from 'unplugin-vue-components/vite'
import { CyberpunkVueResolver } from 'cyberpunk-ui-vue/resolver'

export default {
  plugins: [
    Components({
      resolvers: [CyberpunkVueResolver()]
    })
  ]
}
```

## License

MIT
