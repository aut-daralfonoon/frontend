<script setup>
defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="error-b" v-bind:class="selectClass()">
    <span>
      {{ message }}
    </span>
    <button v-on:click="reset()" class="e-btn">
      {{ "بستن" }}
    </button>
  </div>
</template>

<script>
// importing the errors store
import { useErrorsStore } from "../stores/errors";

export default {
  name: "ErrorBox",
  methods: {
    selectClass() {
      switch (this.type) {
        case 'warn':
          return 'warn'
        case 'danger':
          return 'danger'
        default:
          return 'normal'
      }
    },
    reset() {
      useErrorsStore().reset()
    }
  }
}
</script>

<style scoped>
.error-b {
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px;
}

.warn {
  background-color: #ffff9a;
  color: black;
}

.danger {
  background-color: #ff4f4f;
  color: white;
}

.normal {
  background-color: #bebeff;
  color: blue;
}

.e-btn {
  float: left;
  background-color: inherit;
  border: 1px solid black;
  padding: 0 10px;
  outline: none;
  border-radius: 2px;
}

.e-btn:hover {
  color: #7c7c7c;
  border-color: #7c7c7c;
}
</style>