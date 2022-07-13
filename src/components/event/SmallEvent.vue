<script setup>
// setting our props
defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <div style="text-align: center;">
      <img :src="poster" :alt="title + '_logo'" class="beauty-img" />
    </div>
    <h4 style="margin: 5px 0; text-align: center;">
      {{ title }}
    </h4>
    <div style="text-align: center;">
      <RouterLink class="view-btn" :to="'/event/' + id">
        {{ "توضیحات بیشتر" }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallEvent"
}
</script>

<style scoped>
.beauty-img {
  position: relative;
  width: 80px;
  border-radius: 5px;
  top: 0;
  /* setting a transition */
  transition: all 0.4s;
  -moz-transition: all 0.4s;
  -webkit-transition:all 0.4s;
  -o-transition: all 0.4s;
}

.beauty-img:hover {
  top: -5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
}

.view-btn {
  /* font size */
  font-size: 0.8em;
  /* other styles */
  border-radius: 5px;
  width: 50px;
  padding: 5px 10px;
  border: 1px solid black;
  text-decoration: none;
  outline: none;
  color: black;
  /* setting a transition */
  transition: all 0.4s;
  -moz-transition: all 0.4s;
  -webkit-transition:all 0.4s;
  -o-transition: all 0.4s;
}

.view-btn:hover {
  background-color: #ada489;
  color: black;
}
</style>