import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('@/views/Login')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/recommend')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news')
  },
  {
    path: '/MV',
    name: 'MV',
    component: () => import('@/views/MV')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
