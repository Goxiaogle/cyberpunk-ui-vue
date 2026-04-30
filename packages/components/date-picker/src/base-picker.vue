<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref, useSlots, watch, type CSSProperties } from 'vue'
import { autoUpdate, computePosition, flip, offset, shift, size as floatingSize, type Placement } from '@floating-ui/dom'
import { COMPONENT_PREFIX, DIALOG_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import { isPresetSize, normalizeSize, useNamespace } from '@cyberpunk-vue/hooks'
import { formContextKey } from '@cyberpunk-vue/components/form/src/constants'
import { pickerEmits, pickerProps, type PickerCell, type PickerModelValue, type PickerRangeRole, type PickerType } from './picker'
import {
  applyTime,
  buildSteppedNumbers,
  dayjs,
  getDefaultFormat,
  hasDatePanel,
  hasTimePanel,
  isBetweenDay,
  isMultipleType,
  isMonthType,
  isRangeType,
  isSameByType,
  isYearType,
  normalizeModelValue,
  outputModelValue,
  padTime,
  parseTime,
  sortRange,
  toDayjs,
  type Dayjs,
} from './date-utils'

defineOptions({
  name: `${COMPONENT_PREFIX}PickerBase`,
})

const props = defineProps(pickerProps)
const emit = defineEmits(pickerEmits)
const slots = useSlots()

const ns = useNamespace('date-picker')
const formContext = inject(formContextKey, undefined)
const dialogContext = inject(DIALOG_CONTEXT_KEY, undefined)
const isDisabled = computed(() => props.disabled || formContext?.disabled.value || false)

const sizeMap = { sm: 28, md: 36, lg: 44 }
const VIEWPORT_PADDING = 8
const POPPER_LEAVE_DURATION = 150
const PICKER_OPEN_EVENT = 'cp:date-picker-open'
const uid = Symbol()

const triggerRef = ref<HTMLElement | null>(null)
const popperRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const visible = ref(false)
const popperRendered = ref(false)
const popperOpen = ref(false)
const actualPlacement = ref<Placement>(props.placement)
const popperPosition = ref({ x: 0, y: 0, width: 0 })
const dynamicMaxHeight = ref(420)
const panelDate = ref(dayjs())
const rightPanelDate = ref(dayjs().add(1, 'month'))
const hoverDate = ref<Dayjs | null>(null)
const pendingDates = ref<Dayjs[]>([])
const inputValue = ref('')
const focused = ref(false)
const activeRangeRole = ref<PickerRangeRole>('start')

let cleanupAutoUpdate: (() => void) | null = null
let closePopperTimer: ReturnType<typeof setTimeout> | null = null
let openPopperFrame = 0

const modelDates = computed(() => normalizeModelValue(props.modelValue, props.valueFormat, props.type))
const displayFormat = computed(() => props.format || getDefaultFormat(props.type, props.showSeconds))
const parseFormat = computed(() => props.valueFormat || displayFormat.value)
const isRange = computed(() => isRangeType(props.type))
const isMultiple = computed(() => isMultipleType(props.type))
const hasTime = computed(() => hasTimePanel(props.type))
const hasDate = computed(() => hasDatePanel(props.type))
const usesMonthGrid = computed(() => isMonthType(props.type))
const usesYearGrid = computed(() => isYearType(props.type))
const shouldConfirm = computed(() => {
  if (props.confirm !== undefined) return props.confirm
  return isRange.value || hasTime.value
})

const activeDates = computed(() => (visible.value ? pendingDates.value : modelDates.value))
const hasValue = computed(() => modelDates.value.length > 0)
const showClear = computed(() => props.clearable && !isDisabled.value && !props.readonly && hasValue.value)
const placeholderText = computed(() => {
  if (props.placeholder) return props.placeholder
  if (props.type === 'time') return '选择时间'
  if (props.type === 'timerange') return `${props.startPlaceholder}${props.rangeSeparator}${props.endPlaceholder}`
  if (props.type === 'datetime') return '选择日期时间'
  if (props.type === 'datetimerange') return `${props.startPlaceholder}${props.rangeSeparator}${props.endPlaceholder}`
  if (props.type === 'month') return '选择月份'
  if (props.type === 'year') return '选择年份'
  if (isRange.value) return `${props.startPlaceholder}${props.rangeSeparator}${props.endPlaceholder}`
  return '选择日期'
})

const displayValue = computed(() => formatDates(modelDates.value))

const classes = computed(() => [
  ns.b(),
  isPresetSize(props.size) && ns.m(props.size),
  ns.m(props.variant),
  ns.m(`shape-${props.shape}`),
  ns.is('disabled', isDisabled.value),
  ns.is('readonly', props.readonly),
  ns.is('active', visible.value),
  ns.is('focused', focused.value),
  ns.is('range', isRange.value),
  ns.is('time-only', props.type === 'time' || props.type === 'timerange'),
  ns.is('date-time', props.type === 'datetime' || props.type === 'datetimerange'),
  ns.is('custom-color', !!props.color),
  ns.is('custom-size', !isPresetSize(props.size)),
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style['--cp-date-picker-custom-color'] = props.color
    style['--cp-date-picker-custom-color-light'] = `color-mix(in srgb, ${props.color} 20%, transparent)`
  }
  if (props.inactiveColor) style['--cp-date-picker-inactive-color'] = props.inactiveColor
  if (props.placeholderColor) style['--cp-date-picker-placeholder-color'] = props.placeholderColor
  if (!isPresetSize(props.size)) style['--cp-date-picker-height'] = normalizeSize(props.size, sizeMap)
  if (props.width) style['--cp-date-picker-width'] = typeof props.width === 'number' ? `${props.width}px` : props.width
  return style
})

const popperStyle = computed<CSSProperties>(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  transform: `translate3d(${Math.round(popperPosition.value.x)}px, ${Math.round(popperPosition.value.y)}px, 0)`,
  minWidth: `${Math.max(popperPosition.value.width, isRange.value ? 620 : 328)}px`,
  maxHeight: `${dynamicMaxHeight.value}px`,
  willChange: 'transform',
}))

const popperClasses = computed(() => [
  ns.e('popper'),
  `${ns.e('popper')}--${actualPlacement.value.split('-')[0]}`,
  ns.m(`shape-${props.shape}`),
  ns.is('visible', popperOpen.value),
  ns.is('range', isRange.value),
  ns.is('time-only', props.type === 'time' || props.type === 'timerange'),
])

const weekLabels = ['日', '一', '二', '三', '四', '五', '六']

const calendarPanels = computed(() => {
  if (!isRange.value || props.type === 'time' || props.type === 'timerange') return [panelDate.value]
  return [panelDate.value, props.unlinkPanels ? rightPanelDate.value : panelDate.value.add(1, 'month')]
})

const timeRoles = computed<PickerRangeRole[]>(() => (isRange.value ? ['start', 'end'] : ['start']))
const hours = computed(() => buildSteppedNumbers(23, props.hourStep))
const minutes = computed(() => buildSteppedNumbers(59, props.minuteStep))
const seconds = computed(() => buildSteppedNumbers(59, props.secondStep))

function formatDates(dates: Dayjs[]): string {
  if (dates.length === 0) return ''
  const formatted = dates.map(date => date.format(displayFormat.value))
  return isRange.value ? formatted.join(props.rangeSeparator) : formatted.join(', ')
}

function getDefaultTime(role: PickerRangeRole): Dayjs {
  if (Array.isArray(props.defaultTime)) {
    return parseTime(role === 'start' ? props.defaultTime[0] : props.defaultTime[1])
  }
  return parseTime(props.defaultTime)
}

function syncFromModel() {
  pendingDates.value = modelDates.value.map(date => date.millisecond(0))
  inputValue.value = displayValue.value
  const anchor = pendingDates.value[0] || toDayjs(props.defaultValue, parseFormat.value, props.type) || dayjs()
  panelDate.value = anchor
  rightPanelDate.value = anchor.add(1, 'month')
}

function clearClosePopperTimer() {
  if (closePopperTimer) {
    clearTimeout(closePopperTimer)
    closePopperTimer = null
  }
}

function clearOpenPopperFrame() {
  if (openPopperFrame) {
    cancelAnimationFrame(openPopperFrame)
    openPopperFrame = 0
  }
}

function primePopperPosition() {
  if (!triggerRef.value) return
  const rect = triggerRef.value.getBoundingClientRect()
  popperPosition.value = { x: rect.left, y: rect.bottom, width: rect.width }
  dynamicMaxHeight.value = Math.max(240, window.innerHeight - rect.bottom - VIEWPORT_PADDING)
  actualPlacement.value = props.placement
}

async function updatePosition() {
  if (!triggerRef.value || !popperRef.value) return
  const { x, y, placement } = await computePosition(triggerRef.value, popperRef.value, {
    strategy: 'fixed',
    placement: props.placement,
    middleware: [
      offset(4),
      flip({ padding: VIEWPORT_PADDING }),
      shift({ padding: VIEWPORT_PADDING }),
      floatingSize({
        padding: VIEWPORT_PADDING,
        apply({ availableHeight, rects }) {
          dynamicMaxHeight.value = Math.max(240, Math.min(520, availableHeight))
          popperPosition.value = {
            x: popperPosition.value.x,
            y: popperPosition.value.y,
            width: rects.reference.width,
          }
        },
      }),
    ],
  })
  popperPosition.value = { x, y, width: popperPosition.value.width || triggerRef.value.getBoundingClientRect().width }
  actualPlacement.value = placement
}

function setupAutoUpdate() {
  cleanupAutoUpdate?.()
  cleanupAutoUpdate = null
  if (!triggerRef.value || !popperRef.value) return
  cleanupAutoUpdate = autoUpdate(triggerRef.value, popperRef.value, updatePosition)
}

function teardownAutoUpdate() {
  cleanupAutoUpdate?.()
  cleanupAutoUpdate = null
}

function open() {
  if (isDisabled.value || visible.value) return
  syncFromModel()
  clearClosePopperTimer()
  clearOpenPopperFrame()
  primePopperPosition()
  visible.value = true
  popperRendered.value = true
  document.dispatchEvent(new CustomEvent(PICKER_OPEN_EVENT, { detail: uid }))
  emit('visibleChange', true)
  nextTick(() => {
    openPopperFrame = requestAnimationFrame(() => {
      popperOpen.value = true
      openPopperFrame = 0
    })
  })
}

function close() {
  if (!visible.value) return
  clearOpenPopperFrame()
  visible.value = false
  popperOpen.value = false
  hoverDate.value = null
  emit('visibleChange', false)
  clearClosePopperTimer()
  closePopperTimer = setTimeout(() => {
    if (!visible.value) popperRendered.value = false
    closePopperTimer = null
  }, POPPER_LEAVE_DURATION)
}

function toggle() {
  if (visible.value) close()
  else open()
}

function emitValue(dates: Dayjs[]) {
  const output = outputModelValue(dates, props.type, props.valueFormat)
  emit('update:modelValue', output)
  emit('change', output)
  inputValue.value = formatDates(dates)
}

function commitAndMaybeClose(dates = pendingDates.value, forceClose = false) {
  const normalized = isRange.value ? sortRange(dates).slice(0, 2) : dates
  pendingDates.value = normalized
  emitValue(normalized)
  if (forceClose || !shouldConfirm.value) close()
}

function clearValue(event?: MouseEvent) {
  event?.stopPropagation()
  pendingDates.value = []
  inputValue.value = ''
  emit('update:modelValue', isRange.value || isMultiple.value ? [] : null)
  emit('change', isRange.value || isMultiple.value ? [] : null)
  emit('clear')
  close()
}

function cancel() {
  syncFromModel()
  close()
}

function confirm() {
  commitAndMaybeClose(pendingDates.value, true)
}

function selectShortcut(shortcutValue: PickerModelValue | (() => PickerModelValue)) {
  const value = typeof shortcutValue === 'function' ? shortcutValue() : shortcutValue
  const dates = normalizeModelValue(value, props.valueFormat, props.type)
  pendingDates.value = dates
  emitValue(dates)
  close()
}

function selectNow() {
  const now = dayjs().millisecond(0)
  if (isRange.value) {
    const next = pendingDates.value.length === 2 ? pendingDates.value : [now, now]
    pendingDates.value = next.map(date => applyTime(date, now))
    if (!hasDate.value) commitAndMaybeClose(pendingDates.value, false)
    return
  }
  pendingDates.value = [now]
  commitAndMaybeClose(pendingDates.value, !shouldConfirm.value)
}

function isDateDisabled(date: Dayjs): boolean {
  return !!props.disabledDate?.(date.toDate())
}

function selectDate(date: Dayjs) {
  if (isDateDisabled(date)) return
  const normalized = date.millisecond(0)

  if (isMultiple.value) {
    const exists = pendingDates.value.some(item => isSameByType(item, normalized, props.type))
    pendingDates.value = exists
      ? pendingDates.value.filter(item => !isSameByType(item, normalized, props.type))
      : [...pendingDates.value, normalized]
    if (!shouldConfirm.value) commitAndMaybeClose(pendingDates.value)
    return
  }

  if (isRange.value) {
    const withDefaultTime = applyTime(normalized, getDefaultTime(activeRangeRole.value))
    if (pendingDates.value.length === 0 || pendingDates.value.length === 2 || activeRangeRole.value === 'start') {
      pendingDates.value = [withDefaultTime]
      activeRangeRole.value = 'end'
    } else {
      pendingDates.value = sortRange([pendingDates.value[0], withDefaultTime])
      activeRangeRole.value = 'start'
      if (!shouldConfirm.value) commitAndMaybeClose(pendingDates.value, true)
    }
    return
  }

  const baseTime = pendingDates.value[0] || getDefaultTime('start')
  const selected = hasTime.value ? applyTime(normalized, baseTime) : normalized
  pendingDates.value = [selected]
  if (!shouldConfirm.value) commitAndMaybeClose(pendingDates.value, true)
}

function selectMonth(monthIndex: number) {
  const selected = panelDate.value.month(monthIndex).date(1).startOf('day')
  selectDate(selected)
  if (!usesMonthGrid.value) panelDate.value = selected
}

function selectYear(year: number) {
  const selected = panelDate.value.year(year).month(0).date(1).startOf('day')
  selectDate(selected)
  if (!usesYearGrid.value) panelDate.value = selected
}

function buildDateCells(panel: Dayjs): PickerCell[] {
  const start = panel.startOf('month').startOf('week')
  const selected = activeDates.value
  return Array.from({ length: 42 }, (_, index) => {
    const date = start.add(index, 'day')
    const rangeStart = selected[0] ? date.isSame(selected[0], 'day') : false
    const rangeEnd = selected[1] ? date.isSame(selected[1], 'day') : false
    const hoverRange = isRange.value && selected.length === 1 && hoverDate.value
      ? sortRange([selected[0], hoverDate.value])
      : null
    const rangePair = selected.length >= 2 ? sortRange(selected.slice(0, 2)) : hoverRange
    const inRange = !!rangePair && isBetweenDay(date, rangePair[0], rangePair[1])

    return {
      date: date.toDate(),
      label: String(date.date()),
      outside: !date.isSame(panel, 'month'),
      today: date.isSame(dayjs(), 'day'),
      selected: selected.some(item => isSameByType(item, date, props.type)),
      inRange,
      rangeStart,
      rangeEnd,
      disabled: isDateDisabled(date),
    }
  })
}

function monthCellClass(monthIndex: number) {
  const date = panelDate.value.month(monthIndex).date(1)
  return [
    ns.e('month-cell'),
    ns.is('selected', activeDates.value.some(item => item.isSame(date, 'month'))),
    ns.is('disabled', isDateDisabled(date)),
  ]
}

function yearCellClass(year: number) {
  const date = panelDate.value.year(year).month(0).date(1)
  return [
    ns.e('year-cell'),
    ns.is('selected', activeDates.value.some(item => item.isSame(date, 'year'))),
    ns.is('disabled', isDateDisabled(date)),
  ]
}

function getYearBase(date: Dayjs): number {
  return Math.floor(date.year() / 12) * 12
}

function dateCellClass(cell: PickerCell) {
  return [
    ns.e('cell'),
    ns.is('outside', cell.outside),
    ns.is('today', cell.today),
    ns.is('selected', cell.selected),
    ns.is('in-range', cell.inRange),
    ns.is('range-start', cell.rangeStart),
    ns.is('range-end', cell.rangeEnd),
    ns.is('disabled', cell.disabled),
  ]
}

function navigate(amount: number, unit: 'month' | 'year') {
  panelDate.value = panelDate.value.add(amount, unit)
  if (props.unlinkPanels) rightPanelDate.value = rightPanelDate.value.add(amount, unit)
}

function navigateRight(amount: number, unit: 'month' | 'year') {
  rightPanelDate.value = rightPanelDate.value.add(amount, unit)
}

function getDateForRole(role: PickerRangeRole): Dayjs {
  const index = role === 'start' ? 0 : 1
  return pendingDates.value[index] || pendingDates.value[0] || dayjs()
}

function updateTime(role: PickerRangeRole, part: 'hour' | 'minute' | 'second', value: number) {
  const disabledResolver = part === 'hour'
    ? props.disabledHours
    : part === 'minute'
      ? props.disabledMinutes
      : props.disabledSeconds
  if (disabledResolver?.(role).includes(value)) return

  const index = isRange.value && role === 'end' ? 1 : 0
  const base = pendingDates.value[index] || getDateForRole(role)
  let next = base
  if (part === 'hour') next = next.hour(value)
  if (part === 'minute') next = next.minute(value)
  if (part === 'second') next = next.second(value)
  next = next.millisecond(0)

  const nextDates = [...pendingDates.value]
  nextDates[index] = next
  pendingDates.value = isRange.value ? sortRange(nextDates.filter(Boolean)) : [next]
  if (!shouldConfirm.value && props.type === 'time') commitAndMaybeClose(pendingDates.value, true)
}

function isTimeDisabled(role: PickerRangeRole, part: 'hour' | 'minute' | 'second', value: number): boolean {
  const resolver = part === 'hour'
    ? props.disabledHours
    : part === 'minute'
      ? props.disabledMinutes
      : props.disabledSeconds
  return !!resolver?.(role).includes(value)
}

function parseInput() {
  if (!props.editable || !inputValue.value) {
    inputValue.value = displayValue.value
    return
  }
  const parts = isRange.value ? inputValue.value.split(props.rangeSeparator) : [inputValue.value]
  const parsed = parts
    .map(part => toDayjs(part.trim(), displayFormat.value, props.type))
    .filter((date): date is Dayjs => !!date)

  if ((!isRange.value && parsed.length === 1) || (isRange.value && parsed.length === 2)) {
    pendingDates.value = isRange.value ? sortRange(parsed) : parsed
    commitAndMaybeClose(pendingDates.value, true)
  } else {
    inputValue.value = displayValue.value
  }
}

function handleFocus(event: FocusEvent) {
  focused.value = true
  emit('focus', event)
}

function handleBlur(event: FocusEvent) {
  focused.value = false
  emit('blur', event)
  if (!visible.value) parseInput()
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }
  if (!visible.value && ['Enter', ' ', 'ArrowDown'].includes(event.key)) {
    event.preventDefault()
    open()
    return
  }
  if (event.key === 'Enter' && props.editable) {
    event.preventDefault()
    parseInput()
  }
}

function handleClickOutside(event: MouseEvent) {
  if (!visible.value) return
  const target = event.target as Node
  if (triggerRef.value?.contains(target) || popperRef.value?.contains(target)) return
  cancel()
}

function handleOtherPickerOpen(event: Event) {
  if ((event as CustomEvent).detail !== uid && visible.value) close()
}

if (dialogContext?.visible) {
  watch(dialogContext.visible, (dialogVisible) => {
    if (!dialogVisible && visible.value) close()
  })
}

watch(() => props.modelValue, syncFromModel, { immediate: true, deep: true })
watch(displayValue, value => {
  if (!visible.value) inputValue.value = value
})
watch(visible, async value => {
  if (value) {
    await nextTick()
    setupAutoUpdate()
  } else {
    teardownAutoUpdate()
  }
})

defineExpose({
  /** @description 打开选择器浮层 */
  open,
  /** @description 关闭选择器浮层 */
  close,
  /** @description 切换选择器浮层 */
  toggle,
  /** @description 使触发器获取焦点 */
  focus: () => inputRef.value?.focus(),
  /** @description 使触发器失去焦点 */
  blur: () => inputRef.value?.blur(),
})

onMounted(() => {
  document.addEventListener(PICKER_OPEN_EVENT, handleOtherPickerOpen)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  clearClosePopperTimer()
  clearOpenPopperFrame()
  teardownAutoUpdate()
  document.removeEventListener(PICKER_OPEN_EVENT, handleOtherPickerOpen)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div :class="classes" :style="customStyle">
    <div
      ref="triggerRef"
      :class="ns.e('trigger')"
      :tabindex="isDisabled ? -1 : 0"
      @click="toggle"
      @keydown="handleKeydown"
    >
      <span v-if="slots.prefix" :class="ns.e('prefix')">
        <slot name="prefix" />
      </span>
      <span v-else :class="ns.e('icon')" aria-hidden="true">
        <svg v-if="type === 'time' || type === 'timerange'" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 11h5v-2h-4V6h-2v7Z" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2L2.01 6A2 2 0 0 1 4 4h3V2Zm13 8H4v10h16V10ZM4 8h16V6H4v2Z" />
        </svg>
      </span>

      <input
        ref="inputRef"
        v-model="inputValue"
        :class="ns.e('inner')"
        :placeholder="placeholderText"
        :disabled="isDisabled"
        :readonly="readonly || !editable"
        autocomplete="off"
        @click.stop="open"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />

      <span v-if="showClear" :class="ns.e('clear')" @click="clearValue">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z" />
        </svg>
      </span>

      <span v-if="slots.suffix" :class="ns.e('suffix')">
        <slot name="suffix" />
      </span>
    </div>

    <Teleport :to="teleportTo">
      <div
        v-if="popperRendered"
        ref="popperRef"
        :class="popperClasses"
        :style="popperStyle"
      >
        <div :class="ns.e('panel')">
          <aside v-if="shortcuts.length" :class="ns.e('shortcuts')">
            <button
              v-for="shortcut in shortcuts"
              :key="shortcut.text"
              type="button"
              :class="ns.e('shortcut')"
              @click="selectShortcut(shortcut.value)"
            >
              {{ shortcut.text }}
            </button>
          </aside>

          <div :class="ns.e('body')">
            <div v-if="hasDate" :class="ns.e('calendars')">
              <section
                v-for="(calendarPanel, panelIndex) in calendarPanels"
                :key="`${calendarPanel.year()}-${calendarPanel.month()}-${panelIndex}`"
                :class="ns.e('calendar')"
              >
                <header :class="ns.e('header')">
                  <button type="button" :class="ns.e('nav')" @click="panelIndex === 0 ? navigate(-1, 'year') : navigateRight(-1, 'year')">«</button>
                  <button v-if="!usesYearGrid" type="button" :class="ns.e('nav')" @click="panelIndex === 0 ? navigate(-1, 'month') : navigateRight(-1, 'month')">‹</button>
                  <div :class="ns.e('title')">
                    <template v-if="usesYearGrid">{{ getYearBase(calendarPanel) }} - {{ getYearBase(calendarPanel) + 11 }}</template>
                    <template v-else>{{ calendarPanel.format(usesMonthGrid ? 'YYYY' : 'YYYY-MM') }}</template>
                  </div>
                  <button v-if="!usesYearGrid" type="button" :class="ns.e('nav')" @click="panelIndex === 0 ? navigate(1, 'month') : navigateRight(1, 'month')">›</button>
                  <button type="button" :class="ns.e('nav')" @click="panelIndex === 0 ? navigate(1, 'year') : navigateRight(1, 'year')">»</button>
                </header>

                <div v-if="usesYearGrid" :class="ns.e('year-grid')">
                  <button
                    v-for="year in Array.from({ length: 12 }, (_, index) => getYearBase(calendarPanel) + index)"
                    :key="year"
                    type="button"
                    :class="yearCellClass(year)"
                    @click="selectYear(year)"
                  >
                    {{ year }}
                  </button>
                </div>

                <div v-else-if="usesMonthGrid" :class="ns.e('month-grid')">
                  <button
                    v-for="month in 12"
                    :key="month"
                    type="button"
                    :class="monthCellClass(month - 1)"
                    @click="selectMonth(month - 1)"
                  >
                    {{ month }}月
                  </button>
                </div>

                <template v-else>
                  <div :class="ns.e('weeks')">
                    <span v-for="week in weekLabels" :key="week">{{ week }}</span>
                  </div>
                  <div :class="ns.e('grid')">
                    <button
                      v-for="cell in buildDateCells(calendarPanel)"
                      :key="cell.date.toISOString()"
                      type="button"
                      :class="dateCellClass(cell)"
                      :disabled="cell.disabled"
                      @click="selectDate(dayjs(cell.date))"
                      @mouseenter="hoverDate = dayjs(cell.date)"
                    >
                      <slot name="cell" :cell="cell">
                        <span>{{ cell.label }}</span>
                      </slot>
                    </button>
                  </div>
                </template>
              </section>
            </div>

            <div v-if="hasTime" :class="ns.e('times')">
              <section
                v-for="role in timeRoles"
                :key="role"
                :class="[ns.e('time'), ns.is('active', activeRangeRole === role)]"
                @click="activeRangeRole = role"
              >
                <div v-if="isRange" :class="ns.e('time-title')">
                  {{ role === 'start' ? startPlaceholder : endPlaceholder }}
                </div>
                <div :class="ns.e('time-columns')">
                  <div :class="ns.e('time-column')">
                    <button
                      v-for="hour in hours"
                      :key="hour"
                      type="button"
                      :class="[ns.e('time-option'), ns.is('selected', getDateForRole(role).hour() === hour)]"
                      :disabled="isTimeDisabled(role, 'hour', hour)"
                      @click="updateTime(role, 'hour', hour)"
                    >
                      {{ padTime(hour) }}
                    </button>
                  </div>
                  <div :class="ns.e('time-column')">
                    <button
                      v-for="minute in minutes"
                      :key="minute"
                      type="button"
                      :class="[ns.e('time-option'), ns.is('selected', getDateForRole(role).minute() === minute)]"
                      :disabled="isTimeDisabled(role, 'minute', minute)"
                      @click="updateTime(role, 'minute', minute)"
                    >
                      {{ padTime(minute) }}
                    </button>
                  </div>
                  <div v-if="showSeconds" :class="ns.e('time-column')">
                    <button
                      v-for="second in seconds"
                      :key="second"
                      type="button"
                      :class="[ns.e('time-option'), ns.is('selected', getDateForRole(role).second() === second)]"
                      :disabled="isTimeDisabled(role, 'second', second)"
                      @click="updateTime(role, 'second', second)"
                    >
                      {{ padTime(second) }}
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <slot name="footer" :confirm="confirm" :cancel="cancel" :clear="clearValue" />
            <footer v-if="!slots.footer" :class="ns.e('footer')">
              <button type="button" :class="ns.e('footer-btn')" @click="selectNow">
                {{ hasTime ? '现在' : '今天' }}
              </button>
              <span :class="ns.e('footer-spacer')" />
              <button type="button" :class="ns.e('footer-btn')" @click="clearValue()">清空</button>
              <button type="button" :class="ns.e('footer-btn')" @click="cancel">取消</button>
              <button type="button" :class="[ns.e('footer-btn'), ns.is('primary')]" @click="confirm">确定</button>
            </footer>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
