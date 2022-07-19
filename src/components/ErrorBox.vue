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
  <div class="er-container">
    <div class="error-b" v-bind:class="selectClass()">
    <span>
      {{ message }}
    </span>
      <button v-on:click="reset()" class="e-btn">
        {{ "بستن" }}
      </button>
    </div>
  </div>
</template>

<script>
// importing the errors store
import { useErrorsStore } from "../stores/errors/errors";

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
.er-container {
  width: 100%;
  margin: 20px 0;
}

.error-b {
  width: 50%;
  padding: 10px 20px;
  border-radius: 2px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.15);

  /* setting a transition */
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition:all 0.5s;
  -o-transition: all 0.5s;
}

.error-b:hover {
  position: relative;
  top: -2px;
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