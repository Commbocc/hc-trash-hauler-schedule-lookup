import { Tests, Months, DaysOfWeek } from './tests'
export * from './tests'

/**
 * Recycling holiday schedule
 */
const recyclingConfig: IHolidayConfig = {
  holidays: [
    // Martin Luther King, Jr. Day (Third Monday in January)
    Tests.MonthsNthDayOfWeek(Months.January, DaysOfWeek.Monday, 3),
    // Memorial Day (Last Monday in May)
    Tests.MonthsLastDayOfWeek(Months.May, DaysOfWeek.Monday),
    // Juneteenth (June 19)
    Tests.ExactMonthDate(Months.June, 19),
    // Independence Day (July 4)
    Tests.ExactMonthDate(Months.July, 4),
    // Labor Day (First Monday in September)
    Tests.MonthsFirstDayOfWeek(Months.September, DaysOfWeek.Monday),
    // Thanksgiving Day (Fourth Thursday in November)
    Tests.MonthsNthDayOfWeek(Months.November, DaysOfWeek.Thursday, 4),
    // Christmas Day (December 25)
    Tests.ExactMonthDate(Months.December, 25),
  ],
}

/**
 * Trash & Yard waste holiday schedule
 * all days in recycling schedule + New Year
 */
const standardConfig: IHolidayConfig = {
  holidays: [
    ...recyclingConfig.holidays,
    // New Year’s Day (January 1)
    Tests.ExactMonthDate(Months.January, 1),
  ],
}

/**
 * dev test dates
 */
if (import.meta.env.DEV) {
  standardConfig.holidays.push(Tests.ExactMonthDate(Months.April, 28))
}

/**
 * Holiday schedule constructor
 */
export class IsHoliday {
  holidays: HolidayTestFunction[]

  constructor(config: IHolidayConfig) {
    this.holidays = config.holidays
  }

  isHoliday(date: Date): boolean {
    let result = false
    for (let test of this.holidays) {
      result = test(date)
      if (result) break
    }
    return result
  }
}

/**
 * export clients
 */
export const recyclingClient = new IsHoliday(recyclingConfig)
export const standardClient = new IsHoliday(standardConfig)
