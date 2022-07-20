<script setup>
import EventPage from "./components/EventPage.vue";
import { validateEventId } from "../../../utils/validators";
</script>

<template>
  <main>
    <!-- creating an event component -->
    <EventPage
        v-if="validateEventId(this.id)"
        :id="Number(this.id)"
    />
    <!-- error handling for incorrect events -->
    <h3 v-else class="center-text">
      {{ "متاسفانه رویداد انتخابی شما یافت نشد!" }}
    </h3>
  </main>
</template>

<script>
export default {
  name: "SingleEventView",
  data() {
    return {
      id: Number(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>