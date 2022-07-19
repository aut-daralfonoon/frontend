<script setup>
// importing vue components
import SmallEvent from "./components/SmallEvent.vue";
import EventSection from "./components/EventSection.vue";

// importing the event store
import { useEventsStore } from "../../../stores/events"
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
      <EventSection style="margin-top: 160px;" @update-index="this.updateIndex" />
    </div>
  </main>
</template>

<script>
export default {
  name: "AllEventsView",
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
  background-color: #ffffff;
  border-color: #ffffff;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.65), 0 6px 20px 0 rgba(0, 0, 0, 0.54);
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
