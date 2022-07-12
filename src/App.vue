<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
    // creating our events store
    const st = useEventsStore()

    // importing events
    st.importEvents()

    // testing our event store
    console.log(st.getEventById(1).title)
  }
}
</script>

<style>

@import './assets/base.css';

</style>
