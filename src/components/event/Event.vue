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
    <div>
      <div>
        <img :src="event.poster" alt="poster" width="100" />
      </div>
      <div>
        <div>
          <div>
            <img :src="event.presenter.image" alt="presenter" />
          </div>
          <div>
            <img :src="event.presenter.company.logo" alt="company" />
          </div>
        </div>
        <div>
          <h3>
            {{ event.title }}
          </h3>
          <p>
            {{ event.description }}
          </p>
          <span>
            Time: {{ event.time }}
          </span>
          <span>
            Presenter: {{ event.presenter.name }}
          </span>
        </div>
      </div>
    </div>
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