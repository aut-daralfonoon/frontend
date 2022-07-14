<script setup>
</script>

<template>
  <main>
   <div class="container">
     <RouterLink class="c-item c-item-right" to="events">
       {{ "رویدادها" }}
     </RouterLink>
     <RouterLink class="c-item c-item-left" to="about">
       {{ "درباره ما" }}
     </RouterLink>
   </div>
  </main>
</template>

<style scoped>
.container {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.c-item {
  font-size: 1.5em;
  padding: 10px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  width: 200px;
  text-align: center;
}

.c-item-right {
  background-color: #625c4e;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}

.c-item-left {
  background-color: #000000;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
}
</style>
