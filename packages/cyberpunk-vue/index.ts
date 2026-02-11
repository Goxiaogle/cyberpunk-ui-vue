import type { App, Plugin } from 'vue'
import * as components from '@cyberpunk-vue/components'

export * from '@cyberpunk-vue/components'
export * from '@cyberpunk-vue/hooks'
export { DEFAULTS_KEY, THEME_KEY, COMPONENT_PREFIX, CSS_NAMESPACE } from '@cyberpunk-vue/constants'

type Installable = Plugin & { name?: string }

function isInstallable(value: unknown): value is Installable {
  return typeof value === 'object' && value !== null && typeof (value as Installable).install === 'function'
}

export const install: Plugin['install'] = (app: App) => {
  for (const entry of Object.values(components)) {
    if (isInstallable(entry)) {
      app.use(entry)
    }
  }
}

const CyberpunkVue: Plugin = {
  install
}

export default CyberpunkVue
