import { createRouter, createWebHistory } from 'vue-router'

// importing views
import HomeView from '@/views/HomeView/index.vue'
import AboutView from '@/views/AboutView/index.vue'
import AllEventsView from '@/views/Event/AllEventsView/index.vue'
import SingleEventView from '@/views/Event/SingleEventView/index.vue'
import EventRegisterView from '@/views/Register/EventRegisterView/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: "/events", // all the events in home page
      name: "events",
      component: AllEventsView,
    },
    {
      path: '/event/:id', // a single event page
      name: 'event',
      component: SingleEventView,
    },
    {
      path: '/register/:id',
      name: 'register',
      component: EventRegisterView,
    }
  ]
})

export default router
