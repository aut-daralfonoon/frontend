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
        {{ "انجمن علمی دانشجویی دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر" }}
      </small>
    </div>
  </main>
</template>

<script>
// the following script does the header animation in home page
const elementID = "inc-name";
const text = "دارالفنون امیرکبیر";
let index = 0;

// write function updates the header
function write() {
  // update time is 0.3 seconds
  let time = 300;
  // creating the message
  let message = text.slice(0, index)
  // updating index
  index++;
  if (index === text.length + 1) {
    index = 0;
    // after the message is complete wait 3 seconds
    time = 3000;
  } else {
    message = message + "|";
  }

  // get the element and update the text
  document.getElementById(elementID).innerText = message;

  // recall this function
  setTimeout(write, time);
}

export default {
  name: "HomeView",
  mounted() {
    // when mounted, call the script for header change
    write();
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
