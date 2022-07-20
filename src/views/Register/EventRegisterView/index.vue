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
import { fetchEventRegisterApi } from "./request";
import { useNotificationStore } from "../../../stores/notification";
import { validateEventId, validateEmail } from "../../../utils/validators";

export default {
  name: "EventRegisterView",
  data() {
    return {
      email: ""
    }
  },
  methods: {
    send() {
      const id = Number(this.$route.params.id)
      if (validateEventId(id) && validateEmail(this.email)) {
        fetchEventRegisterApi(id, this.email)
            .then(() => {
              useNotificationStore().submit("ثبت نام شما انجام شد", "normal")
              this.$router.push('/events')
            })
            .catch(() => {
              useNotificationStore().submit("در ثبت نام شما خطایی رخ داده است.", "warn")
            })
      } else {
        useNotificationStore().submit("صحت اطلاعات وارد شده مورد تایید نمی‌باشد", "danger")
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
