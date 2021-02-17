import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/My/Login'
import Reg from '../views/My/Reg'
import MyInfo from '../views/My/MyInfo'
import MyBasic from '../views/My/MyBasic'
import MyOrder from '../views/My/MyOrder'
import MyCoupon from '../views/My/MyCoupon'
import MySet from '../views/My/MySet'


Vue.use(VueRouter)

const routes = [
  {
    path:"/myset",
    component:MySet,
    meta:{index:4},
  },
  {
    path:"/mycoupon",
    component:MyCoupon,
    meta:{index:4},
  },
  {
    path:"/myorder/:oid",
    component:MyOrder,
    meta:{index:4},
    props:true
  },
  {
    path:"/mybasic",
    component:MyBasic,
    meta:{index:4}
  },
  {
    path:"/myinfo",
    component:MyInfo,
    meta:{index:3},
  },
  {
    path:'/reg',
    component:Reg,
    meta:{index:0}
  },
  {
    path: '/login',
    component: Login,
    meta:{index:5}
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
