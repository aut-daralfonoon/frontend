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
  <main v-bind:class="this.$route.name === 'home' ? 'main-bg' : ''">
    <!-- Header component -->
    <Header v-if="this.$route.name !== 'home'"></Header>
    <!-- Router view -->
    <RouterView />
  </main>
</template>

<style>
/* importing the main css file of our application */
@import './assets/base.css';

.main-bg {
  height: 100vh;
  background-image: url("./assets/logo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
