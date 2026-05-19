type OverlayStackEntryOptions = {
  zIndex: number
  stackPriority: number
  onKeydown: (event: KeyboardEvent) => boolean
  onZIndexChange: (zIndex: number) => void
}

type OverlayStackEntry = OverlayStackEntryOptions & {
  id: number
  openedAt: number
}

type OverlayStackController = {
  update: (options: Partial<Pick<OverlayStackEntryOptions, 'zIndex' | 'stackPriority'>>) => void
  unregister: () => void
  isTop: () => boolean
}

const stack: OverlayStackEntry[] = []
let idSeed = 0
let openedAtSeed = 0

const sortOverlays = () =>
  [...stack].sort((a, b) => {
    if (a.stackPriority !== b.stackPriority) {
      return a.stackPriority - b.stackPriority
    }
    return a.openedAt - b.openedAt
  })

const getTopOverlay = () => {
  const sortedOverlays = sortOverlays()
  return sortedOverlays[sortedOverlays.length - 1]
}

const syncZIndexes = () => {
  if (!stack.length) return

  const baseZIndex = Math.max(...stack.map(item => item.zIndex))
  sortOverlays().forEach((item, index) => {
    item.onZIndexChange(baseZIndex + index)
  })
}

const handleDocumentKeydown = (event: KeyboardEvent) => {
  const topOverlay = getTopOverlay()
  if (!topOverlay) return

  const handled = topOverlay.onKeydown(event)
  if (!handled) return

  event.preventDefault()
  event.stopPropagation()
}

const ensureListener = () => {
  if (stack.length === 1 && typeof document !== 'undefined') {
    document.addEventListener('keydown', handleDocumentKeydown, true)
  }
}

const cleanupListener = () => {
  if (!stack.length && typeof document !== 'undefined') {
    document.removeEventListener('keydown', handleDocumentKeydown, true)
  }
}

export const registerOverlay = (options: OverlayStackEntryOptions): OverlayStackController => {
  const entry: OverlayStackEntry = {
    ...options,
    id: idSeed++,
    openedAt: openedAtSeed++,
  }

  stack.push(entry)
  ensureListener()
  syncZIndexes()

  return {
    update(options) {
      Object.assign(entry, options)
      syncZIndexes()
    },
    unregister() {
      const index = stack.indexOf(entry)
      if (index === -1) return

      stack.splice(index, 1)
      cleanupListener()
      syncZIndexes()
    },
    isTop() {
      return getTopOverlay() === entry
    },
  }
}
