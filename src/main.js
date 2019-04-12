import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EVueEchartsjs from './../packages/index.js'

Vue.use(EVueEchartsjs)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
