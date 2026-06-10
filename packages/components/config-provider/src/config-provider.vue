<script setup lang="ts">
/**
 * CpConfigProvider - 全局配置提供者
 * 提供组件默认值和主题配置
 */
import { computed, inject, onBeforeUnmount, onMounted, provide, ref, unref, watchEffect } from 'vue'
import { DEFAULTS_KEY, THEME_KEY, COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { configProviderProps } from './config-provider'

defineOptions({
  name: `${COMPONENT_PREFIX}ConfigProvider`,
})

const props = defineProps(configProviderProps)

const parentDefaults = inject(DEFAULTS_KEY, {})

const toKebabCase = (value: string) =>
  value
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/_/g, '-')
    .toLowerCase()

const toCssVariableName = (key: string) => {
  if (key.startsWith('--')) return key

  const normalized = toKebabCase(key)
  return normalized.startsWith('cp-') ? `--${normalized}` : `--cp-${normalized}`
}

const normalizeComponentDefaultKey = (key: string) => {
  const normalized = key.replace(/^Cp/, '')
  return normalized ? normalized.charAt(0).toLowerCase() + normalized.slice(1) : key
}

const mergeDefaults = (
  parent: Record<string, Record<string, unknown>>,
  current: Record<string, Record<string, unknown>>,
) => {
  const merged: Record<string, Record<string, unknown>> = {}

  for (const key in parent) {
    const normalizedKey = normalizeComponentDefaultKey(key)
    merged[normalizedKey] = {
      ...(merged[normalizedKey] ?? {}),
      ...parent[key],
    }
  }

  for (const key in current) {
    const normalizedKey = normalizeComponentDefaultKey(key)
    merged[normalizedKey] = {
      ...(merged[normalizedKey] ?? {}),
      ...current[key],
    }
  }

  return merged
}

const mergedDefaults = computed(() =>
  mergeDefaults(
    unref(parentDefaults) as Record<string, Record<string, unknown>>,
    props.defaults as Record<string, Record<string, unknown>>,
  )
)

// 提供组件默认值，嵌套 Provider 会继承父级配置并覆盖同名组件配置
provide(DEFAULTS_KEY, mergedDefaults)

const systemTheme = ref<'dark' | 'light'>('dark')
const resolvedTheme = computed(() => (props.theme === 'system' ? systemTheme.value : props.theme))
let mediaQuery: MediaQueryList | undefined

const updateSystemTheme = () => {
  systemTheme.value = mediaQuery?.matches ? 'light' : 'dark'
}

onMounted(() => {
  if (typeof window === 'undefined') return

  mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
  updateSystemTheme()
  mediaQuery.addEventListener('change', updateSystemTheme)
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', updateSystemTheme)
})

// 提供解析后的主题 (响应式 ref)
provide(THEME_KEY, resolvedTheme)

const themeStyle = computed<Record<string, string | number>>(() => {
  const style: Record<string, string | number> = {
    display: 'contents',
  }

  for (const key in props.themeOverrides) {
    style[toCssVariableName(key)] = props.themeOverrides[key]
  }

  return style
})

const appliedDocumentVars = new Set<string>()

// 同步主题到 document
watchEffect(() => {
  if (typeof document === 'undefined' || !props.syncDocument) return

  const root = document.documentElement
  root.setAttribute('data-theme', resolvedTheme.value)

  const currentVars = new Set<string>()
  for (const key in props.themeOverrides) {
    const cssVar = toCssVariableName(key)
    currentVars.add(cssVar)
    root.style.setProperty(cssVar, String(props.themeOverrides[key]))
  }

  for (const cssVar of appliedDocumentVars) {
    if (!currentVars.has(cssVar)) {
      root.style.removeProperty(cssVar)
    }
  }

  appliedDocumentVars.clear()
  currentVars.forEach((cssVar) => appliedDocumentVars.add(cssVar))
})
</script>

<template>
  <component
    :is="tag"
    class="cp-config-provider"
    :data-theme="resolvedTheme"
    :style="themeStyle"
  >
    <slot />
  </component>
</template>
