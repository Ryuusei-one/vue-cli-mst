import Vue from 'vue'
import VueRouter from 'vue-router'

import system  from '@/router/system'
Vue.use(VueRouter)

const routes = [
  //首页路由地址
  {
    path:"/",
    name:"Layout",
    component:() =>import("@/views/Layout"),
    children:[
      ...system
    ]
  },

  //404路由地址
  {
    path:"*",
    name:"404",
    component:() =>import("@/views/404")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
