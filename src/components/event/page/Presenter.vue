<script setup>
// defining the presenter props
defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="e-container">
    <div class="e-text">
      <h2 style="border-bottom: 1px solid gray; padding: 5px 0;">
        {{ name }}
      </h2>
      <p style="margin: 15px 0;">
        {{ description }}
      </p>
      <small style="font-size: 0.6em;">
        {{ title }}
      </small>
    </div>
    <img class="e-image" :src="image" alt="presenter image" />
  </div>
</template>

<script>
export default {
  name: "Presenter"
}
</script>

<style scoped>
.e-container {
  /* flex */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* container style */
  width: 60%;
  margin: 40px auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);;

  /* colors */
  background-color: #efe1ba;
}

.e-text {
  padding: 20px;
  width: 60%;
}

.e-image {
  padding: 0;
  width: 40%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

@media screen and (max-width: 1000px) {
  .e-container {
    flex-direction: column;
    text-align: center;
    width: 80%;
  }

  .e-text {
    width: 100%;
  }

  .e-image {
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
