<script setup lang="ts">
/**
 * CpPagination - 赛博朋克风格分页组件
 * 支持 layout 配置渲染分页模块
 */
import { computed, ref, watch } from 'vue'
import { useNamespace, isPresetSize, normalizeSize } from '@cyberpunk-vue/hooks'
import { paginationProps, paginationEmits } from './pagination'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import CpButton from '../../button/src/button.vue'
import CpDropdown from '../../dropdown/src/dropdown.vue'
import type { DropdownOption } from '../../dropdown/src/dropdown'

defineOptions({
  name: `${COMPONENT_PREFIX}Pagination`,
})

const props = defineProps(paginationProps)
const emit = defineEmits(paginationEmits)

const ns = useNamespace('pagination')

// ===== 内部状态 =====
const innerCurrentPage = ref(props.currentPage)
const innerPageSize = ref(props.pageSize)

// 同步外部 props
watch(() => props.currentPage, (val) => { innerCurrentPage.value = val })
watch(() => props.pageSize, (val) => { innerPageSize.value = val })

// ===== 计算属性 =====
const pageCount = computed(() => {
  if (props.total <= 0) return 1
  return Math.ceil(props.total / innerPageSize.value)
})

const isFirstPage = computed(() => innerCurrentPage.value <= 1)
const isLastPage = computed(() => innerCurrentPage.value >= pageCount.value)

// 解析 layout 字符串
const layoutParts = computed(() => {
  return props.layout
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
})

// 单页隐藏
const shouldHide = computed(() => {
  return props.hideOnSinglePage && pageCount.value <= 1
})

// ===== 尺寸预设 =====
const paginationSizeMap: Record<string, number> = { sm: 24, md: 32, lg: 40 }

// CpButton 形状映射：分页的 shape 和 CpButton 的 shape 完全一致
const buttonShape = computed(() => props.shape)

// CpButton 颜色：优先使用 color prop
const buttonColor = computed(() => props.color || '')

// ===== 类名 =====
const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(`shape-${props.shape}`),
  ns.m(`type-${props.type}`),
  ns.is('disabled', props.disabled),
  ns.is('custom-size', !isPresetSize(props.size)),
  ns.is('custom-color', !!props.color),
])

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (!isPresetSize(props.size)) {
    style['--cp-pagination-height'] = normalizeSize(props.size, paginationSizeMap)
  }
  if (props.color) {
    style['--cp-pagination-color'] = props.color
    style['--cp-pagination-color-light'] = `${props.color}33`
  }
  return style
})

// ===== Sizes Dropdown =====
const sizeOptions = computed<DropdownOption[]>(() => {
  return props.pageSizes.map(s => ({
    label: props.sizeTemplate.replace('{size}', String(s)),
    value: s,
  }))
})

// 颜色计算：优先 color prop，其次 type 映射
const typeColorMap: Record<string, string> = {
  primary: 'var(--cp-color-primary)',
  success: 'var(--cp-color-success)',
  warning: 'var(--cp-color-warning)',
  error: 'var(--cp-color-error)',
  info: 'var(--cp-color-info)',
}

const dropdownColor = computed(() => {
  if (props.color) return props.color
  if (props.type !== 'default') return typeColorMap[props.type] || ''
  return ''
})

// Total 文案渲染
const totalParts = computed(() => {
  const tpl = props.totalTemplate
  const idx = tpl.indexOf('{total}')
  if (idx === -1) return { before: tpl, after: '' }
  return {
    before: tpl.slice(0, idx),
    after: tpl.slice(idx + 7),
  }
})

// ===== 页码按钮逻辑 =====
const pagers = computed(() => {
  const count = pageCount.value
  const current = innerCurrentPage.value
  const pagerMax = props.pagerCount
  const halfPager = Math.floor(pagerMax / 2)

  // 总页数 <= pagerCount 时，全部显示
  if (count <= pagerMax) {
    return Array.from({ length: count }, (_, i) => i + 1)
  }

  const pages: (number | string)[] = []

  // 始终显示第一页
  pages.push(1)

  // 左侧省略号
  const leftEllipsis = current - halfPager > 2
  // 右侧省略号
  const rightEllipsis = current + halfPager < count - 1

  if (leftEllipsis && rightEllipsis) {
    // 两侧都有省略号
    pages.push('left-ellipsis')
    for (let i = current - halfPager + 2; i <= current + halfPager - 2; i++) {
      pages.push(i)
    }
    pages.push('right-ellipsis')
  } else if (leftEllipsis) {
    // 只左边有省略号
    pages.push('left-ellipsis')
    for (let i = count - pagerMax + 3; i < count; i++) {
      pages.push(i)
    }
  } else if (rightEllipsis) {
    // 只右边有省略号
    for (let i = 2; i <= pagerMax - 2; i++) {
      pages.push(i)
    }
    pages.push('right-ellipsis')
  }

  // 始终显示最后一页
  if (count > 1) {
    pages.push(count)
  }

  return pages
})

// ===== 事件处理 =====
const handlePageChange = (page: number) => {
  if (props.disabled) return
  const clamped = Math.max(1, Math.min(page, pageCount.value))
  if (clamped === innerCurrentPage.value) return
  innerCurrentPage.value = clamped
  emit('update:currentPage', clamped)
  emit('change', clamped)
}

const handlePrev = () => {
  if (!isFirstPage.value) {
    handlePageChange(innerCurrentPage.value - 1)
  }
}

const handleNext = () => {
  if (!isLastPage.value) {
    handlePageChange(innerCurrentPage.value + 1)
  }
}

const handleSizeSelect = (val: string | number) => {
  if (props.disabled) return
  const newSize = Number(val)
  if (newSize > 0) {
    innerPageSize.value = newSize
    // 重置到第一页
    innerCurrentPage.value = 1
    emit('update:pageSize', newSize)
    emit('update:currentPage', 1)
    emit('sizeChange', newSize)
    emit('change', 1)
  }
}

// 省略号快进/快退
const handleEllipsisClick = (type: string) => {
  if (props.disabled) return
  const step = props.pagerCount - 2
  if (type === 'left-ellipsis') {
    handlePageChange(Math.max(1, innerCurrentPage.value - step))
  } else {
    handlePageChange(Math.min(pageCount.value, innerCurrentPage.value + step))
  }
}

// 跳转器
const jumperValue = ref('')
const handleJump = () => {
  if (props.disabled) return
  const num = parseInt(jumperValue.value, 10)
  if (!isNaN(num) && num >= 1 && num <= pageCount.value) {
    handlePageChange(num)
  }
  jumperValue.value = ''
}
</script>

<template>
  <nav
    v-if="!shouldHide"
    :class="classes"
    :style="customStyle"
    role="navigation"
    aria-label="分页"
  >
    <template v-for="part in layoutParts" :key="part">
      <!-- Spacer (弹性占位，实现左右分离) -->
      <div v-if="part === 'spacer'" :class="ns.e('spacer')" />

      <!-- Total -->
      <span v-else-if="part === 'total'" :class="ns.e('total')">
        {{ totalParts.before }}<span :class="ns.e('total-count')">{{ total }}</span>{{ totalParts.after }}
      </span>

      <!-- Sizes -->
      <template v-else-if="part === 'sizes'">
        <slot
          name="sizes"
          :pageSize="innerPageSize"
          :pageSizes="pageSizes"
          :options="sizeOptions"
          :onChange="handleSizeSelect"
          :disabled="disabled"
          :type="type"
          :color="color || dropdownColor"
          :shape="shape"
          :size="size"
        >
          <span :class="ns.e('sizes')">
            <CpDropdown
              :model-value="innerPageSize"
              :options="sizeOptions"
              :disabled="disabled"
              :shape="shape"
              :size="size"
              variant="filled"
              :color="dropdownColor"
              @change="handleSizeSelect"
            />
          </span>
        </slot>
      </template>

      <!-- Prev -->
      <template v-else-if="part === 'prev'">
        <slot
          name="prev"
          :disabled="isFirstPage || disabled"
          :onClick="handlePrev"
          :currentPage="innerCurrentPage"
          :type="type"
          :color="color"
          :shape="shape"
          :size="size"
          :buttonVariant="buttonVariant"
        >
          <CpButton
            :class="ns.e('prev')"
            type="default"
            :variant="buttonVariant"
            :shape="buttonShape"
            :size="size"
            square
            :disabled="isFirstPage || disabled"
            aria-label="上一页"
            @click="handlePrev"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </CpButton>
        </slot>
      </template>

      <!-- Pager -->
      <template v-else-if="part === 'pager'">
        <slot
          name="pager"
          :pages="pagers"
          :currentPage="innerCurrentPage"
          :pageCount="pageCount"
          :onPageClick="handlePageChange"
          :onEllipsisClick="handleEllipsisClick"
          :disabled="disabled"
          :type="type"
          :color="color"
          :shape="shape"
          :size="size"
          :buttonVariant="buttonVariant"
        >
          <ul :class="ns.e('pager')">
            <li
              v-for="page in pagers"
              :key="page"
              :class="[
                ns.e('pager-item'),
                ns.is('active', page === innerCurrentPage),
                ns.is('ellipsis', typeof page === 'string'),
                ns.is('disabled', disabled),
              ]"
            >
              <slot
                v-if="typeof page === 'string'"
                name="ellipsis"
                :disabled="disabled"
                :onClick="() => handleEllipsisClick(page as string)"
                :type="type"
                :color="color"
                :buttonVariant="buttonVariant"
              >
                <!-- 省略号按钮 -->
                <CpButton
                  variant="ghost"
                  type="default"
                  :shape="buttonShape"
                  :size="size"
                  square
                  :disabled="disabled"
                  :class="ns.e('ellipsis-btn')"
                  @click="handleEllipsisClick(page as string)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </CpButton>
              </slot>

              <slot
                v-else
                name="pager-item"
                :page="page"
                :active="page === innerCurrentPage"
                :disabled="disabled"
                :onClick="() => handlePageChange(page as number)"
                :type="type"
                :color="color"
                :buttonVariant="buttonVariant"
              >
                <!-- 页码按钮 -->
                <CpButton
                  :type="page === innerCurrentPage ? (type === 'default' ? 'primary' : type) : 'default'"
                  :variant="page === innerCurrentPage ? 'solid' : buttonVariant"
                  :shape="buttonShape"
                  :size="size"
                  square
                  :color="page === innerCurrentPage ? buttonColor : ''"
                  :disabled="disabled"
                  @click="handlePageChange(page as number)"
                >
                  {{ page }}
                </CpButton>
              </slot>
            </li>
          </ul>
        </slot>
      </template>

      <!-- Next -->
      <template v-else-if="part === 'next'">
        <slot
          name="next"
          :disabled="isLastPage || disabled"
          :onClick="handleNext"
          :currentPage="innerCurrentPage"
          :type="type"
          :color="color"
          :shape="shape"
          :size="size"
          :buttonVariant="buttonVariant"
        >
          <CpButton
            :class="ns.e('next')"
            type="default"
            :variant="buttonVariant"
            :shape="buttonShape"
            :size="size"
            square
            :disabled="isLastPage || disabled"
            aria-label="下一页"
            @click="handleNext"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </CpButton>
        </slot>
      </template>

      <!-- Jumper -->
      <template v-else-if="part === 'jumper'">
        <slot
          name="jumper"
          :pageCount="pageCount"
          :disabled="disabled"
          :onJump="handlePageChange"
          :type="type"
          :color="color"
          :shape="shape"
          :size="size"
        >
          <span :class="ns.e('jumper')">
            前往
            <input
              v-model="jumperValue"
              :class="ns.e('jumper-input')"
              type="number"
              :min="1"
              :max="pageCount"
              :disabled="disabled"
              @keydown.enter="handleJump"
            />
            页
          </span>
        </slot>
      </template>
    </template>
  </nav>
</template>
