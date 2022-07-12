<script setup>
</script>

<template>
  <main>
    <div class="big-box">
      <!-- looping in all events and creating theirs links -->
      <div v-for="event in eventStore.getAllEvents">
        <h3>
          {{ event.title }}
        </h3>
        <div>
          <img :src="event.poster" :alt="event.title + '_logo'" class="beauty-img" />
        </div>
        <RouterLink class="view-btn" :to="'/event/' + event.id">
          More
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
import { useEventsStore } from "../stores/events"

export default {
  data() {
    return {
      eventStore: useEventsStore(),
    }
  }
}
</script>

<style scoped>
.big-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.beauty-img {
  width: 100px;
  border-radius: 5px;
}

.view-btn {
  border-radius: 5px;
  width: 50px;
  padding: 0 10px;
  border: 1px solid black;
  text-decoration: none;
  outline: none;
  color: black;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.view-btn:hover {
  border-radius: 10px;
  border: 1px solid #5c5c5c;
  color: #5c5c5c;
  transition: all 0.8s
}
</style>
