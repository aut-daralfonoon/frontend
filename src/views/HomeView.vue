<script setup>
// importing vue components
import SmallEvent from "../components/event/SmallEvent.vue";

// importing the event store
import { useEventsStore } from "../stores/events"
</script>

<template>
  <main>
    <div class="big-box">
      <!-- looping in all events and creating theirs links -->
      <div v-for="event in useEventsStore().getAllEvents">
        <SmallEvent
            :id="event.id"
            :title="event.title"
            :poster="event.poster"
        ></SmallEvent>
      </div>
    </div>
  </main>
</template>

<style scoped>
.big-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
