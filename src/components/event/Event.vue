<script setup>
// importing the event store
import { useEventsStore } from "../../stores/events";

// defining the event props
defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="green">{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      event: useEventsStore().getEventById(this.id)
    }
  },
}
</script>

<style scoped>

</style>