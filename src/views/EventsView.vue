<script setup>
// importing vue components
import SmallEvent from "../components/event/SmallEvent.vue";
import EventSection from "../components/event/EventSection.vue";

// importing the event store
import { useEventsStore } from "../stores/events"
</script>

<template>
  <main>
    <!-- x container holds the events in home view -->
    <div class="x-container">
      <!-- looping in all events and creating theirs links -->
      <SmallEvent
          v-for="event in useEventsStore().getAllEvents(this.index)"
          :id="event.id"
          :title="event.title"
          :poster="event.poster"
          class="event-box"
      ></SmallEvent>
      <!-- opening the events section -->
      <EventSection @update-index="this.updateIndex" />
    </div>
  </main>
</template>

<script>
export default {
  name: "EventsView",
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    updateIndex(value) {
      this.index = value
    }
  }
}
</script>

<style scoped>
.x-container {
  padding: 50px 50px;
  /* flex configs */
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
