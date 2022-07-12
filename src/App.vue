<script setup>
// importing router link and router view
import { RouterLink, RouterView } from 'vue-router'
// importing the event store
import { useEventsStore } from "./stores/events";

// importing our events
useEventsStore().importEvents()
</script>

<template>
  <main>
    <header>
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/about">
        About us
      </RouterLink>
    </header>
    <!-- We want to have the list of our events only in home screen -->
    <div v-if="this.$route.name === 'home'">
      <!-- looping in all events and creating theirs links -->
      <ul>
        <li v-for="event in eventStore.getAllEvents">
          <RouterLink :to="'/event/' + event.id">
            {{ "Event " + event.title + " " + event.id }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- our router view -->
    <RouterView />
    <!-- footer -->
    <footer>
      Footer
    </footer>
  </main>
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
