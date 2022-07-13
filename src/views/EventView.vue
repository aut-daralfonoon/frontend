<script setup>
// importing vue components
import Event from "../components/event/Event";
</script>

<template>
  <main>
    <Event :msg="'event: ' + this.$route.params.id" />
  </main>
</template>
