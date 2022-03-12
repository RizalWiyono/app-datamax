import Vue from 'vue'
import VueRouter from 'vue-router'
import Stopwatch from '../views/Stopwatch.vue'
import NumberView from '../views/Number.vue'
import Api from '../views/RandomUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'number',
    component: NumberView
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: Stopwatch
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
