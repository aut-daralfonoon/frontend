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
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
/* Style the header with a background and some padding */
.header {
  overflow: hidden;
  background-color: #efe1ba;
  padding: 5px 20px;
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

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: right;
  }
}
</style>