<script setup>
</script>

<template>
  <main>
    <div class="row">
      <h1 id="inc-name" style="margin-bottom: 40px; font-size: 2.5em;">
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
      <small style="margin-top: 20px;">
        {{ "کاری از انجمن علمی دانشجویی دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر" }}
      </small>
    </div>
  </main>
</template>

<script>
// importing the handler
import Animation from "./animation";

export default {
  name: "HomeView",
  data() {
    return {
      handler: Animation
    }
  },
  mounted() {
    // when mounted, call the script for header change
    this.handler.write()
  }
}
</script>

<style scoped>
.row {
  height: 90vh;
  /* flex configs */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 0;
  /* flex configs */
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
