// importing store defining from pinia.js
import { defineStore } from 'pinia'

export const useErrorsStore = defineStore({
    id: 'notification',
    state: () => ({
        enable: false,
        message: "خطایی رخ داده است",
        type: ""
    }),
    getters: {
        isOn: (state) => {
            return state.enable
        },
        getMessage: (state) => {
            return state.message
        },
        getType: (state) => {
            return state.type
        }
    },
    actions: {
        reset() {
            this.enable = false
        },
        submit(msg, type) {
            this.enable = true
            this.message = msg
            this.type = type
        }
    }
})