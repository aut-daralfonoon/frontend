<script setup>
</script>

<template>
  <main>
    <div class="row">
      <h1 style="margin-bottom: 40px;">
        {{ "دارالفنون امیرکبیر" }}
      </h1>
      <div class="container">
        <RouterLink class="c-item c-item-right" to="events">
          {{ "رویدادها" }}
        </RouterLink>
        <RouterLink class="c-item c-item-left" to="about">
          {{ "درباره ما" }}
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script>

</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.container {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
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
  /* setting a transition */
  transition: all 0.4s;
  -moz-transition: all 0.4s;
  -webkit-transition:all 0.4s;
  -o-transition: all 0.4s;
}

.c-item-left {
  background-color: #000000;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  /* setting a transition */
  transition: all 0.4s;
  -moz-transition: all 0.4s;
  -webkit-transition:all 0.4s;
  -o-transition: all 0.4s;
}

.c-item-right:hover {
  background-color: #7a7260;
  width: 225px;
}

.c-item-left:hover {
  background-color: #333333;
  width: 225px;
}
</style>
