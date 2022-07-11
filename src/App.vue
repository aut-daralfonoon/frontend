<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About us
  </RouterLink>
  <RouterLink to="/event/1">
    Event 1
  </RouterLink>
  <RouterLink to="/event/2">
    Event 2
  </RouterLink>
  <RouterView />
</template>

<style>

@import './assets/base.css';

</style>
