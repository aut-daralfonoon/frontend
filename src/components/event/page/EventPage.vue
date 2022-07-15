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
    <Event
        :title="event.title"
        :description="event.description"
        :date="event.date"
        :poster="event.poster"
    />
    <Presenter
        :name="event.presenter.name"
        :title="event.presenter.title"
        :description="event.presenter.description"
        :image="event.presenter.image"
    />
    <Company
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
      event: useEventsStore().getEventById(this.id)
    }
  },
}
</script>

<style scoped>

</style>