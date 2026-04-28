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
  const seen = new Set<unknown>()
  for (const entry of Object.values(components)) {
    if (isInstallable(entry) && !seen.has(entry)) {
      seen.add(entry)
      app.use(entry)
    }
  }
  // Deprecated 别名：CpDropdown → CpSelect
  // 让 `<CpDropdown>` 模板用法在仅通过 app.use(CyberpunkVue) 注册的场景下继续可用。
  if (components.CpSelect) {
    app.component('CpDropdown', components.CpSelect)
  }
}

const CyberpunkVue: Plugin = {
  install
}

export default CyberpunkVue
