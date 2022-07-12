<script setup>
</script>

<template>
  <main>
    <ul>
      <!-- looping in all events and creating theirs links -->
      <li v-for="event in eventStore.getAllEvents">
        <RouterLink :to="'/event/' + event.id">
          {{ "Event " + event.title + " " + event.id }}
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<script>
import { useEventsStore } from "../stores/events"

export default {
  data() {
    return {
      eventStore: useEventsStore(),
    }
  }
}
</script>