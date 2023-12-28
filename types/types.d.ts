type ScheduleTypes = 'garbage' | 'recycle' | 'yard'

interface IReactiveSchedule {
  loading: boolean
  data: Record<ScheduleTypes, Record<string, any> | undefined>
}

/**
 * Esri Provider
 */

interface IReactiveEsriProvider {
  loading: boolean
  lookup?: string
}

/**
 * Airtable Providers
 */

interface IAirtableProvider {
  id: string
  createdTime: string
  fields: {
    lookups: string[]
    name: string
    website: string
    email?: string
    phone?: string
    fax?: string
    address?: string
    message?: string
  }
}

interface IReactiveAirtableProviders {
  loading: boolean
  data: IAirtableProvider[]
}

interface INextDateResult {
  date: Date
  isHoliday: boolean
}

/**
 * Holidays
 */
interface IHolidayConfig {
  holidays: HolidayTestFunction[]
}

type HolidayTestFunction = (date: Date) => boolean

interface IHolidayResult {
  name?: string
  date: Date
  result: boolean
}
