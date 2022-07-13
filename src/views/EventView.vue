<script setup>
// importing vue components
import Event from "../components/event/Event.vue";

// importing the event store
import { useEventsStore } from "../stores/events"
</script>

<template>
  <main>
    <!-- creating an event component -->
    <Event
        v-if="useEventsStore().isEventValid(Number(this.$route.params.id))"
        :id="Number(this.$route.params.id)"
    />
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