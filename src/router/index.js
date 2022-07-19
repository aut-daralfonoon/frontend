import { createRouter, createWebHistory } from 'vue-router'

// importing views
import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import AllEventsView from '../views/event/all-events/AllEventsView.vue'
import SingleEventView from '../views/event/single-event/SingleEventView.vue'
import EventRegisterView from '../views/event/register/EventRegisterView.vue'


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
