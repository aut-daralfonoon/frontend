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
        <span style="display: inline-flex; align-items: center;">
          <span style="margin-left: 2px;">
            {{ "توضیحات بیشتر" }}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </span>
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
  border-color: #ada489;
  color: #ffffff;
}
</style>