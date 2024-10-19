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

const esriProvider = reactive<IReactiveEsriProvider>({
  loading: false,
})

async function fetchProviderFeatures(geometry: __esri.Geometry) {
  esriProvider.loading = true
  esriProvider.lookup = undefined

  try {
    for (const { url, lookup } of providerEndpoints) {
      try {
        featureLayerProps.url = url
        const [firstFeature] = await queryFeatures(geometry)
        if (!firstFeature) continue
        return (esriProvider.lookup = firstFeature?.attributes[lookup])
      } catch (error) {
        continue
      }
    }
  } finally {
    esriProvider.loading = false
  }
}

const airtableProviders = reactive<IReactiveAirtableProviders>({
  loading: false,
  data: [],
})

async function fetchAirtableProviders() {
  airtableProviders.loading = true
  try {
    const { records } = await fetch(
      'https://hc-airtable-caching-proxy.netlify.app/api/v1/airtable/appQrDnZGUnnURpdH/providers'
    ).then((r) => r.json())
    airtableProviders.data = records
  } catch (error) {
    //
  } finally {
    airtableProviders.loading = false
  }
}

const provider = computed(() =>
  esriProvider.lookup
    ? airtableProviders.data.find(({ fields }) =>
        fields.lookups.includes(esriProvider.lookup!)
      )?.fields
    : undefined
)

const hasProvider = computed<boolean>(
  () => airtableProviders.data.length > 0 && esriProvider.lookup !== undefined
)

export const useProvider = () => {
  return {
    esriProvider,
    fetchProviderFeatures,
    airtableProviders,
    fetchAirtableProviders,
    provider,
    hasProvider,
  }
}
