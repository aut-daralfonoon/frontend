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
  <div>
    <div class="e-text">
      <h2 style="border-bottom: 1px solid gray; padding: 5px 0;">
        {{ name }}
      </h2>
      <h5 style="margin: 20px 0;">
        {{ title }}
      </h5>
      <p style="margin: 30px 0;">
        {{ description }}
      </p>
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
.e-text {
  padding: 25px;
  width: 60%;
}

.e-image {
  padding: 0;
  width: 40%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

@media screen and (max-width: 1000px) {
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
