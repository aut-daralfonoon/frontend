// importing store defining from pinia.js
import { defineStore } from 'pinia'

export const useErrorsStore = defineStore({
    id: 'errors',
    state: () => ({
        withError: false,
        errorMessage: "خطایی رخ داده است",
        errorType: ""
    }),
    getters: {
        haveAnyErrors: (state) => {
            return state.withError
        },
        getMessage: (state) => {
            return state.errorMessage
        },
        getType: (state) => {
            return state.errorType
        }
    },
    actions: {
        reset() {
            this.withError = false
        },
        sumbitError(msg, type) {
            this.withError = true
            this.errorMessage = msg
            this.errorType = type
        }
    }
})