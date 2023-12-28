<script setup lang="ts">
import { SearchBootstrap } from '@hcflgov/vue-esri-search'
import 'iframe-resizer/js/iframeResizer.contentWindow'

const { watchResults, hasSearched } = useSearch()
const { fetchAirtableProviders } = useProvider()

fetchAirtableProviders()
</script>

<template>
  <main class="container-fluid py-3">
    <SearchBootstrap hc-sources hide-sources large @results="watchResults" />

    <div v-if="hasSearched" class="card rounded-0 mt-3">
      <Provider />
      <Schedule />
    </div>
  </main>
</template>
