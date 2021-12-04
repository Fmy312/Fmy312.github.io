import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import toast from './components/common/toast/toast.js'
import VueLazyload from 'vue-lazyload'
/* 图片的懒加载 */
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(toast)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})
