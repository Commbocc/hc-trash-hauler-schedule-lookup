import { reactive, computed } from 'vue'
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

export const esriProvider = reactive<IReactiveEsriProvider>({
  loading: false,
})

export async function fetchProviderFeatures(extent: __esri.Extent) {
  esriProvider.loading = true
  esriProvider.lookup = undefined

  try {
    for (const { url, lookup } of providerEndpoints) {
      try {
        featureLayerProps.url = url
        const [firstFeature] = await queryFeatures(extent)
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

export const airtableProviders = reactive<IReactiveAirtableProviders>({
  loading: false,
  data: [],
})

export async function fetchAirtableProviders() {
  airtableProviders.loading = true
  try {
    const { records } = await fetch(
      'https://hc-caching-proxy.herokuapp.com/airtable/appQrDnZGUnnURpdH/providers'
    ).then((r) => r.json())
    airtableProviders.data = records
  } catch (error) {
    //
  } finally {
    airtableProviders.loading = false
  }
}

export const provider = computed(() =>
  esriProvider.lookup
    ? airtableProviders.data.find(({ fields }) =>
        fields.lookups.includes(esriProvider.lookup!)
      )?.fields
    : undefined
)

export const hasProvider = computed<boolean>(
  () => airtableProviders.data.length > 0 && esriProvider.lookup !== undefined
)
