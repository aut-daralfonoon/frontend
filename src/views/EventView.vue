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
        v-if="useEventsStore().isEventValid(this.$route.params.id)"
        :msg="'event: ' + this.$route.params.id"
    />
    <h3 v-else>
      {{ "متاسفانه رویداد انتخابی یافت نشد!" }}
    </h3>
  </main>
</template>
