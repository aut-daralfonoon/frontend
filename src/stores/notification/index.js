// importing store defining from pinia.js
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore({
    id: 'notification',
    state: () => ({
        enable: false,
        message: "",
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