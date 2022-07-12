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
  <RouterLink to="/event/1">
    Event 1
  </RouterLink>
  <RouterLink to="/event/2">
    Event 2
  </RouterLink>
  <RouterView />
</template>

<script>
import { useEventsStore } from "./stores/events"

export default {
  mounted() {
    // testing our event store
    console.log(useEventsStore().getEventById(1).title)
  }
}
</script>

<style>

@import './assets/base.css';

</style>
