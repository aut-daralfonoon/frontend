<script setup>
// importing persian number
import PN from "persian-number"

// defining the event props
defineProps({
  id: {
    type: Number,
    required: true,
  },
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
  enable: {
    type: Boolean,
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
    <div class="e-text">
      <h2 style="border-bottom: 1px solid gray; padding: 5px 0;">
        {{ title }}
      </h2>
      <p style="margin: 40px 0;">
        {{ description }}
      </p>
      <small style="font-size: 0.6em;">
        {{ "تاریخ برگزاری رویداد" + " " + PN.convertEnToPe(date) }}
      </small>
      <RouterLink :to="'/register/' + id" v-if="enable" class="r-btn">
        {{ "ثبت نام" }}
      </RouterLink>
      <button v-else class="dr-btn">
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
.e-text {
  padding: 25px;
  width: 40%;
}

.e-image {
  padding: 0;
  width: 60%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.r-btn, .dr-btn {
  font-size: 0.7em;
  padding: 5px;
  color: white;
  background-color: #625c4e;
  outline: none;
  border: 1px solid #625c4e;
  border-radius: 2px;
  float: left;
  margin-left: 5px;
  text-decoration: none;
}

.dr-btn {
  text-decoration-line: line-through;
}

.r-btn:hover {
  color: #ffffff;
  background-color: #000000;
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

  .r-btn {
    float: none;
    display: block;
    margin: 5px auto;
  }
}
</style>
