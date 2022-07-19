<script setup>
// importing view component
import Header from "./components/Header.vue";
import ErrorBox from "./components/ErrorBox.vue";

// importing router link and router view
import { RouterView } from 'vue-router'

// importing the error store
import { useErrorsStore } from "./stores/errors/errors";
</script>

<template>
  <main v-bind:class="this.$route.name === 'home' ? 'main-bg' : ''">
    <!-- Header component -->
    <Header v-if="this.$route.name !== 'home'"></Header>
    <!-- Error component -->
    <ErrorBox
        v-if="useErrorsStore().haveAnyErrors"
        :message="useErrorsStore().getMessage"
        :type="useErrorsStore().getType"
    />
    <!-- Router view -->
    <RouterView />
  </main>
</template>

<script>
// importing the event store
import { useEventsStore } from "./stores/events/events";

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
