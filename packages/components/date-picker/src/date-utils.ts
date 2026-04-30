import dayjs, { type Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)

import type { PickerModelValue, PickerType, PickerValueItem } from './picker'

export { dayjs }
export type { Dayjs }

export const DATE_FORMAT = 'YYYY-MM-DD'
export const MONTH_FORMAT = 'YYYY-MM'
export const YEAR_FORMAT = 'YYYY'
export const TIME_FORMAT = 'HH:mm:ss'
export const TIME_MINUTE_FORMAT = 'HH:mm'
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function isRangeType(type: PickerType): boolean {
  return type.endsWith('range')
}

export function isMultipleType(type: PickerType): boolean {
  return type === 'dates'
}

export function hasDatePanel(type: PickerType): boolean {
  return type !== 'time' && type !== 'timerange'
}

export function hasTimePanel(type: PickerType): boolean {
  return type === 'time' || type === 'timerange' || type === 'datetime' || type === 'datetimerange'
}

export function isMonthType(type: PickerType): boolean {
  return type === 'month' || type === 'monthrange'
}

export function isYearType(type: PickerType): boolean {
  return type === 'year' || type === 'yearrange'
}

export function getDefaultFormat(type: PickerType, showSeconds = true): string {
  if (type === 'time' || type === 'timerange') return showSeconds ? TIME_FORMAT : TIME_MINUTE_FORMAT
  if (type === 'datetime' || type === 'datetimerange') return showSeconds ? DATETIME_FORMAT : 'YYYY-MM-DD HH:mm'
  if (isYearType(type)) return YEAR_FORMAT
  if (isMonthType(type)) return MONTH_FORMAT
  if (type === 'week') return 'YYYY 第 ww 周'
  return DATE_FORMAT
}

export function toDayjs(
  value: PickerValueItem | null | undefined,
  format?: string,
  type: PickerType = 'date',
): Dayjs | null {
  if (value === null || value === undefined || value === '') return null

  if (value instanceof Date) {
    const parsed = dayjs(value)
    return parsed.isValid() ? parsed : null
  }

  if (typeof value === 'number') {
    const parsed = dayjs(value)
    return parsed.isValid() ? parsed : null
  }

  const parseFormat = format || getDefaultFormat(type)
  const strictParsed = dayjs(value, parseFormat, true)
  if (strictParsed.isValid()) return strictParsed

  const looseParsed = dayjs(value)
  return looseParsed.isValid() ? looseParsed : null
}

export function normalizeModelValue(
  value: PickerModelValue,
  format: string | undefined,
  type: PickerType,
): Dayjs[] {
  if (Array.isArray(value)) {
    return value
      .map(item => toDayjs(item, format, type))
      .filter((item): item is Dayjs => !!item)
  }

  const parsed = toDayjs(value, format, type)
  return parsed ? [parsed] : []
}

export function applyTime(date: Dayjs, time: Dayjs): Dayjs {
  return date
    .hour(time.hour())
    .minute(time.minute())
    .second(time.second())
    .millisecond(0)
}

export function parseTime(value: string | undefined, fallback: Dayjs = dayjs()): Dayjs {
  if (!value) return fallback
  const parsed = dayjs(value, TIME_FORMAT, true)
  if (parsed.isValid()) return parsed
  const minuteParsed = dayjs(value, TIME_MINUTE_FORMAT, true)
  return minuteParsed.isValid() ? minuteParsed.second(0) : fallback
}

export function outputValue(date: Dayjs, valueFormat: string): PickerValueItem {
  const normalized = date.millisecond(0)
  if (valueFormat === 'timestamp') return normalized.valueOf()
  if (valueFormat) return normalized.format(valueFormat)
  return normalized.toDate()
}

export function outputModelValue(dates: Dayjs[], type: PickerType, valueFormat: string): PickerModelValue {
  if (isRangeType(type) || isMultipleType(type)) {
    return dates.map(date => outputValue(date, valueFormat))
  }
  return dates[0] ? outputValue(dates[0], valueFormat) : null
}

export function isSameByType(a: Dayjs, b: Dayjs, type: PickerType): boolean {
  if (isYearType(type)) return a.isSame(b, 'year')
  if (isMonthType(type)) return a.isSame(b, 'month')
  if (type === 'week') return a.year() === b.year() && a.week() === b.week()
  return a.isSame(b, 'day')
}

export function isBetweenDay(date: Dayjs, start: Dayjs, end: Dayjs): boolean {
  const value = date.startOf('day').valueOf()
  return value >= start.startOf('day').valueOf() && value <= end.startOf('day').valueOf()
}

export function sortRange(dates: Dayjs[]): Dayjs[] {
  if (dates.length < 2) return dates
  return dates[0].isAfter(dates[1]) ? [dates[1], dates[0]] : [dates[0], dates[1]]
}

export function buildSteppedNumbers(max: number, step: number): number[] {
  const normalizedStep = Math.max(1, Math.floor(step || 1))
  const items: number[] = []
  for (let value = 0; value <= max; value += normalizedStep) {
    items.push(value)
  }
  return items
}

export function padTime(value: number): string {
  return String(value).padStart(2, '0')
}
