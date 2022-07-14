import { createRouter, createWebHistory } from 'vue-router'

// importing views
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EventsView from '../views/EventsView.vue'
import EventView from '../views/EventView.vue'


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
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: '/event/:id',
      name: 'event',
      component: EventView,
    }
  ]
})

export default router
