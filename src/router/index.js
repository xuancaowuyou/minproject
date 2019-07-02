import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
import home from '@/pages/home'
import details from '@/pages/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/one/:id',
      name:'one',
      component:One
    },
    {
      path:'/two',
      component:Two
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/details',
      name:'details',
      component:details
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
