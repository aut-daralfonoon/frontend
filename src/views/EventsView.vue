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
          v-for="event in useEventsStore().getAllEvents(this.index)"
          :id="event.id"
          :title="event.title"
          :poster="event.poster"
          class="event-box"
      ></SmallEvent>
    </div>
    <div class="btn-row">
      <button
          v-for="index in useEventsStore().getIndexes" v-on:click="this.index = index.key"
          v-bind:class="index.key === this.index ? 'btn-row-active' : ''"
      >
        {{ index.value }}
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "EventsView",
  data() {
    return {
      index: 0
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

.btn-row {
  display: flex;
  justify-content: center;
}

.btn-row > button {
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  margin: 0 2px;

  background-color: #efe1ba;
  border: 1px solid #efe1ba;
  border-radius: 2px;
  color: black;
}

.btn-row > button:hover {
  background-color: #ada489 !important;
  border: 1px solid #ada489 !important;
  color: white;
}

.btn-row-active {
  background-color: #625c4e !important;
  border-color: #625c4e !important;
  color: white !important;
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
