<script setup>
// importing view component
import Header from "./components/Header.vue";
import MessageBox from "./components/MessageBox.vue";

// importing router link and router view
import { RouterView } from 'vue-router'

// importing the error store
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
    <!-- Router view -->
    <RouterView />
  </main>
</template>

<script>
// importing the event store and notification store
import { useEventsStore } from "./stores/events";
import { useNotificationStore } from "./stores/notification";

export default {
  name: "App",
  created() {
    // getting our events
    useEventsStore().importEvents()

    // check the events
    if (useEventsStore().getTotalNumberOfEvents === 0) {
      useNotificationStore().submit("در ارتباط با سرور اصلی مشکلی پیش آمده است", "danger")
    } else {
      useNotificationStore().submit("خوش آمدید", "ok")
    }
  }
}
</script>

<style>
/* importing the main css file of our application */
@import './assets/base.css';

</style>
