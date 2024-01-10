import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TourDatesVue from '@/views/TourDates.vue'
import ContactVue from '@/views/Contact.vue'
import DiscographyVue from '@/views/Discography.vue'


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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tour',
      name: 'tour',
      component: TourDatesVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactVue
    },
    {
      path: '/discography',
      name: 'discography',
      component: DiscographyVue
    }
    
  ]
})

export default router
