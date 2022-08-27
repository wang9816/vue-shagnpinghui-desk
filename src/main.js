import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store";
import typeNav from "@/components/TypeNav"
import "./plugins/swiper"
import "./mock/mockServer"
import "./assets/fonts/iconfont/iconfont.css"
import MyPagination from "./components/Pagination"
import "./plugins/element"
import * as API from "@/api"
import "@/plugins/validate"

Vue.component(typeNav.name,typeNav)
Vue.component(MyPagination.name,MyPagination)
//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/isloading.gif'
Vue.use(VueLazyload,{
  loading,
})
//表单验证

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    //Without using vuex, hook the interface request function to the prototype of Vue
    Vue.prototype.$API = API

  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
