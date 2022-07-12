<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useEventsStore } from "./stores/events";

// creating our events store
const st = useEventsStore()

// importing events
st.importEvents()
</script>

<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About us
  </RouterLink>
  <RouterLink v-for="event in eventStore.getAllEvents" :to="'/event/' + event.id">
    {{ "Event " + event.title + " " + event.id }}
  </RouterLink>
  <RouterView />
</template>

<script>
import { useEventsStore } from "./stores/events"

export default {
  data() {
    return {
      eventStore: useEventsStore(),
    }
  }
}
</script>

<style>

@import './assets/base.css';

</style>
