<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useEventsStore } from "./stores/events"

export default {
  setup() {
    // creating our events store
    const st = useEventsStore()

    // importing events
    st.importEvents()

    // get event by id function
    let getEventById = st.getEventById

    // testing our event store
    console.log(getEventById(1))
  }
}
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

<style>

@import './assets/base.css';

</style>
