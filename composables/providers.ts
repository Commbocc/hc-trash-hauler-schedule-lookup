import { featureLayerProps, queryFeatures } from '@hcflgov/vue-esri-search'

const providerEndpoints = [
  {
    url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_FACILITIES/MapServer/1', // county
    lookup: 'TAG',
  },
  {
    url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/MaintStar/MapServiceBaseMap_20150801_Production_1/MapServer/80', // incorporated
    lookup: 'NAME',
  },
]

export const useProvider = () => {
  const esriProvider = useState<IReactiveEsriProvider>('esriProvider', () => ({
    loading: false,
  }))

  const airtableProviders = useState<IReactiveAirtableProviders>(
    'airtableProviders',
    () => ({
      loading: false,
      data: [],
    })
  )

  const hasProvider = computed<boolean>(
    () =>
      airtableProviders.value.data.length > 0 &&
      esriProvider.value.lookup !== undefined
  )

  const provider = computed(() =>
    esriProvider.value.lookup
      ? airtableProviders.value.data.find(({ fields }) =>
          fields.lookups.includes(esriProvider.value.lookup!)
        )?.fields
      : undefined
  )

  async function fetchProviderFeatures(geometry: __esri.Geometry) {
    esriProvider.value.loading = true
    esriProvider.value.lookup = undefined

    try {
      for (const { url, lookup } of providerEndpoints) {
        try {
          featureLayerProps.url = url
          const [firstFeature] = await queryFeatures(geometry)
          if (!firstFeature) continue
          return (esriProvider.value.lookup = firstFeature?.attributes[lookup])
        } catch (error) {
          continue
        }
      }
    } finally {
      esriProvider.value.loading = false
    }
  }

  async function fetchAirtableProviders() {
    airtableProviders.value.loading = true
    try {
      const { records } = await fetch(
        'https://hc-airtable-caching-proxy.netlify.app/api/v1/airtable/appQrDnZGUnnURpdH/providers'
      ).then((r) => r.json())
      airtableProviders.value.data = records
    } catch (error) {
      //
    } finally {
      airtableProviders.value.loading = false
    }
  }

  return {
    esriProvider,
    fetchProviderFeatures,
    airtableProviders,
    fetchAirtableProviders,
    provider,
    hasProvider,
  }
}
