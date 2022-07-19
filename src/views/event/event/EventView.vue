<script setup>
// importing vue components
import EventPage from "../../../components/event/page/EventPage.vue";

// importing the event store
import { useEventsStore } from "../../../stores/events"
</script>

<template>
  <main>
    <!-- creating an event component -->
    <EventPage
        v-if="useEventsStore().isEventValid(Number(this.$route.params.id))"
        :id="Number(this.$route.params.id)"
    />
    <!-- error handling for incorrect events -->
    <h3 v-else class="center-text">
      {{ "متاسفانه رویداد انتخابی شما یافت نشد!" }}
    </h3>
  </main>
</template>

<style scoped>
.center-text {
  text-align: center;
}
</style>