<script setup>
// importing vue components
import Event from "../components/event/Event.vue";
</script>

<template>
  <main>
    <!-- creating an event component -->
    <Event :msg="'event: ' + this.$route.params.id" />
  </main>
</template>
