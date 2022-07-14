<template>
  <header class="header">
    <RouterLink to="/" active-class="active">
      {{ "خانه" }}
    </RouterLink>
    <RouterLink to="/events" active-class="active">
      {{ "رویدادها" }}
    </RouterLink>
    <RouterLink to="/about" active-class="active">
      {{ "درباره ما" }}
    </RouterLink>
  </header>
  <button v-on:click="toggle_display">
    Click me
  </button>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    this.toggle_display()
  },
  methods: {
    toggle_display() {
      const el = document.getElementsByClassName("header").item(0);
      if (el.style.height === "55px") {
        el.style.height = "0";
        el.style.padding = "0"
      } else {
        el.style.height = "55px";
        el.style.padding = "5px 20px";
      }
    }
  }
}
</script>

<style scoped>
/* Style the header with a background and some padding */
.header {
  overflow: hidden;
  background-color: #efe1ba;
  padding: 5px 20px;
  height: 55px;
  /* setting a transition */
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition:all 0.5s;
  -o-transition: all 0.5s;
}

/* Style the header links */
.header a {
  font-size: 0.8em;
  float: right;
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  line-height: 25px;
  border-radius: 4px;
  margin-left: 2px;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ada489;
  color: black;
}

/* Style the active/current link*/
.active {
  background-color: #625c4e;
  color: white !important;
}

.t-btn {
  display: block;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header {
    overflow: scroll;
  }

  .header a {
    float: none;
    display: block;
    text-align: right;
  }
}
</style>