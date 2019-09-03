import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details'
import Home from '@/pages/home'
import Order from '@/pages/order'
import Find from '@/pages/find'
import My from '@/pages/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path:'/my',
      name:'my',
      component:My
    },    
    {
      path:'/details',
      name:'details',
      component:Details
    },
  ]
})
