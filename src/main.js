// importing vue
import { createApp } from 'vue'
// importing pinia for store
import { createPinia } from 'pinia'

// import app component
import App from './App.vue'
// import vue router
import router from './router'

// creating a vue app
const app = createApp(App)

// using pinia and router
app.use(createPinia())
app.use(router)

// mount the vue to main div
app.mount('#app')
