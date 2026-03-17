<script setup lang="ts">
/**
 * CpDescriptions - 赛博朋克风格描述列表
 * 以键值对形式展示结构化数据
 */
import { computed, ref, provide, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useNamespace, isPresetSize } from '@cyberpunk-vue/hooks'
import { COMPONENT_PREFIX, DESCRIPTIONS_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import {
  descriptionsProps,
  type DescriptionsItemConfig,
  type DescriptionsVerticalAlign,
} from './descriptions'

defineOptions({
  name: `${COMPONENT_PREFIX}Descriptions`,
})

const props = defineProps(descriptionsProps)
const ns = useNamespace('descriptions')

// ===== 颜色映射（给 per-item type 算色用） =====
const TYPE_COLOR_MAP: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

// ===== 条目注册 =====
const items = ref<DescriptionsItemConfig[]>([])
let itemIdCounter = 0

const registerItem = (config: Omit<DescriptionsItemConfig, 'id'>) => {
  const id = `cp-desc-item-${itemIdCounter++}`
  const fullConfig: DescriptionsItemConfig = { ...config, id }
  items.value.push(fullConfig)
  return id
}

const unregisterItem = (id: string) => {
  const idx = items.value.findIndex(item => item.id === id)
  if (idx > -1) {
    items.value.splice(idx, 1)
  }
}

provide(DESCRIPTIONS_CONTEXT_KEY, { registerItem, unregisterItem })

// ===== 分行逻辑 =====
interface DescriptionsRow {
  items: DescriptionsItemConfig[]
}

const rows = computed<DescriptionsRow[]>(() => {
  const result: DescriptionsRow[] = []
  let currentRow: DescriptionsItemConfig[] = []
  let remainCols = props.column

  for (const item of items.value) {
    const span = Math.min(item.span, props.column)

    if (span > remainCols) {
      if (currentRow.length > 0) {
        result.push({ items: currentRow })
      }
      currentRow = [item]
      remainCols = props.column - span
    } else {
      currentRow.push(item)
      remainCols -= span
    }

    if (remainCols <= 0) {
      result.push({ items: currentRow })
      currentRow = []
      remainCols = props.column
    }
  }

  if (currentRow.length > 0) {
    result.push({ items: currentRow })
  }

  return result
})

// ===== 样式计算 =====
const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`type-${props.type}`),
  ns.m(`direction-${props.direction}`),
  ns.m(props.variant),
])

const rootStyle = computed(() => {
  if (!props.color) return {}
  return {
    '--cp-descriptions-color': props.color,
    '--cp-descriptions-label-color': props.color,
    '--cp-descriptions-border': `color-mix(in srgb, ${props.color} 30%, transparent)`,
    '--cp-descriptions-label-bg': `color-mix(in srgb, ${props.color} 6%, transparent)`,
  }
})

// ===== Label 宽度 / 对齐 =====
const getLabelWidth = (item: DescriptionsItemConfig): string | undefined => {
  const w = item.labelWidth || props.labelWidth
  if (!w) return undefined
  return typeof w === 'number' ? `${w}px` : w
}

const getLabelAlign = (item: DescriptionsItemConfig): string => {
  return item.labelAlign || props.labelAlign
}

const getContentAlign = (item: DescriptionsItemConfig): string => {
  return item.contentAlign || props.contentAlign
}

const getLabelVerticalAlign = (item: DescriptionsItemConfig): DescriptionsVerticalAlign => {
  return (item.labelVerticalAlign || props.labelVerticalAlign) as DescriptionsVerticalAlign
}

const getContentVerticalAlign = (item: DescriptionsItemConfig): DescriptionsVerticalAlign => {
  return (item.contentVerticalAlign || props.contentVerticalAlign) as DescriptionsVerticalAlign
}

// ===== auto 垂直对齐 ResizeObserver =====
const contentRefs = ref<Map<string, HTMLElement>>(new Map())
const autoTopActiveMap = ref<Map<string, boolean>>(new Map())
let resizeObservers: Map<string, ResizeObserver> = new Map()

const AUTO_THRESHOLD = 80

function setContentRef(el: unknown, itemId: string) {
  if (el) {
    contentRefs.value.set(itemId, el as HTMLElement)
  } else {
    contentRefs.value.delete(itemId)
  }
}

function checkAutoHeight(itemId: string) {
  const item = items.value.find(i => i.id === itemId)
  if (!item) return
  const labelAlign = getLabelVerticalAlign(item)
  const contentAlign = getContentVerticalAlign(item)
  const el = contentRefs.value.get(itemId)
  if ((labelAlign !== 'auto' && contentAlign !== 'auto') || !el) {
    autoTopActiveMap.value.set(itemId, false)
    return
  }
  autoTopActiveMap.value.set(itemId, el.scrollHeight > AUTO_THRESHOLD)
}

function setupResizeObserverForItem(itemId: string) {
  cleanupResizeObserverForItem(itemId)
  const item = items.value.find(i => i.id === itemId)
  if (!item) return
  const labelAlign = getLabelVerticalAlign(item)
  const contentAlign = getContentVerticalAlign(item)
  const el = contentRefs.value.get(itemId)
  if ((labelAlign !== 'auto' && contentAlign !== 'auto') || !el) return
  const ro = new ResizeObserver(() => checkAutoHeight(itemId))
  ro.observe(el)
  resizeObservers.set(itemId, ro)
  checkAutoHeight(itemId)
}

function cleanupResizeObserverForItem(itemId: string) {
  const ro = resizeObservers.get(itemId)
  if (ro) {
    ro.disconnect()
    resizeObservers.delete(itemId)
  }
}

function setupAllResizeObservers() {
  for (const item of items.value) {
    setupResizeObserverForItem(item.id)
  }
}

function cleanupAllResizeObservers() {
  for (const [, ro] of resizeObservers) {
    ro.disconnect()
  }
  resizeObservers.clear()
}

onMounted(() => {
  nextTick(() => setupAllResizeObservers())
})

onBeforeUnmount(() => {
  cleanupAllResizeObservers()
})

watch(() => items.value.length, () => {
  nextTick(() => setupAllResizeObservers())
})

// ===== 获取单项的有效颜色 =====
const getItemColor = (item: DescriptionsItemConfig) => {
  // 优先单项 color > 单项 type > 父级（已在 CSS 变量中）
  if (item.color) return item.color
  if (item.type && item.type !== 'default') return TYPE_COLOR_MAP[item.type] || ''
  return ''
}

// ===== 获取 label cell 的 BEM 类和样式 =====
const getLabelCellClasses = (item: DescriptionsItemConfig) => {
  const vAlign = getLabelVerticalAlign(item)
  return [
    ns.e('label'),
    item.labelClassName || '',
    vAlign === 'top' ? 'is-v-top' : '',
    vAlign === 'bottom' ? 'is-v-bottom' : '',
    vAlign === 'auto' ? 'is-v-auto' : '',
    vAlign === 'auto' && autoTopActiveMap.value.get(item.id) ? 'is-v-top-active' : '',
  ]
}

const getLabelCellStyle = (item: DescriptionsItemConfig) => {
  const style: Record<string, string> = {}
  const w = getLabelWidth(item)
  if (w) {
    style.width = w
    style.minWidth = w
  }
  const hAlign = getLabelAlign(item)
  if (hAlign !== 'left') {
    style.textAlign = hAlign
  }
  // 单项颜色覆盖
  const itemColor = getItemColor(item)
  if (item.labelColor) {
    style.color = item.labelColor
  } else if (itemColor) {
    style.color = itemColor
  }
  // 单项 color/type 同时影响背景和边框
  if (itemColor) {
    style.borderColor = `color-mix(in srgb, ${itemColor} 30%, transparent)`
    style.background = `color-mix(in srgb, ${itemColor} 6%, transparent)`
  }
  return style
}

const getContentCellClasses = (item: DescriptionsItemConfig) => {
  const vAlign = getContentVerticalAlign(item)
  return [
    ns.e('content'),
    item.contentClassName || '',
    vAlign === 'top' ? 'is-v-top' : '',
    vAlign === 'bottom' ? 'is-v-bottom' : '',
    vAlign === 'auto' ? 'is-v-auto' : '',
    vAlign === 'auto' && autoTopActiveMap.value.get(item.id) ? 'is-v-top-active' : '',
  ]
}

const getContentCellStyle = (item: DescriptionsItemConfig) => {
  const style: Record<string, string> = {}
  const hAlign = getContentAlign(item)
  if (hAlign !== 'left') {
    style.textAlign = hAlign
  }
  // 单项颜色覆盖
  const itemColor = getItemColor(item)
  if (item.contentColor) {
    style.color = item.contentColor
  } else if (itemColor) {
    style.color = itemColor
  }
  // 单项 color/type 同时影响边框
  if (itemColor) {
    style.borderColor = `color-mix(in srgb, ${itemColor} 30%, transparent)`
  }
  return style
}

// ===== colSpan 计算 =====
const getCellSpan = (item: DescriptionsItemConfig, rowItems: DescriptionsItemConfig[], itemIdx: number) => {
  if (props.direction === 'horizontal') {
    const totalSpan = rowItems.reduce((sum, i) => sum + Math.min(i.span, props.column), 0)
    const isLast = itemIdx === rowItems.length - 1
    const currentSpan = Math.min(item.span, props.column)
    if (isLast && totalSpan < props.column) {
      return (currentSpan + props.column - totalSpan) * 2 - 1
    }
    return currentSpan * 2 - 1
  }
  const totalSpan = rowItems.reduce((sum, i) => sum + Math.min(i.span, props.column), 0)
  const isLast = itemIdx === rowItems.length - 1
  const currentSpan = Math.min(item.span, props.column)
  if (isLast && totalSpan < props.column) {
    return currentSpan + props.column - totalSpan
  }
  return currentSpan
}
</script>

<template>
  <div :class="classes" :style="rootStyle">
    <!-- 隐藏 slot，用于收集 CpDescriptionsItem 注册 -->
    <div style="display: none;">
      <slot />
    </div>

    <!-- Header -->
    <div v-if="title || extra || $slots.title || $slots.extra" :class="ns.e('header')">
      <div :class="ns.e('title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="extra || $slots.extra" :class="ns.e('extra')">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <!-- Body -->
    <div :class="ns.e('body')">
      <table :class="ns.e('table')">
        <tbody>
          <!-- Horizontal 模式 -->
          <template v-if="direction === 'horizontal'">
            <tr
              v-for="(row, rowIdx) in rows"
              :key="rowIdx"
              :class="ns.e('row')"
            >
              <template v-for="(item, itemIdx) in row.items" :key="item.id">
                <!-- Label Cell -->
                <td
                  :class="getLabelCellClasses(item)"
                  :style="getLabelCellStyle(item)"
                >
                  <component
                    :is="{ render: () => item.slots.label!() }"
                    v-if="item.slots.label"
                  />
                  <template v-else>{{ item.label }}</template>
                </td>
                <!-- Content Cell -->
                <td
                  :ref="(el: unknown) => setContentRef(el, item.id)"
                  :class="getContentCellClasses(item)"
                  :style="getContentCellStyle(item)"
                  :colspan="getCellSpan(item, row.items, itemIdx)"
                >
                  <component
                    :is="{ render: () => item.slots.default!() }"
                    v-if="item.slots.default"
                  />
                </td>
              </template>
            </tr>
          </template>

          <!-- Vertical 模式 -->
          <template v-else>
            <template v-for="(row, rowIdx) in rows" :key="rowIdx">
              <!-- Label 行 -->
              <tr :class="[ns.e('row'), ns.e('label-row')]">
                <td
                  v-for="(item, itemIdx) in row.items"
                  :key="item.id"
                  :class="getLabelCellClasses(item)"
                  :style="getLabelCellStyle(item)"
                  :colspan="getCellSpan(item, row.items, itemIdx)"
                >
                  <component
                    :is="{ render: () => item.slots.label!() }"
                    v-if="item.slots.label"
                  />
                  <template v-else>{{ item.label }}</template>
                </td>
              </tr>
              <!-- Content 行 -->
              <tr :class="[ns.e('row'), ns.e('content-row')]">
                <td
                  v-for="(item, itemIdx) in row.items"
                  :key="item.id"
                  :ref="(el: unknown) => setContentRef(el, item.id)"
                  :class="getContentCellClasses(item)"
                  :style="getContentCellStyle(item)"
                  :colspan="getCellSpan(item, row.items, itemIdx)"
                >
                  <component
                    :is="{ render: () => item.slots.default!() }"
                    v-if="item.slots.default"
                  />
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
