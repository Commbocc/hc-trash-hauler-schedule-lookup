<script setup lang="ts">
import { schedule, weekdays, nextDates, hasSchedule } from '../lib/schedule'
import { hasProvider } from '../lib/providers'
import { CollectionTypes } from '../lib/utils'

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
</script>

<template>
  <div v-if="schedule.loading" class="card-body d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <table v-else-if="hasSchedule" class="table table-striped mb-0">
    <tbody>
      <template v-for="(days, type) in weekdays">
        <tr v-if="days">
          <th :id="CollectionTypes[type]">
            {{ CollectionTypes[type] }} Days
            <small class="d-block fw-light">Next Pickup Date(s)</small>
          </th>

          <td :aria-describedby="CollectionTypes[type]">
            {{ days.map((d) => `${d.toString()}s`).join(' & ') }}

            <ul>
              <li v-for="result in nextDates[type]">
                <span
                  :class="{ 'text-decoration-line-through': result.isHoliday }"
                >
                  {{ result.date.toLocaleDateString(undefined, dateOptions) }}
                </span>
                <span v-if="result.isHoliday" class="badge bg-secondary ms-2">
                  No pickup on holiday
                </span>
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </tbody>
  </table>

  <div v-else-if="hasProvider" class="card-body">
    We weren't able to find your trash and recycling schedule, but we know who
    your hauler is. Contact the provider listed above for your pickup schedule.
  </div>
</template>
