<script setup>
// importing view component
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";

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
    <router-view class="little-pad" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
    <!-- Footer component -->
    <Footer v-if="this.$route.name !== 'home'"></Footer>
  </main>
</template>

<style>
/* importing the main css file of our application */
@import './assets/base.css';

.little-pad {
  padding: 5px 0;
}
</style>
