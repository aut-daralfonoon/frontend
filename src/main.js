import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const vueScrollToConfig = {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: -50,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
}

app.use(createPinia())
app.use(router)
app.use(VueScrollTo, vueScrollToConfig)

app.mount('#app')
