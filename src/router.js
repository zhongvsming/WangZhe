import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'
import Hero from './components/hero/Hero.vue'
import Spcific from './components/hero/HeroSpci.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/hero',
      name: 'hero',
      component: Hero,
      children:[
        {path:'',component:Spcific},
        {path:'/spcific',component:Spcific}
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  linkActiveClass:'mui-active'
})
