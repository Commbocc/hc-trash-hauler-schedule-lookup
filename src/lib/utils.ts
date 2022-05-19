import { standardClient, recyclingClient, DaysOfWeek } from './holidays'

/**
 *
 * @param dayOfWeek
 * @param startDate
 * @param excludeStartDate
 */
export function nexDayOfWeek(
  dayOfWeek: keyof typeof DaysOfWeek,
  startDate = new Date(),
  excludeStartDate = false
): Date {
  startDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    excludeStartDate ? startDate.getDate() + 1 : startDate.getDate()
  )

  const startDateDayOfMonth = startDate.getDate()
  const startDateDayOfWeek = startDate.getDay()
  const distance = DaysOfWeek[dayOfWeek] - startDateDayOfWeek

  let date = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDateDayOfMonth + distance
  )

  return date < startDate ? new Date(date.setDate(date.getDate() + 7)) : date
}

/**
 *
 * @param this
 * @param dayOfWeek
 */
export function nextDaysOfWeekWithHolidays(
  this: ScheduleTypes,
  dayOfWeek: keyof typeof DaysOfWeek
): INextDateResult[] {
  let dateResults: INextDateResult[] = []

  let nextDate: Date = nexDayOfWeek(dayOfWeek)

  let dateResult: INextDateResult = {
    date: nextDate,
    isHoliday:
      this === 'recycle'
        ? recyclingClient.isHoliday(nextDate)
        : standardClient.isHoliday(nextDate),
  }

  dateResults.push(dateResult)

  while (dateResult.isHoliday) {
    nextDate = nexDayOfWeek(dayOfWeek, dateResult.date, true)

    dateResult = {
      date: nextDate,
      isHoliday:
        this === 'recycle'
          ? recyclingClient.isHoliday(nextDate)
          : standardClient.isHoliday(nextDate),
    }

    dateResults.push(dateResult)
  }

  return dateResults
}

/**
 * Sorts array of INextDateResult dates in ascending order
 * @param a
 * @param b
 */
export function sortDatesAsc(a: INextDateResult, b: INextDateResult) {
  return a.date.valueOf() - b.date.valueOf()
}

/**
 *
 * @param phone
 */
export function formatPhone(phone: string) {
  return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(
    6,
    10
  )}`
}

/**
 *
 */
export enum CollectionTypes {
  garbage = 'Garbage',
  recycle = 'Recycling',
  yard = 'Yard Waste',
}
