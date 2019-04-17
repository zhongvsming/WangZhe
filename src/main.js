import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import { Carousel,CarouselItem,Tabs,TabPane } from 'element-ui';
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Tabs.name,Tabs);
Vue.component(TabPane.name,TabPane)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
