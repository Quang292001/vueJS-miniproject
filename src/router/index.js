import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product.list',
  
    component: () => import( '../views/products/List.vue')
  },
  {
    path: '/product/create',
    name: 'product.create',
  
    component: () => import( '../views/products/Form.vue')
  },
  ,
  {
    path: '/product/edit/:id',
    name: 'product.edit',
  
    component: () => import( '../views/products/Form.vue')
  },
  {
    path: '/user',
    name: 'user.list',
  
    component: () => import( '../views/user/List.vue')
  },
  {
    path: '/user/create',
    name: 'user.create',
  
    component: () => import( '../views/user/Form.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
