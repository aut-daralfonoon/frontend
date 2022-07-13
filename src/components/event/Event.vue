<script setup>
// importing the event store
import { useEventsStore } from "../../stores/events";

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
      event: useEventsStore().getEventById(Number(this.$route.params.id))
    }
  },
}
</script>

<style scoped>

</style>