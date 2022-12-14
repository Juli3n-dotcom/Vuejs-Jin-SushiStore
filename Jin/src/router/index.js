import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '',
      name: 'Accueil',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/menu',
      name: 'Carte',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    }
  ]
})

export default router
