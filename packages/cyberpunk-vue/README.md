# cyberpunk-ui-vue

A futuristic Vue 3 component library with cyberpunk aesthetics.

- GitHub: https://github.com/Goxiaogle/cyberpunk-ui-vue
- Docs (Storybook): https://your-storybook-url.com

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

const app = createApp(App)
app.use(CyberpunkVue)
app.mount('#app')
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
