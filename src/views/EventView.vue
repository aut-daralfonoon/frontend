<script setup>
// importing vue components
import FullEvent from "../components/event/FullEvent";
</script>

<template>
  <main>
    <FullEvent :msg="'event: ' + this.$route.params.id" />
  </main>
</template>
