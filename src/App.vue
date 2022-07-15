<script setup>
// importing view component
import Header from "./components/Header.vue";

// importing router link and router view
import { RouterView } from 'vue-router'

// importing the event store
import { useEventsStore } from "./stores/events";

// getting our events
useEventsStore().importEvents()
</script>

<template>
  <main>
    <!-- Header component -->
    <Header v-if="this.$route.name !== 'home'"></Header>
    <!-- Router view -->
    <RouterView />
  </main>
</template>

<style>
/* importing the main css file of our application */
@import './assets/base.css';
</style>
