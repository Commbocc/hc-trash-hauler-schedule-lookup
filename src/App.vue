<script setup lang="ts">
import { SearchBootstrap } from '@hcflgov/vue-esri-search'
import Schedule from './components/Schedule.vue'
import Provider from './components/Provider.vue'
import { watchResults, hasSearched } from './lib'
import { fetchAirtableProviders } from './lib/providers'

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
