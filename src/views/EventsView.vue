<script setup>
// importing vue components
import SmallEvent from "../components/event/SmallEvent.vue";

// importing the event store
import { useEventsStore } from "../stores/events"
</script>

<template>
  <main>
    <!-- x container holds the events in home view -->
    <div class="x-container">
      <!-- looping in all events and creating theirs links -->
      <SmallEvent
          v-for="event in useEventsStore().getAllEvents"
          :id="event.id"
          :title="event.title"
          :poster="event.poster"
          class="event-box"
      ></SmallEvent>
    </div>
  </main>
</template>

<style scoped>
.x-container {
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.event-box {
  margin: 15px;
}

@media screen and (max-width: 800px) {
  .x-container {
    flex-direction: column;
  }

  .event-box {
    margin: 20px 5px;
  }
}
</style>
