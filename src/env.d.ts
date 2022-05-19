/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

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
