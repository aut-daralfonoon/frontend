<script setup>
// importing vue components
import FullEvent from "../components/event/Event";
</script>

<template>
  <main>
    <FullEvent :msg="'event: ' + this.$route.params.id" />
  </main>
</template>
