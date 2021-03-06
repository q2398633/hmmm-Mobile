import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Login from '@/views/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
