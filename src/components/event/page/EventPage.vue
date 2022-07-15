<script setup>
// defining the event props
import Event from "./Event.vue";
import Company from "./Company.vue";
import Presenter from "./Presenter.vue";

defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <main>
    <button v-on:click="current = 'event'">
      {{ "رویداد" }}
    </button>
    <button v-on:click="current = 'presenter'">
      {{ "برگزارکننده" }}
    </button>
    <button v-on:click="current = 'company'">
      {{ "اسپانسر" }}
    </button>
    <Event
        v-if="current === 'event'"
        class="e-container"
        :title="event.title"
        :description="event.description"
        :date="event.date"
        :poster="event.poster"
    />
    <Presenter
        v-else-if="current === 'presenter'"
        class="e-container"
        :name="event.presenter.name"
        :title="event.presenter.title"
        :description="event.presenter.description"
        :image="event.presenter.image"
    />
    <Company
        v-else-if="current === 'company'"
        class="e-container"
        :name="event.presenter.company.name"
        description="Something"
        :logo="event.presenter.company.logo"
    />
  </main>
</template>

<script>
// importing the event store
import { useEventsStore } from "../../../stores/events";

export default {
  name: "EventPage",
  data() {
    return {
      current: "event",
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

@media screen and (max-width: 1000px) {
  .e-container {
    flex-direction: column;
    text-align: center;
    width: 80%;
  }
}
</style>