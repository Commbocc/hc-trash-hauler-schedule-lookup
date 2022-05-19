import { computed, reactive } from 'vue'
import { featureLayerProps, queryFeatures } from '@hcflgov/vue-esri-search'
import { nextDaysOfWeekWithHolidays, sortDatesAsc } from './utils'
import { DaysOfWeek } from './holidays'

const scheduleEndpoint =
  'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer'

const endpoints: Record<ScheduleTypes, string> = {
  garbage: `${scheduleEndpoint}/2`,
  recycle: `${scheduleEndpoint}/1`,
  yard: `${scheduleEndpoint}/0`,
}

export const schedule = reactive<IReactiveSchedule>({
  loading: false,
  data: {
    garbage: undefined,
    recycle: undefined,
    yard: undefined,
  },
})

export async function fetchScheduleFeatures(extent: __esri.Extent) {
  schedule.loading = true
  try {
    let key: ScheduleTypes
    for (key in endpoints) {
      try {
        featureLayerProps.url = endpoints[key]
        const [firstFeature] = await queryFeatures(extent)
        schedule.data[key] = firstFeature?.toJSON().attributes || undefined
      } catch (error) {
        console.info(`unable to find ${key} schedule`)
      }
    }
  } finally {
    schedule.loading = false
  }
}

export const weekdays = computed<
  Record<ScheduleTypes, (keyof typeof DaysOfWeek)[] | undefined>
>(() => {
  const { garbage, recycle, yard } = schedule.data
  return {
    garbage: garbage ? [garbage['Day1'], garbage['Day2']] : undefined,
    recycle: recycle ? [recycle['Day']] : undefined,
    yard: yard ? [yard['Day']] : undefined,
  }
})

export const nextDates = computed<
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
      ? yard.map(nextDaysOfWeekWithHolidays).flat().sort(sortDatesAsc)
      : undefined,
  }
})

export const hasSchedule = computed<boolean>(
  () =>
    schedule.data.garbage !== undefined ||
    schedule.data.recycle !== undefined ||
    schedule.data.yard !== undefined
)
