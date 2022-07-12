<script setup>
// importing router link and router view
import { RouterLink, RouterView } from 'vue-router'
// importing the event store
import { useEventsStore } from "./stores/events";

// downloading our events
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
    <!-- Router view -->
    <RouterView />
    <!-- footer -->
    <footer>
      Footer
    </footer>
  </main>
</template>

<style>
@import './assets/base.css';
</style>
