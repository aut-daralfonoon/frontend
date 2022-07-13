<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "FullEvent"
}
</script>

<style scoped>

</style>