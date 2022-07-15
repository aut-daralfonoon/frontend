<script setup>
// importing the event store
import { useEventsStore } from "../../stores/events"
</script>

<template>
  <div class="btn-row">
    <button
        v-if="this.index+useEventsStore().getStep < useEventsStore().getTotalNumberOfEvents"
        v-on:click="update(this.index+useEventsStore().getStep)"
        style="width: 60px;"
    >
      {{ "بعدی" }}
    </button>
    <button v-else class="span-row" style="width: 60px;">
      {{ "بعدی" }}
    </button>
    <button
        v-for="index in useEventsStore().getIndexes"
        v-on:click="update(index.key)"
        v-bind:class="index.key === this.index ? 'btn-row-active' : ''"
    >
      {{ index.value }}
    </button>
    <button
        v-if="this.index-useEventsStore().getStep >= 0"
        v-on:click="update(this.index-useEventsStore().getStep)"
        style="width: 60px;"
    >
      {{ "قبلی" }}
    </button>
    <button v-else class="span-row" style="width: 60px;">
      {{ "قبلی" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "EventSection",
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    update(value) {
      this.index = value
      this.$emit("updateIndex", this.index)
    }
  }
}
</script>

<style scoped>
.btn-row {
  margin-top: 20px;
  /* flex configs */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

.span-row {
  background-color: gray !important;
  border: 1px solid gray !important;
  border-radius: 2px !important;
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
</style>