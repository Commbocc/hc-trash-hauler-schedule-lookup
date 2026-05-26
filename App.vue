<script setup lang="ts">
import { SearchBootstrap } from '@hcflgov/vue-esri-search'
import 'iframe-resizer/js/iframeResizer.contentWindow'

const { fetchResults, hasSearched } = useSearch()
const { fetchAirtableProviders } = useProvider()

await fetchAirtableProviders()
</script>

<template>
  <main class="container-fluid py-3">
    <SearchBootstrap hc-sources hide-sources large @results="fetchResults" />

    <div v-if="hasSearched" class="card rounded-0 mt-3">
      <Provider />
      <Schedule />
    </div>
  </main>
</template>
