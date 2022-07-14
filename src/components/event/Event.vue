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
  <div class="e-container">
    <div class="e-text">
      {{ event.title }}
    </div>
    <img class="e-image" :src="event.poster" alt="event poster" />
  </div>
</template>

<script>
// importing the event store
import { useEventsStore } from "../../stores/events";

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
.e-container {
  /* flex */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* container style */
  width: 60%;
  margin: 40px auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);;

  /* colors */
  background-color: #efe1ba;
}

.e-text {
  padding: 10px;
  width: 60%;
}

.e-image {
  padding: 0;
  width: 40%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

@media screen and (max-width: 800px) {
  .e-container {
    flex-direction: column;
    text-align: center;
    width: 80%;
  }

  .e-text {
    width: 100%;
  }

  .e-image {
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>