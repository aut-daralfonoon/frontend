<template>
  <header class="header">
    <RouterLink to="/" active-class="active" style="display: inline-flex; align-items: center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
      </svg>
    </RouterLink>
    <RouterLink to="/events" active-class="active">
      {{ "رویدادها" }}
    </RouterLink>
    <RouterLink to="/about" active-class="active">
      {{ "درباره ما" }}
    </RouterLink>
    <img src="../assets/images/logo.jpg" alt="logo" class="header-logo" />
  </header>
  <button id="toggle-btn" class="t-btn" v-on:click="toggle_display">
    {{ this.c_up }}
  </button>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // up icon
      c_up: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-caret-up-square-fill\" viewBox=\"0 0 16 16\">\n" +
          "  <path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z\"/>\n" +
          "</svg>",
      // down icon
      c_down: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-caret-down-square-fill\" viewBox=\"0 0 16 16\">\n" +
          "  <path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z\"/>\n" +
          "</svg>"
    }
  },
  mounted() {
    // calling the toggle display for the first time
    this.toggle_display()
  },
  methods: {
    // this method toggles the navbar view
    toggle_display() {
      const el = document.getElementsByClassName("header").item(0);
      const btn = document.getElementById("toggle-btn")
      if (el.style.height === "70px") {
        el.style.height = "0";
        el.style.padding = "0"
        btn.innerHTML = this.c_down
      } else {
        el.style.height = "70px";
        el.style.padding = "10px 20px";
        btn.innerHTML = this.c_up
      }
    }
  }
}
</script>

<style scoped>
/* Style the header with a background and some padding */
.header {
  overflow: hidden;
  background-color: #ffffff;
  padding: 10px 20px;
  height: 70px;

  box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.39);

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
  margin-left: 6px;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #000000;
  color: #ffffff;
}

.header-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
}

/* Style the active/current link*/
.active {
  background-color: #625c4e;
  color: white !important;
}

.t-btn {
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 4px 10px;
  display: block;
  margin-right: 20px;
  background-color: #ffffff;
  border: 0 solid black;
  outline: none;
  color: black;
}

.t-btn:hover {
  background-color: #bbbbbb;
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