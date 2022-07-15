<script setup>
// defining the event props
defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>

</template>

<script>
// importing the event store
import { useEventsStore } from "../../../stores/events";

export default {
  name: "EventPage",
  data() {
    return {
      event: useEventsStore().getEventById(this.id)
    }
  },
}
</script>

<style scoped>

</style>