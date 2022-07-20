<script setup>
import Header from "./components/Header.vue";
import MessageBox from "./components/MessageBox.vue";
import RoutesWithTransition from "./router/RoutesWithTransition.vue";
import { useNotificationStore } from "./stores/notification";
</script>

<template>
  <main v-bind:class="this.$route.name === 'home' ? 'main-bg' : ''">
    <!-- Header component -->
    <Header v-if="this.$route.name !== 'home'"></Header>
    <!-- Error component -->
    <MessageBox
        v-if="useNotificationStore().isOn"
        :message="useNotificationStore().getMessage"
        :type="useNotificationStore().getType"
    />
    <RoutesWithTransition />
  </main>
</template>

<script>
import { useEventsStore } from "./stores/events";

export default {
  name: "App",
  created() {
    // getting our events
    useEventsStore().importEvents()
  }
}
</script>

<style>
/* importing the main css file of our application */
@import './assets/base.css';
</style>
