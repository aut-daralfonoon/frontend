<template>
  <main class="ab-container">
    <h1 style="border-bottom: 1px solid black; font-size: 1.5em; margin-bottom: 40px;">
      {{ "ثبت نام در رویداد " }}
    </h1>
    <div class="r-row">
      <span style="flex-grow: 2;">
      <span style="margin-left: 20px;">
        {{ "لطفا ایمیل خود را وارد کنید:" }}
      </span>
      <input class="r-input" type="email" v-model="email" placeholder="ali@gmail.com" />
    </span>
      <button class="r-btn" v-on:click="send">
        {{ "ارسال" }}
      </button>
    </div>
  </main>
</template>

<script>
// importing registration api
import { sendRegistration } from "../../api/register";
// importing errors store
import { useErrorsStore } from "../../stores/errors";
// importing vue router
import router from "../../router";

export default {
  name: "RegisterView",
  data() {
    return {
      email: ""
    }
  },
  methods: {
    async send() {
      let err = await sendRegistration(this.$route.params.id, this.email)
      if (err == null) {
        await router.push('/events')
      } else {
        useErrorsStore().submitError("در ثبت نام شما خطایی رخ داده است.", "warn")
      }
    }
  }
}
</script>

<style scoped>
.ab-container {
  width: 70%;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  padding: 30px;

  border: 1px solid #ffffff;
  border-radius: 5px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.r-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.r-btn {
  padding: 3px 10px;
  width: 60px;

  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 2px;
  color: black;
}

.r-btn:hover {
  background-color: #000000;
  border: 1px solid #000000;
  color: #ffffff;
}

.r-input {
  padding: 3px 10px;
  direction: ltr;
  width: 50%;
}
</style>
