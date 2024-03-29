<script setup>
// importing vue components
import Event from "./Event.vue";
import Company from "./Company.vue";
import Presenter from "./Presenter.vue";

// defining the event page props
defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <main class="out-container">
    <button
        class="select-btn"
        v-bind:class="current === 'event' ? 'active-btn' : ''"
        v-on:click="current = 'event'"
    >
      {{ "رویداد" }}
    </button>
    <button
        class="select-btn"
        v-bind:class="current === 'presenter' ? 'active-btn' : ''"
        v-on:click="current = 'presenter'"
    >
      {{ "برگزارکننده" }}
    </button>
    <button
        class="select-btn"
        v-bind:class="current === 'company' ? 'active-btn' : ''"
        v-on:click="current = 'company'"
    >
      {{ "اسپانسر" }}
    </button>
    <Event
        v-if="current === 'event'"
        class="e-container"
        :id="event.id"
        :title="event.title"
        :description="event.description"
        :date="event.date"
        :enable="event.enable"
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
        :name="event.company.name"
        :description="event.company.description"
        :logo="event.company.logo"
    />
  </main>
</template>

<script>
// importing the event store
import { useEventsStore } from "../../../../stores/events";

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
.out-container {
  /* container style */
  width: 60%;
  margin: 40px auto;
}

.e-container {
  /* flex */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* other styles */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  border-radius: 5px;

  /* colors */
  background-color: #ffffff;

  /* setting a transition */
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
}

.e-container:hover {
  /* other styles */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.65), 0 6px 20px 0 rgba(0, 0, 0, 0.54);
}

.select-btn {
  position: relative;
  bottom: -20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 0.6em;
  color: #000000;
  outline: none;
  border: 1px solid #000000;
  background-color: #ffffff;
  margin-left: 10px;

  /* setting a transition */
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
}

.select-btn:hover {
  border: 1px solid #000000;
  background-color: #000000;
  color: #ffffff;
}

.active-btn {
  background-color: #7a7260;
  border-color: #7a7260;
  color: #ffffff;
}

@media screen and (max-width: 1000px) {
  .e-container {
    flex-direction: column;
    text-align: center;
    width: 80%;
  }
}
</style>