import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Article from '@/pages/article/article.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Article',
    component: Article
  },
  {
    path: '/archive',
    name: 'Archive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '@/pages/archive/archive.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "About" */ '@/pages/project/project.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "About" */ '@/pages/message/message.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
