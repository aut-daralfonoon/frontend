<script setup>
// defining the event props
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="e-container">
    <div class="e-text">
      <h2 style="border-bottom: 1px solid gray; padding: 5px 0;">
        {{ title }}
      </h2>
      <p style="margin: 15px 0;">
        {{ description }}
      </p>
      <small style="font-size: 0.6em;">
        {{ "تاریخ برگزاری رویداد" + " " + date }}
      </small>
      <button class="r-btn">
        {{ "ثبت نام" }}
      </button>
    </div>
    <img class="e-image" :src="poster" alt="event poster" />
  </div>
</template>

<script>
export default {
  name: "Event",
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

.r-btn {
  font-size: 0.7em;
  padding: 3px;
  color: white;
  background-color: #625c4e;
  outline: none;
  border: 1px solid #625c4e;
  border-radius: 2px;
  float: left;
  margin-left: 5px;
}

.r-btn:hover {
  color: black;
  background-color: #ada489;
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

  .r-btn {
    float: none;
    display: block;
    margin: 5px auto;
  }
}
</style>
