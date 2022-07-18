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
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "ErrorBox",
  methods: {
    selectClass() {
      console.log(this.type)
      switch (this.type) {
        case 'warn':
          return 'warn'
        case 'danger':
          return 'danger'
        default:
          return 'normal'
      }
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
  background-color: yellow;
  color: black;
}

.danger {
  background-color: red;
  color: white;
}

.normal {
  background-color: #bebeff;
  color: blue;
}
</style>