<script setup>
// importing view component
import Header from "./components/header/Header";
// importing router link and router view
import { RouterView } from 'vue-router'
// importing the event store
import { useEventsStore } from "./stores/events";

// downloading our events
useEventsStore().importEvents()
</script>

<template>
  <main>
    <Header></Header>
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
