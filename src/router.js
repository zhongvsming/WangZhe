import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'
import Hero from './components/hero/Hero.vue'
import Order from './components/order/Order.vue'
import Mine from './components/mine/Mine.vue'
import BaoLiao from './components/home/BaoLiao.vue'
import YingDi from './components/home/YingDi.vue'
import ChuanCheng from './components/home/ChuanCheng.vue'
import SaiShi from './components/home/SaiShi.vue'
import Artical from './components/home/Artical.vue'
import Login from './components/mine/login.vue'
import Account from './components/mine/Account.vue'
import Suggestion from './components/mine/Suggestion.vue'
import Agreement from './components/mine/Agreement.vue'

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
      // children:[
      //   {path:'',component:Spcific},
      //   {path:'/spcific',component:Spcific}
      // ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    // Home子页面
    {
      path: '/home/baoliao',
      name: 'baoliao',
      component: BaoLiao
    },
    {
      path: '/home/yingdi',
      name: 'yingdi',
      component: YingDi
    },
    {
      path: '/home/chuancheng',
      name: 'chuancheng',
      component: ChuanCheng
    },
    {
      path: '/home/saishi',
      name: 'saishi',
      component: SaiShi
    },
    {
      path: '/home/artical',
      name: 'artical',
      component: Artical
    },
    // Mine子页面
    {
      path: '/mine/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mine/account',
      name: 'account',
      component: Account
    },
    {
      path: '/mine/suggestion',
      name: 'suggestion',
      component: Suggestion
    },
    {
      path: '/mine/agreement',
      name: 'agreement',
      component: Agreement
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
