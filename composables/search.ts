import { input, searchResults } from '@hcflgov/vue-esri-search'

const hasSearched = ref<boolean>(false)

const watchResults = async (results: __esri.SearchResult[]) => {
  const { fetchProviderFeatures } = useProvider()
  const { fetchScheduleFeatures } = useSchedule()

  hasSearched.value = true
  searchResults.status = null
  if (!results.length) throw 'No Search Results'
  const [firstResult] = results

  searchResults.status = `Results for ${firstResult.name}`

  await Promise.allSettled([
    fetchProviderFeatures(firstResult?.feature?.geometry),
    fetchScheduleFeatures(firstResult?.feature?.geometry),
  ])
}

export const useSearch = () => {
  return {
    hasSearched,
    watchResults,
  }
}

if (import.meta.env.DEV) {
  input.value = '602 W Bloomingdale Ave, Brandon, FL 33511' // hc
  // input.value = '601 E Kennedy Blvd, Tampa' // tampa
  // input.value = '1702 Waller St, Plant City, 33563' // plant
}
