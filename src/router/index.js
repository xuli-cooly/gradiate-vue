import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from  '../views/login/login.vue'
import Welcome from '../views/welcome.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    component: Home,
    children: [
        {
          path:'/1-1',
          component:() => import('../views/userManagement/userinfo')
        },
        {
          path: '/welcome',
          component: Welcome
        },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
