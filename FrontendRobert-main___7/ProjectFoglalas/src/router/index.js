import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Foglalas.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'foglalas',
      component: HomeView,
    },

    {
      path: '/szolgaltatas',
      name: 'szolgaltatas',
      component: () => import('../views/Szolgaltatas.vue'),
    },
  ],
})

export default router
