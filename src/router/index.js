import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/demo/Demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo',
    component: Demo
  },
  {
    path: '/user',
    name: 'user',
    component: Demo
  },
  {
    path: '/content',
    name: 'content',
    component: Demo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由拦截，防止跳墙操作
// router.beforeEach((to, from, next) => {
//   // 这里用sessionStorage存储用户信息，简单模拟路由跳转前先检测用户是否登陆
//   let userData = window.sessionStorage.getItem('userData')
//   if (userData) {
//     userData = JSON.parse(userData)
//   }
//   if (userData) {
//     next() // 已登录可以跳转任意路由
//   } else {
//     next('/login') // 未登录或登录态失效就进入登录页面
//   }
// })

export default router
