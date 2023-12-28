/**
 *
 */
export const Tests = {
  //
  ExactMonthDate: (testMonth: Months, testDayOfMonth: number) => {
    return (date: Date): boolean => {
      return testMonth == date.getMonth() && testDayOfMonth == date.getDate()
    }
  },

  //
  MonthsFirstDayOfWeek: (testMonth: Months, testDayOfWeek: DaysOfWeek) => {
    return (date: Date): boolean => {
      let d = new Date(date.getFullYear(), testMonth, 1)
      while (d.getDay() !== testDayOfWeek) {
        d.setDate(d.getDate() + 1)
      }
      return date.getTime() == d.getTime()
    }
  },

  //
  MonthsLastDayOfWeek: (testMonth: Months, testDayOfWeek: DaysOfWeek) => {
    return (date: Date): boolean => {
      let d = new Date(date.getFullYear(), testMonth + 1, 0)
      while (d.getDay() !== testDayOfWeek) {
        d.setDate(d.getDate() - 1)
      }
      return date.getTime() == d.getTime()
    }
  },

  //
  MonthsNthDayOfWeek: (
    testMonth: Months,
    testDayOfWeek: DaysOfWeek,
    n: number
  ) => {
    return (date: Date): boolean => {
      let d = new Date(date.getFullYear(), testMonth, 1)
      while (d.getDay() !== testDayOfWeek) {
        d.setDate(d.getDate() + 1)
      }
      d.setDate(d.getDate() + (n! - 1) * 7)
      return date.getTime() == d.getTime()
    }
  },

  //
  MonthsNthToLastDayOfWeek: (
    testMonth: Months,
    testDayOfWeek: DaysOfWeek,
    n: number
  ) => {
    return (date: Date): boolean => {
      let d = new Date(date.getFullYear(), testMonth + 1, 0)
      while (d.getDay() !== testDayOfWeek) {
        d.setDate(d.getDate() - 1)
      }
      d.setDate(d.getDate() - (n! - 1) * 7)
      return date.getTime() == d.getTime()
    }
  },
}

/**
 *
 */
export enum Months {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

/**
 *
 */
export enum DaysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
