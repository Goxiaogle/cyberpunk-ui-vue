<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { CpButton } from '@cyberpunk-vue/components/button'
import { datePickerEmits, datePickerProps, type DatePickerDayCell, type DatePickerViewMode, type DatePickerValue } from './date-picker'
import { dayjs, outputValue, toDayjs, type Dayjs } from './date-utils'

defineOptions({
  name: `${COMPONENT_PREFIX}DatePicker`,
})

const props = defineProps(datePickerProps)
const emit = defineEmits(datePickerEmits)

const ns = useNamespace('date-picker')
const weekLabels = ['一', '二', '三', '四', '五', '六', '日']
const monthLabels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

const selectedDate = ref<Dayjs | null>(null)
const viewDate = ref(dayjs())
const viewMode = ref<DatePickerViewMode>(props.viewMode)

const minDate = computed(() => toDayjs(props.min, 'YYYY-MM-DD', 'date'))
const maxDate = computed(() => toDayjs(props.max, 'YYYY-MM-DD', 'date'))
const yearWindowStart = computed(() => viewDate.value.year() - 10)
const yearOptions = computed(() => Array.from({ length: 21 }, (_, index) => yearWindowStart.value + index))
const selectedHeader = computed(() => selectedDate.value ? selectedDate.value.format('YYYY年M月D日') : '未选择')
const viewYearText = computed(() => `${viewDate.value.year()}年`)
const viewMonthText = computed(() => `${viewDate.value.month() + 1}月`)

const customStyle = computed(() => {
  if (!props.color) return undefined
  return {
    '--cp-date-picker-custom-color': props.color,
    '--cp-date-picker-custom-color-light': `color-mix(in srgb, ${props.color} 20%, transparent)`,
  }
})

const classes = computed(() => [
  ns.b(),
  ns.m('panel'),
  ns.m(`view-${viewMode.value}`),
  ns.is('custom-color', !!props.color),
  ns.is('disabled', props.disabled),
])

const dayCells = computed<DatePickerDayCell[]>(() => {
  const firstOfMonth = viewDate.value.date(1).startOf('day')
  const mondayOffset = (firstOfMonth.day() + 6) % 7
  const start = firstOfMonth.subtract(mondayOffset, 'day')

  return Array.from({ length: 42 }, (_, index) => {
    const date = start.add(index, 'day')
    const currentMonth = date.month() === viewDate.value.month()
    return {
      date: date.toDate(),
      label: String(date.date()),
      currentMonth,
      today: date.isSame(dayjs(), 'day'),
      selected: !!selectedDate.value && date.isSame(selectedDate.value, 'day'),
      disabled: isDateDisabled(date),
    }
  })
})

function syncFromModel() {
  const parsed = toDayjs(props.modelValue, props.valueFormat || 'YYYY-MM-DD', 'date')
  selectedDate.value = parsed
  const fallback = toDayjs(props.defaultValue, 'YYYY-MM-DD', 'date') || dayjs()
  viewDate.value = parsed || fallback
}

function isDateDisabled(date: Dayjs): boolean {
  if (props.disabled) return true
  if (minDate.value && date.isBefore(minDate.value, 'day')) return true
  if (maxDate.value && date.isAfter(maxDate.value, 'day')) return true
  return !!props.disabledDate?.(date.toDate())
}

function outputDate(date: Dayjs): DatePickerValue {
  return outputValue(date, props.valueFormat)
}

function selectDate(date: Dayjs) {
  if (isDateDisabled(date)) return
  selectedDate.value = date.startOf('day')
  const output = outputDate(selectedDate.value)
  emit('update:modelValue', output)
  emit('change', output)
}

function setViewDate(date: Dayjs) {
  viewDate.value = date.date(1)
  emit('update:month', viewDate.value.month())
  emit('update:year', viewDate.value.year())
}

function setViewMode(mode: DatePickerViewMode) {
  viewMode.value = mode
  emit('update:viewMode', mode)
}

function toggleViewMode(mode: Exclude<DatePickerViewMode, 'day'>) {
  setViewMode(viewMode.value === mode ? 'day' : mode)
}

function addMonth(amount: number) {
  setViewDate(viewDate.value.add(amount, 'month'))
  setViewMode('day')
}

function addYear(amount: number) {
  setViewDate(viewDate.value.add(amount, 'year'))
}

function addYearWindow(amount: number) {
  setViewDate(viewDate.value.add(amount * 10, 'year'))
}

function isMonthDisabled(month: number): boolean {
  if (props.disabled) return true
  const start = viewDate.value.month(month).startOf('month')
  const end = start.endOf('month')
  if (minDate.value && end.isBefore(minDate.value, 'day')) return true
  if (maxDate.value && start.isAfter(maxDate.value, 'day')) return true
  return false
}

function isYearDisabled(year: number): boolean {
  if (props.disabled) return true
  const start = viewDate.value.year(year).startOf('year')
  const end = start.endOf('year')
  if (minDate.value && end.isBefore(minDate.value, 'day')) return true
  if (maxDate.value && start.isAfter(maxDate.value, 'day')) return true
  return false
}

function selectMonth(month: number) {
  if (isMonthDisabled(month)) return
  setViewDate(viewDate.value.month(month))
  setViewMode('day')
}

function selectYear(year: number) {
  if (isYearDisabled(year)) return
  setViewDate(viewDate.value.year(year))
  setViewMode('day')
}

function goToday() {
  const today = dayjs().startOf('day')
  setViewDate(today)
  selectDate(today)
}

function cellClass(cell: DatePickerDayCell) {
  return [
    ns.e('panel-day-cell'),
    ns.is('adjacent', !cell.currentMonth),
    ns.is('hidden', !cell.currentMonth && !props.showAdjacentMonths),
    ns.is('today', cell.today),
    ns.is('selected', cell.selected),
    ns.is('disabled', cell.disabled),
  ]
}

function monthClass(index: number) {
  return [
    ns.e('panel-month'),
    ns.is('selected', index === viewDate.value.month()),
  ]
}

function yearClass(year: number) {
  return [
    ns.e('panel-year'),
    ns.is('selected', year === viewDate.value.year()),
  ]
}

watch(() => props.modelValue, syncFromModel, { immediate: true })
watch(() => props.viewMode, mode => setViewMode(mode))

defineExpose({
  /** @description 跳转并选中今天 */
  goToday,
  /** @description 设置当前展示年月 */
  setViewDate,
})
</script>

<template>
  <section :class="classes" :style="customStyle">
    <header :class="ns.e('panel-header')">
      <slot name="header" :selected="selectedDate?.toDate()" :view-date="viewDate.toDate()">
        <div :class="ns.e('panel-title')">{{ title }}</div>
        <div :class="ns.e('panel-selected')">{{ selectedHeader }}</div>
      </slot>
    </header>

    <div :class="ns.e('panel-layout')">
      <main :class="ns.e('month-pane')">
        <div :class="ns.e('controls')">
          <div :class="ns.e('control-group')">
            <CpButton
              size="sm"
              variant="ghost"
              shape="no-clip"
              square
              @click="viewMode === 'year' ? addYearWindow(-1) : addYear(-1)"
            >
              ‹
            </CpButton>
            <button type="button" :class="ns.e('control-label')" @click="toggleViewMode('year')">{{ viewYearText }}</button>
            <CpButton
              size="sm"
              variant="ghost"
              shape="no-clip"
              square
              @click="viewMode === 'year' ? addYearWindow(1) : addYear(1)"
            >
              ›
            </CpButton>
          </div>
          <div :class="ns.e('control-group')">
            <CpButton size="sm" variant="ghost" shape="no-clip" square @click="addMonth(-1)">‹</CpButton>
            <button type="button" :class="ns.e('control-label')" @click="toggleViewMode('month')">{{ viewMonthText }}</button>
            <CpButton size="sm" variant="ghost" shape="no-clip" square @click="addMonth(1)">›</CpButton>
          </div>
        </div>

        <div :class="ns.e('view-body')">
          <div v-if="viewMode === 'month'" :class="ns.e('panel-months')">
            <CpButton
              v-for="(month, index) in monthLabels"
              :key="month"
              size="md"
              :type="index === viewDate.month() ? 'primary' : 'default'"
              :variant="index === viewDate.month() ? 'semi' : 'ghost'"
              shape="circle"
              :decoration="false"
              :disabled="isMonthDisabled(index)"
              :class="monthClass(index)"
              @click="selectMonth(index)"
            >
              {{ month }}
            </CpButton>
          </div>

          <div v-else-if="viewMode === 'year'" :class="ns.e('panel-years')">
            <CpButton
              v-for="year in yearOptions"
              :key="year"
              size="md"
              :type="year === viewDate.year() ? 'primary' : 'default'"
              :variant="year === viewDate.year() ? 'semi' : 'ghost'"
              shape="circle"
              :decoration="false"
              :disabled="isYearDisabled(year)"
              :class="yearClass(year)"
              @click="selectYear(year)"
            >
              {{ year }}
            </CpButton>
          </div>

          <template v-else>
            <div :class="ns.e('panel-weekdays')">
              <span v-for="week in weekLabels" :key="week">{{ week }}</span>
            </div>
            <div :class="ns.e('panel-days')">
              <div
                v-for="cell in dayCells"
                :key="cell.date.toISOString()"
                :class="cellClass(cell)"
              >
                <CpButton
                  size="sm"
                  shape="circle"
                  :type="cell.selected ? 'primary' : 'default'"
                  :variant="cell.selected ? 'semi' : (cell.today ? 'outline' : 'ghost')"
                  :decoration="false"
                  :disabled="cell.disabled || (!cell.currentMonth && !showAdjacentMonths)"
                  :class="ns.e('panel-day-btn')"
                  @click="selectDate(dayjs(cell.date))"
                >
                  <slot name="day" :cell="cell">
                    {{ cell.label }}
                  </slot>
                </CpButton>
              </div>
            </div>
          </template>
        </div>
      </main>
    </div>

    <footer :class="ns.e('panel-actions')">
      <slot name="actions" :today="goToday">
        <CpButton size="sm" variant="ghost" shape="no-clip" @click="goToday">今天</CpButton>
      </slot>
    </footer>
  </section>
</template>
