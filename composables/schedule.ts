import { featureLayerProps, queryFeatures } from '@hcflgov/vue-esri-search'
import { nextDaysOfWeekWithHolidays, sortDatesAsc } from './utils'
import { DaysOfWeek } from './holidays'

const scheduleEndpoint =
  'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer'

const endpoints = {
  garbage: `${scheduleEndpoint}/2`,
  recycle: `${scheduleEndpoint}/1`,
  yard: `${scheduleEndpoint}/0`,
} as const satisfies Record<ScheduleTypes, string>

export const useSchedule = () => {
  const schedule = useState<IReactiveSchedule>('schedule', () => ({
    loading: false,
    data: {
      garbage: undefined,
      recycle: undefined,
      yard: undefined,
    },
  }))

  async function fetchScheduleFeatures(geometry: __esri.Geometry) {
    schedule.value.loading = true

    try {
      for (const key of Object.keys(endpoints) as Array<
        keyof typeof endpoints
      >) {
        // console.log(key)

        // featureLayerProps.url = endpoints[key]
        // const d = await queryFeatures(geometry)

        // try {
        featureLayerProps.url = endpoints[key]
        const [firstFeature] = await queryFeatures(geometry)
        // console.log(`firstFeature`, firstFeature?.toJSON().attributes)
        schedule.value.data[key] =
          firstFeature?.toJSON().attributes || undefined
        // } catch (error) {
        //   console.info(`unable to find ${key} schedule`)
        // }
      }
    } catch (e) {
      console.warn(e)
    } finally {
      schedule.value.loading = false
    }
  }

  const weekdays = computed<
    Record<ScheduleTypes, (keyof typeof DaysOfWeek)[] | undefined>
  >(() => {
    const { garbage, recycle, yard } = schedule.value.data

    const toWeekday = (day: string) =>
      day.toLowerCase() as keyof typeof DaysOfWeek

    return {
      garbage: garbage
        ? [toWeekday(`${garbage['Day1']}`), toWeekday(`${garbage['Day2']}`)]
        : undefined,
      recycle: recycle ? [toWeekday(`${recycle['Day']}`)] : undefined,
      yard: yard ? [toWeekday(`${yard['Day']}`)] : undefined,
    }
  })

  const nextDates = computed<
    Record<ScheduleTypes, INextDateResult[] | undefined>
  >(() => {
    const { garbage, recycle, yard } = weekdays.value
    return {
      garbage: garbage
        ? garbage.map(nextDaysOfWeekWithHolidays).flat().sort(sortDatesAsc)
        : undefined,
      recycle: recycle
        ? recycle
            .map(nextDaysOfWeekWithHolidays.bind('recycle'))
            .flat()
            .sort(sortDatesAsc)
        : undefined,
      yard: yard
        ? yard
            .map(nextDaysOfWeekWithHolidays.bind('yard'))
            .flat()
            .sort(sortDatesAsc)
        : undefined,
    }
  })

  const hasSchedule = computed<boolean>(
    () =>
      schedule.value.data.garbage !== undefined ||
      schedule.value.data.recycle !== undefined ||
      schedule.value.data.yard !== undefined
  )

  return {
    schedule,
    fetchScheduleFeatures,
    weekdays,
    nextDates,
    hasSchedule,
  }
}
