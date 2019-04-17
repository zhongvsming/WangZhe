import Vue from 'vue'
import App from './App.vue'
// 全局引入Element
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// import { Carousel,CarouselItem,Tabs,TabPane,RadioGroup } from 'element-ui';
// Vue.component(Carousel.name, Carousel);
// Vue.component(CarouselItem.name, CarouselItem);
// Vue.component(Tabs.name,Tabs);
// Vue.component(TabPane.name,TabPane)
// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
