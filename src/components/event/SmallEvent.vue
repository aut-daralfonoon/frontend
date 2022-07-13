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
    <div>
      <img :src="poster" :alt="title + '_logo'" class="beauty-img" />
    </div>
    <h4 style="margin: 5px 0;">
      {{ title }}
    </h4>
    <RouterLink class="view-btn" :to="'/event/' + id">
      View More
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "SmallEvent"
}
</script>

<style scoped>
.beauty-img {
  width: 100px;
  border-radius: 5px;
}

.view-btn {
  border-radius: 5px;
  width: 50px;
  padding: 0 10px;
  border: 1px solid black;
  text-decoration: none;
  outline: none;
  color: black;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.view-btn:hover {
  border-radius: 10px;
  border: 1px solid #5c5c5c;
  color: #5c5c5c;
  transition: all 0.8s
}
</style>