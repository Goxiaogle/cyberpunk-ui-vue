const DEFAULT_STYLE = 'cyberpunk-ui-vue/styles/index.css'

function resolveSideEffects(importStyle) {
  if (importStyle === false || importStyle === 'none') {
    return undefined
  }
  return DEFAULT_STYLE
}

export function CyberpunkVueResolver(options = {}) {
  const sideEffects = resolveSideEffects(options.importStyle)

  return {
    type: 'component',
    resolve: (name) => {
      if (!/^Cp[A-Z]/.test(name)) return undefined

      return {
        name,
        from: 'cyberpunk-ui-vue',
        sideEffects
      }
    }
  }
}

export default CyberpunkVueResolver
