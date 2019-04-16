import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import { Carousel,CarouselItem,Tabs,TabPane } from 'element-ui';
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Tabs.name,Tabs);
Vue.component(TabPane.name,TabPane)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
